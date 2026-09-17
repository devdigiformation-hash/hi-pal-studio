import { createFileRoute, Link } from "@tanstack/react-router";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

const PATH = "/open-source/credits";

/** Methodology + third-party credits for Digi Website Intelligence. */
const STANDARDS = [
  { name: "Schema.org", what: "Structured-data vocabulary the JSON-LD checks validate against.", url: "https://schema.org" },
  { name: "Google Search Central", what: "Documented signals for title, meta, canonical, robots and structured data.", url: "https://developers.google.com/search" },
  { name: "web.dev / Core Web Vitals", what: "Public thresholds our performance signals reference (a full Lighthouse run gives exact figures).", url: "https://web.dev/vitals/" },
  { name: "WAI-ARIA / WCAG", what: "Accessibility signals such as image alt text and language attributes.", url: "https://www.w3.org/WAI/" },
  { name: "Sitemaps.org & RFC 9309 (robots.txt)", what: "Formats the sitemap and robots.txt analyzers parse.", url: "https://www.sitemaps.org/protocol.html" },
];

export const Route = createFileRoute("/open-source/credits")({
  head: () => {
    const { meta, links } = buildMeta({
      path: PATH,
      title: "Open-Source Credits & Methodology | DIGI BIZ OS",
      description: "How Digi Website Intelligence works, what it checks, and the open standards and open-source ecosystem that inform its SEO, AEO and GEO methodology.",
    });
    return { meta, links, scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Open Source", path: "/open-source" }, { name: "Credits", path: PATH }])) }] };
  },
  component: CreditsPage,
});

function CreditsPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <div className="mx-auto max-w-[780px]">
          <EyebrowLabel text="Open Source" color="var(--cyan)" />
          <h1 className="mt-5 font-display text-[30px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[var(--text-primary)] md:text-[44px]">
            Credits & methodology
          </h1>
          <p className="mt-4 font-body text-[16px] leading-relaxed text-[var(--text-secondary)]">
            <Link to={"/tools/ai-seo-checker" as any} className="text-[var(--cyan)] underline decoration-dotted">Digi Website Intelligence</Link>{" "}
            is our free SEO, AEO and GEO audit. This page explains how it works and credits the open standards and
            open-source ecosystem that inform it.
          </p>

          <h2 className="mt-8 font-display text-[19px] font-bold text-[var(--text-primary)]">How the engine is built</h2>
          <ul className="mt-3 space-y-2 font-body text-[14.5px] leading-relaxed text-[var(--text-secondary)]">
            <li>• The analysis engine is <strong>original first-party code</strong> written for this site. It does not bundle or copy third-party source, so there are no external licence obligations in the audit engine itself.</li>
            <li>• It runs as pure JavaScript on our serverless platform, so it reads and parses HTML directly — no headless browser or heavy native binaries.</li>
            <li>• Every score is derived only from checks that were actually run. Nothing is fabricated, and the tool reports exactly how many pages were discovered, scanned and skipped.</li>
            <li>• Deep, browser-rendered crawling and full Lighthouse performance audits are heavier than a serverless function allows; those run inside the <Link to="/download" className="text-[var(--cyan)] underline decoration-dotted">DIGI BIZ OS</Link> desktop app rather than in this free web tool.</li>
          </ul>

          <h2 className="mt-8 font-display text-[19px] font-bold text-[var(--text-primary)]">Open standards we follow</h2>
          <div className="mt-3 space-y-2.5">
            {STANDARDS.map((s) => (
              <div key={s.name} className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5">
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-body text-[14px] font-semibold text-[var(--text-primary)] hover:text-[var(--cyan)]">{s.name}</a>
                <p className="mt-0.5 font-body text-[13px] leading-snug text-[var(--text-secondary)]">{s.what}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-8 font-display text-[19px] font-bold text-[var(--text-primary)]">Open-source ecosystem</h2>
          <p className="mt-3 font-body text-[14.5px] leading-relaxed text-[var(--text-secondary)]">
            The wider open-source SEO ecosystem (crawlers, link checkers, keyphrase extraction, readability, sitemap
            tooling) informs our roadmap. Where we later integrate a specific open-source component, it will be listed
            here with its licence, and any required attribution and licence notices will be preserved.
          </p>

          <div className="mt-8 rounded-2xl border border-[var(--cyan)]/25 bg-[var(--cyan)]/[0.04] p-5">
            <p className="font-body text-[14px] text-[var(--text-secondary)]">
              Want the audit to run itself — scheduled, monitored, and turned into content and workflows?{" "}
              <Link to={"/modules/marketing" as any} className="font-semibold text-[var(--cyan)] underline decoration-dotted">Digi Marketing</Link> and{" "}
              <Link to={"/modules/intelligence" as any} className="font-semibold text-[var(--cyan)] underline decoration-dotted">Digi Intelligence</Link> inside DIGI BIZ OS do exactly that.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
