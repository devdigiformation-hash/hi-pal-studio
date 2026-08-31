import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/compare/")({
  beforeLoad: () => {
    throw redirect({ to: "/blog" });
  },
  component: () => null,
});

function CompareHub() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Comparisons", path: "/compare" },
          ]}
        />
        <div className="mx-auto max-w-[880px] text-center">
          <EyebrowLabel text="Comparisons" color="var(--amber)" />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[50px]">
            How DIGI BIZ OS{" "}
            <GradientText from="#F5A623" to="#2FE0C8">
              Compares.
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[720px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
            Honest, side-by-side comparisons. Each page states clearly when the alternative is the
            better choice — because picking the wrong tool wastes more money than any licence.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARE_PAGES.map((p) => (
            <Link
              key={p.slug}
              to="/compare/$slug"
              params={{ slug: p.slug }}
              className="group block h-full"
            >
              <GlassCard glowColor="var(--amber)" className="h-full p-6">
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--amber)]">
                  vs {p.competitor}
                </span>
                <h2 className="mt-3 font-display text-[17px] font-bold text-[var(--text-primary)]">
                  DIGI BIZ OS vs {p.competitor}
                </h2>
                <p className="mt-2 line-clamp-3 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {p.metaDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-display text-[12.5px] font-semibold text-[var(--cyan)]">
                  Read comparison <ArrowRight size={13} />
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
