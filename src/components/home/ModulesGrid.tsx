import { Bot, Code2, FileText, Wrench, Terminal, Plug, Sparkles, MousePointerClick, type LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import MonoBadge from "@/components/MonoBadge";

interface Module {
  icon: LucideIcon;
  color: string;
  title: string;
  badge: string;
  body: string;
  bullets: string[];
}

const MODULES: Module[] = [
  {
    icon: Sparkles,
    color: "var(--cyan)",
    title: "Digi AI",
    badge: "200+ Models",
    body: "Talk or type to one assistant that carries your memory, sees your screen and executes across the machine.",
    bullets: ["Voice + chat in one thread", "Screen & camera awareness", "Custom memory and persona"],
  },
  {
    icon: Code2,
    color: "var(--purple)",
    title: "Digi Code",
    badge: "Coding Workspace",
    body: "A coding agent that lives inside your projects — sessions, project and branch context, slash commands and @ file references.",
    bullets: ["Repo & folder reasoning", "Refactor, debug and ship", "Session history per project"],
  },
  {
    icon: FileText,
    color: "var(--amber)",
    title: "Digi Docs",
    badge: "Offline Document Suite",
    body: "Merge, split, compare, compress, convert, OCR, redact, sign, timestamp, password-protect and watermark documents on your own machine.",
    bullets: ["OCR & text extraction", "Redact, sign and timestamp", "Batch convert and compress"],
  },
  {
    icon: Wrench,
    color: "#F472B6",
    title: "Digi Tools",
    badge: "100+ Offline Utilities",
    body: "Crypto, encoding, converters, generators and analysers — searchable, favouritable and fully offline, so nothing you paste ever leaves the machine.",
    bullets: ["Instant search & favourites", "Hashing, encoding, formatting", "Zero network required"],
  },
  {
    icon: Terminal,
    color: "var(--green)",
    title: "Digi CLI",
    badge: "Local Runners",
    body: "Connect local runners for scripting, version control, document parsing, retrieval and web research — each one toggled live.",
    bullets: ["One-click connect / disconnect", "Capabilities listed up front", "Add your own runners"],
  },
  {
    icon: Plug,
    color: "var(--cyan)",
    title: "Digi MCP",
    badge: "40+ MCP Servers",
    body: "Desktop automation, research, browsing, documentation and private routing servers imported and switched on live.",
    bullets: ["Multi-MCP ready", "Import custom servers", "Live status per server"],
  },
  {
    icon: Bot,
    color: "var(--purple)",
    title: "Skills Library",
    badge: "500+ AI Skills",
    body: "API calls, calculation, data analysis, document parsing, file transforms and web research — every skill switchable on or off.",
    bullets: ["Runner shown per skill", "Live enable / disable", "Author your own skills"],
  },
  {
    icon: MousePointerClick,
    color: "var(--amber)",
    title: "Desktop Tools",
    badge: "150+ Desktop Tools",
    body: "Real machine control: folder analysis, screenshot understanding, bulk file operations and renames, clipboard, brightness, power and app control.",
    bullets: ["Mouse, keyboard & windows", "Bulk file ops and renames", "Local folder access"],
  },
];

export default function ModulesGrid() {
  return (
    <SectionWrapper id="modules" className="bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="Inside DIGI BIZ OS" color="var(--cyan)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Eight Weapons. <GradientText>One Battle Station.</GradientText>
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-5 max-w-[680px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)] md:text-[16px]">
            Everything you see in the workspace above, broken down — models, coding, documents,
            utilities, runners, connectors, skills and true desktop control.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {MODULES.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={m.title} className={`reveal-item delay-${(i % 4) + 1}`}>
                <GlassCard glowColor={m.color} className="h-full p-7">
                  <Icon size={34} color={m.color} strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-[19px] font-bold text-[var(--text-primary)]">
                    {m.title}
                  </h3>
                  <div className="mt-3">
                    <MonoBadge color={m.color}>{m.badge}</MonoBadge>
                  </div>
                  <p className="mt-4 font-body text-[13.5px] leading-[1.75] text-[var(--text-secondary)]">
                    {m.body}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {m.bullets.map((b) => (
                      <li key={b} className="flex gap-2 font-body text-[12.5px] text-[var(--text-muted)]">
                        <span style={{ color: m.color }}>✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
