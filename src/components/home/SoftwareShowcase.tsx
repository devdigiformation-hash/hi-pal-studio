import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import digiMain from "@/assets/os-main-dashboard.png.asset.json";
import digiAiHub from "@/assets/os-digi-ai-hub.png.asset.json";
import digiCode from "@/assets/os-digi-code.png.asset.json";
import digiDocs from "@/assets/os-digi-docs.png.asset.json";
import digiTools from "@/assets/os-digi-tools.png.asset.json";
import digiCli from "@/assets/os-digi-cli.png.asset.json";
import digiMcp from "@/assets/os-digi-mcp.png.asset.json";
import digiSkills from "@/assets/os-skills.png.asset.json";
import digiDesktopTools from "@/assets/os-desktop-tools.png.asset.json";

const SLIDES = [
  {
    src: digiMain.url,
    tag: "Live OS",
    title: "Your entire command surface in one place.",
    body: "Screen sharing, live transcript, memory, skills, agents, tools and camera — all orbiting a single voice-first workspace that works while you talk.",
  },
  {
    src: digiAiHub.url,
    tag: "Digi AI Hub",
    title: "Chat, code, personas and agents in one playground.",
    body: "Agent project assistant, multi-model chat, coding assistant, persona manager, providers and app store — everything unified behind one clean interface.",
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
    tag: "Mixed Tools",
    title: "150+ built-in tools that actually drive your machine.",
    body: "Folder analysis, screenshot understanding, bulk file operations and renames, clipboard, brightness, power and application control — real desktop automation, one switch each.",
  },
];

export default function SoftwareShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const count = SLIDES.length;

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const go = useCallback((d: number) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 2000);
    return () => clearInterval(t);
  }, [paused, count]);

  const active = SLIDES[index];

  return (
    <SectionWrapper id="software">
      <div className="mx-auto max-w-6xl text-center">
        <EyebrowLabel text="Inside the OS" />
        <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.1] md:text-[50px]">
          The Workspace That <GradientText from="#F5A623" to="#2FE0C8">Works While You Talk.</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-[17px]">
          Screen sharing, camera, memory, skills, multi agents and tools — exactly what runs on
          your desktop.
        </p>

        <div className="relative mt-12 select-none overflow-x-clip" style={{ perspective: "1800px" }}>
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[48px] opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(47,224,200,0.18), transparent 70%)",
            }}
          />

          <div
            className="relative mx-auto aspect-[16/9] w-full max-w-[340px] sm:max-w-xl md:max-w-3xl lg:max-w-5xl [transform-style:preserve-3d]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {SLIDES.map((s, i) => {
              let off = i - index;
              if (off > count / 2) off -= count;
              if (off < -count / 2) off += count;
              const abs = Math.abs(off);
              const hidden = abs > 1;
              return (
                <motion.div
                  key={s.src}
                  aria-hidden={off !== 0}
                  className="absolute left-1/2 top-0 aspect-[16/9] w-[80%] origin-center overflow-hidden rounded-[16px] border border-white/10 bg-[#05070B] p-1 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] md:w-[78%] md:rounded-[26px] md:p-2"
                  style={{ transformStyle: "preserve-3d", marginLeft: "-40%" }}
                  animate={{
                    x: isMobile ? `${off * 80}%` : `${off * 58}%`,
                    scale: off === 0 ? 1 : isMobile ? 0.82 : 0.76,
                    rotateY: isMobile ? off * -12 : off * -20,
                    opacity: hidden ? 0 : off === 0 ? 1 : 0.4,
                    filter: off === 0 ? "blur(0px)" : "blur(3px)",
                    zIndex: 10 - abs,
                  }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => off !== 0 && go(off)}
                >
                  <div className="relative flex h-full w-full items-start justify-center overflow-hidden rounded-[14px] bg-[#05070B] md:rounded-[20px]">
                    <img
                      src={s.src}
                      alt={`DIGI BIZ OS — ${s.title}`}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full object-contain object-top"
                    />
                    {/* curved bottom mask hides OS taskbar while keeping screenshot un-zoomed */}
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[10%]"
                      style={{
                        background: "linear-gradient(to top, rgba(5,7,11,1) 0%, rgba(5,7,11,0.85) 45%, transparent 100%)",
                        borderRadius: "0 0 14px 14px",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mx-auto mt-6 min-h-[140px] max-w-2xl px-1 sm:min-h-[120px] md:mt-8">
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
                <h3 className="mt-2 font-display text-[17px] font-bold leading-snug text-[var(--text-primary)] md:text-[24px]">
                  {active.title}
                </h3>
                <p className="mt-2 font-body text-[13px] leading-[1.7] text-[var(--text-secondary)] md:text-[14px]">
                  {active.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 md:gap-4">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--border-glass)] bg-[var(--bg-glass-light)] text-[var(--text-secondary)] backdrop-blur-xl transition hover:border-[var(--cyan-border)] hover:text-[var(--cyan)] md:h-10 md:w-10"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex max-w-[60vw] flex-wrap items-center justify-center gap-1.5 md:max-w-none md:gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.tag}
                  type="button"
                  aria-label={`Go to ${s.tag}`}
                  onClick={() => setIndex(i)}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === index ? 22 : 8,
                    background: i === index ? "var(--cyan)" : "rgba(148,163,184,0.3)",
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[var(--border-glass)] bg-[var(--bg-glass-light)] text-[var(--text-secondary)] backdrop-blur-xl transition hover:border-[var(--cyan-border)] hover:text-[var(--cyan)] md:h-10 md:w-10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}