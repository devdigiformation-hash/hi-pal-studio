/**
 * site-scan.ts — the "Scan my entire website" engine (server-side).
 *
 * Discovers robots.txt, sitemap(s) and llms.txt, builds a URL inventory,
 * then fetches and analyzes a bounded set of pages with the same analyzer used
 * for single pages (src/lib/seo-audit.ts). Every fetch goes through the SSRF
 * gate. Nothing is fabricated: the report states exactly how many pages were
 * discovered, scanned and skipped (with reasons).
 */
import { analyzeHtml, type SeoAuditReport, type CheckStatus } from "./seo-audit";
import { safeFetchText, assertPublicUrl } from "./ssrf";

export interface SiteCheck { id: string; label: string; status: CheckStatus; detail: string; fix?: string }
export interface ScannedPage {
  url: string;
  status: number;
  score: number;
  aeoScore: number;
  title: string | null;
  issues: number; // fail+warn count
  jsonLdTypes: string[];
}
export interface SiteScanReport {
  origin: string;
  startedAt: string;
  robotsFound: boolean;
  llmsTxtFound: boolean;
  sitemapFound: boolean;
  sitemapUrls: number;
  discovered: number;
  scanned: number;
  skipped: { url: string; reason: string }[];
  siteChecks: SiteCheck[];
  scoresByCategory: Record<string, number>;
  overall: number;
  aeoScore: number;
  pages: ScannedPage[];
  topFixes: { label: string; count: number; group: string; fix?: string }[];
}

const uniq = <T,>(a: T[]) => [...new Set(a)];

function extractSitemapLocs(xml: string): string[] {
  return (xml.match(/<loc>\s*([^<\s]+)\s*<\/loc>/gi) || [])
    .map((m) => m.replace(/<\/?loc>/gi, "").trim())
    .filter(Boolean);
}

