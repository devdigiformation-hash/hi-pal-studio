import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bot,
  Globe,
  Terminal,
  Bug,
  Cpu,
  ShieldCheck,
  Check,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  TreePine,
  Download,
  FileArchive,
  Zap,
  Sparkles,
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
import openclawZip from "@/assets/openclaw-main.zip.asset.json";

const TITLE =
  "OpenClaw Autonomous AI Agent — Free Open-Source Coding & Research Agent";
const DESC =
  "Download OpenClaw free: the open-source autonomous AI agent that researches the web, writes code, runs terminal commands, debugs itself, and delivers complete software projects. 100% local, $0 fees.";

const EXE_URL = "https://drive.google.com/file/d/1bvTjsKITtbskMexWrjZbYmUeS2gmTpuS/view?usp=sharing";
const ZIP_URL = openclawZip.url;
const REPO_URL = "https://github.com/digiformation/openclaw";
const WHATSAPP = "https://wa.me/923164467464";
const COMPANY_WEBSITE = "https://www.digiformation.co.uk/";
const LINKTREE = "https://linktr.ee/digiformationltd";
const EMAIL = "mailto:info@digiformation.co.uk";

const INDIGO = "99,102,241";

const FEATURES = [
  {
    icon: Bot,
    color: "var(--cyan)",
    title: "Autonomous End-to-End Task Execution",
    body:
      "Translate one complex instruction into a complete, working software deliverable. OpenClaw plans the architecture, writes the files, and runs the build pipeline without hand-holding.",
  },
  {
    icon: Globe,
    color: "#6366F1",
    title: "Built-in Headless Browser & Live Web Research",
    body:
      "Navigates live websites, reads documentation, extracts structured data, and interacts with web forms so the agent always works with real, current information.",
  },
  {
    icon: Terminal,
    color: "var(--amber)",
    title: "Terminal & OS Command Sandbox",
    body:
      "Safely installs dependencies, creates files, executes scripts, and tests applications in an isolated local sandbox with user confirmation gates.",
  },
  {
    icon: Bug,
    color: "#F472B6",
    title: "Self-Healing Automated Debugging",
    body:
      "When a runtime error or syntax bug occurs, OpenClaw reads the stack trace, diagnoses the root cause, and edits the code until tests pass.",
  },
  {
    icon: Cpu,
    color: "#7DD3FC",
    title: "Universal Multi-Model Hub",
    body:
      "Works with 100% free offline Ollama models (DeepSeek-R1, Llama 3.3, Qwen 2.5) or cloud models (Claude 3.5 Sonnet, OpenAI GPT-4o, Groq).",
  },
  {
    icon: ShieldCheck,
    color: "#3DDC84",
    title: "100% Local Machine Privacy & $0 Fees",
    body:
      "Your source code, business ideas, and credentials stay on your PC. Zero cloud logging and zero monthly seat subscriptions.",
  },
];

const COMPARISON = [
  {
    label: "Annual price",
    ours: "$0 (100% Free Forever)",
    devin: "$6,000 / year",
    manus: "$2,400+ / year",
  },
  {
    label: "Source code access",
    ours: "100% Open-Source (MIT)",
    devin: "Proprietary cloud lock-in",
    manus: "Closed source",
  },
  {
    label: "Local model support",
    ours: "Yes (Ollama / Zero Internet)",
    devin: "No (cloud only)",
    manus: "No (cloud only)",
  },
  {
    label: "Deployment mode",
    ours: "Windows Desktop .EXE & .ZIP",
    devin: "Cloud invite waitlist",
    manus: "Cloud only",
  },
  {
    label: "Privacy & security",
    ours: "100% Local on your machine",
    devin: "All files uploaded to US servers",
    manus: "Cloud hosted",
  },
  {
    label: "License type",
    ours: "Commercial permissive license",
    devin: "Paid subscription tier",
    manus: "Freemium lock",
  },
];

const SETUP_STEPS = [
  {
    title: "Choose your installation",
    body:
      "Option A: run the OpenClaw-Setup.exe installer for instant Windows desktop studio. Option B: extract openclaw-main.zip and run pip install -r requirements.txt.",
  },
  {
    title: "Select AI engine",
    body:
      "Connect your free local Ollama model or paste your API key for Claude, OpenAI, DeepSeek, or Groq.",
  },
  {
    title: "Assign missions",
    body:
      "Type your goal in plain English, hit Run, and watch OpenClaw research, build, and deliver your project in real-time.",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit) for .EXE installer",
  "Python 3.10+ and Node.js 18+ for source / ZIP install",
  "RAM: 8 GB minimum (16 GB recommended for large codebases)",
  "Storage: 2 GB free disk space",
  "Internet: required for web research and cloud LLM APIs; Ollama runs fully offline",
];

