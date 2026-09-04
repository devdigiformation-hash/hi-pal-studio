import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "@tanstack/react-router";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import CyanButton from "@/components/CyanButton";
import GradientText from "@/components/GradientText";
import CurrencySelector from "@/components/CurrencySelector";

import { formatPrice, useCurrency } from "@/lib/currency";

const TIERS = [
  {
    id: "lifetime" as const,
    badge: "Lifetime Access",
    name: "DIGI BIZ OS Lifetime",
    gbp: 50,
    compareGbp: 69,
    note: "Pay once. Includes 1 month free support.",
    features: [
      "One-time payment — no monthly lock-in",
      "Lifetime access to Gen 2",
      "1 month free support & updates",
      "Optional maintenance: £5/mo after month 1",
      "Activate on up to 3 PCs",
      "90%+ modules with integrated AI brain",
      "Bring your own AI keys or local models",
    ],
    cta: "Get Lifetime Access",
    accent: "var(--cyan)",
    accentRgb: "47,224,200",
    glow: "var(--glow-cyan)",
    border: "var(--cyan-border)",
  },
  {
    id: "custom_build" as const,
    badge: "Done-For-You Setup",
    name: "Software Setup & Custom Workflows",
    gbp: 50,
    compareGbp: 79,
    note: "Done-for-you setup with 5 custom workflows.",
    features: [
      "Everything in Lifetime Access",
      "Full PC software installation & setup",
      "5 custom business workflows built for your business",
      "All AI provider API keys configured",
      "WhatsApp AI Sales Agent connection",
      "Business Knowledge Base ingestion",
      "1-on-1 onboarding & walkthrough session",
      "1 month priority setup support included",
    ],
    cta: "Order Software Setup",
    accent: "var(--amber)",
    accentRgb: "245,166,35",
    glow: "var(--glow-amber)",
    border: "rgba(245,166,35,0.35)",
  },
  {
    id: "source_code" as const,
    badge: "Full Ownership",
    name: "Source Code Licence",
    gbp: 199,
    compareGbp: 279,
    note: "Own the code. Automate your business A to Z.",
    features: [
      "Everything in Lifetime Access",
      "Complete source code repository",
      "Customise every feature for your business",
      "Build end-to-end custom automation",
      "Private developer access & documentation",
      "Build & sign your own installers",
      "Commercial & resale rights included",
      "12 months of update pulls",
    ],
    cta: "Buy Source Code",
    accent: "var(--purple)",
    accentRgb: "139,124,246",
    glow: "var(--glow-purple)",
    border: "rgba(139,124,246,0.35)",
  },
];

export default function PricingPreview() {
  const { code } = useCurrency();

  return (
    <SectionWrapper id="pricing">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="Pricing" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Pay Once.{" "}
            <GradientText from="#F5A623" to="#3DDC84">
              Own the Future.
            </GradientText>
          </h2>
          <div className="reveal-item delay-2 mt-6 flex justify-center">
            <CurrencySelector />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {TIERS.map((plan, i) => (
            <div key={plan.name} className={`reveal-item delay-${i + 1}`}>
              <GlassCard
                glowColor={plan.accent}
                className={
                  plan.id === "custom_build"
                    ? "h-full border-[var(--amber-border)] p-8 shadow-[var(--glow-amber)] lg:-mt-6 lg:pb-12"
                    : `h-full border-[${plan.border}] p-8`
                }
                style={{ borderColor: plan.border }}
              >
                <MonoBadge color={plan.accent}>{plan.badge}</MonoBadge>
                <h3 className="mt-5 font-display text-[20px] font-bold text-[var(--text-primary)]">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-end gap-1">
                  <span
                    className="font-display text-[44px] font-bold leading-none"
                    style={{ color: plan.accent }}
                  >
                    {formatPrice(plan.gbp, code)}
                  </span>
                  <span className="font-body text-[13px] text-[var(--text-muted)]">one-time</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-body text-[14px] text-[var(--text-muted)] line-through">
                    {formatPrice(plan.compareGbp, code)}
                  </span>
                  <span
                    className="rounded-full border px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.12em]"
                    style={{ color: plan.accent, borderColor: plan.border }}
                  >
                    Save {Math.round(((plan.compareGbp - plan.gbp) / plan.compareGbp) * 100)}%
                  </span>
                </div>
                {code !== "PKR" ? (
                  <div className="mt-1.5 font-mono text-[12px] text-[var(--text-muted)]">
                    ≈ {formatPrice(plan.gbp, "PKR")} · ${formatPrice(plan.gbp, "USD").slice(1)}
                  </div>
                ) : null}
                <p className="mt-3 font-body text-[14px] text-[var(--text-secondary)]">
                  {plan.note}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2 font-body text-[13px] text-[var(--text-secondary)]"
                    >
                      <span style={{ color: plan.accent }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/checkout" search={{ plan: plan.id }} className="block">
                    <CyanButton tone={plan.accentRgb} className="w-full">
                      {plan.cta} →
                    </CyanButton>
                  </Link>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
