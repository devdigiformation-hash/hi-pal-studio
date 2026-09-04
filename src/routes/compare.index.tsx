import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, DollarSign, Shield, Zap, Check, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import SaasComparisonMatrix from "@/components/home/SaasComparisonMatrix";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import { COMPARE_PAGES } from "@/content/compare-pages";
import { buildMeta, breadcrumbLd, softwareLd, faqLd } from "@/lib/seo";

const TITLE = "SaaS Comparisons & Paid Tool Alternatives | DIGI BIZ OS";
const DESC =
  "Compare DIGI BIZ OS against expensive monthly SaaS subscriptions: CapCut Pro, Premiere Pro, ElevenLabs, HeyGen, HubSpot, Zapier, Cursor, and Screaming Frog. Save $4,800+/year.";

const FAQS = [
  {
    q: "How can DIGI BIZ OS replace 14+ expensive SaaS tools for a single one-time price?",
    a: "Traditional SaaS companies charge monthly subscriptions because they run proprietary servers in the cloud and mark up cloud compute costs. DIGI BIZ OS runs natively on your Windows PC using your own computer hardware—eliminating cloud rendering bills, per-minute server markups, and per-seat SaaS licensing.",
  },
  {
    q: "Are the creative and AI tools inside DIGI BIZ OS really free?",
    a: "Yes. Every built-in module—including the timeline video editor, multilingual voice synthesis, AI avatar generator, offline speech-to-text, 20-module CRM, and always-on workflows—is 100% included with your lifetime licence. There are zero recurring monthly bills.",
  },
  {
    q: "Do I need an internet connection to use these tools?",
    a: "No. Video editing, speech-to-text transcription, local AI models, database queries, and CRM functions run 100% offline and air-gapped on your PC. Cloud models and WhatsApp require an internet connection, but you bring your own API keys with zero platform markup.",
  },
  {
    q: "Can I use DIGI BIZ OS for commercial client work?",
    a: "Yes. The DIGI BIZ OS lifetime licence grants full commercial rights. Every video, voiceover, avatar, code snippet, and document generated is 100% your intellectual property.",
  },
];

export const Route = createFileRoute("/compare/")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/compare", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Comparisons", path: "/compare" },
            ])
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(softwareLd("DIGI BIZ OS SaaS Comparison Matrix", DESC, "/compare")),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqLd(FAQS)),
        },
      ],
    };
  },
  component: CompareHub,
});

function CompareHub() {
  return (
    <main className="min-h-screen pt-[80px] md:pt-[100px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "SaaS Comparisons", path: "/compare" },
          ]}
        />
        <div className="mx-auto max-w-[880px] text-center mt-6">
          <EyebrowLabel text="SaaS Alternative Matrix" color="var(--amber)" />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[54px]">
            Why Pay $4,800+ Every Year for{" "}
            <GradientText from="#F5A623" to="#2FE0C8">
              Fragmented SaaS?
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[720px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[17px]">
            Explore our comprehensive value matrix below. See exactly how DIGI BIZ OS replaces individual paid tools
            across video editing, voiceovers, AI avatars, CRM, WhatsApp automation, and coding with sovereign desktop execution.
          </p>
        </div>
      </SectionWrapper>

      {/* Embed Master SaaS Replacement Matrix */}
      <SaasComparisonMatrix />

      {/* In-Depth 1-on-1 Comparisons Section */}
      <SectionWrapper id="in-depth-comparisons">
        <div className="mx-auto max-w-[1240px]">
          <div className="text-center">
            <EyebrowLabel text="Deep-Dive Breakdowns" color="var(--cyan)" />
            <h2 className="mt-4 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[40px]">
              Detailed 1-on-1 Feature Comparisons
            </h2>
            <p className="mx-auto mt-3 max-w-[640px] font-body text-[15px] text-[var(--text-secondary)]">
              Read transparent technical analyses comparing DIGI BIZ OS directly against leading market alternatives.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COMPARE_PAGES.map((p) => (
              <Link
                key={p.slug}
                to="/compare/$slug"
                params={{ slug: p.slug }}
                className="group block h-full"
              >
                <GlassCard glowColor="var(--cyan)" className="h-full p-6 transition-all duration-300 hover:border-[var(--cyan)]/40 hover:scale-[1.01]">
                  <span className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--amber)]">
                    vs {p.competitor}
                  </span>
                  <h3 className="mt-3 font-display text-[18px] font-bold text-[var(--text-primary)] group-hover:text-[var(--cyan)] transition-colors">
                    DIGI BIZ OS vs {p.competitor}
                  </h3>
                  <p className="mt-2 line-clamp-3 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                    {p.metaDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-display text-[12.5px] font-semibold text-[var(--cyan)] group-hover:translate-x-1 transition-transform">
                    Read in-depth analysis <ArrowRight size={13} />
                  </span>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Frequently Asked Questions */}
      <SectionWrapper id="compare-faq" className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[880px]">
          <div className="text-center">
            <EyebrowLabel text="Common Questions" color="var(--purple)" />
            <h2 className="mt-4 font-display text-[28px] font-bold text-[var(--text-primary)] md:text-[38px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {FAQS.map((faq, idx) => (
              <GlassCard key={idx} className="p-6">
                <h3 className="font-display text-[16px] font-bold text-[var(--text-primary)]">
                  {faq.q}
                </h3>
                <p className="mt-3 font-body text-[14.5px] leading-[1.8] text-[var(--text-secondary)]">
                  {faq.a}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
