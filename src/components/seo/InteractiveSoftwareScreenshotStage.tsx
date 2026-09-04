
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  Minimize2,
  Info,
  CheckCircle2,
  Cpu,
  Shield,
  Layers,
  Zap,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
} from "lucide-react";
import ThreeDTiltCard from "@/components/ui/ThreeDTiltCard";

export interface ScreenshotPin {
  id: string;
  x: string; // percentage e.g. "25%"
  y: string; // percentage e.g. "40%"
  title: string;
  category: string;
  description: string;
  tag: string;
}

export interface ScreenshotItem {
  id?: string;
  src: string;
  title: string;
  subtitle?: string;
  caption?: string;
  alt?: string;
  pins?: ScreenshotPin[];
}

interface Props {
  src?: string;
  alt?: string;
  caption?: string;
  accentColor?: string;
  pins?: ScreenshotPin[];
  screenshots?: ScreenshotItem[];
}

const DEFAULT_PINS: ScreenshotPin[] = [
  {
    id: "pin-brain",
    x: "28%",
    y: "22%",
    title: "Active AI Reasoning Core",
    category: "Neural Backend",
    description: "Multi-model reasoning engine (DeepSeek, Claude, or local Ollama) dynamically coordinating workflow parameters.",
    tag: "90%+ AI Integrated",
  },
  {
    id: "pin-voice",
    x: "72%",
    y: "18%",
    title: "Universal Voice Assistant",
    category: "Speech Engine",
    description: "Direct offline speech-to-intent engine embedded into the prompt box. Speak commands instead of typing.",
    tag: "Zero Latency Voice",
  },
  {
    id: "pin-actions",
    x: "52%",
    y: "55%",
    title: "1-Click Trigger Hub",
    category: "Instant Automation",
    description: "Pre-configured execution triggers advance pipeline statuses, issue invoices, and dispatch communications.",
    tag: "Zero-Click Flow",
  },
  {
    id: "pin-sqlite",
    x: "18%",
    y: "78%",
    title: "Local Sovereign Database",
    category: "Encrypted Storage",
    description: "All client records, media files, and ledger entries are stored strictly on your local PC disk in SQLite.",
    tag: "100% Air-Gapped",
  },
];

