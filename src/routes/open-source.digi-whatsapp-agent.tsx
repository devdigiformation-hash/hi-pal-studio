import OpenSourceValueComparisonChart from "@/components/seo/OpenSourceValueComparisonChart";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageSquare,
  Bot,
  Zap,
  ShieldCheck,
  PiggyBank,
  Sparkles,
  ExternalLink,
  GitFork,
  CheckCircle2,
  Cpu,
  Mic,
  Database,
  Phone,
  Mail,
  Download,
  ArrowRight,
  Github,
  Key,
  Flame,
  Activity,
  Layers,
  Smartphone,
  Check,
  QrCode,
  Globe,
  Radio,
  Lock,
  BookOpen,
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

import digiWhatsappPairingKnowledgeScreenshot from "@/assets/digi-whatsapp-pairing-knowledge-screenshot.png";
import digiWhatsappBanner from "@/assets/digi-whatsapp-banner.png";
import digiWhatsappLogo from "@/assets/digi-whatsapp-logo.jpg";
import digiWhatsappChatScreenshot from "@/assets/digi-whatsapp-chat-screenshot.jpg";
import digiWhatsappAiEngineScreenshot from "@/assets/digi-whatsapp-ai-engine-screenshot.jpg";
import digiWhatsappLogsScreenshot from "@/assets/digi-whatsapp-logs-screenshot.jpg";

const toolData = OPEN_SOURCE_SUBPAGES["digi-whatsapp-agent"];

const TITLE = "DIGI WHATSAPP AGENT — 24/7 Autonomous AI Sales Representative (100% Free Open Source) | DIGI BIZ OS";
const DESC =
  toolData.tagline + " Download 100% free Windows desktop installer (.exe) with Baileys QR pairing, 7-Tier free AI cascade, and local SQLite memory.";

const DOWNLOAD_URL = toolData.downloadUrl;
const REPO_URL = toolData.repoUrl;

const FEATURES = [
  {
    icon: QrCode,
    color: "#25D366",
    title: "Multi-Account QR Web Pairing (Baileys)",
    body: "Pair any WhatsApp phone number directly in seconds without paying expensive WhatsApp Cloud API fees or per-conversation SaaS markups.",
  },
  {
    icon: Cpu,
    color: "#3B82F6",
    title: "7-Tier Resilient Free AI Reasoning Cascade",
    body: "100% Free Quotas: Google Gemini 2.5 Flash (#1 Primary) ➔ Groq LPU (12ms) ➔ Cloudflare Workers AI ➔ Mistral ➔ GitHub Models ➔ SambaNova ➔ Together AI with 0ms auto-failover.",
  },
  {
    icon: Mic,
    color: "#EC4899",
    title: "Whisper Audio Note Transcription",
    body: "Inbound voice messages are automatically transcribed via Groq Whisper and answered in authentic Pakistani Roman Urdu, Urdu script, English, or Hindi.",
  },
  {
    icon: Layers,
    color: "#10B981",
    title: "8-Stage Sales Pipeline State Machine",
    body: "Deterministic conversation progress: NEW ➔ GREETED ➔ QUALIFIED ➔ PACKAGE_SELECTED ➔ ORDER_INITIATED ➔ DOCUMENTS_PENDING ➔ COMPLETED.",
  },
  {
    icon: Database,
    color: "#F59E0B",
    title: "100% Local SQLite Memory & Zero Leakage",
    body: "All customer records, orders, chat history, and deal states are stored strictly on your local PC in SQLite (agent_memory.db) with zero third-party cloud leakage.",
  },
  {
    icon: PiggyBank,
    color: "#2FE0C8",
    title: "Save $1,200 – $3,600 Every Single Year",
    body: "Eliminate expensive Wati, Interakt, and ManyChat monthly bills and per-message Meta fees forever with sovereign, self-hosted automation.",
  },
];

