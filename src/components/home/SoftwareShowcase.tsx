import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import shell from "@/assets/os-shell.png.asset.json";
import sidebar from "@/assets/os-sidebar.png.asset.json";
import graph from "@/assets/os-graph.png.asset.json";
import transcript from "@/assets/os-transcript.png.asset.json";
import runtime from "@/assets/os-runtime.png.asset.json";
import liveTracking from "@/assets/os-live-tracking.png.asset.json";
import digiAi from "@/assets/os-digi-ai.png.asset.json";
import digiCode from "@/assets/os-digi-code.png.asset.json";
import digiDocs from "@/assets/os-digi-docs.png.asset.json";
import digiTools from "@/assets/os-digi-tools.png.asset.json";
import digiCli from "@/assets/os-digi-cli.png.asset.json";
import digiMcp from "@/assets/os-digi-mcp.png.asset.json";
import digiSkills from "@/assets/os-skills.png.asset.json";
import digiDesktopTools from "@/assets/os-desktop-tools.png.asset.json";

const SLIDES = [
  {
    src: shell.url,
    tag: "The Workspace",
    title: "One console. Voice, vision and agents.",
    body: "Core apps, intelligence, automation and connectivity — all inside a single dark-glass workspace you control by speaking.",
  },
  {
    src: sidebar.url,
    tag: "Core Apps",
    title: "Digi AI · Code · Docs · Tools · Flow · Jobs",
    body: "Live Tracking, intelligence apps, automation and connectivity grouped in one command rail — every module a spoken command away.",
  },
  {
    src: graph.url,
    tag: "Neural Graph",
    title: "Memory, Soul, Skills and Mobile — wired live.",
    body: "Watch context flow between memory, skills, camera, screen share, agents and tools while the assistant works.",
  },
  {
    src: transcript.url,
    tag: "Live Transcript",
    title: "Bilingual conversation, captured in real time.",
    body: "Every spoken instruction and reply streams into a searchable transcript — English and Urdu, side by side.",
  },
  {
    src: runtime.url,
    tag: "Runtime",
    title: "See exactly what it is doing.",
    body: "Listening state, running tasks, screen checks and active tools reported live while sessions execute.",
  },
  {
    src: liveTracking.url,
    tag: "Live Tracking",
    title: "Every action of the session, on one timeline.",
    body: "Live events and tasks with reasoning, routing, execution, I/O and lifecycle filters — real events only, nothing simulated.",
  },
  {
    src: digiAi.url,
    tag: "Digi AI",
    title: "Chat, personas, agents and coding in one playground.",
    body: "Multi-turn chat with any model, an agent that plans tasks and writes code, custom personas, provider control and a 40+ mini app store — all in one workspace.",
  },
  {
    src: digiCode.url,
    tag: "Digi Code",
    title: "A coding agent that works inside your projects.",
    body: "Sessions, project and branch context, slash commands and @ references — point it at a repo or folder and it reasons, refactors and ships from one prompt bar.",
  },
  {
    src: digiDocs.url,
    tag: "Digi Docs",
    title: "A full document suite, offline and on your machine.",
    body: "Merge, compare, compress, convert, OCR, redact, sign, timestamp, password-protect and watermark — every document tool one search away.",
  },
  {
    src: digiTools.url,
    tag: "Digi Tools",
    title: "100+ offline utilities, always at hand.",
    body: "Crypto, encoding, converters, generators and analysers — searchable, favouritable and fully offline, so nothing you paste ever leaves the machine.",
  },
  {
    src: digiCli.url,
    tag: "Digi CLI",
    title: "Connect local runners and toggle them live.",
    body: "Script runners, version control, document parsing, retrieval and web research — each connection on, off or added in a click, with capabilities listed up front.",
  },
  {
    src: digiMcp.url,
    tag: "Digi MCP",
    title: "Multi-MCP ready — 40+ servers, one switchboard.",
    body: "Desktop automation, research, browsing, documentation and private routing servers imported and toggled live, so your agents gain new powers instantly.",
  },
  {
    src: digiSkills.url,
    tag: "Skills",
    title: "500+ skills, every one switchable.",
    body: "API calls, calculation, data analysis, document parsing, file transforms, web research and more — each skill shows its runner, its live status and a one-tap on/off.",
  },
  {
    src: digiDesktopTools.url,
    tag: "Desktop Tools",
    title: "150+ built-in tools that actually drive your machine.",
    body: "Folder analysis, screenshot understanding, bulk file operations and renames, clipboard, brightness, power and application control — real desktop automation, one switch each.",
  },
];

export default function SoftwareShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = SLIDES.length;

  const go = useCallback((d: number) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 5200);
    return () => clearInterval(t);
  }, [paused, count]);

  const active = SLIDES[index];

  return (
    <SectionWrapper id="software">
      <div className="mx-auto max-w-6xl text-center">
        <EyebrowLabel text="Inside the OS" />
        <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.1] md:text-[50px]">
          The <GradientText>live workspace</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-[17px]">
          Screen sharing, camera, memory, skills, multi agents and tools — exactly what runs on
          your desktop.
        </p>

        <div
          className="relative mt-12 select-none"
          style={{ perspective: "1800px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[48px] opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(47,224,200,0.18), transparent 70%)",
            }}
          />

          <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl [transform-style:preserve-3d]">
            {SLIDES.map((s, i) => {
              let off = i - index;
              if (off > count / 2) off -= count;
              if (off < -count / 2) off += count;
              const abs = Math.abs(off);
              const hidden = abs > 2;
              return (
                <motion.div
                  key={s.src}
                  aria-hidden={off !== 0}
                  className="absolute inset-0 origin-center overflow-hidden rounded-[22px] border border-white/10 bg-[var(--bg-glass)] p-1.5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl md:rounded-[30px] md:p-2.5"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{
                    x: `${off * 26}%`,
                    scale: off === 0 ? 1 : 1 - abs * 0.12,
                    rotateY: off * -22,
                    opacity: hidden ? 0 : off === 0 ? 1 : 0.45,
                    filter: off === 0 ? "blur(0px)" : "blur(2px)",
                    zIndex: 10 - abs,
                  }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => off !== 0 && go(off)}
                >
                  <img
                    src={s.src}
                    alt={`DIGI BIZ OS — ${s.title}`}
                    loading="lazy"
                    draggable={false}
                    className="block h-full w-full rounded-[16px] object-cover md:rounded-[22px]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[22px] md:rounded-[30px]"
                    style={{
                      background:
                        "linear-gradient(160deg, rgba(255,255,255,0.10), transparent 38%)",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="mx-auto mt-8 min-h-[110px] max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.tag}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="font-code text-[11px] uppercase tracking-[0.24em] text-[var(--cyan)]">
                  {active.tag}
                </span>
                <h3 className="mt-2 font-display text-[19px] font-bold text-[var(--text-primary)] md:text-[24px]">
                  {active.title}
                </h3>
                <p className="mt-2 font-body text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                  {active.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border-glass)] bg-[var(--bg-glass-light)] text-[var(--text-secondary)] backdrop-blur-xl transition hover:border-[var(--cyan-border)] hover:text-[var(--cyan)]"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.tag}
                  type="button"
                  aria-label={`Go to ${s.tag}`}
                  onClick={() => setIndex(i)}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === index ? 28 : 10,
                    background: i === index ? "var(--cyan)" : "rgba(148,163,184,0.3)",
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--border-glass)] bg-[var(--bg-glass-light)] text-[var(--text-secondary)] backdrop-blur-xl transition hover:border-[var(--cyan-border)] hover:text-[var(--cyan)]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}