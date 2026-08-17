import JupiterGlobe from "@/components/JupiterGlobe";
import { Link } from "@tanstack/react-router";
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

const PREFIXES = [
  "Control Your Business",
  "Control Your PC",
  "Operate Your Business",
  "Command Your Workspace",
];

const CYCLE = [
  "Control your PC with voice.",
  "Automate your business with voice.",
  "Run operations hands-free.",
  "Deploy AI agents instantly.",
  "One command. Infinite output.",
];

const PHRASES = [
  "With Voice.",
  "With AI.",
  "Hands-Free.",
  "At Light Speed.",
  "Around the Clock.",
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



const BADGES = ["500+ AI Skills", "150+ Mixed Tools", "Multi-Agent Execution", "Multi-MCP Ready"];

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
        className="col-start-1 row-start-1 bg-gradient-to-r from-[#2FE0C8] to-[#8B7CF6] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: "0.35em" }}
        animate={out ? { opacity: 0, y: "-0.3em" } : { opacity: 1, y: 0 }}
        transition={{ duration: out ? 0.3 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {phrase}
      </motion.span>
    </span>
  );
}

function RotatingPrefix() {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    const hide = setTimeout(() => setOut(true), 4500);
    const swap = setTimeout(() => {
      setI((v) => (v + 1) % PREFIXES.length);
      setOut(false);
    }, 5000);
    return () => {
      clearTimeout(hide);
      clearTimeout(swap);
    };
  }, [i]);

  return (
    <motion.span
      key={i}
      aria-live="polite"
      className="inline-block whitespace-pre"
      initial={{ opacity: 0, y: "0.3em" }}
      animate={out ? { opacity: 0, y: "-0.25em" } : { opacity: 1, y: 0 }}
      transition={{ duration: out ? 0.3 : 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {PREFIXES[i]}{" "}
    </motion.span>
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
  const radius = 200;

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:min-h-[92vh] lg:py-24"
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


      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
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
              Live — Voice-Powered Business OS
            </span>
          </motion.div>

          <h1 className="mt-5 font-display text-[36px] font-bold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] sm:text-[44px] md:text-[54px] lg:text-[60px] xl:text-[66px]">
            <RotatingPrefix />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
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
            DIGI BIZ OS turns your voice into a full business operating system — 500+ AI skills,
            150+ built-in mixed tools and collaborative AI agents that research, automate and
            deliver work for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <div className="relative w-auto">
              <Link to="/download" onClick={() => trackDownload("hero_windows")}>
                <CyanButton
                  size="sm"
                  icon={<WindowsIcon size={15} />}
                  className="px-3.5 text-[12px] sm:px-6 sm:py-[11px] sm:text-[14px]"
                >
                  Download for Windows
                </CyanButton>
              </Link>
              <span
                className="pointer-events-none absolute -top-1.5 right-0 rounded-full border px-1.5 py-[1px] font-mono text-[8px] uppercase tracking-[0.14em] backdrop-blur-md sm:-right-1.5"
                style={{
                  color: "#B8C0CC",
                  borderColor: "rgba(184,192,204,0.45)",
                  background: "rgba(184,192,204,0.14)",
                }}
              >
                Windows 10, 11
              </span>
            </div>
            <GhostButton
              size="sm"
              tone="139,124,246"
              icon={<Play size={15} />}
              className="px-3.5 text-[12px] sm:px-6 sm:py-[11px] sm:text-[14px]"
            >
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

          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
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
        {/* Compact globe for mobile + tablet */}
        <div className="flex items-center justify-center lg:hidden">
          <div className="relative flex h-[340px] w-[340px] items-center justify-center sm:h-[400px] sm:w-[400px]">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <JupiterGlobe size={170} />
            </div>
            {/* Orbiting nodes — same solar-system design as desktop */}
            <div className="animate-orbit-spin pointer-events-none absolute inset-0">
              {NODES.map((n, i) => {
                const rad = (n.angle * Math.PI) / 180;
                const Icon = n.icon;
                const r = 115;
                return (
                  <div
                    key={`m-${n.label}`}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${Math.cos(rad) * r}px)`,
                      top: `calc(50% + ${Math.sin(rad) * r}px)`,
                      transform: "translate(-50%,-50%)",
                    }}
                  >
                    <div className="animate-orbit-spin-rev flex flex-col items-center gap-1">
                      <div
                        className="animate-float flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-xl"
                        style={{
                          background: "var(--bg-glass)",
                          borderColor: "var(--border-glass)",
                          boxShadow: `0 0 18px ${n.color}33`,
                          animationDelay: `${i * 0.4}s`,
                        }}
                      >
                        <Icon size={15} color={n.color} strokeWidth={1.6} />
                      </div>
                      <span className="font-display text-[9px] font-medium text-[var(--text-secondary)]">
                        {n.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative hidden h-[520px] items-center justify-center self-start lg:flex lg:-ml-8">
          {/* Globe */}
          <div className="pointer-events-none relative flex items-center justify-center">
            <JupiterGlobe size={280} />
          </div>

          {/* Nodes — orbiting like a solar system */}
          <div className="animate-orbit-spin pointer-events-none absolute inset-0">
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
                className="absolute"
                style={{
                  left: `calc(50% + ${Math.cos(rad) * radius}px)`,
                  top: `calc(50% + ${Math.sin(rad) * radius}px)`,
                  transform: "translate(-50%,-50%)",
                }}
              >
                <div className="animate-orbit-spin-rev flex flex-col items-center gap-1">
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
                </div>
              </motion.div>
            );
          })}
          </div>

          {/* Floating mini stat */}
          <div
            className="animate-float-updown absolute bottom-4 right-4 rounded-[var(--r-md)] border border-[var(--border-glass)] px-4 py-3 backdrop-blur-xl"
            style={{ background: "var(--bg-glass)", boxShadow: "var(--shadow-glass)" }}
          >
            <div className="font-display text-[12px] font-semibold text-[var(--text-primary)]">
              Agents Active
            </div>
            <div className="mt-1 flex items-center gap-2">
              <span className="font-code text-[12px] text-[var(--cyan)]">multi agents</span>
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
