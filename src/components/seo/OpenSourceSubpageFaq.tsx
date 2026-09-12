import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import EyebrowLabel from "@/components/EyebrowLabel";
import { FaqItem } from "@/content/open-source-subpages";

interface OpenSourceSubpageFaqProps {
  toolName: string;
  faqs: FaqItem[];
}

export default function OpenSourceSubpageFaq({ toolName, faqs }: OpenSourceSubpageFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 border-t border-white/10 bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[860px] px-4 sm:px-6">
        <div className="text-center max-w-[640px] mx-auto mb-10">
          <EyebrowLabel text="Frequently Asked Questions" color="var(--cyan)" />
          <h2 className="mt-3 font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[34px]">
            Common Questions About {toolName}
          </h2>
          <p className="mt-2 font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">
            Concise, factual answers regarding capabilities, licensing, offline reliability, and hardware compatibility.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <GlassCard
                key={idx}
                glowColor={isOpen ? "var(--cyan)" : "transparent"}
                className="overflow-hidden transition-all duration-200 border-white/10"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-white/[0.02]"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle size={18} className="text-[var(--cyan)] shrink-0" />
                    <span className="font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                      {faq.q}
                    </span>
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[var(--cyan)]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-white/5 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)] pl-12">
                    {faq.a}
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
