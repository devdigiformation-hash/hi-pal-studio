import { createFileRoute } from "@tanstack/react-router";
import SmartLink from "@/components/SmartLink";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import { buildMeta, breadcrumbLd } from "@/lib/seo";
import { FEATURE_PAGES, INTENT_PAGES } from "@/content/seo-pages";
import { COMPARE_PAGES } from "@/content/compare-pages";
import { BLOG_POSTS } from "@/content/blog-posts";

const TITLE = "Site Map — All DIGI BIZ OS Pages";
const DESC =
  "Browse every DIGI BIZ OS page: product features, voice AI, desktop automation, agents, integrations, pricing, download, comparisons, guides and support.";

export const Route = createFileRoute("/sitemap")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/sitemap", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Site Map", path: "/sitemap" },
            ]),
          ),
        },
      ],
    };
  },
  component: SiteMapPage,
});

function Group({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <EyebrowLabel text={title} color="var(--cyan)" />
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <SmartLink
              to={l.to}
              className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
            >
              {l.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SiteMapPage() {
  const main = [
    { label: "Home", to: "/" },
    { label: "All Features", to: "/features" },
    { label: "Voice AI Control", to: "/voice-ai" },
    { label: "Desktop Automation", to: "/desktop-os" },
    { label: "Multi-Agent Platform", to: "/agents" },
    { label: "Integrations & Tools", to: "/integrations" },
    { label: "Pricing", to: "/pricing" },
    { label: "Download for Windows", to: "/download" },
    { label: "Comparisons", to: "/compare" },
    { label: "Blog & Guides", to: "/blog" },
    { label: "FAQ", to: "/faq" },
    { label: "About", to: "/about" },
    { label: "Open Source Software", to: "/open-source" },
    { label: "Jan AI — Free Offline AI for Windows", to: "/open-source/jan-ai" },
    { label: "AnythingLLM — Free Local Document AI", to: "/open-source/anythingllm" },
    { label: "Tuttle Time Tracker — Free Billable Hours", to: "/open-source/tuttle" },
    { label: "Contact", to: "/contact" },
  ];
  const legal = [
    { label: "Terms & Conditions", to: "/terms" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Refund Policy", to: "/refund" },
    { label: "Delivery Policy", to: "/delivery" },
  ];

  return (
    <main className="min-h-screen pt-[100px] md:pt-[120px]">
      <SectionWrapper>
        <div className="mx-auto max-w-[1200px]">
          <EyebrowLabel text="Site Map" color="var(--amber)" />
          <h1 className="reveal-item mt-4 font-display text-[34px] font-bold leading-tight md:text-[48px]">
            <GradientText from="#2FE0C8" to="#8B7CF6">
              Every page on DIGI BIZ OS
            </GradientText>
          </h1>
          <p className="reveal-item mt-4 max-w-[700px] font-body text-[15px] text-[var(--text-secondary)]">
            {DESC}
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <Group title="Main pages" links={main} />
            <Group
              title="Product modules"
              links={FEATURE_PAGES.map((p) => ({ label: p.h1, to: p.path }))}
            />
            <Group
              title="Solutions & guides"
              links={INTENT_PAGES.map((p) => ({ label: p.h1, to: p.path }))}
            />
            <Group
              title="Comparisons"
              links={COMPARE_PAGES.map((p) => ({ label: `DIGI BIZ OS vs ${p.competitor}`, to: `/compare/${p.slug}` }))}
            />
            <Group
              title="Blog articles"
              links={BLOG_POSTS.map((p) => ({ label: p.title, to: `/blog/${p.slug}` }))}
            />
            <Group title="Legal" links={legal} />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
