import OpenSourceValueComparisonChart from "@/components/seo/OpenSourceValueComparisonChart";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  FileSpreadsheet,
  Presentation,
  Download,
  Sparkles,
  ExternalLink,
  GitFork,
  CheckCircle2,
  Cpu,
  Database,
  ArrowRight,
  Github,
  Key,
  Flame,
  Layers,
  Check,
  Globe,
  Radio,
  Lock,
  BookOpen,
  Pin,
  Laptop,
  Phone,
  Mail,
  ShieldCheck,
  PiggyBank,
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
import SubscribeToDownloadModal from "@/components/seo/SubscribeToDownloadModal";
import { OPEN_SOURCE_SUBPAGES } from "@/content/open-source-subpages";

import digiofficeDashboardScreenshot from "@/assets/digioffice-dashboard.png";
import digiofficeSheetsAiScreenshot from "@/assets/digioffice-sheets-ai.png";
import digiofficeWriterAiScreenshot from "@/assets/digioffice-writer-ai.png";

const toolData = OPEN_SOURCE_SUBPAGES["digioffice"];

const TITLE = "DIGI OFFICE SUITE — Sovereign Universal AI Office Suite (Free Microsoft 365 Alternative) | DIGI BIZ OS";
const DESC =
  toolData.tagline + " Download 100% free Windows desktop installer (64-Bit & 32-Bit) with Word, Excel, PowerPoint, PDF, Rust calculation engine, and Sheesha UI.";

const DOWNLOAD_64_URL = "https://github.com/digiformationltd-creator/DigiOffice-Suit/releases/download/v1.0.0/DigiOffice-Suite-Setup-64Bit-(Windows-10-and-11).exe";
const DOWNLOAD_32_URL = "https://github.com/digiformationltd-creator/DigiOffice-Suit/releases/download/v1.0.0/DigiOffice-Suite-Setup-32Bit-(Windows-7-to-11).exe";
const REPO_URL = toolData.repoUrl;

const FEATURES = [
  {
    icon: FileText,
    color: "#3B82F6",
    title: "Docs (.docx) with Word-Style Track Changes",
    body: "Opens native Word documents with pixel-perfect fidelity. The built-in AI rewrites sections, drafts summaries, and inserts edits with one-click rollback and standard revisions.",
  },
  {
    icon: FileSpreadsheet,
    color: "#10B981",
    title: "Sheets (.xlsx) with Bare-Metal Rust Engine",
    body: "Powered by an embedded Rust calculation engine. Executes real SUMIF, VLOOKUP, INDEX/MATCH, and dynamic pivot models in microseconds with zero arithmetic hallucinations.",
  },
  {
    icon: Presentation,
    color: "#F59E0B",
    title: "Slides (.pptx) Pitch Deck Generator",
    body: "Transform single prompts into investor pitch decks, executive briefings, and conference presentations rendered as native editable PowerPoint canvas slides.",
  },
  {
    icon: Laptop,
    color: "#06B6D4",
    title: "Universal Windows 7 to 11 Compatibility",
    body: "Engineered with defensive Win32 symbol polyfills. Runs with zero crashes on Windows 7 SP1 (32-Bit), Windows 8.1, Windows 10, Windows 11, and ARM64.",
  },
  {
    icon: Sparkles,
    color: "#EC4899",
    title: "Sheesha UI (iPhone Frosted Glass & 14px Curves)",
    body: "Luminous frosted crystal glass (backdrop-filter: blur(30px)) across quick-start tiles, 14px DigiLabs curved corners, and tactile Pushpin (📌) file semantics.",
  },
  {
    icon: PiggyBank,
    color: "#2FE0C8",
    title: "Save $450 – $700 Every Single Year",
    body: "Completely eliminate recurring Microsoft 365 ($99-$240/yr), Copilot ($360/yr), and Adobe Acrobat subscriptions with sovereign, 100% private desktop software.",
  },
];

