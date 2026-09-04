import {
  Bot,
  Code2,
  Terminal,
  Plug,
  Sparkles,
  ShoppingBag,
  Palette,
  Workflow,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
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
    color: "#2FE0C8",
    title: "Digi AI",
    badge: "Dual-Mode Studio",
    body: "Private chat with file attachments, persistent local memory, and a dedicated photorealistic Image Generation Studio with aspect ratio controls.",
    bullets: [
      "Chat + Image modes in one view",
      "Spreadsheet & document attachments",
      "100% private offline storage",
    ],
  },
  {
    icon: ShoppingBag,
    color: "#34D399",
    title: "Digi CRM",
    badge: "Autonomous Operations",
    body: "Single Knowledge Base setup auto-populates your entire business, with 1-second live dashboard, 1-click trigger actions, and multi-currency ledger.",
    bullets: [
      "Single business profile configuration",
      "1-click order fulfillment triggers",
      "Accounts P&L & All-in-One reports",
    ],
  },
  {
    icon: Palette,
    color: "#F472B6",
    title: "Digi Studio",
    badge: "Creative Media Suite",
    body: "Offline video editor (CapCut alternative for vertical Reels/Shorts), talking avatar AI, multilingual voice TTS audiobooks, and batch photo studio.",
    bullets: [
      "Local FFmpeg timeline video editor",
      "Photo to talking avatar videos",
      "Multilingual TTS & PDF audiobooks",
    ],
  },
  {
    icon: Workflow,
    color: "#22D3EE",
    title: "Digi Flow",
    badge: "Always-On Automations",
    body: "Background business rules that run 24/7—overdue invoice chasers, low-stock reorders, and stalled deal follow-ups that automatically raise CRM tasks.",
    bullets: [
      "Always-on business background rules",
      "Fail-safe multi-step flow runner",
      "Pre-built operational templates",
    ],
  },
  {
    icon: Megaphone,
    color: "#F59E0B",
    title: "Digi Marketing",
    badge: "Multi-Platform Publisher",
    body: "Compose once and publish or schedule across Facebook, LinkedIn, X, Telegram, Instagram, YouTube, Bluesky, and Mastodon with AI copywriting.",
    bullets: [
      "8 connected social networks",
      "Direct-response AI copy engine",
      "Visual flyer & media attachments",
    ],
  },
  {
    icon: Code2,
    color: "#7DD3FC",
    title: "Digi Code",
    badge: "Developer Workspace",
    body: "Full-screen software engineering environment with AST repository reasoning, terminal self-correction, unit test runners, and Git automation.",
    bullets: [
      "Full-screen embedded workspace",
      "Multi-file repository reasoning",
      "Terminal runners & auto-repair",
    ],
  },
  {
    icon: Plug,
    color: "#E879F9",
    title: "Digi MCP",
    badge: "Universal Protocol Client",
    body: "Real Model Context Protocol stdio client (JSON-RPC 2.0). Connect local and npm tool servers, discover tools dynamically, and toggle powers live.",
    bullets: [
      "Official JSON-RPC 2.0 stdio client",
      "Dynamic tool discovery & testing",
      "Zero-config visual management",
    ],
  },
  {
    icon: Terminal,
    color: "#FBBF24",
    title: "Digi CLI",
    badge: "Custom Command Runner",
    body: "Add and execute custom shell commands via visual UI with streaming output, backed by pre-integrated offline engines (FFmpeg, Whisper, DuckDB, Typst).",
    bullets: [
      "Visual command definition & runner",
      "Live streaming stdout / stderr",
      "Integrated offline media & data engines",
    ],
  },
];

export default function ModulesGrid() {
  return (
    <SectionWrapper id="modules" className="bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="Inside DIGI BIZ OS" color="var(--cyan)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Core Business Applications. <GradientText>One Unified Desktop.</GradientText>
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-5 max-w-[680px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)] md:text-[16px]">
            Everything your business needs to operate, automate, and scale—AI reasoning, CRM, video editing, social publishing, workflows, coding, and extensible MCP tool connectivity.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => {
            const Icon = m.icon;
            return (
              <GlassCard
                key={m.title}
                glowColor={m.color}
                className="reveal-item relative flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
                style={{ animationDelay: `${0.08 * (i + 1)}s` }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl"
                      style={{
                        background: `${m.color}15`,
                        border: `1px solid ${m.color}35`,
                        color: m.color,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <MonoBadge label={m.badge} color={m.color} />
                  </div>

                  <h3 className="mt-5 font-display text-[19px] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                    {m.title}
                  </h3>
                  <p className="mt-2.5 font-body text-[13px] leading-[1.7] text-[var(--text-secondary)]">
                    {m.body}
                  </p>
                </div>

                <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-4">
                  {m.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-tertiary)]"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: m.color }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
