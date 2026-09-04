import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Boxes,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Eye,
  FileCode,
  FileText,
  Globe,
  HardDrive,
  ImageIcon,
  Key,
  Layers,
  Lock,
  Megaphone,
  MessageSquare,
  Package,
  PackageCheck,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Timer,
  Users,
  Wrench,
  Zap,
  Video,
  Smile,
  Camera,
  Film,
  Mic,
  Smartphone,
  Search,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import MasterOpenSourceValueTable from "@/components/seo/MasterOpenSourceValueTable";
import OpenSourceZigZagShowcase from "@/components/seo/OpenSourceZigZagShowcase";
import ThreeDTiltCard from "@/components/ui/ThreeDTiltCard";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

import anythingllmLogo from "@/assets/anythingllm-logo.jpg";
import anythingllmScreenshot from "@/assets/anythingllm-screenshot.jpg";
import janScreenshot from "@/assets/jan-ai-screenshot.jpg";
import pocketbaseScreenshot from "@/assets/pocketbase-screenshot.png";
import tuttleScreenshot from "@/assets/tuttle-screenshot.jpg";
import upscaylScreenshot from "@/assets/upscayl-screenshot.jpg";

const TITLE = "Free Open Source Tools Hub — AI Agents, Media & Utilities | DIGI BIZ OS";
const DESC =
  "Download top curated open-source software for Windows: Open SEO Spider, Kdenlive, Shotcut, Audacity, FaceFusion, Deep-Live-Cam, OpenCut, Hermes Agent, Jan AI, AnythingLLM & PocketBase.";

interface SoftwareItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  license: string;
  color: string;
  icon: any;
  image?: string;
  badge: string;
  bullets: string[];
  features: string[];
  to: string;
  bundle: string;
}

