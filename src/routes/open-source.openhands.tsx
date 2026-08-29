import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code2,
  Bug,
  MonitorSmartphone,
  RefreshCcw,
  Wrench,
  BadgeDollarSign,
  Check,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  TreePine,
  FileArchive,
  Sparkles,
  Code,
  Terminal,
  Globe,
  MessageSquare,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";
import openhandsZip from "@/assets/OpenHands-main.zip.asset.json";

const TITLE =
  "OpenHands Autonomous AI Software Engineer — Free Open-Source Devin Alternative";
const DESC =
  "Download OpenHands free: the open-source autonomous AI software engineer that writes, tests and deploys code, fixes GitHub issues, and builds full-stack apps from plain English. MIT license, $0 fees.";

const ZIP_URL = openhandsZip.url;
const WHATSAPP = "https://wa.me/923164467464";
const COMPANY_WEBSITE = "https://www.digiformation.co.uk/";
const LINKTREE = "https://linktr.ee/digiformationltd";
const EMAIL = "mailto:info@digiformation.co.uk";

const BLUE = "59,130,246";

const FEATURES = [
  {
    icon: Code2,
    color: "var(--cyan)",
    title: "Full-Stack Autonomous Software Engineering",
    body:
      "Writes frontend React/Vue components, builds backend REST/GraphQL APIs, schemas SQLite/Postgres databases, and configures Docker environments from simple English instructions.",
  },
  {
    icon: Bug,
    color: "#3B82F6",
    title: "SWE-Bench Verified GitHub Issue Resolver",
    body:
      "Connects directly to your GitHub repositories, reads existing codebases, understands issue tickets, creates bug fix PRs, and verifies unit tests before submission.",
  },
  {
    icon: MonitorSmartphone,
    color: "var(--amber)",
    title: "Interactive Sandbox Workstation (Terminal + Editor + Browser)",
    body:
      "Runs a live isolated environment with full Bash shell access, an integrated VS Code-style editor, and a live web browser preview to inspect running apps in real-time.",
  },
  {
    icon: RefreshCcw,
    color: "#F472B6",
    title: "Universal Multi-Model Hub (100+ LLMs)",
    body:
      "Seamlessly switch between 100% free local models (DeepSeek-R1, Ollama Llama 3.3, Qwen 2.5 Coder) and top-tier cloud models (Claude 3.5 Sonnet, OpenAI GPT-4o, Groq).",
  },
  {
    icon: Wrench,
    color: "#7DD3FC",
    title: "Self-Healing Automated Test & Debug Loop",
    body:
      "Executes pytest, npm test, or build scripts in the terminal. If errors occur, OpenHands reads the stack trace, diagnoses the defect, edits the source files, and reruns tests until 100% passing.",
  },
  {
    icon: BadgeDollarSign,
    color: "#3DDC84",
    title: "Save $6,000+/Year on Devin AI",
    body:
      "Enjoy enterprise-grade autonomous software development without paying $500/month Devin subscriptions or restrictive seat licenses.",
  },
];

const PANELS = [
  {
    icon: Code,
    color: "var(--cyan)",
    title: "Interactive Code Editor",
    body:
      "Live syntax-highlighted editor displaying code modifications and file diffs in real-time.",
  },
  {
    icon: Terminal,
    color: "#3B82F6",
    title: "Autonomous Bash Terminal",
    body:
      "Real-time command execution, package installation (npm, pip, cargo), and test runner feed.",
  },
  {
    icon: Globe,
    color: "var(--amber)",
    title: "Embedded Browser Preview",
    body:
      "Visual rendering of generated web pages, interactive button testing, and UI inspection.",
  },
  {
    icon: MessageSquare,
    color: "#F472B6",
    title: "Architectural Chat Stream",
    body:
      "Step-by-step reasoning thought trace, file inspection history, and user feedback prompt bar.",
  },
];

