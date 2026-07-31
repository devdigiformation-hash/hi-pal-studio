import JupiterGlobe from "@/components/JupiterGlobe";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Camera,
  Cpu,
  Monitor,
  Play,
  Smartphone,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";
import CyanButton from "@/components/CyanButton";
import { WindowsIcon } from "@/components/PlatformIcons";
import GhostButton from "@/components/GhostButton";
import PlatformStrip from "@/components/PlatformStrip";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";
import GradientText from "@/components/GradientText";

const HEADLINE = "Operate Your Desktop at the".split(" ");

const CYCLE = [
  "Your Desktop Moves.",
  "10+ Agents Execute.",
  "Automation Begins.",
  "Everything Changes.",
  "Work Transforms.",
  "The Future Runs.",
  "Empires Get Built.",
  "Your Company Runs Itself.",
  "Deadlines Disappear.",
  "Output Multiplies 10x.",
];

const PHRASES = [
  "Speed of Voice.",
  "Speed of Thought.",
  "Speed of Command.",
  "Speed of Intelligence.",
  "Speed of Execution.",
  "Speed of Ambition.",
];

const NODES = [
  { icon: Brain, label: "Memory", color: "#8B7CF6", angle: -115 },
  { icon: Sparkles, label: "Soul", color: "#2FE0C8", angle: -65 },
  { icon: Cpu, label: "Skills", color: "#3B82F6", angle: -20 },
  { icon: Smartphone, label: "Mobile", color: "#A855F7", angle: 20 },
  { icon: Camera, label: "Camera", color: "#C4B5FD", angle: 65 },
  { icon: Monitor, label: "Screen", color: "#F5A623", angle: 115 },
  { icon: Users, label: "Agent", color: "#F472B6", angle: 160 },
  { icon: Wrench, label: "Tools", color: "#7DD3FC", angle: 200 },
];



const BADGES = ["500+ AI Skills", "115+ Built-in Tools", "Multi-Agent Execution", "Multi-MCP Ready"];

function RotatingPhrase() {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    const hide = setTimeout(() => setOut(true), 3200);
    const swap = setTimeout(() => {
      setI((v) => (v + 1) % PHRASES.length);
      setOut(false);
    }, 3700);
    return () => {
      clearTimeout(hide);
      clearTimeout(swap);
    };
  }, [i]);

  const phrase = PHRASES[i];

  const longest = PHRASES.reduce((a, b) => (b.length > a.length ? b : a), PHRASES[0]);

  return (
    <span className="relative inline-grid align-bottom">
      {/* invisible sizer keeps layout stable — no reflow, no overlap */}
      <span aria-hidden className="invisible col-start-1 row-start-1">
        {longest}
      </span>
      <motion.span
        key={i}
        aria-live="polite"
        className="col-start-1 row-start-1"
        style={{
          backgroundImage: "linear-gradient(100deg, #2FE0C8, #8B7CF6)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        initial={{ opacity: 0, y: "0.35em", filter: "blur(8px)" }}
        animate={
          out
            ? { opacity: 0, y: "-0.3em", filter: "blur(8px)" }
            : { opacity: 1, y: 0, filter: "blur(0px)" }
        }
        transition={{ duration: out ? 0.3 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {phrase}
      </motion.span>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ x: "-120%" }}
        animate={{ x: "130%" }}
        transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(100deg, transparent 20%, rgba(255,255,255,0.35) 50%, transparent 80%)",
          mixBlendMode: "overlay",
        }}
      />
    </span>
  );
}

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const word = CYCLE[index];
    if (chars < word.length) {
      const t = setTimeout(() => setChars((c) => c + 1), 45);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setChars(0);
      setIndex((i) => (i + 1) % CYCLE.length);
    }, 2800);
    return () => clearTimeout(t);
  }, [chars, index]);

  return (
    <span className="font-display text-[17px] font-bold text-[var(--cyan)] md:text-[18px]">
      {CYCLE[index].slice(0, chars)}
      <span className="animate-caret">|</span>
    </span>
  );
}

