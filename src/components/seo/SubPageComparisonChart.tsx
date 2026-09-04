import { useMemo } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, DollarSign, Info } from "lucide-react";
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

// Mapping of module and feature slugs to specific granular comparison items
const SLUG_TO_ITEMS: Record<string, string[]> = {
  // Studio & Media Subpages
  studio: [
    "video-editor",
    "audio-noise-reduction",
    "voice-tts",
    "ai-avatar",
    "speech-to-text",
    "course-transcript-generator",
    "photo-upscaler",
    "vocal-remover",
    "document-audiobook",
  ],
  "digi-studio": [
    "video-editor",
    "audio-noise-reduction",
    "voice-tts",
    "ai-avatar",
    "speech-to-text",
    "course-transcript-generator",
    "photo-upscaler",
    "vocal-remover",
    "document-audiobook",
  ],
  "/features/digi-studio": [
    "video-editor",
    "audio-noise-reduction",
    "voice-tts",
    "ai-avatar",
    "speech-to-text",
    "course-transcript-generator",
    "photo-upscaler",
    "vocal-remover",
    "document-audiobook",
  ],
  "video-editor": [
    "video-editor",
    "ai-avatar",
    "audio-noise-reduction",
    "photo-upscaler",
  ],

  // Voice AI & Audio Intelligence Subpages
  "voice-ai": [
    "audio-noise-reduction",
    "voice-tts",
    "document-audiobook",
    "desktop-voice-ai",
    "speech-to-text",
    "vocal-remover",
  ],
  "voice-assistant": [
    "desktop-voice-ai",
    "audio-noise-reduction",
    "voice-tts",
    "document-audiobook",
    "speech-to-text",
  ],
  "/features/voice-assistant": [
    "desktop-voice-ai",
    "audio-noise-reduction",
    "voice-tts",
    "document-audiobook",
    "speech-to-text",
  ],

  // CRM & Business Operations
  crm: [
    "crm-operations",
    "workflow-automation",
    "whatsapp-automation",
    "social-media-scheduler",
  ],
  digicrm: [
    "crm-operations",
    "workflow-automation",
    "whatsapp-automation",
    "social-media-scheduler",
  ],
  "digi-crm": [
    "crm-operations",
    "workflow-automation",
    "whatsapp-automation",
    "social-media-scheduler",
  ],
  "/features/digi-crm": [
    "crm-operations",
    "workflow-automation",
    "whatsapp-automation",
    "social-media-scheduler",
  ],
  "ai-business-operating-system": [
    "crm-operations",
    "workflow-automation",
    "model-subscriptions",
  ],
  "ai-business-automation": [
    "workflow-automation",
    "crm-operations",
    "telemetry-apm",
  ],

  // Marketing & Sales Subpages
  marketing: [
    "social-media-scheduler",
    "whatsapp-automation",
    "seo-audit-spider",
    "crm-operations",
  ],
  "digi-marketing": [
    "social-media-scheduler",
    "whatsapp-automation",
    "seo-audit-spider",
    "crm-operations",
  ],
  "/features/digi-marketing": [
    "social-media-scheduler",
    "whatsapp-automation",
    "seo-audit-spider",
    "crm-operations",
  ],
  whatsapp: [
    "whatsapp-automation",
    "crm-operations",
    "voice-tts",
  ],
  "digi-whatsapp": [
    "whatsapp-automation",
    "crm-operations",
    "voice-tts",
  ],
  "/features/digi-whatsapp": [
    "whatsapp-automation",
    "crm-operations",
    "voice-tts",
  ],

  // Workflows & Automation
  workflows: [
    "workflow-automation",
    "telemetry-apm",
    "api-integrations",
  ],
  digiflow: [
    "workflow-automation",
    "telemetry-apm",
    "api-integrations",
  ],
  "/features/digiflow": [
    "workflow-automation",
    "telemetry-apm",
    "api-integrations",
  ],
  "live-tracking": [
    "telemetry-apm",
    "workflow-automation",
    "api-integrations",
  ],
  "/features/live-tracking": [
    "telemetry-apm",
    "workflow-automation",
    "api-integrations",
  ],

  // Code & Terminal
  code: [
    "coding-assistant",
    "api-integrations",
    "model-subscriptions",
  ],
  digicode: [
    "coding-assistant",
    "api-integrations",
    "model-subscriptions",
  ],
  "/features/digicode": [
    "coding-assistant",
    "api-integrations",
    "model-subscriptions",
  ],
  cli: [
    "coding-assistant",
    "api-integrations",
    "telemetry-apm",
  ],
  digicli: [
    "coding-assistant",
    "api-integrations",
    "telemetry-apm",
  ],
  "/features/digicli": [
    "coding-assistant",
    "api-integrations",
    "telemetry-apm",
  ],

  // AI & Models
  ai: [
    "model-subscriptions",
    "desktop-voice-ai",
    "coding-assistant",
  ],
  digiai: [
    "model-subscriptions",
    "desktop-voice-ai",
    "coding-assistant",
  ],
  "digi-ai": [
    "model-subscriptions",
    "desktop-voice-ai",
    "coding-assistant",
  ],
  "/features/digi-ai": [
    "model-subscriptions",
    "desktop-voice-ai",
    "coding-assistant",
  ],
  models: [
    "model-subscriptions",
    "desktop-voice-ai",
    "coding-assistant",
  ],
  "model-router": [
    "model-subscriptions",
    "desktop-voice-ai",
    "coding-assistant",
  ],
  "/features/model-router": [
    "model-subscriptions",
    "desktop-voice-ai",
    "coding-assistant",
  ],

  // Intelligence & SEO
  intelligence: [
    "seo-audit-spider",
    "course-transcript-generator",
    "model-subscriptions",
    "crm-operations",
  ],
  "digi-intelligence": [
    "seo-audit-spider",
    "course-transcript-generator",
    "model-subscriptions",
    "crm-operations",
  ],
  "/features/digi-intelligence": [
    "seo-audit-spider",
    "course-transcript-generator",
    "model-subscriptions",
    "crm-operations",
  ],

  // Connectivity & MCP
  mcp: [
    "api-integrations",
    "telemetry-apm",
    "workflow-automation",
  ],
  digimcp: [
    "api-integrations",
    "telemetry-apm",
    "workflow-automation",
  ],
  "/features/digimcp": [
    "api-integrations",
    "telemetry-apm",
    "workflow-automation",
  ],
  connectors: [
    "api-integrations",
    "whatsapp-automation",
    "workflow-automation",
  ],
  "digi-connectors": [
    "api-integrations",
    "whatsapp-automation",
    "workflow-automation",
  ],
  "/features/digi-connectors": [
    "api-integrations",
    "whatsapp-automation",
    "workflow-automation",
  ],
};

