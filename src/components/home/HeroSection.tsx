import JupiterGlobe from "@/components/JupiterGlobe";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
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
              Download for Windows 10/11
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

        {/* RIGHT — Jupiter globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="flex items-center justify-center lg:hidden"
        >
          <JupiterGlobe size={260} hideControls />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative hidden items-center justify-center lg:-ml-8 lg:flex"
        >
          <JupiterGlobe size={340} hideControls />
        </motion.div>
      </div>
    </section>
  );
}
