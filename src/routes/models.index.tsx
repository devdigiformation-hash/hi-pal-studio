import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Sparkles, Zap, HardDrive, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { MODELS_LIST } from "@/content/models-data";
import { buildMeta, breadcrumbLd, softwareLd, faqLd } from "@/lib/seo";

const TITLE = "Free AI Models & Open Source LLMs for Windows | DIGI BIZ OS";
const DESC =
  "Deploy 50+ free open-source AI models locally on Windows — DeepSeek R1, Llama 3.3, Qwen 2.5 Coder, Phi-4, Whisper and Gemma 2.";

// Answer-engine (AEO) questions for the model directory.
const FAQS = [
  {
    q: "Are these AI models really free?",
    a: "Yes. The models listed here are open-source and free to download and run on your own Windows PC. You pay nothing per token or per request when you run them locally — your only cost is the hardware you already own.",
  },
  {
    q: "Can I run AI models offline on Windows?",
    a: "Yes. DIGI BIZ OS downloads open-source models to your machine and runs them locally, so they keep working with no internet connection and your prompts and files never leave your PC.",
  },
  {
    q: "Which open-source model should I start with?",
    a: "For general business work a mid-size instruction model such as Llama 3.3 or Qwen 2.5 is a balanced starting point. Use DeepSeek R1 for step-by-step reasoning, Qwen 2.5 Coder for code, and Whisper for speech-to-text.",
  },
  {
    q: "What hardware do I need to run local AI models?",
    a: "Smaller models run on a normal laptop with 8–16 GB of RAM. Larger models are faster and more capable with a dedicated GPU. DIGI BIZ OS lets you pick a model size that matches your machine, and you can switch at any time.",
  },
  {
    q: "Can I use cloud models instead of local ones?",
    a: "Yes. You can connect cloud APIs alongside local models and let DIGI BIZ OS route each task to whichever is best — local for privacy and zero cost, cloud when you want maximum speed or reasoning depth.",
  },
  {
    q: "Is running open-source models safe for business data?",
    a: "Running a model locally keeps your business data on your own machine, which is why many owners prefer it for CRM records, documents and client information. Nothing is uploaded unless you deliberately choose a cloud model.",
  },
];

export const Route = createFileRoute("/models/")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/models", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "AI Models", path: "/models" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(softwareLd("DIGI BIZ OS Model Universe", DESC, "/models")),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqLd(FAQS)),
        },
      ],
    };
  },
  component: ModelsDirectoryPage,
});

function ModelsDirectoryPage() {
  return (
    <main className="min-h-screen pt-[100px] md:pt-[120px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "AI Models", path: "/models" },
          ]}
        />

        <div className="mt-8 text-center">
          <EyebrowLabel text="Open Intelligence Hub" icon={Cpu} />
          <h1 className="mt-4 font-display text-[34px] font-bold leading-[1.12] text-[var(--text-primary)] md:text-[50px]">
            Free & Open-Source AI Models for{" "}
            <GradientText text="Windows & Local PC" gradient="linear-gradient(135deg, #3B82F6, #2FE0C8)" />
          </h1>
          <p className="answer mx-auto mt-4 max-w-[740px] font-body text-[16px] leading-relaxed text-[var(--text-secondary)]">
            Explore the complete directory of free open-weights and frontier AI models supported inside DIGI BIZ OS. Run models 100% offline with zero cloud fees, or connect high-speed APIs for enterprise reasoning.
          </p>
          <div id="tldr-summary" className="summary sr-only">
            <h2>TL;DR</h2>
            <p>
              Run 50+ open-source AI models directly on your Windows PC with DIGI BIZ OS: DeepSeek R1, Llama 3.3, Qwen 2.5 Coder, Phi-4, Whisper, Gemma 2, and Hermes 3 with zero subscription fees.
            </p>
          </div>
        </div>

        {/* MODEL CARDS GRID */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODELS_LIST.map((mod) => {
            const accent = mod.accentColor || "#3B82F6";
            return (
              <Link key={mod.slug} to={`/models/${mod.slug}` as any} className="group block h-full">
                <GlassCard
                  glowColor={accent}
                  className="flex h-full flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className="rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider"
                        style={{
                          color: accent,
                          borderColor: `${accent}40`,
                          background: `${accent}15`,
                        }}
                      >
                        {mod.category}
                      </span>
                      <span className="font-mono text-[11px] text-[var(--text-muted)]">
                        {mod.creator}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-[20px] font-bold text-[var(--text-primary)] group-hover:text-[var(--cyan)]">
                      {mod.name}
                    </h2>

                    <p className="mt-3 font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)] line-clamp-3">
                      {mod.directAnswer}
                    </p>

                    <div className="mt-4 space-y-1.5 border-t border-[var(--border-subtle)] pt-3 text-[12px] text-[var(--text-muted)]">
                      <div className="flex justify-between">
                        <span>License:</span>
                        <span className="font-medium text-[var(--text-primary)]">{mod.license}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Offline Execution:</span>
                        <span className="font-medium text-[var(--cyan)]">
                          {mod.localSupport ? "Yes (Local GPU/CPU)" : "Cloud API"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[var(--border-subtle)] pt-4 font-body text-[13px] font-semibold text-[var(--cyan)]">
                    <span>View Specifications & Benchmarks</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </GlassCard>
              </Link>
            );
          })}
        </div>

        {/* BOTTOM ECOSYSTEM CTA */}
        <div className="mt-20 text-center">
          <GlassCard glowColor="#3B82F6" className="p-10 md:p-14">
            <h2 className="font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[38px]">
              Deploy Any AI Model on Your PC with DIGI BIZ OS
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] font-body text-[15px] leading-relaxed text-[var(--text-secondary)]">
              Get full offline model management, Whisper voice transcription, JARVIS control, and 8 business modules for £50 lifetime.
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
