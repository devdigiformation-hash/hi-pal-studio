import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import * as Switch from "@radix-ui/react-switch";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Check } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import MonoBadge from "@/components/MonoBadge";
import MiniHero from "@/components/inner/MiniHero";

const COMMUNITY = [
  "Local Ollama models — fully offline",
  "Voice command basics with push-to-talk",
  "20 desktop IPC handlers",
  "Single-agent execution",
  "File system read/write automation",
  "Clipboard and notification control",
  "Basic screenshot capture",
  "Email (IMAP) inbox reading",
  "Community Discord support",
  "Local encrypted key storage",
  "Manual skill authoring",
  "MIT-licensed source access",
];

const PRO = [
  "Everything in Community",
  "Gemini Live 2-way voice streaming",
  "\"Hey DigiBiz\" wake word detection",
  "Soul Engine custom AI persona",
  "All 104+ IPC handlers unlocked",
  "Agent Town — 27 concurrent agents",
  "94 built-in tools (Playwright + Hermes)",
  "WhatsApp automation via Baileys",
  "Full IMAP/SMTP email intelligence",
  "Discord bot control",
  "UK Companies House API access",
  "MCP server connections",
  "Workflow scheduling and cron triggers",
  "Memory indexing across sessions",
  "Priority model routing (Groq/OpenRouter)",
  "Automatic updates and rollbacks",
  "Usage analytics dashboard",
  "Email support within 24 hours",
];

const ENTERPRISE = [
  "Everything in Pro",
  "Unlimited seats and device activations",
  "Private on-premise deployment",
  "SSO / SAML authentication",
  "Role-based agent permissions",
  "Audit logging and compliance export",
  "Custom Hermes skill development",
  "Dedicated MCP integration engineering",
  "Air-gapped offline installation",
  "99.9% uptime SLA",
  "Named customer success manager",
  "Security review and pen-test reports",
  "Team training and onboarding",
  "Volume licensing agreements",
];

const FAQS = [
  {
    q: "What payment methods do you accept?",
    a: "All major credit and debit cards, Apple Pay, Google Pay, and bank transfer for annual enterprise invoices in GBP, USD, and EUR.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. Pro subscriptions carry a 30-day money-back guarantee, no questions asked. Cancel any time from your account dashboard.",
  },
  {
    q: "How does team licensing work?",
    a: "Pro is licensed per user with up to 3 device activations each. Enterprise includes unlimited seats under a single organisation agreement.",
  },
  {
    q: "Am I charged for AI API usage?",
    a: "No. You connect your own Gemini, Groq, or OpenRouter keys and pay those providers directly. Community users can run Ollama locally at zero cost.",
  },
  {
    q: "Can I switch between monthly and annual?",
    a: "Yes. Switch at any time — annual billing saves 20% and any remaining monthly balance is credited to your first annual invoice.",
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

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const proPrice = annual ? 23 : 29;

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-[60px] md:pt-[72px]"
    >
      <MiniHero
        eyebrow="Pricing"
        title="Start Free."
        gradientTitle="Scale to Enterprise."
        subtitle="One platform. Three tiers. All voice-powered."
        height="min-h-[50vh]"
      />

      <SectionWrapper id="plans">
        <div className="mx-auto max-w-[1200px]">
          <div className="reveal-item flex items-center justify-center gap-4">
            <span
              className="font-display text-[14px] font-semibold"
              style={{ color: annual ? "var(--text-muted)" : "var(--text-primary)" }}
            >
              Monthly
            </span>
            <Switch.Root
              checked={annual}
              onCheckedChange={setAnnual}
              aria-label="Toggle annual billing"
              className="relative h-[26px] w-[48px] rounded-full border border-[var(--border-glass)] transition-colors duration-300 data-[state=checked]:border-[var(--cyan-border)]"
              style={{ background: "var(--bg-glass)" }}
            >
              <Switch.Thumb
                className="block h-[18px] w-[18px] translate-x-[4px] rounded-full transition-transform duration-300 data-[state=checked]:translate-x-[26px]"
                style={{ background: annual ? "var(--cyan)" : "var(--text-muted)" }}
              />
            </Switch.Root>
            <span
              className="font-display text-[14px] font-semibold"
              style={{ color: annual ? "var(--text-primary)" : "var(--text-muted)" }}
            >
              Annual
            </span>
            <MonoBadge color="var(--success)">Save 20%</MonoBadge>
          </div>

          <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
            {/* Community */}
            <GlassCard className="reveal-item p-8">
              <EyebrowLabel text="Community" color="var(--text-secondary)" />
              <div className="mt-4 font-display text-[44px] font-extrabold leading-none text-[var(--text-primary)]">
                Free
              </div>
              <p className="mt-3 font-body text-[14px] text-[var(--text-secondary)]">
                Local-first automation for solo builders.
              </p>
              <FeatureList items={COMMUNITY} color="var(--text-secondary)" />
              <div className="mt-8">
                <GhostButton size="lg" className="w-full">
                  Download Free →
                </GhostButton>
              </div>
              <div className="mt-4 flex justify-center">
                <MonoBadge color="var(--text-secondary)">Open Source · MIT License</MonoBadge>
              </div>
            </GlassCard>

            {/* Pro */}
            <GlassCard
              className="reveal-item delay-1 border-[var(--cyan-border)] p-8 lg:-mt-4 lg:scale-[1.02]"
              glowColor="var(--cyan)"
            >
              <div className="flex items-center justify-between">
                <EyebrowLabel text="Pro" />
                <MonoBadge>Most Popular</MonoBadge>
              </div>
              <div className="mt-4 flex items-end gap-2">
                <motion.span
                  key={proPrice}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="font-display text-[44px] font-extrabold leading-none text-[var(--text-primary)]"
                >
                  £{proPrice}
                </motion.span>
                <span className="pb-1 font-body text-[14px] text-[var(--text-muted)]">/mo</span>
              </div>
              <p className="mt-3 font-body text-[14px] text-[var(--text-secondary)]">
                {annual ? "Billed annually — £276/year." : "Billed monthly. Switch any time."}
              </p>
              <FeatureList items={PRO} color="var(--cyan)" />
              <div className="mt-8">
                <Link
                  to="/checkout"
                  search={{ plan: annual ? "pro_annual" : "pro_monthly" }}
                  className="block"
                >
                  <CyanButton size="lg" className="w-full">
                    Get Pro — Checkout
                  </CyanButton>
                </Link>
              </div>
              <div className="mt-4 text-center font-body text-[13px] text-[var(--text-muted)]">
                JazzCash · Bank · USDT · Binance Pay · Redot Pay
              </div>
            </GlassCard>

            {/* Enterprise */}
            <GlassCard className="reveal-item delay-2 p-8" glowColor="var(--purple)">
              <EyebrowLabel text="Enterprise" color="var(--purple)" />
              <div className="mt-4 font-display text-[44px] font-extrabold leading-none text-[var(--text-primary)]">
                Custom
              </div>
              <p className="mt-3 font-body text-[14px] text-[var(--text-secondary)]">
                Governed deployment for regulated teams.
              </p>
              <FeatureList items={ENTERPRISE} color="var(--purple)" />
              <div className="mt-8">
                <GhostButton size="lg" className="w-full">
                  Book Enterprise Demo →
                </GhostButton>
              </div>
              <div className="mt-4 text-center font-body text-[13px] text-[var(--text-muted)]">
                Custom deployment &amp; SLA
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>

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