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
import { buildMeta, breadcrumbLd, softwareLd } from "@/lib/seo";

const TITLE = "Free AI Models & Open Source LLMs for Windows | DIGI BIZ OS";
const DESC =
  "Discover and deploy 200+ free open-source AI models locally on Windows: DeepSeek R1, Llama 3.3, Qwen 2.5 Coder, Phi-4, Whisper, Gemma 2, and Hermes 3 with DIGI BIZ OS.";

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
          <p className="mx-auto mt-4 max-w-[740px] font-body text-[16px] leading-relaxed text-[var(--text-secondary)]">
            Explore the complete directory of free open-weights and frontier AI models supported inside DIGI BIZ OS. Run models 100% offline with zero cloud fees, or connect high-speed APIs for enterprise reasoning.
          </p>

          {/* DIRECT ANSWER BLOCK */}
          <div className="mx-auto mt-8 max-w-3xl rounded-[12px] border border-[var(--cyan)]/30 bg-[var(--cyan)]/5 p-6 text-left">
            <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[var(--cyan)]">
              <Sparkles size={15} />
              <span>Direct Answer — How Does DIGI BIZ OS Run AI Models?</span>
            </div>
            <p className="mt-3 font-body text-[15px] leading-[1.8] text-[var(--text-primary)] font-medium">
              DIGI BIZ OS features a unified model execution layer that connects directly to local runtimes (Ollama, Jan AI, LM Studio, llama.cpp) and cloud providers (Groq, Together, OpenRouter, Anthropic, OpenAI). You can switch models with one click, run 100% air-gapped without internet, and route specific business tasks (CRM, Code, Audio, OCR) to the optimal model.
            </p>
          </div>
        </div>

        {/* MODEL CARDS GRID */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MODELS_LIST.map((mod) => {
            const accent = mod.accentColor || "#3B82F6";
            return (
              <Link key={mod.slug} to={`/models/${mod.slug}`} className="group block h-full">
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
