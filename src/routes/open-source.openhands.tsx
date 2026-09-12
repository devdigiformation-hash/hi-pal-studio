import OpenSourceValueComparisonChart from "@/components/seo/OpenSourceValueComparisonChart";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code2,
  Bug,
  MonitorSmartphone,
  RefreshCcw,
  Wrench,
  BadgeDollarSign,
  Search,
  Zap,
  ShieldCheck,
  PiggyBank,
  FileCode,
  Layers,
  Activity,
  Smile,
  Sparkles,
  Mic,
  Video,
  Camera,
  Sliders,
  Scissors,
  Music,
  Radio,
  FileText,
  Bot,
  Users,
  Database,
  Cpu,
  Terminal,
  ExternalLink,
  GitFork,
  CheckCircle2,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import OpenSourceHeroStage from "@/components/seo/OpenSourceHeroStage";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";
import OpenSourceSubpageTrustSection from "@/components/seo/OpenSourceSubpageTrustSection";
import OpenSourceSubpageFaq from "@/components/seo/OpenSourceSubpageFaq";
import OpenSourceTechSpecs from "@/components/seo/OpenSourceTechSpecs";
import OpenSourceRelatedTools from "@/components/seo/OpenSourceRelatedTools";
import OpenSourceDigiBizBridge from "@/components/seo/OpenSourceDigiBizBridge";
import { OPEN_SOURCE_SUBPAGES } from "@/content/open-source-subpages";

const toolData = OPEN_SOURCE_SUBPAGES["openhands"];

const TITLE = "Your 24/7 Autonomous AI Software Developer That Writes, Tests & Deploys Code — 100% Free — Free Open-Source Alternative";
const DESC =
  toolData.tagline + " Download 100% free with verified licensing, zero malware, and complete local privacy.";

const DOWNLOAD_URL = toolData.downloadUrl;
const REPO_URL = toolData.repoUrl;