export default function SubPageComparisonChart({
  slug,
  category,
  title,
  accentColor = "var(--cyan)",
}: SubPageComparisonChartProps) {
  const items = useMemo(() => {
    // Check direct slug match
    if (slug) {
      const cleanSlug = slug.replace(/^\/+/, "").replace(/\/+$/, "");
      if (SLUG_TO_ITEMS[slug]) {
        const ids = SLUG_TO_ITEMS[slug];
        return SAAS_COMPARISONS.filter((item) => ids.includes(item.id));
      }
      if (SLUG_TO_ITEMS[cleanSlug]) {
        const ids = SLUG_TO_ITEMS[cleanSlug];
        return SAAS_COMPARISONS.filter((item) => ids.includes(item.id));
      }
    }
    if (category) {
      const matched = SAAS_COMPARISONS.filter((item) =>
        item.category.toLowerCase().includes(category.toLowerCase())
      );
      if (matched.length > 0) return matched;
    }
    // Default fallback to flagship items
    return SAAS_COMPARISONS.slice(0, 5);
  }, [slug, category]);

  const totalAnnualCost = useMemo(() => {
    return items.reduce((acc, i) => acc + i.annualCost, 0);
  }, [items]);

  return (
    <div className="mt-20">
      <div className="text-center">
        <EyebrowLabel text="Commercial Tool Price Comparison" color="var(--amber)" icon={DollarSign} />
        <h2 className="mt-3 font-display text-[26px] font-bold text-[var(--text-primary)] md:text-[36px]">
          {title || "Feature-by-Feature Commercial SaaS Replacement"}
        </h2>
        <p className="mx-auto mt-3 max-w-[700px] font-body text-[14.5px] leading-relaxed text-[var(--text-secondary)]">
          Commercial SaaS vendors charge recurring subscriptions and per-minute rendering fees for these individual tools.
          With DIGI BIZ OS, every capability below runs natively on your Windows PC with{" "}
          <strong className="text-[var(--text-primary)]">100% Free Lifetime Access</strong>.
        </p>

        {/* Retained Savings Pill */}
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-[12.5px] font-semibold text-emerald-400">
          <Sparkles size={14} className="animate-pulse" />
          <span>Calculated Annual Savings for this Module:</span>
          <span className="font-mono font-bold text-emerald-300">+$${totalAnnualCost.toLocaleString()}/year</span>
        </div>
      </div>

      {/* Honest Comparison Verification Banner */}
      <div className="mx-auto mt-6 max-w-[850px] rounded-xl border border-white/10 bg-white/[0.02] p-3.5 flex items-start gap-3 text-left">
        <ShieldCheck size={18} className="text-[#2FE0C8] shrink-0 mt-0.5" />
        <div className="text-[12px] leading-relaxed text-[var(--text-secondary)]">
          <strong className="text-[var(--text-primary)] font-semibold">Honest Market Audit Guarantee: </strong>
          We only list commercial tools that charge verified monthly subscriptions (e.g. Adobe Podcast, CapCut Pro, ElevenLabs, Speechify, Otter.ai, WATI).
          Standard utilities that are universally free elsewhere are strictly excluded from cost calculations.
        </div>
      </div>

      <div className="mt-8">
        <GlassCard className="overflow-x-auto p-0 border-white/10 shadow-xl">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="px-5 py-4 font-mono text-[11.5px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                  Market Paid Tool & Vendor
                </th>
                <th className="px-5 py-4 font-mono text-[11.5px] font-bold uppercase tracking-wider text-red-400">
                  Commercial Cost
                </th>
                <th className="px-5 py-4 font-mono text-[11.5px] font-bold uppercase tracking-wider text-[var(--cyan)]">
                  DIGI BIZ OS Native Capability
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
                      {item.highlights.slice(0, 3).map((h, i) => (
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
                      <span className="mt-1 font-mono text-[11px] font-semibold text-emerald-400">
                        Save +$${item.annualCost}/yr
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </GlassCard>
      </div>

      {/* Subpage CTA */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row">
        <div>
          <div className="font-display text-[15px] font-semibold text-[var(--text-primary)]">
            Explore All 17+ Commercial SaaS Replacements
          </div>
          <div className="text-[12.5px] text-[var(--text-secondary)]">
            See the master comparison matrix across CRM, Media Studio, Coding, Workflows, and Telemetry.
          </div>
        </div>
        <Link
          to="/compare"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--cyan)] px-4 py-2 font-mono text-[12px] font-bold text-black transition-all hover:brightness-110 shrink-0"
        >
          <span>View Master Comparison</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
