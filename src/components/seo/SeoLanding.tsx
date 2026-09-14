import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Sparkles, HelpCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SubPageComparisonChart from "@/components/seo/SubPageComparisonChart";
import SubPageGalleryShowcase from "@/components/seo/SubPageGalleryShowcase";
import InteractiveCyberBackground from "@/components/ui/InteractiveCyberBackground";
import InteractiveSoftwareScreenshotStage from "@/components/seo/InteractiveSoftwareScreenshotStage";
import SubPageInteractiveWorkbench from "@/components/seo/SubPageInteractiveWorkbench";
import SubPageWorkflowBeam from "@/components/seo/SubPageWorkflowBeam";
import SubPageBentoShowcase from "@/components/seo/SubPageBentoShowcase";
import type { SeoPage } from "@/content/seo-pages";

export default function SeoLanding({ page }: { page: SeoPage }) {
  const accent = page.accent ?? "var(--cyan)";
  const segments = page.path.split("/").filter(Boolean);
  const trail = [
    { name: "Home", path: "/" },
    ...(segments.length > 1 && segments[0] === "features"
      ? [{ name: "Features", path: "/features" }]
      : []),
    { name: page.eyebrow, path: page.path },
  ];

  const workbenchCapabilities = page.capabilities.map((c, i) => ({
    title: c.title,
    body: c.body,
    tag: `Engine Feature 0${i + 1}`,
    metric: "100% Native Speed",
    actionText: "Simulate Execution",
  }));

  const workflowSteps = (page.sections[0]?.bullets && page.sections[0].bullets.length >= 3)
    ? page.sections[0].bullets.slice(0, 4).map((b, i) => {
        const parts = b.split("—");
        const title = parts[0]?.trim() || `Stage 0${i + 1}`;
        const description = parts[1]?.trim() || b;
        return {
          step: `0${i + 1}`,
          title,
          description,
          tag: `Pipeline Stage 0${i + 1}`,
        };
      })
    : undefined;

  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      {/* ── HERO SECTION ─────────────────────────────────── */}
      <SectionWrapper className="relative overflow-hidden pb-10">
        <InteractiveCyberBackground color={accent} particleCount={42} />
        <Breadcrumbs trail={trail} />
        <div className="mx-auto max-w-[920px] text-center">
          <EyebrowLabel text={page.eyebrow} color={accent} />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] md:text-[56px]">
            {page.h1}{" "}
            <GradientText from="#2FE0C8" to="#8B7CF6">
              {page.h1Gradient}
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[760px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[17px]">
            {page.intro}
          </p>
          <div className="reveal-item delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/pricing">
              <CyanButton icon={<ArrowRight size={16} />}>Get DIGI BIZ OS — £50</CyanButton>
            </Link>
            <Link
              to="/features"
              className="inline-flex h-11 items-center rounded-full border border-[var(--border-glass)] px-5 font-display text-[13px] font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Explore all features
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 3D HOLOGRAPHIC PINNED SOFTWARE SHOWCASE ─────────── */}
      {(page.screenshots && page.screenshots.length > 0) || (page.image && page.image.src) ? (
        <SectionWrapper className="!py-4 md:!py-10">
          <InteractiveSoftwareScreenshotStage
            src={page.image?.src}
            alt={page.image?.alt}
            caption={page.image?.caption}
            screenshots={page.screenshots}
            accentColor={accent}
          />
        </SectionWrapper>
      ) : null}

      {/* ── INTERACTIVE WORKBENCH (REPLACES BORING BOXES) ──── */}
      <SectionWrapper className="py-14 md:py-20">
        <SubPageInteractiveWorkbench
          capabilities={workbenchCapabilities}
          accentColor={accent}
          moduleName={page.eyebrow}
        />
      </SectionWrapper>

      {/* ── ASYMMETRICAL 4-CARD BENTO GRID ──────────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)] py-14 md:py-20">
        <SubPageBentoShowcase
          moduleName={page.eyebrow}
          accentColor={accent}
        />
      </SectionWrapper>

      {/* ── ANIMATED DATA BEAM WORKFLOW CONDUIT ─────────────── */}
      <SectionWrapper className="py-14 md:py-20">
        <SubPageWorkflowBeam
          title={`How ${page.eyebrow} Executes On Your Machine`}
          subtitle="From voice instruction to local database write and final deliverable — with zero cloud lock-in."
          steps={workflowSteps}
          accentColor={accent}
        />
      </SectionWrapper>

      {/* ── DIRECT TECHNICAL ANSWERS ────────────────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
            Straight answers
          </h2>
          <dl className="mt-8 space-y-6">
            {page.answers.map((a) => (
              <div key={a.q} className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                <dt className="font-display text-[16px] font-bold text-[var(--text-primary)] md:text-[18px]">
                  {a.q}
                </dt>
                <dd className="mt-2 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)] md:text-[15.5px]">
                  {a.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionWrapper>

      {/* ── INTERACTIVE SCREENSHOT GALLERY ──────────────────── */}
      <SectionWrapper>
        <div className="mx-auto max-w-[1100px]">
          <SubPageGalleryShowcase
            slug={page.path.replace("/features/", "").replace("/", "")}
            title={`Live Software Interface: ${page.eyebrow}`}
            eyebrow="Interactive Screenshot Showcase"
            accentColor={accent}
          />
        </div>
      </SectionWrapper>

      {/* ── COMPARISON CHART ────────────────────────────────── */}
      <SectionWrapper>
        <div className="mx-auto max-w-[1000px]">
          <SubPageComparisonChart
            slug={page.path.replace("/features/", "").replace("/", "")}
            title={`Why Pay Subscriptions? ${page.eyebrow} Is Included 100% Free`}
            accentColor={accent}
          />
        </div>
      </SectionWrapper>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[900px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Frequently asked
          </h2>
          <dl className="mt-8 space-y-6">
            {page.faq.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                  {f.q}
                </dt>
                <dd className="mt-2 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionWrapper>

      {/* ── RELATED NAVIGATION ──────────────────────────────── */}
      <SectionWrapper>
        <div className="mx-auto max-w-[1000px]">
          <h2 className="font-display text-[22px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[28px]">
            Continue exploring DIGI BIZ OS
          </h2>
          <nav aria-label="Related pages" className="mt-6 flex flex-wrap gap-3">
            {page.links.map((l) => (
              <Link
                key={l.to + l.label}
                to={l.to}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] px-4 py-2 font-body text-[13.5px] text-[var(--text-secondary)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--text-primary)]"
              >
                {l.label}
                <ArrowRight size={13} />
              </Link>
            ))}
          </nav>
        </div>
      </SectionWrapper>
    </main>
  );
}