const FEATURES = [
  {
    icon: Code2,
    color: "var(--cyan)",
    title: "Full-Stack Autonomous Software Engineering",
    body: "Writes frontend React/Vue components, builds backend REST/GraphQL APIs, schemas SQLite/Postgres databases, and configures Docker environments from simple English instructions.",
  },
  {
    icon: Bug,
    color: "#3B82F6",
    title: "SWE-Bench Verified GitHub Issue Resolver",
    body: "Connects directly to your GitHub repositories, reads existing codebases, understands issue tickets, creates bug fix PRs, and verifies unit tests before submission.",
  },
  {
    icon: MonitorSmartphone,
    color: "var(--amber)",
    title: "Interactive Sandbox Workstation (Terminal + Editor + Browser)",
    body: "Runs a live isolated environment with full Bash shell access, an integrated VS Code-style editor, and a live web browser preview to inspect running apps in real-time.",
  },
  {
    icon: RefreshCcw,
    color: "#F472B6",
    title: "Universal Multi-Model Hub (100+ LLMs)",
    body: "Seamlessly switch between 100% free local models (DeepSeek-R1, Ollama Llama 3.3, Qwen 2.5 Coder) and top-tier cloud models (Claude 3.5 Sonnet, OpenAI GPT-4o, Groq).",
  },
  {
    icon: Wrench,
    color: "#7DD3FC",
    title: "Self-Healing Automated Test & Debug Loop",
    body: "Executes pytest, npm test, or build scripts in the terminal. If errors occur, OpenHands reads the stack trace, diagnoses the defect, edits the source files, and reruns tests until 100% passing.",
  },
  {
    icon: BadgeDollarSign,
    color: "#3DDC84",
    title: "Save $6,000+/Year on Devin AI",
    body: "Enjoy enterprise-grade autonomous software development without paying $500/month Devin subscriptions or restrictive seat licenses.",
  },
];

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
              { name: toolData.name, path: "/open-source/openhands" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: toolData.name,
            applicationCategory: "DeveloperApplication",
            operatingSystem: toolData.requirements.os,
            description: DESC,
            url: abs("/open-source/openhands"),
            
            downloadUrl: abs(DOWNLOAD_URL),
            license: toolData.license,
            codeRepository: REPO_URL,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: toolData.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
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
            { name: toolData.shortName, path: "/open-source/openhands" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel text={toolData.eyebrow} color="var(--cyan)" />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              {toolData.shortName} • {toolData.category}
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
              Your 24/7 Autonomous AI Software Developer That Writes, Tests & Deploys Code —{" "}
              <GradientText from="#2FE0C8" to="#3B82F6">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              {toolData.tagline} Verified open-source alternative to {toolData.alternativeTo.join(", ")}. Enjoy full offline privacy, zero subscriptions, and complete ownership.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a
                href={DOWNLOAD_URL}
                download="OpenHands-main.zip"
              >
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download Full Source Code (.ZIP)
                </CyanButton>
              </a>

              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[var(--r-md)] border border-white/15 bg-white/[0.04] font-mono text-[13.5px] font-semibold text-zinc-200 hover:text-white hover:bg-white/[0.08] transition-all"
              >
                <GitFork size={16} className="text-blue-400" />
                <span>Official GitHub ({toolData.stars})</span>
                <ExternalLink size={13} className="text-zinc-400" />
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-[12px] text-zinc-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 size={13} />
                <span>{toolData.downloadTypeLabel}</span>
              </span>
              <span>•</span>
              <span>{toolData.requirements.os}</span>
              <span>•</span>
              <span>{toolData.license}</span>
            </div>
          </div>

          <OpenSourceHeroStage
            toolId="openhands"
            title="OpenHands Autonomous AI Engineer"
            category="Autonomous Agent"
            color="#3B82F6"
            downloadUrl={DOWNLOAD_URL}
            downloadFilename="OpenHands-main.zip"
            license={toolData.license + " (100% Free)"}
            stars={toolData.stars}
            version="v0.28.0 (SWE-Bench 53%+)"
            
            quickCommand="docker run -it --pull=always -e SANDBOX_USER_ID=$(id -u) -v /var/run/docker.sock:/var/run/docker.sock -p 3000:3000 ghcr.io/all-hands-ai/openhands:0.28"
            badges={["SWE-Bench Verified","Docker Sandbox","VS Code Shell"]}
            annualSavings="Save $6,000 / year vs Devin"
            repoUrl={REPO_URL}
            downloadLabel="Download Full Source Code (.ZIP)"
          />
        </div>
      </SectionWrapper>

      {/* 6 CORE SUPERPOWERS */}
      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 Core Superpowers of {toolData.shortName}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f: any) => (
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

      {/* VALUE COMPARISON CHART */}
      <SectionWrapper>
        <OpenSourceValueComparisonChart toolId="openhands" downloadUrl={DOWNLOAD_URL} />
      </SectionWrapper>

      {/* TECHNICAL SYSTEM REQUIREMENTS */}
      <OpenSourceTechSpecs
        toolName={toolData.shortName}
        requirements={toolData.requirements}
        privacy={toolData.privacy}
      />

      {/* TRUST & PROVENANCE SECTION */}
      <OpenSourceSubpageTrustSection tool={toolData} />

      {/* FAQ ACCORDION SECTION (AEO / GEO) */}
      <OpenSourceSubpageFaq toolName={toolData.shortName} faqs={toolData.faqs} />

      {/* RELATED OPEN-SOURCE TOOLS */}
      <OpenSourceRelatedTools currentToolId={toolData.id} relatedToolIds={toolData.relatedToolIds} />

      {/* NATURAL DIGI BIZ OS BRIDGE */}
      <OpenSourceDigiBizBridge
        headline={toolData.bridge.headline}
        description={toolData.bridge.description}
        highlights={toolData.bridge.highlights}
      />

      {/* BOTTOM ACTION SECTION */}
      <SectionWrapper>
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
            Get {toolData.shortName} Free, Then Connect to DIGI BIZ OS
          </h2>
          <p className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
            Enjoy full privacy, zero recurring subscriptions, and perpetual open-source freedom on your hardware.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={DOWNLOAD_URL}
              download="OpenHands-main.zip"
            >
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download Full Source Code (.ZIP)
              </CyanButton>
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--r-md)] border border-white/15 bg-white/[0.04] font-mono text-[14px] font-semibold text-zinc-200 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <GitFork size={16} className="text-blue-400" />
              <span>Official GitHub</span>
              <ExternalLink size={13} className="text-zinc-400" />
            </a>
          </div>
          <div className="mt-6">
            <Link
              to="/open-source"
              className="font-body text-[14px] text-[var(--cyan)] hover:underline"
            >
              ← Back to Open-Source Software Library
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
