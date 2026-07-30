import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";

const PLANS = [
  {
    badge: "Free Forever",
    name: "Community Edition",
    price: "£0",
    note: "Open source desktop edition",
    features: [
      "Core Voice Interface",
      "Basic Desktop Automation",
      "Single AI Provider",
      "Local File Access",
      "CLI Terminal",
      "Community Support",
    ],
    cta: "Download Free",
    highlight: false,
  },
  {
    badge: "Most Popular",
    name: "Pro Edition",
    price: "£29",
    unit: "/mo",
    note: "Full power. Unlimited agents.",
    features: [
      "Everything in Community",
      "Gemini Live 2-Way Voice",
      "All 27 Agents Active",
      "94 Desktop & Browser Tools",
      "Screen + Webcam Vision",
      "WhatsApp / Email / Discord",
      "Companies House API",
      "Multi-Provider Routing",
      "Priority Updates",
      "Pro Community Discord",
    ],
    cta: "Start Pro Free Trial",
    highlight: true,
  },
  {
    badge: "Enterprise",
    name: "Enterprise Edition",
    price: "Custom",
    note: "On-premise. SLA guaranteed.",
    features: [
      "On-Premise Agent Town",
      "Custom MCP Server Integration",
      "Dedicated SLA & Support",
      "Air-Gapped Deployment",
      "Custom Persona Engineering",
      "Volume Agent Licensing",
    ],
    cta: "Contact Sales →",
    highlight: false,
  },
];

export default function PricingPreview() {
  return (
    <SectionWrapper id="pricing">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="Pricing" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Start Free. Scale Infinitely.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
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
                    {plan.price}
                  </span>
                  {plan.unit ? (
                    <span className="font-body text-[14px] text-[var(--text-muted)]">
                      {plan.unit}
                    </span>
                  ) : null}
                </div>
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
                  {plan.highlight ? (
                    <CyanButton className="w-full">{plan.cta}</CyanButton>
                  ) : (
                    <GhostButton className="w-full">{plan.cta}</GhostButton>
                  )}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
