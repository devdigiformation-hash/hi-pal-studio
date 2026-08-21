import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { AIJarvis } from "@/components/AIJarvis";
import type { SeoPage } from "@/content/seo-pages";

export default function SeoLanding({ page }: { page: SeoPage }) {
  const accent = page.accent ?? "var(--cyan)";
  const segments = page.path.split("/").filter(Boolean);
  const trail = [
    { name: "Home", path: "/" },
    ...(segments.length > 1 && segments[0] === "features"
      ? [{ name: "Features", path: "/features" }]
      : []),
    { name: page.eyebrow, path: page.path },
  ];

  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs trail={trail} />
        <div className="mx-auto max-w-[900px] text-center">
          <EyebrowLabel text={page.eyebrow} color={accent} />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] md:text-[56px]">
            {page.h1}{" "}
            <GradientText from="#2FE0C8" to="#8B7CF6">
              {page.h1Gradient}
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[760px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[17px]">
            {page.intro}
          </p>
          <div className="reveal-item delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/pricing">
              <CyanButton icon={<ArrowRight size={16} />}>Get DIGI BIZ OS</CyanButton>
            </Link>
            <Link
              to="/features"
              className="inline-flex h-11 items-center rounded-full border border-[var(--border-glass)] px-5 font-display text-[13px] font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Explore all features
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {page.path === "/jarvis-ai" ? (
        <div className="mt-12 bg-black py-12">
          <AIJarvis />
          <div className="mx-auto mt-8 max-w-[800px] text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ffff]/20 bg-[#00ffff]/5 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-[#00ffff] animate-pulse" />
              <span className="font-mono text-[12px] tracking-wider text-[#00ffff] uppercase">System Online: JARVIS-CORE-01</span>
            </div>
          </div>
        </div>
      ) : page.image ? (
        <SectionWrapper className="!py-0">
          <figure className="mx-auto max-w-[1000px]">
            <div className="overflow-hidden rounded-[var(--r-lg)] border border-[var(--border-glass)] shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
              <img
                src={page.image.src}
                alt={page.image.alt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>
            <figcaption className="mt-3 text-center font-body text-[13px] text-[var(--text-muted)]">
              {page.image.caption}
            </figcaption>
          </figure>
        </SectionWrapper>
      ) : null}

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
            Straight answers
          </h2>
          <dl className="mt-8 space-y-6">
            {page.answers.map((a) => (
              <div key={a.q}>
                <dt className="font-display text-[16px] font-bold text-[var(--text-primary)] md:text-[18px]">
                  {a.q}
                </dt>
                <dd className="mt-2 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)] md:text-[15.5px]">
                  {a.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[1180px]">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
            What you get
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.capabilities.map((c) => (
              <GlassCard key={c.title} glowColor={accent} className="h-full p-6">
                <h3 className="font-display text-[16px] font-bold text-[var(--text-primary)]">
                  {c.title}
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.75] text-[var(--text-secondary)]">
                  {c.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {page.sections.map((s, i) => (
        <SectionWrapper key={s.heading} className={i % 2 === 0 ? "bg-[var(--bg-surface)]" : undefined}>
          <div className="mx-auto max-w-[900px]">
            <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
              {s.heading}
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16px]">
              {s.body}
            </p>
            {s.bullets ? (
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check size={17} color={accent} strokeWidth={2.4} className="mt-[3px] shrink-0" />
                    <span className="font-body text-[14px] leading-[1.75] text-[var(--text-secondary)] md:text-[15px]">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </SectionWrapper>
      ))}

      <SectionWrapper>
        <div className="mx-auto max-w-[900px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Frequently asked
          </h2>
          <dl className="mt-8 space-y-6">
            {page.faq.map((f) => (
              <div key={f.q}>
                <dt className="font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                  {f.q}
                </dt>
                <dd className="mt-2 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="font-display text-[22px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[28px]">
            Continue exploring DIGI BIZ OS
          </h2>
          <nav aria-label="Related pages" className="mt-6 flex flex-wrap gap-3">
            {page.links.map((l) => (
              <Link
                key={l.to + l.label}
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
