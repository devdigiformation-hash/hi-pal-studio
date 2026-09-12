import { Link } from "@tanstack/react-router";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import EyebrowLabel from "@/components/EyebrowLabel";
import CyanButton from "@/components/CyanButton";

interface OpenSourceDigiBizBridgeProps {
  headline: string;
  description: string;
  highlights: string[];
}

export default function OpenSourceDigiBizBridge({
  headline,
  description,
  highlights,
}: OpenSourceDigiBizBridgeProps) {
  return (
    <section className="py-14 border-t border-white/10 bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <GlassCard glowColor="var(--amber)" className="p-6 md:p-10 relative overflow-hidden">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_300px]">
            <div>
              <EyebrowLabel text="Next Step • Business Operating System" color="var(--amber)" />
              <h2 className="mt-3 font-display text-[22px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[30px] leading-tight">
                {headline}
              </h2>
              <p className="mt-3 font-body text-[14.5px] leading-relaxed text-[var(--text-secondary)] max-w-[700px]">
                {description}
              </p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]"
                  >
                    <Check size={16} className="text-[var(--cyan)] mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-stretch lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
              <Link to="/pricing" className="w-full sm:w-auto">
                <CyanButton size="lg" icon={<Sparkles size={16} />} className="w-full">
                  Explore DIGI BIZ OS
                </CyanButton>
              </Link>
              <Link
                to="/features"
                className="font-mono text-[12.5px] text-zinc-400 hover:text-[var(--cyan)] transition-colors text-center lg:text-right"
              >
                View 12 core OS modules →
              </Link>
              <Link
                to="/open-source"
                className="font-mono text-[12px] text-[var(--cyan)] hover:underline text-center lg:text-right"
              >
                ← Back to Open-Source Hub
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
