import { KeyRound, Lock, RefreshCw, type LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";

const PILLARS: { icon: LucideIcon; color: string; title: string; body: string }[] = [
  {
    icon: Lock,
    color: "var(--cyan)",
    title: "Local Execution Architecture",
    body: "PyAutoGUI and automation run 100% on your hardware. No cloud processing of your desktop actions.",
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
    body: "Switch between Gemini, Groq, OpenRouter, and local Ollama models — zero vendor lock-in.",
  },
];

export default function SecuritySection() {
  return (
    <SectionWrapper id="security" className="bg-[var(--bg-surface)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <div>
          <EyebrowLabel text="Enterprise Privacy" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[44px]">
            Local-First. Your Data Never Leaves.
          </h2>
          <div className="mt-10 space-y-8">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className={`reveal-item delay-${i + 2} flex gap-4`}>
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border-glass)]"
                    style={{ background: "var(--bg-glass-light)" }}
                  >
                    <Icon size={19} color={p.color} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-display text-[17px] font-bold text-[var(--text-primary)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-w-[440px] font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                      {p.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reveal-item delay-3">
          <GlassCard className="p-8">
            <div className="relative">
              <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full">
                <line
                  x1="50%" y1="70" x2="50%" y2="130"
                  stroke="rgba(47,224,200,0.35)" strokeWidth="1" strokeDasharray="4 5"
                  className="animate-draw-wire"
                />
                <line
                  x1="50%" y1="190" x2="25%" y2="250"
                  stroke="rgba(139,124,246,0.35)" strokeWidth="1" strokeDasharray="4 5"
                  className="animate-draw-wire" style={{ animationDelay: "0.3s" }}
                />
                <line
                  x1="50%" y1="190" x2="75%" y2="250"
                  stroke="rgba(245,166,35,0.35)" strokeWidth="1" strokeDasharray="4 5"
                  className="animate-draw-wire" style={{ animationDelay: "0.6s" }}
                />
              </svg>

              <div className="relative space-y-12">
                <div className="mx-auto w-fit rounded-[var(--r-md)] border border-[var(--border-glass)] px-6 py-3 text-center font-code text-[12px] text-[var(--text-secondary)]"
                  style={{ background: "var(--bg-glass-light)" }}>
                  Your Desktop
                </div>
                <div className="mx-auto w-fit rounded-[var(--r-md)] border border-[var(--cyan-border)] px-8 py-4 text-center font-display text-[14px] font-bold text-[var(--cyan)]"
                  style={{ background: "var(--bg-glass)", boxShadow: "var(--glow-cyan)" }}>
                  DIGI BIZ OS
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[var(--r-md)] border border-[var(--border-glass)] px-4 py-3 text-center font-code text-[11px] text-[var(--text-secondary)]"
                    style={{ background: "var(--bg-glass-light)" }}>
                    Local Python Agent
                  </div>
                  <div className="rounded-[var(--r-md)] border border-[var(--border-glass)] px-4 py-3 text-center font-code text-[11px] text-[var(--text-secondary)]"
                    style={{ background: "var(--bg-glass-light)" }}>
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
