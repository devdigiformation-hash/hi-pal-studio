import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

/**
 * POST /api/ai-analyze
 *
 * Secure server-side AI gateway. Secrets NEVER reach the browser — the provider
 * key is read from server env only. Primary provider: Cloudflare Workers AI;
 * optional OpenRouter fallback. If no provider is configured the route returns a
 * clear "not configured" response (the tool still works without AI).
 *
 * Body: { task: string, data: object, provider?: "cloudflare"|"openrouter" }
 * task ∈ explain | prioritize | rewrite-title | rewrite-description | faq |
 *        schema | alt-text | internal-links | content-brief | action-plan
 */
type Provider = { url: string; key: string; model: string };

function resolveProviders(prefer?: string): Provider[] {
  const env = (globalThis as any).process?.env || {};
  const chain: Provider[] = [];
  const cfA = (env.CLOUDFLARE_ACCOUNT_ID || "").trim();
  const cfT = (env.CLOUDFLARE_API_TOKEN || "").trim();
  const cf: Provider | null = cfA && cfT
    ? { url: `https://api.cloudflare.com/client/v4/accounts/${cfA}/ai/v1/chat/completions`, key: cfT, model: env.CLOUDFLARE_AI_MODEL || "@cf/meta/llama-3.3-70b-instruct-fp8-fast" }
    : null;
  const orK = (env.OPENROUTER_API_KEY || "").trim();
  const or: Provider | null = orK
    ? { url: "https://openrouter.ai/api/v1/chat/completions", key: orK, model: env.OPENROUTER_MODEL || "meta-llama/llama-3.3-70b-instruct" }
    : null;
  if (prefer === "openrouter" && or) chain.push(or);
  if (cf) chain.push(cf);
  if (or && !chain.includes(or)) chain.push(or);
  return chain;
}

const SYSTEM: Record<string, string> = {
  explain: "You are an expert SEO/AEO/GEO consultant. Explain the given audit issues in plain English: what each means, why it matters for search and AI answers, and the fix. Be concise and specific. No fluff.",
  prioritize: "You are an SEO lead. Given audit issues, return a prioritized action plan (Critical/High/Medium/Low) with the reasoning for the order. Base priority on impact and effort.",
  "rewrite-title": "Rewrite the page title for SEO and AI-answer clarity. 50-60 characters, primary keyword first, compelling. Return 3 options, one per line, no quotes.",
  "rewrite-description": "Write a meta description of 120-160 characters that answers the query directly and invites the click. Return 2 options.",
  faq: "From the page topic, write 5 genuinely useful FAQ questions with concise, factual answers (2-3 sentences each). These target answer engines. Return as Q/A pairs.",
  schema: "Suggest the JSON-LD schema types this page should use and output a minimal valid JSON-LD example for the most important one. Explain in one line why.",
  "alt-text": "Write concise, descriptive alt text for the described images. One per line.",
  "internal-links": "Suggest internal links for this page: anchor text + the kind of target page. Return a short list.",
  "content-brief": "Produce a content brief: search intent, target questions, H2 outline, entities to mention, and 5 long-tail keywords. Never invent search-volume numbers.",
  "action-plan": "Turn the audit into a clear, ordered action plan a small team can execute this week. Group by Critical/High/Medium. Be specific.",
};

export const Route = createFileRoute("/api/ai-analyze")({
  server: {
    handlers: {
      POST: async ({ request }: { request: Request }) => {
        const json = (data: unknown, status = 200) =>
          new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
        let body: any = {};
        try { body = await request.json(); } catch { return json({ ok: false, error: "Invalid request body." }, 400); }
        const task = String(body?.task || "");
        const sys = SYSTEM[task];
        if (!sys) return json({ ok: false, error: "Unknown task." }, 400);
        const providers = resolveProviders(body?.provider);
        if (!providers.length) {
          return json({ ok: false, configured: false, error: "AI is not configured on the server. Add CLOUDFLARE_ACCOUNT_ID + CLOUDFLARE_API_TOKEN (or OPENROUTER_API_KEY) to enable AI recommendations. The audit works without it." }, 200);
        }
        // Cap the payload sent to the model (privacy + token budget).
        const user = JSON.stringify(body?.data ?? {}).slice(0, 12000);
        let lastErr = "";
        for (const p of providers) {
          try {
            const ctrl = new AbortController();
            const timer = setTimeout(() => ctrl.abort(), 30000);
            const r = await fetch(p.url, {
              method: "POST",
              headers: { "Content-Type": "application/json", Authorization: `Bearer ${p.key}` },
              body: JSON.stringify({ model: p.model, temperature: 0.3, max_tokens: 900, messages: [{ role: "system", content: sys }, { role: "user", content: user }] }),
              signal: ctrl.signal,
            });
            clearTimeout(timer);
            if (!r.ok) { lastErr = `provider ${r.status}`; continue; }
            const d: any = await r.json();
            const text = String(d?.choices?.[0]?.message?.content || "").trim();
            if (text) return json({ ok: true, configured: true, task, text });
            lastErr = "empty response";
          } catch (e: unknown) {
            lastErr = e instanceof Error && e.name === "AbortError" ? "timeout" : "provider error";
          }
        }
        return json({ ok: false, configured: true, error: `AI provider unavailable (${lastErr}).` }, 502);
      },
    },
  },
});
