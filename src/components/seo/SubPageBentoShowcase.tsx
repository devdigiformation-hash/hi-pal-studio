import { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  ShieldCheck,
  Zap,
  Cpu,
  Brain,
  Layers,
  Sparkles,
  Lock,
  ArrowRight,
  Database,
  Activity,
  HardDrive,
  Clock,
  Mic,
} from "lucide-react";
import ThreeDTiltCard from "@/components/ui/ThreeDTiltCard";
import MonoBadge from "@/components/MonoBadge";

interface Props {
  moduleName?: string;
  accentColor?: string;
}

export default function SubPageBentoShowcase({
  moduleName = "Desktop Engine",
  accentColor = "var(--cyan)",
}: Props) {
  const [activeTab, setActiveTab] = useState<"digi" | "cloud">("digi");

  return (
    <div className="mx-auto max-w-[1180px]">
      <div className="text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--cyan)]">
          Architectural Superiority
        </span>
        <h2 className="mt-2 font-display text-[26px] font-extrabold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
          Engineered for Sovereignty, Speed & Power
        </h2>
        <p className="mx-auto mt-3 max-w-[640px] font-body text-[14.5px] leading-relaxed text-[var(--text-secondary)]">
          Why settle for sluggish browser tabs and monthly subscription lock-in? See what happens under the hood of DIGI BIZ OS.
        </p>
      </div>

      {/* ASYMMETRICAL 4-CARD BENTO GRID */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* CARD 1: LIVE INTERACTIVE TERMINAL ENGINE (7 COLS) */}
        <div className="md:col-span-7">
          <ThreeDTiltCard glowColor={accentColor} className="h-full p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[11.5px]">
                <div className="flex items-center gap-2 text-[var(--text-primary)]">
                  <Terminal size={15} style={{ color: accentColor }} />
                  <span>NATIVE CLI & MCP ENGINE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 font-mono text-[10.5px]">ONLINE // 0ms LATENCY</span>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-[12.5px] leading-relaxed">
                <p className="text-[var(--text-muted)]">
                  <span className="text-[var(--cyan)]">$</span> digi run --task="autonomous-dispatch" --target="{moduleName.toLowerCase().replace(/\s+/g, '-')}"
                </p>
                <p className="mt-2 text-[#3DDC84]">
                  [SYS] Loading native C++ modules... OK (12ms)
                </p>
                <p className="text-white/80">
                  [AI-BRAIN] Reasoning pass complete: 90%+ modules connected.
                </p>
                <p className="text-amber-300/90">
                  [VOICE] Prompt box listening for user voice commands.
                </p>
                <p className="text-[var(--cyan)]">
                  [SUCCESS] Operation completed without external network transmission.
                </p>
              </div>

              <h3 className="mt-5 font-display text-[19px] font-bold text-white">
                Zero Cloud Latency & Terminal Power
              </h3>
              <p className="mt-2 font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
                Direct hardware access allows DIGI BIZ OS to manipulate local files, execute shell workflows, and coordinate database queries instantly — without waiting for cloud round-trips.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[11px] text-[var(--text-muted)]">
              <span>POSIX / Windows Win32 API</span>
              <span className="text-[var(--cyan)]">100% Private Execution</span>
            </div>
          </ThreeDTiltCard>
        </div>

        {/* CARD 2: REVOLVING NEURAL ORBIT MESH (5 COLS) */}
        <div className="md:col-span-5">
          <ThreeDTiltCard glowColor="rgba(139,124,246,0.3)" className="h-full p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--purple)]">
                  Neural Coordination
                </span>
                <MonoBadge color="var(--purple)">90%+ Integrated</MonoBadge>
              </div>

              {/* ORBITING CIRCLES VISUAL */}
              <div className="relative my-8 flex h-44 items-center justify-center">
                {/* OUTER ORBIT RING */}
                <div className="absolute h-40 w-40 rounded-full border border-dashed border-white/15 animate-spin" style={{ animationDuration: "20s" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400">
                    <Database size={13} />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-pink-500/20 border border-pink-400/40 text-pink-400">
                    <Mic size={13} />
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-400">
                    <Zap size={13} />
                  </div>
                </div>

                {/* INNER CORE AI BRAIN */}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--purple)] bg-[rgba(139,124,246,0.2)] shadow-[0_0_30px_rgba(139,124,246,0.5)]">
                  <Brain size={28} className="text-[#A78BFA] animate-pulse" />
                </div>
              </div>

              <h3 className="font-display text-[18px] font-bold text-white">
                Multi-Agent Background Brain
              </h3>
              <p className="mt-2 font-body text-[13px] leading-relaxed text-[var(--text-secondary)]">
                Every task is planned by an intelligent reasoning core before a single line of code or script touches your operating system.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[11px] text-[var(--purple)]">
              Continuous Background Orchestration
            </div>
          </ThreeDTiltCard>
        </div>

        {/* CARD 3: BEFORE VS AFTER COMPARISON TOGGLE (6 COLS) */}
        <div className="md:col-span-6">
          <ThreeDTiltCard glowColor={accentColor} className="h-full p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--cyan)]">
                  Economic & Architectural Comparison
                </span>
                <div className="flex items-center rounded-lg border border-white/10 bg-white/5 p-1">
                  <button
                    onClick={() => setActiveTab("digi")}
                    className="rounded-md px-2.5 py-1 font-mono text-[10px] uppercase font-bold transition"
                    style={{
                      background: activeTab === "digi" ? accentColor : "transparent",
                      color: activeTab === "digi" ? "#000000" : "var(--text-muted)",
                    }}
                  >
                    DIGI BIZ OS
                  </button>
                  <button
                    onClick={() => setActiveTab("cloud")}
                    className="rounded-md px-2.5 py-1 font-mono text-[10px] uppercase font-bold transition"
                    style={{
                      background: activeTab === "cloud" ? "rgba(239,68,68,0.3)" : "transparent",
                      color: activeTab === "cloud" ? "#EF4444" : "var(--text-muted)",
                    }}
                  >
                    Cloud SaaS
                  </button>
                </div>
              </div>

              <div className="mt-5">
                {activeTab === "digi" ? (
                  <div className="space-y-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4 font-body text-[13.5px]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="font-display font-bold text-white">DIGI BIZ OS Architecture</span>
                      <span className="font-mono text-[12px] font-bold text-[#3DDC84]">£50 Lifetime</span>
                    </div>
                    <p className="text-[var(--text-secondary)]">✔ 100% Offline native execution on your PC.</p>
                    <p className="text-[var(--text-secondary)]">✔ No per-seat fees or recurring subscription traps.</p>
                    <p className="text-[var(--text-secondary)]">✔ Sensitive client records never leave your local SSD.</p>
                    <p className="text-[var(--text-secondary)]">✔ BYO wholesale AI keys or run free Ollama offline.</p>
                  </div>
                ) : (
                  <div className="space-y-3 rounded-xl border border-red-500/20 bg-red-500/[0.04] p-4 font-body text-[13.5px]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                      <span className="font-display font-bold text-white">Traditional Monthly SaaS</span>
                      <span className="font-mono text-[12px] font-bold text-red-400">$180-$400 / month</span>
                    </div>
                    <p className="text-[var(--text-secondary)]">✖ Trapped in browser tabs with constant cloud latency.</p>
                    <p className="text-[var(--text-secondary)]">✖ Recurring per-user seats that balloon your budget.</p>
                    <p className="text-[var(--text-secondary)]">✖ Company financial data hosted on 3rd party servers.</p>
                    <p className="text-[var(--text-secondary)]">✖ Price increases and arbitrary account suspensions.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[11px] text-[var(--text-muted)]">
              Interactive Architectural Evaluation
            </div>
          </ThreeDTiltCard>
        </div>

        {/* CARD 4: HARDWARE & PRIVACY ENCLAVE (6 COLS) */}
        <div className="md:col-span-6">
          <ThreeDTiltCard glowColor="rgba(59,130,246,0.3)" className="h-full p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#3B82F6]">
                  Hardware Enclave & Security
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[10.5px] text-[#3DDC84]">
                  <Lock size={12} /> Air-Gapped Ready
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                  <div className="flex items-center gap-2 text-[#3B82F6]">
                    <Cpu size={16} />
                    <span className="font-mono text-[11px] uppercase">GPU/CPU Native</span>
                  </div>
                  <p className="mt-2 font-display text-[16px] font-bold text-white">Direct Metal</p>
                  <p className="mt-1 font-body text-[12px] text-[var(--text-muted)]">
                    Hardware accelerated video, AI & SQLite drivers.
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <ShieldCheck size={16} />
                    <span className="font-mono text-[11px] uppercase">Zero Tracking</span>
                  </div>
                  <p className="mt-2 font-display text-[16px] font-bold text-white">Private Disk</p>
                  <p className="mt-1 font-body text-[12px] text-[var(--text-muted)]">
                    Zero diagnostic data or user telemetry uploaded.
                  </p>
                </div>
              </div>

              <h3 className="mt-5 font-display text-[17px] font-bold text-white">
                Engineered for High-Consequence Work
              </h3>
              <p className="mt-2 font-body text-[13px] leading-relaxed text-[var(--text-secondary)]">
                Whether managing enterprise client ledgers, executing legal contracts, or rendering high-res media, DIGI BIZ OS operates inside a sovereign Windows desktop boundary.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 font-mono text-[11px] text-[var(--text-muted)]">
              Windows 10 / 11 64-bit Native Binary
            </div>
          </ThreeDTiltCard>
        </div>
      </div>
    </div>
  );
}
