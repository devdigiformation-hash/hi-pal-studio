import { motion } from "framer-motion";
import { Mouse, FolderOpen, Cpu, Clipboard, Download } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import MiniHero from "@/components/inner/MiniHero";
import TerminalBlock from "@/components/inner/TerminalBlock";
import PageCTA from "@/components/inner/PageCTA";

const CONTROL_GROUPS = [
  { label: "Mouse", items: ["Click", "Double-Click", "Right-Click", "Drag", "Scroll"] },
  { label: "Keys", items: ["Type Text", "Hotkeys", "Key Down/Up", "Ctrl+Alt+Del"] },
  { label: "Window", items: ["Focus", "Minimize", "Maximize", "Close", "Move"] },
  { label: "Files", items: ["Read File", "Write File", "List Dir", "Open App"] },
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
        gradientTitle="Fully Automated."
        subtitle="104+ IPC handlers. PyAutoGUI precision. Complete OS-level execution via voice command."
      />

      <SectionWrapper id="control-center">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="PyAutoGUI Control Center" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[30px] font-bold leading-[1.15] tracking-[-0.03em] text-[var(--text-primary)] md:text-[42px]">
              Click. Type. Control. Any App. By Voice.
            </h2>
            <p className="reveal-item delay-2 mt-5 max-w-[560px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              The Python desktop agent runs on Port 8765, accepting voice-triggered commands to
              control any visible desktop element — click buttons, type text, manage windows,
              execute hotkeys, capture screenshots.
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
                { text: '> voice_command: "Open Chrome and search AI news"', color: "var(--text-primary)" },
                { text: '[IPC] desktop.launchProcess("chrome.exe")', color: "var(--cyan)" },
                { text: '[IPC] keyboard.typeText("AI news today")', color: "var(--cyan)" },
                { text: '[IPC] keyboard.pressKey("Enter")', color: "var(--purple)" },
                { text: "✓ Executed in 1.2s", color: "var(--success)" },
              ]}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center">
            <EyebrowLabel text="IPC Handler Registry" color="var(--purple)" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
              104+ Native System Bridges.
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

      <PageCTA
        title="One Voice. Total Desktop Mastery."
        badges={["Port 8765 Agent", "104+ IPC Handlers", "Windows · macOS"]}
        cta="Download Desktop OS"
        icon={<Download size={18} />}
      />
    </motion.main>
  );
}