const COMPARISON = [
  {
    label: "Annual price",
    ours: "$0 (100% Free Forever)",
    devin: "$6,000 / year",
    other: "$2,400+ / year",
  },
  {
    label: "Source code access",
    ours: "100% Open-Source (MIT)",
    devin: "Proprietary cloud lock-in",
    other: "Closed source",
  },
  {
    label: "Local model support",
    ours: "Yes (Ollama / Zero Internet)",
    devin: "No (cloud only)",
    other: "No (cloud only)",
  },
  {
    label: "SWE-Bench verified",
    ours: "Yes (benchmarked issue resolver)",
    devin: "Closed benchmark claims",
    other: "Not published",
  },
  {
    label: "Self-healing test loop",
    ours: "Auto-diagnose, edit & re-run until passing",
    devin: "Limited",
    other: "Manual debugging",
  },
  {
    label: "License type",
    ours: "MIT — free for commercial use",
    devin: "Paid subscription tier",
    other: "Freemium lock",
  },
];

const SETUP_STEPS = [
  {
    title: "Download & unzip the source",
    body:
      "Grab openhands-main.zip — the complete GitHub repository with the Python backend orchestrator, React frontend UI, and Docker sandbox definitions.",
  },
  {
    title: "Run via Docker or Python",
    body:
      "Launch the full workstation with a single docker run command, or start the Python backend directly for development and customization.",
  },
  {
    title: "Connect a model & assign tasks",
    body:
      "Pick a 100% free local model (Ollama / DeepSeek-R1) or paste a cloud API key, then describe your goal in plain English and watch it code.",
  },
];

const DIGIBIZOS_POINTS = [
  "Multi-agent business orchestration with human-in-the-loop approvals.",
  "Built-in CRM, invoicing, project management, and WhatsApp Business API.",
  "Voice-controlled desktop automation and autonomous task scheduling.",
  "White-label and source-code licence for full ownership and resale.",
];

const QUICKSTART_CMD =
  "unzip openhands-main.zip && cd openhands-main && docker run -it --pull=always -e SANDBOX_USER_ID=$(id -u) -v /var/run/docker.sock:/var/run/docker.sock -p 3000:3000 docker.all-hands.dev/all-hands-ai/openhands:latest";

export const Route = createFileRoute("/open-source/openhands")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/openhands",
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
              { name: "OpenHands Autonomous AI Software Engineer", path: "/open-source/openhands" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "OpenHands Autonomous AI Software Engineer",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Windows, Linux, macOS",
            description: DESC,
            url: abs("/open-source/openhands"),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: OpenHandsPage,
});

function OpenHandsPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "OpenHands", path: "/open-source/openhands" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="DUNIYA KA #1 OPEN-SOURCE AI SOFTWARE ENGINEER • 45,000+ GITHUB STARS • MIT LICENSE"
              color="#3B82F6"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              OpenHands Autonomous Software Engineer (Formerly OpenDevin)
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[48px]">
              Your 24/7 Autonomous AI Software Developer That Writes, Tests & Deploys Code —{" "}
              <GradientText from="#2FE0C8" to="#3B82F6">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The premier open-source alternative to Devin ($500/mo). OpenHands operates a complete
              developer workstation with terminal, code editor, and browser to fix GitHub issues,
              build full-stack web applications, and refactor codebases autonomously.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={ZIP_URL} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<ZipIcon />} tone={BLUE}>
                  Download Full Source Code (.ZIP)
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Complete GitHub Repository • Python / React Architecture • MIT Open-Source
            </p>

            <div className="reveal-item delay-4 mt-6 flex flex-wrap items-center gap-4">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <CyanButton size="md" icon={<WhatsAppIcon />} tone="37,211,102">
                  WhatsApp Enterprise Support (+92 316 446 7464)
                </CyanButton>
              </a>
            </div>
          </div>

          <GlassCard glowColor="#3B82F6" className="p-3">
            <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "rgba(59,130,246,0.15)",
                  boxShadow: "0 0 40px rgba(59,130,246,0.25)",
                }}
              >
                <Code2 size={40} color="#3B82F6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                  OpenHands 4-Panel Engineering Studio
                </p>
                <p className="mx-auto mt-1 max-w-[320px] font-body text-[13.5px] text-[var(--text-secondary)]">
                  Live code editor, autonomous Bash terminal, embedded browser preview, and
                  architectural chat stream in one workstation.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <MonoBadge>Python + React</MonoBadge>
                <MonoBadge>Docker Sandbox</MonoBadge>
                <MonoBadge>100+ LLMs</MonoBadge>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 core superpowers of OpenHands
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
            Interactive workspace preview — 4-panel studio
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PANELS.map((p) => (
              <GlassCard key={p.title} glowColor={p.color} className="h-full p-5">
                <p.icon size={22} color={p.color} strokeWidth={2} />
                <h3 className="mt-3 font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                  {p.title}
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {p.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Cost & capability comparison
          </h2>
          <div className="mt-8 overflow-x-auto rounded-[var(--r-lg)] border border-[var(--border-glass)]">
            <table className="w-full min-w-[720px] border-collapse text-left font-body text-[14px]">
              <caption className="sr-only">
                Comparison between OpenHands, Devin AI, and other paid AI coding agents
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
                    OpenHands (Digiformation)
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
                    Other Paid AI Coders
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
                      {row.other}
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
            3-step quick start
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {SETUP_STEPS.map((s, i) => (
              <GlassCard key={s.title} glowColor={i === 0 ? "#3B82F6" : "var(--cyan)"} className="h-full p-5">
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

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Download repository & quick run
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <GlassCard glowColor="#3B82F6" className="h-full p-6">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: "rgba(59,130,246,0.15)" }}
                >
                  <FileArchive size={24} color="#3B82F6" strokeWidth={2} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-[17px] font-bold text-[var(--text-primary)]">
                      Repository Package
                    </h3>
                    <MonoBadge>For Developers</MonoBadge>
                  </div>
                  <p className="mt-1 font-mono text-[13px] text-[var(--cyan)]">
                    openhands-main.zip
                  </p>
                  <ul className="mt-2 space-y-1 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                    <li>Version: v0.28 Stable (Latest Master Release)</li>
                    <li>License: MIT Open-Source (100% Free for Commercial Use)</li>
                    <li>
                      Includes: Frontend React UI, Python Backend Orchestrator, Docker Sandboxes &
                      Micro-Agents
                    </li>
                  </ul>
                  <a href={ZIP_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                    <CyanButton size="md" icon={<ZipIcon />} tone={BLUE}>
                      Download .ZIP
                    </CyanButton>
                  </a>
                </div>
              </div>
            </GlassCard>

            <GlassCard glowColor="var(--cyan)" className="h-full p-6">
              <h3 className="font-display text-[17px] font-bold text-[var(--text-primary)]">
                1-line quick-start terminal
              </h3>
              <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                Unzip and run via Docker — the full workstation boots on{" "}
                <span className="font-mono text-[var(--cyan)]">http://localhost:3000</span>.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-[var(--r-md)] border border-[var(--border-subtle)] bg-black/40 p-4 font-mono text-[12px] leading-[1.7] text-[var(--cyan)]">
                {`# Step 1: Unzip and run via Docker or Python\n${QUICKSTART_CMD}`}
              </pre>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-1">
          <GlassCard glowColor="#3B82F6" className="p-6">
            <EyebrowLabel text="Owner attribution & global contact" color="#3B82F6" />
            <h3 className="mt-4 font-display text-[20px] font-bold text-[var(--text-primary)]">
              Digiformation Ltd
            </h3>
            <p className="mt-1 font-body text-[14px] text-[var(--text-secondary)]">
              Founder: Muhammad Haroon
            </p>
            <p className="mt-3 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
              UK Company Registration #16994903 • GOV.UK Companies House Verified
            </p>
            <div className="mt-5 grid gap-3 font-body text-[13.5px] text-[var(--text-secondary)] sm:grid-cols-2">
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

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <GlassCard glowColor="var(--amber)" className="p-6 md:p-8">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_280px]">
              <div>
                <EyebrowLabel text="Unlock more power" color="var(--amber)" />
                <h2 className="mt-4 font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[30px]">
                  Want more than a coding agent? Get DIGI BIZ OS
                </h2>
                <p className="mt-4 max-w-[720px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
                  OpenHands is a powerful open-source software engineer. But DIGI BIZ OS combines
                  WhatsApp Business API, CRM, invoicing, project management, voice-controlled
                  desktop automation, and multi-agent orchestration into one complete business
                  operating system.
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

      <SectionWrapper>
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
            Download OpenHands free, then automate everything with DIGI BIZ OS
          </h2>
          <p className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
            No subscriptions, no seat licenses, no vendor lock-in. Install OpenHands and let an
            autonomous AI software engineer build, test, and deploy for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={ZIP_URL} target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<ZipIcon />} tone={BLUE}>
                Download Full Source Code (.ZIP)
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
