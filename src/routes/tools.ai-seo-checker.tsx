import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertTriangle, XCircle, Loader2, ShieldCheck, Search, Lock } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import { buildMeta, breadcrumbLd, softwareLd, faqLd } from "@/lib/seo";
import { analyzeHtml, type SeoAuditReport, type SeoCheck, type CheckGroup } from "@/lib/seo-audit";
import type { SiteScanReport } from "@/lib/site-scan";

const PATH = "/tools/ai-seo-checker";
const TITLE = "Digi Website Intelligence";
const SUBTITLE = "Free SEO, AEO & GEO Audit";

const FAQS: { q: string; a: string }[] = [
  { q: "What does Digi Website Intelligence check?", a: "It runs a real audit across technical SEO, on-page SEO, structured data (JSON-LD), performance signals, and AEO/GEO — plus site-level checks like robots.txt, XML sitemap and llms.txt. You get separate scores per area and a prioritized fix list." },
  { q: "Is it free and do I need an account?", a: "Yes, it is free with no sign-up. Scan an entire website by domain, analyze a single URL, or paste HTML for a private in-browser check." },
  { q: "Does my data leave the browser?", a: "Paste-HTML mode runs entirely in your browser and uploads nothing. URL and full-site modes fetch the public pages you name on our server so it can read them; content is analyzed and not stored." },
  { q: "How is the 'entire website' scan done?", a: "It discovers your robots.txt and XML sitemap, builds a URL inventory, then fetches and analyzes a bounded set of pages. It reports exactly how many pages were discovered, scanned and skipped — it never claims to have crawled pages it did not." },
  { q: "What is the difference between SEO, AEO and GEO?", a: "SEO earns a ranked link; AEO (Answer Engine Optimization) wins the direct answer; GEO (Generative Engine Optimization) gets your page cited inside AI answers like Google AI Overviews, ChatGPT, Perplexity and Gemini. This tool scores all three." },
  { q: "Does a good score guarantee rankings or AI citations?", a: "No. The tool verifies on-page fundamentals that make a page eligible and easy to cite. Rankings and citations also depend on content quality, trust and competition, which no tool can guarantee." },
];

export const Route = createFileRoute("/tools/ai-seo-checker")({
  head: () => {
    const { meta, links } = buildMeta({
      path: PATH,
      title: `${TITLE} — ${SUBTITLE} | DIGI BIZ OS`,
      description: "Free AI-powered website audit: scan your whole site for technical SEO, on-page, schema, performance, AEO and GEO readiness. Robots.txt, sitemap and llms.txt checks, prioritized fixes. No sign-up.",
    });
    return {
      meta,
      links,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Tools", path: "/tools" }, { name: TITLE, path: PATH }])) },
        { type: "application/ld+json", children: JSON.stringify(softwareLd(`${TITLE} — ${SUBTITLE}`, "Free browser-based SEO, AEO and GEO website audit: scans technical SEO, on-page, structured data, performance and AI-answer readiness across a whole site.", PATH)) },
        { type: "application/ld+json", children: JSON.stringify(faqLd(FAQS)) },
      ],
    };
  },
  component: SeoCheckerPage,
});

const STATUS_UI = {
  pass: { icon: CheckCircle2, color: "text-emerald-400", ring: "border-emerald-500/25 bg-emerald-500/[0.06]" },
  warn: { icon: AlertTriangle, color: "text-amber-400", ring: "border-amber-500/25 bg-amber-500/[0.06]" },
  fail: { icon: XCircle, color: "text-rose-400", ring: "border-rose-500/25 bg-rose-500/[0.06]" },
} as const;

const GROUP_ORDER: CheckGroup[] = ["Meta", "AEO / GEO", "Schema", "Structure", "Performance", "Social", "Technical"];

