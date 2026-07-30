import { motion } from "framer-motion";
import { Rocket, Code, Wrench, Zap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import MiniHero from "@/components/inner/MiniHero";
import TerminalBlock from "@/components/inner/TerminalBlock";

const CARDS = [
  {
    icon: Rocket,
    color: "var(--cyan)",
    title: "Getting Started",
    body: "System requirements, installation guide, first voice command tutorial, API key setup.",
    cta: "Get Started →",
    primary: true,
  },
  {
    icon: Code,
    color: "var(--purple)",
    title: "IPC Handler Reference",
    body: "Complete reference for all 104+ IPC handlers with TypeScript type signatures and usage examples.",
    cta: "View Reference →",
    primary: false,
  },
  {
    icon: Wrench,
    color: "var(--amber)",
    title: "Hermes Skill Authoring",
    body: "Build custom skills for the Hermes engine. CLI integration guide and skill registry format.",
    cta: "Build Skills →",
    primary: false,
  },
  {
    icon: Zap,
    color: "var(--pink)",
    title: "REST API & WebSocket Spec",
    body: "41+ REST endpoints, WebSocket /live spec, authentication, request/response schemas.",
    cta: "API Docs →",
    primary: false,
  },
];

export default function DocsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-[60px] md:pt-[72px]"
    >
      <MiniHero
        eyebrow="Documentation"
        title="Build. Extend."
        gradientTitle="Automate."
        subtitle="Everything you need to get started and go deep with DIGI BIZ OS."
        height="min-h-[40vh]"
      />

      <SectionWrapper id="docs-nav">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-2">
          {CARDS.map((c, i) => (
            <GlassCard key={c.title} glowColor={c.color} className={`reveal-item delay-${i + 1} p-8`}>
              <c.icon size={30} color={c.color} strokeWidth={1.6} />
              <h2 className="mt-5 font-display text-[21px] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                {c.title}
              </h2>
              <p className="mt-3 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                {c.body}
              </p>
              <div className="mt-6">
                {c.primary ? (
                  <CyanButton size="sm">{c.cta}</CyanButton>
                ) : (
                  <GhostButton size="sm">{c.cta}</GhostButton>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[900px]">
          <div className="text-center">
            <EyebrowLabel text="Quick Start" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[30px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[42px]">
              Running in Three Steps.
            </h2>
          </div>

          <GlassCard className="reveal-item delay-2 mt-10">
            <TerminalBlock
              speed={16}
              lines={[
                { text: "# 1 — Download the DIGI BIZ OS installer", color: "var(--text-muted)" },
                { text: "$ curl -fsSL https://get.digibizos.app | sh", color: "var(--cyan)" },
                { text: "# 2 — Configure your AI provider API keys", color: "var(--text-muted)" },
                { text: "$ digibiz config set ai.key <YOUR_KEY>", color: "var(--cyan)" },
                { text: "$ digibiz config set desktop.port 8765", color: "var(--cyan)" },
                { text: "# 3 — Launch and speak", color: "var(--text-muted)" },
                { text: "$ digibiz start --voice", color: "var(--purple)" },
                { text: '> "Hey DigiBiz, what can you do?"', color: "var(--text-primary)" },
                { text: "✓ Voice session live — 27 agents standing by", color: "var(--success)" },
              ]}
            />
          </GlassCard>
        </div>
      </SectionWrapper>
    </motion.main>
  );
}