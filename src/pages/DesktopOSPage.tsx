import { motion } from "framer-motion";
import {
  Mouse,
  FolderOpen,
  Cpu,
  Clipboard,
  FileSpreadsheet,
  ScanEye,
  Globe2,
  Download,
} from "lucide-react";
import { WindowsIcon } from "@/components/PlatformIcons";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import MiniHero from "@/components/inner/MiniHero";
import TerminalBlock from "@/components/inner/TerminalBlock";
import PageCTA from "@/components/inner/PageCTA";
import GradientText from "@/components/GradientText";
import SoftwareShowcase from "@/components/home/SoftwareShowcase";
import ModulesGrid from "@/components/home/ModulesGrid";

const CONTROL_GROUPS = [
  { label: "Mouse", items: ["Click", "Double-Click", "Right-Click", "Drag", "Scroll"] },
  { label: "Keys", items: ["Type Text", "Hotkeys", "Key Down/Up", "Ctrl+Alt+Del"] },
  { label: "Window", items: ["Focus", "Minimize", "Maximize", "Close", "Move"] },
  { label: "Files", items: ["Read File", "Write File", "Bulk Rename", "Open App"] },
  { label: "Office", items: ["Excel Write", "CSV Export", "Word Append", "Slides Read"] },
  { label: "Vision", items: ["Screenshot", "Image-to-Text", "Scan PDF", "Read Screen"] },
  { label: "Web", items: ["Open Site", "Find Tab", "Web Search", "Download Media"] },
];

const HANDLERS = [
  {
    icon: Mouse,
    color: "var(--cyan)",
    title: "Desktop Control",
    count: "20+ handlers",
    body: "Mouse movement, clicking, dragging, keyboard control, window focus, screen capture.",
  },
  {
    icon: FolderOpen,
    color: "var(--purple)",
    title: "File System",
    count: "15+ handlers",
    body: "Read, write, list directory, file picker, path validation, file watcher integration.",
  },
  {
    icon: Cpu,
    color: "var(--amber)",
    title: "Process Management",
    count: "8+ handlers",
    body: "Launch processes, kill tasks, monitor CPU/RAM, list running applications, check system health.",
  },
  {
    icon: Clipboard,
    color: "var(--pink)",
    title: "Clipboard & System",
    count: "7+ handlers",
    body: "Read/write clipboard, OS toast notifications, screen resolution, system info retrieval.",
  },
  {
    icon: FileSpreadsheet,
    color: "var(--green)",
    title: "Office & Reporting",
    count: "20+ actions",
    body: "Create and update spreadsheets, append rows and cells, export CSV, build Word documents, read slides and generate finished reports.",
  },
  {
    icon: ScanEye,
    color: "var(--cyan)",
    title: "Screen Vision & OCR",
    count: "12+ actions",
    body: "Capture the screen, pull text out of images and scans, read documents you point at and act on what it sees.",
  },
  {
    icon: Globe2,
    color: "var(--purple)",
    title: "Research & Browsing",
    count: "10+ actions",
    body: "Open websites, find and switch tabs, run live web research and summarise sources into a usable brief.",
  },
  {
    icon: Download,
    color: "var(--amber)",
    title: "Folders & Media",
    count: "15+ actions",
    body: "Analyse whole folders, process document batches, rename in bulk and download or convert media straight to the right place.",
  },
];

export default function DesktopOSPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-[60px] md:pt-[72px]"
    >
      <MiniHero
        eyebrow="Native Desktop Control"
        title="Your Desktop."
        gradientTitle="Your Command Center."
        subtitle="Built-in desktop automation tools. Pixel-perfect desktop control. Complete OS-level execution via voice command."
      />

      <SectionWrapper id="control-center">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="Desktop Control Center" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text-primary)] md:text-[42px]">
              Click, Type, Control — <GradientText>All by Voice.</GradientText>
            </h2>
            <p className="reveal-item delay-2 mt-5 max-w-[560px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              DIGI BIZ OS takes voice-triggered commands and controls any visible desktop element —
              click buttons, type text, manage windows, execute hotkeys, capture screenshots.
            </p>

            <div className="reveal-item delay-3 mt-8 space-y-4">
              {CONTROL_GROUPS.map((g) => (
                <div key={g.label} className="flex flex-wrap items-center gap-2">
                  <span className="w-[64px] shrink-0 font-code text-[12px] text-[var(--text-muted)]">
                    {g.label}
                  </span>
                  {g.items.map((item) => (
                    <MonoBadge key={item}>{item}</MonoBadge>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-item delay-2">
            <TerminalBlock
              lines={[
                {
                  text: '> voice_command: "Open Chrome and search AI news"',
                  color: "var(--text-primary)",
                },
                { text: "→ Opening your browser", color: "var(--cyan)" },
                { text: '→ Typing "AI news today"', color: "var(--cyan)" },
                { text: "→ Running the search", color: "var(--purple)" },
                { text: "✓ Executed in 1.2s", color: "var(--success)" },
              ]}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center">
            <EyebrowLabel text="Command Library" color="var(--purple)" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
              104+ Bridges to <GradientText>Total Control.</GradientText>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {HANDLERS.map((h, i) => (
              <GlassCard
                key={h.title}
                glowColor={h.color}
                className={`reveal-item delay-${i + 1} p-8`}
              >
                <h.icon size={30} color={h.color} strokeWidth={1.6} />
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-[21px] font-bold tracking-[-0.02em] text-[var(--text-primary)]">
                    {h.title}
                  </h3>
                  <MonoBadge color={h.color}>{h.count}</MonoBadge>
                </div>
                <p className="mt-3 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                  {h.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SoftwareShowcase />
      <ModulesGrid />

      <PageCTA
        title="One Voice. Total Desktop Domination."
        badges={["Instant Desktop Control", "Desktop Tools", "Windows · macOS soon"]}
        cta="Download for Windows"
        trackSource="desktop_os_cta"
        icon={<WindowsIcon size={17} />}
      />
    </motion.main>
  );
}
