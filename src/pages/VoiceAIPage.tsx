import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Mic,
  Brain,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  HelpCircle,
  Layers,
  MessageSquare,
  Code2,
  Palette,
  Workflow,
  Megaphone,
  Clock,
  FileCheck,
  Calendar,
  Bell,
  Check,
  AlertTriangle,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { WindowsIcon } from "@/components/PlatformIcons";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";
import MiniHero from "@/components/inner/MiniHero";
import TerminalBlock from "@/components/inner/TerminalBlock";
import TickList from "@/components/inner/TickList";
import PageCTA from "@/components/inner/PageCTA";
import GradientText from "@/components/GradientText";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ModelsSection from "@/components/home/ModelsSection";
import LiveTrackingSection from "@/components/home/LiveTrackingSection";
import SubPageComparisonChart from "@/components/seo/SubPageComparisonChart";

const STATES = ["disconnected", "connecting", "listening", "thinking", "speaking"];

function StateMachine() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % STATES.length), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-2">
      {STATES.map((s, i) => (
        <div key={s} className="flex items-center gap-2">
          <span
            className="rounded-[var(--r-pill)] border px-3 py-1.5 font-code text-[11px] transition-all duration-500 md:text-[12px]"
            style={{
              borderColor: i === active ? "var(--cyan-border)" : "var(--border-glass)",
              color: i === active ? "var(--cyan)" : "var(--text-muted)",
              background: i === active ? "var(--cyan-glow)" : "var(--bg-glass-light)",
              boxShadow: i === active ? "var(--glow-cyan)" : "none",
            }}
          >
            {s}
          </span>
          {i < STATES.length - 1 ? (
            <ArrowRight size={13} className="text-[var(--text-mono)]" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function Waveform() {
  return (
    <div className="flex h-[76px] items-center justify-center gap-[5px] rounded-[var(--r-md)] border border-[var(--border-glass)] bg-[var(--bg-glass-light)] px-4">
      {Array.from({ length: 16 }).map((_, i) => (
        <span
          key={i}
          className="animate-wave-bar w-[4px] rounded-full"
          style={{
            height: `${24 + ((i * 13) % 34)}px`,
            animationDelay: `${(i * 0.1).toFixed(2)}s`,
            background:
              i % 3 === 0
                ? "linear-gradient(180deg,#2FE0C8,#22D3EE)"
                : "linear-gradient(180deg,rgba(47,224,200,0.75),rgba(139,124,246,0.5))",
          }}
        />
      ))}
    </div>
  );
}

const OPERATIONAL_PILLARS = [
  {
    icon: MessageSquare,
    title: "WhatsApp Follow-Ups",
    color: "#25D366",
    tagline: "Never lose a high-value conversation",
    desc: "Your assistant actively scans active WhatsApp customer chats, flags pending inquiries, surfaces unanswered client questions, and prompts you to respond or schedule follow-up touches.",
  },
  {
    icon: FileCheck,
    title: "Order & Formation Follow-Ups",
    color: "#2FE0C8",
    tagline: "Track UK LTD, US LLC & KYC verification",
    desc: "Query pending client orders directly by voice: 'Was this UK LTD order completed?' The assistant checks identity verification statuses, registers missing documents, and updates deal states.",
  },
  {
    icon: Clock,
    title: "Daily Tasks & Morning Briefing",
    color: "#8B5CF6",
    tagline: "'What needs my attention today?'",
    desc: "Receive an immediate voice summary of priority tasks, open invoices, overdue deliverables, and upcoming meetings without opening multiple cluttered browser tabs or spreadsheets.",
  },
  {
    icon: Bell,
    title: "Contextual Reminders & Triggers",
    color: "#F59E0B",
    tagline: "Hands-free calendar & task scheduling",
    desc: "Speak naturally: 'Remind me tomorrow morning at 10 AM to check John's identity documents.' The assistant logs the reminder directly against the customer profile in your local database.",
  },
];

const CAPABILITY_MATRIX = [
  {
    tier: "Live & Production Ready",
    status: "live",
    color: "#10B981",
    badge: "100% Operational",
    items: [
      "Sub-200ms local Whisper speech transcription",
      "CRM customer search, pipeline queries & contact status checks",
      "WhatsApp chat transcript analysis & lead triage",
      "Spoken intent parsing & multi-step business logic execution",
      "Local desktop sandboxed terminal & file operations",
    ],
  },
  {
    tier: "Partially Implemented",
    status: "partial",
    color: "#F59E0B",
    badge: "Active Development",
    items: [
      "Background cron reminder notifications (orchestrated via Digi Flow daemon scheduler)",
      "Automated cross-device push notifications for scheduled customer follow-up alerts",
      "Automated multi-contact WhatsApp sequence dispatch throttling",
    ],
  },
  {
    tier: "Planned (Roadmap)",
    status: "planned",
    color: "#6B7280",
    badge: "Future Architecture",
    items: [
      "Direct API submission to UK Companies House & US State registries (currently requires manual human confirmation)",
      "Autonomous client KYC biometric passport verification without human operator review",
      "Automated bank merchant account webhook auto-reconciliation",
    ],
  },
];

const VOICE_MODULE_INTEGRATIONS = [
  {
    icon: Layers,
    title: "JARVIS + Digi CRM",
    color: "#10B981",
    desc: 'Speak: "Add Ahmed from yesterday\'s call to the qualified pipeline with a budget of £5,000" — updates contacts and deal stages instantly.',
    link: "/modules/crm",
  },
  {
    icon: MessageSquare,
    title: "JARVIS + Digi WhatsApp",
    color: "#25D366",
    desc: 'Speak: "Broadcast our seasonal pricing discount to active retail leads" — drafts, verifies, and queues conversational messages.',
    link: "/modules/whatsapp",
  },
  {
    icon: Megaphone,
    title: "JARVIS + Digi Marketing",
    color: "#EC4899",
    desc: 'Speak: "Write 3 viral TikTok hooks for our video editor launch" — prepares storyboard scripts directly for OpenCut.',
    link: "/modules/marketing",
  },
  {
    icon: Code2,
    title: "JARVIS + Digi Code",
    color: "#8B5CF6",
    desc: 'Speak: "Fix the linter error in the auth route and run the test suite" — indexes code, modifies files, and executes tests in terminal.',
    link: "/modules/code",
  },
  {
    icon: Palette,
    title: "JARVIS + Digi Studio",
    color: "#F472B6",
    desc: 'Speak: "Crop this product video into 9:16 vertical format and generate multilingual Urdu and Arabic voiceovers" — instant native desktop video processing in seconds.',
    link: "/modules/studio",
  },
  {
    icon: Workflow,
    title: "JARVIS + Digi Flow",
    color: "#F59E0B",
    desc: 'Speak: "Schedule an hourly price audit on competitor websites every night at 2 AM" — builds background cron automation.',
    link: "/modules/workflows",
  },
  {
    icon: Brain,
    title: "JARVIS + Live Tracking",
    color: "#3DDC84",
    desc: 'Speak: "آخری رپورٹ اگین سے دے دو" (Fetch latest business report) — live agent synthesizes real-time ledger revenue, unpaid invoices, and lead scores.',
    link: "/ai-business-operating-system",
  },
  {
    icon: Layers,
    title: "JARVIS + Digi Intelligence",
    color: "#A78BFA",
    desc: 'Speak: "Run a 20-stage competitor hunt for wireless electronics across Amazon and TikTok" — scrapes margins and supplier leads autonomously.',
    link: "/modules/intelligence",
  },
  {
    icon: Zap,
    title: "JARVIS + Digi Connectors",
    color: "#E879F9",
    desc: 'Speak: "Connect local SQLite database and inspect active MCP tool servers" — hot-plugs universal protocol tools live.',
    link: "/modules/connectors",
  },
];

export default function VoiceAIPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-[100px] md:pt-[120px]"
    >
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Voice AI & JARVIS Controller", path: "/voice-ai" },
          ]}
        />

        <div className="mt-8 text-center">
          <EyebrowLabel text="JARVIS AI Voice Architecture • Daily Business Assistant" icon={Mic} />
          <h1 className="mt-4 font-display text-[34px] font-bold leading-[1.12] text-[var(--text-primary)] md:text-[52px]">
            Ask Your Business Assistant{" "}
            <GradientText text="What Needs Your Attention." gradient="linear-gradient(135deg, #2FE0C8, #8B5CF6)" />
          </h1>
          <p className="answer mx-auto mt-4 max-w-[760px] font-body text-[16px] leading-relaxed text-[var(--text-secondary)]">
            A native, low-latency conversational AI engine for Windows. Speak naturally to review WhatsApp follow-ups, verify pending UK LTD and US LLC formation orders, monitor identity verification bottlenecks, and prioritize your daily operational workflow hands-free.
          </p>

        </div>
      </SectionWrapper>

      {/* SECTION A — Voice architecture */}
      <SectionWrapper id="voice-architecture">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="Live Operational Voice Engine" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text-primary)] md:text-[42px]">
              Talk Like a Human. <GradientText>Execute Like a Machine.</GradientText>
            </h2>
            <p className="reveal-item delay-2 mt-5 max-w-[540px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              Powered by real-time bidirectional audio streaming, DIGI BIZ OS keeps an active voice session open — allowing interrupted speech, contextual memory, and sub-200ms latency without cloud latency bottlenecks.
            </p>

            <StateMachine />

            <TickList
              className="reveal-item delay-4 mt-8"
              items={[
                'Wake phrase: "Hey Digi" or custom push-to-talk hotkey',
                "Triage WhatsApp chats, orders, and customer verification checkpoints by voice",
                "Full screen awareness & OCR to see what you are working on",
                "100% offline neural speech transcription option for air-gapped privacy",
              ]}
            />
          </div>

          <GlassCard className="reveal-item delay-3" glowColor="var(--cyan)">
            <div className="flex items-center justify-between">
              <span className="font-display text-[15px] font-semibold text-[var(--text-primary)]">
                Active Operational Voice Session
              </span>
              <span className="inline-flex items-center gap-2 font-code text-[11px] text-[var(--success)]">
                <ActivePulse />
                LIVE STREAMING
              </span>
            </div>

            <div className="mt-5">
              <Waveform />
            </div>

            <TerminalBlock
              className="mt-5"
              lines={[
                {
                  text: 'Owner: "What needs my attention today? Any pending WhatsApp follow-ups or orders?"',
                  color: "var(--text-primary)",
                },
                {
                  text: 'JARVIS: "Sir, you have a pending WhatsApp follow-up regarding a UK LTD order. Was this order completed?"',
                  color: "var(--cyan)",
                },
                {
                  text: 'Owner: "No, they are still waiting on identity verification documents."',
                  color: "var(--purple)",
                },
                {
                  text: 'JARVIS: "Understood. The order status remains pending. Reminder scheduled for tomorrow at 10:00 AM."',
                  color: "var(--success)",
                },
              ]}
            />

            <div className="mt-6 flex gap-3">
              <Link to="/download" className="w-full">
                <CyanButton className="w-full" icon={<Mic size={17} />}>
                  Download Windows Voice Controller →
                </CyanButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* SECTION A.2 — 4 Operational Breakdown Cards */}
      <SectionWrapper className="py-12 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <EyebrowLabel text="Four Daily Operational Pillars" icon={Clock} />
            <h2 className="mt-3 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[40px]">
              Turn Conversational Voice Into Operational Momentum
            </h2>
            <p className="mx-auto mt-3 max-w-[650px] font-body text-[15px] text-[var(--text-secondary)]">
              Your voice assistant is not an empty trivia bot. It is wired directly to your customer pipeline, communication channels, and daily order queues.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OPERATIONAL_PILLARS.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <GlassCard
                  key={pIdx}
                  glowColor={pillar.color}
                  className="flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/30"
                >
                  <div>
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{ background: `${pillar.color}20`, color: pillar.color }}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-4 font-display text-[17px] font-bold text-[var(--text-primary)]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] font-medium" style={{ color: pillar.color }}>
                      {pillar.tagline}
                    </p>
                    <p className="mt-3 font-body text-[13px] leading-relaxed text-[var(--text-secondary)]">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 border-t border-white/10 pt-3">
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-[var(--text-muted)]">
                      Voice Prompt Enabled
                    </span>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION A.3 — Product Truth: Live vs Partial vs Planned Capabilities */}
      <SectionWrapper className="py-12 md:py-16 bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <EyebrowLabel text="Product Truth & Engineering Transparency" icon={ShieldCheck} />
            <h2 className="mt-3 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[38px]">
              Capability Boundaries: Live vs. Partial vs. Planned
            </h2>
            <p className="mx-auto mt-3 max-w-[650px] font-body text-[15px] text-[var(--text-secondary)]">
              We engineer with absolute architectural clarity. Know exactly which voice features are live in production, which are in active testing, and which require manual operator sign-off.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CAPABILITY_MATRIX.map((tier, tIdx) => (
              <div
                key={tIdx}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl"
                style={{
                  borderTop: `3px solid ${tier.color}`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider"
                      style={{
                        background: `${tier.color}18`,
                        color: tier.color,
                        border: `1px solid ${tier.color}40`,
                      }}
                    >
                      {tier.badge}
                    </span>
                    <span className="font-mono text-[11px] text-[var(--text-muted)]">
                      Tier {tIdx + 1}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-[18px] font-bold text-[var(--text-primary)]">
                    {tier.tier}
                  </h3>

                  <ul className="mt-5 space-y-3 font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
                    {tier.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5">
                        <span
                          className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-black font-mono text-[9px] font-bold"
                          style={{ background: tier.color }}
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-mono text-[11px] text-[var(--text-muted)]">
                    {tier.status === "live"
                      ? "Ready out-of-the-box on Windows 10/11 desktop"
                      : tier.status === "partial"
                      ? "Requires local daemon runner configuration"
                      : "Operator oversight required by policy"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION B — JARVIS + Business Modules Integrations */}
      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <EyebrowLabel text="Voice Orchestration" icon={Layers} />
            <h2 className="mt-3 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[40px]">
              How JARVIS Commands Your Business Modules
            </h2>
            <p className="mx-auto mt-3 max-w-[650px] font-body text-[15px] text-[var(--text-secondary)]">
              Voice control is not a gimmick — it is the direct operating interface across all 8 enterprise modules.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VOICE_MODULE_INTEGRATIONS.map((integ, i) => {
              const Icon = integ.icon;
              return (
                <Link key={i} to={integ.link} className="group block">
                  <GlassCard
                    glowColor={integ.color}
                    className="h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30"
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ background: `${integ.color}20`, color: integ.color }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-4 font-display text-[18px] font-bold text-[var(--text-primary)] group-hover:text-[var(--cyan)]">
                      {integ.title}
                    </h3>
                    <p className="mt-2 font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
                      {integ.desc}
                    </p>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION C — JARVIS vs Generic Chatbots */}
      <SectionWrapper>
        <div className="mx-auto max-w-[1000px]">
          <div className="text-center">
            <EyebrowLabel text="Architectural Comparison" />
            <h2 className="mt-3 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[38px]">
              JARVIS Desktop Assistant vs Generic Web Chatbots
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-[14px] border border-[var(--border-subtle)] bg-[var(--bg-surface)]">
            <table className="w-full text-left font-body text-[14px]">
              <thead className="border-b border-[var(--border-subtle)] bg-[var(--bg-glass-light)] font-mono text-[12px] uppercase text-[var(--text-muted)]">
                <tr>
                  <th className="p-4">Capability Dimension</th>
                  <th className="p-4 text-[var(--cyan)] font-bold">DIGI BIZ OS (JARVIS)</th>
                  <th className="p-4 text-[var(--text-secondary)]">Generic Web AI Chatbot</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--text-secondary)]">
                <tr>
                  <td className="p-4 font-semibold text-[var(--text-primary)]">Execution Environment</td>
                  <td className="p-4 text-[var(--cyan)]">Windows Native Desktop Application</td>
                  <td className="p-4">Isolated Browser Tab Sandbox</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[var(--text-primary)]">PC & File Control</td>
                  <td className="p-4 text-[var(--cyan)]">Creates, edits, executes, and converts files</td>
                  <td className="p-4">Text generation only (Cannot touch files)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[var(--text-primary)]">Offline Privacy</td>
                  <td className="p-4 text-[var(--cyan)]">100% Offline Local Model & Speech Recognition</td>
                  <td className="p-4">Zero offline capability (Requires cloud)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[var(--text-primary)]">Business Modules</td>
                  <td className="p-4 text-[var(--cyan)]">Native CRM, WhatsApp, Marketing, Docs & Code</td>
                  <td className="p-4">Requires paid third-party plugin subscriptions</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-[var(--text-primary)]">Pricing Model</td>
                  <td className="p-4 text-[var(--cyan)]">£50 One-Time Lifetime Access</td>
                  <td className="p-4">$20/month ($240/year recurring per user)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <SubPageComparisonChart
            slug="voice-ai"
            title="Why Pay Monthly for Voice AI & Transcription?"
            accentColor="var(--cyan)"
          />
        </div>
      </SectionWrapper>

      <ModelsSection />
      <LiveTrackingSection />

      <PageCTA
        title="Command Your Desktop with JARVIS Voice AI"
        badges={["<200ms Latency", "Live Voice Streaming", "Windows 10/11"]}
        cta="Get Now (£50 Lifetime)"
        trackSource="voice_ai_cta"
        icon={<WindowsIcon size={17} />}
      />
    </motion.main>
  );
}