const SOFTWARE_LIST: SoftwareItem[] = [
  {
    id: "openhands",
    name: "OpenHands Autonomous AI Engineer",
    category: "Autonomous Agent",
    tagline: "Free Open-Source Alternative to Devin ($500/mo). Full-Stack SWE-Bench verified solver.",
    license: "MIT License",
    color: "#3B82F6",
    icon: Terminal,
    badge: "Most Popular Coder",
    bundle: "Autonomous Coding & Engineering",
    bullets: [
      "Writes, tests & debugs code autonomously in Docker",
      "Fixes GitHub issues & pull requests from natural language",
      "Full Bash shell, VS Code editor & live web preview",
    ],
    features: ["SWE-Bench 53%+", "Docker Sandbox", "Zero Subscriptions"],
    to: "/open-source/openhands",
  },
  {
    id: "openclaw",
    name: "OpenClaw Autonomous AI Agent",
    category: "Autonomous Agent",
    tagline: "Free Local Alternative to Devin & Manus AI. Researches, codes, and executes on your PC.",
    license: "MIT License",
    color: "#6366F1",
    icon: Bot,
    badge: "Autonomous Operator",
    bundle: "Autonomous Coding & Engineering",
    bullets: [
      "Autonomous web browsing, research & data extraction",
      "Local command execution with human-in-the-loop safety",
      "Self-debugging runtime with automatic error recovery",
    ],
    features: ["Local Python Sandbox", "Browser Automation", "100% Private"],
    to: "/open-source/openclaw",
  },
  {
    id: "hermes-agent",
    name: "Hermes Autonomous Reasoning Agent",
    category: "Reasoning & LLM",
    tagline: "Free Alternative to ChatGPT Pro & Claude Enterprise for Windows & macOS.",
    license: "Apache 2.0",
    color: "#F59E0B",
    icon: Cpu,
    badge: "Reasoning Core",
    bundle: "Autonomous Coding & Engineering",
    bullets: [
      "Nous Hermes 3 multi-step agentic planning architecture",
      "Structured JSON function calling across local & cloud APIs",
      "Zero telemetry, 100% offline execution capability",
    ],
    features: ["Multi-Step Planning", "Function Calling", "Local & Cloud LLMs"],
    to: "/open-source/hermes-agent",
  },
  {
    id: "jan-ai",
    name: "Jan AI Desktop Studio",
    category: "Local LLM",
    tagline: "100% Offline, Private ChatGPT Alternative for Windows. Run DeepSeek & Llama 3.",
    license: "AGPL-3.0",
    color: "#2FE0C8",
    icon: Sparkles,
    image: janScreenshot,
    badge: "Local AI Suite",
    bundle: "Local Privacy & Offline AI",
    bullets: [
      "Download & run DeepSeek, Llama 3.3, Qwen & Mistral locally",
      "100% offline — zero data leaves your local PC hardware",
      "Built-in OpenAI-compatible local API server (:1337)",
    ],
    features: ["Local GPU/CPU Engine", "Offline Chat", "Zero Telemetry"],
    to: "/open-source/jan-ai",
  },
  {
    id: "anythingllm",
    name: "AnythingLLM Document & Knowledge AI",
    category: "Document AI",
    tagline: "Chat with PDFs, Word docs, CSVs, and whole websites privately on Windows.",
    license: "MIT License",
    color: "#8B7CF6",
    icon: FileText,
    image: anythingllmScreenshot,
    badge: "Enterprise RAG",
    bundle: "Business & Growth Automation",
    bullets: [
      "Built-in LanceDB vector database — no cloud vector fees",
      "Multi-document workspaces for Legal, Finance, & Tech",
      "Custom system prompts, agent skills & web scraping",
    ],
    features: ["Built-in Vector DB", "Multi-File RAG", "Zero Subscription"],
    to: "/open-source/anythingllm",
  },
  {
    id: "pocketbase",
    name: "PocketBase Full-Stack Backend",
    category: "Backend & Database",
    tagline: "Complete SQLite Database, Real-time Subscriptions & Auth in a Single 32MB File.",
    license: "MIT License",
    color: "#7DD3FC",
    icon: Database,
    image: pocketbaseScreenshot,
    badge: "Full-Stack Server",
    bundle: "Business & Growth Automation",
    bullets: [
      "Embedded SQLite database with full real-time websockets",
      "Built-in user authentication (OAuth2, Email, Passkey)",
      "Instant admin UI dashboard & automatic REST APIs",
    ],
    features: ["Single Executable", "Real-Time DB", "Built-in Admin UI"],
    to: "/open-source/pocketbase",
  },
  {
    id: "tuttle",
    name: "Tuttle Time & Productivity Tracker",
    category: "Productivity",
    tagline: "100% Private Billable Hours & Timesheet Manager for Freelancers & Teams.",
    license: "GPL-3.0",
    color: "#3DDC84",
    icon: Timer,
    image: tuttleScreenshot,
    badge: "Productivity Tool",
    bundle: "Business & Growth Automation",
    bullets: [
      "Track billable client hours, tasks, and project timesheets",
      "No employer spying, screenshots, or cloud surveillance",
      "Export timesheets instantly to CSV, Excel, and PDF",
    ],
    features: ["Zero Cloud Spying", "PDF / Excel Export", "Local SQLite DB"],
    to: "/open-source/tuttle",
  },
  {
    id: "upscayl",
    name: "Upscayl AI Image Super-Resolution",
    category: "Media & AI",
    tagline: "Free Offline AI Image Upscaler for Windows. Enhance images up to 16x resolution.",
    license: "AGPL-3.0",
    color: "#EC4899",
    icon: ImageIcon,
    image: upscaylScreenshot,
    badge: "AI Image Engine",
    bundle: "Local Privacy & Offline AI",
    bullets: [
      "Enhance low-resolution photos, graphics, & designs up to 16x",
      "GPU-accelerated local batch processing with Vulkan support",
      "Works 100% offline without uploading images to cloud servers",
    ],
    features: ["16x AI Upscaling", "Vulkan GPU Speed", "No Watermarks"],
    to: "/open-source/upscayl",
  },
  {
    id: "kdenlive",
    name: "Kdenlive Professional Video Editor",
    category: "Video & Editing",
    tagline: "Free Open-Source Premiere & CapCut Alternative. Multi-track 4K, motion tracking & Whisper AI subtitles.",
    license: "GPL-3.0",
    color: "#3B82F6",
    icon: Video,
    badge: "Open-Source Premiere Alt",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "Built-in OpenAI Whisper speech-to-text auto-captions in 1-click",
      "Multi-track 4K timeline with chroma key & motion tracking",
      "Hardware GPU accelerated 60FPS exports with zero watermarks",
    ],
    features: ["Whisper AI Subtitles", "4K Multi-Track Timeline", "Zero Watermark"],
    to: "/open-source/kdenlive",
  },
  {
    id: "facefusion",
    name: "FaceFusion Next-Gen AI Face Swapper",
    category: "AI Media",
    tagline: "Industry-standard open-source facial manipulation. 4K video face swap, GFPGAN enhancement & lip-sync.",
    license: "MIT License",
    color: "#EC4899",
    icon: Smile,
    badge: "AI Face Swap Engine",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "High-fidelity face swapping for 4K video footage and portrait photos",
      "Integrated GFPGAN and CodeFormer AI facial restoration neural nets",
      "100% offline local processing with NVIDIA CUDA GPU acceleration",
    ],
    features: ["GFPGAN 4K Enhancer", "Real-Time Lip-Sync", "100% Local GPU"],
    to: "/open-source/facefusion",
  },
  {
    id: "deep-live-cam",
    name: "Deep-Live-Cam Real-Time Webcam Swapper",
    category: "AI Media",
    tagline: "Live real-time webcam face swapping for OBS, Zoom, Meet & Discord with a single portrait photo.",
    license: "GPL-3.0",
    color: "#8B5CF6",
    icon: Camera,
    badge: "Live Webcam Swap",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "Instant 1-photo setup for 3D live facial mesh and tracking",
      "Real-time OBS virtual camera integration for streaming & calls",
      "Ultra-low latency 30+ FPS tracking on consumer PC hardware",
    ],
    features: ["OBS Virtual Cam", "1-Photo Setup", "30+ FPS Real-Time"],
    to: "/open-source/deep-live-cam",
  },
  {
    id: "shotcut",
    name: "Shotcut 4K Video Editor Workhorse",
    category: "Video & Editing",
    tagline: "Lightweight, stable 4K video editor. Universal FFmpeg formats, 3-way color grading & zero ads.",
    license: "GPL-3.0",
    color: "#10B981",
    icon: Film,
    badge: "Stable 4K Workhorse",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "Native support for hundreds of audio and video formats via FFmpeg",
      "3-way color grading wheels, audio peak visualizers & LUT filters",
      "Lightweight ~85MB installer with zero background bloatware or ads",
    ],
    features: ["Universal Codecs", "Color Wheels", "Zero Watermark"],
    to: "/open-source/shotcut",
  },
  {
    id: "audacity",
    name: "Audacity Multi-Track Audio Studio",
    category: "Audio & Podcast",
    tagline: "The world's #1 multi-track audio workstation. 1-click noise reduction, VST3 plugins & studio mastering.",
    license: "GPL-3.0",
    color: "#3B82F6",
    icon: Mic,
    badge: "Multi-Track DAW",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "Multi-track live voice recording, editing, and podcast production",
      "1-click AI spectral noise reduction for fan hums and room hiss",
      "Real-time VST3 audio plugin support and lossless 32-bit audio export",
    ],
    features: ["1-Click Noise Removal", "Multi-Track Recording", "VST3 Support"],
    to: "/open-source/audacity",
  },
  {
    id: "opencut",
    name: "OpenCut Social Video Studio",
    category: "Video & Editing",
    tagline: "Modern CapCut alternative for creators. 9:16 vertical presets, magnetic snapping & fast cuts.",
    license: "MIT License",
    color: "#F59E0B",
    icon: Smartphone,
    badge: "Shorts & Reels Editor",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "Native 9:16 vertical presets optimized for TikTok, Reels & Shorts",
      "Magnetic snapping timeline for fast trimming and split edits",
      "Animated text overlays, sticker presets, and zero watermark exports",
    ],
    features: ["9:16 Vertical Video", "Magnetic Timeline", "Zero Watermark"],
    to: "/open-source/opencut",
  },
  {
    id: "seo-spider",
    name: "Open SEO Spider & Technical Audit Suite",
    category: "SEO & Web Tools",
    tagline: "Offline technical SEO website crawler. Validate JSON-LD Schema, Google Sitelinks & 404 links.",
    license: "GPL / MIT",
    color: "#2FE0C8",
    icon: Search,
    badge: "Technical SEO Suite",
    bundle: "Business, Backends & Productivity",
    bullets: [
      "Deep technical website crawler for 404 broken links, redirects & canonicals",
      "Schema.org JSON-LD validator for Google Rich Results & Sitelinks structure",
      "Core Web Vitals & PageSpeed audit engine with unlimited local crawls",
    ],
    features: ["Schema.org Validator", "Google Sitelinks", "Unlimited Crawls"],
    to: "/open-source/seo-spider",
  },
];