export default function HeroSection() {
  const radius = 168;

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-6 py-24 md:px-10"
      style={{ background: "transparent" }}
    >
      {/* Layer A — radial glow mesh */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(47,224,200,0.06), transparent), radial-gradient(ellipse 50% 40% at 70% 60%, rgba(139,124,246,0.05), transparent)",
        }}
      />


      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 lg:grid-cols-[55%_45%]">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <ActivePulse />
            <span
              className="font-display text-[12px] font-semibold uppercase text-[var(--cyan)]"
              style={{ letterSpacing: "0.16em" }}
            >
              Live — Neural Engine Active
            </span>
          </motion.div>

          <h1 className="mt-5 font-display text-[36px] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] sm:text-[44px] md:text-[54px] lg:text-[60px] xl:text-[66px]">
            {HEADLINE.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.06, duration: 0.5 }}
                className="mr-[0.25em] inline-block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + HEADLINE.length * 0.06, duration: 0.5 }}
              className="inline-block"
              style={{ perspective: 800 }}
            >
              <RotatingPhrase />
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 font-body text-[17px] text-[var(--text-secondary)] md:text-[18px]"
          >
            One Voice Command. <Typewriter />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-5 max-w-[580px] font-body text-[16px] leading-[1.75] text-[var(--text-secondary)] md:text-[18px]"
          >
            DIGI BIZ OS turns your voice into execution — 500+ AI skills, 115+ built-in tools and
            collaborative AI agents that research, automate, engineer and deliver work for your
            business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <CyanButton size="lg" icon={<WindowsIcon size={17} />}>
              Download for Windows
            </CyanButton>
            <GhostButton size="lg" icon={<Play size={17} />}>
              Watch 60s Product Tour
            </GhostButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="mt-6"
          >
            <PlatformStrip />
          </motion.div>

          <div className="mt-6 flex flex-wrap gap-3">
            {BADGES.map((badge, i) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
              >
                <MonoBadge>{badge}</MonoBadge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — operations center */}
        <div className="relative hidden h-[440px] items-center justify-center self-start lg:flex">
          {/* Globe */}
          <div
            className="relative flex h-[200px] w-[200px] items-center justify-center rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(47,224,200,0.08), transparent 70%)",
              boxShadow: "0 0 0 1px rgba(47,224,200,0.1), 0 0 60px rgba(47,224,200,0.12)",
            }}
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <JupiterGlobe size={320} />
            </div>
            <div className="relative z-10 text-center">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-[150px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(6,10,16,0.88), rgba(6,10,16,0.55) 55%, transparent 78%)",
                }}
              />
              <div className="relative">
              <div className="font-code text-[13px] tracking-[0.18em] text-[var(--text-primary)]">
                DIGI BIZ OS
              </div>
              <div className="mt-2 flex items-center justify-center gap-2">
                <ActivePulse />
                <span className="font-code text-[11px] tracking-[0.16em] text-[var(--text-muted)]">
                  OPERATIONAL
                </span>
              </div>
              </div>
            </div>
          </div>

          {/* Nodes */}
          {NODES.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const Icon = n.icon;
            return (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.12 }}
                className="absolute flex flex-col items-center gap-1"
                style={{
                  left: `calc(50% + ${Math.cos(rad) * radius}px)`,
                  top: `calc(50% + ${Math.sin(rad) * radius}px)`,
                  transform: "translate(-50%,-50%)",
                }}
              >
                <div
                  className="animate-float flex h-14 w-14 items-center justify-center rounded-full border backdrop-blur-xl"
                  style={{
                    background: "var(--bg-glass)",
                    borderColor: "var(--border-glass)",
                    boxShadow: `0 0 26px ${n.color}33`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                >
                  <Icon size={22} color={n.color} strokeWidth={1.6} />
                </div>
                <span className="font-display text-[11px] font-medium text-[var(--text-secondary)]">
                  {n.label}
                </span>
              </motion.div>
            );
          })}

          {/* Floating mini stat */}
          <div
            className="animate-float-updown absolute bottom-4 right-4 rounded-[var(--r-md)] border border-[var(--border-glass)] px-4 py-3 backdrop-blur-xl"
            style={{ background: "var(--bg-glass)", boxShadow: "var(--shadow-glass)" }}
          >
            <div className="font-display text-[12px] font-semibold text-[var(--text-primary)]">
              Agents Active
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-code text-[12px] text-[var(--cyan)]">10+ agents</span>
              <span className="flex gap-1">
                {[0, 1, 2].map((d) => (
                  <ActivePulse key={d} size={6} />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
