
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  X,
  Sparkles,
  CheckCircle2,
  Monitor,
  Zap,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import EyebrowLabel from "@/components/EyebrowLabel";
import ThreeDTiltCard from "@/components/ui/ThreeDTiltCard";

// Assets
import osCrmDash from "@/assets/os-digi-crm-dashboard.png";
import osCrmAccounts from "@/assets/os-digi-crm-accounts.png";
import osCrmWa from "@/assets/os-digi-crm-whatsapp.png";
import osCrmIntel from "@/assets/os-digi-crm-intelligence.png";

import osStudioVideo from "@/assets/os-digi-studio-video-editor.png";
import osStudioVoice from "@/assets/os-digi-studio-voice.png";
import osStudioAvatar from "@/assets/os-digi-studio-avatar.png";
import osStudioImage from "@/assets/os-digi-studio-image.png";
import osStudioTranscript from "@/assets/os-digi-studio-transcript.png";

import osMkt from "@/assets/os-digi-marketing.png";
import osWa from "@/assets/os-digi-whatsapp.png";
import osFlow from "@/assets/os-digi-flow.png";
import osCode from "@/assets/os-digi-code.png";
import osAiChat from "@/assets/os-digi-ai-chat.png";
import osAiImage from "@/assets/os-digi-ai-image.png";
import osLiveTrackingModal from "@/assets/os-live-tracking-modal.png";

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  src: string;
  summary: string;
  highlights: string[];
}