// The free tool is a limited tier (~40%): core audit works, the deeper "lab"
// features are unlocked inside DIGI BIZ OS → Digi Intelligence.
const FREE_SCAN_PAGES = 5;
const LOCKED_FEATURES: { name: string; blurb: string }[] = [
  { name: "Full-site crawl (up to 500 pages)", blurb: "The free scan analyzes 5 pages. Crawl the whole site with queue, concurrency and resumable scans." },
  { name: "AI action plan & fixes", blurb: "AI explains every issue, prioritizes it, and writes the fix — titles, meta, FAQ, schema, alt text, internal links." },
  { name: "Keyword & topic-cluster engine", blurb: "Related, long-tail, question and intent keywords, clustered into topic pillars." },
  { name: "Competitor comparison", blurb: "Benchmark your site against up to 3 competitors: schema, content, keywords, AEO/GEO." },
  { name: "AI content briefs", blurb: "Auto-generate briefs written to be cited by AI answer engines." },
  { name: "Scheduled monitoring", blurb: "Re-audit automatically and get alerted when scores or AI-visibility signals change." },
  { name: "PDF / CSV / Markdown export", blurb: "Executive reports and raw data exports for clients and teams." },
  { name: "Entity & citation analysis", blurb: "Knowledge-graph entity extraction and AI-citation readiness at scale." },
];
const scoreColor = (n: number) => (n >= 80 ? "text-emerald-400" : n >= 55 ? "text-amber-400" : "text-rose-400");
const barColor = (n: number) => (n >= 80 ? "bg-emerald-400" : n >= 55 ? "bg-amber-400" : "bg-rose-400");

function ScoreCard({ label, n }: { label: string; n: number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
      <div className="flex items-baseline justify-between">
        <span className="font-body text-[12px] text-[var(--text-muted)]">{label}</span>
        <span className={`font-display text-[18px] font-extrabold ${scoreColor(n)}`}>{n}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div className={`h-full rounded-full ${barColor(n)}`} style={{ width: `${n}%` }} />
      </div>
    </div>
  );
}

