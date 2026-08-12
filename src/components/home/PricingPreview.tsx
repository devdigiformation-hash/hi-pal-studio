import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "@tanstack/react-router";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
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
    note: "Pay once. Own it for life.",
    features: [
      "One-time payment — no subscription",
      "Lifetime access to Gen 2",
      "All updates included",
      "Activate on up to 3 PCs",
      "Voice intelligence + AI agents",
      "Bring your own AI key",
    ],
    cta: "Get Lifetime Access",
    highlight: false,
  },
  {
    id: "source_code" as const,
    badge: "Full Ownership",
    name: "Source Code Licence",
    gbp: 99,
    compareGbp: 139,
    note: "Own the code. Automate your business A to Z.",
    features: [
      "Everything in Lifetime",
      "Complete source code access",
      "Customise every feature for your brand",
      "Build end-to-end business automation",
      "Private developer access",
      "Build your own installers",
      "Developer documentation",
      "Resale & commercial rights",
    ],
    cta: "Buy Source Code",
    highlight: false,
  },
  {
    id: "custom_build" as const,
    badge: "Most Popular",
    name: "Customised + Your Branding",
    gbp: 199,
    compareGbp: 279,
    note: "White-label build with 400+ workflows.",
    features: [
      "Everything in Lifetime",
      "Full white-label branding",
      "400+ automation workflows configured",
      "Custom agent personas",
      "WhatsApp / Email / Discord setup",
      "Onboarding + handover session",
      "6 months priority support",
    ],
    cta: "Order Custom Build",
    highlight: true,
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
            Pay Once. <GradientText>Own the Future.</GradientText>
          </h2>
          <div className="reveal-item delay-2 mt-6 flex justify-center">
            <CurrencySelector />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {TIERS.map((plan, i) => (
            <div key={plan.name} className={`reveal-item delay-${i + 1}`}>
              <GlassCard
                className={
                  plan.highlight
                    ? "h-full border-[var(--cyan-border)] p-8 shadow-[var(--glow-cyan)] lg:-mt-6 lg:pb-12"
                    : "h-full p-8"
                }
              >
                <MonoBadge color={plan.highlight ? "var(--cyan)" : "var(--text-secondary)"}>
                  {plan.badge}
                </MonoBadge>
                <h3 className="mt-5 font-display text-[20px] font-bold text-[var(--text-primary)]">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="font-display text-[44px] font-bold leading-none text-[var(--text-primary)]">
                    {formatPrice(plan.gbp, code)}
                  </span>
                  <span className="font-body text-[13px] text-[var(--text-muted)]">
                    one-time
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="font-body text-[14px] text-[var(--text-muted)] line-through">
                    {formatPrice(plan.compareGbp, code)}
                  </span>
                  <span className="rounded-full border border-[var(--cyan-border)] px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--cyan)]">
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
                    <li key={f} className="flex gap-2 font-body text-[13px] text-[var(--text-secondary)]">
                      <span className="text-[var(--cyan)]">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/checkout" search={{ plan: plan.id }} className="block">
                    {plan.highlight ? (
                      <CyanButton className="w-full">{plan.cta}</CyanButton>
                    ) : (
                      <GhostButton className="w-full">{plan.cta} →</GhostButton>
                    )}
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
