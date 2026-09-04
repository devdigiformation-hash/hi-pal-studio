import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Shield, Zap, DollarSign, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import {
  SAAS_COMPARISONS,
  TOTAL_ANNUAL_SAAS_COST,
  TOTAL_MONTHLY_SAAS_COST,
  type SaasReplacementItem,
} from "@/content/saas-comparison-data";

type CategoryFilter = "All" | SaasReplacementItem["category"];

const CATEGORIES: CategoryFilter[] = [
  "All",
  "Creative & Media",
  "CRM & Business Ops",
  "Marketing & Sales",
  "Workflows & Automation",
  "Code & Intelligence",
];

export default function SaasComparisonMatrix() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return SAAS_COMPARISONS;
    return SAAS_COMPARISONS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const filteredTotal = useMemo(() => {
    return filteredItems.reduce((acc, item) => acc + item.annualCost, 0);
  }, [filteredItems]);

  return (
    <SectionWrapper id="saas-comparison" className="bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1240px]">
        {/* Header */}
        <div className="text-center">
          <EyebrowLabel text="SaaS Subscriptions vs DIGI BIZ OS" color="var(--amber)" icon={DollarSign} />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Stop Paying Monthly for Tools You Can{" "}
            <GradientText from="#2FE0C8" to="#8B5CF6">
              Run Locally.
            </GradientText>
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-4 max-w-[760px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)] md:text-[16.5px]">
            Commercial SaaS platforms trap businesses into thousands of dollars in recurring monthly subscriptions.
            DIGI BIZ OS replaces the entire software stack with native desktop engines—delivering every tool{" "}
            <strong className="text-[var(--text-primary)]">100% Free</strong> inside your lifetime OS licence.
          </p>
        </div>

        {/* Value KPI Comparison Bar */}
        <div className="reveal-item delay-3 mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <GlassCard glowColor="#EF4444" className="p-6 text-center">
            <span className="font-mono text-[12px] uppercase tracking-wider text-red-400">
              Typical Paid SaaS Subscriptions
            </span>
            <div className="mt-2 font-display text-[36px] font-extrabold text-red-400">
              ${TOTAL_ANNUAL_SAAS_COST.toLocaleString()}
              <span className="text-[16px] font-normal text-[var(--text-muted)]">/year</span>
            </div>
            <p className="mt-1 font-body text-[13px] text-[var(--text-secondary)]">
              ~${TOTAL_MONTHLY_SAAS_COST}/mo across 14+ fragmented vendors
            </p>
          </GlassCard>

          <GlassCard glowColor="var(--cyan)" className="p-6 text-center border-[var(--cyan)]/40 bg-[var(--cyan)]/5">
            <span className="font-mono text-[12px] uppercase tracking-wider text-[var(--cyan)]">
              DIGI BIZ OS All-In-One
            </span>
            <div className="mt-2 font-display text-[36px] font-extrabold text-[var(--cyan)]">
              £50
              <span className="text-[16px] font-normal text-[var(--text-muted)]"> one-time</span>
            </div>
            <p className="mt-1 font-body text-[13px] text-[var(--text-secondary)]">
              Zero monthly recurring bills. Lifetime sovereign ownership.
            </p>
          </GlassCard>

          <GlassCard glowColor="#10B981" className="p-6 text-center">
            <span className="font-mono text-[12px] uppercase tracking-wider text-emerald-400">
              Your Annual Retained Savings
            </span>
            <div className="mt-2 font-display text-[36px] font-extrabold text-emerald-400">
              +${TOTAL_ANNUAL_SAAS_COST.toLocaleString()}
              <span className="text-[16px] font-normal text-[var(--text-muted)]">/year</span>
            </div>
            <p className="mt-1 font-body text-[13px] text-[var(--text-secondary)]">
              Over ${(TOTAL_ANNUAL_SAAS_COST * 3).toLocaleString()} saved in your first 3 years
            </p>
          </GlassCard>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 font-mono text-[12px] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--cyan)] text-black shadow-[0_0_20px_rgba(47,224,200,0.4)]"
                    : "border border-white/10 bg-white/5 text-[var(--text-secondary)] hover:border-white/20 hover:text-white"
                }`}
              >
                {cat} {cat === "All" ? `(${SAAS_COMPARISONS.length})` : ""}
              </button>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-8">
          <GlassCard className="overflow-x-auto p-0 border-white/10 shadow-2xl">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-6 py-4 font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    Market Paid Tool (Commercial SaaS)
                  </th>
                  <th className="px-6 py-4 font-mono text-[12px] font-bold uppercase tracking-wider text-red-400">
                    Typical Cost
                  </th>
                  <th className="px-6 py-4 font-mono text-[12px] font-bold uppercase tracking-wider text-[var(--cyan)]">
                    DIGI BIZ OS Native Capability
                  </th>
                  <th className="px-6 py-4 font-mono text-[12px] font-bold uppercase tracking-wider text-emerald-400 text-right">
                    DIGI BIZ OS Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <AnimatePresence mode="popLayout">
                  {filteredItems.map((item, idx) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25, delay: idx * 0.03 }}
                      className="group transition-colors hover:bg-white/[0.02]"
                    >
                      {/* Paid Tool Column */}
                      <td className="px-6 py-4.5 align-top">
                        <div className="font-display text-[15px] font-semibold text-[var(--text-primary)]">
                          {item.saasTool}
                        </div>
                        <div className="mt-0.5 font-body text-[12px] text-[var(--text-muted)]">
                          Vendor: {item.saasVendor} • Category: {item.category}
                        </div>
                      </td>

                      {/* Paid Cost Column */}
                      <td className="px-6 py-4.5 align-top whitespace-nowrap">
                        <span className="inline-flex items-center rounded-md bg-red-500/10 px-2.5 py-1 font-mono text-[12px] font-semibold text-red-400 border border-red-500/20">
                          {item.costLabel}
                        </span>
                      </td>

                      {/* DIGI BIZ OS Capability Column */}
                      <td className="px-6 py-4.5 align-top">
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center rounded-md bg-[var(--cyan)]/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-[var(--cyan)] border border-[var(--cyan)]/30">
                            {item.digiModule}
                          </span>
                          <span className="font-display text-[14.5px] font-medium text-[var(--text-primary)]">
                            {item.digiFeature}
                          </span>
                        </div>
                        <ul className="mt-2 space-y-1">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-1.5 font-body text-[12px] text-[var(--text-secondary)]">
                              <Check size={13} className="text-[var(--cyan)] shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </td>

                      {/* DIGI BIZ OS Cost Column */}
                      <td className="px-6 py-4.5 align-top text-right whitespace-nowrap">
                        <div className="inline-flex flex-col items-end">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 font-mono text-[12.5px] font-bold text-emerald-400 border border-emerald-500/30">
                            <Sparkles size={13} />
                            {item.digiCost}
                          </span>
                          <span className="mt-1 font-mono text-[11px] text-emerald-500/80">
                            Save +${item.annualCost}/yr
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </GlassCard>
        </div>

        {/* Bottom Banner & CTA */}
        <div className="mt-12 rounded-[16px] border border-[var(--cyan)]/30 bg-gradient-to-r from-[var(--cyan)]/10 via-purple-500/10 to-[var(--cyan)]/10 p-8 text-center sm:p-10">
          <div className="mx-auto max-w-2xl">
            <h3 className="font-display text-[24px] font-bold text-[var(--text-primary)] sm:text-[30px]">
              Ready to Save ${TOTAL_ANNUAL_SAAS_COST.toLocaleString()} Every Single Year?
            </h3>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-[var(--text-secondary)]">
              Get full lifetime access to all 12 modules, timeline video editing, multilingual voice TTS, 20-module CRM,
              always-on workflows, and JARVIS voice control for a single £50 lifetime license.
            </p>
              <Link to="/pricing">
                <CyanButton>
                  Get Lifetime Licence (£50) <ArrowRight size={16} className="ml-2" />
                </CyanButton>
              </Link>
              <Link to="/compare">
                <GhostButton>
                  View Full Detailed Comparisons
                </GhostButton>
              </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
