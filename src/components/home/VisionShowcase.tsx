import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";

const DEMOS = [
  {
    query: "Explain this error in my terminal →",
    response: "TypeError at line 42 — `user` is undefined because the fetch resolves after render. Add a loading guard before access.",
  },
  {
    query: "Extract table from this PDF on screen →",
    response: "Extracted 3 columns × 18 rows · Company | SIC Code | Incorporation Date — exported to /Desktop/extract.csv",
  },
  {
    query: "Debug this React component visually →",
    response: "Lines 18–24 re-render on every keystroke. Memoize `options` and move the handler out of the render body.",
  },
];

export default function VisionShowcase() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % DEMOS.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <SectionWrapper id="vision">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <EyebrowLabel text="Multimodal Intelligence" color="var(--amber)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[34px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[48px]">
            It Sees. <GradientText from="#F5A623" to="#8B7CF6">It Understands. It Acts.</GradientText>
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-5 max-w-[620px] font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
            Stream your screen live to the vision engine and receive instant analysis, code review, bug
            detection, and document extraction in real time.
          </p>
        </div>

        <div className="reveal-item delay-3 mx-auto mt-14 max-w-[800px]">
          <GlassCard className="p-0">
            <div className="flex items-center justify-between border-b border-[var(--border-glass)] px-5 py-3">
              <div className="flex items-center gap-2">
                {["#FF5C5C", "#FBBF24", "#34D399"].map((c) => (
                  <span key={c} className="h-3 w-3 rounded-full" style={{ background: c }} />
                ))}
                <span className="ml-3 font-code text-[12px] text-[var(--text-muted)]">
                  Screen Analysis Active
                </span>
              </div>
              <span className="flex items-center gap-2">
                <ActivePulse />
                <span className="font-code text-[11px] tracking-[0.16em] text-[var(--cyan)]">
                  LIVE
                </span>
              </span>
            </div>

            <div className="min-h-[220px] px-6 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="font-display text-[16px] font-semibold text-[var(--text-primary)]">
                    {DEMOS[i].query}
                  </div>
                  <div
                    className="mt-4 rounded-[var(--r-md)] border border-[var(--border-glass)] p-4 font-code text-[13px] leading-[1.85] text-[var(--cyan)]"
                    style={{ background: "var(--bg-glass-light)", boxShadow: "var(--glow-cyan)" }}
                  >
                    {DEMOS[i].response}
                    <span className="animate-caret">▋</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3 border-t border-[var(--border-glass)] px-6 py-4">
              <span className="flex h-8 items-end gap-1">
                {Array.from({ length: 8 }).map((_, b) => (
                  <span
                    key={b}
                    className="w-[3px] rounded-full bg-[var(--cyan)]"
                    style={{
                      height: 22,
                      animation: `waveBar ${0.8 + b * 0.12}s ease-in-out ${b * 0.08}s infinite`,
                    }}
                  />
                ))}
              </span>
              <span className="font-code text-[11px] tracking-[0.16em] text-[var(--text-muted)]">
                VOICE ACTIVE
              </span>
            </div>
          </GlassCard>
        </div>

        <div className="reveal-item delay-4 mt-8 flex flex-wrap justify-center gap-3">
          <MonoBadge>960px Resolution Frame Streaming</MonoBadge>
          <MonoBadge color="var(--purple)">Live Vision Engine</MonoBadge>
          <MonoBadge color="var(--amber)">Real-Time Screen + Webcam Feed</MonoBadge>
        </div>
      </div>
    </SectionWrapper>
  );
}