const BUNDLE_GROUPS = [
  {
    title: "Autonomous Coding & Engineering Suite",
    subtitle:
      "Deploy self-directed AI software engineers and terminal reasoning agents on your desktop.",
    color: "#3B82F6",
    icon: Code2,
    ids: ["openhands", "openclaw", "hermes-agent"],
  },
  {
    title: "Creative, Video & Media Suite",
    subtitle:
      "4K video editing, AI face swapping, live webcam manipulation, multi-track audio, and vertical reels.",
    color: "#EC4899",
    icon: Video,
    ids: ["kdenlive", "facefusion", "deep-live-cam", "shotcut", "audacity", "opencut"],
  },
  {
    title: "Business, Backends & Productivity",
    subtitle:
      "Deploy self-hosted SQLite databases, real-time auth APIs, private document search, and timesheets.",
    color: "#10B981",
    icon: Megaphone,
    ids: ["pocketbase", "anythingllm", "tuttle", "seo-spider"],
  },
  {
    title: "Local Privacy & Offline AI Powerhouse",
    subtitle:
      "Run state-of-the-art LLMs, knowledge base document RAG, and AI upscaling without cloud fees.",
    color: "#8B7CF6",
    icon: Lock,
    ids: ["jan-ai", "anythingllm", "upscayl"],
  },
];

