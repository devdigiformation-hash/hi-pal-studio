import { createFileRoute } from "@tanstack/react-router";
import SmartLink from "@/components/SmartLink";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import { buildMeta, breadcrumbLd } from "@/lib/seo";
import { FEATURE_PAGES, INTENT_PAGES } from "@/content/seo-pages";
import { COMPARE_PAGES } from "@/content/compare-pages";
import { BLOG_POSTS } from "@/content/blog-posts";
import { MODULES_LIST } from "@/content/modules-data";
import { MODELS_LIST } from "@/content/models-data";

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
    {
      label: "OpenHands Autonomous AI Software Engineer — Free Devin Alternative",
      to: "/open-source/openhands",
    },
    {
      label: "OpenClaw Autonomous AI Agent — Free Coding & Research Agent",
      to: "/open-source/openclaw",
    },
    {
      label: "Hermes Autonomous Reasoning & Tool Agent — Free AI Agent for Windows & macOS",
      to: "/open-source/hermes-agent",
    },
    { label: "Jan AI — Free Offline AI for Windows", to: "/open-source/jan-ai" },
    { label: "Tuttle Time Tracker — Free Billable Hours", to: "/open-source/tuttle" },
    { label: "PocketBase Backend — Free Database & Auth Server", to: "/open-source/pocketbase" },
    { label: "Upscayl AI Image Enhancer — Free Offline Upscaler", to: "/open-source/upscayl" },
    { label: "Kdenlive Video Editor — Free Open-Source CapCut & Premiere Alternative", to: "/open-source/kdenlive" },
    { label: "FaceFusion AI Face Swap Studio — Free Next-Gen Face Swapper", to: "/open-source/facefusion" },
    { label: "Deep-Live-Cam — Free Real-Time Live Webcam Face Swapper", to: "/open-source/deep-live-cam" },
    { label: "Shotcut 4K Video Editor — Free Filmora & Vegas Alternative", to: "/open-source/shotcut" },
    { label: "Audacity Audio Studio — Free Open-Source Multi-Track Workstation", to: "/open-source/audacity" },
    { label: "OpenCut Social Video Editor — Free Vertical Video & Reels Studio", to: "/open-source/opencut" },
    { label: "Open SEO Spider & Technical Audit Suite — Free Crawler & Schema Validator", to: "/open-source/seo-spider" },
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
              title="Enterprise Modules"
              links={MODULES_LIST.map((m) => ({ label: m.name, to: `/modules/${m.slug}` }))}
            />
            <Group
              title="AI Models Universe"
              links={MODELS_LIST.map((m) => ({ label: m.name, to: `/models/${m.slug}` }))}
            />
            <Group
              title="Product features"
              links={FEATURE_PAGES.map((p) => ({ label: p.h1, to: p.path }))}
            />
            <Group
              title="Solutions & guides"
              links={INTENT_PAGES.map((p) => ({ label: p.h1, to: p.path }))}
            />
            <Group
              title="Comparisons"
              links={COMPARE_PAGES.map((p) => ({
                label: `DIGI BIZ OS vs ${p.competitor}`,
                to: `/compare/${p.slug}`,
              }))}
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
