import { KeyRound, Lock, RefreshCw, ShieldCheck, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import GradientText from "@/components/GradientText";

const PILLARS: { icon: LucideIcon; color: string; title: string; body: string }[] = [
  {
    icon: Lock,
    color: "var(--cyan)",
    title: "Local Execution Architecture",
    body: "Desktop Control and automation run 100% on your hardware. No cloud processing of your desktop actions.",
  },
  {
    icon: KeyRound,
    color: "var(--purple)",
    title: "Encrypted API Key Storage",
    body: "All model provider keys stored locally with encrypted session tokens. Never transmitted.",
  },
  {
    icon: RefreshCw,
    color: "var(--amber)",
    title: "Provider-Agnostic Routing",
    body: "Switch between cloud and local models from any provider — zero vendor lock-in.",
  },
];

const TRUST_STATS = [
  { k: "0", v: "Bytes sent to cloud" },
  { k: "AES-256", v: "Key vault encryption" },
  { k: "100%", v: "On-device execution" },
];

export default function SecuritySection() {
  return (
    <SectionWrapper id="security" className="relative overflow-hidden bg-[var(--bg-surface)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(50% 55% at 78% 40%, rgba(47,224,200,0.10), transparent 70%), radial-gradient(40% 45% at 10% 80%, rgba(139,124,246,0.10), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <EyebrowLabel text="Enterprise Privacy" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[44px]">
            Your Data.{" "}
            <GradientText from="#4DA3FF" to="#2FE0C8">
              Your Machine. Your Rules.
            </GradientText>
          </h2>
          <p className="reveal-item delay-2 mt-5 max-w-[480px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
            Every keystroke, click and capture is processed on your own machine — privacy is the
            architecture, not a setting.
          </p>

          <div className="mt-10 space-y-3">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex gap-4 rounded-[var(--r-lg)] border border-transparent p-4 transition-all duration-300 hover:border-[var(--border-glass)] hover:bg-[var(--bg-glass-light)]"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-4 h-[calc(100%-2rem)] w-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background: `linear-gradient(180deg, transparent, ${p.color}, transparent)`,
                    }}
                  />
                  <div
                    className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border border-[var(--border-glass)] transition-transform duration-300 group-hover:-translate-y-0.5"
                    style={{
                      background: `linear-gradient(140deg, color-mix(in oklab, ${p.color} 16%, transparent), var(--bg-glass-light))`,
                      boxShadow: `0 0 0 1px color-mix(in oklab, ${p.color} 14%, transparent), 0 12px 30px -18px ${p.color}`,
                    }}
                  >
                    <Icon size={19} color={p.color} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-display text-[17px] font-bold tracking-[-0.01em] text-[var(--text-primary)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-[440px] font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--border-glass)] pt-6">
            {TRUST_STATS.map((s) => (
              <div key={s.v}>
                <div className="font-code text-[18px] font-bold text-[var(--cyan)] md:text-[22px]">
                  {s.k}
                </div>
                <div className="mt-1 font-body text-[11px] uppercase tracking-[0.1em] text-[var(--text-secondary)]">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-item delay-3">
          <GlassCard className="relative overflow-hidden p-8">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 -top-24 h-56 opacity-60 blur-2xl"
              style={{
                background:
                  "radial-gradient(50% 60% at 50% 50%, rgba(47,224,200,0.25), transparent 70%)",
              }}
            />
            <div className="relative mb-8 flex items-center justify-between">
              <span className="font-code text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                Data Boundary
              </span>
              <span className="flex items-center gap-2 font-code text-[11px] text-[var(--cyan)]">
                <ShieldCheck size={13} strokeWidth={1.8} /> Sealed
              </span>
            </div>
            <div className="relative">
              <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full">
                <line
                  x1="50%"
                  y1="70"
                  x2="50%"
                  y2="130"
                  stroke="rgba(47,224,200,0.35)"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                  className="animate-draw-wire"
                />
                <line
                  x1="50%"
                  y1="190"
                  x2="25%"
                  y2="250"
                  stroke="rgba(139,124,246,0.35)"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                  className="animate-draw-wire"
                  style={{ animationDelay: "0.3s" }}
                />
                <line
                  x1="50%"
                  y1="190"
                  x2="75%"
                  y2="250"
                  stroke="rgba(245,166,35,0.35)"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                  className="animate-draw-wire"
                  style={{ animationDelay: "0.6s" }}
                />
              </svg>

              <div className="relative space-y-12">
                <div
                  className="mx-auto w-fit rounded-[var(--r-md)] border border-[var(--border-glass)] px-6 py-3 text-center font-code text-[12px] text-[var(--text-secondary)]"
                  style={{ background: "var(--bg-glass-light)" }}
                >
                  Your Desktop
                </div>
                <div
                  className="mx-auto w-fit rounded-[var(--r-md)] border border-[var(--cyan-border)] px-8 py-4 text-center font-display text-[14px] font-bold text-[var(--cyan)]"
                  style={{ background: "var(--bg-glass)", boxShadow: "var(--glow-cyan)" }}
                >
                  DIGI BIZ OS
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-[var(--r-md)] border border-[var(--border-glass)] px-4 py-3 text-center font-code text-[11px] text-[var(--text-secondary)]"
                    style={{ background: "var(--bg-glass-light)" }}
                  >
                    Local Desktop Agent
                  </div>
                  <div
                    className="rounded-[var(--r-md)] border border-[var(--border-glass)] px-4 py-3 text-center font-code text-[11px] text-[var(--text-secondary)]"
                    style={{ background: "var(--bg-glass-light)" }}
                  >
                    Encrypted Keys
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <MonoBadge>Air-Gapped Mode Available</MonoBadge>
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
