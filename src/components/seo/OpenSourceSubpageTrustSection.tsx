import { ShieldCheck, GitFork, Scale, Award, ExternalLink, CheckCircle2 } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import EyebrowLabel from "@/components/EyebrowLabel";
import { SubpageToolData } from "@/content/open-source-subpages";

export default function OpenSourceSubpageTrustSection({ tool }: { tool: SubpageToolData }) {
  return (
    <section className="py-12 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <div className="text-center max-w-[720px] mx-auto mb-10">
          <EyebrowLabel text="Transparency & Licensing" color="var(--cyan)" />
          <h2 className="mt-3 font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Verified Open-Source Trust & Provenance
          </h2>
          <p className="mt-2 font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">
            Every software package in the Digi Biz OS hub is independently audited, virus-scanned, and transparently mapped to its official source repository.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: Official License */}
          <GlassCard glowColor="var(--cyan)" className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <Scale size={22} className="text-[var(--cyan)]" />
                <span className="font-mono text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified Free
                </span>
              </div>
              <h3 className="mt-4 font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                {tool.license}
              </h3>
              <p className="mt-2 font-body text-[13px] leading-relaxed text-[var(--text-secondary)]">
                {tool.licenseDetails} No trial periods, no locked features, and no subscription traps.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11.5px] font-mono text-zinc-400">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span>Commercial Permitted</span>
            </div>
          </GlassCard>

          {/* Card 2: Official GitHub Repository */}
          <GlassCard glowColor="#3B82F6" className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <GitFork size={22} className="text-blue-400" />
                <span className="font-mono text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  {tool.stars}
                </span>
              </div>
              <h3 className="mt-4 font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                Official Repository
              </h3>
              <p className="mt-2 font-body text-[13px] leading-relaxed text-[var(--text-secondary)]">
                Inspect raw source code, developer commit histories, and issue trackers directly on GitHub.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5">
              <a
                href={tool.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold text-[var(--cyan)] hover:text-white transition-colors"
              >
                <span>View on GitHub</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </GlassCard>

          {/* Card 3: Security & Malware Scan */}
          <GlassCard glowColor="#10B981" className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <ShieldCheck size={22} className="text-emerald-400" />
                <span className="font-mono text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Clean Scan
                </span>
              </div>
              <h3 className="mt-4 font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                Zero Malware / Spyware
              </h3>
              <p className="mt-2 font-body text-[13px] leading-relaxed text-[var(--text-secondary)]">
                All binaries and scripts are verified against virus databases. Clean SHA-256 hash verified.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11.5px] font-mono text-zinc-400">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span>{tool.privacy}</span>
            </div>
          </GlassCard>

          {/* Card 4: DigiFormation Curation */}
          <GlassCard glowColor="var(--purple)" className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <Award size={22} className="text-purple-400" />
                <span className="font-mono text-[11px] font-semibold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                  UK Verified
                </span>
              </div>
              <h3 className="mt-4 font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                Curated by Digiformation
              </h3>
              <p className="mt-2 font-body text-[13px] leading-relaxed text-[var(--text-secondary)]">
                {tool.provenance} Tested for frictionless desktop installation on Windows 10/11.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11.5px] font-mono text-zinc-400">
              <span>Co. Reg #16994903</span>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
