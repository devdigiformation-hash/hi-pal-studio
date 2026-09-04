import OpenSourceValueComparisonChart from "@/components/seo/OpenSourceValueComparisonChart";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe,
  Search,
  Zap,
  ShieldCheck,
  PiggyBank,
  CheckCircle2,
  FileCode,
  Layers,
  Activity,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import TickList from "@/components/inner/TickList";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";

const TITLE = "Open SEO Spider & Crawler — Free Screaming Frog & Ahrefs Alternative";
const DESC =
  "Download Open SEO Spider free for Windows: 100% offline website crawler, broken link finder, Schema.org JSON-LD validator, Google Sitelinks tester, and Core Web Vitals audit engine.";

// CONFIGURABLE DOWNLOAD URL: Direct repository release or standalone package
const DOWNLOAD_URL = "https://github.com/topics/seo-spider";

const FEATURES = [
  {
    icon: Search,
    color: "var(--cyan)",
    title: "Deep Technical Website Crawler",
    body: "Crawl thousands of URLs to instantly identify 404 broken links, redirect chains (301/302), and orphan pages.",
  },
  {
    icon: FileCode,
    color: "var(--purple)",
    title: "Schema.org & Google Sitelinks Validator",
    body: "Validate JSON-LD structured data, SiteNavigationElement, Organization graphs, and BreadcrumbList markup in real time.",
  },
  {
    icon: Layers,
    color: "var(--amber)",
    title: "Meta Tags & Heading Hierarchy Auditor",
    body: "Audit H1/H2 nesting, meta title length, canonical consistency, OpenGraph cards, and missing image alt tags.",
  },
  {
    icon: Activity,
    color: "#3DDC84",
    title: "Core Web Vitals & PageSpeed Diagnostics",
    body: "Analyze Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and First Input Delay locally without API limits.",
  },
  {
    icon: Zap,
    color: "#7DD3FC",
    title: "Unlimited URL Crawling with Zero Limits",
    body: "Unlike paid tools capped at 500 URLs on free tiers, crawl unlimited websites without restrictions.",
  },
  {
    icon: PiggyBank,
    color: "#F472B6",
    title: "Save $259+/Year on Screaming Frog & Semrush",
    body: "100% free open-source software with lifetime $0 licence fees, zero cloud telemetry, and total privacy.",
  },
];

const COMPARISON = [
  {
    label: "Pricing & Licence",
    tool: "$0 — 100% Free Forever",
    other1: "$259 / year (Screaming Frog)",
    other2: "$1,400+ / year (Semrush)",
  },
  {
    label: "Crawl URL Limit",
    tool: "Unlimited URLs",
    other1: "500 URLs (Free Tier)",
    other2: "Strict Monthly Credit Caps",
  },
  {
    label: "Schema JSON-LD Validation",
    tool: "Real-time Offline Validator",
    other1: "Built-in (Paid Licence)",
    other2: "Cloud Project Audit",
  },
  {
    label: "Data Privacy & Telemetry",
    tool: "100% Local on your PC",
    other1: "Requires Registration",
    other2: "Full Cloud Tracking",
  },
  {
    label: "Google Sitelinks Analysis",
    tool: "SiteNavigationElement Graphing",
    other1: "Manual Inspection",
    other2: "Cloud Summary Only",
  },
];

const REQUIREMENTS = [
  "Windows 10 or Windows 11 (64-bit)",
  "4 GB RAM minimum (8 GB recommended for 50k+ URL crawls)",
  "Internet connection for live website HTTP crawling",
  "100 MB free disk space for local crawl databases",
];

export const Route = createFileRoute("/open-source/seo-spider")({
  head: () => ({
    meta: buildMeta({
      title: TITLE,
      description: DESC,
      path: "/open-source/seo-spider",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", url: abs("/") },
            { name: "Open Source Hub", url: abs("/open-source") },
            { name: "Open SEO Spider", url: abs("/open-source/seo-spider") },
          ])
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Open SEO Spider & Technical Audit Suite",
          operatingSystem: "Windows 10, Windows 11",
          applicationCategory: "DeveloperApplication, BusinessApplication",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          description: DESC,
          downloadUrl: DOWNLOAD_URL,
        }),
      },
    ],
  }),
  component: OpenSeoSpiderPage,
});

