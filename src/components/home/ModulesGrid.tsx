import {
  Activity,
  ArrowRight,
  Code2,
  Cpu,
  Globe,
  Megaphone,
  MessageSquare,
  Palette,
  Plug,
  Settings,
  ShoppingBag,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import MonoBadge from "@/components/MonoBadge";
import { Link } from "@tanstack/react-router";

interface Module {
  icon: LucideIcon;
  color: string;
  title: string;
  badge: string;
  body: string;
  bullets: string[];
  to?: string;
}

const MODULES: Module[] = [
  {
    icon: Activity,
    color: "#3DDC84",
    title: "Live Tracking",
    badge: "Execution Audit",
    body: "Real-time forensic observability of every agent task, tool call, sub-second latency trace, error counter, and step-by-step progress monitor.",
    bullets: [
      "Real-time tool execution logs",
      "One-click Start / Stop AI controls",
      "Full forensic audit trail",
    ],
    to: "/ai-business-operating-system",
  },
  {
    icon: Sparkles,
    color: "#2FE0C8",
    title: "Digi AI",
    badge: "Dual-Mode Studio",
    body: "Private chat with persistent memory and local attachments, plus a dedicated photorealistic Image Generation Studio with aspect ratio controls.",
    bullets: [
      "Chat + Image modes in one view",
      "Spreadsheet & document reasoning",
      "100% private offline storage",
    ],
    to: "/modules/ai",
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
    to: "/modules/code",
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
    to: "/modules/crm",
  },
  {
    icon: Globe,
    color: "#A78BFA",
    title: "Digi Intelligence",
    badge: "4-in-1 Intelligence Suite",
    body: "Comprehensive market command: Product Hunting, B2B Lead Intelligence, Technical SEO Audits, and AEO/GEO Generative Engine Optimization.",
    bullets: [
      "Product Hunting: 20-stage Amazon & TikTok analysis",
      "Lead Intelligence: B2B contacts & Companies House audits",
      "SEO & AEO/GEO: AI Overviews & crawler optimization",
    ],
    to: "/modules/intelligence",
  },
  {
    icon: MessageSquare,
    color: "#10B981",
    title: "Digi WhatsApp",
    badge: "Autonomous Sales Desk",
    body: "Instant QR mobile pairing, 24/7 autonomous customer chat agent, multi-number pipelines, and automated lead follow-up routines.",
    bullets: [
      "Instant QR device pairing",
      "24/7 autonomous conversational desk",
      "Direct CRM lead sync",
    ],
    to: "/modules/whatsapp",
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
    to: "/modules/workflows",
  },
  {
    icon: Palette,
    color: "#F472B6",
    title: "Digi Studio",
    badge: "Creative Media Suite",
    body: "Offline video editor (CapCut alternative for vertical Reels/Shorts), talking avatar AI, multilingual voice TTS audiobooks, and batch photo studio.",
    bullets: [
      "Local timeline video editor",
      "Photo to talking avatar videos",
      "Multilingual TTS & PDF audiobooks",
    ],
    to: "/modules/studio",
  },
  {
    icon: Cpu,
    color: "#C084FC",
    title: "Digi Models",
    badge: "Dual-Tier AI Router",
    body: "Route tasks between 50+ high-speed cloud engines and sovereign 100% offline local neural models (DeepSeek, Llama) with live latency meters.",
    bullets: [
      "Local GGUF / Ollama model hub",
      "Smart automatic latency routing",
      "Zero per-token billing for local",
    ],
    to: "/modules/models",
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
    to: "/modules/marketing",
  },
  {
    icon: Plug,
    color: "#E879F9",
    title: "Digi Connectors",
    badge: "Universal Switchboard",
    body: "Connect Model Context Protocol (MCP) tool servers, webhooks, databases, and third-party APIs into a unified, hot-pluggable execution bridge.",
    bullets: [
      "Universal MCP tool client",
      "API & webhook integration hub",
      "Local database connector bridge",
    ],
    to: "/modules/connectors",
  },
  {
    icon: Settings,
    color: "#94A3B8",
    title: "Settings & System",
    badge: "Workspace Command",
    body: "Fine-grained control over local hardware allocation, GPU acceleration, audio devices, memory retention, hotkeys, and backup protocols.",
    bullets: [
      "Hardware & GPU VRAM allocation",
      "Microphone & audio device routing",
      "Offline database backups & security",
    ],
    to: "/desktop-os",
  },
];

export default function ModulesGrid() {
  return (
    <SectionWrapper id="modules" className="bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="Inside DIGI BIZ OS" color="var(--cyan)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            11 Core Business Applications. <GradientText>One Unified Desktop.</GradientText>
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-5 max-w-[680px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)] md:text-[16px]">
            Every application your enterprise needs to operate, automate, and scale—integrated into the sovereign Windows 10 & 11 dashboard with zero monthly subscription fees.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => {
            const Icon = m.icon;
            const CardContent = (
              <GlassCard
                glowColor={m.color}
                className="reveal-item relative flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 h-full group"
                style={{ animationDelay: `${0.06 * (i + 1)}s` }}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
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

                  <h3 className="mt-5 font-display text-[19px] font-bold tracking-[-0.02em] text-[var(--text-primary)] group-hover:text-white transition-colors">
                    {m.title}
                  </h3>
                  <p className="mt-2.5 font-body text-[13px] leading-[1.7] text-[var(--text-secondary)]">
                    {m.body}
                  </p>
                </div>

                <div>
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

                  {m.to && (
                    <div className="mt-4 flex items-center justify-between border-t border-white/[0.04] pt-3 text-[11px] font-mono text-[var(--text-muted)] group-hover:text-[var(--cyan)] transition-colors">
                      <span>Explore {m.title}</span>
                      <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  )}
                </div>
              </GlassCard>
            );

            return m.to ? (
              <Link key={m.title} to={m.to} className="block no-underline">
                {CardContent}
              </Link>
            ) : (
              <div key={m.title}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