export async function scanSite(input: string, opts: { maxPages?: number } = {}): Promise<SiteScanReport> {
  const maxPages = Math.max(1, Math.min(20, opts.maxPages ?? 12));
  const base = assertPublicUrl(input);
  const origin = base.origin;
  const report: SiteScanReport = {
    origin, startedAt: new Date().toISOString(),
    robotsFound: false, llmsTxtFound: false, sitemapFound: false, sitemapUrls: 0,
    discovered: 0, scanned: 0, skipped: [], siteChecks: [], scoresByCategory: {}, overall: 0, aeoScore: 0, pages: [], topFixes: [],
  };
  const sc = (c: SiteCheck) => report.siteChecks.push(c);

  // 1) robots.txt
  let sitemapsFromRobots: string[] = [];
  try {
    const r = await safeFetchText(`${origin}/robots.txt`, { timeoutMs: 8000, maxBytes: 512 * 1024, accept: "text/plain" });
    if (r.status === 200 && /user-agent|disallow|allow|sitemap/i.test(r.html)) {
      report.robotsFound = true;
      sitemapsFromRobots = (r.html.match(/^\s*sitemap:\s*(\S+)/gim) || []).map((l) => l.replace(/^\s*sitemap:\s*/i, "").trim());
      const blocksAi = /user-agent:\s*(gptbot|claudebot|google-extended|perplexitybot|oai-searchbot)[\s\S]*?disallow:\s*\//i.test(r.html);
      sc({ id: "robots", label: "robots.txt", status: "pass", detail: `Found${sitemapsFromRobots.length ? `, declares ${sitemapsFromRobots.length} sitemap(s)` : ""}.` });
      sc({ id: "ai-crawlers", label: "AI crawler access", status: blocksAi ? "warn" : "pass", detail: blocksAi ? "robots.txt blocks one or more AI crawlers (GPTBot/ClaudeBot/Google-Extended/PerplexityBot)." : "AI crawlers are not blocked in robots.txt.", fix: blocksAi ? "If you want to appear in AI answers, allow the major AI crawlers in robots.txt." : undefined });
    } else {
      sc({ id: "robots", label: "robots.txt", status: "warn", detail: "No robots.txt found.", fix: "Add a robots.txt that declares your sitemap and crawl rules." });
    }
  } catch {
    sc({ id: "robots", label: "robots.txt", status: "warn", detail: "Could not read robots.txt.", fix: "Ensure /robots.txt is reachable." });
  }

  // 2) llms.txt (AI answer engines)
  try {
    const r = await safeFetchText(`${origin}/llms.txt`, { timeoutMs: 8000, maxBytes: 256 * 1024, accept: "text/plain,text/markdown" });
    report.llmsTxtFound = r.status === 200 && r.html.trim().length > 20;
    sc(report.llmsTxtFound
      ? { id: "llms", label: "llms.txt", status: "pass", detail: `Present (${(r.html.length / 1024).toFixed(1)} KB) — helps AI engines find your key pages.` }
      : { id: "llms", label: "llms.txt", status: "warn", detail: "No llms.txt found.", fix: "Add an llms.txt at the site root listing your most important pages for AI answer engines." });
  } catch {
    sc({ id: "llms", label: "llms.txt", status: "warn", detail: "No llms.txt found.", fix: "Add an llms.txt for AI answer engines." });
  }

  // 3) sitemap discovery
  const sitemapCandidates = uniq([...sitemapsFromRobots, `${origin}/sitemap.xml`, `${origin}/sitemap_index.xml`]);
  const pageUrls: string[] = [];
  for (const sm of sitemapCandidates) {
    if (report.sitemapFound && pageUrls.length >= maxPages * 3) break;
    try {
      const r = await safeFetchText(sm, { timeoutMs: 9000, maxBytes: 2 * 1024 * 1024, accept: "application/xml,text/xml" });
      if (r.status !== 200 || !/<(urlset|sitemapindex)/i.test(r.html)) continue;
      report.sitemapFound = true;
      const locs = extractSitemapLocs(r.html);
      if (/<sitemapindex/i.test(r.html)) {
        // one level deep: pull the first child sitemap
        const child = locs.find((l) => /\.xml($|\?)/i.test(l));
        if (child) {
          try {
            const cr = await safeFetchText(child, { timeoutMs: 9000, maxBytes: 2 * 1024 * 1024, accept: "application/xml,text/xml" });
            pageUrls.push(...extractSitemapLocs(cr.html));
          } catch { /* skip child */ }
        }
      } else {
        pageUrls.push(...locs);
      }
    } catch { /* try next candidate */ }
  }
  const inventory = uniq(pageUrls.filter((u) => { try { return assertPublicUrl(u).origin === origin; } catch { return false; } }));
  // Always include the homepage.
  if (!inventory.includes(`${origin}/`) && !inventory.includes(origin)) inventory.unshift(origin);
  report.sitemapUrls = inventory.length;
  sc(report.sitemapFound
    ? { id: "sitemap", label: "XML sitemap", status: "pass", detail: `Found; ${report.sitemapUrls} same-origin URL(s) discovered.` }
    : { id: "sitemap", label: "XML sitemap", status: "warn", detail: "No XML sitemap found — scanning the homepage only.", fix: "Publish an XML sitemap and reference it in robots.txt." });

  // 4) crawl + analyze a bounded set
  const toScan = inventory.slice(0, maxPages);
  report.discovered = inventory.length;
  for (const u of inventory.slice(maxPages)) report.skipped.push({ url: u, reason: "page limit reached" });

  const reports: SeoAuditReport[] = [];
  for (const u of toScan) {
    try {
      const r = await safeFetchText(u, { timeoutMs: 10000, maxBytes: 3 * 1024 * 1024 });
      if (!/text\/html|application\/xhtml/i.test(r.headers.get("content-type") || "") && !/<html/i.test(r.html)) {
        report.skipped.push({ url: u, reason: `non-HTML (${r.status})` });
        continue;
      }
      const rep = analyzeHtml(r.html, u);
      reports.push(rep);
      report.pages.push({
        url: u, status: r.status, score: rep.score, aeoScore: rep.aeoScore,
        title: rep.title, issues: rep.counts.warn + rep.counts.fail, jsonLdTypes: rep.jsonLdTypes,
      });
    } catch (e) {
      report.skipped.push({ url: u, reason: e instanceof Error ? e.message.slice(0, 80) : "fetch failed" });
    }
  }
  report.scanned = report.pages.length;

  // 5) aggregate
  if (reports.length) {
    const cats = new Set<string>();
    reports.forEach((r) => Object.keys(r.scoresByCategory).forEach((k) => cats.add(k)));
    for (const c of cats) {
      const vals = reports.map((r) => r.scoresByCategory[c]).filter((v) => typeof v === "number");
      if (vals.length) report.scoresByCategory[c] = Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
    }
    report.overall = Math.round(reports.reduce((a, r) => a + r.score, 0) / reports.length);
    report.aeoScore = Math.round(reports.reduce((a, r) => a + r.aeoScore, 0) / reports.length);

    // top recurring fixes across pages (fails weighted first)
    const bucket = new Map<string, { label: string; group: string; count: number; fix?: string }>();
    for (const r of reports) {
      for (const c of r.checks) {
        if (c.status === "pass") continue;
        const cur = bucket.get(c.id) || { label: c.label, group: c.group, count: 0, fix: c.fix };
        cur.count += c.status === "fail" ? 2 : 1;
        bucket.set(c.id, cur);
      }
    }
    report.topFixes = [...bucket.values()].sort((a, b) => b.count - a.count).slice(0, 10);
  }
  return report;
}
