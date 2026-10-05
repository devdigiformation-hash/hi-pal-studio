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
  Github,
  Download,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Check,
  Copy,
  Laptop,
  Flame,
  Phone,
  Mail,
  FileSpreadsheet,
  Globe,
  Sliders,
} from "lucide-react";
import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
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
import dashboardScreen from "@/assets/digi-lead-hunter-dashboard.png";
import findLeadsScreen from "@/assets/digi-lead-hunter-find-leads.png";

const toolData = OPEN_SOURCE_SUBPAGES["digi-lead-hunter"];

const TITLE = "DIGI LEAD HUNTER — Autonomous AI B2B Lead & Website Opportunity Platform — 100% Free Open Source";
const DESC =
  toolData.tagline + " Download 100% free with verified source code, zero malware, and complete local privacy.";

const GITHUB_REPO_URL = "https://github.com/digiformationltd-creator/DIGI-LEAD-HUNTER";
const DOWNLOAD_ZIP_URL = "https://github.com/digiformationltd-creator/DIGI-LEAD-HUNTER/archive/refs/heads/main.zip";

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

const PIPELINE_PHASES = [
  {
    number: "01",
    title: "Google Maps & Overpass Discovery",
    desc: "Autonomous spatial engine queries businesses by category, location, and radius with intelligent anti-ban request pacing and zero API costs.",
  },
  {
    number: "02",
    title: "Identity & Website Audit",
    desc: "Verifies operational status, checks domain DNS records, identifies missing websites, and filters out closed or duplicate listings.",
  },
  {
    number: "03",
    title: "WhatsApp Carrier Verification",
    desc: "Validates direct mobile carrier formatting (+92, +44, +1, global) and generates one-click WhatsApp web/mobile direct chat links.",
  },
  {
    number: "04",
    title: "3-Tier Lead Classification",
    desc: "Deterministic classifier segments prospects into Priority 1 (Build-Ready), Priority 2 (Consultation), and Priority 3 (Modernization).",
  },
  {
    number: "05",
    title: "Business & Asset Intelligence",
    desc: "Extracts operating hours, review sentiment, high-rating quotes, visual cues, and local SEO ranking signals.",
  },
  {
    number: "06",
    title: "Website Build-Ready Planning",
    desc: "Synthesizes information architecture, hero section copywriting, services packaging, and direct WhatsApp lead conversion funnels.",
  },
  {
    number: "07",
    title: "Client Deliverable Packaging",
    desc: "Generates formatted WEBSITE_PLAN.html interactive portals, Markdown build briefs, master Excel sheets, and cryptographic ZIP packs.",
  },
  {
    number: "08",
    title: "Control Center & CRM Sync",
    desc: "Glassmorphic desktop UI and SQLite persistence with direct 1-click import into DIGI BIZ OS offline sovereign CRM.",
  },
];

const DELIVERABLES = [
  {
    filename: "WEBSITE_PLAN.html",
    tag: "Client-Facing Presentation",
    desc: "Self-contained, responsive HTML website proposal that business owners can review directly on their smartphones.",
  },
  {
    filename: "WEBSITE_PLAN.md",
    tag: "Strategic Architecture",
    desc: "Complete blueprint outlining target audience, brand value proposition, 5-page layout, and local SEO keywords.",
  },
  {
    filename: "WEBSITE_BUILD_BRIEF.md",
    tag: "Developer Specification",
    desc: "Technical implementation brief with suggested color codes, typography, layout components, and conversion triggers.",
  },
  {
    filename: "EVIDENCE_REPORT.md",
    tag: "Audit Ledger",
    desc: "Factual ledger recording Google Maps ratings, review quotes, business coordinates, and website status verification logs.",
  },
  {
    filename: "MISSING_INFORMATION.md",
    tag: "Client Questionnaire",
    desc: "Pre-written onboarding question checklist to ask the business owner during the initial discovery meeting.",
  },
  {
    filename: "ASSET_MANIFEST.json",
    tag: "Structured Data",
    desc: "Machine-readable JSON data containing public imagery links, opening hours, review stats, and verified phone numbers.",
  },
  {
    filename: "Master Excel (.xlsx)",
    tag: "Outreach CRM Tracker",
    desc: "Formatted spreadsheet with business name, address, Google Maps URL, rating, verified WhatsApp link, and lead tier.",
  },
];

