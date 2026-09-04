import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Brain,
  Mic,
  Sparkles,
  Database,
  Video,
  Megaphone,
  Bot,
  Terminal,
  FileText,
  CheckCircle2,
  ArrowRight,
  Zap,
  Volume2,
  Activity,
  Layers,
  Cpu,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";
import ThreeDTiltCard from "@/components/ui/ThreeDTiltCard";

interface ModuleFlow {
  id: string;
  name: string;
  category: string;
  voicePrompt: string;
  brainAction: string;
  backendExecution: string[];
  color: string;
  icon: any;
}

const FLOWS: ModuleFlow[] = [
  {
    id: "crm",
    name: "Digi CRM & Lead Scoring",
    category: "Customer & Revenue Operations",
    voicePrompt: "Check new leads from WhatsApp, qualify real estate buyers, and generate quotation invoices.",
    brainAction:
      "The AI Brain parses the spoken intent, extracts lead qualification metrics against the Business Knowledge Base, validates pricing tiers, and updates the local business ledger.",
    backendExecution: [
      "Transcribes user voice via local offline audio pipeline",
      "Performs intent extraction & sentiment analysis",
      "Applies CRM business rules without cloud latency",
      "Autonomously issues PDF invoices & tokenized message triggers",
    ],
    color: "#10B981",
    icon: Database,
  },
  {
    id: "studio",
    name: "Digi Studio & Media Lab",
    category: "Video, Voice & Avatar Production",
    voicePrompt: "Cut the podcast silence, generate captions in brand colors, and export vertical 9:16 reels.",
    brainAction:
      "The AI Brain inspects audio waveform spectral energy, identifies topic shifts for smart reel splitting, formats animated captions, and coordinates hardware-accelerated media render queues.",
    backendExecution: [
      "VAD (Voice Activity Detection) isolates dead air",
      "Semantic NLP determines high-virality punchlines",
      "9:16 vertical crop with face tracking coordinates",
      "Direct hardware acceleration via local GPU engine",
    ],
    color: "#EC4899",
    icon: Video,
  },
  {
    id: "marketing",
    name: "Digi Marketing & WhatsApp Agent",
    category: "Autonomous Multi-Channel Growth",
    voicePrompt: "Audit competitor keywords, draft 5 hook variations, and schedule WhatsApp follow-up sequence.",
    brainAction:
      "The AI Brain scans SEO crawl databases, evaluates buyer friction points, generates customized copywriting variations, and sets cron dispatch intervals.",
    backendExecution: [
      "Extracts target intent & programmatic keywords",
      "Synthesizes tailored sales copy with brand voice",
      "Enforces rate limits & WhatsApp anti-ban throttling",
      "Logs delivery metrics to real-time analytics table",
    ],
    color: "#2FE0C8",
    icon: Megaphone,
  },
  {
    id: "code",
    name: "Digi Code & Terminal Agents",
    category: "Full-Stack Automation & Engineering",
    voicePrompt: "Inspect server logs for 404 errors, fix broken redirects, and verify sitemap structure.",
    brainAction:
      "The AI Brain reads terminal telemetry, correlates broken URLs against active route manifests, patches route configurations, and re-pings search engine crawlers.",
    backendExecution: [
      "Executes isolated shell commands in sandboxed context",
      "Multi-agent reflection verifies output integrity",
      "Auto-generates sitemap ping signals",
      "Maintains zero-leakage security boundary",
    ],
    color: "#8B5CF6",
    icon: Terminal,
  },
];