const MODULE_GALLERIES: Record<string, GalleryItem[]> = {
  // CRM
  crm: [
    {
      id: "crm-dash",
      title: "Executive Pipeline & Real-Time Orders Command",
      subtitle: "Live financial pulse, lead stages, and revenue metrics in 1 dashboard",
      tag: "Operations Command",
      src: osCrmDash,
      summary:
        "The core nerve center of your enterprise. Tracks total order flow, overdue invoice stages, live customer acquisition funnels, and daily automated AI executive briefings with zero latency.",
      highlights: [
        "Instant 1-second view of gross profit, pending receipts, and active delivery pipelines",
        "Autonomous stage tracking with automated follow-ups for stalled deals",
        "Direct connection with local database with 100% offline data encryption",
      ],
    },
    {
      id: "crm-accounts",
      title: "Offline Financial Ledger, Tax P&L & Balance Sheet",
      subtitle: "Full double-entry bookkeeping without cloud accounting software",
      tag: "Financial Engine",
      src: osCrmAccounts,
      summary:
        "Run multi-currency balance sheets, automated VAT/tax calculations, and 6-month income vs. expenses analytics locally. No need to pay monthly fees for cloud accounting suites.",
      highlights: [
        "Double-entry bookkeeping with real-time profit margins and cash reserves",
        "Instant PDF/CSV export for accountant submissions and audit compliance",
        "Tracks vendor bills, customer receipts, and expense categorization automatically",
      ],
    },
    {
      id: "crm-whatsapp",
      title: "24/7 Autonomous WhatsApp AI Sales Agent",
      subtitle: "Instant QR pairing for autonomous support, catalog sharing & order intake",
      tag: "Live Conversational AI",
      src: osCrmWa,
      summary:
        "Turn your smartphone into an always-on sales assistant. Pairs in seconds via QR, transcribes voice notes, quotes prices from your knowledge base, and writes orders directly into the CRM.",
      highlights: [
        "Pair personal or WhatsApp Business numbers with 0 Meta API approval delay",
        "Automatic voice note transcription and contextual audio query resolution",
        "Zero per-message cloud fees or third-party middleman markup",
      ],
    },
    {
      id: "crm-intel",
      title: "E-Commerce Supplier & B2B Lead Hunting Intelligence",
      subtitle: "20-stage deep market analysis across major global marketplaces",
      tag: "Lead & Product Hunter",
      src: osCrmIntel,
      summary:
        "Hunt high-margin winning products across Amazon, eBay, Shopify, TikTok, and Walmart, plus discover verified B2B corporate decision-makers with direct contact enrichment.",
      highlights: [
        "Automated multi-platform profit margin and supplier price comparison",
        "Extracts company registration data, verified emails, and decision-maker roles",
        "Feeds discovered leads directly into the CRM pipeline with 1 click",
      ],
    },
  ],

  // STUDIO & MEDIA
  studio: [
    {
      id: "studio-video",
      title: "Offline Timeline Video Editor (CapCut Pro Alternative)",
      subtitle: "Hardware-accelerated cutting, 9:16 vertical crop, captions & slow-mo",
      tag: "Video Production",
      src: osStudioVideo,
      summary:
        "Complete multi-track video editor running natively on your GPU/CPU. Trim, crop, resize for vertical Reels/Shorts/TikTok, adjust speed, add text overlays, mix background music, and transcode formats without subscriptions or watermarks.",
      highlights: [
        "Interactive timeline scrubber with millisecond precision cut points",
        "Instant 9:16, 1:1, 4:5, and 16:9 aspect ratio auto-framing",
        "Smooth slow-motion interpolation up to 60 FPS and format transcoding (MP4/MOV/GIF)",
      ],
    },
    {
      id: "studio-voice",
      title: "Voice Intelligence & AI Audio Denoise FX",
      subtitle: "1-click background noise reduction, dynamic volume boost & vocal removal",
      tag: "Audio Engineering",
      src: osStudioVoice,
      summary:
        "Professional audio enhancement suite: remove fan hum, traffic rumble, and AC hiss with spectral filtering; boost quiet audio 2x-4x without distortion; separate vocals from music for karaoke; and generate natural studio voices in 50+ languages.",
      highlights: [
        "FFT spectral noise removal + dynamic broadcast loudness normalization",
        "Stereo center-channel phase cancellation to isolate clean speech or backing tracks",
        "Document-to-Audiobook generator: drop PDFs or DOCX to produce multi-chapter MP3s",
      ],
    },
    {
      id: "studio-avatar",
      title: "Talking Avatar Presenter & Offline Face Swap",
      subtitle: "Transform still portraits and narration into animated talking videos",
      tag: "AI Avatar Studio",
      src: osStudioAvatar,
      summary:
        "Upload a still face portrait and an audio recording or live mic voice to generate an animated talking digital presenter video. Also includes local Face Swap to place your face onto any promo video footage.",
      highlights: [
        "Synchronized facial expressions and realistic lip movements",
        "Zero per-minute cloud rendering bills or credit limits",
        "Full commercial rights on all generated presentation videos",
      ],
    },
    {
      id: "studio-image",
      title: "Image Studio & 4K/8K AI Photo Factory",
      subtitle: "Instant AI background removal, white catalog backing, denoise & upscale",
      tag: "Visual Enhancement",
      src: osStudioImage,
      summary:
        "Automated batch image laboratory for e-commerce and marketing: remove backgrounds with one click, produce clean white product photos, sharpen edges, denoise, and upscale images up to 4x.",
      highlights: [
        "1-click transparent PNG cutout and clean white e-commerce backdrops",
        "2x and 4x neural upscaling preserving sharp edges and textures",
        "Adjustable Gaussian privacy blur for confidential documents and screenshots",
      ],
    },
    {
      id: "studio-transcript",
      title: "Transcript Intelligence & Instant Course Generator",
      subtitle: "Auto-fetches YouTube videos & 25-hour playlists into structured notes",
      tag: "Speech-to-Knowledge",
      src: osStudioTranscript,
      summary:
        "Paste any video link or upload media files. The engine auto-fetches without downloading and converts hours of speech into verbatim transcripts, structured course syllabi, executive study notes, or AI video prompts.",
      highlights: [
        "Handles single videos or entire 25+ hour playlists instantly without storage waste",
        "4 automated output modes: Transcript, Course Syllabus, Study Notes, Video Prompt",
        "Direct export to styled PDF reports, Markdown, and clean TXT",
      ],
    },
  ],

  // MARKETING
  marketing: [
    {
      id: "mkt-switchboard",
      title: "8-Platform Social Switchboard & Calendar Queue",
      subtitle: "Publish and schedule across Facebook, LinkedIn, X, Telegram, Instagram & YouTube",
      tag: "Multi-Channel Publisher",
      src: osMkt,
      summary:
        "Draft promotional announcements once and dispatch them simultaneously across Facebook Pages, LinkedIn, X (Twitter), Telegram, Instagram, YouTube, Bluesky, and Mastodon. Includes mathematical bold/italic typography that renders styled on all mobile feeds.",
      highlights: [
        "Single-click multi-network distribution with destination-specific validation",
        "Unicode bold/italic styling that survives social copy-paste without formatting loss",
        "Scheduled publishing queue, draft persistence, and historical campaign logs",
      ],
    },
    {
      id: "mkt-whatsapp",
      title: "24/7 WhatsApp AI Autonomous Sales Machine",
      subtitle: "Autonomous lead qualification, order taking, and voice note understanding",
      tag: "Conversational Commerce",
      src: osWa,
      summary:
        "Connect your WhatsApp business line directly to an autonomous AI sales assistant. It answers questions using your business knowledge base, qualifies inbound leads, and syncs confirmed orders straight into your CRM.",
      highlights: [
        "Pre-configured templates for E-Commerce, Real Estate, Clinics, and Agencies",
        "Transcribes and answers customer audio voice notes automatically",
        "Instant human takeover toggle with audible notifications for priority inquiries",
      ],
    },
  ],

  // WHATSAPP
  whatsapp: [
    {
      id: "wa-agent",
      title: "Autonomous 24/7 WhatsApp AI Sales Agent",
      subtitle: "Instant QR pairing, voice note understanding, and catalog sales",
      tag: "Autonomous Agent",
      src: osWa,
      summary:
        "Scan the QR code with your smartphone and immediately deploy an intelligent representative. It consults your products, handles customer objections, and registers orders around the clock.",
      highlights: [
        "Works with personal and WhatsApp Business accounts with 0 developer setup",
        "Understands voice notes in English, Urdu, Arabic, Spanish, and 40+ languages",
        "Integrates directly into CRM pipeline with zero per-conversation costs",
      ],
    },
    {
      id: "wa-crm",
      title: "Unified Live WhatsApp Inbox Inside CRM",
      subtitle: "Complete customer conversation history, order tagging & handoff",
      tag: "CRM Integration",
      src: osCrmWa,
      summary:
        "Monitor all active customer conversations from the desktop CRM. Tag high-value leads, trigger payment reminders, and transition from AI bot to human agent seamlessly.",
      highlights: [
        "Real-time synchronized messaging with desktop sound notifications",
        "Customer profile enrichment with total spend, order count, and delivery address",
        "Customizable blocklist to exclude friends and family from bot replies",
      ],
    },
  ],

  // WORKFLOWS & AUTOMATION
  workflows: [
    {
      id: "flow-engine",
      title: "Always-On Autonomous Business Workflows",
      subtitle: "Scheduled cron routines, invoice chasers, and stock monitors",
      tag: "Workflow Automation",
      src: osFlow,
      summary:
        "Configure visual triggers and automated multi-step actions that run 24/7 on your PC. Keep stock levels healthy, recover overdue invoices, and delegate tasks to AI subagents automatically.",
      highlights: [
        "Built-in presets for overdue invoice alerts, low stock reorders, and lead nudges",
        "Custom cron schedules with automated error recovery and retry logic",
        "100% offline local execution with zero monthly task quota throttling",
      ],
    },
    {
      id: "flow-tracking",
      title: "Real-Time Operations Center & Event Audit Stream",
      subtitle: "Granular visibility into every agent reasoning step and tool execution",
      tag: "Live APM & Telemetry",
      src: osLiveTrackingModal,
      summary:
        "No black-box mystery. Watch every autonomous step execute live with millisecond timers, inspect tool inputs/outputs, and exercise full stop-the-world control with instant kill switches.",
      highlights: [
        "Monitors 30 distinct system events with live success, warning, and error counters",
        "Interactive modal inspector revealing complete prompt and payload traces",
        "Instant emergency kill-switch to pause any background worker immediately",
      ],
    },
  ],

  // CODE & CLI
  code: [
    {
      id: "code-workspace",
      title: "AI Code Workspace & Full Repository Intelligence",
      subtitle: "Multi-file architecture mapping, terminal execution & agentic pair programming",
      tag: "Code Engineering",
      src: osCode,
      summary:
        "Complete offline-first IDE and pair programming environment. Understands entire project architectures, refactors multi-file dependency trees, and runs terminal commands with local air-gapped privacy.",
      highlights: [
        "Professional code workspace with syntax highlighting, diff viewer, and file tree",
        "Integrated terminal with automated command execution and error self-correction",
        "Zero code telemetry leakage — proprietary algorithms stay on your drive",
      ],
    },
  ],

  // AI & INTELLIGENCE
  ai: [
    {
      id: "ai-chat",
      title: "Conversational Multi-Model AI Chat & Document Reasoning",
      subtitle: "Chat with files, multi-turn reasoning, and local persona customization",
      tag: "Conversational AI",
      src: osAiChat,
      summary:
        "Interact with top cloud models or fully offline local engines. Drop PDFs, codebases, or financial reports to extract insights, draft proposals, and generate action items with complete privacy.",
      highlights: [
        "Seamless switching between 50+ free open models and premium cloud APIs",
        "Document attachments with automated text extraction and vector context",
        "Persistent local memory and customizable system personas",
      ],
    },
    {
      id: "ai-image",
      title: "Photorealistic AI Image Generation Studio",
      subtitle: "Prompt engineering, aspect ratio presets & local media vault",
      tag: "Generative Art",
      src: osAiImage,
      summary:
        "Turn descriptive concepts into high-resolution visuals. Features prompt enhancer presets, aspect ratio selectors (1:1, 16:9, 9:16), negative prompt filters, and direct saving to your local asset gallery.",
      highlights: [
        "High-fidelity image generation for ads, product concepts, and social banners",
        "Adjustable generation seeds, quality sliders, and style presets",
        "Saves directly to local disk with full commercial ownership rights",
      ],
    },
  ],
};

