import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers, Sparkles, Zap, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { MODULES_LIST } from "@/content/modules-data";
import { buildMeta, breadcrumbLd, softwareLd } from "@/lib/seo";

const TITLE = "Enterprise Business Modules — DIGI BIZ OS AI Operating System";
const DESC =
  "Explore the 8 core proprietary business modules of DIGI BIZ OS: Digi CRM, Digi WhatsApp Agent, Digi Marketing, Digi Intelligence, Digi Flow, Digi Docs, Digi Code, and Digi Tools on Windows.";

export const Route = createFileRoute("/modules/")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/modules", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Modules", path: "/modules" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(softwareLd("DIGI BIZ OS Business Modules", DESC, "/modules")),
        },
      ],
    };
  },
  component: ModulesHubPage,
});

function ModulesHubPage() {
  return (
    <main className="min-h-screen pt-[100px] md:pt-[120px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Modules", path: "/modules" },
          ]}
        />

        <div className="mt-8 text-center">
          <EyebrowLabel text="Modular Business Intelligence" icon={Layers} />
          <h1 className="mt-4 font-display text-[34px] font-bold leading-[1.12] text-[var(--text-primary)] md:text-[50px]">
            The 8 Core Enterprise Modules of{" "}
            <GradientText text="DIGI BIZ OS" gradient="linear-gradient(135deg, #2FE0C8, #10B981)" />
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] font-body text-[16px] leading-relaxed text-[var(--text-secondary)]">
            A unified, local-first digital operating system for Windows. Eliminate recurring SaaS fees with native CRM, marketing, WhatsApp sales automation, market intelligence, document cryptography, and autonomous coding agents.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES_LIST.map((mod) => {
            const accent = mod.accentColor || "#10B981";
            return (
              <Link key={mod.slug} to={`/modules/${mod.slug}` as any} className="group block h-full">
                <GlassCard
                  glowColor={accent}
                  className="flex h-full flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30"
                >
                  <div>
                    <div
                      className="inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10.5px] font-semibold uppercase tracking-wider"
                      style={{
                        color: accent,
                        borderColor: `${accent}40`,
                        background: `${accent}15`,
                      }}
                    >
                      {mod.eyebrow}
                    </div>

                    <h2 className="mt-4 font-display text-[20px] font-bold text-[var(--text-primary)] group-hover:text-[var(--cyan)]">
                      {mod.name}
                    </h2>

                    <p className="mt-3 font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
                      {mod.directAnswer}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[var(--border-subtle)] pt-4 font-body text-[13px] font-semibold text-[var(--cyan)]">
                    <span>Explore Module Capabilities</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </GlassCard>
              </Link>
            );
          })}
        </div>

        {/* BOTTOM ECOSYSTEM CTA */}
        <div className="mt-20 text-center">
          <GlassCard glowColor="#2FE0C8" className="p-10 md:p-14">
            <h2 className="font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[38px]">
              All 8 Modules Included in Your One-Time Licence
            </h2>
            <p className="mx-auto mt-4 max-w-[620px] font-body text-[15px] leading-relaxed text-[var(--text-secondary)]">
              No monthly per-seat invoices, no cloud locks, and 100% offline data privacy. Deploy DIGI BIZ OS on Windows for £50 lifetime.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/download">
                <CyanButton size="lg" icon={<Zap size={18} />}>
                  Download DIGI BIZ OS
                </CyanButton>
              </Link>
              <Link to="/pricing">
                <GhostButton size="lg" icon={<ShieldCheck size={18} />}>
                  View £50 Pricing
                </GhostButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>
    </main>
  );
}
