import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

const TOOLS = [
  {
    to: "/tools/ai-seo-checker",
    name: "AI SEO, AEO & Schema Checker",
    blurb: "Analyze any page's meta tags, headings, JSON-LD and AI-answer readiness — with plain fixes. Free, no sign-up.",
  },
];

export const Route = createFileRoute("/tools/")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/tools",
      title: "Free Tools | DIGI BIZ OS",
      description: "Free browser tools from DIGI BIZ OS — starting with an AI SEO, AEO and GEO checker. Use them free, then automate the whole workflow inside DIGI BIZ OS.",
    });
    return {
      meta,
      links,
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Tools", path: "/tools" }])) },
      ],
    };
  },
  component: ToolsIndex,
});

function ToolsIndex() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <div className="mx-auto max-w-[860px]">
          <EyebrowLabel text="Free Tools" color="var(--cyan)" />
          <h1 className="mt-5 font-display text-[30px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
            Free tools from DIGI BIZ OS
          </h1>
          <p className="mt-4 max-w-[680px] font-body text-[16px] leading-relaxed text-[var(--text-secondary)]">
            Small, focused tools that solve one job well — free to use. When you need to run the whole
            workflow on autopilot, that lives inside DIGI BIZ OS.
          </p>
          <div className="mt-8 grid gap-4">
            {TOOLS.map((t) => (
              <Link
                key={t.to}
                to={t.to as any}
                className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-[var(--cyan)]/40"
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[var(--cyan)]" />
                  <div>
                    <div className="flex items-center gap-2 font-display text-[17px] font-bold tracking-[-0.01em] text-[var(--text-primary)]">
                      {t.name} <ArrowRight size={15} className="opacity-0 transition group-hover:opacity-100" />
                    </div>
                    <p className="mt-1 font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">{t.blurb}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