export default function AiBrainArchitectureShowcase() {
  const [activeFlowId, setActiveFlowId] = useState("crm");
  const current = FLOWS.find((f) => f.id === activeFlowId) || FLOWS[0];
  const CurrentIcon = current.icon;

  return (
    <SectionWrapper id="ai-brain" className="relative overflow-hidden py-16 md:py-24">
      {/* Background radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 40%, rgba(47,224,200,0.06), transparent 70%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(139,124,246,0.06), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-[1240px]">
        {/* HEADER */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <ActivePulse size={7} />
            <EyebrowLabel
              text="Active AI Brain Architecture • Universal Voice Assistant"
              color="var(--cyan)"
            />
          </div>

          <h2 className="mt-4 font-display text-[30px] font-extrabold tracking-[-0.03em] text-[var(--text-primary)] sm:text-[40px] md:text-[48px]">
            90%+ Modules AI-Integrated.{" "}
            <span className="bg-gradient-to-r from-[#2FE0C8] via-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
              Not Just a Tool — A Living Brain.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[780px] font-body text-[15.5px] leading-[1.8] text-[var(--text-secondary)] md:text-[17px]">
            In DIGI BIZ OS, AI is not an isolated chatbot tucked in a side drawer. An active reasoning brain
            runs in the background of <strong>90%+ of all desktop modules</strong>. Every prompt box has an integrated
            voice assistant, and every action is planned, verified, and orchestrated with multi-step machine intelligence.
          </p>
        </div>

        {/* 3-COLUMN CORE METRICS */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[16px] border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(47,224,200,0.12)] border border-[rgba(47,224,200,0.3)]">
                <Brain size={20} className="text-[var(--cyan)]" />
              </div>
              <div>
                <p className="font-display text-[22px] font-extrabold text-[var(--text-primary)]">90%+ Modules</p>
                <p className="font-body text-[12px] text-[var(--text-muted)]">Active Background AI Reasoning</p>
              </div>
            </div>
            <p className="mt-3 font-body text-[13px] leading-[1.65] text-[var(--text-secondary)]">
              CRM, video editors, marketing automators, and ledgers are deeply wired to reasoning backends rather than dumb scripts.
            </p>
          </div>

          <div className="rounded-[16px] border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(139,124,246,0.12)] border border-[rgba(139,124,246,0.3)]">
                <Mic size={20} className="text-[var(--purple)]" />
              </div>
              <div>
                <p className="font-display text-[22px] font-extrabold text-[var(--text-primary)]">Universal Voice</p>
                <p className="font-body text-[12px] text-[var(--text-muted)]">Built Into Every Prompt Box</p>
              </div>
            </div>
            <p className="mt-3 font-body text-[13px] leading-[1.65] text-[var(--text-secondary)]">
              Press and speak in any module. Whisper-grade speech recognition executes complex multi-step instructions without typing.
            </p>
          </div>

          <div className="rounded-[16px] border border-white/10 bg-white/[0.02] p-5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.3)]">
                <Cpu size={20} className="text-[#10B981]" />
              </div>
              <div>
                <p className="font-display text-[22px] font-extrabold text-[var(--text-primary)]">Zero Subscriptions</p>
                <p className="font-body text-[12px] text-[var(--text-muted)]">BYO API Key or 100% Free Local</p>
              </div>
            </div>
            <p className="mt-3 font-body text-[13px] leading-[1.65] text-[var(--text-secondary)]">
              Plug your own wholesale keys (DeepSeek, Groq, OpenAI, Claude) or run offline Ollama models locally at zero monthly cost.
            </p>
          </div>
        </div>

        {/* INTERACTIVE MODULE SELECTOR & LIVE DEMO SIMULATOR */}
        <div className="mt-12">
          {/* TAB BUTTONS */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {FLOWS.map((flow) => {
              const Icon = flow.icon;
              const isSelected = flow.id === activeFlowId;
              return (
                <button
                  key={flow.id}
                  onClick={() => setActiveFlowId(flow.id)}
                  className="flex items-center gap-2.5 rounded-xl border px-4 py-2.5 font-display text-[13.5px] font-semibold transition-all duration-300"
                  style={{
                    borderColor: isSelected ? flow.color : "rgba(255,255,255,0.08)",
                    background: isSelected ? `${flow.color}18` : "rgba(255,255,255,0.02)",
                    color: isSelected ? "#FFFFFF" : "var(--text-secondary)",
                    boxShadow: isSelected ? `0 0 20px ${flow.color}25` : "none",
                  }}
                >
                  <Icon size={16} style={{ color: isSelected ? flow.color : "var(--text-muted)" }} />
                  <span>{flow.name}</span>
                </button>
              );
            })}
          </div>

          {/* ACTIVE FLOW VISUALIZATION CARD */}
          <div className="mt-6">
            <ThreeDTiltCard glowColor={current.color} className="p-6 md:p-8">
              <div className="grid items-center gap-8 lg:grid-cols-12">
                {/* LEFT: VOICE PROMPT & INTENT BOX */}
                <div className="space-y-6 lg:col-span-6">
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider"
                      style={{
                        borderColor: `${current.color}40`,
                        background: `${current.color}12`,
                        color: current.color,
                      }}
                    >
                      {current.category}
                    </span>
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)]">
                      <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: current.color }} />
                      AI Brain Active
                    </div>
                  </div>

                  {/* VOICE PROMPT BOX SIMULATOR */}
                  <div className="rounded-xl border border-white/10 bg-[#060A12] p-4 shadow-inner">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/20 text-red-400">
                        <Mic size={14} className="animate-pulse" />
                      </div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                        Voice Assistant In Prompt Box
                      </span>
                    </div>
                    <p className="mt-3 font-mono text-[13.5px] leading-relaxed text-[#2FE0C8]">
                      "{current.voicePrompt}"
                    </p>
                  </div>

                  {/* REASONING EXPLANATION */}
                  <div>
                    <h4 className="flex items-center gap-2 font-display text-[15px] font-bold text-[var(--text-primary)]">
                      <Brain size={16} style={{ color: current.color }} />
                      Background Brain Orchestration:
                    </h4>
                    <p className="mt-2 font-body text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                      {current.brainAction}
                    </p>
                  </div>
                </div>

                {/* RIGHT: MULTI-STEP BACKEND PIPELINE EXECUTION */}
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md lg:col-span-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                      Autonomous Backend Pipeline
                    </span>
                    <MonoBadge active color={current.color}>
                      4-Step Execution
                    </MonoBadge>
                  </div>

                  <div className="mt-4 space-y-3">
                    {current.backendExecution.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
                      >
                        <div
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold text-black"
                          style={{ background: current.color }}
                        >
                          {idx + 1}
                        </div>
                        <p className="font-body text-[13.5px] leading-[1.6] text-[var(--text-primary)]">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between pt-2">
                    <span className="font-mono text-[11.5px] text-[var(--text-muted)]">
                      Latency: ~180ms · Zero Manual Coding
                    </span>
                    <Link
                      to={(current.id === "crm" ? "/modules/crm" : current.id === "studio" ? "/modules/studio" : current.id === "marketing" ? "/modules/marketing" : "/features") as any}
                      className="inline-flex items-center gap-1.5 font-display text-[12.5px] font-bold hover:underline"
                      style={{ color: current.color }}
                    >
                      <span>Explore {current.name}</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </ThreeDTiltCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
