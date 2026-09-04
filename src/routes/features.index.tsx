import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import { FEATURE_PAGES, INTENT_PAGES } from "@/content/seo-pages";
import { buildMeta, breadcrumbLd, softwareLd } from "@/lib/seo";

const TITLE = "All Features — DIGI BIZ OS AI Business Operating System";
const DESC =
  "Every module of DIGI BIZ OS: Digi AI, Digi CRM, Digi Studio, Digi Flow, Digi Marketing, Digi WhatsApp, Digi Code, Digi MCP, Digi CLI, Digi Connectors, Digi Intelligence, plus voice control, agents, skills, and desktop automation.";

export const Route = createFileRoute("/features/")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/features", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Features", path: "/features" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(softwareLd("DIGI BIZ OS", DESC, "/features")),
        },
      ],
    };
  },
  component: FeaturesHub,
});

function Grid({ pages }: { pages: typeof FEATURE_PAGES }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {pages.map((p) => {
        const accent = p.accent || "#2FE0C8";
        return (
          <Link key={p.path} to={p.path} className="group block h-full">
            <GlassCard
              glowColor={accent}
              className="relative flex h-full flex-col justify-between overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em]"
                    style={{
                      color: accent,
                      borderColor: `${accent}40`,
                      background: `${accent}15`,
                    }}
                  >
                    {p.eyebrow}
                  </span>
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
                  />
                </div>

                <h3 className="mt-4 font-display text-[18px] font-bold text-[var(--text-primary)] transition group-hover:text-[var(--cyan)]">
                  {p.h1} {p.h1Gradient}
                </h3>
                <p className="mt-2 line-clamp-3 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {p.metaDescription}
                </p>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4 flex items-center justify-between">
                <span
                  className="inline-flex items-center gap-1.5 font-display text-[12.5px] font-semibold transition-all group-hover:translate-x-1"
                  style={{ color: accent }}
                >
                  <span>Explore {p.eyebrow}</span>
                  <ArrowRight size={13} />
                </span>
                <span className="font-mono text-[10.5px] text-[var(--text-tertiary)]">
                  Module
                </span>
              </div>
            </GlassCard>
          </Link>
        );
      })}
    </div>
  );
}

function FeaturesHub() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <div className="mx-auto max-w-[900px] text-center">
          <EyebrowLabel text="Features Hub" color="var(--cyan)" />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] md:text-[56px]">
            Everything Inside{" "}
            <GradientText from="#2FE0C8" to="#8B7CF6">
              DIGI BIZ OS.
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[760px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[17px]">
            DIGI BIZ OS is a JARVIS-style AI business operating system for Windows. Voice, agents,
            500+ skills, 150+ mixed tools, coding, documents, workflows and tasks — all in
            one desktop environment. Explore every module below.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1180px]">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[34px]">
            Product modules
          </h2>
          <Grid pages={FEATURE_PAGES} />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[1180px]">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[34px]">
            What DIGI BIZ OS is used for
          </h2>
          <Grid pages={INTENT_PAGES} />
        </div>
      </SectionWrapper>
    </main>
  );
}
