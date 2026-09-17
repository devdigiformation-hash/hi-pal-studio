import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { scanSite } from "@/lib/site-scan";

/**
 * GET /api/site-scan?url=https://example.com&max=12
 *
 * Runs the "Scan my entire website" engine: robots.txt + sitemap + llms.txt
 * discovery, then a bounded, SSRF-guarded crawl + analysis. Honest counts only.
 */
export const Route = createFileRoute("/api/site-scan")({
  server: {
    handlers: {
      GET: async ({ request }: { request: Request }) => {
        const json = (data: unknown, status = 200) =>
          new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
        const params = new URL(request.url).searchParams;
        const url = params.get("url") || "";
        const max = Math.max(1, Math.min(20, Number(params.get("max")) || 12));
        if (!url.trim()) return json({ ok: false, error: "Enter a website URL, e.g. https://example.com." }, 400);
        try {
          const report = await scanSite(url.trim(), { maxPages: max });
          return json({ ok: true, report });
        } catch (e: unknown) {
          return json({ ok: false, error: e instanceof Error ? e.message : "Scan failed." }, 400);
        }
      },
    },
  },
});
