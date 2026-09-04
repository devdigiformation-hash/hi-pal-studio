import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Copy,
  Check,
  Download,
  ExternalLink,
  Sparkles,
  Terminal,
  Video,
  Camera,
  Bot,
  Database,
  Lock,
  Zap,
  Cpu,
  Layers,
  Search,
} from "lucide-react";
import ThreeDTiltCard from "@/components/ui/ThreeDTiltCard";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";
import CyanButton from "@/components/CyanButton";

interface ZigZagItem {
  id: string;
  badge: string;
  stars: string;
  license: string;
  replaces: string;
  annualSavings: string;
  title: string;
  tagline: string;
  description: string;
  cliCommand: string;
  downloadUrl: string;
  subpageUrl: string;
  accentColor: string;
  icon: any;
  bullets: string[];
  visualMockType: "terminal" | "video" | "avatar" | "llm" | "database";
}

const ZIGZAG_ITEMS: ZigZagItem[] = [
  {
    id: "openhands",
    badge: "Autonomous AI Engineer",
    stars: "46.2k ★",
    license: "MIT Permissive",
    replaces: "Devin AI ($500/mo)",
    annualSavings: "Save $6,000 / year",
    title: "OpenHands — Autonomous Full-Stack AI Software Engineer",
    tagline: "The world's #1 open-source alternative to Devin. Writes, tests, and deploys full codebases autonomously.",
    description:
      "Stop paying $6,000/year for seat-locked cloud coding bots. OpenHands runs an isolated Docker developer workstation with full Bash shell, VS Code editor, and web preview to solve complex GitHub issues from plain language.",
    cliCommand: "npx digi-os run openhands --sandbox=docker",
    downloadUrl: "/downloads/OpenHands-main.zip",
    subpageUrl: "/open-source/openhands",
    accentColor: "#3B82F6",
    icon: Terminal,
    bullets: [
      "SWE-Bench verified: benchmarked to solve 53%+ real GitHub issues autonomously",
      "Self-healing debug loop: runs unit tests, diagnoses errors, edits files & re-tests",
      "Integrated Docker sandbox with zero data leakage or recurring subscription fees",
      "Connects to local Ollama models or wholesale API keys (DeepSeek, Claude, GPT-4o)",
    ],
    visualMockType: "terminal",
  },
  {
    id: "neural-media",
    badge: "Real-Time Neural Media",
    stars: "52.8k ★",
    license: "GPL-3.0 Open",
    replaces: "HeyGen / DeepBrain ($348/yr)",
    annualSavings: "Save $538 / year",
    title: "FaceFusion & Deep-Live-Cam — Realtime AI Avatar & Video Engine",
    tagline: "Broadcast-quality neural face swap, voice lip-sync, and webcam enhancement on your local GPU.",
    description:
      "Generate high-fidelity AI talking avatars and perform real-time webcam face-swapping with zero cloud subscriptions. Operates 100% air-gapped on your NVIDIA RTX GPU or Apple Silicon.",
    cliCommand: "digi-os launch facefusion --cuda --live-stream",
    downloadUrl: "/downloads/FaceFusion-Windows-Installer.zip",
    subpageUrl: "/open-source/facefusion",
    accentColor: "#EC4899",
    icon: Camera,
    bullets: [
      "Real-time 60 FPS video face-swapping with advanced occlusion masks",
      "Live lip-sync and audio speech modulation without sending face data to 3rd parties",
      "Hardware-accelerated CUDA & DirectML engine with zero rendering limits",
      "Direct integration into DIGI BIZ OS Studio video production queues",
    ],
    visualMockType: "avatar",
  },
  {
    id: "video-studio",
    badge: "4K Creative Studio",
    stars: "18.4k ★",
    license: "GPL / MIT Open Source",
    replaces: "Adobe Premiere Pro ($287/yr) + CapCut ($120/yr)",
    annualSavings: "Save $407 / year",
    title: "Kdenlive & OpenCut — 4K Timeline Video Studio & Shorts Lab",
    tagline: "Hollywood-grade multi-track video editing and modern vertical 9:16 social reel cuts.",
    description:
      "Everything you need to produce 4K YouTube videos, vertical TikToks, and Instagram Reels with magnetic snapping, animated text overlays, multi-track audio, and zero watermark export traps.",
    cliCommand: "kdenlive --project=digi-studio-reel.kdenlive",
    downloadUrl: "/downloads/kdenlive-24.12.2-windows-standalone.zip",
    subpageUrl: "/open-source/kdenlive",
    accentColor: "#F59E0B",
    icon: Video,
    bullets: [
      "Native 4K 60FPS multi-track timeline with keyframe motion and color grading",
      "Pre-configured 9:16 vertical templates with auto-subtitling and magnetic cuts",
      "100% offline rendering with NVENC / QuickSync GPU acceleration",
      "Zero export fees, zero monthly seats, and zero forced watermarks",
    ],
    visualMockType: "video",
  },
  {
    id: "local-llm",
    badge: "Private Local LLMs & RAG",
    stars: "34.1k ★",
    license: "Apache 2.0 / MIT",
    replaces: "ChatGPT Team ($300/yr) + Chatbase ($400/yr)",
    annualSavings: "Save $700 / year",
    title: "Jan AI & AnythingLLM — 100% Offline AI Brain & Document Vector RAG",
    tagline: "Turn your PC into a private sovereign AI powerhouse. Ingest company PDFs with zero cloud exposure.",
    description:
      "Run state-of-the-art reasoning models (DeepSeek-R1, Llama 3.3, Mistral) on your machine. Chat with entire document folders, contracts, and financial reports without leaking confidential business information.",
    cliCommand: "jan --model=deepseek-r1-distill --air-gapped",
    downloadUrl: "/downloads/jan-win-x64-0.5.14.exe",
    subpageUrl: "/open-source/jan-ai",
    accentColor: "#8B5CF6",
    icon: Bot,
    bullets: [
      "Run local GGUF models directly on CPU / NVIDIA GPU at 45+ tokens/second",
      "Full document RAG: drop in PDFs, Excel sheets, DOCX, and search semantically",
      "Zero internet connection required — 100% confidential and air-gapped",
      "Seamless bridge to DIGI BIZ OS Business Knowledge Base and CRM",
    ],
    visualMockType: "llm",
  },
  {
    id: "backend-seo",
    badge: "Backend & Technical SEO",
    stars: "41.9k ★",
    license: "MIT / GPL",
    replaces: "Supabase ($300/yr) + Screaming Frog ($259/yr)",
    annualSavings: "Save $559 / year",
    title: "PocketBase & Open SEO Spider — Instant Database & Website Crawler",
    tagline: "Deploy a realtime SQLite database with auth and crawl 10,000+ URLs for broken links and Schema markup.",
    description:
      "Full operational sovereignty: a single executable backend providing realtime subscriptions, file storage, and REST APIs, paired with an unlimited local technical SEO crawler.",
    cliCommand: "pocketbase.exe serve --http=127.0.0.1:8090",
    downloadUrl: "/downloads/pocketbase_0.25.9_windows_amd64.zip",
    subpageUrl: "/open-source/pocketbase",
    accentColor: "#10B981",
    icon: Database,
    bullets: [
      "Single portable .EXE: embeddable SQLite database, admin UI, auth & file storage",
      "Realtime WebSocket subscriptions with microsecond local query response",
      "Deep SEO crawler: identifies 404 broken links, redirects, and validates Google Sitelinks JSON-LD",
      "Completely free with unlimited records, unlimited pages, and zero cloud hosting tiers",
    ],
    visualMockType: "database",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-[var(--cyan)] transition hover:bg-white/10"
      title="Copy command"
    >
      {copied ? <Check size={12} className="text-[#3DDC84]" /> : <Copy size={12} />}
      <span>{copied ? "Copied" : "Copy"}</span>
    </button>
  );
}

