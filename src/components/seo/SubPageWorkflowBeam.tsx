import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Brain,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Database,
  Terminal,
  Zap,
  Activity,
  Layers,
} from "lucide-react";
import ActivePulse from "@/components/ActivePulse";
import ThreeDTiltCard from "@/components/ui/ThreeDTiltCard";

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon?: any;
  tag?: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  steps?: WorkflowStep[];
  accentColor?: string;
}

const DEFAULT_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Voice Prompt or Natural Brief",
    description: "Speak directly into the prompt box or type in plain language. Built-in Whisper engine transcribes in real-time.",
    icon: Mic,
    tag: "Universal Voice",
  },
  {
    step: "02",
    title: "AI Brain Intent & Planning",
    description: "The background AI reasoning engine decomposes the goal, checks the Business Knowledge Base, and builds a verified multi-step execution graph.",
    icon: Brain,
    tag: "90%+ AI Integrated",
  },
  {
    step: "03",
    title: "Local Hardware Sandbox Run",
    description: "Commands execute natively on your PC: querying your secure local database, calling offline media & AI engines, or operating files with zero cloud latency.",
    icon: Cpu,
    tag: "Native Desktop Speed",
  },
  {
    step: "04",
    title: "Verified Delivery & Ledger Sync",
    description: "Final PDF invoice generated, video rendered, or CRM pipeline updated. Telemetry log saved to your local disk.",
    icon: CheckCircle2,
    tag: "100% Data Sovereignty",
  },
];

export default function SubPageWorkflowBeam({
  title = "How It Executes On Your Machine",
  subtitle = "The autonomous multi-step execution loop that turns instructions into finished business results.",
  steps = DEFAULT_STEPS,
  accentColor = "var(--cyan)",
}: Props) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mx-auto max-w-[1180px]">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <ActivePulse size={7} />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--cyan)]">
            Autonomous Pipeline Telemetry
          </span>
        </div>
        <h2 className="mt-3 font-display text-[26px] font-extrabold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-[680px] font-body text-[14.5px] leading-relaxed text-[var(--text-secondary)]">
          {subtitle}
        </p>
      </div>

      {/* ANIMATED BEAM CONDUIT (DESKTOP & TABLET) */}
      <div className="mt-14 relative">
        {/* LASER LINE RUNNING THROUGH ALL NODES */}
        <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-[2px] -z-0">
          <div className="w-full h-full bg-white/10" />
          {/* MOVING NEON BEAM PACKET */}
          <motion.div
            className="absolute top-[-2px] h-[6px] w-24 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${accentColor}, #FFFFFF, ${accentColor}, transparent)`,
              boxShadow: `0 0 15px ${accentColor}`,
            }}
            animate={{ left: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* 4 INTERACTIVE STEP NODES */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {steps.map((s, idx) => {
            const Icon = s.icon || (idx === 0 ? Mic : idx === 1 ? Brain : idx === 2 ? Cpu : CheckCircle2);
            const isSelected = activeStep === idx;
            return (
              <div
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className="group cursor-pointer"
              >
                <ThreeDTiltCard
                  glowColor={isSelected ? accentColor : "rgba(255,255,255,0.08)"}
                  className="p-6 h-full flex flex-col justify-between transition-all duration-300"
                >
                  <div>
                    {/* TOP NODE CIRCLE */}
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: isSelected ? `${accentColor}25` : "rgba(255,255,255,0.03)",
                          borderColor: isSelected ? accentColor : "rgba(255,255,255,0.15)",
                          boxShadow: isSelected ? `0 0 20px ${accentColor}40` : "none",
                        }}
                      >
                        <Icon
                          size={22}
                          style={{ color: isSelected ? accentColor : "var(--text-secondary)" }}
                        />
                      </div>
                      <span className="font-mono text-[12px] font-bold text-[var(--text-muted)]">
                        STEP {s.step}
                      </span>
                    </div>

                    <div className="mt-5">
                      <span
                        className="rounded-full border px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-wider"
                        style={{
                          borderColor: isSelected ? `${accentColor}40` : "rgba(255,255,255,0.08)",
                          background: isSelected ? `${accentColor}15` : "rgba(255,255,255,0.02)",
                          color: isSelected ? accentColor : "var(--text-muted)",
                        }}
                      >
                        {s.tag || "Pipeline Stage"}
                      </span>
                      <h3 className="mt-3 font-display text-[16.5px] font-bold text-[var(--text-primary)] group-hover:text-[var(--cyan)] transition-colors">
                        {s.title}
                      </h3>
                      <p className="mt-2 font-body text-[13px] leading-[1.7] text-[var(--text-secondary)]">
                        {s.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10.5px]">
                    <span style={{ color: isSelected ? accentColor : "var(--text-muted)" }}>
                      {isSelected ? "● Live Focus" : "Click to focus"}
                    </span>
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                      style={{ color: isSelected ? accentColor : "var(--text-muted)" }}
                    />
                  </div>
                </ThreeDTiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
