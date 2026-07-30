import { Download, Play } from "lucide-react";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import MonoBadge from "@/components/MonoBadge";

const DOTS = [
  { left: "12%", top: "22%", color: "#2FE0C8" },
  { left: "82%", top: "18%", color: "#8B7CF6" },
  { left: "24%", top: "76%", color: "#F5A623" },
  { left: "70%", top: "80%", color: "#F472B6" },
  { left: "50%", top: "10%", color: "#7DD3FC" },
];

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden px-6 py-[100px] md:px-10"
      style={{
        background:
          "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(47,224,200,0.10), transparent), radial-gradient(ellipse 50% 50% at 70% 80%, rgba(139,124,246,0.09), transparent), var(--bg-base)",
      }}
    >
      {DOTS.map((d, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute h-2 w-2 rounded-full"
          style={{
            left: d.left,
            top: d.top,
            background: d.color,
            opacity: 0.4,
            animation: `particleDrift ${14 + i * 3}s ease-in-out ${i * 0.7}s infinite`,
          }}
        />
      ))}

      <div
        className="animate-liquid-border relative mx-auto max-w-[900px] rounded-[var(--r-xl)] p-px"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(47,224,200,0.55), rgba(139,124,246,0.45), rgba(47,224,200,0.55))",
          boxShadow: "var(--glow-cyan)",
        }}
      >
        <div
          className="rounded-[var(--r-xl)] px-8 py-14 text-center backdrop-blur-2xl md:px-16 md:py-20"
          style={{ background: "var(--bg-glass-heavy)" }}
        >
          <EyebrowLabel text="Get Started Today" />
          <h2 className="mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-[-0.03em] md:text-[48px]">
            <GradientText from="#2FE0C8" to="#8B7CF6">
              Ready to Transform How You Work on Desktop?
            </GradientText>
          </h2>
          <p className="mx-auto mt-6 max-w-[560px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)] md:text-[16px]">
            Join hundreds of power users who have replaced manual clicks with voice commands.
            Download DIGI BIZ OS and experience autonomous desktop AI today.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CyanButton size="lg" icon={<Download size={18} />}>
              Download for Windows / Mac
            </CyanButton>
            <GhostButton size="lg" icon={<Play size={17} />}>
              Watch Product Demo
            </GhostButton>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <MonoBadge>Free to Start</MonoBadge>
            <MonoBadge>No Credit Card</MonoBadge>
            <MonoBadge>Local &amp; Private</MonoBadge>
          </div>
        </div>
      </div>
    </section>
  );
}