function SeoCheckerPage() {
  const [mode, setMode] = useState<"site" | "url" | "html">("site");
  const [input, setInput] = useState("");
  const [html, setHtml] = useState("");
  const [page, setPage] = useState<SeoAuditReport | null>(null);
  const [site, setSite] = useState<SiteScanReport | null>(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState("");
  const [err, setErr] = useState("");

  const reset = () => { setErr(""); setPage(null); setSite(null); };

  const run = async () => {
    reset();
    if (mode === "html") {
      if (!html.trim()) { setErr("Paste your page's HTML first."); return; }
      setBusy(true); try { setPage(analyzeHtml(html)); } finally { setBusy(false); } return;
    }
    if (!input.trim()) { setErr(mode === "site" ? "Enter your website, e.g. https://example.com." : "Enter a URL to analyze."); return; }
    setBusy(true);
    setProgress(mode === "site" ? "Discovering robots.txt, sitemap & llms.txt…" : "Fetching page…");
    try {
      if (mode === "site") {
        const r = await fetch(`/api/site-scan?url=${encodeURIComponent(input.trim())}&max=${FREE_SCAN_PAGES}`);
        const d = await r.json();
        if (d?.ok && d.report) setSite(d.report as SiteScanReport);
        else setErr(d?.error || "Could not scan that site.");
      } else {
        const r = await fetch(`/api/seo-check?url=${encodeURIComponent(input.trim())}`);
        const d = await r.json();
        if (d?.ok && d.report) setPage(d.report as SeoAuditReport);
        else setErr(d?.error || "Could not analyze that URL. Try the paste-HTML tab.");
      }
    } catch { setErr("Network error. Try again."); }
    finally { setBusy(false); setProgress(""); }
  };

  const grouped = (r: SeoAuditReport) => GROUP_ORDER.map((g) => ({ group: g, items: r.checks.filter((c) => c.group === g) })).filter((x) => x.items.length);

  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <div className="mx-auto max-w-[920px]">
          <EyebrowLabel text="Free Tool · SEO + AEO + GEO" color="var(--cyan)" />
          <h1 className="mt-5 font-display text-[30px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
            {TITLE}
          </h1>
          <p className="mt-3 max-w-[680px] font-body text-[16px] leading-relaxed text-[var(--text-secondary)]">
            Scan your whole website for technical SEO, on-page issues, structured data, performance signals and
            AI-answer readiness (AEO/GEO). Get separate scores and a prioritized fix list. Free, no sign-up.
          </p>

          {/* Tool */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
            <div className="mb-4 inline-flex flex-wrap rounded-lg border border-white/10 bg-black/30 p-0.5 text-[13px]">
              {([["site", "Scan entire website"], ["url", "Single URL"], ["html", "Paste HTML"]] as const).map(([m, label]) => (
                <button key={m} onClick={() => { setMode(m); reset(); }} className={`rounded-md px-3 py-1.5 font-medium transition ${mode === m ? "bg-[var(--cyan)] text-black" : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"}`}>
                  {label}
                </button>
              ))}
            </div>

            {mode === "html" ? (
              <textarea value={html} onChange={(e) => setHtml(e.target.value)} rows={7} placeholder="Paste your page's full HTML — nothing leaves your browser in this mode." className="w-full resize-y rounded-lg border border-white/10 bg-black/40 px-3.5 py-3 font-mono text-[13px] text-[var(--text-primary)] outline-none focus:border-[var(--cyan)]" />
            ) : (
              <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") run(); }} placeholder={mode === "site" ? "https://example.com" : "https://example.com/page"} className="w-full rounded-lg border border-white/10 bg-black/40 px-3.5 py-3 font-body text-[15px] text-[var(--text-primary)] outline-none focus:border-[var(--cyan)]" />
            )}

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button onClick={run} disabled={busy} className="inline-flex items-center gap-2 rounded-lg bg-[var(--cyan)] px-5 py-2.5 font-body text-[14px] font-bold text-black transition hover:brightness-110 disabled:opacity-60">
                {busy ? <Loader2 size={16} className="animate-spin" /> : mode === "site" ? <Search size={16} /> : <ShieldCheck size={16} />}
                {mode === "site" ? "Scan my entire website" : "Analyze page"}
              </button>
              {busy && progress && <span className="font-body text-[12.5px] text-[var(--cyan)]">{progress}</span>}
              {mode === "html" && !busy && <span className="inline-flex items-center gap-1.5 font-body text-[12px] text-[var(--text-muted)]"><ShieldCheck size={13} className="text-emerald-400" /> Runs in your browser — nothing uploaded.</span>}
              {mode === "site" && !busy && <span className="inline-flex items-center gap-1.5 font-body text-[12px] text-[var(--text-muted)]"><Lock size={12} className="text-[var(--cyan)]/80" /> Free scans {FREE_SCAN_PAGES} pages · full-site crawl unlocks in DIGI BIZ OS.</span>}
            </div>
            {err && <p className="mt-3 font-body text-[13px] text-rose-400">{err}</p>}
          </div>

          {/* ── Full-site dashboard ── */}
          {site && (
            <div className="mt-6">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <div className={`font-display text-[40px] font-extrabold leading-none ${scoreColor(site.overall)}`}>{site.overall}</div>
                  <div className="mt-1 font-body text-[12px] text-[var(--text-muted)]">Overall website health</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
                  <div className={`font-display text-[40px] font-extrabold leading-none ${scoreColor(site.aeoScore)}`}>{site.aeoScore}</div>
                  <div className="mt-1 font-body text-[12px] text-[var(--text-muted)]">AEO / GEO readiness</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="grid grid-cols-3 gap-1 text-center font-body text-[12px]">
                    <div><div className="font-display text-[18px] font-bold text-[var(--text-primary)]">{site.discovered}</div>discovered</div>
                    <div><div className="font-display text-[18px] font-bold text-emerald-400">{site.scanned}</div>scanned</div>
                    <div><div className="font-display text-[18px] font-bold text-amber-400">{site.skipped.length}</div>skipped</div>
                  </div>
                  <div className="mt-2 text-center font-body text-[11px] text-[var(--text-muted)]">Robots {site.robotsFound ? "✓" : "—"} · Sitemap {site.sitemapFound ? "✓" : "—"} · llms.txt {site.llmsTxtFound ? "✓" : "—"}</div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {Object.entries(site.scoresByCategory).map(([k, v]) => <ScoreCard key={k} label={k} n={v} />)}
              </div>

              {/* Site-level checks */}
              <div className="mt-5 space-y-2">
                {site.siteChecks.map((c) => {
                  const ui = STATUS_UI[c.status]; const Icon = ui.icon;
                  return (
                    <div key={c.id} className={`rounded-xl border p-3.5 ${ui.ring}`}>
                      <div className="flex items-start gap-2.5">
                        <Icon size={16} className={`mt-0.5 shrink-0 ${ui.color}`} />
                        <div>
                          <div className="font-body text-[14px] font-semibold text-[var(--text-primary)]">{c.label}</div>
                          <div className="mt-0.5 font-body text-[13px] leading-snug text-[var(--text-secondary)]">{c.detail}</div>
                          {c.fix && <div className="mt-1 font-body text-[12.5px] text-[var(--text-muted)]"><span className="font-semibold text-[var(--text-secondary)]">Fix:</span> {c.fix}</div>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Top recurring fixes */}
              {site.topFixes.length > 0 && (
                <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <h2 className="mb-2 font-display text-[15px] font-bold text-[var(--text-primary)]">Priority fixes across the site</h2>
                  <div className="space-y-1.5">
                    {site.topFixes.map((f) => (
                      <div key={f.label} className="flex items-start justify-between gap-3 border-b border-white/5 pb-1.5 text-[13px]">
                        <div><span className="font-semibold text-[var(--text-primary)]">{f.label}</span> <span className="text-[var(--text-muted)]">· {f.group}</span>{f.fix && <div className="text-[12px] text-[var(--text-muted)]">{f.fix}</div>}</div>
                        <span className="shrink-0 rounded bg-amber-500/15 px-2 py-0.5 font-mono text-[11px] text-amber-400">{f.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Per-page table */}
              {site.pages.length > 0 && (
                <div className="mt-5 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <h2 className="mb-2 font-display text-[15px] font-bold text-[var(--text-primary)]">Pages scanned ({site.pages.length})</h2>
                  <table className="w-full text-[12.5px]">
                    <thead><tr className="text-left text-[var(--text-muted)]"><th className="py-1 pr-3 font-medium">Page</th><th className="px-2 font-medium">Score</th><th className="px-2 font-medium">AEO</th><th className="px-2 font-medium">Issues</th></tr></thead>
                    <tbody>
                      {site.pages.map((p) => (
                        <tr key={p.url} className="border-t border-white/5">
                          <td className="max-w-[420px] truncate py-1.5 pr-3 text-[var(--text-secondary)]" title={p.url}>{p.url.replace(site.origin, "") || "/"}</td>
                          <td className={`px-2 ${scoreColor(p.score)}`}>{p.score}</td>
                          <td className={`px-2 ${scoreColor(p.aeoScore)}`}>{p.aeoScore}</td>
                          <td className="px-2 text-[var(--text-muted)]">{p.issues}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {site.skipped.length > 0 && (
                <details className="mt-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-[12.5px] text-[var(--text-muted)]">
                  <summary className="cursor-pointer font-semibold text-[var(--text-secondary)]">Skipped pages ({site.skipped.length})</summary>
                  <ul className="mt-2 space-y-0.5">{site.skipped.slice(0, 20).map((s) => <li key={s.url} className="truncate">{s.url.replace(site.origin, "")} — {s.reason}</li>)}</ul>
                </details>
              )}
            </div>
          )}

          {/* ── Single-page report ── */}
          {page && (
            <div className="mt-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center sm:col-span-2 lg:col-span-1">
                  <div className={`font-display text-[34px] font-extrabold leading-none ${scoreColor(page.score)}`}>{page.score}</div>
                  <div className="mt-1 font-body text-[11px] text-[var(--text-muted)]">Overall</div>
                </div>
                {Object.entries(page.scoresByCategory).map(([k, v]) => <ScoreCard key={k} label={k} n={v} />)}
              </div>
              {grouped(page).map(({ group, items }) => (
                <div key={group} className="mt-5">
                  <h2 className="mb-2 font-display text-[15px] font-bold text-[var(--text-primary)]">{group}</h2>
                  <div className="space-y-2">
                    {items.map((c: SeoCheck) => {
                      const ui = STATUS_UI[c.status]; const Icon = ui.icon;
                      return (
                        <div key={c.id} className={`rounded-xl border p-3.5 ${ui.ring}`}>
                          <div className="flex items-start gap-2.5">
                            <Icon size={16} className={`mt-0.5 shrink-0 ${ui.color}`} />
                            <div className="min-w-0">
                              <div className="font-body text-[14px] font-semibold text-[var(--text-primary)]">{c.label}</div>
                              <div className="mt-0.5 font-body text-[13px] leading-snug text-[var(--text-secondary)]">{c.detail}</div>
                              {c.fix && c.status !== "pass" && <div className="mt-1 font-body text-[12.5px] text-[var(--text-muted)]"><span className="font-semibold text-[var(--text-secondary)]">Fix:</span> {c.fix}</div>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Locked: the full lab lives in DIGI BIZ OS ── */}
          {(site || page) && (
            <div className="mt-8">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="font-display text-[18px] font-bold text-[var(--text-primary)]">Unlock the full optimization lab</h2>
                <span className="rounded-full border border-[var(--cyan)]/30 bg-[var(--cyan)]/[0.08] px-2.5 py-0.5 font-mono text-[11px] text-[var(--cyan)]">Free tier: core audit + {FREE_SCAN_PAGES} pages</span>
              </div>
              <p className="mt-2 max-w-[640px] font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
                This free tool runs the core audit. The deeper engine — AI fixes, keyword and competitor
                intelligence, full-site crawl, monitoring and exports — is built into{" "}
                <Link to={"/modules/intelligence" as any} className="font-semibold text-[var(--cyan)] underline decoration-dotted">Digi Intelligence</Link> inside DIGI BIZ OS.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {LOCKED_FEATURES.map((f) => (
                  <div key={f.name} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex items-start gap-2.5">
                      <Lock size={15} className="mt-0.5 shrink-0 text-[var(--cyan)]/80" />
                      <div>
                        <div className="font-body text-[13.5px] font-semibold text-[var(--text-primary)]">{f.name}</div>
                        <p className="mt-0.5 font-body text-[12.5px] leading-snug text-[var(--text-muted)]">{f.blurb}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                <Link to={"/modules/intelligence" as any} className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--cyan)] px-4 py-2 font-body text-[13px] font-bold text-black transition hover:brightness-110">Unlock features — Get DIGI BIZ OS <ArrowRight size={14} /></Link>
                <Link to="/pricing" className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 font-body text-[13px] font-semibold text-[var(--text-primary)] transition hover:border-[var(--cyan)]/40">See pricing</Link>
              </div>
            </div>
          )}

          {/* ── Funnel CTA ── */}
          <div className="mt-10 rounded-2xl border border-[var(--cyan)]/25 bg-[var(--cyan)]/[0.04] p-6">
            <h2 className="font-display text-[20px] font-bold tracking-[-0.02em] text-[var(--text-primary)]">Finding the issues is the easy part</h2>
            <p className="mt-2 max-w-[660px] font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">
              This audit shows what to fix. Doing it across a whole site, every week, as content and AI answers
              change, is the hard part. DIGI BIZ OS turns these recommendations into AI workflows — scheduled audits,
              content written to be cited, and monitoring that runs itself.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Link to={"/modules/marketing" as any} className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--cyan)] px-4 py-2 font-body text-[13px] font-bold text-black transition hover:brightness-110">Automate with Digi Marketing <ArrowRight size={14} /></Link>
              <Link to={"/modules/intelligence" as any} className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 font-body text-[13px] font-semibold text-[var(--text-primary)] transition hover:border-[var(--cyan)]/40">Digi Intelligence</Link>
              <Link to="/download" className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-4 py-2 font-body text-[13px] font-semibold text-[var(--text-primary)] transition hover:border-[var(--cyan)]/40">Download DIGI BIZ OS</Link>
            </div>
            <p className="mt-3 font-body text-[12px] text-[var(--text-muted)]">
              New to GEO? Read the{" "}
              <Link to="/blog/$slug" params={{ slug: "generative-engine-optimization-geo-guide" }} className="underline decoration-dotted hover:text-[var(--cyan)]">Generative Engine Optimization guide</Link>
              {" · "}
              <Link to={"/open-source/credits" as any} className="underline decoration-dotted hover:text-[var(--cyan)]">open-source credits & methodology</Link>.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-10">
            <h2 className="font-display text-[22px] font-bold tracking-[-0.02em] text-[var(--text-primary)]">Frequently asked questions</h2>
            <div className="mt-4 space-y-4">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <h3 className="font-body text-[15px] font-semibold text-[var(--text-primary)]">{f.q}</h3>
                  <p className="mt-1 font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
