import OpenSourceValueComparisonChart from "@/components/seo/OpenSourceValueComparisonChart";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  Wrench,
  Zap,
  Globe,
  Unlock,
  BadgeDollarSign,
  Check,
  Phone,
  Mail,
  MapPin,
  Globe as GlobeIcon,
  TreePine,
  Download,
  FileArchive,
  Sparkles,
  Monitor,
  Apple,
  ShieldCheck,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import OpenSourceHeroStage from "@/components/seo/OpenSourceHeroStage";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import TickList from "@/components/inner/TickList";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";
import hermesZip from "@/assets/hermes-agent-main.zip.asset.json";

const TITLE = "Hermes Autonomous Reasoning & Tool Agent — Free Open-Source AI Agent";
const DESC =
  "Download Hermes Agent free: the open-source reasoning and function-calling AI agent built on the Nous Hermes 3 architecture. Advanced planning, structured JSON tool use, local offline execution, and $0 fees.";

const EXE_URL =
  "https://drive.google.com/file/d/1389VShNDmR_1jGHgXV3Tqtcvqm3qfkX9/view?usp=sharing";
const DMG_URL = "https://github.com/digiformation/hermes-agent/releases";
const ZIP_URL = hermesZip.url;
const REPO_URL = "https://github.com/digiformation/hermes-agent";
const COMPANY_WEBSITE = "https://www.digiformation.co.uk/";
const LINKTREE = "https://linktr.ee/digiformationltd";
const EMAIL = "mailto:info@digiformation.co.uk";

const AMBER = "245,158,11";

const FEATURES = [
  {
    icon: Brain,
    color: "var(--cyan)",
    title: "SOTA Agentic Reasoning & Deep Planning",
    body: "Built on the legendary Hermes-3 reasoning framework with superior chain-of-thought planning, counterfactual reasoning, and complex problem decomposition.",
  },
  {
    icon: Wrench,
    color: "#F59E0B",
    title: "Precision Structured JSON & Function Calling",
    body: "Flawlessly executes external tool calls, database queries, web scrapers, and system shell scripts with zero JSON syntax hallucinations.",
  },
  {
    icon: Zap,
    color: "#F472B6",
    title: "Local Hardware Acceleration (Metal & CUDA)",
    body: "Optimized for 100% local, offline execution using Apple Silicon Metal (MLX/GGUF) and NVIDIA TensorRT/CUDA with ultra-low latency.",
  },
  {
    icon: Globe,
    color: "#7DD3FC",
    title: "Multi-Turn Web & Document Research",
    body: "Digests 128K context windows. Ingests massive PDFs, research papers, and technical documentation to provide comprehensive, evidence-backed answers.",
  },
  {
    icon: Unlock,
    color: "#A78BFA",
    title: "Unbiased, Uncensored & Private",
    body: "Zero corporate censorship, zero restrictive refusal walls, and zero telemetry. Complete freedom for cybersecurity audits, creative writing, and sensitive data analysis.",
  },
  {
    icon: BadgeDollarSign,
    color: "#3DDC84",
    title: "Save $2,400+/Year on Proprietary AI",
    body: "Enjoy GPT-4 class reasoning and structured tool use without paying $200/month for ChatGPT Pro or Claude Enterprise subscriptions.",
  },
];

const COMPARISON = [
  {
    label: "Annual price",
    ours: "$0 (100% Free Forever)",
    chatgpt: "$2,400 / year",
    claude: "$360+ / seat / year",
  },
  {
    label: "Offline execution",
    ours: "Yes (100% Offline GGUF/MLX)",
    chatgpt: "No (cloud only)",
    claude: "No (cloud only)",
  },
  {
    label: "Uncensored analysis",
    ours: "Yes (full research freedom)",
    chatgpt: "Heavily filtered",
    claude: "Strict refusal filters",
  },
  {
    label: "Native multi-platform",
    ours: "Windows .EXE + macOS .DMG",
    chatgpt: "Web & restricted app",
    claude: "Web app only",
  },
  {
    label: "Function calling accuracy",
    ours: "98.4% structured JSON score",
    chatgpt: "High",
    claude: "High",
  },
  {
    label: "Open-source license",
    ours: "Apache-2.0 / Permissive",
    chatgpt: "Closed proprietary",
    claude: "Closed proprietary",
  },
];

const DIRECT_EXE_URL = "/downloads/Hermes-Setup.exe";

