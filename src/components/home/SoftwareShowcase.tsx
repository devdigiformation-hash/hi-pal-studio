import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import digiMain from "@/assets/os-main-dashboard.png";
import digiActiveAgent from "@/assets/os-active-agent-search.png";
import digiLiveTracking from "@/assets/os-live-tracking-modal.png";
import digiAiChat from "@/assets/os-digi-ai-chat.png";
import digiAiImage from "@/assets/os-digi-ai-image.png";
import digiCrmDash from "@/assets/os-digi-crm-dashboard.png";
import digiCrmNav from "@/assets/os-digi-crm-navigation.png";
import digiCrmAccounts from "@/assets/os-digi-crm-accounts.png";
import digiFlow from "@/assets/os-digi-flow.png";
import digiIntelligence from "@/assets/os-digi-crm-intelligence.png";
import digiWhatsapp from "@/assets/os-digi-crm-whatsapp.png";
import digiMarketing from "@/assets/os-digi-marketing.png";
import digiStudioVideo from "@/assets/os-digi-studio-video-editor.png";
import digiStudioAvatar from "@/assets/os-digi-studio-avatar.png";
import digiStudioTranscript from "@/assets/os-digi-studio-transcript.png";
import digiStudioImage from "@/assets/os-digi-studio-image.png";
import digiStudioVoice from "@/assets/os-digi-studio-voice.png";
import digiCode from "@/assets/os-digi-code.png";
import digiSkills from "@/assets/os-skills.png";
import digiDesktopTools from "@/assets/os-desktop-tools.png";

