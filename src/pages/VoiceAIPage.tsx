import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mic, Brain, ArrowRight, Sparkles, CheckCircle2, Zap, ShieldCheck, HelpCircle, Layers, MessageSquare, Code2, Palette, Workflow, Megaphone } from "lucide-react";
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
          <EyebrowLabel text="JARVIS AI Voice Architecture" icon={Mic} />
          <h1 className="mt-4 font-display text-[34px] font-bold leading-[1.12] text-[var(--text-primary)] md:text-[52px]">
            JARVIS AI Voice Assistant for PC —{" "}
            <GradientText text="Control Windows by Voice" gradient="linear-gradient(135deg, #2FE0C8, #8B5CF6)" />
          </h1>
          <p className="mx-auto mt-4 max-w-[720px] font-body text-[16px] leading-relaxed text-[var(--text-secondary)]">
            A native, low-latency conversational AI engine for Windows. Speak naturally to control applications, execute multi-step workflows, manage local databases, and coordinate business operations hands-free.
          </p>

          {/* DIRECT ANSWER BLOCK */}
          <div className="mx-auto mt-8 max-w-3xl rounded-[12px] border border-[var(--cyan)]/30 bg-[var(--cyan)]/5 p-6 text-left">
            <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wider text-[var(--cyan)]">
              <Sparkles size={15} />
              <span>Direct Answer — What Is the DIGI BIZ OS Voice Assistant?</span>
            </div>
            <p className="mt-3 font-body text-[15px] leading-[1.8] text-[var(--text-primary)] font-medium">
              The DIGI BIZ OS Voice Assistant is an installed, real-time desktop AI controller for Windows 10 and 11. Unlike cloud web chatbots, it combines offline neural speech recognition, screen awareness, terminal execution, and local database routing to plan and execute complex desktop tasks by voice with sub-200ms round-trip latency.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION A — Voice architecture */}
      <SectionWrapper id="voice-architecture">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="Live Voice Engine" />
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
                "Custom AI persona and tone calibration via Soul Engine",
                "Full screen awareness & OCR to see what you are working on",
                "100% offline neural speech transcription option for air-gapped privacy",
              ]}
            />
          </div>

          <GlassCard className="reveal-item delay-3" glowColor="var(--cyan)">
            <div className="flex items-center justify-between">
              <span className="font-display text-[15px] font-semibold text-[var(--text-primary)]">
                Active JARVIS Voice Session
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
                  text: 'User: "Scrape top 5 competitor prices and log them in my CRM"',
                  color: "var(--text-primary)",
                },
                { text: "Agent: Launching Digi Intelligence browser crawler...", color: "var(--cyan)" },
                { text: "Agent: Extracted 5 listings. Updating local customer database...", color: "var(--purple)" },
                { text: "✓ Task Complete — 2.8s total execution time", color: "var(--success)" },
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
        cta="Download for Windows (£50 Lifetime)"
        trackSource="voice_ai_cta"
        icon={<WindowsIcon size={17} />}
      />
    </motion.main>
  );
}
