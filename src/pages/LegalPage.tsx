import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import EyebrowLabel from "@/components/EyebrowLabel";
import { SUPPORT_EMAIL } from "@/lib/payment-config";

export interface LegalSection {
  heading: string;
  body: string[];
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen px-6 pb-24 pt-[120px] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-[820px]">
        <EyebrowLabel reveal={false} text={eyebrow} />
        <h1 className="mt-3 font-display text-[36px] font-extrabold leading-[1.08] text-[var(--text-primary)] md:text-[46px]">
          {title}
        </h1>
        <p className="mt-4 font-body text-[15px] leading-[1.75] text-[var(--text-secondary)]">
          {intro}
        </p>

        <div className="mt-10 space-y-4">
          {sections.map((s, i) => (
            <GlassCard key={s.heading} className="p-7">
              <h2 className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                <span className="mr-3 font-code text-[13px] text-[var(--cyan)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.heading}
              </h2>
              {s.body.map((p) => (
                <p
                  key={p}
                  className="mt-3 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]"
                >
                  {p}
                </p>
              ))}
            </GlassCard>
          ))}
        </div>

        <p className="mt-10 font-body text-[13.5px] text-[var(--text-muted)]">
          Questions? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[var(--cyan)] hover:underline">
            {SUPPORT_EMAIL}
          </a>{" "}
          or message +92 316 446 7464. Digi Biz OS is operated by Digiformation Ltd.
        </p>
      </div>
    </motion.main>
  );
}