const RELATED_BLOGS = [
  {
    title: "Stop Searching Google Maps Manually: How DIGI LEAD HUNTER & Antigravity Autonomously Surface 3-Tier Client Pipelines",
    slug: "stop-searching-google-maps-digi-lead-hunter-antigravity",
    desc: "Why manual prospecting is dead and how AI agents generate ready-to-close lead packages in minutes.",
  },
  {
    title: "DIGI Lead Hunter vs Outscraper, PhantomBuster & Apollo: Free Open-Source Local Lead Scraper vs $150+/Mo SaaS",
    slug: "digi-lead-hunter-vs-outscraper-phantombuster-apollo",
    desc: "Head-to-head comparison explaining why paying $150+/month for cloud scraper credit caps is completely obsolete.",
  },
  {
    title: "How to Land High-Ticket Web Design Clients from Google Maps in 2026 (The No-Website Local Business Playbook)",
    slug: "how-to-get-web-design-clients-from-google-maps",
    desc: "Step-by-step agency playbook on turning un-website local businesses on Google Maps into £1,000–£3,000 clients.",
  },
  {
    title: "The 3-Tier Lead Qualification Blueprint: How to Pitch Build-Ready vs. Consultation vs. Modernization Prospects",
    slug: "3-tier-lead-qualification-system-web-design-proposals",
    desc: "How deterministic 3-tier lead qualification eliminates wasted time and quadruples proposal closing rates.",
  },
  {
    title: "WhatsApp Cold Outreach for Local Businesses: How to Pitch Websites with Pre-Audited Opportunity Packs (Without Getting Banned)",
    slug: "whatsapp-cold-outreach-playbook-local-businesses-free-audit",
    desc: "High-converting message templates, carrier validation safety rules, and presentation strategies for WhatsApp.",
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
            downloadUrl: GITHUB_REPO_URL,
            license: toolData.license,
            codeRepository: GITHUB_REPO_URL,
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
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"dashboard" | "find">("dashboard");

  const copyCloneCommand = () => {
    navigator.clipboard.writeText("git clone https://github.com/digiformationltd-creator/DIGI-LEAD-HUNTER.git");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <Breadcrumbs
        trail={[
          { name: "Home", path: "/" },
          { name: "Open-Source Suite", path: "/open-source" },
          { name: "DIGI LEAD HUNTER", path: "/open-source/digi-lead-hunter" },
        ]}
      />

      {/* ── 1. HERO SECTION ─────────────────────────────────── */}
      <SectionWrapper className="relative overflow-hidden py-12 md:py-16">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                Official DIGIFORMATION LTD Release
              </span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
                100% Free Forever
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-zinc-400">
                Source-Available
              </span>
            </div>

            <h1 className="reveal-item delay-1 mt-4 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] sm:text-[42px] md:text-[50px]">
              DIGI LEAD HUNTER —{" "}
              <GradientText from="#2FE0C8" to="#38BDF8">
                Autonomous B2B Lead &amp; Website Opportunity Engine
              </GradientText>
            </h1>

            <p className="answer reveal-item delay-2 mt-5 max-w-[640px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)] md:text-[17px]">
              Say goodbye to manual Google Maps copy-pasting. DIGI LEAD HUNTER autonomously scans local businesses, verifies direct WhatsApp mobile numbers, classifies leads into 3 opportunity tiers, and generates full website blueprints and client opportunity ZIPs in seconds.
            </p>

            {/* Direct GitHub Redirect Action Buttons */}
            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl border border-cyan-400 bg-cyan-400 px-6 py-3.5 font-mono text-[14px] font-bold text-black shadow-[0_0_25px_rgba(47,224,200,0.35)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(47,224,200,0.5)]"
              >
                <Github size={19} />
                <span>View &amp; Clone on GitHub</span>
                <ExternalLink size={14} className="opacity-70" />
              </a>

              <a
                href={DOWNLOAD_ZIP_URL}
                download="DIGI-LEAD-HUNTER-main.zip"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 font-mono text-[13.5px] font-semibold text-white transition hover:border-cyan-400 hover:bg-white/10"
              >
                <Download size={16} className="text-cyan-400" />
                <span>Download Source ZIP</span>
              </a>
            </div>

            {/* Quick Clone Snippet */}
            <div className="mt-5 flex items-center gap-2 max-w-[540px]">
              <div className="flex-1 rounded-lg border border-white/10 bg-black/60 px-3 py-2 font-mono text-[12px] text-zinc-300 truncate">
                <span className="text-cyan-400">$</span> git clone https://github.com/digiformationltd-creator/DIGI-LEAD-HUNTER.git
              </div>
              <button
                type="button"
                onClick={copyCloneCommand}
                aria-label="Copy git clone command"
                className="flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-3 py-2 font-mono text-[11px] text-zinc-300 hover:text-white hover:bg-white/10 transition"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3 font-mono text-[12px] text-zinc-400">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle2 size={13} />
                <span>Verified Clean Source Code</span>
              </span>
              <span>•</span>
              <span>Windows, macOS, Linux &amp; Antigravity</span>
              <span>•</span>
              <span>Source-Available License</span>
            </div>
          </div>

          {/* Hero Banner Preview */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#090D16] shadow-2xl">
              <img
                src={bannerWebp}
                alt="DIGI LEAD HUNTER banner — Autonomous AI Lead Intelligence Platform"
                width={1200}
                height={630}
                className="h-auto w-full object-cover"
                loading="eager"
              />
              <div className="border-t border-white/10 bg-[#060B16] p-5">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 font-mono text-[11.5px] uppercase tracking-wider text-[var(--cyan)]">
                    <Terminal size={14} />
                    1-Click Antigravity Command
                  </span>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-emerald-400">
                    Live Open Source
                  </span>
                </div>
                <div className="mt-3 rounded-lg border border-white/10 bg-black/80 p-3 font-mono text-[12.5px] text-zinc-300 overflow-x-auto">
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

      {/* ── 2. LIVE INTERFACE SCREENSHOTS SHOWCASE ───────────── */}
      <SectionWrapper className="py-10 bg-gradient-to-b from-[#060A14] to-transparent">
        <div className="mx-auto max-w-[1240px]">
          <div className="text-center">
            <EyebrowLabel text="Visual Tour &amp; Control Center" color="var(--cyan)" />
            <h2 className="mt-2 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
              Clean Glassmorphic Control Center UI &amp; Real-Time Discovery
            </h2>
            <p className="mx-auto mt-2 max-w-[680px] font-body text-[14.5px] text-[var(--text-secondary)]">
              Run DIGI LEAD HUNTER with its stunning local browser interface at <code className="text-cyan-300">http://localhost:8000</code> or trigger batch runs directly via terminal or Antigravity prompts.
            </p>

            {/* Tab switchers */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setActiveTab("dashboard")}
                className={`rounded-xl px-4 py-2 font-mono text-[13px] font-semibold transition ${
                  activeTab === "dashboard"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(47,224,200,0.2)]"
                    : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white"
                }`}
              >
                1. Operations Dashboard Screen
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("find")}
                className={`rounded-xl px-4 py-2 font-mono text-[13px] font-semibold transition ${
                  activeTab === "find"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(47,224,200,0.2)]"
                    : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white"
                }`}
              >
                2. Live Lead Finder &amp; Filters
              </button>
            </div>
          </div>

          {/* Screenshot container */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/15 bg-black/80 p-2 shadow-2xl">
            {activeTab === "dashboard" ? (
              <div>
                <img
                  src={dashboardScreen}
                  alt="DIGI LEAD HUNTER Dashboard screen showing live lead stats, opportunities, and packages"
                  width={1400}
                  height={800}
                  className="rounded-xl w-full h-auto object-cover border border-white/10"
                />
                <div className="p-4 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Dashboard View: Shows total leads, build-ready opportunities, verified WhatsApp rates, and active batch packages.</span>
                  <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline flex items-center gap-1">
                    <span>View Repository</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <img
                  src={findLeadsScreen}
                  alt="DIGI LEAD HUNTER Find Leads screen with category, city, radius, and WhatsApp filters"
                  width={1400}
                  height={800}
                  className="rounded-xl w-full h-auto object-cover border border-white/10"
                />
                <div className="p-4 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>Lead Finder View: Filter by industry category, city, search radius, verified WhatsApp numbers, and no-website criteria.</span>
                  <a href={GITHUB_REPO_URL} target="_blank" rel="noopener noreferrer" className="text-cyan-300 hover:underline flex items-center gap-1">
                    <span>View Repository</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 3. 6 CORE SUPERPOWERS ────────────────────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)] py-12 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <EyebrowLabel text="Key Innovations" color="var(--purple)" />
            <h2 className="mt-2 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
              Why DIGI LEAD HUNTER Outperforms Legacy Scrapers
            </h2>
            <p className="mx-auto mt-2 max-w-[680px] font-body text-[14.5px] text-[var(--text-secondary)]">
              Built specifically for digital agencies, web design freelancers, and B2B marketers who need high-converting client opportunities, not raw dead spreadsheets.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <GlassCard key={f.title} glowColor={f.color} className="h-full p-6">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={{
                    background: `${f.color}15`,
                    borderColor: `${f.color}40`,
                    boxShadow: `0 0 20px ${f.color}20`,
                  }}
                >
                  <f.icon size={22} color={f.color} strokeWidth={2} />
                </div>
                <h3 className="mt-4 font-display text-[16px] font-bold text-[var(--text-primary)]">
                  {f.title}
                </h3>
                <p className="mt-2.5 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {f.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 4. 8-PHASE SYSTEM PIPELINE ARCHITECTURE ─────────── */}
      <SectionWrapper className="py-12 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <EyebrowLabel text="Deterministic Engineering" color="var(--cyan)" />
            <h2 className="mt-2 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
              The 8-Phase Autonomous Intelligence Pipeline
            </h2>
            <p className="mx-auto mt-2 max-w-[680px] font-body text-[14.5px] text-[var(--text-secondary)]">
              From raw spatial coordinates to fully packaged client proposals, every lead is evaluated through a strict multi-stage audit.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PIPELINE_PHASES.map((phase) => (
              <div
                key={phase.number}
                className="relative rounded-2xl border border-white/10 bg-[#060A14] p-5 transition hover:border-cyan-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[22px] font-extrabold text-cyan-400">
                    {phase.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-cyan-400/80 animate-pulse" />
                </div>
                <h3 className="mt-3 font-display text-[15px] font-bold text-white">
                  {phase.title}
                </h3>
                <p className="mt-2 font-body text-[12.5px] leading-[1.65] text-zinc-400">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 5. THE 3 OPPORTUNITY TIERS BREAKDOWN ─────────────── */}
      <SectionWrapper className="py-12 md:py-16 bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <EyebrowLabel text="Lead Categorization Engine" color="var(--amber)" />
            <h2 className="mt-2 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
              The 3-Tier Lead Opportunity Framework
            </h2>
            <p className="mx-auto mt-2 max-w-[680px] font-body text-[14.5px] text-[var(--text-secondary)]">
              Never waste time guessing what to say to a client. DIGI LEAD HUNTER segments prospects into distinct action buckets with tailored deliverables.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Priority 1 */}
            <div className="rounded-2xl border border-emerald-500/30 bg-[#040C08] p-6 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase text-emerald-400 border border-emerald-500/20">
                Priority 1: Build-Ready
              </div>
              <h3 className="mt-4 font-display text-[18px] font-bold text-white">
                Instant Website Proposals
              </h3>
              <p className="mt-2 font-body text-[13px] leading-[1.7] text-zinc-300">
                Businesses with 4.0+ star ratings, rich public photos and operating hours, a verified WhatsApp mobile number, but <strong>ZERO official website</strong>.
              </p>
              <div className="mt-5 border-t border-emerald-500/20 pt-4">
                <span className="font-mono text-[11px] font-semibold uppercase text-emerald-400">Generated Assets:</span>
                <ul className="mt-2 space-y-1.5 font-mono text-[11.5px] text-zinc-300">
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-400" />
                    <span>WEBSITE_PLAN.md blueprint</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-400" />
                    <span>Interactive HTML presentation</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-400" />
                    <span>Hero copy &amp; WhatsApp CTAs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Priority 2 */}
            <div className="rounded-2xl border border-blue-500/30 bg-[#040814] p-6 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase text-blue-400 border border-blue-500/20">
                Priority 2: Consultation
              </div>
              <h3 className="mt-4 font-display text-[18px] font-bold text-white">
                Discovery Questionnaires
              </h3>
              <p className="mt-2 font-body text-[13px] leading-[1.7] text-zinc-300">
                Businesses with no website and a verified WhatsApp number, but lacking public operational hours, menus, or catalog information.
              </p>
              <div className="mt-5 border-t border-blue-500/20 pt-4">
                <span className="font-mono text-[11px] font-semibold uppercase text-blue-400">Generated Assets:</span>
                <ul className="mt-2 space-y-1.5 font-mono text-[11.5px] text-zinc-300">
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-blue-400" />
                    <span>MISSING_INFORMATION.md checklist</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-blue-400" />
                    <span>Owner discovery questions</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-blue-400" />
                    <span>Consultation meeting framework</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Priority 3 */}
            <div className="rounded-2xl border border-purple-500/30 bg-[#0A0414] p-6 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 font-mono text-[11px] font-bold uppercase text-purple-400 border border-purple-500/20">
                Priority 3: Modernization
              </div>
              <h3 className="mt-4 font-display text-[18px] font-bold text-white">
                Redesign &amp; Mobile Audits
              </h3>
              <p className="mt-2 font-body text-[13px] leading-[1.7] text-zinc-300">
                Businesses that already have a website, but it is broken on mobile phones, lacks HTTPS security, or has zero direct WhatsApp order buttons.
              </p>
              <div className="mt-5 border-t border-purple-500/20 pt-4">
                <span className="font-mono text-[11px] font-semibold uppercase text-purple-400">Generated Assets:</span>
                <ul className="mt-2 space-y-1.5 font-mono text-[11.5px] text-zinc-300">
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-purple-400" />
                    <span>Technical UX/UI gap audit</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-purple-400" />
                    <span>Mobile conversion flaws report</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-purple-400" />
                    <span>Modernization redesign pitch</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 6. WHAT'S INSIDE THE OPPORTUNITY PACK ────────────── */}
      <SectionWrapper className="py-12 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <EyebrowLabel text="Complete Deliverables" color="var(--cyan)" />
            <h2 className="mt-2 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
              What&apos;s Inside Each Opportunity ZIP Package?
            </h2>
            <p className="mx-auto mt-2 max-w-[680px] font-body text-[14.5px] text-[var(--text-secondary)]">
              Every qualified business folder is structured and packaged into a standalone archive (<code className="text-cyan-300">&lt;BUSINESS_NAME&gt;_WEBSITE_OPPORTUNITY_PACK.zip</code>) ready for immediate client delivery.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERABLES.map((item) => (
              <div
                key={item.filename}
                className="rounded-xl border border-white/10 bg-[#060A14] p-5 transition hover:border-white/20"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] font-bold text-cyan-300">
                    {item.filename}
                  </span>
                  <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-2.5 font-body text-[12.5px] leading-[1.65] text-zinc-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 7. VALUE COMPARISON CHART ────────────────────────── */}
      <SectionWrapper className="py-10 bg-[var(--bg-surface)]">
        <OpenSourceValueComparisonChart toolId="digi-lead-hunter" downloadUrl={GITHUB_REPO_URL} />
      </SectionWrapper>

      {/* ── 8. RECOMMENDED IN-DEPTH BLOG GUIDES (5 ARTICLES) ── */}
      <SectionWrapper className="py-12 md:py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <EyebrowLabel text="Knowledge Base &amp; Strategy Guides" color="var(--cyan)" />
              <h2 className="mt-1 font-display text-[26px] font-bold text-white md:text-[34px]">
                5 In-Depth Guides on Lead Hunting &amp; Client Acquisition
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-cyan-300 hover:underline"
            >
              <span>Explore All Articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {RELATED_BLOGS.map((blog) => (
              <Link
                key={blog.slug}
                to={`/blog/${blog.slug}` as any}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#060A14] p-5 transition hover:border-cyan-500/40 hover:bg-[#070D1E]"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400">
                    <BookOpen size={13} />
                    <span>In-Depth Strategy Guide</span>
                  </div>
                  <h3 className="mt-3 font-display text-[15.5px] font-bold leading-snug text-white group-hover:text-cyan-300 transition">
                    {blog.title}
                  </h3>
                  <p className="mt-2 font-body text-[13px] leading-[1.65] text-zinc-400">
                    {blog.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 font-mono text-[11.5px] font-semibold text-cyan-400 group-hover:translate-x-1 transition">
                  <span>Read Article</span>
                  <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 9. TECHNICAL SYSTEM REQUIREMENTS ─────────────────── */}
      <OpenSourceTechSpecs
        toolName={toolData.shortName}
        requirements={toolData.requirements}
        privacy={toolData.privacy}
      />

      {/* ── 10. TRUST & PROVENANCE SECTION ───────────────────── */}
      <OpenSourceSubpageTrustSection tool={toolData} />

      {/* ── 11. FAQ ACCORDION SECTION (AEO / GEO) ────────────── */}
      <OpenSourceSubpageFaq toolName={toolData.shortName} faqs={toolData.faqs} />

      {/* ── 12. NATURAL DIGI BIZ OS BRIDGE ───────────────────── */}
      <OpenSourceDigiBizBridge
        headline={toolData.bridge.headline}
        description={toolData.bridge.description}
        highlights={toolData.bridge.highlights}
      />

      {/* ── 13. BOTTOM ACTION SECTION ────────────────────────── */}
      <SectionWrapper className="py-14 md:py-20 border-t border-white/10">
        <div className="mx-auto max-w-[880px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1.5 font-mono text-[12px] font-bold uppercase tracking-wider text-cyan-300">
            <Github size={15} />
            <span>Official DIGIFORMATION LTD GitHub Repository</span>
          </div>

          <h2 className="mt-5 font-display text-[28px] font-extrabold tracking-[-0.03em] text-[var(--text-primary)] md:text-[42px]">
            Ready to Stop Searching Google Maps Manually?
          </h2>

          <p className="mt-4 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)] md:text-[17px]">
            DIGI LEAD HUNTER is 100% free and open-source. Clone the repository directly from GitHub, run it locally on your PC, or execute it seamlessly with Antigravity AI Agent inside DIGI BIZ OS.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-cyan-400 bg-cyan-400 px-7 py-4 font-mono text-[14.5px] font-bold text-black shadow-[0_0_30px_rgba(47,224,200,0.4)] transition-all hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(47,224,200,0.6)]"
            >
              <Github size={20} />
              <span>Get on GitHub (Direct Repo)</span>
              <ExternalLink size={15} className="opacity-75" />
            </a>

            <a
              href={DOWNLOAD_ZIP_URL}
              download="DIGI-LEAD-HUNTER-main.zip"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-mono text-[14px] font-semibold text-white transition hover:border-cyan-400 hover:bg-white/10"
            >
              <Download size={17} className="text-cyan-400" />
              <span>Download Source Package (.ZIP)</span>
            </a>
          </div>

          {/* Contact and Link */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
            <a
              href="https://wa.me/923164467464"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition"
            >
              <Phone size={13} className="text-emerald-400" />
              <span>WhatsApp Support: +92 316 4467464</span>
            </a>
            <a
              href="mailto:info@digiformation.co.uk"
              className="flex items-center gap-1.5 hover:text-cyan-300 transition"
            >
              <Mail size={13} className="text-cyan-400" />
              <span>Email: info@digiformation.co.uk</span>
            </a>
          </div>

          <div className="mt-8">
            <Link
              to="/open-source"
              className="font-body text-[14px] text-[var(--cyan)] hover:underline"
            >
              ← Back to Open-Source Software Hub
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
