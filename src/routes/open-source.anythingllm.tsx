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
  Globe,
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
import screenshot from "@/assets/anythingllm-screenshot.jpg.asset.json";

const toolData = OPEN_SOURCE_SUBPAGES["anythingllm"];

const TITLE = "Chat With Any Document on Your PC — 100% Private, Secure & Offline — Free Open-Source Alternative";
const DESC =
  toolData.tagline + " Download 100% free with verified licensing, zero malware, and complete local privacy.";

const DOWNLOAD_URL = toolData.downloadUrl;
const REPO_URL = toolData.repoUrl;

const FEATURES = [
  {
    icon: FileText,
    color: "var(--cyan)",
    title: "Universal Document Chat (PDF, DOCX, CSV, Notion)",
    body: "Drag and drop complex PDFs, financial statements, contracts, or books and ask questions with exact page citations.",
  },
  {
    icon: ShieldCheck,
    color: "var(--purple)",
    title: "Zero Data Leaks (Air-Gapped & Offline)",
    body: "Built-in vector database (LanceDB) stores your embeddings locally on your PC. No third-party tracking or indexing.",
  },
  {
    icon: Globe,
    color: "var(--amber)",
    title: "Web Scraping & Multi-Source Knowledge",
    body: "Import live web pages, documentation URLs, YouTube video transcripts, or entire GitHub repositories into your AI knowledge base.",
  },
  {
    icon: Bot,
    color: "#7DD3FC",
    title: "Multi-LLM Flexible Engine",
    body: "Connects out-of-the-box to local models (Ollama, LM Studio, Jan, LocalAI) or cloud providers (OpenAI, Anthropic, Groq, DeepSeek).",
  },
  {
    icon: Users,
    color: "#F472B6",
    title: "Unlimited Custom Workspaces & Multi-User",
    body: "Create isolated workspaces for Legal, Accounting, Marketing, or Development with custom system prompts and permissions.",
  },
  {
    icon: PiggyBank,
    color: "#3DDC84",
    title: "Save $300+/Year on ChatPDF & Humata",
    body: "Replaces expensive SaaS document chat tools (ChatPDF, AskYourPDF, Humata AI) with lifetime free unlimited access.",
  },
];

export const Route = createFileRoute("/open-source/anythingllm")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/anythingllm",
      title: TITLE,
      description: DESC,
      image: abs(screenshot.url),
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
              { name: toolData.name, path: "/open-source/anythingllm" },
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
            url: abs("/open-source/anythingllm"),
            image: abs(screenshot.url),
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
  component: AnythingLlmPage,
});

function AnythingLlmPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: toolData.shortName, path: "/open-source/anythingllm" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel text={toolData.eyebrow} color="var(--cyan)" />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              {toolData.shortName} • {toolData.category}
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
              Chat With Any Document on Your PC —{" "}
              <GradientText from="#2FE0C8" to="#8B7CF6">
                100% Private, Secure & Offline
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              {toolData.tagline} Verified open-source alternative to {toolData.alternativeTo.join(", ")}. Enjoy full offline privacy, zero subscriptions, and complete ownership.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a
                href={DOWNLOAD_URL}
                target="_blank" rel="noopener noreferrer"
              >
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download AnythingLLM for Windows (.EXE)
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
            toolId="anythingllm"
            title="AnythingLLM Document AI Studio"
            category="Local AI & Chat"
            color="#8B7CF6"
            downloadUrl={DOWNLOAD_URL}
            downloadFilename="AnythingLLMDesktop-Setup.exe"
            license={toolData.license + " (100% Free)"}
            stars={toolData.stars}
            version="v1.7.2"
            image={screenshot.url}
            quickCommand="docker run -d -p 3001:3001 --name anything-llm mintplexlabs/anything-llm"
            badges={["Built-in Vector DB","Multi-File RAG","Zero Subscriptions"]}
            annualSavings="Save $400 / year vs ChatPDF & Humata"
            repoUrl={REPO_URL}
            downloadLabel="Download AnythingLLM for Windows (.EXE)"
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
        <OpenSourceValueComparisonChart toolId="anythingllm" downloadUrl={DOWNLOAD_URL} />
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
              target="_blank" rel="noopener noreferrer"
            >
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download AnythingLLM for Windows (.EXE)
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
