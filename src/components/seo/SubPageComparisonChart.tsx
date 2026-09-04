import { useMemo } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import GlassCard from "@/components/GlassCard";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import { SAAS_COMPARISONS, type SaasReplacementItem } from "@/content/saas-comparison-data";

interface SubPageComparisonChartProps {
  slug?: string;
  category?: string;
  title?: string;
  accentColor?: string;
}

// Mapping of module and feature slugs to relevant comparison items
const SLUG_TO_ITEMS: Record<string, string[]> = {
  // Studio & Media
  studio: ["video-editor", "voice-tts", "ai-avatar", "speech-to-text", "photo-upscaler"],
  "digi-studio": ["video-editor", "voice-tts", "ai-avatar", "speech-to-text", "photo-upscaler"],
  "video-editor": ["video-editor", "ai-avatar", "photo-upscaler"],
  "voice-ai": ["voice-tts", "desktop-voice-ai", "speech-to-text"],
  
  // CRM & Business Ops
  crm: ["crm-operations", "workflow-automation", "whatsapp-automation"],
  digicrm: ["crm-operations", "workflow-automation", "whatsapp-automation"],
  "ai-business-operating-system": ["crm-operations", "workflow-automation", "model-subscriptions"],
  "ai-business-automation": ["workflow-automation", "crm-operations", "telemetry-apm"],

  // Marketing & Sales
  marketing: ["whatsapp-automation", "seo-audit-spider", "crm-operations"],
  whatsapp: ["whatsapp-automation", "crm-operations", "voice-tts"],
  "digi-whatsapp": ["whatsapp-automation", "crm-operations", "voice-tts"],

  // Workflows & Automation
  workflows: ["workflow-automation", "telemetry-apm", "api-integrations"],
  digiflow: ["workflow-automation", "telemetry-apm", "api-integrations"],
  "ai-workflow-automation": ["workflow-automation", "telemetry-apm", "api-integrations"],
  "live-tracking": ["telemetry-apm", "workflow-automation", "api-integrations"],

  // Code & Terminal
  code: ["coding-assistant", "api-integrations", "model-subscriptions"],
  digicode: ["coding-assistant", "api-integrations", "model-subscriptions"],
  cli: ["coding-assistant", "api-integrations", "telemetry-apm"],
  digicli: ["coding-assistant", "api-integrations", "telemetry-apm"],

  // AI & Models
  ai: ["model-subscriptions", "desktop-voice-ai", "coding-assistant"],
  digiai: ["model-subscriptions", "desktop-voice-ai", "coding-assistant"],
  models: ["model-subscriptions", "desktop-voice-ai", "coding-assistant"],
  "model-router": ["model-subscriptions", "desktop-voice-ai", "coding-assistant"],

  // Intelligence & SEO
  intelligence: ["seo-audit-spider", "model-subscriptions", "crm-operations"],

  // Connectivity & MCP
  mcp: ["api-integrations", "telemetry-apm", "workflow-automation"],
  digimcp: ["api-integrations", "telemetry-apm", "workflow-automation"],
  connectors: ["api-integrations", "whatsapp-automation", "workflow-automation"],
  "digi-connectors": ["api-integrations", "whatsapp-automation", "workflow-automation"],
};

export default function SubPageComparisonChart({
  slug,
  category,
  title,
  accentColor = "var(--cyan)",
}: SubPageComparisonChartProps) {
  const items = useMemo(() => {
    if (slug && SLUG_TO_ITEMS[slug]) {
      const ids = SLUG_TO_ITEMS[slug];
      return SAAS_COMPARISONS.filter((item) => ids.includes(item.id));
    }
    if (category) {
      const matched = SAAS_COMPARISONS.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase())
      );
      if (matched.length > 0) return matched;
    }
    // Default fallback to 4 flagship items
    return SAAS_COMPARISONS.slice(0, 4);
  }, [slug, category]);

  const totalAnnualCost = useMemo(() => {
    return items.reduce((acc, i) => acc + i.annualCost, 0);
  }, [items]);

  return (
    <div className="mt-20">
      <div className="text-center">
        <EyebrowLabel text="Paid Tool Comparison" color="var(--amber)" />
        <h2 className="mt-3 font-display text-[26px] font-bold text-[var(--text-primary)] md:text-[36px]">
          {title || "Why Pay Monthly When It's Included Sovereignly?"}
        </h2>
        <p className="mx-auto mt-3 max-w-[680px] font-body text-[14.5px] leading-relaxed text-[var(--text-secondary)]">
          Commercial SaaS alternatives charge recurring monthly subscription fees for this capability.
          With DIGI BIZ OS, it runs natively on your desktop with{" "}
          <strong className="text-[var(--text-primary)]">100% Free Lifetime Access</strong>.
        </p>
      </div>

      <div className="mt-10">
        <GlassCard className="overflow-x-auto p-0 border-white/10 shadow-xl">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="px-5 py-4 font-mono text-[11.5px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Market Paid Tool
                </th>
                <th className="px-5 py-4 font-mono text-[11.5px] font-bold uppercase tracking-wider text-red-400">
                  Market Cost
                </th>
                <th className="px-5 py-4 font-mono text-[11.5px] font-bold uppercase tracking-wider text-[var(--cyan)]">
                  DIGI BIZ OS Native Feature
                </th>
                <th className="px-5 py-4 font-mono text-[11.5px] font-bold uppercase tracking-wider text-emerald-400 text-right">
                  DIGI BIZ OS Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {items.map((item) => (
                <tr key={item.id} className="transition-colors hover:bg-white/[0.02]">
                  <td className="px-5 py-4 align-top">
                    <div className="font-display text-[14.5px] font-semibold text-[var(--text-primary)]">
                      {item.saasTool}
                    </div>
                    <div className="mt-0.5 font-body text-[12px] text-[var(--text-muted)]">
                      {item.saasVendor}
                    </div>
                  </td>
                  <td className="px-5 py-4 align-top whitespace-nowrap">
                    <span className="inline-flex rounded-md bg-red-500/10 px-2 py-0.5 font-mono text-[11.5px] font-semibold text-red-400 border border-red-500/20">
                      {item.costLabel}
                    </span>
                  </td>
                  <td className="px-5 py-4 align-top">
                    <div className="font-display text-[14px] font-medium text-[var(--text-primary)]">
                      {item.digiFeature}
                    </div>
                    <ul className="mt-1.5 space-y-1">
                      {item.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5 font-body text-[11.5px] text-[var(--text-secondary)]">
                          <Check size={12} className="text-[var(--cyan)] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-5 py-4 align-top text-right whitespace-nowrap">
                    <div className="inline-flex flex-col items-end">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-mono text-[12px] font-bold text-emerald-400 border border-emerald-500/30">
                        <Sparkles size={11} />
                        {item.digiCost}
                      </span>
                      <span className="mt-1 font-mono text-[10.5px] text-emerald-500/80">
                        Save +${item.annualCost}/yr
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>

        {/* Value Callout Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[12px] border border-emerald-500/20 bg-emerald-500/5 p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="font-display text-[14px] font-bold text-[var(--text-primary)]">
                Total Annual Savings on this feature set: +${totalAnnualCost.toLocaleString()}/year
              </p>
              <p className="font-body text-[12px] text-[var(--text-secondary)]">
                Included with the £50 lifetime licence. No recurring subscriptions or usage fees.
              </p>
            </div>
          </div>
          <Link
            to="/compare"
            className="inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold text-[var(--cyan)] hover:underline"
          >
            View all 14 SaaS comparisons <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </div>
  );
}