const AI_PROVIDERS = [
  {
    name: "Google Gemini 2.5 Flash",
    tier: "#1 Primary",
    quota: "15 RPM Free Tier",
    latency: "Fast & Smart",
    desc: "Primary reasoning model with fluent Urdu, Roman Urdu, and multilingual tone comprehension.",
    color: "#3B82F6",
  },
  {
    name: "Groq Cloud LPU",
    tier: "Tier 2 Failover",
    quota: "12ms Ultra-fast",
    latency: "< 200ms",
    desc: "Whisper STT voice note transcription and ultra-low-latency Qwen 3.8B/27B conversational inference.",
    color: "#F59E0B",
  },
  {
    name: "Cloudflare Workers AI",
    tier: "Tier 3 Failover",
    quota: "10,000 Neurons/Day",
    latency: "Edge Global",
    desc: "Llama 3.3 70B Instruct running on Cloudflare's serverless edge network with 0 cost.",
    color: "#F97316",
  },
  {
    name: "Mistral AI",
    tier: "Tier 4 Failover",
    quota: "1B Monthly Tokens",
    latency: "High Throughput",
    desc: "Mistral Small latest model optimized for structured JSON and sales qualification logic.",
    color: "#EC4899",
  },
  {
    name: "GitHub Models",
    tier: "Tier 5 Failover",
    quota: "100% Free Azure",
    latency: "Reliable SLA",
    desc: "OpenAI GPT-4o-mini free tier hosted directly on Microsoft Azure infrastructure.",
    color: "#A855F7",
  },
  {
    name: "SambaNova Cloud",
    tier: "Tier 6 Failover",
    quota: "400 Tokens/sec",
    latency: "LPU Speed",
    desc: "Meta Llama 3.3 70B Instruct running at groundbreaking 400 T/S speed for instant replies.",
    color: "#10B981",
  },
  {
    name: "Deterministic Local SQLite",
    tier: "0ms Fallback Layer",
    quota: "Unlimited Offline",
    latency: "0ms Latency",
    desc: "Instant catalog FAQs, price quotes, and office hours if external internet or AI limits are hit.",
    color: "#2FE0C8",
  },
];

export const Route = createFileRoute("/open-source/digi-whatsapp-agent")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/digi-whatsapp-agent",
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
              { name: toolData.name, path: "/open-source/digi-whatsapp-agent" },
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
            url: abs("/open-source/digi-whatsapp-agent"),
            downloadUrl: DOWNLOAD_URL,
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
  component: DigiWhatsAppAgentSubpage,
});

