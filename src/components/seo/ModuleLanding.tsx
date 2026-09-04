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
import type { ModuleData } from "@/content/modules-data";

export default function ModuleLanding({ module }: { module: ModuleData }) {
  const accent = module.accentColor || "#10B981";

  return (
    <main className="min-h-screen pt-[100px] md:pt-[120px]">
      <SectionWrapper>
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
            <GlassCard glowColor={accent} className="p-6">
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
            </GlassCard>
          </div>
        </div>

        {/* PROBLEM SOLVED & TARGET AUDIENCE */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <GlassCard glowColor={accent} className="p-8">
            <h2 className="flex items-center gap-2.5 font-display text-[22px] font-bold text-[var(--text-primary)]">
              <ShieldCheck size={22} style={{ color: accent }} />
              Business Problems Solved
            </h2>
            <ul className="mt-6 space-y-3.5">
              {module.problemSolved.map((prob, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0" style={{ color: accent }} />
                  <span className="font-body text-[14.5px] leading-relaxed text-[var(--text-secondary)]">
                    {prob}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard glowColor="#3B82F6" className="p-8">
            <h2 className="flex items-center gap-2.5 font-display text-[22px] font-bold text-[var(--text-primary)]">
              <TrendingUp size={22} color="#3B82F6" />
              Who Is This Built For?
            </h2>
            <ul className="mt-6 space-y-3.5">
              {module.targetAudience.map((aud, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold text-white"
                    style={{ background: "#3B82F6" }}
                  >
                    {i + 1}
                  </span>
                  <span className="font-body text-[14.5px] leading-relaxed text-[var(--text-secondary)]">
                    {aud}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* CORE CAPABILITIES */}
        <div className="mt-24">
          <div className="text-center">
            <EyebrowLabel text="Features & Intelligence" icon={Cpu} />
            <h2 className="mt-3 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[38px]">
              Key Capabilities of {module.name}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {module.coreCapabilities.map((cap, i) => (
              <GlassCard key={i} glowColor={accent} className="p-6">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: `${accent}20`, color: accent }}
                >
                  <Zap size={20} />
                </div>
                <h3 className="mt-4 font-display text-[18px] font-bold text-[var(--text-primary)]">
                  {cap.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">
                  {cap.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* BUSINESS WORKFLOW */}
        <div className="mt-24">
          <div className="text-center">
            <EyebrowLabel text="Step-by-Step Flow" icon={Workflow} />
            <h2 className="mt-3 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[38px]">
              How {module.name} Executes in DIGI BIZ OS
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {module.workflows.map((wf) => (
              <GlassCard key={wf.step} glowColor={accent} className="relative p-6">
                <div
                  className="font-mono text-[32px] font-black leading-none"
                  style={{ color: `${accent}40` }}
                >
                  {wf.step}
                </div>
                <h3 className="mt-3 font-display text-[18px] font-bold text-[var(--text-primary)]">
                  {wf.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">
                  {wf.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* SPECIFIC VALUE COMPARISON CHART */}
        <SubPageComparisonChart
          slug={module.slug}
          title={`How ${module.name} Compares to Expensive Paid Tools`}
          accentColor={accent}
        />

        {/* FAQ SECTION */}
        <div className="mt-24">
          <div className="text-center">
            <EyebrowLabel text="Frequently Asked Questions" icon={HelpCircle} />
            <h2 className="mt-3 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[36px]">
              Everything You Need to Know
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
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

        {/* RELATED MODULES (INTERNAL LINKING SILO) */}
        <div className="mt-24 border-t border-[var(--border-subtle)] pt-16">
          <div className="text-center">
            <EyebrowLabel text="Connected Ecosystem" icon={Bot} />
            <h2 className="mt-3 font-display text-[26px] font-bold text-[var(--text-primary)]">
              Related Business Modules in DIGI BIZ OS
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {module.relatedModules.map((rel) => (
              <Link key={rel.slug} to={`/modules/${rel.slug}`} className="group block">
                <GlassCard
                  glowColor={accent}
                  className="h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
                >
                  <h3 className="flex items-center justify-between font-display text-[17px] font-bold text-[var(--text-primary)] group-hover:text-[var(--cyan)]">
                    <span>{rel.name}</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="mt-2 font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
                    {rel.description}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>

        {/* CONVERSION BOTTOM CTA */}
        <div className="mt-24 text-center">
          <GlassCard glowColor={accent} className="p-10 md:p-14">
            <h2 className="font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[38px]">
              Deploy {module.name} on Your Desktop Today
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] font-body text-[15px] leading-relaxed text-[var(--text-secondary)]">
              Get full access to {module.name}, JARVIS voice control, multi-agent workflows, and 14 open-source tool integrations with a single £50 lifetime licence.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/download">
                <CyanButton size="lg" icon={<Zap size={18} />}>
                  Download Windows Installer
                </CyanButton>
              </Link>
              <Link to="/pricing">
                <GhostButton size="lg" icon={<ShieldCheck size={18} />}>
                  Get Lifetime Access (£50)
                </GhostButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>
    </main>
  );
}
