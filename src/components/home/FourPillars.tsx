import { Eye, Mic, Monitor, Network, type LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";

interface Pillar {
  icon: LucideIcon;
  color: string;
  title: string;
  body: string;
  badge: string;
  bullets: string[];
  wave?: boolean;
}

const PILLARS: Pillar[] = [
  {
    icon: Mic,
    color: "var(--cyan)",
    title: "Zero-Latency Voice Control",
    body: "Continuous 2-way live speech streaming. Speak naturally — your desktop responds in <200ms. No more typing. Just talk.",
    badge: "Voice-First Execution",
    bullets: [
      "Hands-free wake word activation",
      "Custom AI persona",
      "Real-time audio waveform visualization",
    ],
    wave: true,
  },
  {
    icon: Monitor,
    color: "var(--purple)",
    title: "Native Desktop Execution",
    body: "DIGI BIZ OS works your desktop the way you do — opening apps, clicking, typing, managing windows and handling files, all by voice.",
    badge: "115+ Built-in Tools · 500+ AI Skills",
    bullets: ["Real mouse & keyboard control", "Window focus management", "Full file system operations"],
  },
  {
    icon: Eye,
    color: "var(--amber)",
    title: "Real-Time Screen & Camera Vision",
    body: "Share your screen or camera and DIGI BIZ OS sees exactly what you see — enabling live review, guidance and instant visual analysis.",
    badge: "Screen Sharing · Camera Support",
    bullets: ["Live screen sharing", "Webcam multimodal input", "Instant visual analysis"],
  },
  {
    icon: Network,
    color: "var(--pink)",
    title: "10+ Agent Parallel Execution",
    body: "One command puts a team of specialised AI agents to work at once — research, engineering, data, outreach and automation, all running in parallel.",
    badge: "Agents · Multi-Agent Platform",
    bullets: ["Concurrent agent execution", "Professional CLI workspace", "Built-in browser automation"],
  },
];

export default function FourPillars() {
  return (
    <SectionWrapper id="pillars">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="Core Intelligence Pillars" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[34px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[48px]">
            Four Systems. One Unified OS.
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-5 max-w-[600px] font-body text-[15px] leading-[1.75] text-[var(--text-secondary)] md:text-[16px]">
            Every pillar works in concert — voice triggers vision, vision directs agents, agents
            execute on your desktop.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className={`reveal-item delay-${i + 1}`}>
                <GlassCard glowColor={p.color} className="h-full p-8">
                  <div className="flex items-center gap-3">
                    <Icon size={44} color={p.color} strokeWidth={1.4} />
                    {p.wave ? (
                      <span className="flex h-8 items-end gap-1">
                        {[0, 1, 2, 3, 4].map((b) => (
                          <span
                            key={b}
                            className="animate-wave-bar w-[3px] rounded-full"
                            style={{
                              height: 20,
                              background: p.color,
                              animationDelay: `${b * 0.12}s`,
                            }}
                          />
                        ))}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-6 font-display text-[20px] font-bold leading-tight text-[var(--text-primary)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                    {p.body}
                  </p>
                  <div className="mt-5">
                    <MonoBadge color={p.color}>{p.badge}</MonoBadge>
                  </div>
                  <ul className="mt-5 space-y-2">
                    {p.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 font-body text-[13px] text-[var(--text-muted)]"
                      >
                        <span className="text-[var(--cyan)]">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
