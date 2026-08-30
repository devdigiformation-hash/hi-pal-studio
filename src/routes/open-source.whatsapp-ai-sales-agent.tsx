import { createFileRoute, Link } from "@tanstack/react-router";
import {
  QrCode,
  Mic,
  BookOpen,
  Zap,
  Gauge,
  Database,
  Smartphone,
  MessageSquare,
  Cpu,
  FileText,
  Check,
  Copy,
  Phone,
  Mail,
  MapPin,
  Globe,
  TreePine,
  ShieldCheck,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import TickList from "@/components/inner/TickList";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";
import whatsappScreenshot from "@/assets/os-digi-whatsapp.png";

const TITLE = "Universal WhatsApp AI Sales Agent v2.0 PRO — Free Open-Source WhatsApp Automation";
const DESC =
  "Deploy a 100% free, open-source WhatsApp AI sales & support agent. Multi-number Baileys QR pairing, Whisper voice transcription, local SQLite memory, deterministic sales pipeline, and Markdown RAG knowledge base.";

const REPO_URL = "https://github.com/digiformation/whatsapp-ai-sales-agent";
const WHATSAPP_DEMO = "https://wa.me/923164467464";
const COMPANY_WEBSITE = "https://www.digiformation.co.uk/";
const LINKTREE = "https://linktr.ee/digiformationltd";
const EMAIL = "mailto:info@digiformation.co.uk";

const WHATSAPP_EMERALD = "37,211,102";

const FEATURES = [
  {
    icon: QrCode,
    color: "#25D366",
    title: "Multi-Account Baileys QR Pairing (Zero Meta API Fees)",
    body: "Connect multiple business WhatsApp numbers simultaneously via direct 1-click QR scanning. Avoid expensive $0.05–$0.15 Meta Business Cloud API per-conversation charges forever.",
  },
  {
    icon: Mic,
    color: "var(--cyan)",
    title: "Voice Note Transcription & Roman Urdu/English Engine",
    body: "Inbound audio voice messages are transcribed in 0.3s via Groq Whisper and answered with authentic, context-aware Pakistani Roman Urdu or professional English replies.",
  },
  {
    icon: BookOpen,
    color: "var(--purple)",
    title: "Universal Decoupled Markdown Knowledge Base (RAG)",
    body: "100% business-agnostic. Drop your business profile, pricing tables, services, and FAQs into /knowledge/*.md files and the agent instantly sells for any industry.",
  },
  {
    icon: Zap,
    color: "var(--amber)",
    title: "0ms Deterministic Instant Fallback Layer",
    body: "Instant Zero-AI response for standard inquiries. If external LLMs ever experience latency, the deterministic layer keeps responding seamlessly without hallucinations.",
  },
  {
    icon: Gauge,
    color: "#7DD3FC",
    title: "8-Stage Deterministic Sales Pipeline (State Machine)",
    body: "Structured sales flow from NEW → GREETED → QUALIFIED → PACKAGE_SELECTED → ORDER_INITIATED → DOCUMENTS_PENDING → COMPLETED with Next-Best-Action directives.",
  },
  {
    icon: Database,
    color: "#3DDC84",
    title: "100% Private Local SQLite Memory & Zero Hallucination Defense",
    body: "Customer names, locations, selected packages, and order references are stored locally on your server (data/agent_memory.db). Strict price protection rules prevent unauthorized discounts.",
  },
];

const DASHBOARD_TABS = [
  {
    icon: Smartphone,
    color: "#25D366",
    title: "WhatsApp Numbers Manager",
    body: "Live QR generator, connection status indicators, battery levels, and 1-click disconnect for every paired number.",
  },
  {
    icon: MessageSquare,
    color: "var(--cyan)",
    title: "Live Conversational Log Stream",
    body: "Real-time WebSocket activity feed (/ws/events), sound chime notifications, state transitions, and audio transcription logs.",
  },
  {
    icon: Cpu,
    color: "var(--purple)",
    title: "AI Brain & API Keys",
    body: "Configure Groq ultra-fast Llama models, OpenCode Zen, and adjust temperature with a single click.",
  },
  {
    icon: FileText,
    color: "var(--amber)",
    title: "Visual Knowledge Base Studio",
    body: "In-browser Markdown editor with instant pre-configured templates for E-Commerce, Digital Agency, and Customer Support.",
  },
];

const COMPARISON = [
  {
    label: "Annual software cost",
    ours: "$0 (100% Free Forever)",
    others: "$588 – $1,200 / year",
  },
  {
    label: "Meta per-message fees",
    ours: "$0 (Direct Baileys Web QR)",
    others: "$0.05 – $0.15 per conversation",
  },
  {
    label: "Voice note transcription",
    ours: "Included (Groq Whisper STT)",
    others: "Paid add-on or not supported",
  },
  {
    label: "Data privacy",
    ours: "100% Local SQLite (Zero Leaks)",
    others: "Third-party cloud servers",
  },
  {
    label: "Multi-number support",
    ours: "Unlimited numbers",
    others: "Expensive per-seat upgrades",
  },
  {
    label: "License",
    ours: "MIT Open-Source",
    others: "Proprietary vendor lock-in",
  },
];

const SETUP_STEPS = [
  { cmd: "git clone <repo>", note: "Clone the open-source repository" },
  { cmd: "npm install", note: "Install dependencies" },
  { cmd: "npm run dev", note: "Start the agent and dashboard" },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 / Linux / macOS (Node.js 18+)",
  "Node.js 18+ with npm or yarn",
  "RAM: 4 GB minimum (8 GB recommended for concurrent accounts)",
  "Storage: 500 MB free disk space",
  "Internet: required for Groq Whisper & LLM APIs (Baileys works over your own WhatsApp)",
];

export const Route = createFileRoute("/open-source/whatsapp-ai-sales-agent")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/whatsapp-ai-sales-agent",
      title: TITLE,
      description: DESC,
    });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Open Source", path: "/open-source" },
              {
                name: "Universal WhatsApp AI Sales Agent",
                path: "/open-source/whatsapp-ai-sales-agent",
              },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Universal WhatsApp AI Sales Agent v2.0 PRO",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Windows, Linux, macOS",
            description: DESC,
            url: abs("/open-source/whatsapp-ai-sales-agent"),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: WhatsAppAgentPage,
});

function WhatsAppAgentPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "WhatsApp AI Sales Agent", path: "/open-source/whatsapp-ai-sales-agent" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="100% FREE & OPEN-SOURCE AI SALES AGENT • ZERO META PER-CONVERSATION FEES"
              color="#25D366"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              Universal WhatsApp AI Sales Agent v2.0 PRO
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[48px]">
              Turn WhatsApp into a 24/7 Autonomous AI Sales & Support Machine —{" "}
              <GradientText from="#25D366" to="#2FE0C8">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The production-ready open-source WhatsApp sales automation engine. Powered by direct
              Baileys Web QR pairing, Groq Whisper voice note transcription, local SQLite memory,
              deterministic sales state machines, and universal Markdown knowledge bases.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<DownloadIcon />}>
                  Download WhatsApp Sales Agent (Open-Source Repo & Installer)
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              MIT License • Unlimited WhatsApp Numbers • Zero Cloud Database Leaks
            </p>
          </div>

          <GlassCard glowColor="#25D366" className="p-3 overflow-hidden">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[10px] border border-[var(--border-subtle)] bg-[#05070B]">
              <img
                src={whatsappScreenshot}
                alt="Universal WhatsApp AI Sales Agent v2.0 PRO Dashboard Screenshot"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020408]/90 via-[#020408]/40 to-transparent p-4">
                <p className="font-display text-[15px] font-bold text-[var(--text-primary)]">
                  WhatsApp AI Agent Live Dashboard
                </p>
                <p className="mt-0.5 font-body text-[12px] text-[var(--text-secondary)]">
                  Multi-number QR pairing, conversation stream, AI brain settings & auto-replies.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 core pillars & powerful capabilities
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <GlassCard key={f.title} glowColor={f.color} className="h-full p-5">
                <f.icon size={22} color={f.color} strokeWidth={2} />
                <h3 className="mt-3 font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                  {f.title}
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {f.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Built-in React 19 + Tailwind dashboard
          </h2>
          <p className="mt-4 max-w-[780px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
            A production dashboard ships with the agent so you can pair numbers, watch
            conversations, tune the AI brain, and edit knowledge bases without touching code.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {DASHBOARD_TABS.map((t) => (
              <GlassCard key={t.title} glowColor={t.color} className="h-full p-5">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ background: `rgba(${rgbFromHex(t.color)},0.12)` }}
                  >
                    <t.icon size={20} color={t.color} strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-[16px] font-bold text-[var(--text-primary)]">
                    {t.title}
                  </h3>
                </div>
                <p className="mt-3 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {t.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Savings comparison
          </h2>
          <div className="mt-8 overflow-x-auto rounded-[var(--r-lg)] border border-[var(--border-glass)]">
            <table className="w-full min-w-[640px] border-collapse text-left font-body text-[14px]">
              <caption className="sr-only">
                Comparison between Digiformation WhatsApp Agent and WATI / ManyChat / Intercom
              </caption>
              <thead>
                <tr className="bg-white/[0.04]">
                  <th
                    scope="col"
                    className="p-4 font-display text-[13px] font-bold text-[var(--text-muted)]"
                  >
                    Feature / Metric
                  </th>
                  <th scope="col" className="p-4 font-display text-[13px] font-bold text-[#25D366]">
                    Digiformation WhatsApp Agent
                  </th>
                  <th
                    scope="col"
                    className="p-4 font-display text-[13px] font-bold text-[var(--text-secondary)]"
                  >
                    WATI / ManyChat / Intercom
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label} className="border-t border-[var(--border-subtle)]">
                    <td className="p-4 font-body text-[13.5px] font-medium text-[var(--text-primary)]">
                      {row.label}
                    </td>
                    <td className="p-4 font-body text-[13.5px] leading-[1.7] text-[#25D366]">
                      {row.ours}
                    </td>
                    <td className="p-4 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Quick 3-step setup
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {SETUP_STEPS.map((s, i) => (
              <GlassCard
                key={s.note}
                glowColor={i === 2 ? "#25D366" : "var(--cyan)"}
                className="p-5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full font-display text-[13px] font-bold"
                    style={{ background: "rgba(47,224,200,0.12)", color: "var(--cyan)" }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-display text-[15px] font-bold text-[var(--text-primary)]">
                    Step {i + 1}
                  </p>
                </div>
                <div className="mt-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-3 font-mono text-[12.5px] text-[var(--text-primary)]">
                  {s.cmd}
                </div>
                <p className="mt-3 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {s.note}
                </p>
              </GlassCard>
            ))}
          </div>
          <p className="mt-6 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
            Then open <MonoBadge>http://localhost:9000</MonoBadge>, scan the QR code from your
            phone&apos;s WhatsApp Linked Devices, and let AI close deals 24/7.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="System Requirements" color="var(--cyan)" />
            <h2 className="mt-4 font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[30px]">
              What you need to run it
            </h2>
            <TickList className="mt-6" items={REQUIREMENTS} />
          </div>
          <GlassCard glowColor="#25D366" className="p-6">
            <EyebrowLabel text="Owner attribution & global contact" color="#25D366" />
            <h3 className="mt-4 font-display text-[20px] font-bold text-[var(--text-primary)]">
              Digiformation Ltd
            </h3>
            <p className="mt-1 font-body text-[14px] text-[var(--text-secondary)]">
              Founder: Muhammad Haroon
            </p>
            <p className="mt-3 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
              UK Company Registration #16994903 • GOV.UK Companies House Verified
            </p>
            <div className="mt-5 space-y-3 font-body text-[13.5px] text-[var(--text-secondary)]">
              <div className="flex items-start gap-3">
                <MapPin size={16} color="var(--cyan)" className="mt-[2px] shrink-0" />
                <span>Office 1006, 85 Dunstall Hill, Wolverhampton, United Kingdom</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} color="var(--cyan)" className="shrink-0" />
                <a
                  href={WHATSAPP_DEMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cyan)] hover:underline"
                >
                  +92 316 446 7464
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} color="var(--cyan)" className="shrink-0" />
                <a href={EMAIL} className="text-[var(--cyan)] hover:underline">
                  info@digiformation.co.uk
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} color="var(--cyan)" className="shrink-0" />
                <a
                  href={COMPANY_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cyan)] hover:underline"
                >
                  www.digiformation.co.uk
                </a>
              </div>
              <div className="flex items-center gap-3">
                <TreePine size={16} color="var(--cyan)" className="shrink-0" />
                <a
                  href={LINKTREE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--cyan)] hover:underline"
                >
                  linktr.ee/digiformationltd
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
            Deploy your free WhatsApp AI sales agent today
          </h2>
          <p className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
            No subscriptions, no per-message fees, no cloud leaks. Pair your WhatsApp number and
            start closing deals automatically.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<DownloadIcon />}>
                Download WhatsApp Sales Agent
              </CyanButton>
            </a>
            <Link
              to="/open-source"
              className="font-body text-[14px] text-[var(--cyan)] hover:underline"
            >
              Back to open source software
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function rgbFromHex(hex: string) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
}
