import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

// AEO / GEO "Direct Answer" definition block. Kept on the page for answer-engine
// SEO, but as its own calm band below the hero — not crowding the CTA buttons.
export default function DirectAnswer() {
  return (
    <SectionWrapper>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mx-auto max-w-[820px] rounded-2xl border border-[var(--cyan)]/25 bg-[var(--cyan)]/[0.04] p-6 text-left font-body text-[14px] leading-[1.8] text-[var(--text-secondary)] sm:p-7 sm:text-[15px]"
      >
        <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--cyan)]">
          <Sparkles size={14} />
          <span>Direct Answer • What is DIGI BIZ OS?</span>
        </div>
        <p className="mt-2.5 font-medium text-[var(--text-primary)]">
          DIGI BIZ OS is an autonomous agentic AI business operating system for Windows 10 and 11. It
          unifies voice control, local neural models (DeepSeek, Llama), CRM pipelines, automated
          workflows, and desktop computer-use automation into a single sovereign desktop environment
          with zero recurring subscription fees.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
