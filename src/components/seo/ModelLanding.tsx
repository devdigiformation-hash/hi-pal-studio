import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  Cpu,
  ShieldCheck,
  Zap,
  ArrowRight,
  HardDrive,
  CheckCircle2,
  HelpCircle,
  Layers,
  Terminal,
  Bot,
  Activity,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import MonoBadge from "@/components/MonoBadge";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import type { ModelEntity } from "@/content/models-data";

export default function ModelLanding({ model }: { model: ModelEntity }) {
  const accent = model.accentColor || "#3B82F6";

  return (
    <main className="min-h-screen pt-[100px] md:pt-[120px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Models", path: "/models" },
            { name: model.name, path: `/models/${model.slug}` },
          ]}
        />

        {/* HERO SECTION */}
        <div className="mt-8 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <EyebrowLabel text={model.eyebrow} icon={Cpu} />
            <h1 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold leading-[1.12] text-[var(--text-primary)] md:text-[46px] lg:text-[52px]">
              {model.h1}{" "}
              <GradientText
                text={model.h1Gradient}
                gradient={`linear-gradient(135deg, ${accent}, #FFFFFF)`}
              />
            </h1>

            {/* DIRECT ANSWER BLOCK FOR SEARCH INTENT & AI OVERVIEWS */}
            <div
              className="mt-6 rounded-[12px] border p-5 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]"
              style={{
                borderColor: `${accent}35`,
                background: `linear-gradient(180deg, ${accent}12, transparent)`,
              }}
            >
              <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[var(--text-primary)]">
                <Sparkles size={14} style={{ color: accent }} />
                <span>Direct Answer</span>
              </div>
              <p className="mt-2 text-[var(--text-primary)] font-medium">
                {model.directAnswer}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/download">
                <CyanButton size="lg" icon={<Zap size={18} />}>
                  Run in DIGI BIZ OS
                </CyanButton>
              </Link>
              <Link to="/modules">
                <GhostButton size="lg" icon={<Layers size={18} />}>
                  Explore Business Modules
                </GhostButton>
              </Link>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Works Offline • 100% Data Sovereignty • Windows 10/11 Compatible
            </p>
          </div>

          <div className="lg:col-span-5">
            <GlassCard glowColor={accent} className="p-6">
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
                <span className="font-mono text-[12px] uppercase tracking-wider text-[var(--text-muted)]">
                  Model Specifications
                </span>
                <MonoBadge label={model.category} active />
              </div>
              <div className="mt-5 space-y-4">
                <div>
                  <p className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Original Creator / Lab
                  </p>
                  <p className="font-body text-[14px] font-semibold text-[var(--text-primary)]">
                    {model.creator}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Licensing & Commercial Use
                  </p>
                  <p className="font-body text-[14px] font-semibold text-[var(--text-primary)]">
                    {model.license}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Local & Offline Execution
                  </p>
                  <p className="font-body text-[14px] font-semibold text-[var(--text-primary)]">
                    {model.localSupport ? "Supported (100% Air-Gapped)" : "Cloud API Endpoints"}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Context Window
                  </p>
                  <p className="font-body text-[14px] font-semibold text-[var(--text-primary)]">
                    {model.contextWindow}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase text-[var(--text-muted)]">
                    Recommended Hardware
                  </p>
                  <p className="font-body text-[13px] text-[var(--text-secondary)]">
                    {model.hardwareRequirement}
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* OVERVIEW & CAPABILITIES */}
        <div className="mt-20">
          <div className="text-center">
            <EyebrowLabel text="Technical Overview" icon={Activity} />
            <h2 className="mt-3 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[38px]">
              Why {model.name} Matters for Desktop AI
            </h2>
            <p className="mx-auto mt-4 max-w-[720px] font-body text-[15px] leading-relaxed text-[var(--text-secondary)]">
              {model.overview}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {model.keyCapabilities.map((cap, i) => (
              <GlassCard key={i} glowColor={accent} className="p-6">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: `${accent}20`, color: accent }}
                >
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="mt-4 font-display text-[18px] font-bold text-[var(--text-primary)]">
                  {cap.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">
                  {cap.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* DIGI BIZ OS SYNERGY */}
        <div className="mt-24">
          <GlassCard glowColor={accent} className="p-8 md:p-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <EyebrowLabel text="Native Ecosystem Integration" icon={Layers} />
                <h2 className="mt-3 font-display text-[24px] font-bold text-[var(--text-primary)] md:text-[32px]">
                  How {model.name} Executes inside DIGI BIZ OS
                </h2>
                <p className="mt-4 font-body text-[15px] leading-relaxed text-[var(--text-secondary)]">
                  {model.digiSynergy}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link to="/modules/crm">
                    <MonoBadge color="var(--cyan)">Digi CRM</MonoBadge>
                  </Link>
                  <Link to="/voice-ai">
                    <MonoBadge color="var(--purple)">JARVIS Voice</MonoBadge>
                  </Link>
                  <Link to="/modules/code">
                    <MonoBadge color="var(--amber)">Digi Code</MonoBadge>
                  </Link>
                  <Link to="/modules/docs">
                    <MonoBadge color="var(--green)">Digi Docs</MonoBadge>
                  </Link>
                </div>
              </div>
              <div className="text-center md:col-span-4 md:text-right">
                <Link to="/download">
                  <CyanButton size="lg" icon={<Zap size={18} />}>
                    Download Installer
                  </CyanButton>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* FAQS */}
        <div className="mt-24">
          <div className="text-center">
            <EyebrowLabel text="Frequently Asked Questions" icon={HelpCircle} />
            <h2 className="mt-3 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[36px]">
              {model.name} Questions & Answers
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {model.faq.map((f, i) => (
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

        {/* RELATED / ALTERNATIVE MODELS */}
        <div className="mt-24 border-t border-[var(--border-subtle)] pt-16">
          <div className="text-center">
            <EyebrowLabel text="Model Alternatives" icon={Bot} />
            <h2 className="mt-3 font-display text-[26px] font-bold text-[var(--text-primary)]">
              Explore Alternative AI Models
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {model.alternatives.map((alt) => (
              <Link key={alt.slug} to={`/models/${alt.slug}`} className="group block">
                <GlassCard
                  glowColor={accent}
                  className="h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
                >
                  <h3 className="flex items-center justify-between font-display text-[17px] font-bold text-[var(--text-primary)] group-hover:text-[var(--cyan)]">
                    <span>{alt.name}</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </h3>
                  <p className="mt-2 font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
                    View specifications, offline benchmarks, and DIGI BIZ OS deployment options.
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
