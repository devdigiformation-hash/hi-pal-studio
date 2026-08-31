import { createFileRoute, Link } from "@tanstack/react-router";
import { Database, Users, FolderArchive, LayoutDashboard, Unplug, PiggyBank } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import TickList from "@/components/inner/TickList";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";
import screenshot from "@/assets/pocketbase-screenshot.png.asset.json";
import setupFile from "@/assets/PocketBase-Setup.exe.asset.json";

const TITLE = "PocketBase Backend — Free Open-Source Database & Auth Server for Windows";
const DESC =
  "Download PocketBase free: instant high-speed SQLite database, built-in user auth, OAuth, real-time APIs and file storage in a single 32 MB executable for Windows.";

const DOWNLOAD_URL = setupFile.url;

const FEATURES = [
  {
    icon: Database,
    color: "var(--cyan)",
    title: "Instant SQLite Database (Zero Setup)",
    body: "Blazing-fast embedded database handling 10,000+ requests per second with automatic schema migrations.",
  },
  {
    icon: Users,
    color: "var(--purple)",
    title: "Built-In User Authentication & OAuth",
    body: "Full user signup, login, password resets, and social OAuth (Google, GitHub, Apple) ready out-of-the-box.",
  },
  {
    icon: FolderArchive,
    color: "var(--amber)",
    title: "Media & File Storage Engine",
    body: "Securely upload, store, and serve user profile pictures, PDFs, and application assets with custom access rules.",
  },
  {
    icon: LayoutDashboard,
    color: "#7DD3FC",
    title: "Visual Web Admin Dashboard",
    body: "Manage tables, inspect database records, and test API endpoints directly in your browser via an elegant GUI.",
  },
  {
    icon: Unplug,
    color: "#F472B6",
    title: "REST & Real-Time WebSockets API",
    body: "Full SDK support for JavaScript/TypeScript, Dart/Flutter, Python, and Go with live data sync.",
  },
  {
    icon: PiggyBank,
    color: "#3DDC84",
    title: "Save $300+/Year on Firebase & Supabase",
    body: "Host your entire mobile app or web app backend for $0 on your own local PC or private cloud VPS.",
  },
];

const COMPARISON = [
  {
    label: "Pricing",
    pocketbase: "$0 — Free forever",
    firebase: "$300 / year",
    supabase: "$300 / year",
  },
  {
    label: "Self-hosting",
    pocketbase: "100% self-hosted & air-gapped",
    firebase: "Proprietary cloud locked",
    supabase: "Proprietary cloud locked",
  },
  {
    label: "File size & complexity",
    pocketbase: "Single 32 MB executable",
    firebase: "Heavy Docker & multi-container setup",
    supabase: "Heavy Docker & multi-container setup",
  },
  {
    label: "Speed",
    pocketbase: "Ultra-fast embedded SQLite (zero latency)",
    firebase: "Remote cloud network latency",
    supabase: "Remote cloud network latency",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit)",
  "RAM: 4 GB minimum (8 GB recommended for concurrent workloads)",
  "Storage: 100 MB free disk space (plus space for your database files)",
  "Network: localhost only for offline use, or public IP for team access",
];

export const Route = createFileRoute("/open-source/pocketbase")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/pocketbase",
      title: TITLE,
      description: DESC,
      image: abs(screenshot.url),
    });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Open Source", path: "/open-source" },
              { name: "PocketBase Backend", path: "/open-source/pocketbase" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "PocketBase Backend",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Windows 10, Windows 11 (64-bit)",
            description: DESC,
            url: abs("/open-source/pocketbase"),
            image: abs(screenshot.url),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: PocketBasePage,
});

function PocketBasePage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "PocketBase Backend", path: "/open-source/pocketbase" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="100% Free & Open-Source Cloud Database & Auth Server"
              color="var(--amber)"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              PocketBase Backend Server
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[48px]">
              Instant High-Speed Database, User Auth & Storage in 1 File —{" "}
              <GradientText from="#2FE0C8" to="#8B7CF6">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The ultimate open-source alternative to Firebase and Supabase. Launch an
              enterprise-grade SQLite database, real-time subscriptions, user authentication, and
              media storage in 1 click without complex cloud setup.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} download="PocketBase-Setup.exe">
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download PocketBase
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Version: Latest x64 • 32.9 MB • Windows 10 / 11 (64-bit) • 100% Verified •
              PocketBase-Setup.exe
            </p>
          </div>

          <GlassCard glowColor="var(--cyan)" className="p-3">
            <img
              src={screenshot.url}
              alt="PocketBase admin dashboard showing the Collections view, API preview and database editor"
              loading="lazy"
              className="w-full rounded-[10px]"
            />
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Core features & highlights
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
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            PocketBase vs Firebase & Supabase
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left font-body text-[14px]">
              <thead>
                <tr className="text-[var(--text-primary)]">
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    &nbsp;
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em] text-[var(--cyan)]">
                    PocketBase
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    Firebase Pro
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 font-display text-[13px] uppercase tracking-[0.12em]">
                    Supabase Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label}>
                    <td className="border-b border-[var(--border-glass)] py-3 pr-4 text-[var(--text-primary)]">
                      {row.label}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 pr-4 text-[var(--cyan)]">
                      {row.pocketbase}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 pr-4 text-[var(--text-secondary)]">
                      {row.firebase}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 text-[var(--text-secondary)]">
                      {row.supabase}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="System Requirements" color="var(--cyan)" />
            <h2 className="mt-4 font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[30px]">
              What you need to run it
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
            Get PocketBase free, then supercharge it with DIGI BIZ OS
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} download="PocketBase-Setup.exe">
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download PocketBase
              </CyanButton>
            </a>
            <Link
              to="/open-source"
              className="font-body text-[14px] text-[var(--cyan)] hover:underline"
            >
              Back to open source software
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
      <path d="M0 3.449L9.327 2.12v9.38H0M10.029 1.949L24 0v11.44H10.029M0 12.56h9.327v9.38L0 20.611M10.029 12.56H24V24l-13.971-1.799" />
    </svg>
  );
}
