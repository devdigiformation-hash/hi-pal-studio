import { motion } from "framer-motion";
import { Globe, Terminal, Users } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";
import MiniHero from "@/components/inner/MiniHero";
import TerminalBlock from "@/components/inner/TerminalBlock";
import PageCTA from "@/components/inner/PageCTA";

const WORKFLOWS = [
  { id: "Workflow A", steps: ["Voice", "Orchestrator", "5 agents", "Report"] },
  { id: "Workflow B", steps: ["Voice", "Browser agent", "46 tools", "Data"] },
  { id: "Workflow C", steps: ["Voice", "Hermes CLI", "52 skills", "Execute"] },
];

const PLAYWRIGHT_TOOLS = [
  "navigate",
  "click",
  "extractText",
  "screenshot",
  "fillForm",
  "waitForSelector",
  "cookies.get",
  "cookies.set",
  "interceptNetwork",
  "evaluateJS",
  "download",
  "scrollTo",
];

const HERMES_SKILLS = [
  "shell.run",
  "file.move",
  "extract_pdf",
  "csv.transform",
  "git.commit",
  "zip.archive",
  "http.request",
  "json.query",
  "cron.schedule",
  "db.query",
  "image.convert",
  "skill.author",
];

export default function AgentTownPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-[60px] md:pt-[72px]"
    >
      <MiniHero
        eyebrow="Multi-Agent Orchestration"
        title="27 Agents."
        gradientTitle="One Command."
        subtitle="Parallel autonomous execution at enterprise scale. Speak once. Your entire AI workforce mobilizes."
      />

      <SectionWrapper id="architecture">
        <div className="mx-auto grid max-w-[1200px] items-start gap-14 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="Agent Town Architecture" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text-primary)] md:text-[42px]">
              Concurrent Multi-Agent Execution.
            </h2>
            <p className="reveal-item delay-2 mt-5 max-w-[560px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              Agent Town Orchestrator (Port 18790) delegates complex tasks to 27 specialized
              sub-agents running simultaneously. Research, code audit, data extraction, email
              drafting, and browser automation — all at once.
            </p>

            <div className="reveal-item delay-3 mt-7 flex flex-wrap gap-2">
              <MonoBadge>27 Concurrent Agents</MonoBadge>
              <MonoBadge color="var(--purple)">115+ Built-in Tools</MonoBadge>
              <MonoBadge color="var(--amber)">Port 18790 Orchestrator</MonoBadge>
              <MonoBadge color="var(--pink)">Hermes CLI Bridge</MonoBadge>
            </div>

            <div className="reveal-item delay-4 mt-8 space-y-3">
              {WORKFLOWS.map((w) => (
                <div
                  key={w.id}
                  className="rounded-[var(--r-md)] border border-[var(--border-glass)] px-4 py-3 backdrop-blur-xl transition-colors duration-300 hover:border-[var(--border-hover)]"
                  style={{ background: "var(--bg-glass-light)" }}
                >
                  <div className="font-display text-[13px] font-semibold text-[var(--text-primary)]">
                    {w.id}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2 font-code text-[12px] text-[var(--text-secondary)]">
                    {w.steps.map((s, i) => (
                      <span key={s} className="flex items-center gap-2">
                        <span style={{ color: i === 0 ? "var(--cyan)" : undefined }}>{s}</span>
                        {i < w.steps.length - 1 ? (
                          <span className="text-[var(--text-mono)]">→</span>
                        ) : null}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <GlassCard className="reveal-item delay-2" glowColor="var(--purple)">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 font-display text-[15px] font-semibold text-[var(--text-primary)]">
                <Users size={17} color="var(--purple)" /> Agent Town
              </span>
              <span className="inline-flex items-center gap-2 font-code text-[11px] text-[var(--success)]">
                <ActivePulse />
                27/27 ACTIVE
              </span>
            </div>

            <TerminalBlock
              className="mt-5"
              speed={9}
              lines={[
                { text: '● Research Agent     [RUNNING]  Task: "Companies House lookup"', color: "var(--cyan)" },
                { text: "● Browser Agent      [RUNNING]  Tool: playwright.navigate", color: "var(--cyan)" },
                { text: "● Email Agent        [IDLE]     Queue: 3 pending", color: "var(--text-muted)" },
                { text: '● CLI Agent          [RUNNING]  Cmd: "extract_pdf"', color: "var(--purple)" },
                { text: "● Memory Agent       [ACTIVE]   Indexing: 847 entries", color: "var(--amber)" },
                { text: "● Calendar Agent     [IDLE]     Queue: 1 pending", color: "var(--text-muted)" },
                { text: "● Finance Agent      [RUNNING]  Task: invoice reconcile", color: "var(--cyan)" },
                { text: "● Compliance Agent   [ACTIVE]   Scan: UK filings", color: "var(--pink)" },
              ]}
            />

            <div className="mt-5 flex flex-wrap gap-3 font-code text-[12px] text-[var(--cyan)]">
              <span>Active: 14</span>
              <span>Idle: 8</span>
              <span>Queue: 5</span>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center">
            <EyebrowLabel text="115+ Built-in Tools" color="var(--amber)" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
              Playwright Browser + Hermes CLI. Combined.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <GlassCard className="reveal-item delay-1 p-8">
              <Globe size={30} color="var(--cyan)" strokeWidth={1.6} />
              <h3 className="mt-5 font-display text-[21px] font-bold text-[var(--text-primary)]">
                Playwright Web Tools (46)
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                46 specialized browser automation tools: navigation, clicking, text extraction,
                screenshots, cookie management, network interception, JS evaluation, download
                handling.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {PLAYWRIGHT_TOOLS.map((t) => (
                  <MonoBadge key={t}>{t}</MonoBadge>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="reveal-item delay-2 p-8" glowColor="var(--purple)">
              <Terminal size={30} color="var(--purple)" strokeWidth={1.6} />
              <h3 className="mt-5 font-display text-[21px] font-bold text-[var(--text-primary)]">
                Hermes CLI Skills (52)
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                52 CLI and system automation skills via the Hermes subprocess bridge. Shell
                commands, file operations, data pipelines, and custom skill authoring with the
                Hermes SDK.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {HERMES_SKILLS.map((t) => (
                  <MonoBadge key={t} color="var(--purple)">
                    {t}
                  </MonoBadge>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>

      <PageCTA
        title="Mobilize Your Entire AI Workforce."
        badges={["27 Agents", "94 Tools", "Port 18790"]}
        cta="Deploy Agent Town"
      />
    </motion.main>
  );
}