const COMPATIBILITY_ROWS = [
  {
    os: "Windows 7 SP1",
    arch: "32-Bit (x86) & 64-Bit",
    edition: "32-Bit Universal Edition",
    perf: "⚡ Ultra-Light, Zero-Crash (<180MB RAM)",
  },
  {
    os: "Windows 8 / 8.1",
    arch: "32-Bit (x86) & 64-Bit",
    edition: "32-Bit Universal Edition",
    perf: "⚡ Smooth & Fast Native Execution",
  },
  {
    os: "Windows 10 (Budget PC)",
    arch: "32-Bit / 2GB–4GB RAM",
    edition: "32-Bit Universal Edition",
    perf: "⚡ Low Resource Memory Footprint",
  },
  {
    os: "Windows 10 (Modern PC)",
    arch: "64-Bit / 8GB+ RAM",
    edition: "64-Bit High-Performance",
    perf: "🚀 Blazing Fast Multi-Core Acceleration",
  },
  {
    os: "Windows 11",
    arch: "64-Bit (x64)",
    edition: "64-Bit High-Performance",
    perf: "🚀 Full GPU & AVX2 Canvas Rendering",
  },
  {
    os: "Windows 11 ARM64",
    arch: "Snapdragon X Elite / Apple VM",
    edition: "32-Bit Universal Edition",
    perf: "⚡ Flawless x86 Lightweight Emulation",
  },
];

export const Route = createFileRoute("/open-source/digioffice")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/digioffice",
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
              { name: toolData.name, path: "/open-source/digioffice" },
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
            url: abs("/open-source/digioffice"),
            downloadUrl: DOWNLOAD_64_URL,
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
            mainEntity: toolData.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        },
      ],
    };
  },
  component: DigiOfficeSubpage,
});

