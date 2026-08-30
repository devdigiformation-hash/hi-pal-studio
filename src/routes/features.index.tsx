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
  "Every module of DIGI BIZ OS: Digi AI, DigiCode, DigiDocs, DigiTools, DigiCLI, DigiMCP, DigiFlow, DigiJobs, DigiTasks, plus voice control, agents, skills and desktop automation.";

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
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pages.map((p) => (
        <Link key={p.path} to={p.path} className="group block h-full">
          <GlassCard glowColor={p.accent ?? "var(--cyan)"} className="h-full p-6">
            <span
              className="font-display text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: p.accent ?? "var(--cyan)" }}
            >
              {p.eyebrow}
            </span>
            <h3 className="mt-3 font-display text-[17px] font-bold text-[var(--text-primary)]">
              {p.h1} {p.h1Gradient}
            </h3>
            <p className="mt-2 line-clamp-3 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
              {p.metaDescription}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 font-display text-[12.5px] font-semibold text-[var(--cyan)]">
              View {p.h1} details{" "}
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </GlassCard>
        </Link>
      ))}
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
            500+ skills, 150+ mixed tools, coding, documents, workflows and scheduled jobs — all in
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
