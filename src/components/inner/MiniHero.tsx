import { motion } from "framer-motion";
import type { ReactNode } from "react";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import { cn } from "@/lib/utils";

interface MiniHeroProps {
  eyebrow: string;
  title: string;
  gradientTitle?: string;
  subtitle: string;
  height?: string;
  children?: ReactNode;
}

export default function MiniHero({
  eyebrow,
  title,
  gradientTitle,
  subtitle,
  height = "min-h-[60vh]",
  children,
}: MiniHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden px-6 py-20 md:px-12 lg:px-20",
        height,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(47,224,200,0.12), transparent 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-[900px] flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <span
            style={{ color: "var(--cyan)", letterSpacing: "0.16em" }}
            className="font-display text-[12px] font-semibold uppercase"
          >
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 font-display text-[40px] font-extrabold leading-[1.05] tracking-[-0.04em] text-[var(--text-primary)] md:text-[62px] lg:text-[76px]"
        >
          {title}{" "}
          {gradientTitle ? (
            <GradientText from="#2FE0C8" to="#8B7CF6">
              {gradientTitle}
            </GradientText>
          ) : null}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-6 max-w-[620px] font-body text-[15px] leading-[1.75] text-[var(--text-secondary)] md:text-[17px]"
        >
          {subtitle}
        </motion.p>

        {children ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {children}
          </motion.div>
        ) : null}
      </motion.div>
    </section>
  );
}

// Unused import guard removed intentionally.
export { EyebrowLabel };