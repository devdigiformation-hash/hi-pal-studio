import { Link } from "@tanstack/react-router";
import {
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Bot,
  Terminal,
  HelpCircle,
  TrendingUp,
  Workflow,
  Cpu,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import MonoBadge from "@/components/MonoBadge";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SubPageComparisonChart from "@/components/seo/SubPageComparisonChart";
import SubPageGalleryShowcase from "@/components/seo/SubPageGalleryShowcase";
import InteractiveCyberBackground from "@/components/ui/InteractiveCyberBackground";
import ThreeDTiltCard from "@/components/ui/ThreeDTiltCard";
import SubPageInteractiveWorkbench from "@/components/seo/SubPageInteractiveWorkbench";
import SubPageWorkflowBeam from "@/components/seo/SubPageWorkflowBeam";
import SubPageBentoShowcase from "@/components/seo/SubPageBentoShowcase";
import InteractiveSoftwareScreenshotStage from "@/components/seo/InteractiveSoftwareScreenshotStage";
import type { ModuleData } from "@/content/modules-data";

export default function ModuleLanding({ module }: { module: ModuleData }) {
  const accent = module.accentColor || "#10B981";

  const workbenchCapabilities = module.coreCapabilities.map((cap, i) => ({
    title: cap.title,
    body: cap.description,
    tag: `${module.name} Core 0${i + 1}`,
    metric: "Native Execution",
    actionText: "Run Simulation",
  }));

  const workflowSteps = module.workflows.map((wf) => ({
    step: wf.step,
    title: wf.title,
    description: wf.description,
    tag: `Stage ${wf.step}`,
  }));

  return (
    <main className="min-h-screen pt-[100px] md:pt-[120px]">
      <SectionWrapper className="relative overflow-hidden pb-12">
        <InteractiveCyberBackground color={accent} particleCount={45} />
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Modules", path: "/modules" },
            { name: module.name, path: `/modules/${module.slug}` },
          ]}
        />

        {/* HERO SECTION */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <EyebrowLabel text={module.eyebrow} icon={Layers} />
            <h1 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold leading-[1.12] text-[var(--text-primary)] md:text-[46px] lg:text-[52px]">
              {module.h1}{" "}
              <GradientText
                text={module.h1Gradient}
                gradient={`linear-gradient(135deg, ${accent}, #FFFFFF)`}
              />
            </h1>

            {/* DIRECT ANSWER BLOCK FOR AI OVERVIEWS & USERS */}
            <div
              className="mt-6 rounded-[12px] border p-5 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]"
              style={{
                borderColor: `${accent}30`,
                background: `linear-gradient(180deg, ${accent}10, transparent)`,
              }}
            >
              <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[var(--text-primary)]">
                <Sparkles size={14} style={{ color: accent }} />
                <span>Direct Answer</span>
              </div>
              <p className="mt-2 text-[var(--text-primary)] font-medium">
                {module.directAnswer}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/download">
                <CyanButton size="lg" icon={<Zap size={18} />}>
                  Download DIGI BIZ OS
                </CyanButton>
              </Link>
              <Link to="/pricing">
                <GhostButton size="lg" icon={<ShieldCheck size={18} />}>
                  View £50 Lifetime Licence
                </GhostButton>
              </Link>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Included in DIGI BIZ OS • Windows 10/11 • 100% Local Privacy • Zero Subscription Fees
            </p>
          </div>

          <div className="lg:col-span-5">
            <ThreeDTiltCard glowColor={`${accent}40`} className="p-6">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <span className="font-mono text-[12px] uppercase tracking-wider text-[var(--text-muted)]">
                  Module Specifications
                </span>
                <MonoBadge label="Active Module" active />
              </div>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Target Operating System
                  </p>
                  <p className="font-body text-[14px] font-semibold text-[var(--text-primary)]">
                    Windows 10 / Windows 11 (64-bit)
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Execution Architecture
                  </p>
                  <p className="font-body text-[14px] font-semibold text-[var(--text-primary)]">
                    Local Native Binary + Air-Gapped Option
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Licensing & Pricing
                  </p>
                  <p className="font-body text-[14px] font-semibold text-[var(--text-primary)]">
                    One-Time Lifetime (£50) — $0 Monthly Fees
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Desktop Integration Synergy
                  </p>
                  <p className="font-body text-[13px] text-[var(--text-secondary)]">
                    {module.openSourceSynergy}
                  </p>
                </div>
              </div>
            </ThreeDTiltCard>
          </div>
        </div>

        {/* ── 3D HOLOGRAPHIC PINNED SOFTWARE SHOWCASE ─────────── */}
        {((module.screenshots && module.screenshots.length > 0) || (module.image && module.image.src)) && (
          <div className="mt-12">
            <InteractiveSoftwareScreenshotStage
              src={module.image?.src}
              alt={module.image?.alt || `${module.name} Interface`}
              caption={module.image?.caption}
              screenshots={module.screenshots}
              accentColor={accent}
            />
          </div>
        )}

        {/* PROBLEM SOLVED & TARGET AUDIENCE */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <ThreeDTiltCard glowColor={`${accent}30`} className="p-7">
            <h2 className="flex items-center gap-2.5 font-display text-[20px] font-bold text-[var(--text-primary)]">
              <ShieldCheck size={20} style={{ color: accent }} />
              Business Problems Solved
            </h2>
            <ul className="mt-5 space-y-3">
              {module.problemSolved.map((prob, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: accent }} />
                  <span className="font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">
                    {prob}
                  </span>
                </li>
              ))}
            </ul>
          </ThreeDTiltCard>

          <ThreeDTiltCard glowColor="rgba(59,130,246,0.3)" className="p-7">
            <h2 className="flex items-center gap-2.5 font-display text-[20px] font-bold text-[var(--text-primary)]">
              <TrendingUp size={20} color="#3B82F6" />
              Who Is This Built For?
            </h2>
            <ul className="mt-5 space-y-3">
              {module.targetAudience.map((aud, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold text-white"
                    style={{ background: "#3B82F6" }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">
                    {aud}
                  </span>
                </li>
              ))}
            </ul>
          </ThreeDTiltCard>
        </div>
      </SectionWrapper>

      {/* ── INTERACTIVE WORKBENCH (DYNAMIC SIMULATION) ──────── */}
      <SectionWrapper className="py-14 md:py-20">
        <SubPageInteractiveWorkbench
          capabilities={workbenchCapabilities}
          accentColor={accent}
          moduleName={module.name}
        />
      </SectionWrapper>

      {/* ── ASYMMETRICAL 4-CARD BENTO GRID ──────────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)] py-14 md:py-20">
        <SubPageBentoShowcase
          moduleName={module.name}
          accentColor={accent}
        />
      </SectionWrapper>

      {/* ── INTERACTIVE SOFTWARE GALLERY SHOWCASE ───────────── */}
      <SectionWrapper className="py-14 md:py-20">
        <SubPageGalleryShowcase
          slug={module.slug}
          title={`Live Software Interface: ${module.name}`}
          eyebrow="Interactive Screenshot Showcase"
          accentColor={accent}
        />
      </SectionWrapper>

      {/* ── ANIMATED WORKFLOW BEAMS ─────────────────────────── */}
      <SectionWrapper className="py-14 md:py-20">
        <SubPageWorkflowBeam
          title={`How ${module.name} Executes in DIGI BIZ OS`}
          subtitle="End-to-end multi-step workflow automated entirely on your local PC."
          steps={workflowSteps}
          accentColor={accent}
        />
      </SectionWrapper>

      {/* ── SPECIFIC VALUE COMPARISON CHART ─────────────────── */}
      <SectionWrapper className="py-14 md:py-20">
        <SubPageComparisonChart
          slug={module.slug}
          title={`How ${module.name} Compares to Expensive Paid Tools`}
          accentColor={accent}
        />
      </SectionWrapper>

      {/* ── FAQ SECTION ─────────────────────────────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)] py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowLabel text="Frequently Asked Questions" icon={HelpCircle} />
          <h2 className="mt-3 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[36px]">
            Everything You Need to Know
          </h2>

          <div className="mt-10 space-y-4 text-left">
            {module.faq.map((f, i) => (
              <GlassCard key={i} className="p-6">
                <h3 className="font-display text-[16.5px] font-bold text-[var(--text-primary)]">
                  {f.q}
                </h3>
                <p className="mt-3 font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">
                  {f.a}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── RELATED MODULES (INTERNAL LINKING SILO) ─────────── */}
      <SectionWrapper className="border-t border-[var(--border-subtle)] py-14 md:py-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <EyebrowLabel text="Connected Ecosystem" icon={Bot} />
          <h2 className="mt-3 font-display text-[26px] font-bold text-[var(--text-primary)]">
            Related Business Modules in DIGI BIZ OS
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {module.relatedModules.map((rel) => (
              <Link
                key={rel.slug}
                to={`/modules/${rel.slug}` as any}
                className="group block rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-left transition hover:border-[var(--cyan)] hover:bg-white/[0.04]"
              >
                <h3 className="font-display text-[16px] font-bold text-[var(--text-primary)] group-hover:text-[var(--cyan)] transition-colors">
                  {rel.name}
                </h3>
                <p className="mt-2 font-body text-[13px] leading-relaxed text-[var(--text-secondary)]">
                  {rel.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 font-mono text-[11px] text-[var(--cyan)]">
                  <span>Explore Module</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
