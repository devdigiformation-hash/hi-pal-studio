import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
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

      {page.image ? (
        <SectionWrapper className="!py-0">
          <figure className="mx-auto max-w-[1000px]">
            <div className="relative">
              {/* ambient light behind the subject */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 55% 55% at 50% 45%, rgba(47,224,200,0.16), transparent 70%), radial-gradient(ellipse 45% 45% at 50% 80%, rgba(139,124,246,0.14), transparent 72%)",
                  filter: "blur(6px)",
                }}
              />
              <img
                src={page.image.src}
                alt={page.image.alt}
                loading="lazy"
                decoding="async"
                className="relative block h-auto w-full"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, #000 0%, #000 62%, rgba(0,0,0,0.75) 82%, rgba(0,0,0,0) 100%)",
                }}
              />
              {/* floor light sweep so the cut dissolves into the page */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%]"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 100% at 50% 100%, rgba(47,224,200,0.22), rgba(47,224,200,0.05) 55%, transparent 75%)",
                }}
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