const DIGIBIZOS_POINTS = [
  "Multi-agent business orchestration with human-in-the-loop approvals.",
  "Built-in CRM, invoicing, project management, and WhatsApp Business API.",
  "Voice-controlled desktop automation and autonomous task scheduling.",
  "White-label and source-code licence for full ownership and resale.",
];

export const Route = createFileRoute("/open-source/openclaw")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/openclaw",
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
              { name: "OpenClaw Autonomous AI Agent", path: "/open-source/openclaw" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "OpenClaw Autonomous AI Agent",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Windows, Linux, macOS",
            description: DESC,
            url: abs("/open-source/openclaw"),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: OpenClawPage,
});

function OpenClawPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "OpenClaw", path: "/open-source/openclaw" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="100% FREE & OPEN-SOURCE AUTONOMOUS AI AGENT • MIT LICENSE"
              color="#6366F1"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              OpenClaw Autonomous AI Agent
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[48px]">
              The Autonomous AI Agent That Researches, Codes & Executes On Your Computer —{" "}
              <GradientText from="#2FE0C8" to="#6366F1">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The open-source powerhouse alternative to Devin ($500/mo) and Manus AI. Give OpenClaw a
              high-level goal in natural language and watch it plan, browse the web, write clean code,
              execute terminal commands, and self-heal errors autonomously.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={EXE_URL} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<WindowsIcon />} tone={INDIGO}>
                  Download OpenClaw for Windows (.EXE)
                </CyanButton>
              </a>
              <a href={ZIP_URL} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<ZipIcon />}>
                  Download Source Code (.ZIP)
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              1-Click Desktop Installer • Windows 10/11 (64-bit) • Standalone GUI
            </p>

          </div>

          <GlassCard glowColor="#6366F1" className="p-3">
            <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "rgba(99,102,241,0.15)",
                  boxShadow: "0 0 40px rgba(99,102,241,0.25)",
                }}
              >
                <Bot size={40} color="#6366F1" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                  OpenClaw Mission Control
                </p>
                <p className="mx-auto mt-1 max-w-[320px] font-body text-[13.5px] text-[var(--text-secondary)]">
                  Natural-language mission planner, live browser feed, terminal sandbox, code editor,
                  and self-healing debugger in one desktop studio.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <MonoBadge>Python + Node.js</MonoBadge>
                <MonoBadge>Headless Browser</MonoBadge>
                <MonoBadge>Ollama / Cloud LLMs</MonoBadge>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 core superpowers of OpenClaw
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
            Cost & capability comparison
          </h2>
          <div className="mt-8 overflow-x-auto rounded-[var(--r-lg)] border border-[var(--border-glass)]">
            <table className="w-full min-w-[720px] border-collapse text-left font-body text-[14px]">
              <caption className="sr-only">
                Comparison between OpenClaw, Devin AI, and Manus AI / paid agents
              </caption>
              <thead>
                <tr className="bg-white/[0.04]">
                  <th
                    scope="col"
                    className="p-4 font-display text-[13px] font-bold text-[var(--text-muted)]"
                  >
                    Feature / Metric
                  </th>
                  <th
                    scope="col"
                    className="p-4 font-display text-[13px] font-bold text-[var(--cyan)]"
                  >
                    OpenClaw (Digiformation)
                  </th>
                  <th
                    scope="col"
                    className="p-4 font-display text-[13px] font-bold text-[var(--text-secondary)]"
                  >
                    Devin AI ($500/mo)
                  </th>
                  <th
                    scope="col"
                    className="p-4 font-display text-[13px] font-bold text-[var(--text-secondary)]"
                  >
                    Manus AI / Paid Agents
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label} className="border-t border-[var(--border-subtle)]">
                    <td className="p-4 font-body text-[13.5px] font-medium text-[var(--text-primary)]">
                      {row.label}
                    </td>
                    <td className="p-4 font-body text-[13.5px] leading-[1.7] text-[var(--cyan)]">
                      {row.ours}
                    </td>
                    <td className="p-4 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                      {row.devin}
                    </td>
                    <td className="p-4 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                      {row.manus}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            3-step quick start
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {SETUP_STEPS.map((s, i) => (
              <GlassCard key={s.title} glowColor={i === 0 ? "#6366F1" : "var(--cyan)"} className="h-full p-5">
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
                <h3 className="mt-3 font-display text-[15px] font-bold text-[var(--text-primary)]">
                  {s.title}
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {s.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Download repository & artifacts
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <GlassCard glowColor="#6366F1" className="h-full p-6">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(99,102,241,0.15)" }}
                >
                  <Download size={24} color="#6366F1" strokeWidth={2} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-[17px] font-bold text-[var(--text-primary)]">
                      Windows 10/11 Desktop Suite
                    </h3>
                    <MonoBadge>Recommended</MonoBadge>
                  </div>
                  <p className="mt-1 font-mono text-[13px] text-[var(--cyan)]">
                    OpenClaw-Setup.exe
                  </p>
                  <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                    Version v1.2.0 Stable • 1-click installer • Standalone GUI for non-technical
                    users.
                  </p>
                  <a href={EXE_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                    <CyanButton size="md" icon={<WindowsIcon />} tone={INDIGO}>
                      Download .EXE
                    </CyanButton>
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard glowColor="var(--cyan)" className="h-full p-6">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(47,224,200,0.12)" }}
                >
                  <FileArchive size={24} color="var(--cyan)" strokeWidth={2} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-[17px] font-bold text-[var(--text-primary)]">
                      Complete Developer Repository Archive
                    </h3>
                    <MonoBadge>For Developers</MonoBadge>
                  </div>
                  <p className="mt-1 font-mono text-[13px] text-[var(--cyan)]">
                    openclaw-main.zip
                  </p>
                  <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                    Core agent runtime, browser automation tools, prompt templates, and API
                    connectors. For Linux, macOS, and Windows developers.
                  </p>
                  <a href={ZIP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                    <CyanButton size="md" icon={<ZipIcon />}>
                      Download .ZIP
                    </CyanButton>
                  </a>
                </div>
              </div>
            </GlassCard>
          </div>
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
          <GlassCard glowColor="#6366F1" className="p-6">
            <EyebrowLabel text="Owner attribution & global contact" color="#6366F1" />
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
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="text-[var(--cyan)] hover:underline">
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
                <GlobeIcon size={16} color="var(--cyan)" className="shrink-0" />
                <a href={COMPANY_WEBSITE} target="_blank" rel="noopener noreferrer" className="text-[var(--cyan)] hover:underline">
                  www.digiformation.co.uk
                </a>
              </div>
              <div className="flex items-center gap-3">
                <TreePine size={16} color="var(--cyan)" className="shrink-0" />
                <a href={LINKTREE} target="_blank" rel="noopener noreferrer" className="text-[var(--cyan)] hover:underline">
                  linktr.ee/digiformationltd
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[1080px]">
          <GlassCard glowColor="var(--amber)" className="p-6 md:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_280px]">
              <div>
                <EyebrowLabel text="Unlock more power" color="var(--amber)" />
                <h2 className="mt-4 font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[30px]">
                  Want more than a single agent? Get DIGI BIZ OS
                </h2>
                <p className="mt-4 max-w-[720px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
                  OpenClaw is a powerful open-source autonomous agent. But DIGI BIZ OS combines
                  WhatsApp Business API, CRM, invoicing, project management, voice-controlled desktop
                  automation, and multi-agent orchestration into one complete business operating
                  system.
                </p>
                <ul className="mt-5 space-y-3">
                  {DIGIBIZOS_POINTS.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 font-body text-[14px] leading-[1.7] text-[var(--text-secondary)]"
                    >
                      <Check size={16} color="var(--cyan)" className="mt-[3px] shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
                <Link to="/pricing">
                  <CyanButton size="lg" icon={<Sparkles size={18} />}>
                    Unlock More Features
                  </CyanButton>
                </Link>
                <Link to="/open-source" className="font-body text-[14px] text-[var(--cyan)] hover:underline">
                  Back to open source software
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
            Download OpenClaw free, then automate everything with DIGI BIZ OS
          </h2>
          <p className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
            No subscriptions, no cloud lock-in, no privacy leaks. Install OpenClaw and let an autonomous
            AI agent build software for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={EXE_URL} target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<WindowsIcon />} tone={INDIGO}>
                Download OpenClaw for Windows
              </CyanButton>
            </a>
            <a href={ZIP_URL} target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<ZipIcon />}>
                Download Source Code
              </CyanButton>
            </a>
            <Link to="/open-source" className="font-body text-[14px] text-[var(--cyan)] hover:underline">
              Back to open source software
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function WindowsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 3.449L9.327 2.12v9.38H0M10.029 1.949L24 0v11.44H10.029M0 12.56h9.327v9.38L0 20.611M10.029 12.56H24V24l-13.971-1.799" />
    </svg>
  );
}

function ZipIcon() {
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

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.919-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.792.372-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