export default function OpenSourceZigZagShowcase() {
  return (
    <div id="flagship-releases" className="space-y-24 py-12 md:py-20">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <ActivePulse size={7} />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--cyan)]">
            Curated Open Source Suites
          </span>
        </div>
        <h2 className="mt-3 font-display text-[30px] font-extrabold tracking-[-0.03em] text-[var(--text-primary)] md:text-[44px]">
          Enterprise Power.{" "}
          <span className="bg-gradient-to-r from-[#2FE0C8] via-[#8B5CF6] to-[#38BDF8] bg-clip-text text-transparent">
            Released 100% Free Under Open Licences.
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-[760px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)] md:text-[17px]">
          We have engineered, curated, and pre-packaged the world's most powerful open-source desktop software.
          No trial periods, no subscription locks, and no bait-and-switch. Run them freely on your machine today.
        </p>
      </div>

      {/* ZIG-ZAG ALTERNATING SHOWCASE SECTIONS */}
      <div className="space-y-28">
        {ZIGZAG_ITEMS.map((item, idx) => {
          const isReversed = idx % 2 === 1;
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* CONTENT COLUMN (6 COLS) */}
              <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className="flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider"
                    style={{
                      borderColor: `${item.accentColor}40`,
                      background: `${item.accentColor}15`,
                      color: item.accentColor,
                    }}
                  >
                    <Icon size={13} />
                    <span>{item.badge}</span>
                  </span>

                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-[var(--text-secondary)]">
                    {item.stars}
                  </span>

                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] text-[#3DDC84]">
                    {item.annualSavings}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[26px] font-extrabold leading-[1.18] text-[var(--text-primary)] md:text-[34px]">
                  {item.title}
                </h3>

                <p className="mt-2 font-body text-[14.5px] font-medium text-[var(--cyan)]">
                  {item.tagline}
                </p>

                <p className="mt-4 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {item.description}
                </p>

                {/* BULLETS */}
                <ul className="mt-6 space-y-2.5">
                  {item.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0"
                        style={{ color: item.accentColor }}
                      />
                      <span className="font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* TERMINAL QUICK RUN SNIPPET */}
                <div className="mt-6 rounded-xl border border-white/10 bg-black/50 p-3 flex items-center justify-between font-mono text-[12px]">
                  <div className="flex items-center gap-2 overflow-x-auto text-[var(--text-secondary)]">
                    <span className="text-[var(--cyan)]">$</span>
                    <span className="text-white/90">{item.cliCommand}</span>
                  </div>
                  <CopyButton text={item.cliCommand} />
                </div>

                {/* ACTION CTA BUTTONS */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a href={item.downloadUrl} download>
                    <CyanButton size="md" icon={<Download size={15} />}>
                      Download Verified Package
                    </CyanButton>
                  </a>
                  <Link
                    to={item.subpageUrl}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-4 py-2.5 font-display text-[13px] font-bold text-white transition hover:border-[var(--cyan)] hover:bg-white/10"
                  >
                    <span>Full Feature Specs</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* 3D HOLOGRAPHIC APPLICATION WINDOW COLUMN (6 COLS) */}
              <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                <ThreeDTiltCard glowColor={item.accentColor} className="p-2 md:p-3 relative overflow-hidden">
                  {/* APP WINDOW TOP BAR */}
                  <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-2.5 rounded-t-xl">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500/80" />
                      <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-[11px] text-[var(--text-muted)]">
                        {item.id.toUpperCase()} // DESKTOP RUNTIME
                      </span>
                    </div>
                    <span
                      className="rounded px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider"
                      style={{
                        background: `${item.accentColor}20`,
                        color: item.accentColor,
                        border: `1px solid ${item.accentColor}40`,
                      }}
                    >
                      {item.license}
                    </span>
                  </div>

                  {/* VISUAL MOCK BASED ON TYPE */}
                  <div className="rounded-b-xl bg-[#03060C] p-5 font-mono text-[12px] min-h-[290px] flex flex-col justify-between">
                    {item.visualMockType === "terminal" && (
                      <div className="space-y-2 text-[var(--text-secondary)]">
                        <p className="text-[var(--cyan)]">&gt; openhands init --workspace=./fintech-app</p>
                        <p className="text-white/80">✔ Cloned repository [github.com/client/fintech-app]</p>
                        <p className="text-white/80">✔ Docker container provisioned: python:3.11-slim + node:20</p>
                        <p className="text-amber-300">⚡ SWE-Bench Agent #42: Analyzing issue #104 (Fix auth leak)</p>
                        <p className="text-emerald-400 font-bold">✔ pytest: 14 passing, 0 failing. Branch ready for PR.</p>
                        <div className="mt-4 rounded-lg border border-white/10 bg-black/70 p-3">
                          <p className="text-[11px] text-[var(--text-muted)]">SWE-BENCH RESOLUTION</p>
                          <div className="mt-1 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full bg-[#3DDC84]" style={{ width: "53.2%" }} />
                          </div>
                          <span className="mt-1 block text-right text-[10.5px] text-[#3DDC84]">
                            53.2% Autonomous Fix Rate ($0 Cloud Fees)
                          </span>
                        </div>
                      </div>
                    )}

                    {item.visualMockType === "avatar" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="text-[var(--cyan)]">● WEBCAM INPUT: 1080P @ 60FPS</span>
                          <span className="text-emerald-400">CUDA ENGINE: ACTIVE</span>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-black/50 p-4 text-center">
                          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-400 border border-pink-500/40">
                            <Camera size={26} />
                          </div>
                          <p className="mt-2 font-display text-[13.5px] font-bold text-white">
                            Realtime Landmark Tracking Active
                          </p>
                          <p className="mt-1 font-body text-[11.5px] text-[var(--text-secondary)]">
                            68 facial fiducials mapped · Live lip-sync active · Zero cloud transmission
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-[10.5px]">
                          <div className="rounded border border-white/5 bg-white/[0.02] p-2">
                            <span className="text-[var(--text-muted)]">LATENCY</span>
                            <p className="font-bold text-[#3DDC84]">16ms</p>
                          </div>
                          <div className="rounded border border-white/5 bg-white/[0.02] p-2">
                            <span className="text-[var(--text-muted)]">GPU LOAD</span>
                            <p className="font-bold text-[var(--cyan)]">42%</p>
                          </div>
                          <div className="rounded border border-white/5 bg-white/[0.02] p-2">
                            <span className="text-[var(--text-muted)]">PRIVACY</span>
                            <p className="font-bold text-pink-400">100% Air-Gapped</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {item.visualMockType === "video" && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="text-amber-400">TIMELINE: 4K 60FPS PRORES</span>
                          <span className="text-[var(--cyan)]">PREVIEW: 9:16 VERTICAL</span>
                        </div>
                        <div className="space-y-1.5 rounded-lg border border-white/10 bg-black/60 p-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-red-400" />
                            <span className="text-[11px] text-white">V1: Main_Interview_A_Roll.mp4</span>
                          </div>
                          <div className="h-2 rounded bg-amber-500/30 w-full overflow-hidden">
                            <div className="h-full bg-amber-400 w-3/4" />
                          </div>
                          <div className="flex items-center gap-2 pt-2">
                            <span className="h-2 w-2 rounded-full bg-cyan-400" />
                            <span className="text-[11px] text-white">A1: Audio_Master_Voice_Eq.wav</span>
                          </div>
                          <div className="h-2 rounded bg-cyan-500/30 w-full overflow-hidden">
                            <div className="h-full bg-cyan-400 w-5/6" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-1 text-[11px]">
                          <span className="text-[var(--text-muted)]">Export: CapCut / Premiere Quality</span>
                          <span className="text-[#3DDC84] font-bold">Cost: $0 Forever</span>
                        </div>
                      </div>
                    )}

                    {item.visualMockType === "llm" && (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="text-[var(--purple)]">MODEL: DeepSeek-R1-Distill-Q4</span>
                          <span className="text-[#3DDC84]">48 TOKENS/SEC</span>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-black/50 p-3 text-[11.5px] leading-relaxed">
                          <p className="text-[var(--cyan)]">&gt; Query: "Summarize Q3 financial liabilities from balance-sheet.pdf"</p>
                          <p className="mt-2 text-white/90">
                            "Extracted 4 debt obligations totaling £142,500. Vector similarity score: 0.94. No data left your PC."
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                          <span>Vector DB: Embedded SQLite</span>
                          <span className="text-emerald-400">Offline Verified</span>
                        </div>
                      </div>
                    )}

                    {item.visualMockType === "database" && (
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="text-emerald-400">ENGINE: POCKETBASE + SQLITE</span>
                          <span className="text-[var(--cyan)]">PORT: 8090 (LOCAL)</span>
                        </div>
                        <div className="rounded-lg border border-white/10 bg-black/50 p-3 text-[11.5px] leading-relaxed">
                          <p className="text-[var(--text-muted)]">API ENDPOINT // collections/crm_leads</p>
                          <p className="text-[#3DDC84]">HTTP 200 OK — 0.4ms query execution</p>
                          <p className="text-white/80">Realtime WebSocket subscribers: 12 active</p>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                          <span>Crawler: 10,000 URLs audited</span>
                          <span className="text-[#3DDC84] font-bold">Saved: $559/yr vs SaaS</span>
                        </div>
                      </div>
                    )}

                    {/* WINDOW FOOTER */}
                    <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[10.5px] text-[var(--text-muted)]">
                      <span>Windows 10 / 11 Native 64-bit</span>
                      <span className="text-[var(--cyan)]">100% Curated & Verified</span>
                    </div>
                  </div>
                </ThreeDTiltCard>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