interface SubPageGalleryShowcaseProps {
  slug?: string;
  category?: string;
  title?: string;
  eyebrow?: string;
  accentColor?: string;
}

export default function SubPageGalleryShowcase({
  slug = "crm",
  title,
  eyebrow = "Software UI Showcase",
  accentColor = "var(--cyan)",
}: SubPageGalleryShowcaseProps) {
  // Normalize slug
  const normalizedSlug = useMemo(() => {
    const clean = slug.replace(/^\/+/, "").replace(/\/+$/, "");
    if (clean.includes("crm")) return "crm";
    if (clean.includes("studio") || clean.includes("video") || clean.includes("voice")) return "studio";
    if (clean.includes("marketing")) return "marketing";
    if (clean.includes("whatsapp")) return "whatsapp";
    if (clean.includes("workflow") || clean.includes("flow") || clean.includes("tracking")) return "workflows";
    if (clean.includes("code") || clean.includes("cli")) return "code";
    if (clean.includes("ai") || clean.includes("model")) return "ai";
    return "crm";
  }, [slug]);

  const items = useMemo(() => {
    return MODULE_GALLERIES[normalizedSlug] || MODULE_GALLERIES.crm;
  }, [normalizedSlug]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const activeItem = items[activeIndex] || items[0];

  return (
    <div className="mt-20">
      {/* Section Header */}
      <div className="text-center">
        <EyebrowLabel text={eyebrow} color={accentColor} icon={Monitor} />
        <h2 className="mt-3 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[38px]">
          {title || "Live Screenshots & Deep Feature Walkthrough"}
        </h2>
        <p className="mx-auto mt-3 max-w-[720px] font-body text-[14.5px] leading-relaxed text-[var(--text-secondary)]">
          Explore actual screenshots of the running software. Every interface below is built natively
          into DIGI BIZ OS with zero cloud dependency and zero monthly subscription bills.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="mt-8 flex items-center justify-center gap-2 overflow-x-auto pb-2">
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`group flex items-center gap-2 rounded-xl px-4 py-2.5 text-[12.5px] font-medium transition-all whitespace-nowrap ${
                isActive
                  ? "bg-white/10 text-white shadow-lg border border-white/20"
                  : "bg-white/[0.02] text-[var(--text-muted)] hover:bg-white/[0.05] hover:text-[var(--text-secondary)] border border-transparent"
              }`}
            >
              <span
                className="h-2 w-2 rounded-full transition-all"
                style={{
                  background: isActive ? accentColor : "rgba(255,255,255,0.2)",
                  boxShadow: isActive ? `0 0 8px ${accentColor}` : "none",
                }}
              />
              <span>{item.tag}</span>
            </button>
          );
        })}
      </div>

      {/* Main Showcase Stage */}
      <div className="mt-6">
        <GlassCard className="p-4 md:p-6 border-white/10 shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div
            className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full blur-[140px] opacity-20"
            style={{ background: accentColor }}
          />
          <div
            className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full blur-[140px] opacity-15"
            style={{ background: "var(--cyan)" }}
          />

          {/* Desktop Window Frame */}
          <ThreeDTiltCard
            maxTilt={3}
            glowColor={`${accentColor}35`}
            className="rounded-xl border border-white/10 bg-black/60 overflow-hidden shadow-2xl"
          >
            {/* Window Header Bar */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56]/80" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/80" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F]/80" />
                <span className="ml-3 font-mono text-[11px] text-[var(--text-muted)] hidden sm:inline-block">
                  DIGI BIZ OS • {activeItem.tag}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-emerald-400 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  60 FPS Native Window
                </span>
                <button
                  onClick={() => setLightboxItem(activeItem)}
                  className="p-1 rounded-md text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                  title="Fullscreen zoom"
                >
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>

            {/* Screenshot Container with Click to Zoom */}
            <div
              onClick={() => setLightboxItem(activeItem)}
              className="relative cursor-pointer group bg-[#0A0D12] overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem.id}
                  src={activeItem.src}
                  alt={activeItem.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="w-full object-contain max-h-[520px] md:max-h-[620px] mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </AnimatePresence>

              {/* Hover Zoom Overlay Hint */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="flex items-center gap-2 rounded-full bg-black/80 backdrop-blur-md px-4 py-2 text-[12px] font-semibold text-white border border-white/20 shadow-2xl">
                  <Maximize2 size={14} className="text-[#2FE0C8]" />
                  <span>Click to Expand Fullscreen</span>
                </div>
              </div>
            </div>
          </ThreeDTiltCard>

          {/* Deep Feature Analysis Area */}
          <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="inline-flex rounded-md bg-[var(--cyan)]/15 px-2.5 py-1 font-mono text-[11px] font-bold text-[var(--cyan)] border border-[var(--cyan)]/30">
                  {activeItem.tag}
                </span>
                <h3 className="mt-2 font-display text-[20px] md:text-[24px] font-bold text-[var(--text-primary)]">
                  {activeItem.title}
                </h3>
                <p className="font-body text-[13.5px] text-[var(--text-muted)]">
                  {activeItem.subtitle}
                </p>
              </div>
              <button
                onClick={() => setLightboxItem(activeItem)}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-1.5 text-[12px] font-semibold text-slate-200 hover:bg-white/5 transition"
              >
                <Maximize2 size={13} />
                <span>Zoom In</span>
              </button>
            </div>

            <p className="mt-4 font-body text-[14.5px] leading-relaxed text-[var(--text-secondary)]">
              {activeItem.summary}
            </p>

            {/* Highlights List */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
              {activeItem.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-white/5 bg-white/[0.015] p-3 flex items-start gap-2.5"
                >
                  <CheckCircle2 size={16} className="text-[var(--cyan)] shrink-0 mt-0.5" />
                  <span className="font-body text-[12.5px] leading-snug text-[var(--text-secondary)]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnail Strip */}
          {items.length > 1 && (
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  All Screens in this Module ({items.length})
                </span>
                <span className="font-mono text-[11px] text-[var(--text-muted)]">
                  Click thumbnail to switch
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {items.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`group relative rounded-lg border p-1 text-left transition-all overflow-hidden ${
                        isActive
                          ? "border-[var(--cyan)] ring-1 ring-[var(--cyan)] bg-white/5"
                          : "border-white/10 bg-black/40 hover:border-white/25 hover:bg-white/[0.02]"
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-16 w-full object-cover rounded opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                      <div className="mt-1.5 px-1 truncate font-mono text-[10.5px] font-semibold text-slate-200">
                        {item.tag}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </GlassCard>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-xl"
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[95vh] max-w-[95vw] rounded-2xl border border-white/20 bg-[#0C0F14] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 bg-black/50 px-5 py-3.5">
                <div>
                  <span className="font-display text-[15px] font-bold text-white">
                    {lightboxItem.title}
                  </span>
                  <span className="ml-2 font-mono text-[11px] text-[var(--cyan)]">
                    [{lightboxItem.tag}]
                  </span>
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="rounded-lg border border-white/15 bg-white/5 p-1.5 text-slate-300 hover:bg-white/10 hover:text-white transition"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Image */}
              <div className="overflow-auto max-h-[82vh] p-2 bg-black/70 flex items-center justify-center">
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  className="max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