export default function InteractiveSoftwareScreenshotStage({
  src,
  alt,
  caption,
  accentColor = "var(--cyan)",
  pins = DEFAULT_PINS,
  screenshots,
}: Props) {
  // Normalize items list
  const items: ScreenshotItem[] = useMemo(() => {
    if (screenshots && screenshots.length > 0) {
      return screenshots;
    }
    if (src) {
      return [
        {
          id: "single-1",
          src,
          title: alt || "Software Interface",
          alt: alt || "DIGI BIZ OS Interface",
          caption,
          pins,
        },
      ];
    }
    return [];
  }, [screenshots, src, alt, caption, pins]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activePin, setActivePin] = useState<ScreenshotPin | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (items.length === 0) return null;

  const currentItem = items[activeIndex] || items[0];
  const currentPins = currentItem.pins || pins;
  const hasMultiple = items.length > 1;

  const goNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActivePin(null);
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const goPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActivePin(null);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative mx-auto max-w-[1140px]">
      {/* AMBIENT AURORA BACKDROP */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] opacity-70 blur-3xl transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse 65% 55% at 50% 45%, ${accentColor}25, transparent 70%), radial-gradient(ellipse 50% 50% at 75% 65%, rgba(139,124,246,0.2), transparent 70%)`,
        }}
      />

      {/* MULTI-SCREENSHOT TABS SELECTOR (WHEN 2+ SCREENSHOTS EXIST) */}
      {hasMultiple && (
        <div className="mb-4">
          <div className="flex items-center justify-between gap-3 px-2 pb-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full animate-pulse" style={{ background: accentColor }} />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Module Interface Views ({items.length} High-Res Screenshots Available)
              </span>
            </div>
            <span className="font-mono text-[11px] text-[var(--text-muted)]">
              Showing View {activeIndex + 1} of {items.length}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 px-1">
            {items.map((item, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={item.id || idx}
                  onClick={() => {
                    setActivePin(null);
                    setActiveIndex(idx);
                  }}
                  className="group relative flex items-center gap-2.5 rounded-xl border px-3.5 py-2 font-display text-[13px] font-semibold transition-all duration-200"
                  style={{
                    borderColor: isSelected ? accentColor : "rgba(255,255,255,0.1)",
                    background: isSelected ? `${accentColor}18` : "rgba(255,255,255,0.03)",
                    color: isSelected ? "#FFFFFF" : "var(--text-secondary)",
                    boxShadow: isSelected ? `0 0 20px -5px ${accentColor}40` : "none",
                  }}
                >
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-md font-mono text-[11px] font-bold transition-transform group-hover:scale-110"
                    style={{
                      background: isSelected ? accentColor : "rgba(255,255,255,0.08)",
                      color: isSelected ? "#050810" : "var(--text-secondary)",
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span>{item.title}</span>
                  {isSelected && (
                    <span
                      className="ml-1 h-1.5 w-1.5 rounded-full animate-ping"
                      style={{ background: accentColor }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* TOP HUD BAR */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full animate-pulse" style={{ background: accentColor }} />
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
            Live Interactive Desktop Interface
          </span>
          <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-[var(--cyan)]">
            Click pins to inspect
          </span>
        </div>

        <div className="flex items-center gap-2">
          {currentPins.slice(0, 3).map((pin) => (
            <button
              key={pin.id}
              onClick={() => setActivePin(activePin?.id === pin.id ? null : pin)}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10.5px] transition-all"
              style={{
                borderColor: activePin?.id === pin.id ? accentColor : "rgba(255,255,255,0.1)",
                background: activePin?.id === pin.id ? `${accentColor}20` : "rgba(255,255,255,0.03)",
                color: activePin?.id === pin.id ? "#FFFFFF" : "var(--text-secondary)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: accentColor }} />
              <span>{pin.title}</span>
            </button>
          ))}

          {/* LIGHTBOX EXPAND BUTTON */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10.5px] text-[var(--text-secondary)] transition-colors hover:border-white/30 hover:text-white"
            title="Open HD Zoom Lightbox"
          >
            <Maximize2 size={12} />
            <span className="hidden md:inline">HD Lightbox</span>
          </button>
        </div>
      </div>

      {/* 3D PERSPECTIVE TILT VIEWPORT */}
      <ThreeDTiltCard glowColor={`${accentColor}40`} className="p-2 md:p-3 relative overflow-hidden">
        {/* WINDOW HEADER BAR */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-2.5 rounded-t-[14px]">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-3 font-mono text-[11px] text-[var(--text-muted)] truncate max-w-[280px] sm:max-w-md">
              DIGI BIZ OS // {currentItem.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {hasMultiple && (
              <div className="flex items-center gap-1 mr-2">
                <button
                  onClick={goPrev}
                  className="rounded p-1 text-[var(--text-muted)] hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft size={14} />
                </button>
                <span className="font-mono text-[10px] text-[var(--text-muted)] px-1">
                  {activeIndex + 1}/{items.length}
                </span>
                <button
                  onClick={goNext}
                  className="rounded p-1 text-[var(--text-muted)] hover:bg-white/10 hover:text-white transition-colors"
                  aria-label="Next screenshot"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            )}
            <span className="font-mono text-[10.5px] text-[var(--cyan)]">● 60 FPS Native</span>
          </div>
        </div>

        {/* SCREENSHOT CONTAINER WITH INTERACTIVE PINS */}
        <div className="relative overflow-hidden rounded-b-[14px] bg-[#020408] group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.src}
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full"
            >
              <img
                src={currentItem.src}
                alt={currentItem.alt || currentItem.title}
                loading="eager"
                decoding="async"
                className="block h-auto w-full object-contain cursor-zoom-in"
                onClick={() => setLightboxOpen(true)}
              />

              {/* OVERLAY SCANLINE EFFECT */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "100% 4px",
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* MULTI-SCREENSHOT PREV / NEXT OVERLAY ARROWS */}
          {hasMultiple && (
            <>
              <button
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white opacity-0 transition-all hover:scale-110 hover:bg-black group-hover:opacity-90"
                aria-label="Previous view"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white opacity-0 transition-all hover:scale-110 hover:bg-black group-hover:opacity-90"
                aria-label="Next view"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

          {/* INTERACTIVE HOLOGRAPHIC PINS */}
          {currentPins.map((pin, idx) => {
            const isSelected = activePin?.id === pin.id;
            return (
              <div
                key={pin.id}
                className="absolute z-20"
                style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -50%)" }}
              >
                {/* RADAR PULSE RINGS */}
                <button
                  onClick={() => setActivePin(isSelected ? null : pin)}
                  className="group relative flex h-7 w-7 items-center justify-center rounded-full transition-transform hover:scale-125 focus:outline-none"
                  aria-label={`Inspect ${pin.title}`}
                >
                  <span
                    className="absolute inset-0 rounded-full animate-ping opacity-60"
                    style={{ background: accentColor }}
                  />
                  <span
                    className="absolute inset-[-4px] rounded-full border border-dashed opacity-40 animate-spin"
                    style={{ borderColor: accentColor, animationDuration: "8s" }}
                  />
                  <span
                    className="relative flex h-5 w-5 items-center justify-center rounded-full font-mono text-[10px] font-bold text-black shadow-lg"
                    style={{ background: isSelected ? "#FFFFFF" : accentColor }}
                  >
                    {idx + 1}
                  </span>
                </button>

                {/* EXPANDABLE HOVER / CLICK POPUP HUD */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-9 z-30 w-72 -translate-x-1/2 rounded-xl border border-white/20 bg-[#060A14]/95 p-4 shadow-2xl backdrop-blur-2xl md:w-80"
                      style={{ boxShadow: `0 10px 40px -10px ${accentColor}40` }}
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cyan)]">
                          {pin.category}
                        </span>
                        <span
                          className="rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider"
                          style={{
                            borderColor: `${accentColor}40`,
                            background: `${accentColor}15`,
                            color: accentColor,
                          }}
                        >
                          {pin.tag}
                        </span>
                      </div>

                      <h4 className="mt-2 font-display text-[14.5px] font-bold text-white">
                        {pin.title}
                      </h4>
                      <p className="mt-1.5 font-body text-[12.5px] leading-relaxed text-[var(--text-secondary)]">
                        {pin.description}
                      </p>

                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10">
                        <span className="font-mono text-[10px] text-[var(--text-muted)]">
                          Hardware Verified
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActivePin(null);
                          }}
                          className="font-mono text-[10.5px] text-[var(--cyan)] hover:underline"
                        >
                          Close [✕]
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </ThreeDTiltCard>

      {/* CAPTION & SUBTITLE */}
      {(currentItem.caption || currentItem.subtitle || caption) && (
        <figcaption className="mt-3.5 text-center font-body text-[13.5px] text-[var(--text-secondary)]">
          <span className="text-[var(--text-primary)] font-medium">
            {currentItem.title}:{" "}
          </span>
          {currentItem.subtitle || currentItem.caption || caption}
        </figcaption>
      )}

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          >
            <div
              className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-2xl border border-white/20 bg-[#060A14] p-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox header */}
              <div className="mb-2 flex items-center justify-between border-b border-white/10 px-4 py-2">
                <div className="flex items-center gap-2">
                  <span className="font-display text-[14px] font-bold text-white">
                    {currentItem.title}
                  </span>
                  {hasMultiple && (
                    <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]">
                      {activeIndex + 1} of {items.length}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="rounded-lg p-1.5 text-[var(--text-muted)] hover:bg-white/10 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Lightbox Image */}
              <div className="relative overflow-auto max-h-[80vh]">
                <img
                  src={currentItem.src}
                  alt={currentItem.alt || currentItem.title}
                  className="mx-auto block max-h-[78vh] w-auto object-contain rounded-lg"
                />

                {hasMultiple && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white hover:scale-110 transition-transform"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/80 text-white hover:scale-110 transition-transform"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

