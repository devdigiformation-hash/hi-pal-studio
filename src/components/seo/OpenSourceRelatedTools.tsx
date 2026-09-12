import { Link } from "@tanstack/react-router";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import EyebrowLabel from "@/components/EyebrowLabel";
import { OPEN_SOURCE_SUBPAGES } from "@/content/open-source-subpages";

interface OpenSourceRelatedToolsProps {
  currentToolId: string;
  relatedToolIds: string[];
}

export default function OpenSourceRelatedTools({
  currentToolId,
  relatedToolIds,
}: OpenSourceRelatedToolsProps) {
  const tools = relatedToolIds
    .map((id) => OPEN_SOURCE_SUBPAGES[id])
    .filter(Boolean)
    .slice(0, 3);

  if (!tools.length) return null;

  return (
    <section className="py-14 border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <EyebrowLabel text="Topical Software Ecosystem" color="var(--cyan)" />
            <h2 className="mt-3 font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[30px]">
              Related Open-Source Software
            </h2>
            <p className="mt-1 font-body text-[14px] text-[var(--text-secondary)]">
              Explore complementary 100% free open-source tools that pair naturally with this application.
            </p>
          </div>
          <Link
            to="/open-source"
            className="inline-flex items-center gap-1.5 font-mono text-[12.5px] font-semibold text-[var(--cyan)] hover:underline self-start sm:self-auto"
          >
            <span>View all 15 free tools</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <Link key={t.id} to={t.route as any} className="group block">
              <GlassCard
                glowColor="var(--cyan)"
                className="h-full p-5 flex flex-col justify-between transition-all duration-200 group-hover:border-[var(--cyan)]/40 group-hover:translate-y-[-2px]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold text-[var(--cyan)] bg-[var(--cyan)]/10 px-2 py-0.5 rounded border border-[var(--cyan)]/20">
                      {t.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11.5px] text-amber-400">
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      <span>{t.stars}</span>
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-[16.5px] font-bold text-[var(--text-primary)] group-hover:text-[var(--cyan)] transition-colors">
                    {t.name}
                  </h3>
                  <p className="mt-2 font-body text-[13px] leading-relaxed text-[var(--text-secondary)] line-clamp-3">
                    {t.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-zinc-400">
                    {t.license}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[12px] font-semibold text-[var(--cyan)] group-hover:translate-x-0.5 transition-transform">
                    <span>Explore Tool</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
