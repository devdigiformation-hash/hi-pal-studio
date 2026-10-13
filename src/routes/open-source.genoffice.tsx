import OpenSourceValueComparisonChart from "@/components/seo/OpenSourceValueComparisonChart";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  ShieldCheck,
  PiggyBank,
  Layers,
  Sparkles,
  ExternalLink,
  GitFork,
  CheckCircle2,
  FileText,
  FileSpreadsheet,
  Presentation,
  FileCode,
  Search,
  Cpu,
  Bot,
  Terminal,
  Download,
  Key,
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
import { WindowsIcon } from "@/components/PlatformIcons";
import { OPEN_SOURCE_SUBPAGES } from "@/content/open-source-subpages";

const toolData = OPEN_SOURCE_SUBPAGES["genoffice"];

const TITLE = "GenOffice — Open-Source AI Office Suite (Free Microsoft 365 & Copilot Alternative) | DIGI BIZ OS";
const DESC =
  toolData.tagline + " Download 100% free Windows desktop installer (.exe 156MB) with native Docs, Sheets, Slides, PDF, and built-in AI agent.";

const DOWNLOAD_URL = toolData.downloadUrl;
const REPO_URL = toolData.repoUrl;

const FEATURES = [
  {
    icon: FileText,
    color: "#3B82F6",
    title: "Docs (.docx) with AI Review & Track Changes",
    body: "Opens native Word documents exactly as Word lays them out. The built-in AI rewrites sections, drafts paragraphs, and inserts text with one-click rollback and Word-style revisions.",
  },
  {
    icon: FileSpreadsheet,
    color: "#10B981",
    title: "Sheets (.xlsx) with Live Formulas & Rust Engine",
    body: "Powered by an in-house Rust .xlsx engine. Ask the agent to build complex models with real SUMIF formulas, pivot tables, and charts—never static hallucinated numbers.",
  },
  {
    icon: Presentation,
    color: "#F59E0B",
    title: "Slides (.pptx) from a Single Prompt",
    body: "Type 'Create a 10-slide pitch deck' and watch GenOffice plan the narrative arc, generate slide content, and format real PowerPoint canvas slides with masters and smart guides.",
  },
  {
    icon: FileCode,
    color: "#EC4899",
    title: "PDF Editor & On-Device PDF-to-Word Converter",
    body: "Edit text inside PDF files through PDFium without destructive flattening. Convert PDFs to Word, Excel, or PowerPoint 100% on-device with system OCR.",
  },
  {
    icon: Search,
    color: "#8B5CF6",
    title: "Local File Search & Ask AI with Sources",
    body: "Local SQLite full-text indexing finds files by their exact contents on your SSD. Ask AI answers questions across your starred documents with clickable file citations.",
  },
  {
    icon: Terminal,
    color: "#2FE0C8",
    title: "Scriptable CLI & Developer Agent Skills (MCP)",
    body: "Includes the 'genoffice' CLI and agent skills for Claude Code, Cursor, Codex, Copilot, and Gemini CLI, allowing AI coding bots to patch office documents automatically.",
  },
];

export const Route = createFileRoute("/open-source/genoffice")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/genoffice",
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
              { name: toolData.name, path: "/open-source/genoffice" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: toolData.name,
            applicationCategory: "OfficeApplication",
            operatingSystem: toolData.requirements.os,
            description: DESC,
            url: abs("/open-source/genoffice"),
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
  component: GenOfficePage,
});

function GenOfficePage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: toolData.shortName, path: "/open-source/genoffice" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel text={toolData.eyebrow} color="#3B82F6" />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-blue-400">
              {toolData.shortName} • {toolData.category}
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
              AI-Native Open-Source Office Suite —{" "}
              <GradientText from="#3B82F6" to="#2FE0C8">
                Replace Microsoft 365 &amp; Copilot
              </GradientText>
            </h1>
            <p className="answer reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              {toolData.tagline} Byte-preserving round-trip editing for Word, Excel, PowerPoint, and PDF with a built-in AI assistant. 100% free, Apache 2.0 licensed, and self-hosted locally on your PC.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a
                href={DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download Windows Setup (.exe 156MB)
                </CyanButton>
              </a>

              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[var(--r-md)] border border-white/15 bg-white/[0.04] font-mono text-[13.5px] font-semibold text-zinc-200 hover:text-white hover:bg-white/[0.08] transition-all"
              >
                <GitFork size={16} className="text-cyan-400" />
                <span>Official GitHub ({toolData.stars})</span>
                <ExternalLink size={13} className="text-zinc-400" />
              </a>

              <a
                href="https://genoffice.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-[var(--r-md)] border border-white/10 bg-white/[0.02] font-mono text-[13px] text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                <span>genoffice.ai</span>
                <ExternalLink size={12} className="opacity-60" />
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
            toolId="genoffice"
            title="GenOffice AI Desktop Office Suite"
            category="Productivity & Office AI"
            color="#3B82F6"
            downloadUrl={DOWNLOAD_URL}
            downloadFilename="GenOfficeSetup-v0.11.727-x64.exe"
            license={toolData.license + " (100% Free)"}
            stars={toolData.stars}
            version="v0.11.727 Stable"
            quickCommand="git clone https://github.com/genspark-ai/genoffice.git && npm install && npm start"
            badges={["Byte-Preserving .docx/.xlsx", "Rust Engine", "Built-In AI Agent", "Zero Subscriptions"]}
            annualSavings="Save $450 - $700 / year vs Microsoft 365 + Copilot"
            repoUrl={REPO_URL}
            downloadLabel="Download Windows Setup (.exe 156MB)"
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
        <OpenSourceValueComparisonChart toolId="genoffice" downloadUrl={DOWNLOAD_URL} />
      </SectionWrapper>

      {/* TRUST & PROVENANCE SECTION */}
      <OpenSourceSubpageTrustSection toolId="genoffice" />

      {/* TECH SPECS TABLE */}
      <OpenSourceTechSpecs toolId="genoffice" />

      {/* FAQS */}
      <OpenSourceSubpageFaq toolId="genoffice" />

      {/* RELATED OPEN-SOURCE TOOLS */}
      <OpenSourceRelatedTools currentToolId="genoffice" />

      {/* DIGI BIZ OS ECOSYSTEM BRIDGE */}
      <OpenSourceDigiBizBridge toolId="genoffice" />
    </main>
  );
}