function DigiWhatsAppAgentSubpage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDownloadUrl, setActiveDownloadUrl] = useState(DOWNLOAD_URL);
  const [activeDownloadLabel, setActiveDownloadLabel] = useState("Digi WhatsApp Agent Setup (.exe 116MB)");

  const openSubscribeModal = (url: string, label: string) => {
    setActiveDownloadUrl(url);
    setActiveDownloadLabel(label);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-clip pt-[60px] md:pt-[72px]">
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
              { name: "Digi WhatsApp Agent", path: "/open-source/digi-whatsapp-agent" },
            ]}
          />
        </div>

        {/* ── HERO BANNER ─────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 via-black/40 to-black/80 p-6 md:p-12">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400">
                <Sparkles size={13} />
                <span>OFFICIAL DIGIFORMATION OPEN SOURCE AI SALES AGENT</span>
              </div>
              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                DIGI WHATSAPP AGENT — <GradientText from="#25D366" to="#2FE0C8">24/7 Autonomous Sales AI</GradientText>
              </h1>
              <p className="mt-4 font-body text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                The zero-cost Wati and Interakt alternative engineered by DigiFormation Ltd. Connect your personal or business WhatsApp via direct QR scan, automate sales conversations 24/7 with a 7-tier resilient free AI cascade, listen to audio voice notes, and store all customer memory 100% privately on your PC with zero per-message charges.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full">
                <button
                  type="button"
                  onClick={() => openSubscribeModal(DOWNLOAD_URL, "Digi WhatsApp Agent Setup (.exe 116MB)")}
                  className="w-full sm:w-auto cursor-pointer"
                >
                  <CyanButton icon={<Download size={16} />} className="w-full sm:w-auto justify-center">
                    Download Windows Setup (.exe 116MB)
                  </CyanButton>
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
                  href="https://aistudio.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-5 py-2.5 font-display text-sm font-semibold text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] transition hover:border-amber-400 hover:bg-amber-500/20 hover:text-white"
                >
                  <Key size={15} className="text-amber-400" />
                  <span>Get Free Gemini API Key</span>
                  <ExternalLink size={13} className="text-amber-400/70" />
                </a>
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

            <div className="w-full max-w-lg lg:w-auto">
              <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-black/60 shadow-[0_0_50px_rgba(37,211,102,0.25)] backdrop-blur-xl">
                <img
                  src={digiWhatsappPairingKnowledgeScreenshot}
                  alt="Digi WhatsApp Agent - Automate, Engage, Convert 24/7"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute top-3 right-3 rounded-full border border-emerald-500/40 bg-slate-950/90 px-3 py-1 font-mono text-xs font-bold text-emerald-400 shadow-lg">
                  v1.0.0 STABLE • 100% FREE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── KEY METRICS STRIP ──────────────────────────────────── */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <GlassCard className="p-5 text-center">
            <div className="font-mono text-2xl font-black text-emerald-400 md:text-3xl">£0 / mo</div>
            <div className="mt-1 text-xs text-zinc-400">Zero Meta &amp; SaaS API Fees</div>
          </GlassCard>
          <GlassCard className="p-5 text-center">
            <div className="font-mono text-2xl font-black text-cyan-400 md:text-3xl">7-Tier</div>
            <div className="mt-1 text-xs text-zinc-400">Free AI Auto-Failover Cascade</div>
          </GlassCard>
          <GlassCard className="p-5 text-center">
            <div className="font-mono text-2xl font-black text-purple-400 md:text-3xl">100% Local</div>
            <div className="mt-1 text-xs text-zinc-400">SQLite Private Database</div>
          </GlassCard>
          <GlassCard className="p-5 text-center">
            <div className="font-mono text-2xl font-black text-amber-400 md:text-3xl">8-Stage</div>
            <div className="mt-1 text-xs text-zinc-400">Sales Pipeline State Machine</div>
          </GlassCard>
        </div>

        {/* ── AEO / AI OVERVIEW SUMMARY (ENGINEERED FOR PERPLEXITY & GOOGLE AI OVERVIEWS) ── */}
        <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/25 p-6 md:p-8 backdrop-blur-xl">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400">
            <Radio size={14} className="animate-pulse" />
            <span>AI OVERVIEW • DIRECT ANSWER ENGINE SPECIFICATION</span>
          </div>
          <h2 className="mt-2 font-display text-lg font-bold text-white md:text-2xl">
            What is Digi WhatsApp Agent? (Quick Technical Summary)
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
            <strong>Digi WhatsApp Agent</strong> is a sovereign, 100% free open-source autonomous AI sales representative and conversational engine engineered by DigiFormation Ltd for Windows. It connects to your personal or business WhatsApp via direct QR code pairing using the <code>@whiskeysockets/baileys</code> WebSocket protocol, eliminating Meta Cloud API fees and Wati/Interakt subscription tolls ($1,200–$3,600/yr). It features a 7-tier zero-cost AI reasoning cascade (Google Gemini 2.5 Flash, Groq 12ms LPU, Cloudflare, Mistral, GitHub Models, SambaNova), an 8-stage sales pipeline state machine, Groq Whisper voice note transcription in Roman Urdu and English, and stores 100% of customer conversation memory locally in a zero-leakage SQLite database.
          </p>
        </div>

        {/* ── VISUAL STUDIO & REAL SCREENSHOTS GALLERY ────────────── */}
        <div className="mt-16">
          <div className="text-center">
            <EyebrowLabel>PRODUCTION WORKSTATION INTERFACE</EyebrowLabel>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-4xl">
              Engineered for Real WhatsApp Sales Operations
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)] md:text-base max-w-2xl mx-auto">
              Explore the real application views: Live multi-contact tracking, intelligent 7-tier AI engine settings, and real-time activity streams.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Screenshot 1 - QR Pairing & Knowledge Studio (Real Workstation) */}
            <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/50 p-3 shadow-xl transition-all hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={digiWhatsappPairingKnowledgeScreenshot}
                  alt="WhatsApp Mobile Pairing & Knowledge Base Studio"
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 p-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                  <h3 className="font-display text-base font-bold text-white">QR Pairing &amp; Knowledge Base Studio</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Instant mobile QR scan pairing via native Baileys protocol alongside built-in Markdown Knowledge Base Studio with customizable presets for facts and product catalogs.
                </p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/50 p-3 shadow-xl transition-all hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={digiWhatsappChatScreenshot}
                  alt="Digi WhatsApp Agent Live Chat & Pipeline Tracking"
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 p-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                  <h3 className="font-display text-base font-bold text-white">Live Chat &amp; Tracking</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Track client conversations in real time, view active deal stages ("Engaged / In Discussion"), and toggle between auto-reply and human intervention with 1 click.
                </p>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-black/50 p-3 shadow-xl transition-all hover:border-cyan-500/60 hover:shadow-[0_0_30px_rgba(47,224,200,0.2)]">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={digiWhatsappAiEngineScreenshot}
                  alt="7-Tier Resilient Free AI Reasoning Cascade"
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 p-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-cyan-400" />
                  <h3 className="font-display text-base font-bold text-white">7-Tier Free AI Engine</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Configure free keys for Google Gemini, Groq Whisper, Cloudflare, Mistral, GitHub Models, SambaNova, and Together AI with automated 0ms failover.
                </p>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-black/50 p-3 shadow-xl transition-all hover:border-purple-500/60 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={digiWhatsappLogsScreenshot}
                  alt="Live Activity Stream and WhatsApp Events"
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 p-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-purple-400" />
                  <h3 className="font-display text-base font-bold text-white">Live Activity Stream</h3>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  Inspect every inbound message, AI reasoning step, tool call, and WhatsApp socket event in real time with comprehensive status filtering.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 7-TIER AI REASONING TABLE ───────────────────────────── */}
        <div className="mt-16">
          <div className="text-center">
            <EyebrowLabel>ZERO-COST ARCHITECTURAL INNOVATION</EyebrowLabel>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
              7-Tier Resilient Free AI Reasoning Cascade
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
              Never pay monthly AI model subscription bills again. The agent orchestrates generous free tier quotas with zero downtime and automatic model failover.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs text-zinc-300">
                <thead className="border-b border-white/10 bg-white/5 text-zinc-400">
                  <tr>
                    <th className="py-3 px-4 font-bold">Provider / Model</th>
                    <th className="py-3 px-4 font-bold">Priority Tier</th>
                    <th className="py-3 px-4 font-bold">Free Quota</th>
                    <th className="py-3 px-4 font-bold">Latency SLA</th>
                    <th className="py-3 px-4 font-bold">Role &amp; Specialty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {AI_PROVIDERS.map((provider) => (
                    <tr key={provider.name} className="hover:bg-white/5 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full" style={{ backgroundColor: provider.color }} />
                        {provider.name}
                      </td>
                      <td className="py-3.5 px-4 text-emerald-400">{provider.tier}</td>
                      <td className="py-3.5 px-4 text-cyan-300">{provider.quota}</td>
                      <td className="py-3.5 px-4 text-amber-300">{provider.latency}</td>
                      <td className="py-3.5 px-4 text-zinc-400 font-sans text-xs">{provider.desc}</td>
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
            <EyebrowLabel>AUTONOMOUS SALES CAPABILITIES</EyebrowLabel>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
              Engineered to Close Deals &amp; Save Money
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
            title="Commercial WhatsApp SaaS vs. Digi WhatsApp Agent"
            subtitle="Why businesses waste thousands of dollars annually on conversation markups when open-source provides superior sovereignty."
            competitorName="Wati / Interakt / ManyChat"
            competitorCost="$49 – $299 / month + Meta conversation fees"
            openSourceCost="$0 / Forever (Source-Available)"
            savings="$1,200 – $3,600+ Every Year"
            rows={[
              {
                feature: "Monthly Software Subscription",
                competitor: "$49 – $299 / month recurring",
                openSource: "$0 / Lifetime Free",
                competitorWins: false,
              },
              {
                feature: "Per-Conversation Meta Markups",
                competitor: "Charges 3¢ - 8¢ per customer chat",
                openSource: "Zero per-message fees (Web pairing)",
                competitorWins: false,
              },
              {
                feature: "AI Reasoning & Model Fallback",
                competitor: "Extra credit add-ons or locked model",
                openSource: "7-Tier Free AI Cascade + Groq Whisper",
                competitorWins: false,
              },
              {
                feature: "Customer Data Privacy",
                competitor: "Hosted on third-party cloud SaaS",
                openSource: "100% Local SQLite on your PC",
                competitorWins: false,
              },
              {
                feature: "Voice Note Processing",
                competitor: "Unsupported or high credit cost",
                openSource: "Built-in Whisper STT transcription",
                competitorWins: false,
              },
              {
                feature: "Sales Pipeline State Machine",
                competitor: "Basic rigid bot keyword tree",
                openSource: "Deterministic 8-stage FSM + NBA logic",
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

        {/* ── TECHNICAL BLUEPRINTS & IN-DEPTH ARTICLES (SEO / GEO CLUSTER) ── */}
        <div className="mt-16">
          <div className="text-center">
            <EyebrowLabel>TECHNICAL ARCHITECTURE &amp; PLAYBOOKS</EyebrowLabel>
            <h2 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
              Deep-Dive WhatsApp AI Engineering Blueprints
            </h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
              Read our in-depth technical breakdowns on replacing $3,600/yr SaaS subscriptions, cascading free AI models, and mastering Roman Urdu sales automation.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              to="/blog/zero-cost-whatsapp-ai-sales-agent-complete-blueprint-2026"
              className="group flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 transition-all hover:border-emerald-400 hover:bg-emerald-950/40 hover:shadow-[0_0_30px_rgba(37,211,102,0.25)] md:col-span-2"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-bold text-emerald-400">
                    🔥 Cornerstone 3,000+ Word Guide
                  </span>
                  <span className="font-mono text-xs text-zinc-400">28 min read</span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  The Zero-Cost WhatsApp AI Sales Agent Blueprint (2026): Replace $3,600/Yr Wati &amp; Meta API Taxes
                </h3>
                <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                  The definitive architectural guide to deploying an autonomous 24/7 WhatsApp AI sales representative: Baileys WebSockets, 7-tier AI cascading, local SQLite state tracking, and zero-hallucination discount defense.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold text-emerald-400">
                <span>Read Full Blueprint</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/blog/the-great-whatsapp-saas-extortion-why-businesses-are-quitting-cloud-bots"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(47,224,200,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-xs text-cyan-300">
                    Industry Expose
                  </span>
                  <span className="font-mono text-xs text-zinc-400">11 min read</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  The Great WhatsApp SaaS Extortion &amp; Cloud Bot Exodus
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  How SaaS platforms lock businesses into predatory per-conversation pricing, hidden markup tolls, and vendor lock-in.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold text-cyan-400">
                <span>Read Article</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/blog/7-tier-free-ai-cascade-unlimited-whatsapp-intelligence-zero-cost"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-purple-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-0.5 font-mono text-xs text-purple-300">
                    AI Architecture
                  </span>
                  <span className="font-mono text-xs text-zinc-400">12 min read</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  The 7-Tier Free AI Cascade: 0ms Downtime &amp; $0 Token Bills
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Orchestrating Gemini 2.5 Flash, Groq 12ms LPU, Cloudflare, and Mistral with automated 0ms customer failover.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold text-purple-400">
                <span>Read Architecture</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/blog/how-to-automate-whatsapp-sales-in-roman-urdu-urdu-script-b2b-playbook"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-amber-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-amber-400/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-xs text-amber-300">
                    Agency Playbook
                  </span>
                  <span className="font-mono text-xs text-zinc-400">10 min read</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  Closing Deals in Roman Urdu &amp; English: B2B Playbook
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Why Silicon Valley bots fail in South Asia, and how to master authentic conversational rapport and discount defense.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold text-amber-400">
                <span>Read Playbook</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              to="/blog/building-sovereign-crm-whatsapp-stack-why-sqlite-beats-cloud-saas"
              className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-blue-400 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-2.5 py-0.5 font-mono text-xs text-blue-300">
                    Data Sovereignty
                  </span>
                  <span className="font-mono text-xs text-zinc-400">12 min read</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  Sovereignty Over Subscriptions: Why SQLite Beats Cloud CRMs
                </h3>
                <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
                  Microsecond queries, zero data leakage, and why local SQLite state tracking guarantees higher conversion rates.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold text-blue-400">
                <span>Read Guide</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>

        {/* ── BRIDGE TO DIGI BIZ OS ───────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceDigiBizBridge
            headline="Upgrade from Standalone WhatsApp Bot to Complete DIGI BIZ OS"
            description="While Digi WhatsApp Agent manages your customer messaging, DIGI BIZ OS runs your entire business ecosystem: native CRM, automated PDF invoicing, JARVIS voice desktop control, AI creative studio, and social media scheduling."
            highlights={[
              "Seamlessly synchronize WhatsApp leads into local CRM profiles and pipelines",
              "Generate and dispatch branded PDF invoices directly inside customer chats",
              "JARVIS voice control (<200ms latency) to check sales analytics hands-free",
              "One-time payment of PKR 14,900 (£29) with zero monthly subscriptions forever",
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
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-slate-900/90 to-slate-950/95 p-8 text-center md:p-14">
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400">
              <Sparkles size={14} />
              <span>100% FREE SOVEREIGN DESKTOP SOFTWARE</span>
            </div>
            <h2 className="mt-5 font-display text-2xl font-extrabold text-white md:text-4xl">
              Ready to Automate WhatsApp Sales with 0 SaaS Fees?
            </h2>
            <p className="mt-3 text-sm text-[var(--text-secondary)] md:text-base">
              Download the standalone Windows installer (.exe) or clone the repository directly from GitHub. Pair your WhatsApp in seconds and start closing leads 24/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-[850px] mx-auto">
              <button
                type="button"
                onClick={() => openSubscribeModal(DOWNLOAD_URL, "Digi WhatsApp Agent Setup (.exe 116MB)")}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-emerald-400 bg-emerald-500 px-6 py-3.5 sm:py-4 font-mono text-[14px] sm:text-[15px] font-bold text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] cursor-pointer w-full sm:w-auto"
              >
                <Download size={18} className="shrink-0" />
                <span>Download Windows Setup (.exe 116MB)</span>
              </button>

              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400 bg-cyan-500/20 px-6 py-3.5 sm:py-4 font-mono text-[13px] sm:text-[14px] font-bold text-cyan-300 shadow-[0_0_30px_rgba(47,224,200,0.35)] transition hover:border-cyan-300 hover:bg-cyan-500/30 hover:text-white"
              >
                <Sparkles size={17} className="text-cyan-400" />
                <span>Try DIGI BIZ OS (3-Day Free Trial)</span>
                <ArrowRight size={14} className="opacity-80" />
              </Link>

              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 sm:py-4 font-mono text-[13px] font-semibold text-white transition hover:border-emerald-400 hover:bg-white/10"
              >
                <Github size={17} />
                <span>GitHub Repo</span>
                <ExternalLink size={13} className="opacity-70" />
              </a>
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
export default DigiWhatsAppAgentSubpage;
