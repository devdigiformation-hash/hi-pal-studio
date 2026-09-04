import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Play,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Database,
  Terminal,
  Activity,
  Layers,
  Sparkles,
  Volume2,
  FileCode,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";
import ThreeDTiltCard from "@/components/ui/ThreeDTiltCard";

export interface WorkbenchCapability {
  title: string;
  body: string;
  tag?: string;
  metric?: string;
  actionText?: string;
}

interface Props {
  capabilities: WorkbenchCapability[];
  accentColor?: string;
  moduleName?: string;
}

export default function SubPageInteractiveWorkbench({
  capabilities,
  accentColor = "var(--cyan)",
  moduleName = "Software Engine",
}: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [simulationStep, setSimulationStep] = useState(0);
  const [simulating, setSimulating] = useState(false);

  const active = capabilities[activeIdx] || capabilities[0];

  const triggerSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setSimulationStep(1);
    setTimeout(() => setSimulationStep(2), 700);
    setTimeout(() => setSimulationStep(3), 1500);
    setTimeout(() => {
      setSimulating(false);
      setSimulationStep(0);
    }, 2800);
  };

  return (
    <div className="mx-auto max-w-[1180px]">
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <ActivePulse size={7} />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cyan)]">
              Interactive Feature Workbench
            </span>
          </div>
          <h2 className="mt-2 font-display text-[26px] font-extrabold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
            Experience {moduleName} In Action
          </h2>
        </div>
        <p className="max-w-[440px] font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
          Switch between capabilities below to inspect the live execution telemetry, parameter rules, and instant desktop output.
        </p>
      </div>

      {/* HORIZONTAL GLOWING TABS */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {capabilities.map((cap, idx) => {
          const isCurrent = activeIdx === idx;
          return (
            <button
              key={cap.title}
              onClick={() => {
                setActiveIdx(idx);
                setSimulationStep(0);
                setSimulating(false);
              }}
              className="group flex items-center gap-2.5 rounded-xl border px-4 py-2.5 font-display text-[13px] font-bold transition-all duration-300"
              style={{
                borderColor: isCurrent ? accentColor : "rgba(255,255,255,0.08)",
                background: isCurrent ? `${accentColor}18` : "rgba(255,255,255,0.02)",
                color: isCurrent ? "#FFFFFF" : "var(--text-secondary)",
                boxShadow: isCurrent ? `0 0 20px ${accentColor}25` : "none",
              }}
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full font-mono text-[10px] transition-colors"
                style={{
                  background: isCurrent ? accentColor : "rgba(255,255,255,0.08)",
                  color: isCurrent ? "#000000" : "var(--text-muted)",
                }}
              >
                0{idx + 1}
              </span>
              <span>{cap.title}</span>
            </button>
          );
        })}
      </div>

      {/* MAIN INTERACTIVE WORKBENCH STAGE */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
        {/* LEFT COLUMN: CAPABILITY DEEP DIVE & CONTROLS */}
        <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl lg:col-span-5">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--cyan)]">
                {active.tag || "Core Engine Module"}
              </span>
              <span
                className="rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                style={{ borderColor: `${accentColor}40`, color: accentColor }}
              >
                {active.metric || "100% Local Speed"}
              </span>
            </div>

            <h3 className="mt-5 font-display text-[22px] font-extrabold text-[var(--text-primary)] md:text-[26px]">
              {active.title}
            </h3>

            <p className="mt-3 font-body text-[14.5px] leading-[1.8] text-[var(--text-secondary)]">
              {active.body}
            </p>

            <div className="mt-6 space-y-2.5 rounded-xl border border-white/5 bg-black/30 p-4">
              <div className="flex items-center gap-2 font-mono text-[11.5px] text-[var(--text-muted)]">
                <CheckCircle2 size={14} className="text-[#3DDC84]" />
                <span>Zero Cloud Data Telemetry (Air-Gapped)</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11.5px] text-[var(--text-muted)]">
                <CheckCircle2 size={14} className="text-[#3DDC84]" />
                <span>Synchronized with Universal AI Brain</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[11.5px] text-[var(--text-muted)]">
                <CheckCircle2 size={14} className="text-[#3DDC84]" />
                <span>Native Windows 10/11 GPU/CPU Optimized</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={triggerSimulation}
              disabled={simulating}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-display text-[13px] font-bold text-black transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
              style={{ background: accentColor }}
            >
              <Play size={14} fill="currentColor" />
              <span>{simulating ? "Running Pipeline..." : "Simulate Live Action"}</span>
            </button>
            <span className="font-mono text-[11px] text-[var(--text-muted)]">
              Latency: ~0.18s
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: SIMULATED HIGH-TECH DESKTOP INTERFACE */}
        <div className="rounded-2xl border border-white/10 bg-[#050811] p-5 shadow-2xl backdrop-blur-2xl lg:col-span-7 flex flex-col justify-between">
          <div>
            {/* TERMINAL / HUD HEADER */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[11px] text-[var(--text-muted)]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full animate-ping" style={{ background: accentColor }} />
                <span>RUNTIME // {active.title.toUpperCase()}</span>
              </div>
              <div className="flex items-center gap-3">
                <span>MEM: 42MB</span>
                <span className="text-[#3DDC84]">STATUS: READY</span>
              </div>
            </div>

            {/* SIMULATED DYNAMIC VIEWPORT BASED ON CURRENT CAPABILITY */}
            <div className="mt-5 space-y-4 font-mono text-[12.5px]">
              {/* VIRTUAL TERMINAL LOG */}
              <div className="rounded-xl border border-white/10 bg-black/60 p-4 leading-relaxed text-[var(--text-secondary)]">
                <p className="text-[var(--text-muted)]">
                  <span className="text-[var(--cyan)]">$</span> digi-biz-os --module="{active.title.toLowerCase().replace(/\s+/g, '-')}" --listen
                </p>
                <p className="mt-1 text-emerald-400/90">
                  ✔ Module verified: SHA256 integrity passed. Local encrypted SQLite mounted.
                </p>
                <p className="mt-1 text-amber-300/80">
                  ⚡ Voice Assistant standby in prompt box. Neural orchestrator attached.
                </p>

                {/* ANIMATED PIPELINE PROGRESS DISPLAY */}
                <AnimatePresence>
                  {simulating && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 space-y-1.5 border-t border-white/10 pt-3"
                    >
                      <p className="text-[var(--cyan)]">
                        &gt; [Step 1/3] Decomposing natural user intent... Done (22ms)
                      </p>
                      {simulationStep >= 2 && (
                        <p className="text-[var(--purple)]">
                          &gt; [Step 2/3] Calling local execution driver with zero cloud latency...
                        </p>
                      )}
                      {simulationStep >= 3 && (
                        <p className="text-emerald-400 font-bold">
                          &gt; [Step 3/3] Task successfully completed! Ledger updated & file generated.
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* INTERACTIVE MOCK CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                  <span className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                    Local Execution Engine
                  </span>
                  <p className="mt-1 font-display text-[15px] font-bold text-white">
                    Native C++ / Python Core
                  </p>
                  <p className="mt-1 font-body text-[12px] text-[var(--text-secondary)]">
                    Runs offline on your hardware without subscription tokens.
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                  <span className="font-mono text-[10px] uppercase text-[var(--text-muted)]">
                    Direct Integration
                  </span>
                  <p className="mt-1 font-display text-[15px] font-bold text-white">
                    DIGI Universal Bus
                  </p>
                  <p className="mt-1 font-body text-[12px] text-[var(--text-secondary)]">
                    Coordinates with CRM, Studio & WhatsApp pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* TELEMETRY FOOTER */}
          <div className="mt-6 flex flex-wrap items-center justify-between border-t border-white/10 pt-3 font-mono text-[11px] text-[var(--text-muted)]">
            <span>Execution Model: Local Process</span>
            <span className="text-[var(--cyan)]">Universal Voice: Enabled [Mic Active]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
