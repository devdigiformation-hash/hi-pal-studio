import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Bot, Code2, MessageSquare, Sparkles, Zap, type LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import MonoBadge from "@/components/MonoBadge";

const STATS = [
  { value: "50+", label: "AI Models Included" },
  { value: "Free", label: "Open Models Library" },
  { value: "Premium", label: "Frontier Models Included" },
  { value: "1-Click", label: "Model Switching" },
];

const CARDS: { icon: LucideIcon; color: string; title: string; body: string; tags: string[] }[] = [
  {
    icon: Sparkles,
    color: "var(--cyan)",
    title: "DIGI AI — 50+ Models In One Place",
    body: "Reasoning models, fast chat models, vision models and long-context models — all bundled and ready. No juggling subscriptions, no separate billing, no setup.",
    tags: ["Reasoning", "Vision", "Long Context", "Fast Chat"],
  },
  {
    icon: Code2,
    color: "var(--purple)",
    title: "Coding Workspace",
    body: "A full workspace for building: write, refactor, debug and ship real projects with an AI pair that understands your files and your intent.",
    tags: ["Build", "Refactor", "Debug", "Ship"],
  },
  {
    icon: MessageSquare,
    color: "var(--amber)",
    title: "Type or Talk — Your Choice",
    body: "Chat by keyboard when you're heads-down, speak when your hands are busy. Same intelligence, same memory, same execution power either way.",
    tags: ["Voice", "Chat", "Shared Memory"],
  },
  {
    icon: Zap,
    color: "#F472B6",
    title: "Premium Power, Zero Extra Cost",
    body: "Frontier-grade premium models are included inside DIGI BIZ OS — plus generous free model quotas so heavy work never stalls mid-task.",
    tags: ["Included", "Generous Quota", "No Per-Seat Fees"],
  },
];

export default function ModelsSection() {
  return (
    <SectionWrapper id="models">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="DIGI AI · Model Universe" color="var(--cyan)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Every Model.{" "}
            <GradientText from="#8B7CF6" to="#4DA3FF">
              One Licence. Zero Limits.
            </GradientText>
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-5 max-w-[720px] font-body text-[16px] leading-[1.8] text-[var(--text-secondary)] md:text-[17px]">
            Free open models and premium frontier models live side by side inside DIGI BIZ OS.
            Switch instantly, keep your context, and let every task run on the model best suited for
            it.
          </p>
        </div>

        <div className="reveal-item delay-2 mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s) => (
            <GlassCard key={s.label} className="p-6 text-center">
              <div className="font-display text-[26px] font-bold text-[var(--cyan)] md:text-[32px]">
                {s.value}
              </div>
              <div className="mt-2 font-code text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                {s.label}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard glowColor={c.color} className="h-full p-8">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border"
                    style={{ borderColor: `${c.color}44`, background: `${c.color}14` }}
                  >
                    <Icon size={20} color={c.color} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-[20px] font-bold text-[var(--text-primary)]">
                    {c.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                    {c.body}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <MonoBadge key={t} color={c.color}>
                        {t}
                      </MonoBadge>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center justify-center gap-2">
          <Link to="/models/deepseek-r1">
            <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3.5 py-1.5 font-mono text-[12px] text-blue-400 transition-colors hover:border-blue-400 hover:text-white">
              DeepSeek R1
            </span>
          </Link>
          <Link to="/models/llama-3-3">
            <span className="rounded-full border border-sky-500/40 bg-sky-500/10 px-3.5 py-1.5 font-mono text-[12px] text-sky-400 transition-colors hover:border-sky-400 hover:text-white">
              Llama 3.3 70B
            </span>
          </Link>
          <Link to="/models/qwen-2-5">
            <span className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3.5 py-1.5 font-mono text-[12px] text-indigo-400 transition-colors hover:border-indigo-400 hover:text-white">
              Qwen 2.5 Coder
            </span>
          </Link>
          <Link to="/models/phi-4">
            <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1.5 font-mono text-[12px] text-cyan-400 transition-colors hover:border-cyan-400 hover:text-white">
              Microsoft Phi-4
            </span>
          </Link>
          <Link to="/models/whisper">
            <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-[12px] text-emerald-400 transition-colors hover:border-emerald-400 hover:text-white">
              OpenAI Whisper
            </span>
          </Link>
          <Link to="/models/mistral-large">
            <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-3.5 py-1.5 font-mono text-[12px] text-orange-400 transition-colors hover:border-orange-400 hover:text-white">
              Mistral Large
            </span>
          </Link>
        </div>

        <div className="reveal-item delay-3 mt-6 flex flex-wrap items-center justify-center gap-3">
          <Bot size={16} className="text-[var(--text-muted)]" />
          <span className="font-code text-[12px] text-[var(--text-muted)]">
            Model routing is automatic — DIGI BIZ OS picks the right engine for every task.
          </span>
          <Link to="/models" className="font-mono text-[12px] font-semibold text-[var(--cyan)] underline underline-offset-4 hover:text-white">
            Explore All 50+ Free & Open Models →
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
