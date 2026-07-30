import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mic, Brain, ArrowRight } from "lucide-react";
import { WindowsIcon } from "@/components/PlatformIcons";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";
import MiniHero from "@/components/inner/MiniHero";
import TerminalBlock from "@/components/inner/TerminalBlock";
import TickList from "@/components/inner/TickList";
import PageCTA from "@/components/inner/PageCTA";

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

export default function VoiceAIPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-[60px] md:pt-[72px]"
    >
      <MiniHero
        eyebrow="Voice Intelligence"
        title="Your Voice Becomes"
        gradientTitle="Execution."
        subtitle="Zero-latency 2-way live speech streaming. Talk naturally. Your desktop responds in milliseconds."
      />

      {/* SECTION A — Voice architecture */}
      <SectionWrapper id="voice-architecture">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="Live Voice Engine" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text-primary)] md:text-[42px]">
              Continuous 2-Way Speech. No Typing Required.
            </h2>
            <p className="reveal-item delay-2 mt-5 max-w-[540px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              Powered by our real-time voice engine with WebSocket bidirectional streaming, DIGI BIZ OS
              maintains a persistent voice session. PCM 16kHz input, PCM 24kHz output — sub-200ms
              round-trip latency.
            </p>

            <StateMachine />

            <TickList
              className="reveal-item delay-4 mt-8"
              items={[
                'Wake word: "Hey DigiBiz" hands-free activation',
                "Custom AI persona via Soul Engine system prompts",
                "Real-time audio waveform visualization",
              ]}
            />
          </div>

          <GlassCard className="reveal-item delay-3">
            <div className="flex items-center justify-between">
              <span className="font-display text-[15px] font-semibold text-[var(--text-primary)]">
                Voice Session
              </span>
              <span className="inline-flex items-center gap-2 font-code text-[11px] text-[var(--success)]">
                <ActivePulse />
                LIVE
              </span>
            </div>

            <div className="mt-5">
              <Waveform />
            </div>

            <TerminalBlock
              className="mt-5"
              lines={[
                {
                  text: 'User: "Summarize my last 10 emails and send a briefing to WhatsApp"',
                  color: "var(--text-primary)",
                },
                { text: "Agent: Processing 10 emails via IMAP...", color: "var(--cyan)" },
                { text: "Agent: WhatsApp message queued. Sending now.", color: "var(--purple)" },
                { text: "✓ Task Complete — 3.2s", color: "var(--success)" },
              ]}
            />

            <div className="mt-6">
              <CyanButton className="w-full" icon={<Mic size={17} />}>
                Experience Voice Control →
              </CyanButton>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* SECTION B — Wake word + Soul Engine */}
      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-2">
          <GlassCard className="reveal-item" glowColor="var(--cyan)">
            <Mic size={30} color="var(--cyan)" strokeWidth={1.6} />
            <h3 className="mt-5 font-display text-[22px] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
              Wake Word Detection
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              MyraaWakeWordDetector continuously monitors background audio with minimal CPU load.
              Speak the wake phrase and DIGI BIZ OS springs to life.
            </p>
            <div className="mt-6">
              <MonoBadge>{"< 5% CPU Background Usage"}</MonoBadge>
            </div>
          </GlassCard>

          <GlassCard className="reveal-item delay-2" glowColor="var(--purple)">
            <Brain size={30} color="var(--purple)" strokeWidth={1.6} />
            <h3 className="mt-5 font-display text-[22px] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
              Soul Engine — Custom Persona
            </h3>
            <p className="mt-3 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              Define your AI&apos;s personality, communication style, safety constraints, and
              operational rules through the Soul system prompt engine.
            </p>
            <div className="mt-6">
              <MonoBadge color="var(--purple)">Dynamic Context Injection</MonoBadge>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <PageCTA
        title="Stop Typing. Start Commanding."
        badges={["<200ms Latency", "Live Voice", "PCM Audio"]}
        cta="Download for Windows"
        icon={<WindowsIcon size={17} />}
      />
    </motion.main>
  );
}