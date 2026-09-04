import { useMemo } from 'react';
import { Check, ShieldCheck, DollarSign, ArrowRight, Download, Sparkles, AlertCircle, Terminal, Laptop } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import EyebrowLabel from '@/components/EyebrowLabel';
import GradientText from '@/components/GradientText';
import CyanButton from '@/components/CyanButton';
import MonoBadge from '@/components/MonoBadge';
import { OPEN_SOURCE_COMPARISONS, type OpenSourceComparisonItem } from '@/content/open-source-comparison-data';

interface OpenSourceValueComparisonChartProps {
  toolId: string;
  accentColor?: string;
  downloadUrl?: string;
}

export default function OpenSourceValueComparisonChart({
  toolId,
  accentColor = '#2FE0C8',
  downloadUrl,
}: OpenSourceValueComparisonChartProps) {
  const data: OpenSourceComparisonItem | undefined = useMemo(() => {
    return OPEN_SOURCE_COMPARISONS[toolId];
  }, [toolId]);

  if (!data) return null;

  return (
    <section className="relative my-16 overflow-hidden rounded-[20px] border border-[rgba(47,224,200,0.18)] bg-[rgba(13,17,23,0.85)] p-6 backdrop-blur-xl md:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: accentColor }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <EyebrowLabel text="Market Worth & SaaS Replacement Appraisal" />
            <h2 className="mt-2 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[34px]">
              Why Pay Subscriptions?{' '}
              <GradientText from="#2FE0C8" to="#8B7CF6">
                100% Free & Open-Source.
              </GradientText>
            </h2>
            <p className="mt-2 max-w-[700px] font-body text-[14.5px] leading-[1.7] text-[var(--text-secondary)] md:text-[15.5px]">
              {data.tagline}
            </p>
          </div>

          {/* Savings Badge */}
          <div className="mt-4 flex flex-col items-start rounded-xl border border-[rgba(61,220,132,0.35)] bg-[rgba(61,220,132,0.08)] p-4 md:mt-0 md:items-end">
            <span className="font-mono text-[11.5px] uppercase tracking-wider text-[var(--text-muted)]">
              Your Annual Savings
            </span>
            <span className="font-display text-[28px] font-extrabold text-[#3DDC84] md:text-[32px]">
              {data.annualSavings}
            </span>
            <span className="font-mono text-[11px] text-[rgba(255,255,255,0.6)]">
              per seat / forever free
            </span>
          </div>
        </div>

        {/* 3-Column Valuation Snapshot Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <GlassCard glowColor="#F5A623" className="p-5">
            <span className="font-mono text-[12px] uppercase text-[#F5A623]">Commercial Market Cost</span>
            <div className="mt-2 font-display text-[22px] font-bold text-[var(--text-primary)]">
              {data.marketAnnualCost}
            </div>
            <p className="mt-1 font-body text-[12.5px] text-[var(--text-muted)]">
              Paid licenses & subscriptions in the commercial market
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {data.paidAlternatives.map((alt) => (
                <span key={alt} className="rounded border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-secondary)]">
                  {alt}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard glowColor="#2FE0C8" className="p-5">
            <span className="font-mono text-[12px] uppercase text-[var(--cyan)]">Your Cost Here</span>
            <div className="mt-2 font-display text-[22px] font-bold text-[#3DDC84]">
              {data.openSourceCost}
            </div>
            <p className="mt-1 font-body text-[12.5px] text-[var(--text-muted)]">
              Permissive license, unlimited local usage on your PC
            </p>
            <div className="mt-3">
              <MonoBadge color="#3DDC84">{data.license}</MonoBadge>
            </div>
          </GlassCard>

          <GlassCard glowColor="#8B5CF6" className="p-5">
            <span className="font-mono text-[12px] uppercase text-[#8B5CF6]">Data Ownership</span>
            <div className="mt-2 font-display text-[22px] font-bold text-[var(--text-primary)]">
              100% Local Privacy
            </div>
            <p className="mt-1 font-body text-[12.5px] text-[var(--text-muted)]">
              No cloud telemetry, no account locking, zero vendor spying
            </p>
            <div className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-[#8B5CF6]">
              <ShieldCheck size={14} /> Runs natively on Windows 10/11
            </div>
          </GlassCard>
        </div>

        {/* Feature-by-Feature Value Table */}
        <div className="mt-10 overflow-x-auto rounded-[14px] border border-[var(--border-subtle)] bg-[rgba(15,20,30,0.6)]">
          <table className="w-full min-w-[640px] border-collapse text-left font-body text-[13.5px]">
            <thead>
              <tr className="border-b border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] text-[12.5px] uppercase tracking-wider text-[var(--text-muted)]">
                <th className="py-3.5 px-5 font-display">Key Capability</th>
                <th className="py-3.5 px-5 font-display text-[var(--cyan)]">
                  {data.name} (Open-Source)
                </th>
                <th className="py-3.5 px-5 font-display text-[#F5A623]">
                  Commercial Paid Competitors
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
              {data.matrix.map((row) => (
                <tr key={row.feature} className="transition-colors hover:bg-[rgba(255,255,255,0.02)]">
                  <td className="py-3.5 px-5 font-medium text-[var(--text-primary)]">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-5 text-[var(--cyan)] font-semibold">
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-[#3DDC84] shrink-0" />
                      <span>{row.openSourceValue}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-5 text-[var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--text-muted)]">•</span>
                      <span>{row.commercialPaidValue}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* The Pathway Box ("راستہ دکھا رہے ہیں") */}
        <div className="mt-8 rounded-[16px] border border-[rgba(139,124,246,0.3)] bg-[radial-gradient(ellipse_at_top,rgba(139,124,246,0.12),transparent)] p-6 md:p-8">
          <div className="flex items-center gap-2.5 font-display text-[16px] font-bold text-[var(--text-primary)] md:text-[18px]">
            <Sparkles size={18} className="text-[var(--cyan)]" />
            <span>How You Can Use This Tool Right Now (The Free Pathway)</span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-4">
              <div className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase text-[var(--cyan)]">
                <Laptop size={14} /> Step 1: Download & Run Free
              </div>
              <p className="font-body text-[13px] leading-[1.65] text-[var(--text-secondary)]">
                {data.pathwayGuide.howToRun}
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-4">
              <div className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase text-[#3DDC84]">
                <ShieldCheck size={14} /> Step 2: Why It Is 100% Free
              </div>
              <p className="font-body text-[13px] leading-[1.65] text-[var(--text-secondary)]">
                {data.pathwayGuide.whyFree}
              </p>
            </div>

            <div className="flex flex-col gap-2 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-4">
              <div className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase text-[#8B5CF6]">
                <Terminal size={14} /> Step 3: DIGI BIZ OS Integration
              </div>
              <p className="font-body text-[13px] leading-[1.65] text-[var(--text-secondary)]">
                {data.pathwayGuide.osIntegration}
              </p>
            </div>
          </div>

          {downloadUrl && (
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.08)] pt-5">
              <span className="font-body text-[13.5px] text-[var(--text-muted)]">
                Ready to replace expensive SaaS? Download the free installer directly:
              </span>
              <a href={downloadUrl} download>
                <CyanButton size="md" icon={<Download size={15} />}>
                  Download {data.name.split(' ')[0]} Now
                </CyanButton>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
