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
  { id: "Workflow B", steps: ["Voice", "Browser agent", "115+ tools", "Data"] },
  { id: "Workflow C", steps: ["Voice", "AI Skills", "500+ skills", "Execute"] },
];

const WEB_TOOLS = [
  "Research",
  "Data Extraction",
  "Form Filling",
  "Price Monitoring",
  "Lead Capture",
  "Report Building",
  "Screenshots",
  "Competitor Tracking",
  "Bulk Downloads",
  "Site Audits",
  "Order Checks",
  "Content Collection",
];

const BUSINESS_SKILLS = [
  "Document Analysis",
  "File Organisation",
  "PDF Extraction",
  "Spreadsheet Automation",
  "Data Pipelines",
  "Scheduled Tasks",
  "Marketing Content",
  "Business Research",
  "Code & Engineering",
  "Reporting",
  "Image Processing",
  "Custom Skills",
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
        title="Multi Agents."
        gradientTitle="One Command."
        subtitle="Parallel autonomous execution at enterprise scale. Speak once. Your entire AI workforce mobilizes."
      />

      <SectionWrapper id="architecture">
        <div className="mx-auto grid max-w-[1200px] items-start gap-14 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="Multi-Agent Architecture" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text-primary)] md:text-[42px]">
              Concurrent Multi-Agent Execution.
            </h2>
            <p className="reveal-item delay-2 mt-5 max-w-[560px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              DIGI BIZ OS delegates complex work to multi specialised
              sub-agents running simultaneously. Research, code audit, data extraction, email
              drafting, and browser automation — all at once.
            </p>

            <div className="reveal-item delay-3 mt-7 flex flex-wrap gap-2">
              <MonoBadge>Multi Concurrent Agents</MonoBadge>
              <MonoBadge color="var(--purple)">115+ Built-in Tools</MonoBadge>
              <MonoBadge color="var(--amber)">Multi-Agent Platform</MonoBadge>
              <MonoBadge color="var(--pink)">500+ AI Skills</MonoBadge>
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
                <Users size={17} color="var(--purple)" /> Agents
              </span>
              <span className="inline-flex items-center gap-2 font-code text-[11px] text-[var(--success)]">
                <ActivePulse />
                MULTI ACTIVE
              </span>
            </div>

            <TerminalBlock
              className="mt-5"
              speed={9}
              lines={[
                { text: '● Research Agent     [RUNNING]  Task: "Market research lookup"', color: "var(--cyan)" },
                { text: "● Browser Agent      [RUNNING]  Task: web research", color: "var(--cyan)" },
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
              Web Automation + Business Skills. Combined.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <GlassCard className="reveal-item delay-1 p-8">
              <Globe size={30} color="var(--cyan)" strokeWidth={1.6} />
              <h3 className="mt-5 font-display text-[21px] font-bold text-[var(--text-primary)]">
                Web Automation Tools
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                Let your agents work the web for you — research, extract data, fill forms, monitor
                competitors, capture reports and collect content, hands-free.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {WEB_TOOLS.map((t) => (
                  <MonoBadge key={t}>{t}</MonoBadge>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="reveal-item delay-2 p-8" glowColor="var(--purple)">
              <Terminal size={30} color="var(--purple)" strokeWidth={1.6} />
              <h3 className="mt-5 font-display text-[21px] font-bold text-[var(--text-primary)]">
                500+ AI Skills
              </h3>
              <p className="mt-3 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                500+ ready-to-use business and engineering skills — documents, data, marketing,
                research and automation — with new skills added over time and custom skills of
                your own.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {BUSINESS_SKILLS.map((t) => (
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
        badges={["Multi-Agent", "115+ Tools", "500+ Skills"]}
        cta="Deploy Your Agents"
      />
    </motion.main>
  );
}