function DigiOfficeSubpage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDownloadUrl, setActiveDownloadUrl] = useState(DOWNLOAD_64_URL);
  const [activeDownloadLabel, setActiveDownloadLabel] = useState("DigiOffice Suite 64-Bit Setup (.exe 144MB)");

  const openSubscribeModal = (url: string, label: string) => {
    setActiveDownloadUrl(url);
    setActiveDownloadLabel(label);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SubscribeToDownloadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        downloadUrl={activeDownloadUrl}
        downloadLabel={activeDownloadLabel}
        channelUrl="https://www.youtube.com/@Digiformationltd"
        channelName="Digiformation Ltd Official"
      />
      <SectionWrapper>
        {/* ── BREADCRUMBS ─────────────────────────────────────────── */}
        <div className="mb-6">
          <Breadcrumbs
            trail={[
              { name: "Home", path: "/" },
              { name: "Open Source", path: "/open-source" },
              { name: "DigiOffice Suite", path: "/open-source/digioffice" },
            ]}
          />
        </div>

        {/* ── HERO BANNER ─────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-b from-blue-950/20 via-black/40 to-black/80 p-6 md:p-12">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400">
                <Sparkles size={13} />
                <span>OFFICIAL DIGIFORMATION OPEN SOURCE OFFICE SUITE</span>
              </div>
              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                DIGI OFFICE SUITE — <GradientText from="#38BDF8" to="#3B82F6">Universal Sovereign AI Office</GradientText>
              </h1>
              <p className="mt-4 font-body text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                The zero-cost Microsoft 365 and Copilot alternative engineered by DigiFormation Ltd. Full native Docs (.docx), Sheets (.xlsx), Slides (.pptx), PDF, and Markdown. Runs buttery-smooth across Windows 7 SP1 (32-Bit) to Windows 11 (64-Bit &amp; ARM64) with iPhone Morphous Glass (Sheesha UI), Rust formula engine, and zero cloud telemetry.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => openSubscribeModal(DOWNLOAD_64_URL, "DigiOffice Suite 64-Bit Setup (.exe 144MB)")}
                >
                  <CyanButton icon={<Download size={16} />}>
                    Download 64-Bit (.exe 144MB)
                  </CyanButton>
                </button>
                <button
                  type="button"
                  onClick={() => openSubscribeModal(DOWNLOAD_32_URL, "DigiOffice Suite 32-Bit Universal Setup (.exe 104MB)")}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 font-display text-sm font-semibold text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white"
                >
                  <Download size={15} />
                  <span>Download 32-Bit Universal (Win 7-11)</span>
                </button>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/15 px-5 py-2.5 font-display text-sm font-bold text-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition hover:border-emerald-400 hover:bg-emerald-500/25 hover:text-white"
                >
                  <Sparkles size={15} className="text-emerald-400" />
                  <span>Try DIGI BIZ OS (3-Day Free Trial)</span>
                  <ArrowRight size={13} className="text-emerald-400/80" />
                </Link>
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-display text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  <GitFork size={15} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={13} className="text-white/50" />
                </a>
              </div>
            </div>

            {/* Real Desktop Interface Stage */}
            <div className="w-full max-w-xl lg:w-auto">
              <div className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-black/60 shadow-[0_0_50px_rgba(59,130,246,0.25)] backdrop-blur-2xl">
                <img
                  src={digiofficeDashboardScreenshot}
                  alt="DigiOffice Suite - Official Desktop Interface"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute top-3 right-3 rounded-full border border-blue-500/40 bg-slate-950/90 px-3 py-1 font-mono text-xs font-bold text-blue-400 shadow-lg">
                  v1.0.0 STABLE • 32 &amp; 64-BIT
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── KEY METRICS STRIP ──────────────────────────────────── */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <GlassCard className="p-5 text-center">
            <div className="font-mono text-2xl font-black text-blue-400 md:text-3xl">£0 / mo</div>
            <div className="mt-1 text-xs text-zinc-400">100% Free Lifetime License</div>
          </GlassCard>
          <GlassCard className="p-5 text-center">
            <div className="font-mono text-2xl font-black text-emerald-400 md:text-3xl">Win 7 - 11</div>
            <div className="mt-1 text-xs text-zinc-400">32-Bit (x86) &amp; 64-Bit Universal</div>
          </GlassCard>
          <GlassCard className="p-5 text-center">
            <div className="font-mono text-2xl font-black text-purple-400 md:text-3xl">Rust .xlsx</div>
            <div className="mt-1 text-xs text-zinc-400">Real Mathematical Formulas</div>
          </GlassCard>
          <GlassCard className="p-5 text-center">
            <div className="font-mono text-2xl font-black text-amber-400 md:text-3xl">100% Local</div>
            <div className="mt-1 text-xs text-zinc-400">Zero Cloud Data Telemetry</div>
          </GlassCard>
        </div>

        {/* ── AEO / AI OVERVIEW SUMMARY BLOCK ─────────────────────── */}
        <div className="mt-8 rounded-2xl border border-blue-500/30 bg-blue-950/25 p-6 md:p-8 backdrop-blur-xl">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-400">
            <Radio size={14} className="animate-pulse" />
            <span>AI OVERVIEW • DIRECT ANSWER ENGINE SPECIFICATION</span>
          </div>
          <h2 className="mt-2 font-display text-lg font-bold text-white md:text-2xl">
            What is DigiOffice Suite? (Quick Technical Summary)
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
            <strong>DigiOffice Suite</strong> is a sovereign, 100% free open-source universal desktop office productivity suite developed by DigiFormation Ltd for Windows. It provides full native byte-preserving support for Word documents (<code>.docx</code>), Excel spreadsheets (<code>.xlsx</code>), PowerPoint presentations (<code>.pptx</code>), PDF editing, and Markdown. Unlike Microsoft 365 ($99–$240/yr) and Copilot ($30/mo), DigiOffice Suite is completely free forever. It features universal compatibility for both 32-bit (x86) and 64-bit systems (running crash-free on Windows 7 SP1, 8.1, 10, 11, and ARM64), an embedded Rust spreadsheet calculation engine, iPhone Morphous Glass (Sheesha UI), and on-device AI document rewriting with zero cloud telemetry.
          </p>
        </div>

        {/* ── REAL WORKSTATION INTERFACE GALLERY ───────────────────── */}
        <div className="mt-16">
          <div className="text-center">
            <EyebrowLabel>AUTHENTIC DESKTOP WORKSPACE</EyebrowLabel>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-4xl">
              Engineered with Sheesha Glass &amp; Native AI
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)] md:text-base max-w-2xl mx-auto">
              Real application views: Luminous frosted glass home workspace, 1-click document creation, pushpin pinning, and embedded AI formula calculations.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Screenshot 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-500/30 bg-black/50 p-3 shadow-xl transition-all hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={digiofficeDashboardScreenshot}
                  alt="DigiOffice Suite - Home Workspace & Sheesha Glass UI"
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 p-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-blue-400" />
                  <h3 className="font-display text-base font-bold text-white">Sheesha UI Home Workspace</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Frosted crystal glass quick-action tiles for Word (.docx), Excel (.xlsx), PowerPoint (.pptx), Markdown, HTML, and PDF. Includes tactile Pushpin (📌) file organization and instant 1-click cloud trial launcher.
                </p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-black/50 p-3 shadow-xl transition-all hover:border-indigo-500/60 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={digiofficeWriterAiScreenshot}
                  alt="DigiOffice Writer with Embedded Digi AI Assistant"
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 p-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-indigo-400" />
                  <h3 className="font-display text-base font-bold text-white">DigiOffice Writer &amp; AI Co-Author</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Native Word (.docx) document editor with formatting ribbon, word-style Track Changes, and integrated Digi AI panel for drafting reports, polishing prose, and restructuring documents in place.
                </p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/50 p-3 shadow-xl transition-all hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={digiofficeSheetsAiScreenshot}
                  alt="DigiOffice Sheets with Embedded Digi AI Assistant"
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-4 p-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                  <h3 className="font-display text-base font-bold text-white">DigiOffice Sheets &amp; Digi AI Engine</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Full Microsoft Excel workbook grid with bare-metal Rust formula calculations (SUMIF, VLOOKUP, INDEX/MATCH). Integrated Digi AI sidebar builds tables, formulas, and charts in place with zero hallucinations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── SYSTEM COMPATIBILITY MATRIX ─────────────────────────── */}
        <div className="mt-16">
          <div className="text-center">
            <EyebrowLabel>UNIVERSAL HARDWARE LIBERATION</EyebrowLabel>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
              System Compatibility Matrix (Windows 7 to 11)
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
              Big Tech killed Windows 7 and 32-bit PCs to force $1,000 hardware upgrades. DigiFormation engineered zero-crash universal binaries for everyone.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs text-zinc-300">
                <thead className="border-b border-white/10 bg-white/5 text-zinc-400">
                  <tr>
                    <th className="py-3 px-4 font-bold">Operating System</th>
                    <th className="py-3 px-4 font-bold">Architecture</th>
                    <th className="py-3 px-4 font-bold">Recommended Edition</th>
                    <th className="py-3 px-4 font-bold">Performance &amp; RAM SLA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {COMPATIBILITY_ROWS.map((row) => (
                    <tr key={row.os} className="hover:bg-white/5 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-white">{row.os}</td>
                      <td className="py-3.5 px-4 text-cyan-300">{row.arch}</td>
                      <td className="py-3.5 px-4 text-blue-400 font-bold">{row.edition}</td>
                      <td className="py-3.5 px-4 text-emerald-400">{row.perf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── CORE FEATURES GRID ──────────────────────────────────── */}
        <div className="mt-16">
          <div className="text-center">
            <EyebrowLabel>ENTERPRISE PRODUCTIVITY MODULES</EyebrowLabel>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
              Crafted for Real Daily Work &amp; Serious Businesses
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feat) => {
              const IconComp = feat.icon;
              return (
                <GlassCard key={feat.title} className="p-6">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${feat.color}20`, color: feat.color }}
                  >
                    <IconComp size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-white">{feat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{feat.body}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* ── VALUE COMPARISON CHART ──────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceValueComparisonChart
            title="Microsoft 365 + Copilot vs. DigiOffice Suite"
            subtitle="Why businesses waste thousands of dollars annually on recurring office seat licenses when DigiOffice delivers complete sovereignty."
            competitorName="Microsoft 365 + Copilot ($30/mo) + Acrobat"
            competitorCost="$450 – $600 / user / year recurring"
            openSourceCost="$0 / Forever (Apache 2.0 / Fair-Source)"
            savings="$4,500 – $10,000+ Every Year (for 10-20 seats)"
            rows={[
              {
                feature: "Annual Software License",
                competitor: "$150 – $240 / user / year recurring",
                openSource: "$0 / Lifetime Free",
                competitorWins: false,
              },
              {
                feature: "AI Document & Formula Assistant",
                competitor: "Microsoft Copilot ($360 / user / year extra)",
                openSource: "Built-in Local AI + Free BYOK (Gemini/Groq)",
                competitorWins: false,
              },
              {
                feature: "Windows 7 & 32-Bit Support",
                competitor: "❌ Abandoned / Crashes on older PCs",
                openSource: "⚡ 100% Native 32-Bit Universal Edition",
                competitorWins: false,
              },
              {
                feature: "Spreadsheet Calculation Engine",
                competitor: "Cloud-locked proprietary engine",
                openSource: "Embedded Rust engine (.xlsx formulas)",
                competitorWins: false,
              },
              {
                feature: "Document Data Privacy",
                competitor: "Forced OneDrive / SharePoint telemetry",
                openSource: "100% Local file storage, zero telemetry",
                competitorWins: false,
              },
              {
                feature: "Portable USB Execution",
                competitor: "❌ Impossible, requires corporate setup",
                openSource: "💼 Zero-install Portable ZIP supported",
                competitorWins: false,
              },
            ]}
          />
        </div>

        {/* ── TECHNICAL SPECIFICATIONS ────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceTechSpecs tool={toolData} />
        </div>

        {/* ── FAQS ────────────────────────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceSubpageFaq faqs={toolData.faqs} toolName={toolData.shortName} />
        </div>

        {/* ── TECHNICAL BLUEPRINTS & VIRAL ARTICLES SECTION ───────── */}
        <div className="mt-16">
          <div className="text-center">
            <EyebrowLabel>TECHNICAL ARCHITECTURE &amp; PLAYBOOKS</EyebrowLabel>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
              Deep-Dive DigiOffice Engineering Blueprints
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
              Read our in-depth guides on breaking Microsoft 365 monopolies, resurrecting Windows 7 32-bit PCs, and embedded Rust spreadsheet engines.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/blog/digioffice-suite-universal-ai-desktop-office-complete-guide-2026"
              className="group flex flex-col justify-between rounded-2xl border border-blue-500/30 bg-blue-950/20 p-6 transition-all hover:border-blue-400 hover:bg-blue-950/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] md:col-span-2"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-blue-400/40 bg-blue-500/10 px-3 py-1 font-mono text-xs font-bold text-blue-400">
                    🔥 Cornerstone 3,000+ Word Guide
                  </span>
                  <span className="font-mono text-xs text-zinc-400">30 min read</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  The Death of Microsoft 365 Subscriptions (2026): Inside DigiOffice Suite
                </h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  The definitive architectural guide to DigiOffice Suite: eliminating Microsoft 365 &amp; Copilot subscription taxes, solving the Windows 7 32-bit KERNEL32 crash, and embedded Rust calculation engines.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold text-blue-400">
                <span>Read Full Blueprint</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/blog/why-big-tech-killed-windows-7-and-how-digioffice-resurrected-it"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-xs text-cyan-300">
                    Hardware Report
                  </span>
                  <span className="font-mono text-xs text-zinc-400">11 min read</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Why Big Tech Killed Windows 7 &amp; How DigiOffice Saved It
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  How software monopolies force users into $1,000 PC upgrades, and how we engineered zero-crash 32-bit compatibility.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold text-cyan-400">
                <span>Read Article</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/blog/inside-the-rust-engine-powering-digioffice-sheets-real-formulas-no-hallucinations"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-emerald-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs text-emerald-300">
                    Rust Architecture
                  </span>
                  <span className="font-mono text-xs text-zinc-400">12 min read</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  Real Formulas, Zero Hallucinations: Embedded Rust Sheets
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Why AI spreadsheet wrappers fail at basic arithmetic, and how our Rust engine calculates living formulas in microseconds.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold text-emerald-400">
                <span>Read Architecture</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/blog/the-sheesha-ui-revolution-crafting-iphone-morphous-glass-for-windows-desktop"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-pink-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-pink-400/30 bg-pink-500/10 px-2.5 py-0.5 font-mono text-xs text-pink-300">
                    UI/UX Design
                  </span>
                  <span className="font-mono text-xs text-zinc-400">10 min read</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-pink-300 transition-colors">
                  The 'Sheesha UI' Revolution: iPhone Morphous Glass
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Real-time 30px frosted glass, 14px DigiLabs curved corners, and tactile pushpin file organization on desktop.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold text-pink-400">
                <span>Read Design Breakdown</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/blog/how-agencies-save-10000-per-year-replacing-microsoft-365-and-copilot"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-amber-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-xs text-amber-300">
                    Business Economics
                  </span>
                  <span className="font-mono text-xs text-zinc-400">11 min read</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  The $10,000/Year Agency Savings Formula
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Line-by-line financial audit: eliminating recurring Microsoft 365, Copilot, and Adobe subscriptions with sovereign tools.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold text-amber-400">
                <span>Read Financial Audit</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>

        {/* ── BRIDGE TO DIGI BIZ OS ───────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceDigiBizBridge
            headline="Supercharge DigiOffice with the Complete DIGI BIZ OS Ecosystem"
            description="While DigiOffice gives you full control over documents and spreadsheets, DIGI BIZ OS automates your commercial operations: turning invoices into CRM deals, deploying 24/7 WhatsApp AI sales reps, and delegating office tasks through JARVIS voice control."
            highlights={[
              "Attach DigiOffice proposals and spreadsheets directly to local CRM customer pipelines",
              "Generate and dispatch branded invoices through WhatsApp with one voice command",
              "JARVIS voice control (<200ms latency) to query business analytics hands-free",
              "Lifetime ownership for £29 (PKR 14,900) with zero recurring subscriptions forever",
            ]}
          />
        </div>

        {/* ── RELATED TOOLS ───────────────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceRelatedTools currentToolId={toolData.id} relatedIds={toolData.relatedToolIds} />
        </div>

        {/* ── CORPORATE TRUST & CREDENTIALS ───────────────────────── */}
        <div className="mt-16">
          <OpenSourceSubpageTrustSection />
        </div>

        {/* ── BOTTOM DOWNLOAD CALL TO ACTION ──────────────────────── */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-8 text-center md:p-14">
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400">
              <Sparkles size={14} />
              <span>100% FREE SOVEREIGN DESKTOP SOFTWARE</span>
            </div>
            <h2 className="mt-5 font-display text-2xl font-extrabold text-white md:text-4xl">
              Ready to Replace Microsoft 365 for Free Forever?
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)] md:text-base">
              Download the standalone Windows installer (64-Bit or 32-Bit Universal). Start drafting documents and spreadsheets with 100% privacy.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-[850px] mx-auto">
              <button
                type="button"
                onClick={() => openSubscribeModal(DOWNLOAD_64_URL, "DigiOffice Suite 64-Bit Setup (.exe 144MB)")}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-blue-400 bg-blue-500 px-6 py-3.5 sm:py-4 font-mono text-[14px] sm:text-[15px] font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all hover:bg-blue-400 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] cursor-pointer"
              >
                <Download size={18} className="shrink-0" />
                <span>Download 64-Bit Setup (.exe 144MB)</span>
              </button>

              <button
                type="button"
                onClick={() => openSubscribeModal(DOWNLOAD_32_URL, "DigiOffice Suite 32-Bit Universal Setup (.exe 104MB)")}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-cyan-400 bg-cyan-500/20 px-6 py-3.5 sm:py-4 font-mono text-[13px] sm:text-[14px] font-bold text-cyan-300 shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all hover:bg-cyan-500/30 hover:border-cyan-300 hover:text-white cursor-pointer"
              >
                <Download size={17} className="shrink-0" />
                <span>Download 32-Bit (Win 7-11)</span>
              </button>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400 bg-emerald-500/20 px-6 py-3.5 sm:py-4 font-mono text-[13px] sm:text-[14px] font-bold text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition hover:border-emerald-300 hover:bg-emerald-500/30 hover:text-white"
              >
                <Sparkles size={17} className="text-emerald-400" />
                <span>Try DIGI BIZ OS (3-Day Free Trial)</span>
                <ArrowRight size={14} className="opacity-80" />
              </Link>
            </div>

            {/* Official Support & Corporate Credentials */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
              <a
                href="https://wa.me/923164467464"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition"
              >
                <Phone size={13} className="text-emerald-400" />
                <span>WhatsApp: +92 316 4467464</span>
              </a>
              <a
                href="mailto:info@digiformation.co.uk"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition"
              >
                <Mail size={13} className="text-cyan-400" />
                <span>Email: info@digiformation.co.uk</span>
              </a>
              <span className="flex items-center gap-1.5 text-zinc-500">
                <span>DigiFormation Ltd • UK Companies House #16994903</span>
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
export default DigiOfficeSubpage;
