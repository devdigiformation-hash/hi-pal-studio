import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { analyzeHtml } from "@/lib/seo-audit";
import { safeFetchText } from "@/lib/ssrf";

/**
 * GET /api/seo-check?url=https://example.com/page
 *
 * Single-page audit. Server-side fetch (SSRF-guarded, 12s timeout, 3 MB cap)
 * so the browser can analyze any public URL without CORS. Returns the same
 * report the client produces from pasted HTML (one analyzer, src/lib/seo-audit).
 */
export const Route = createFileRoute("/api/seo-check")({
  server: {
    handlers: {
      GET: async ({ request }: { request: Request }) => {
        const json = (data: unknown, status = 200) =>
          new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
        const raw = new URL(request.url).searchParams.get("url") || "";
        if (!raw.trim()) return json({ ok: false, error: "Enter a URL, e.g. https://example.com/page." }, 400);
        try {
          const r = await safeFetchText(raw.trim(), { timeoutMs: 12000, maxBytes: 3 * 1024 * 1024 });
          if (!/html|xml/i.test(r.headers.get("content-type") || "") && !/<html/i.test(r.html)) {
            return json({ ok: false, error: "That URL did not return an HTML page." }, 415);
          }
          return json({ ok: true, report: analyzeHtml(r.html, r.finalUrl) });
        } catch (e: unknown) {
          return json({ ok: false, error: e instanceof Error ? e.message : "Could not fetch that URL." }, 400);
        }
      },
    },
  },
});
