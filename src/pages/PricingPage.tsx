import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Check } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import MiniHero from "@/components/inner/MiniHero";
import CurrencySelector from "@/components/CurrencySelector";

import { formatPrice, useCurrency } from "@/lib/currency";
import { PLANS, type PlanId } from "@/lib/payment-config";
import SourceCodeSection from "@/components/home/SourceCodeSection";
import ComparisonMatrix from "@/components/home/ComparisonMatrix";

const FAQS = [
  {
    q: "What payment methods do you accept?",
    a: "JazzCash, EasyPaisa, SadaPay, NayaPay, UBL bank transfer, plus GBP (UK) and USD bank accounts for international buyers. Pick a method at checkout, send the exact amount and submit your transaction reference.",
  },
  {
    q: "Is this really a one-time payment?",
    a: "Yes. Every package is a single one-time payment — £50 lifetime access, £50 for done-for-you software setup with 5 custom business workflows, or £199 for the full source code licence. No monthly software seat fees.",
  },
  {
    q: "What does the Software Setup & Business Customization package include?",
    a: "Complete end-to-end installation of DIGI BIZ OS on your PC, full configuration of your AI API keys, WhatsApp AI sales agent setup, business knowledge base ingestion, and 5 custom automated business workflows built specifically for your business operations.",
  },
  {
    q: "Are there any recurring maintenance fees?",
    a: "No. All packages are 100% one-time payments with zero monthly software fees, seat subscriptions, or forced maintenance costs.",
  },
  {
    q: "What do I get with the source code licence?",
    a: "Full product ownership with private developer access, complete documentation and the right to build and distribute your own installers. You can customise every screen, workflow and agent to automate your business A to Z, plus resale rights and 12 months of update pulls.",
  },
  {
    q: "Am I charged for AI API usage?",
    a: "No. You connect your own AI provider key and pay that provider directly at wholesale token rates, or run 100% free local offline models at zero cost.",
  },
];

function FeatureList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="mt-7 space-y-2.5">
      {items.map((f) => (
        <li key={f} className="flex items-start gap-2.5">
          <Check size={15} color={color} strokeWidth={2.4} className="mt-[4px] shrink-0" />
          <span className="font-body text-[13.5px] leading-[1.65] text-[var(--text-secondary)]">
            {f}
          </span>
        </li>
      ))}
    </ul>
  );
}

const TIERS: {
  id: PlanId;
  eyebrow: string;
  accent: string;
  accentRgb: string;
  border: string;
  glow: string;
  badge?: string;
  cta: string;
}[] = [
  {
    id: "lifetime",
    eyebrow: "Lifetime Access",
    accent: "var(--cyan)",
    accentRgb: "47,224,200",
    border: "var(--cyan-border)",
    glow: "var(--glow-cyan)",
    cta: "Get Lifetime Access",
  },
  {
    id: "custom_build",
    eyebrow: "Software Setup & Customization",
    accent: "var(--amber)",
    accentRgb: "245,166,35",
    border: "var(--amber-border)",
    glow: "var(--glow-amber)",
    cta: "Order Software Setup",
  },
  {
    id: "source_code",
    eyebrow: "Source Code",
    accent: "var(--purple)",
    accentRgb: "139,124,246",
    border: "var(--purple-border)",
    glow: "var(--glow-purple)",
    badge: "Full Ownership",
    cta: "Buy Source Code",
  },
];

export default function PricingPage() {
  const { code } = useCurrency();

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-[60px] md:pt-[72px]"
    >
      <MiniHero
        eyebrow="Pricing"
        title="DIGI BIZ OS Pricing —"
        gradientTitle="Lifetime Licences"
        subtitle="Three clear packages — £50 lifetime access, £50 done-for-you software setup with 5 custom business workflows, or £199 full source code."
        height="min-h-[50vh]"
      />

      <SectionWrapper id="plans">
        <div className="mx-auto max-w-[1200px]">
          <div className="reveal-item flex flex-wrap items-center justify-center gap-3">
            <MonoBadge color="var(--success)">One-Time Payment</MonoBadge>
            <MonoBadge color="var(--text-secondary)">No Monthly Software Fees</MonoBadge>
            <CurrencySelector />
          </div>

          <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
            {TIERS.map((tier, i) => {
              const plan = PLANS[tier.id];
              return (
                <GlassCard
                  key={tier.id}
                  className={`reveal-item delay-${i} p-8`}
                  style={{ borderColor: tier.border }}
                  glowColor={tier.accent}
                >
                  <div className="flex items-center justify-between gap-3">
                    <EyebrowLabel text={tier.eyebrow} color={tier.accent} reveal={false} />
                    {tier.badge ? <MonoBadge color={tier.accent}>{tier.badge}</MonoBadge> : null}
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <span
                      className="font-display text-[44px] font-extrabold leading-none"
                      style={{ color: tier.accent }}
                    >
                      {formatPrice(plan.priceGbp, code)}
                    </span>
                    {plan.compareGbp ? (
                      <span className="pb-1 font-mono text-[14px] text-[var(--text-muted)] line-through">
                        {formatPrice(plan.compareGbp, code)}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-[12px] text-[var(--text-muted)]">
                    <span>
                      {formatPrice(plan.priceGbp, "PKR")} · {formatPrice(plan.priceGbp, "USD")}
                    </span>
                    {plan.compareGbp ? (
                      <span
                        className="rounded-full border px-2 py-0.5 text-[10.5px] uppercase tracking-[0.12em]"
                        style={{ color: tier.accent, borderColor: tier.border }}
                      >
                        Save{" "}
                        {Math.round(((plan.compareGbp - plan.priceGbp) / plan.compareGbp) * 100)}%
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 font-body text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                    {plan.blurb}
                  </p>
                  <FeatureList items={plan.includes} color={tier.accent} />
                  <div className="mt-8">
                    <Link to="/checkout" search={{ plan: tier.id }} className="block">
                      <CyanButton size="lg" tone={tier.accentRgb} className="w-full">
                        {tier.cta} →
                      </CyanButton>
                    </Link>
                  </div>
                  <div className="mt-4 text-center font-body text-[12.5px] text-[var(--text-muted)]">
                    JazzCash · EasyPaisa · SadaPay · NayaPay · UBL · GBP · USD
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      <SourceCodeSection />
      <ComparisonMatrix />

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[860px]">
          <div className="text-center">
            <EyebrowLabel text="Pricing FAQ" color="var(--purple)" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[30px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[42px]">
              Billing Questions, Answered.
            </h2>
          </div>

          <Accordion.Root type="single" collapsible className="reveal-item delay-2 mt-10 space-y-4">
            {FAQS.map((item, i) => (
              <Accordion.Item
                key={item.q}
                value={`p-faq-${i}`}
                className="overflow-hidden rounded-[var(--r-lg)] border border-[var(--border-glass)] backdrop-blur-xl transition-colors duration-300 data-[state=open]:border-[var(--cyan-border)]"
                style={{ background: "var(--bg-glass)" }}
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-display text-[15px] font-semibold text-[var(--text-primary)] md:text-[17px]">
                      {item.q}
                    </span>
                    <Plus
                      size={18}
                      className="shrink-0 text-[var(--cyan)] transition-transform duration-300 group-data-[state=open]:rotate-45"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="px-6 pb-5 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)] md:text-[15px]">
                    {item.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </SectionWrapper>
    </motion.main>
  );
}