const TABS = ["All Softwares", "Autonomous Agents", "Video & Media", "Local AI & Chat", "Business & Sales", "Dev & Tools"];

export const Route = createFileRoute("/open-source/")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source",
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
            ]),
          ),
        },
      ],
    };
  },
  component: OpenSourcePage,
});

function OpenSourcePage() {
  const [activeTab, setActiveTab] = useState("All Softwares");

  const filtered = SOFTWARE_LIST.filter((item) => {
    if (activeTab === "All Softwares") return true;
    if (activeTab === "Autonomous Agents") return item.category === "Autonomous Agent";
    if (activeTab === "Video & Media")
      return (
        item.category === "Video & Editing" ||
        item.category === "AI Media" ||
        item.category === "Audio & Podcast" ||
        item.category === "Media & AI"
      );
    if (activeTab === "Local AI & Chat")
      return (
        item.category === "Local LLM" ||
        item.category === "Document AI" ||
        item.category === "Reasoning & LLM"
      );
    if (activeTab === "Business & Sales")
      return item.category === "Sales & Support" || item.category === "Productivity";
    if (activeTab === "Dev & Tools")
      return (
        item.category === "Backend & Database" ||
        item.category === "Media & AI" ||
        item.category === "Autonomous Agent"
      );
    return true;
  });

  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      {/* ── HERO SECTION ─────────────────────────────────── */}
      <SectionWrapper className="relative overflow-hidden pb-12 pt-8 md:pb-16 md:pt-12">
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
          ]}
        />

        <div className="mx-auto max-w-[960px] text-center">
          <div className="flex items-center justify-center gap-2">
            <ActivePulse size={7} />
            <EyebrowLabel
              text="Open Source Ecosystem • 100% Free • Zero Vendor Lock-in"
              color="var(--cyan)"
            />
          </div>

          <h1 className="reveal-item delay-1 mt-5 font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] sm:text-[44px] md:text-[56px] lg:text-[62px]">
            Open Source AI Software Bundles,{" "}
            <GradientText from="#2FE0C8" to="#38BDF8">
              Fully Under Your Command.
            </GradientText>
          </h1>

          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[760px] font-body text-[16px] leading-[1.8] text-[var(--text-secondary)] md:text-[18px]">
            Production-grade autonomous AI agents, local LLM runners, full-stack backends, and offline media suites.
            Install, run on your machine, connect to DIGI BIZ OS, or own the entire source code.
          </p>

          {/* Quick Metrics Badges */}
          <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <MonoBadge>⚡ 15+ Curated Open-Source Suites</MonoBadge>
            <MonoBadge>💰 $14,800+/yr Saved vs Cloud SaaS</MonoBadge>
            <MonoBadge>🔒 100% Offline & Private</MonoBadge>
            <MonoBadge>📜 Permissive MIT & Apache 2.0</MonoBadge>
            <MonoBadge>💻 One-Click Windows & Mac Setup</MonoBadge>
          </div>
        </div>
      </SectionWrapper>

      {/* ── CURATED BUNDLE PACKS SHOWCASE ─────────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)] py-12 md:py-16">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-code text-[11px] uppercase tracking-[0.2em] text-[var(--cyan)]">
                Curated Stacks
              </span>
              <h2 className="mt-2 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
                Complete Software Bundles
              </h2>
            </div>
            <p className="mt-2 max-w-[480px] font-body text-[14px] leading-[1.6] text-[var(--text-secondary)] md:mt-0">
              Pre-configured software clusters tailored for Developers, Sales Automation, and Privacy-Focused AI.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {BUNDLE_GROUPS.map((b) => {
              const Icon = b.icon;
              const bundleSoftwares = SOFTWARE_LIST.filter((s) => b.ids.includes(s.id));
              return (
                <GlassCard
                  key={b.title}
                  glowColor={b.color}
                  className="flex h-full flex-col justify-between p-6 transition-all duration-300 hover:border-white/20"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-xl border"
                        style={{
                          background: `${b.color}15`,
                          borderColor: `${b.color}35`,
                          boxShadow: `0 0 20px ${b.color}25`,
                        }}
                      >
                        <Icon size={24} color={b.color} />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                        {bundleSoftwares.length} Softwares
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-[19px] font-bold text-[var(--text-primary)]">
                      {b.title}
                    </h3>
                    <p className="mt-2 font-body text-[13px] leading-[1.7] text-[var(--text-secondary)]">
                      {b.subtitle}
                    </p>

                    {/* Included soft list */}
                    <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                      {bundleSoftwares.map((item) => (
                        <Link
                          key={item.id}
                          to={item.to}
                          className="group/item flex items-center justify-between rounded-lg border border-transparent bg-white/[0.03] p-2.5 transition hover:border-white/10 hover:bg-white/[0.06]"
                        >
                          <div className="flex items-center gap-2.5">
                            <item.icon size={16} color={item.color} />
                            <span className="font-display text-[13px] font-semibold text-[var(--text-primary)] group-hover/item:text-[var(--cyan)]">
                              {item.name.split(" — ")[0].split(" (")[0]}
                            </span>
                          </div>
                          <ArrowRight
                            size={14}
                            className="text-[var(--text-tertiary)] transition-transform group-hover/item:translate-x-1 group-hover/item:text-[var(--cyan)]"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cyan)]">
                      Included in DIGI BIZ OS Workspace
                    </span>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ── ALL SOFTWARE DIRECTORY (FILTERABLE GRID) ───────── */}
      <SectionWrapper className="py-12 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <div className="text-center">
            <EyebrowLabel text="Directory" color="var(--purple)" />
            <h2 className="mt-3 font-display text-[28px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[40px]">
              Explore All Open Source Applications
            </h2>
            <p className="mx-auto mt-3 max-w-[620px] font-body text-[15px] text-[var(--text-secondary)]">
              Click any application below for full feature specifications, setup walkthroughs, and direct source downloads.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full border px-4 py-1.5 font-display text-[12.5px] font-medium transition-all ${
                    activeTab === tab
                      ? "border-[var(--cyan)] bg-[var(--cyan)]/15 text-[var(--cyan)] shadow-[0_0_16px_rgba(47,224,200,0.25)]"
                      : "border-white/10 bg-white/[0.03] text-[var(--text-secondary)] hover:border-white/20 hover:text-[var(--text-primary)]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* High-Level 3D Software Release Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.id} to={s.to} className="group block h-full">
                  <ThreeDTiltCard
                    glowColor={s.color}
                    className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-[#060A12]/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 group-hover:border-white/30"
                  >
                    {/* Top Status & Release Chip Bar */}
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: `${s.color}15`,
                            borderColor: `${s.color}50`,
                            boxShadow: `0 0 24px ${s.color}30`,
                          }}
                        >
                          <Icon size={24} color={s.color} />
                        </div>

                        <div className="flex flex-col items-end gap-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ backgroundColor: s.color }} />
                            <span
                              className="rounded-full border px-2.5 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em]"
                              style={{
                                color: s.color,
                                borderColor: `${s.color}50`,
                                background: `${s.color}15`,
                              }}
                            >
                              {s.badge}
                            </span>
                          </div>
                          <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[9.5px] text-zinc-400 border border-white/5">
                            {s.license} • 100% Free
                          </span>
                        </div>
                      </div>

                      {/* Name & Tagline */}
                      <h3 className="mt-5 font-display text-[18px] font-bold leading-snug text-white transition group-hover:text-[var(--cyan)]">
                        {s.name}
                      </h3>
                      <p className="mt-2 font-body text-[13.5px] leading-[1.65] text-zinc-400">
                        {s.tagline}
                      </p>

                      {/* Visual Preview Screenshot (if present) */}
                      {s.image && (
                        <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#03060C] aspect-[16/9] relative group-hover:border-white/20 transition">
                          <img
                            src={s.image}
                            alt={`${s.name} screenshot preview`}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/90 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2.5 flex items-center gap-1.5 font-mono text-[10px] text-zinc-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Verified Standalone App</span>
                          </div>
                        </div>
                      )}

                      {/* Feature Checklist */}
                      <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                        {s.bullets.map((b, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 font-body text-[12.5px] leading-[1.6] text-zinc-300"
                          >
                            <CheckCircle2
                              size={14}
                              className="mt-0.5 shrink-0"
                              style={{ color: s.color }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA Row with 1-Click Launch styling */}
                    <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {s.features.slice(0, 2).map((f) => (
                          <span
                            key={f}
                            className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                          >
                            {f}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] font-bold text-cyan-300 transition-all group-hover:bg-cyan-500/20 group-hover:border-cyan-400 group-hover:shadow-[0_0_12px_rgba(47,224,200,0.3)]">
                        <span>Launch Hub</span>
                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </ThreeDTiltCard>
                </Link>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ── MASTER VALUE & SAVINGS COMPARISON TABLE ───────────── */}
      <SectionWrapper className="py-14 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <MasterOpenSourceValueTable />
        </div>
      </SectionWrapper>

      {/* ── SOURCE CODE & COMMERCIAL LICENCE ───────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)] py-14 md:py-20">
        <div className="mx-auto grid max-w-[1140px] items-center gap-10 lg:grid-cols-[55%_45%]">
          <div>
            <div className="flex items-center gap-2">
              <Key size={16} color="var(--purple)" />
              <EyebrowLabel text="Source Code Commercial Licence" color="var(--purple)" />
            </div>

            <h2 className="mt-4 font-display text-[28px] font-extrabold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
              Own the Full Source Code.{" "}
              <GradientText from="#8B7CF6" to="#2FE0C8">
                Adapt, Extend & Automate.
              </GradientText>
            </h2>

            <p className="mt-4 font-body text-[15.5px] leading-[1.85] text-[var(--text-secondary)]">
              The Source Code Licence grants your organization full ownership of the entire DIGI BIZ OS
              desktop codebase and multi-agent automation orchestration core. Audit every line, add custom
              skills, integrate private enterprise models, or tailor complete workflows for your operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/checkout" search={{ plan: "source_code" }}>
                <CyanButton size="lg" icon={<Zap size={16} />}>
                  Buy Full Source Code — £199
                </CyanButton>
              </Link>
              <Link to="/pricing">
                <GhostButton size="lg" tone="139,124,246">
                  Compare All Licences
                </GhostButton>
              </Link>
            </div>
          </div>

          <GlassCard glowColor="var(--purple)" className="p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cyan)]">
                  Developer & Enterprise Licence
                </span>
                <h3 className="mt-1 font-display text-[22px] font-bold text-[var(--text-primary)]">
                  £199 <span className="font-body text-[13px] font-normal text-[var(--text-tertiary)]">/ one-time lifetime</span>
                </h3>
              </div>
              <ShieldCheck size={32} color="#8B7CF6" />
            </div>

            <ul className="mt-5 space-y-3.5">
              {[
                "100% complete TypeScript, React, and Python backend orchestrator source code",
                "Full developer access to customize UI screens, models and workflow engines",
                "Deploy across your organization or create bespoke client solutions with zero royalties",
                "12 months of core updates and security patches included",
                "Direct developer documentation and custom skill creation guides",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-body text-[13.5px] leading-[1.65] text-[var(--text-secondary)]"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--cyan)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* ── HOW IT INTEGRATES WITH DIGI BIZ OS ───────────────── */}
      <SectionWrapper className="py-14 md:py-20">
        <div className="mx-auto max-w-[1140px]">
          <div className="text-center">
            <EyebrowLabel text="Integration Power" color="var(--cyan)" />
            <h2 className="mt-3 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
              How DIGI BIZ OS Connects To Open Source
            </h2>
            <p className="mx-auto mt-3 max-w-[620px] font-body text-[15px] text-[var(--text-secondary)]">
              Your voice-driven desktop OS speaks directly to your locally hosted open-source services.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Terminal,
                title: "Voice-to-CLI",
                desc: "Command your local terminal and OpenHands/OpenClaw agents directly using natural voice instructions.",
                color: "#3B82F6",
              },
              {
                icon: Database,
                title: "Local DB Storage",
                desc: "All agent memories, logs, and workflow results are stored in your own local PocketBase / SQLite database.",
                color: "#7DD3FC",
              },
              {
                icon: HardDrive,
                title: "Private Vector Search",
                desc: "AnythingLLM LanceDB integration allows agents to search across gigs of internal documents in milliseconds.",
                color: "#8B7CF6",
              },
              {
                icon: Sparkles,
                title: "Offline AI & Upscaling",
                desc: "Run 100% private local LLMs and AI image upscaling natively on your Windows PC hardware with Jan AI and Upscayl.",
                color: "#EC4899",
              },
            ].map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <GlassCard key={i} glowColor={item.color} className="p-5">
                  <ItemIcon size={22} color={item.color} />
                  <h3 className="mt-3 font-display text-[16px] font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-[13px] leading-[1.65] text-[var(--text-secondary)]">
                    {item.desc}
                  </p>
                </GlassCard>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-[15px] text-[var(--text-secondary)]">
              Need custom open-source integrations or a tailored enterprise deployment?{" "}
              <Link to="/contact" className="font-semibold text-[var(--cyan)] hover:underline">
                Contact our engineering team →
              </Link>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