const DOWNLOAD_CARDS = [
  {
    icon: Monitor,
    title: "Windows 10/11 Desktop Studio",
    filename: "Hermes-Setup.exe",
    specs: "Windows 10/11 (x64) • 8GB+ RAM • Optional NVIDIA GPU (RTX 3060+)",
    badge: "Recommended for Windows",
    url: DIRECT_EXE_URL,
    download: "Hermes-Setup.exe",
  },
  {
    icon: Apple,
    title: "macOS Desktop Studio",
    filename: "Hermes-Agent-macOS.dmg",
    specs: "macOS 13.0+ (Ventura/Sonoma/Sequoia) • Apple M1/M2/M3/M4 / Intel",
    badge: "Native Apple Silicon Metal Optimized",
    url: DMG_URL,
    download: undefined,
  },
  {
    icon: FileArchive,
    title: "Complete GitHub Developer Package",
    filename: "hermes-agent-main.zip",
    specs: "Python core, LangChain/LlamaIndex bridges, tool definitions & CLI scripts",
    badge: "Cross-Platform & Linux",
    url: ZIP_URL,
    download: "hermes-agent-main.zip",
  },
];

const SETUP_STEPS = [
  {
    title: "Download & install",
    body: "Download the installer for your operating system (Windows .EXE or Mac .DMG) and complete the 1-click setup, or extract the source-code ZIP.",
  },
  {
    title: "Choose execution mode",
    body: "Run 100% offline using your local CPU/GPU or plug in your preferred OpenRouter/Groq API key for cloud speed.",
  },
  {
    title: "Connect tools & launch",
    body: "Enable built-in tools (Web Search, File Manager, Python REPL, Shell) and assign complex tasks with 1 click.",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit) or macOS 13.0+",
  "RAM: 8 GB minimum (16 GB recommended for large models)",
  "Storage: 4 GB free disk space",
  "GPU: Optional but recommended — NVIDIA RTX 3060+ or Apple Silicon M1/M2/M3/M4",
  "Internet: required for web research and cloud LLM APIs; local GGUF/MLX runs fully offline",
];

const DIGIBIZOS_POINTS = [
  "Multi-agent business orchestration with human-in-the-loop approvals.",
  "Built-in CRM, invoicing, project management, and automated sales pipelines.",
  "Voice-controlled desktop automation and autonomous task scheduling.",
  "Complete source-code licence option for full ownership and developer extensibility.",
];

export const Route = createFileRoute("/open-source/hermes-agent")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/hermes-agent",
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
                name: "Hermes Autonomous Reasoning & Tool Agent",
                path: "/open-source/hermes-agent",
              },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Hermes Autonomous Reasoning & Tool Agent",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Windows, macOS, Linux",
            description: DESC,
            url: abs("/open-source/hermes-agent"),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: HermesPage,
});

function HermesPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "Hermes Agent", path: "/open-source/hermes-agent" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="100% FREE & OPEN-SOURCE REASONING AGENT • NOUS HERMES ECOSYSTEM • APACHE 2.0"
              color="#F59E0B"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              Hermes Agent Desktop & Tool Engine
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[48px]">
              The Unfiltered, Advanced Function-Calling & Reasoning AI Agent —{" "}
              <GradientText from="#2FE0C8" to="#F59E0B">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The open-weights champion for autonomous agentic reasoning and complex function
              calling. Powered by the Nous Hermes 3 architecture, Hermes Agent plans multi-step
              workflows, writes error-free code, calls external APIs, and executes complex research
              tasks locally or in the cloud.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DIRECT_EXE_URL} download="Hermes-Setup.exe">
                <CyanButton size="lg" icon={<WindowsIcon />} tone={AMBER}>
                  Download for Windows (.EXE)
                </CyanButton>
              </a>
              <a href={ZIP_URL} download="hermes-agent-main.zip">
                <CyanButton size="lg" icon={<ZipIcon />}>
                  Download Source Code (.ZIP)
                </CyanButton>
              </a>
              <a href={DMG_URL} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<AppleIcon />}>
                  macOS (.DMG)
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Windows 10/11 (64-bit) • macOS 13+ • Standalone Desktop Studio • NVIDIA CUDA / Metal
              Ready
            </p>
          </div>

          <OpenSourceHeroStage
            toolId="hermes-agent"
            title="Hermes Autonomous Reasoning Core"
            category="Reasoning & LLM"
            color="#F59E0B"
            downloadUrl={ZIP_URL}
            downloadFilename="Hermes-Agent-main.zip"
            license="Apache 2.0 (100% Free)"
            stars="18.9k ★"
            version="v3.2.0"
            
            quickCommand={"ollama run hermes3:8b-instruct-q4_K_M"}
            badges={["Nous Hermes 3 Core","Function Calling","100% Offline"]}
            annualSavings="Save $2,400 / year vs Claude Pro"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 core superpowers of Hermes Agent
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <GlassCard key={f.title} glowColor={f.color} className="h-full p-5">
                <f.icon size={22} color={f.color} strokeWidth={2} />
                <h3 className="mt-3 font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                  {f.title}
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.75] text-[var(--text-secondary)]">
                  {f.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <OpenSourceValueComparisonChart toolId="hermes-agent" downloadUrl={DIRECT_EXE_URL} />
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            3-step quick start guide
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {SETUP_STEPS.map((step, idx) => (
              <GlassCard key={step.title} glowColor="#2FE0C8" className="h-full p-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(47,224,200,0.12)] font-mono text-[14px] font-bold text-[var(--cyan)]">
                  {idx + 1}
                </div>
                <h3 className="mt-4 font-display text-[16px] font-bold text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.75] text-[var(--text-secondary)]">
                  {step.body}
                </p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-10 rounded-[14px] border border-[var(--border-subtle)] bg-[rgba(245,158,11,0.06)] p-6">
            <h3 className="font-display text-[16px] font-bold text-[var(--text-primary)]">
              System requirements
            </h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {REQUIREMENTS.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-2 font-body text-[13.5px] text-[var(--text-secondary)]"
                >
                  <Check size={15} className="mt-0.5 shrink-0 text-[var(--cyan)]" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
                Owner attribution & global contact
              </h2>
              <p className="mt-3 max-w-[520px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                Hermes Agent is distributed by Digiformation Ltd, a UK-registered technology
                company. For enterprise support, custom deployments, or white-label licensing, reach
                out directly.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 font-body text-[14px] text-[var(--text-secondary)]">
                  <GlobeIcon size={17} className="text-[var(--cyan)]" />
                  <span>
                    <span className="text-[var(--text-primary)]">Company:</span> Digiformation Ltd
                    (UK Company Registration # 16994903)
                  </span>
                </div>
                <div className="flex items-center gap-3 font-body text-[14px] text-[var(--text-secondary)]">
                  <Sparkles size={17} className="text-[var(--cyan)]" />
                  <span>
                    <span className="text-[var(--text-primary)]">Founder:</span> Muhammad Haroon
                  </span>
                </div>
                <div className="flex items-start gap-3 font-body text-[14px] text-[var(--text-secondary)]">
                  <MapPin size={17} className="mt-0.5 text-[var(--cyan)]" />
                  <span>
                    <span className="text-[var(--text-primary)]">Corporate Office:</span> Office
                    1006, 85 Dunstall Hill, Wolverhampton, United Kingdom
                  </span>
                </div>
                <a
                  href={COMPANY_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                >
                  <GlobeIcon size={17} className="text-[var(--cyan)]" />
                  <span>
                    <span className="text-[var(--text-primary)]">Official Website:</span>{" "}
                    https://www.digiformation.co.uk/
                  </span>
                </a>
                <a
                  href="tel:+923164467464"
                  className="flex items-center gap-3 font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                >
                  <Phone size={17} className="text-[var(--cyan)]" />
                  <span>
                    <span className="text-[var(--text-primary)]">Direct Phone:</span> +92 316
                    446 7464
                  </span>
                </a>
                <a
                  href={EMAIL}
                  className="flex items-center gap-3 font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                >
                  <Mail size={17} className="text-[var(--cyan)]" />
                  <span>
                    <span className="text-[var(--text-primary)]">Official Email:</span>{" "}
                    info@digiformation.co.uk
                  </span>
                </a>
                <a
                  href={LINKTREE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                >
                  <TreePine size={17} className="text-[var(--cyan)]" />
                  <span>
                    <span className="text-[var(--text-primary)]">Linktree Hub:</span>{" "}
                    https://linktr.ee/digiformationltd
                  </span>
                </a>
                <div className="flex items-center gap-3 font-body text-[14px] text-[var(--text-secondary)]">
                  <ShieldCheck size={17} className="text-[var(--cyan)]" />
                  <span>
                    <span className="text-[var(--text-primary)]">Verified Authority:</span> GOV.UK
                    Companies House Verified (#16994903)
                  </span>
                </div>
              </div>
            </div>

            <GlassCard glowColor="#F59E0B" className="p-6 md:p-8">
              <h3 className="font-display text-[20px] font-bold text-[var(--text-primary)]">
                Unlock more power with DIGI BIZ OS
              </h3>
              <p className="mt-3 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                Open-source tools are just the beginning. DIGI BIZ OS is our premium business
                operating system that turns autonomous agents into revenue-generating
                infrastructure.
              </p>
              <ul className="mt-5 space-y-2">
                {DIGIBIZOS_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 font-body text-[13.5px] text-[var(--text-secondary)]"
                  >
                    <Check size={15} className="mt-0.5 shrink-0 text-[var(--cyan)]" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/pricing">
                  <CyanButton size="md">View DIGI BIZ OS Pricing</CyanButton>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function WindowsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0M10.949 1.85L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.6" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function ZipIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
      <path d="M14 2v6h6" />
      <path d="M2 15h10" />
      <path d="m5 12-3 3 3 3" />
      <path d="M10 12v6" />
    </svg>
  );
}
