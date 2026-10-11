import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useCallback } from "react";
import {
  Download,
  Check,
  ShieldCheck,
  Cpu,
  HardDrive,
  Terminal,
  ArrowRight,
  Sparkles,
  Copy,
  CheckCircle2,
  AlertTriangle,
  Info,
  ChevronDown,
  Layers,
  Zap,
} from "lucide-react";
import { useTrackDownload } from "@/lib/use-download-tracking";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { WindowsIcon, AppleIcon, LinuxIcon } from "@/components/PlatformIcons";
import { buildMeta, breadcrumbLd, faqLd, softwareLd } from "@/lib/seo";

const TITLE = "Download DIGI BIZ OS for Windows 10 & 11 | JARVIS AI Desktop Workstation";
const DESC =
  "Download DIGI BIZ OS for Windows 10 & 11 (64-bit). The sovereign, voice-controlled AI business operating system. 12 integrated modules, offline Whisper speech recognition, and zero subscription fees.";

const INSTALLER_URL = "https://updates.digibizos.co.uk/DIGI-BIZ-OS-Setup-x64.exe";
const SHA256_HASH = "8f4e2b9c7a1d5e3f6092b45138a7c29014df35e619c08ba562137e0fa82bc194";

const STEPS = [
  {
    num: "01",
    title: "Download Installer",
    body: "Fetch the standalone 64-bit Windows setup executable (~648 MB) containing all 12 modules and offline models runtime.",
  },
  {
    num: "02",
    title: "Instant 1-Click Setup",
    body: "Launch the setup executable. Installs natively into your local Windows user profile with zero admin elevation traps.",
  },
  {
    num: "03",
    title: "Enter Licence Key",
    body: "Enter your lifetime activation key sent to your email after checkout, or start with your offline community edition.",
  },
  {
    num: "04",
    title: "Launch JARVIS Workspace",
    body: "Speak natural voice commands to control CRM deals, WhatsApp agents, document conversion, and local neural models.",
  },
];

const REQUIREMENTS = [
  { spec: "Operating System", min: "Windows 10 (64-bit, 20H2+)", rec: "Windows 11 (64-bit, Latest Build)" },
  { spec: "Processor (CPU)", min: "Intel Core i5 / AMD Ryzen 5", rec: "Intel Core i7 / AMD Ryzen 7 or higher" },
  { spec: "System Memory (RAM)", min: "8 GB RAM", rec: "16 GB+ RAM (ideal for 8B local LLMs)" },
  { spec: "Storage Space", min: "2.5 GB free SSD storage", rec: "10 GB+ SSD (for local model caches)" },
  { spec: "Graphics (GPU)", min: "Integrated Intel / AMD GPU", rec: "NVIDIA RTX (CUDA support for <200ms voice)" },
  { spec: "Network", min: "Internet for initial activation", rec: "100% offline air-gapped capability" },
];

const FAQ = [
  {
    q: "Which Windows editions are supported?",
    a: "DIGI BIZ OS is engineered natively for 64-bit Windows 10 (version 19041 and above) and Windows 11. It executes as a high-performance native desktop application.",
  },
  {
    q: "How do I activate the software after downloading?",
    a: "When you complete checkout for the £29 Lifetime Licence, your unique licence key is generated instantly and emailed to you. When you launch the application for the first time, simply paste your key into the activation prompt.",
  },
  {
    q: "Why does Windows SmartScreen appear during setup?",
    a: "Windows SmartScreen warns for newly released software until it builds reputational history with Microsoft. DIGI BIZ OS is 100% safe, virus-free, and contains zero adware. Click 'More info' and then select 'Run anyway' to complete the installation.",
  },
  {
    q: "Are there any recurring monthly subscription fees?",
    a: "No. DIGI BIZ OS operates on a perpetual lifetime ownership model (£29 one-time). There are zero seat fees, zero monthly hosting bills, and zero token markups.",
  },
  {
    q: "Can I run DIGI BIZ OS completely offline?",
    a: "Yes. Once downloaded and activated, all core functions — including the local SQLite CRM, document encryption, and local Whisper/Ollama models — run with 100% local privacy without sending telemetry to cloud servers.",
  },
];

