import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import SectionWrapper from "@/components/SectionWrapper";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import { useTrackDownload } from "@/lib/use-download-tracking";

export default function PageCTA({
  title,
  badges = [],
  cta,
  icon,
  trackSource,
}: {
  title: string;
  badges?: string[];
  cta: string;
  icon?: ReactNode;
  trackSource?: string;
}) {
  const trackDownload = useTrackDownload();
  return (
    <SectionWrapper>
      <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
        <h2 className="reveal-item font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[48px]">
          {title}
        </h2>
        {badges.length > 0 ? (
          <div className="reveal-item delay-1 mt-6 flex flex-wrap items-center justify-center gap-3">
            {badges.map((b) => (
              <MonoBadge key={b}>{b}</MonoBadge>
            ))}
          </div>
        ) : null}
        <div className="reveal-item delay-2 mt-9">
          <Link to="/download" onClick={() => trackDownload(trackSource ?? "page_cta_windows")}>
            <CyanButton size="lg" icon={icon}>
              {cta}
            </CyanButton>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
