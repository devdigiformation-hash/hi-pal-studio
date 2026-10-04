import OpenSourceValueComparisonChart from "@/components/seo/OpenSourceValueComparisonChart";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  MessageCircle,
  FileText,
  Sparkles,
  Bot,
  FolderArchive,
  Terminal,
  ExternalLink,
  GitFork,
  CheckCircle2,
  Layers,
  MapPin,
  TrendingUp,
  Cpu,
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
import bannerWebp from "@/assets/digi-lead-hunter-banner.webp";

const toolData = OPEN_SOURCE_SUBPAGES["digi-lead-hunter"];

const TITLE = "DIGI LEAD HUNTER — Autonomous AI B2B Lead & Website Opportunity Platform — 100% Free Open Source";
const DESC =
  toolData.tagline + " Download 100% free with verified source code, zero malware, and complete local privacy.";

const DOWNLOAD_URL = toolData.downloadUrl;
const REPO_URL = toolData.repoUrl;

const FEATURES = [
  {
    icon: Search,
    color: "var(--cyan)",
    title: "No More Manual Google Maps Searching",
    body: "Eliminate tedious manual searching, phone copy-pasting, and tab switching. The autonomous crawler scans local businesses across any city and industry in seconds.",
  },
  {
    icon: MessageCircle,
    color: "#25D366",
    title: "Verified WhatsApp Mobile Carrier Validation",
    body: "Automatically validates mobile carrier formatting for Pakistan (+92), UK (+44), US (+1), and international numbers, generating 1-click direct WhatsApp chat links.",
  },
  {
    icon: Layers,
    color: "var(--purple)",
    title: "3-Tier Lead Opportunity Categorization",
    body: "Classifies every business into Priority 1 (Build-Ready: no site + verified WhatsApp), Priority 2 (Consultation questionnaire), and Priority 3 (Website modernization pitch).",
  },
  {
    icon: Bot,
    color: "#3B82F6",
    title: "1-Click Antigravity AI Agent Execution",
    body: "Simply command Antigravity: 'Extract 100 restaurant leads in Lahore with complete website opportunity packs'. It generates Excel sheets, portals, and ZIPs autonomously.",
  },
  {
    icon: FileText,
    color: "var(--amber)",
    title: "Automated Website Plans & Blueprints",
    body: "Generates strategic WEBSITE_PLAN.md and WEBSITE_PLAN.html with information architecture, hero copy, direct WhatsApp CTAs, and localized SEO keywords.",
  },
  {
    icon: FolderArchive,
    color: "#F472B6",
    title: "Standalone Client ZIP Opportunity Packs",
    body: "Packages master Excel sheets, interactive HTML opportunity portals, developer briefs, and proposal files into ready-to-deliver ZIP archives for immediate outreach.",
  },
];

export const Route = createFileRoute("/open-source/digi-lead-hunter")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/digi-lead-hunter",
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
              { name: toolData.name, path: "/open-source/digi-lead-hunter" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: toolData.name,
            applicationCategory: "BusinessApplication",
            operatingSystem: toolData.requirements.os,
            description: DESC,
            url: abs("/open-source/digi-lead-hunter"),
            downloadUrl: abs(DOWNLOAD_URL),
            license: toolData.license,
            codeRepository: REPO_URL,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            author: {
              "@type": "Organization",
              name: "DIGIFORMATION LTD",
              url: "https://www.digiformation.co.uk/",
            },
          }),
        },
      ],
    };
  },
  component: DigiLeadHunterPage,
});

function DigiLeadHunterPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Open-Source Suite", href: "/open-source" },
          { label: "DIGI LEAD HUNTER", href: "/open-source/digi-lead-hunter" },
        ]}
      />

      {/* HERO SECTION */}
      <SectionWrapper className="relative overflow-hidden py-12 md:py-16">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel text={toolData.eyebrow} color="var(--cyan)" />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              {toolData.shortName} • {toolData.category}
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
              Autonomous AI B2B Lead &amp; Website Opportunity Engine —{" "}
              <GradientText from="#2FE0C8" to="#3B82F6">
                100% Free &amp; Open Source
              </GradientText>
            </h1>
            <p className="answer reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              {toolData.tagline} Built and open-sourced by <strong>DIGIFORMATION LTD</strong>. No more manual Google Maps searching — get verified WhatsApp numbers, 3-tier lead classification, and automated website blueprints in 1 click.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} download="DIGI-LEAD-HUNTER-main.zip">
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download Source Code (.ZIP)
                </CyanButton>
              </a>

              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[var(--r-md)] border border-white/15 bg-white/[0.04] font-mono text-[13.5px] font-semibold text-zinc-200 hover:text-white hover:bg-white/[0.08] transition-all"
              >
                <GitFork size={16} className="text-blue-400" />
                <span>Official GitHub Repo</span>
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

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090D16] shadow-2xl">
              <img
                src={bannerWebp}
                alt="DIGI LEAD HUNTER banner — Autonomous AI Lead Intelligence Platform"
                width={1200}
                height={630}
                className="h-auto w-full object-cover"
                loading="eager"
              />
              <div className="border-t border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--cyan)]">
                    1-Click Antigravity Command
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
                    Live Open Source
                  </span>
                </div>
                <div className="mt-3 rounded-lg border border-white/10 bg-black/60 p-3 font-mono text-[12.5px] text-zinc-300">
                  <span className="text-[var(--cyan)]">$</span> python batch_hunter.py --category &quot;Restaurant&quot; --location &quot;Lahore&quot; --count 100
                </div>
                <p className="mt-3 font-body text-[12.5px] text-[var(--text-secondary)]">
                  Outputs Master Excel (.xlsx), HTML Opportunity Portal, Website Blueprints, and packaged ZIP archive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 6 CORE SUPERPOWERS */}
      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 Core Superpowers of {toolData.shortName}
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

      {/* VALUE COMPARISON CHART */}
      <SectionWrapper>
        <OpenSourceValueComparisonChart toolId="digi-lead-hunter" downloadUrl={DOWNLOAD_URL} />
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
            Get {toolData.shortName} Free on GitHub, Then Connect to DIGI BIZ OS
          </h2>
          <p className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
            Stop paying recurring B2B scraper fees. Run autonomous lead intelligence directly in Antigravity or your terminal.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} download="DIGI-LEAD-HUNTER-main.zip">
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download Source Code (.ZIP)
              </CyanButton>
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--r-md)] border border-white/15 bg-white/[0.04] font-mono text-[14px] font-semibold text-zinc-200 hover:text-white hover:bg-white/[0.08] transition-all"
            >
              <GitFork size={16} className="text-blue-400" />
              <span>Official GitHub Repository</span>
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