export const Route = createFileRoute("/download")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/download", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Download", path: "/download" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            softwareLd(
              "DIGI BIZ OS",
              "Autonomous AI Agentic Business Operating System for Windows 10 & 11.",
              "/download",
            ),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqLd(FAQ)) },
      ],
    };
  },
  component: DownloadPage,
});

function DownloadPage() {
  const trackDownload = useTrackDownload();
  const [selectedPlatform, setSelectedPlatform] = useState<"windows" | "mac" | "linux">("windows");
  const [downloadStarted, setDownloadStarted] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [showSmartScreenGuide, setShowSmartScreenGuide] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleDownload = useCallback(() => {
    trackDownload("download_page_primary_hero_btn", "windows");
    setDownloadStarted(true);

    // Trigger download
    const link = document.createElement("a");
    link.href = INSTALLER_URL;
    link.setAttribute("download", "DIGI-BIZ-OS-Setup-x64.exe");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [trackDownload]);

  const copyHash = useCallback(() => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(SHA256_HASH);
      setCopiedHash(true);
      setTimeout(() => setCopiedHash(false), 2500);
    }
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden pt-[70px] md:pt-[84px]">
      {/* ── AMBIENT CYBER / CELESTIAL BACKGROUND ─────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[650px] w-[1000px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,224,200,0.12)_0%,rgba(139,124,246,0.06)_40%,transparent_70%)] blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,7,14,0.85)_80%,#06070E_100%)]" />
      </div>

      {/* ── BREADCRUMBS ─────────────────────────────────────────── */}
      <div className="container mx-auto px-4 pt-4 sm:px-6">
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Download", path: "/download" },
          ]}
        />
      </div>

      {/* ── HERO HUD DOWNLOAD SECTION (STONIC AI STYLE) ─────────── */}
      <section className="relative px-4 py-8 md:py-16">
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          {/* Top System HUD Status */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 font-mono text-[11px] font-semibold tracking-[0.16em] uppercase text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
            SECURE VERIFIED DOWNLOAD · WINDOWS 10 / 11
          </div>

          {/* Central Logo with Breathing Glow & Gen 2 Tag */}
          <div className="relative mt-8 mb-6 flex items-center justify-center">
            {/* Breathing radial glow */}
            <div className="absolute h-36 w-36 rounded-full bg-cyan-400/20 blur-2xl animate-pulse" />

            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-black/60 p-3 shadow-[0_12px_40px_rgba(0,0,0,0.8)] backdrop-blur-xl md:h-28 md:w-28">
              <img
                src="/logo-512.webp"
                alt="DIGI BIZ OS"
                className="h-full w-full object-contain drop-shadow-[0_0_18px_rgba(47,224,200,0.6)]"
                loading="eager"
              />

              {/* Gen 2.4 Tag */}
              <div className="absolute -top-3 -right-6 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/40 bg-slate-950/90 px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-widest text-cyan-300 shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#2fe0c8]" />
                GEN 2.4
              </div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-white sm:text-[46px] md:text-[54px]">
            Welcome to the Experience{" "}
            <span className="block mt-1">
              <GradientText from="#2FE0C8" to="#8B7CF6">
                Download DIGI BIZ OS.
              </GradientText>
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto mt-4 max-w-[560px] font-body text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-[17px]">
            Your technical AI business operating system is verified and ready for activation. 100% offline
            sovereignty, Whisper voice control, and 12 native modules.
          </p>

          {/* Platform Switcher Tabs */}
          <div className="mt-8 flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 shadow-inner backdrop-blur-md">
            <button
              type="button"
              onClick={() => setSelectedPlatform("windows")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 font-display text-[12px] font-bold tracking-wider uppercase transition-all duration-300 ${
                selectedPlatform === "windows"
                  ? "bg-white text-slate-950 shadow-[0_4px_16px_rgba(255,255,255,0.3)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <WindowsIcon size={14} />
              Windows
            </button>
            <button
              type="button"
              onClick={() => setSelectedPlatform("mac")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 font-display text-[12px] font-bold tracking-wider uppercase transition-all duration-300 ${
                selectedPlatform === "mac"
                  ? "bg-white text-slate-950 shadow-[0_4px_16px_rgba(255,255,255,0.3)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <AppleIcon size={14} />
              macOS
              <span className="rounded-full bg-amber-500/20 px-1.5 py-0.2 font-mono text-[9px] font-bold text-amber-400">
                Soon
              </span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPlatform("linux")}
              className={`hidden sm:flex items-center gap-2 rounded-full px-5 py-2 font-display text-[12px] font-bold tracking-wider uppercase transition-all duration-300 ${
                selectedPlatform === "linux"
                  ? "bg-white text-slate-950 shadow-[0_4px_16px_rgba(255,255,255,0.3)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <LinuxIcon size={14} />
              Linux
              <span className="rounded-full bg-amber-500/20 px-1.5 py-0.2 font-mono text-[9px] font-bold text-amber-400">
                Soon
              </span>
            </button>
          </div>

          {/* ── PRIMARY DOWNLOAD BUTTON ZONE (STONIC AI STYLE) ─────────── */}
          <div className="mt-8 w-full max-w-[480px]">
            {selectedPlatform === "windows" ? (
              <div>
                {/* Futuristic Download Button */}
                <button
                  type="button"
                  onClick={handleDownload}
                  className="group relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-xl border border-white/20 bg-gradient-to-r from-white via-slate-100 to-white px-8 py-5 text-slate-950 shadow-[0_10px_35px_-5px_rgba(255,255,255,0.35),0_0_20px_rgba(47,224,200,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_45px_-5px_rgba(255,255,255,0.5),0_0_30px_rgba(47,224,200,0.4)] active:scale-[0.98]"
                >
                  {/* Hover Shimmer Sweep */}
                  <div className="pointer-events-none absolute -inset-full top-0 block -rotate-45 bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-1000 group-hover:left-full" />

                  <WindowsIcon size={22} className="shrink-0 text-slate-900 transition-transform duration-300 group-hover:scale-110" />

                  <span className="font-display text-[15px] font-black tracking-wider uppercase sm:text-[16px]">
                    DOWNLOAD FOR WINDOWS
                  </span>

                  <Download
                    size={20}
                    className="shrink-0 text-slate-900 transition-transform duration-300 group-hover:translate-y-1"
                  />
                </button>

                {/* Metadata Line */}
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2 font-mono text-[12px] text-[var(--text-muted)]">
                  <span className="text-cyan-400">●</span> 648 MB
                  <span>·</span> VERSION 2.4.0
                  <span>·</span> WIN 10/11 x64
                  <span>·</span> SHA-256 VERIFIED
                </div>

                {/* Download feedback banner */}
                {downloadStarted && (
                  <div className="mt-4 animate-in fade-in slide-in-from-top-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-left backdrop-blur-md">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                      <div>
                        <p className="font-display text-[13.5px] font-bold text-white">
                          Download initiated!
                        </p>
                        <p className="mt-1 font-body text-[12.5px] leading-relaxed text-slate-300">
                          Check your browser downloads bar. Once finished, run{" "}
                          <code className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-cyan-300">
                            DIGI-BIZ-OS-Setup-x64.exe
                          </code>{" "}
                          to begin.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center backdrop-blur-md">
                <p className="font-display text-[15px] font-bold text-white">
                  {selectedPlatform === "mac" ? "macOS Build in Development" : "Linux Build in Development"}
                </p>
                <p className="mt-2 font-body text-[13px] text-[var(--text-secondary)]">
                  The native {selectedPlatform === "mac" ? "Apple Silicon (M1/M2/M3/M4)" : "Linux (.deb / AppImage)"}{" "}
                  desktop distribution is currently undergoing internal beta testing.
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedPlatform("windows")}
                  className="mt-4 inline-flex items-center gap-2 font-mono text-[12px] font-semibold text-cyan-400 hover:underline"
                >
                  <WindowsIcon size={14} /> Switch back to Windows Download
                </button>
              </div>
            )}

            {/* Need a licence button / link */}
            <div className="mt-6">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 font-body text-[13px] font-semibold text-[var(--text-secondary)] transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-white"
              >
                <span>Don't have a licence key yet? Get Lifetime Access (£29)</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 text-cyan-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECURITY STRIP WITH SCI-FI HUD BRACKETS ────────────────── */}
      <section className="px-4 py-4">
        <div className="relative mx-auto max-w-[840px] rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-6">
          {/* HUD Corner Accents */}
          <div className="pointer-events-none absolute -top-1 -left-1 h-3 w-3 border-t-2 border-l-2 border-cyan-400" />
          <div className="pointer-events-none absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-cyan-400" />

          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            <div className="flex flex-col items-center">
              <ShieldCheck size={20} className="text-cyan-400" />
              <span className="mt-2 font-display text-[12px] font-bold text-white">SHA-256 Verified</span>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">Cryptographic hash</span>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle2 size={20} className="text-emerald-400" />
              <span className="mt-2 font-display text-[12px] font-bold text-white">Defender Cleared</span>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">Zero malware/adware</span>
            </div>
            <div className="flex flex-col items-center">
              <HardDrive size={20} className="text-violet-400" />
              <span className="mt-2 font-display text-[12px] font-bold text-white">100% Offline Capable</span>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">Local SSD storage</span>
            </div>
            <div className="flex flex-col items-center">
              <Terminal size={20} className="text-amber-400" />
              <span className="mt-2 font-display text-[12px] font-bold text-white">Zero Telemetry</span>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">No data egress</span>
            </div>
          </div>

          {/* Copy SHA-256 Hash button */}
          <div className="mt-5 border-t border-white/5 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="font-mono text-[11px] uppercase text-[var(--text-muted)]">Checksum:</span>
              <code className="truncate font-mono text-[11px] text-cyan-300 max-w-[280px] sm:max-w-[420px]">
                {SHA256_HASH}
              </code>
            </div>
            <button
              type="button"
              onClick={copyHash}
              className="inline-flex items-center gap-1.5 shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] font-medium text-white transition-colors hover:bg-white/10"
            >
              {copiedHash ? (
                <>
                  <Check size={12} className="text-emerald-400" /> Copied Hash
                </>
              ) : (
                <>
                  <Copy size={12} /> Copy SHA-256
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ── WINDOWS SMARTSCREEN ADVISORY MODAL / CARD ─────────────── */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-[840px]">
          <div className="rounded-2xl border border-amber-500/25 bg-amber-500/[0.04] p-5 backdrop-blur-xl sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-400" />
                <div>
                  <h3 className="font-display text-[15px] font-bold text-white">
                    First-Time Windows Installation Notice
                  </h3>
                  <p className="mt-1 font-body text-[13px] leading-relaxed text-slate-300">
                    If Windows Defender or SmartScreen shows{" "}
                    <span className="font-semibold text-amber-300">"Windows protected your PC"</span>:
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowSmartScreenGuide(!showSmartScreenGuide)}
                className="inline-flex shrink-0 items-center gap-1 rounded-full border border-amber-500/30 px-3 py-1 font-mono text-[11px] font-semibold text-amber-300 transition-colors hover:bg-amber-500/10"
              >
                {showSmartScreenGuide ? "Hide Steps" : "View Steps"}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${showSmartScreenGuide ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {showSmartScreenGuide && (
              <div className="mt-4 border-t border-amber-500/15 pt-4 text-[13px] text-slate-300 animate-in fade-in">
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
                    <span className="font-mono text-[11px] font-bold text-amber-400">STEP 1</span>
                    <p className="mt-1 font-semibold text-white">Click "More info"</p>
                    <p className="mt-0.5 text-[12px] text-slate-400">
                      Located under the Windows SmartScreen blue banner text.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
                    <span className="font-mono text-[11px] font-bold text-amber-400">STEP 2</span>
                    <p className="mt-1 font-semibold text-white">Click "Run anyway"</p>
                    <p className="mt-0.5 text-[12px] text-slate-400">
                      This authorizes local execution for the installer.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-black/40 p-3.5">
                    <span className="font-mono text-[11px] font-bold text-amber-400">STEP 3</span>
                    <p className="mt-1 font-semibold text-white">Instant Launch</p>
                    <p className="mt-0.5 text-[12px] text-slate-400">
                      Installs cleanly in seconds with zero admin registry bloat.
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-amber-500/10 pt-3">
                  <p className="font-mono text-[11.5px] text-slate-400">
                    ℹ Why this happens: SmartScreen flags newly published independent desktop binaries until they
                    reach thousands of installs. DIGI BIZ OS is 100% clean and virus-scanned.
                  </p>
                  <Link
                    to="/setup-guide"
                    className="inline-flex items-center gap-1.5 font-mono text-[11.5px] font-semibold text-amber-300 hover:underline"
                  >
                    Read the step-by-step Setup Guide →
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 4-STEP GETTING STARTED BLUEPRINT ───────────────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center">
            <EyebrowLabel text="Installation Guide" color="var(--cyan)" />
            <h2 className="mt-3 font-display text-[26px] font-bold tracking-tight text-white sm:text-[34px]">
              How to Deploy DIGI BIZ OS in 4 Minutes
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] font-body text-[14.5px] text-[var(--text-secondary)]">
              From fresh download to running your first voice-automated workflow on Windows.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <GlassCard
                key={step.num}
                glowColor="var(--cyan)"
                className="relative flex flex-col justify-between p-6 transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-[13px] font-black text-cyan-400">{step.num}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
                  </div>
                  <h3 className="mt-3 font-display text-[16px] font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
                    {step.body}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── HARDWARE & SYSTEM REQUIREMENTS ────────────────────────── */}
      <SectionWrapper>
        <div className="mx-auto max-w-[880px]">
          <div className="text-center">
            <EyebrowLabel text="System Specifications" color="var(--purple)" />
            <h2 className="mt-3 font-display text-[26px] font-bold tracking-tight text-white sm:text-[34px]">
              Hardware & Windows Requirements
            </h2>
            <p className="mx-auto mt-3 max-w-[600px] font-body text-[14.5px] text-[var(--text-secondary)]">
              Lightweight enough for standard laptops, powerful enough for local offline neural models.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-body text-[13.5px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03] font-display text-[12px] uppercase tracking-wider text-[var(--text-muted)]">
                    <th className="p-4">Component</th>
                    <th className="p-4">Minimum Specification</th>
                    <th className="p-4 text-cyan-400">Recommended Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {REQUIREMENTS.map((r) => (
                    <tr key={r.spec} className="transition-colors hover:bg-white/[0.02]">
                      <td className="p-4 font-semibold text-white">{r.spec}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{r.min}</td>
                      <td className="p-4 font-medium text-cyan-300">{r.rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQ) ───────────────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[880px]">
          <div className="text-center">
            <EyebrowLabel text="Help & FAQ" color="var(--cyan)" />
            <h2 className="mt-3 font-display text-[26px] font-bold tracking-tight text-white sm:text-[34px]">
              Download & Activation Questions
            </h2>
          </div>

          <div className="mt-8 space-y-3">
            {FAQ.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-white/10 bg-black/40 transition-colors hover:border-white/20"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left font-display text-[15px] font-bold text-white"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-cyan-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/5 px-5 pb-5 pt-3 font-body text-[14px] leading-relaxed text-[var(--text-secondary)] animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ── BOTTOM CONVERSION STRIP ────────────────────────────────── */}
      <section className="px-4 py-16 text-center">
        <div className="mx-auto max-w-[760px] rounded-3xl border border-cyan-400/30 bg-gradient-to-b from-cyan-950/20 to-black/80 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:p-12">
          <h2 className="font-display text-[28px] font-extrabold text-white sm:text-[38px]">
            Ready to Take Command of Your Business?
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] font-body text-[15px] leading-relaxed text-[var(--text-secondary)]">
            Deploy the single native desktop operating system that replaces 10+ expensive SaaS subscriptions
            for a £29 lifetime payment.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 font-display text-[14px] font-extrabold tracking-wide uppercase text-slate-950 shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              <WindowsIcon size={16} />
              Download Installer (x64)
            </button>

            <Link to="/pricing">
              <GhostButton size="lg" icon={<Sparkles size={16} />}>
                Get Lifetime Licence (£29)
              </GhostButton>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
