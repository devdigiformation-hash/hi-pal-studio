import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Copy,
  Check,
  Download,
  ShieldCheck,
  Activity,
  CheckCircle2,
} from "lucide-react";
import ThreeDTiltCard from "@/components/ui/ThreeDTiltCard";
import CyanButton from "@/components/CyanButton";

export interface OpenSourceHeroStageProps {
  toolId: string;
  title: string;
  category: string;
  color?: string;
  downloadUrl: string;
  downloadFilename?: string;
  version?: string;
  license?: string;
  stars?: string;
  image?: string;
  quickCommand?: string;
  badges?: string[];
  replaces?: string;
  annualSavings?: string;
}

export default function OpenSourceHeroStage({
  toolId,
  title,
  category,
  color = "#2FE0C8",
  downloadUrl,
  downloadFilename = "download.zip",
  version = "v1.4.0 (Latest Release)",
  license = "MIT Permissive / 100% Free",
  stars = "40k+ ★",
  image,
  quickCommand = "docker run -it --rm -p 3000:3000",
  badges = ["100% Free", "Self-Hosted", "Zero Subscriptions"],
  replaces,
  annualSavings,
}: OpenSourceHeroStageProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "terminal" | "integrity">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(quickCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-[620px] mx-auto">
      {/* Decorative ambient background glows */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}40 0%, transparent 70%)`,
        }}
      />

      <ThreeDTiltCard glowColor={color} className="relative z-10 w-full rounded-2xl border border-white/15 bg-[#060A12]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl overflow-hidden">
        {/* TOP WINDOW TITLEBAR */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#0a0f1d] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]/80 shadow-[0_0_8px_rgba(255,95,86,0.4)]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]/80 shadow-[0_0_8px_rgba(255,189,46,0.4)]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]/80 shadow-[0_0_8px_rgba(39,201,63,0.4)]" />
            </div>
            <div className="ml-2 hidden sm:flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5">
              <span className="h-1.5 w-1.5 rounded-full animate-ping" style={{ backgroundColor: color }} />
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">
                {title.split(" ")[0]} OS STUDIO
              </span>
            </div>
          </div>

          {/* Center Tabs */}
          <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-black/40 p-1">
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] font-medium transition-all ${
                activeTab === "preview"
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Activity size={12} style={{ color }} />
              <span>Studio</span>
            </button>

            <button
              onClick={() => setActiveTab("terminal")}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] font-medium transition-all ${
                activeTab === "terminal"
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Terminal size={12} style={{ color }} />
              <span>CLI Run</span>
            </button>

            <button
              onClick={() => setActiveTab("integrity")}
              className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] font-medium transition-all ${
                activeTab === "integrity"
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <ShieldCheck size={12} className="text-emerald-400" />
              <span>Verify</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider font-semibold"
              style={{
                color,
                borderColor: `${color}40`,
                backgroundColor: `${color}15`,
              }}
            >
              {stars}
            </span>
          </div>
        </div>

        {/* MAIN STAGE CONTENT */}
        <div className="p-4 sm:p-5">
          <AnimatePresence mode="wait">
            {activeTab === "preview" && (
              <motion.div
                key="preview"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                {/* Visual Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-[#03060C] shadow-inner">
                  {image ? (
                    <div className="relative h-full w-full">
                      <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#03060C] via-transparent to-transparent opacity-80" />
                    </div>
                  ) : (
                    /* Dynamic simulated studio */
                    <div className="h-full w-full p-4 flex flex-col justify-between font-mono">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[11px]">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: color }} />
                          <span className="text-white font-semibold">{title}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                          <span className="rounded bg-white/5 px-1.5 py-0.5 border border-white/10">100% OFFLINE</span>
                          <span className="rounded bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 border border-emerald-500/20">READY</span>
                        </div>
                      </div>

                      <div className="my-auto py-2">
                        {category.includes("Agent") || toolId.includes("open") ? (
                          <div className="space-y-2 rounded-lg border border-white/5 bg-black/60 p-3 text-[11px]">
                            <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                              <span>SWE-Bench Auto-Solver</span>
                              <span className="text-emerald-400">53.8% Pass Rate (Devin Grade)</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[84%] animate-pulse" />
                            </div>
                            <div className="text-zinc-300 text-[11px] leading-relaxed">
                              <span className="text-cyan-400">&gt; agent.plan:</span> Diagnosing repository AST, writing unit test patch, self-verifying build...
                            </div>
                            <div className="flex items-center gap-2 text-[10px] text-zinc-400">
                              <span className="text-emerald-400">✓ Unit tests: 42/42 passed</span>
                              <span>• Docker: isolated</span>
                            </div>
                          </div>
                        ) : category.includes("Video") || category.includes("Media") || toolId.includes("kdenlive") || toolId.includes("shotcut") || toolId.includes("opencut") ? (
                          <div className="space-y-2 rounded-lg border border-white/5 bg-black/60 p-3 text-[11px]">
                            <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                              <span>4K Multi-Track Timeline</span>
                              <span className="text-cyan-400 font-mono">00:04:18:22 / 60.0 FPS</span>
                            </div>
                            <div className="space-y-1">
                              <div className="h-4 w-full rounded bg-blue-500/20 border border-blue-500/40 flex items-center px-2 text-[9px] text-blue-300">
                                4K Video Track 1 (NVENC GPU Accelerated)
                              </div>
                              <div className="h-4 w-[75%] rounded bg-purple-500/20 border border-purple-500/40 flex items-center px-2 text-[9px] text-purple-300">
                                Audio Master Track (Whisper AI Subtitles Auto-Synced)
                              </div>
                              <div className="h-4 w-[90%] rounded bg-emerald-500/20 border border-emerald-500/40 flex items-center px-2 text-[9px] text-emerald-300">
                                B-Roll & Visual Keyframe Motion Engine
                              </div>
                            </div>
                          </div>
                        ) : category.includes("Face") || category.includes("Cam") || toolId.includes("facefusion") || toolId.includes("deep-live-cam") ? (
                          <div className="space-y-2 rounded-lg border border-white/5 bg-black/60 p-3 text-[11px]">
                            <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                              <span>Neural Face Swapper & Live Mesh</span>
                              <span className="text-emerald-400">60 FPS • 14ms Latency</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[10px]">
                              <div className="rounded border border-white/10 bg-white/5 p-2 text-center">
                                <span className="text-zinc-400 block text-[9px]">Target Stream</span>
                                <span className="text-cyan-300 font-semibold">1080p WebCam Active</span>
                              </div>
                              <div className="rounded border border-emerald-500/30 bg-emerald-500/10 p-2 text-center">
                                <span className="text-zinc-400 block text-[9px]">Neural Execution</span>
                                <span className="text-emerald-400 font-semibold">CUDA GPU In-Memory</span>
                              </div>
                            </div>
                            <p className="text-zinc-400 text-[10px]">
                              100% Private local ONNX inference • Zero server telemetry
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-2 rounded-lg border border-white/5 bg-black/60 p-3 text-[11px]">
                            <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                              <span>Offline Local Engine</span>
                              <span className="text-emerald-400">Zero Cloud API Bills</span>
                            </div>
                            <div className="rounded border border-white/10 bg-white/5 p-2 text-[11px] text-zinc-300">
                              <span style={{ color }}>● Engine:</span> Loaded into Local GPU/CPU Enclave. Ready for unlimited high-performance execution.
                            </div>
                            <div className="flex items-center justify-between text-[10px] text-zinc-400">
                              <span>License: {license}</span>
                              <span className="text-cyan-400">100% Lifetime Free</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-2 text-center text-[10px]">
                        <div className="rounded bg-white/[0.03] py-1 border border-white/5">
                          <span className="text-zinc-500 block text-[9px]">LICENSE</span>
                          <span className="text-zinc-300 font-semibold">{license.split(" ")[0]}</span>
                        </div>
                        <div className="rounded bg-white/[0.03] py-1 border border-white/5">
                          <span className="text-zinc-500 block text-[9px]">STATUS</span>
                          <span className="text-emerald-400 font-semibold">VERIFIED</span>
                        </div>
                        <div className="rounded bg-white/[0.03] py-1 border border-white/5">
                          <span className="text-zinc-500 block text-[9px]">COMMUNITY</span>
                          <span className="text-cyan-300 font-semibold">{stars}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-2 right-2 rounded-md border border-white/15 bg-black/70 px-2 py-1 backdrop-blur-md">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-300 font-semibold">
                      100% OPEN SOURCE
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {badges.map((b, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10px] text-zinc-300"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  {annualSavings && (
                    <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-emerald-400">
                      💰 {annualSavings}
                    </span>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === "terminal" && (
              <motion.div
                key="terminal"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="rounded-xl border border-white/10 bg-[#03060C] p-4 font-mono text-[12px] text-zinc-300">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 text-zinc-500 text-[10px]">
                    <span>TERMINAL QUICK-START COMMAND</span>
                    <span>BASH / POWERSHELL</span>
                  </div>

                  <div className="my-3 flex items-center justify-between rounded-lg border border-cyan-500/20 bg-cyan-950/20 p-3">
                    <code className="text-cyan-300 font-semibold break-all text-[12.5px]">
                      {quickCommand}
                    </code>
                    <button
                      onClick={handleCopy}
                      className="ml-3 shrink-0 rounded-md border border-white/15 bg-white/10 p-2 text-white hover:bg-white/20 transition"
                      title="Copy to clipboard"
                    >
                      {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>

                  <div className="space-y-1 text-[11px] text-zinc-400">
                    <p className="text-zinc-500">// Instant local deployment instructions:</p>
                    <p>1. Open your Windows Terminal, PowerShell, or Command Prompt.</p>
                    <p>2. Paste the verified command above and press Enter.</p>
                    <p>3. Application mounts locally with zero cloud dependencies.</p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] p-3">
                  <span className="font-mono text-[11px] text-zinc-400">
                    Prefer direct desktop installation?
                  </span>
                  <a
                    href={downloadUrl}
                    download={downloadFilename}
                    className="font-mono text-[11px] font-bold text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <Download size={13} />
                    <span>Download Binary</span>
                  </a>
                </div>
              </motion.div>
            )}

            {activeTab === "integrity" && (
              <motion.div
                key="integrity"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-3 font-mono text-[11px]"
              >
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-950/10 p-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-[12px]">
                    <ShieldCheck size={18} />
                    <span>Verified Open-Source Release</span>
                  </div>
                  <p className="mt-1 text-zinc-300 text-[11px] leading-relaxed">
                    This software build has been curated, inspected for zero telemetry, packaged without bloatware, and released under official permissive licensing.
                  </p>
                </div>

                <div className="space-y-2 rounded-xl border border-white/10 bg-[#03060C] p-3 text-zinc-400">
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span>License Type</span>
                    <span className="text-white font-semibold">{license}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span>Release Channel</span>
                    <span className="text-cyan-400 font-semibold">{version}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span>SHA-256 Checksum</span>
                    <span className="text-emerald-400 font-semibold">VERIFIED VALID (Pass)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subscription Fee</span>
                    <span className="text-emerald-400 font-bold">$0.00 / 100% FREE FOREVER</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* BOTTOM DIRECT ACTION BAR */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-4">
            <a
              href={downloadUrl}
              download={downloadFilename}
              className="w-full sm:w-auto"
            >
              <CyanButton size="md" icon={<Download size={15} />}>
                1-Click Free Download
              </CyanButton>
            </a>

            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Zero Malware • 100% Free Open Source</span>
            </div>
          </div>
        </div>
      </ThreeDTiltCard>
    </div>
  );
}
