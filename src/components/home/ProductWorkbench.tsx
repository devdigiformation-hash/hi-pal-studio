import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Cable, Cpu, Terminal } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";
import GradientText from "@/components/GradientText";

const TABS = ["Intelligence", "Automation", "Connectivity", "Developer"] as const;
type Tab = (typeof TABS)[number];

const COPY: Record<Tab, { title: string; body: string; badges: string[]; bullets: string[] }> = {
  Intelligence: {
    title: "AI Model Gateway",
    body: "Route intelligence across fast cloud models, ultra-low-latency inference, 200+ routed models, and fully local engines — with live latency metrics.",
    badges: ["Flash Engine", "Turbo Engine", "Model Router", "Local Engine"],
    bullets: [
      "Automatic provider failover",
      "Live latency + cost metrics",
      "Per-task model routing rules",
      "Fully offline local inference",
    ],
  },
  Automation: {
    title: "Workflows + Agents",
    body: "Drag-and-drop workflow automation with scheduled cron triggers, 500+ switchable skills and concurrent multi agent task delegation.",
    badges: ["150+ Mixed Tools", "500+ AI Skills", "Cron Jobs"],
    bullets: [
      "Visual workflow builder",
      "Cron & event triggers",
      "multi concurrent sub-agents",
      "Retry + audit trail per step",
    ],
  },
  Connectivity: {
    title: "Channels Hub",
    body: "Unified WhatsApp, Email, Discord and 40+ MCP servers for automation, research, browsing and documentation — imported and toggled live.",
    badges: ["WhatsApp", "Email", "Discord", "40+ MCP Servers"],
    bullets: [
      "One inbox across channels",
      "Auto-reply agent routing",
      "Business data lookups",
      "Per-channel status monitoring",
    ],
  },
  Developer: {
    title: "CLI + MCP",
    body: "Digi CLI local runners for scripting, version control, document parsing, retrieval and web research — plus a full MCP switchboard and 100+ offline utilities.",
    badges: ["Multi-MCP Ready", "100+ Offline Utilities", "150+ Mixed Tools"],
    bullets: [
      "Native terminal emulator",
      "Custom MCP server registry",
      "Custom skill authoring",
      "Expandable skill library",
    ],
  },
};

const ICONS: Record<Tab, typeof Cpu> = {
  Intelligence: Cpu,
  Automation: Bot,
  Connectivity: Cable,
  Developer: Terminal,
};

function Visual({ tab }: { tab: Tab }) {
  if (tab === "Intelligence") {
    return (
      <div className="space-y-3">
        {[
          { name: "Flash Engine", ms: "~180ms", color: "var(--cyan)", active: true },
          { name: "Turbo Engine", ms: "~95ms", color: "var(--green)", active: true },
          { name: "Model Router (200+)", ms: "~320ms", color: "var(--purple)", active: false },
          { name: "Local Engine", ms: "~410ms", color: "var(--amber)", active: false },
        ].map((m) => (
          <div
            key={m.name}
            className="flex items-center justify-between rounded-[var(--r-sm)] border border-[var(--border-glass)] px-4 py-3"
            style={{ background: "var(--bg-glass-light)" }}
          >
            <span className="flex items-center gap-2 font-body text-[13px] text-[var(--text-secondary)]">
              {m.active ? <ActivePulse /> : <span className="h-2 w-2 rounded-full bg-[var(--text-mono)]" />}
              {m.name}
            </span>
            <span className="font-code text-[12px]" style={{ color: m.color }}>
              {m.ms}
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (tab === "Automation") {
    return (
      <div className="flex items-center justify-between gap-2">
        {["Trigger", "Agent", "Browser", "Deliver"].map((step, i) => (
          <div key={step} className="flex flex-1 flex-col items-center gap-2">
            <div
              className="animate-glow-pulse h-3 w-3 rounded-full"
              style={{
                background: ["#2FE0C8", "#8B7CF6", "#F5A623", "#34D399"][i],
                animationDelay: `${i * 0.4}s`,
              }}
            />
            <span className="font-code text-[11px] text-[var(--text-secondary)]">{step}</span>
            {i < 3 ? <span className="h-px w-full bg-[var(--border-glass)]" /> : null}
          </div>
        ))}
      </div>
    );
  }
  if (tab === "Connectivity") {
    return (
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: "WhatsApp", color: "#34D399" },
          { name: "Email", color: "#2FE0C8" },
          { name: "Discord", color: "#8B7CF6" },
          { name: "Business Data", color: "#F5A623" },
        ].map((c) => (
          <div
            key={c.name}
            className="rounded-[var(--r-sm)] border border-[var(--border-glass)] px-4 py-4"
            style={{ background: "var(--bg-glass-light)" }}
          >
            <div className="flex items-center gap-2">
              <ActivePulse color={c.color} />
              <span className="font-body text-[13px] text-[var(--text-primary)]">{c.name}</span>
            </div>
            <span className="mt-2 block font-code text-[11px] text-[var(--text-muted)]">
              connected
            </span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div
      className="rounded-[var(--r-sm)] border border-[var(--border-glass)] p-4 font-code text-[12px] leading-[1.9]"
      style={{ background: "#05080F" }}
    >
      <div className="text-[var(--text-muted)]">&gt; Agent status</div>
      <div className="text-[var(--green)]">Agents: Active [10/10]</div>
      <div className="text-[var(--text-muted)]">&gt; Connected MCP servers</div>
      <div className="text-[var(--cyan)]">
        mcp/filesystem · mcp/github · mcp/companies-house
        <span className="animate-caret">▋</span>
      </div>
    </div>
  );
}

export default function ProductWorkbench() {
  const [tab, setTab] = useState<Tab>("Intelligence");
  const copy = COPY[tab];
  const Icon = ICONS[tab];

  return (
    <SectionWrapper id="product" className="bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="Intelligent Workspace" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[34px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[48px]">
            One Command. <GradientText>Every Module.</GradientText>
          </h2>
        </div>

        <div className="reveal-item delay-2 mt-10 flex justify-center">
          <div
            className="flex flex-wrap justify-center gap-1 rounded-full border border-[var(--border-glass)] p-1 backdrop-blur-xl"
            style={{ background: "var(--bg-glass-light)" }}
          >
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-full px-5 py-2 font-display text-[13px] font-semibold transition-all duration-300 ${
                  tab === t
                    ? "bg-[var(--cyan)] text-[#090D16]"
                    : "text-[var(--text-secondary)] hover:text-[var(--cyan)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
          >
            <div>
              <Icon size={36} color="var(--cyan)" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-[26px] font-bold text-[var(--text-primary)]">
                {copy.title}
              </h3>
              <p className="mt-3 max-w-[520px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                {copy.body}
              </p>
              <ul className="mt-6 space-y-3">
                {copy.bullets.map((b) => (
                  <li key={b} className="flex gap-2 font-body text-[14px] text-[var(--text-muted)]">
                    <span className="text-[var(--cyan)]">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {copy.badges.map((b) => (
                  <MonoBadge key={b}>{b}</MonoBadge>
                ))}
              </div>
            </div>
            <GlassCard className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <ActivePulse />
                <span className="font-code text-[11px] tracking-[0.16em] text-[var(--text-muted)]">
                  {tab.toUpperCase()} PANEL
                </span>
              </div>
              <Visual tab={tab} />
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
