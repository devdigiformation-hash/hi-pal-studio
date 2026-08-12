import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Minus } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import type { ComparePage } from "@/content/compare-pages";

export default function CompareLanding({ page }: { page: ComparePage }) {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Comparisons", path: "/compare" },
            { name: `vs ${page.competitor}`, path: `/compare/${page.slug}` },
          ]}
        />
        <div className="mx-auto max-w-[900px] text-center">
          <EyebrowLabel text={page.eyebrow} color="var(--amber)" />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[30px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[50px]">
            {page.h1}{" "}
            <GradientText from="#F5A623" to="#2FE0C8">
              {page.h1Gradient}
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[780px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
            {page.intro}
          </p>
          <div className="reveal-item delay-3 mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/pricing">
              <CyanButton icon={<ArrowRight size={16} />}>See pricing</CyanButton>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Side by side
          </h2>
          <div className="mt-8 overflow-x-auto rounded-[var(--r-lg)] border border-[var(--border-glass)]">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">
                Feature comparison between DIGI BIZ OS and {page.competitor}
              </caption>
              <thead>
                <tr className="bg-white/[0.04]">
                  <th scope="col" className="p-4 font-display text-[13px] font-bold text-[var(--text-muted)]">
                    Aspect
                  </th>
                  <th scope="col" className="p-4 font-display text-[13px] font-bold text-[var(--cyan)]">
                    DIGI BIZ OS
                  </th>
                  <th scope="col" className="p-4 font-display text-[13px] font-bold text-[var(--text-secondary)]">
                    {page.competitor}
                  </th>
                </tr>
              </thead>
              <tbody>
                {page.rows.map((r) => (
                  <tr key={r.aspect} className="border-t border-[var(--border-subtle)]">
                    <th scope="row" className="p-4 font-body text-[13.5px] font-medium text-[var(--text-muted)]">
                      {r.aspect}
                    </th>
                    <td className="p-4 font-body text-[13.5px] leading-[1.7] text-[var(--text-primary)]">
                      {r.digibiz}
                    </td>
                    <td className="p-4 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                      {r.other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto grid max-w-[1080px] gap-4 md:grid-cols-2">
          <GlassCard glowColor="var(--cyan)" className="p-6">
            <h2 className="font-display text-[18px] font-bold text-[var(--text-primary)]">
              Choose DIGI BIZ OS when
            </h2>
            <ul className="mt-4 space-y-3">
              {page.summary.forDigiBiz.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Check size={16} color="var(--cyan)" strokeWidth={2.4} className="mt-[3px] shrink-0" />
                  <span className="font-body text-[13.5px] leading-[1.75] text-[var(--text-secondary)]">{s}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard glowColor="var(--purple)" className="p-6">
            <h2 className="font-display text-[18px] font-bold text-[var(--text-primary)]">
              Choose {page.competitor} when
            </h2>
            <ul className="mt-4 space-y-3">
              {page.summary.forOther.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Minus size={16} color="var(--purple)" strokeWidth={2.4} className="mt-[3px] shrink-0" />
                  <span className="font-body text-[13.5px] leading-[1.75] text-[var(--text-secondary)]">{s}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionWrapper>

      {page.sections.map((s, i) => (
        <SectionWrapper key={s.heading} className={i % 2 === 0 ? "bg-[var(--bg-surface)]" : undefined}>
          <div className="mx-auto max-w-[900px]">
            <h2 className="font-display text-[22px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[30px]">
              {s.heading}
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">{s.body}</p>
          </div>
        </SectionWrapper>
      ))}

      <SectionWrapper>
        <div className="mx-auto max-w-[900px]">
          <h2 className="font-display text-[22px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[30px]">
            Frequently asked
          </h2>
          <dl className="mt-8 space-y-6">
            {page.faq.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-[15.5px] font-bold text-[var(--text-primary)]">{f.q}</dt>
                <dd className="mt-2 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="font-display text-[20px] font-bold text-[var(--text-primary)] md:text-[26px]">
            Related reading
          </h2>
          <nav aria-label="Related pages" className="mt-6 flex flex-wrap gap-3">
            {page.links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] px-4 py-2 font-body text-[13.5px] text-[var(--text-secondary)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--text-primary)]"
              >
                {l.label}
                <ArrowRight size={13} />
              </Link>
            ))}
          </nav>
        </div>
      </SectionWrapper>
    </main>
  );
}