const SLIDES = [
  {
    src: digiMain,
    tag: "Live OS Surface",
    title: "Your entire command surface in one unified desktop workspace.",
    body: "11 Core Business Apps, live particle visualizer, memory, skills, soul engine, camera, screen share, and multi-agent supervisor — all in one offline-first Windows OS.",
  },
  {
    src: digiActiveAgent,
    tag: "Live Execution & Vision",
    title: "Autonomous agents executing real browser research and computer tasks.",
    body: "Watch agents autonomously search, browse, extract data, and communicate via real-time multilingual voice transcripts while you supervise.",
  },
  {
    src: digiLiveTracking,
    tag: "Live Tracking & Transparency",
    title: "Complete audit trails with zero black-box mystery.",
    body: "Track every tool call, reasoning step, routing decision, and execution duration in real time with active, good, warning, and error counters.",
  },
  {
    src: digiAiChat,
    tag: "Digi AI — Chat & Reasoning",
    title: "Multi-model reasoning, autonomous task dispatch, and real-time chat.",
    body: "Switch between chat and image modes, load custom system personas, query internal knowledge, and dispatch autonomous multi-step agent routines with full privacy.",
  },
  {
    src: digiAiImage,
    tag: "Digi AI — Image Generation Studio",
    title: "Studio-grade photorealistic visual generation with instant prompt controls.",
    body: "Native high-resolution image synthesis with custom aspect ratios, style presets, negative prompts, seed controls, and an offline local gallery.",
  },
  {
    src: digiCrmDash,
    tag: "Digi CRM — Executive Overview",
    title: "Real-time revenue, orders, invoice pipelines, and lead intelligence.",
    body: "Live financial tracking, daily AI executive briefing toggles, order fulfillments, payment statuses, and instant WhatsApp lead sync in one unified command center.",
  },
  {
    src: digiCrmNav,
    tag: "Digi CRM — Complete Suite",
    title: "Comprehensive enterprise CRM with accounting, outreach, and database.",
    body: "From company formation and bank accounting to automated customer support, pipeline management, email campaigns, and direct database management.",
  },
  {
    src: digiCrmAccounts,
    tag: "Digi CRM — Financial Accounting & Ledger",
    title: "Complete offline financial command with live profit margins and tax tracking.",
    body: "Multi-currency ledger, 6-month income vs. expenses analytics, receivables tracking, instant expense logging, and one-click AI financial audit reports.",
  },
  {
    src: digiFlow,
    tag: "Digi Flow — Always-On Automations",
    title: "Autonomous business workflows that run 24/7 without intervention.",
    body: "Built-in automated routines for overdue invoice chaser, low-stock reorder alerts, stalled deal reminders, new-lead follow-ups, ticket escalation, and company transfers.",
  },
  {
    src: digiWhatsapp,
    tag: "Digi CRM — WhatsApp Autonomous Agent",
    title: "Instant QR pairing with 24/7 intelligent sales assistant.",
    body: "Direct mobile QR pairing, live communication logs, multi-number management, AI brain reasoning, and automated customer conversation pipelines.",
  },
  {
    src: digiIntelligence,
    tag: "Digi Intelligence — E-Commerce Research",
    title: "One-click 20-stage deep market analysis across major marketplaces.",
    body: "Automated multi-platform product and supplier hunting across Amazon, eBay, Etsy, Walmart, TikTok, and Shopify with historical research tracking.",
  },
  {
    src: digiStudioVideo,
    tag: "Digi Studio — Offline Video Editor",
    title: "Free CapCut alternative powered by local FFmpeg.",
    body: "Trim, crop, resize for Reels and Shorts, timeline control, speed ramp, add captions, background music, fades, color grading, format conversion — 100% offline with zero subscriptions.",
  },
  {
    src: digiStudioAvatar,
    tag: "Digi Studio — Avatar Intelligence",
    title: "Transform still face photos and audio into talking AI presenter videos.",
    body: "Upload face portraits, generate or record voice narrations, and create synchronized talking avatar videos locally with lightweight offline speech-to-motion engines.",
  },
  {
    src: digiStudioVoice,
    tag: "Digi Studio — Voice Intelligence & Audiobooks",
    title: "Human-grade multilingual text-to-speech studio with instant preview.",
    body: "Generate studio-quality voiceovers in English, Urdu, Hindi, Arabic, Persian, Pashto, Chinese, French and more. Convert full PDFs and long documents into audiobooks in one click.",
  },
  {
    src: digiStudioImage,
    tag: "Digi Studio — Image Intelligence & Photo Factory",
    title: "Automated batch photo studio with AI background removal and upscaling.",
    body: "Instant background removal, white background product prep, sharpen, denoise, 2x/4x AI upscaling, and grayscale conversion — stacked and processed completely offline.",
  },
  {
    src: digiStudioTranscript,
    tag: "Digi Studio — Transcript Intelligence & Course Maker",
    title: "Instant auto-fetching, Whisper audio transcription, and course synthesis.",
    body: "Paste any video or playlist link for zero-download instant text fetching, or upload media files for local Whisper transcription, structured study notes, and course generation.",
  },
  {
    src: digiMarketing,
    tag: "Digi Marketing — AI Compose & Ad Campaigns",
    title: "AI copy generation, flyer visual studio, and multi-channel publishing.",
    body: "Multi-platform post compose engine with instant AI ad copy generation, token quota counter, flyer attachments, business details injection, and scheduled social campaigns.",
  },
  {
    src: digiCode,
    tag: "Digi Code",
    title: "A coding agent that works inside your projects.",
    body: "Sessions, project and branch context, slash commands and @ references — point it at a repo or folder and it reasons, refactors and ships from one prompt bar.",
  },
  {
    src: digiSkills,
    tag: "Skills",
    title: "500+ skills, every one switchable.",
    body: "API calls, calculation, data analysis, document parsing, file transforms, web research and more — each skill shows its runner, its live status and a one-tap on/off.",
  },
  {
    src: digiDesktopTools,
    tag: "Mixed Tools",
    title: "200+ built-in tools that actually drive your machine.",
    body: "Folder analysis, screenshot understanding, bulk file operations and renames, clipboard, brightness, power and application control — real desktop automation, one switch each.",
  },
];