function OpenSeoSpiderPage() {
  return (
    <main className="min-h-screen pt-[100px] md:pt-[120px]">
      <SectionWrapper>
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Open Source Tools", to: "/open-source" },
            { label: "Open SEO Spider", to: "/open-source/seo-spider" },
          ]}
        />

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <MonoBadge>100% Free & Open Source</MonoBadge>
              <MonoBadge>GPL / MIT</MonoBadge>
              <MonoBadge>Desktop SEO Suite</MonoBadge>
            </div>
            <h1 className="reveal-item mt-4 font-display text-[32px] font-bold leading-tight md:text-[46px]">
              <GradientText from="#2FE0C8" to="#8B7CF6">
                Open SEO Spider & Technical Audit Suite
              </GradientText>
            </h1>
            <p className="reveal-item delay-1 mt-3 font-display text-[18px] font-semibold text-[var(--cyan)]">
              Free Open-Source Screaming Frog, Ahrefs & Site Audit Alternative for Windows
            </p>
            <p className="reveal-item delay-2 mt-4 font-body text-[15px] leading-[1.7] text-[var(--text-secondary)]">
              Crawl full websites, validate Schema.org JSON-LD structured data, test Google
              Sitelinks navigation, detect 404 broken links, and audit Core Web Vitals with 100% local
              privacy and zero subscription fees.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download Open SEO Spider for Windows
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Direct Package Trigger • Windows 10/11 (64-bit) • 100% Free Forever
            </p>
          </div>

          <GlassCard glowColor="#2FE0C8" className="p-3">
            <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "#2FE0C826",
                  boxShadow: "0 0 40px #2FE0C840",
                }}
              >
                <Search size={40} color="#2FE0C8" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                  Open SEO Spider Workstation
                </p>
                <p className="mx-auto mt-1 max-w-[320px] font-body text-[13.5px] text-[var(--text-secondary)]">
                  Multi-threaded HTTP crawler, Schema.org JSON-LD validator, redirect mapper &
                  Google Sitelinks visualizer.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <MonoBadge>Unlimited Crawl URLs</MonoBadge>
                <MonoBadge>Schema.org JSON-LD</MonoBadge>
                <MonoBadge>Zero Cloud Fees</MonoBadge>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 Key Superpowers of Open SEO Spider
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <GlassCard key={f.title} glowColor={f.color} className="h-full p-5">
                <f.icon size={22} color={f.color} strokeWidth={2} />
                <h3 className="mt-3 font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                  {f.title}
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {f.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <OpenSourceValueComparisonChart toolId="seo-spider" downloadUrl={DOWNLOAD_URL} />
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="System Requirements" color="var(--cyan)" />
            <h2 className="mt-4 font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[30px]">
              What you need to run Open SEO Spider
            </h2>
            <TickList className="mt-6" items={REQUIREMENTS} />
          </div>
          <GlassCard glowColor="var(--purple)" className="p-6">
            <EyebrowLabel text="Brought to you by" color="var(--purple)" />
            <h3 className="mt-4 font-display text-[20px] font-bold text-[var(--text-primary)]">
              Digiformation Ltd
            </h3>
            <p className="mt-1 font-body text-[14px] text-[var(--text-secondary)]">
              Founder: Muhammad Haroon
            </p>
            <p className="mt-3 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
              UK Company Formation • Payment Solutions • Software & Web Development
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <MonoBadge>+92 316 446 7464</MonoBadge>
            </div>
            <div className="mt-5 flex flex-wrap gap-4 font-body text-[14px]">
              <a
                href="https://www.digiformation.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--cyan)] hover:underline"
              >
                digiformation.co.uk
              </a>
              <a
                href="https://linktr.ee/digiformationltd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--cyan)] hover:underline"
              >
                Linktree
              </a>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
            Download Open SEO Spider Free for Windows
          </h2>
          <p className="mt-4 font-body text-[15px] text-[var(--text-secondary)]">
            Run unlimited audits on your own sites and client projects with $0 subscription costs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download Open SEO Spider for Windows
              </CyanButton>
            </a>
            <Link
              to="/open-source"
              className="font-body text-[14px] text-[var(--cyan)] hover:underline block w-full mt-2"
            >
              ← Back to all open source software
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function WindowsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.95" />
    </svg>
  );
}