export default function SoftwareShowcase() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
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
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 2000);
    return () => clearInterval(t);
  }, [count]);

  const openLightbox = useCallback((i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const goLightbox = useCallback(
    (d: number) => {
      setLightboxIndex((i) => (i + d + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goLightbox(-1);
      if (e.key === "ArrowRight") goLightbox(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox, goLightbox]);

  const onLightboxSwipe = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) goLightbox(1);
    else if (info.offset.x > 60) goLightbox(-1);
  };

  const active = SLIDES[index];

  return (
    <SectionWrapper id="software">
      <div className="mx-auto max-w-6xl text-center">
        <EyebrowLabel text="Inside the OS" />
        <h2 className="mt-4 font-display text-[30px] font-bold leading-[1.1] md:text-[50px]">
          The Workspace That{" "}
          <GradientText from="#F5A623" to="#2FE0C8">
            Works While You Talk.
          </GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--text-secondary)] md:text-[17px]">
          Screen sharing, camera, memory, skills, multi agents and tools — exactly what runs on your
          desktop.
        </p>

        <div
          className="relative mt-12 select-none overflow-x-clip"
          style={{ perspective: "1800px" }}
        >
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[48px] opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(47,224,200,0.18), transparent 70%)",
            }}
          />

          <div className="relative mx-auto aspect-[16/9] w-full max-w-[340px] sm:max-w-xl md:max-w-3xl lg:max-w-5xl [transform-style:preserve-3d]">
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
                  className="absolute left-1/2 top-0 aspect-[16/9] w-[80%] origin-center cursor-pointer overflow-hidden rounded-[16px] border border-white/10 bg-[#05070B] p-1 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] md:w-[78%] md:rounded-[26px] md:p-2"
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
                  onClick={() => openLightbox(i)}
                >
                  <div className="relative flex h-full w-full items-start justify-center overflow-hidden rounded-[14px] bg-[#05070B] md:rounded-[20px]">
                    <img
                      src={s.src}
                      alt={`DIGI BIZ OS ${s.tag} screenshot — ${s.title}`}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full object-contain object-top"
                    />
                    {/* curved bottom mask hides OS taskbar while keeping screenshot un-zoomed */}
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[10%]"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(5,7,11,1) 0%, rgba(5,7,11,0.85) 45%, transparent 100%)",
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

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020408]/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot gallery"
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close gallery"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-[var(--text-primary)] transition hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goLightbox(-1);
              }}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-[var(--text-primary)] transition hover:bg-white/10 md:left-6 md:h-12 md:w-12"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goLightbox(1);
              }}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-[var(--text-primary)] transition hover:bg-white/10 md:right-6 md:h-12 md:w-12"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={onLightboxSwipe}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-6xl cursor-grab active:cursor-grabbing"
            >
              <img
                src={SLIDES[lightboxIndex].src}
                alt={`DIGI BIZ OS ${SLIDES[lightboxIndex].tag} screenshot — ${SLIDES[lightboxIndex].title}`}
                className="mx-auto max-h-[85vh] w-auto rounded-[18px] border border-white/10 bg-[#05070B] shadow-[0_0_80px_rgba(47,224,200,0.15)] object-contain"
              />
              <div className="mt-4 text-center">
                <span className="font-code text-[11px] uppercase tracking-[0.24em] text-[var(--cyan)]">
                  {SLIDES[lightboxIndex].tag}
                </span>
                <h3 className="mt-1 font-display text-[18px] font-bold text-[var(--text-primary)] md:text-[22px]">
                  {SLIDES[lightboxIndex].title}
                </h3>
              </div>
            </motion.div>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
              {SLIDES.map((s, i) => (
                <button
                  key={s.tag}
                  type="button"
                  aria-label={`Go to ${s.tag}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === lightboxIndex ? 22 : 8,
                    background: i === lightboxIndex ? "var(--cyan)" : "rgba(148,163,184,0.4)",
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
