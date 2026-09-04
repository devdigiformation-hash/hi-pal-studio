import { createFileRoute, Link } from "@tanstack/react-router";
import { Timer, BarChart3, ShieldCheck, Briefcase, FileSpreadsheet, PiggyBank } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import TickList from "@/components/inner/TickList";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";
import screenshot from "@/assets/tuttle-screenshot.jpg.asset.json";
import setupFile from "@/assets/tuttle-setup.exe.asset.json";

const TITLE = "Tuttle Time Tracker — Free Billable Hours & Productivity App for Windows";
const DESC =
  "Download Tuttle Time Tracker free: track billable hours, project tasks, and client timesheets 100% privately on your Windows PC. Offline time tracking with CSV, Excel & PDF export.";

const DOWNLOAD_URL =
  "https://github.com/tuttle-dev/tuttle/releases/download/v4.4.0/Tuttle-4.4.0-Windows-Setup.exe";

const FEATURES = [
  {
    icon: Timer,
    color: "var(--cyan)",
    title: "Automatic & Manual Time Tracking",
    body: "One-click timer for tasks, client projects, and subtasks with automatic idle-time detection.",
  },
  {
    icon: BarChart3,
    color: "var(--purple)",
    title: "Visual Productivity Analytics & Reports",
    body: "Generate clear daily, weekly, and monthly timesheets, category breakdowns, and client billing charts.",
  },
  {
    icon: ShieldCheck,
    color: "var(--amber)",
    title: "100% Private & Air-Gapped",
    body: "No employer spying, screenshots, or third-party cloud data logging. All timesheet records stay on your local PC.",
  },
  {
    icon: Briefcase,
    color: "#7DD3FC",
    title: "Project & Client Management",
    body: "Organize unlimited clients, project budgets, and hourly rates with instant revenue calculations.",
  },
  {
    icon: FileSpreadsheet,
    color: "#F472B6",
    title: "Export to CSV, Excel & PDF",
    body: "Export clean timesheet data ready for client billing, payroll, or tax reporting.",
  },
  {
    icon: PiggyBank,
    color: "#3DDC84",
    title: "Save $120+/Year on Toggl & Clockify",
    body: "Enjoy all premium time-tracking features completely free forever with no per-user monthly fees.",
  },
];

const COMPARISON = [
  {
    label: "Pricing",
    tuttle: "$0 — Free forever",
    toggl: "$120 / user / year",
    clockify: "$119 / user / year",
  },
  {
    label: "Data privacy",
    tuttle: "100% local on your PC",
    toggl: "Store daily habits on cloud servers",
    clockify: "Store daily habits on cloud servers",
  },
  {
    label: "User limits",
    tuttle: "Unlimited tasks & clients",
    toggl: "Locked behind paid tiers",
    clockify: "Locked behind paid tiers",
  },
  {
    label: "Offline mode",
    tuttle: "Full offline tracking",
    toggl: "Requires active cloud connection",
    clockify: "Requires active cloud connection",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit)",
  "RAM: 4 GB minimum (8 GB recommended for large project histories)",
  "Storage: 500 MB free disk space",
];

export const Route = createFileRoute("/open-source/tuttle")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/tuttle",
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
              { name: "Tuttle Time Tracker", path: "/open-source/tuttle" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Tuttle Time Tracker",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Windows 10, Windows 11 (64-bit)",
            description: DESC,
            url: abs("/open-source/tuttle"),
            image: abs(screenshot.url),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: TuttlePage,
});

function TuttlePage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "Tuttle Time Tracker", path: "/open-source/tuttle" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="100% Free & Open-Source Time Tracking & Productivity Suite"
              color="var(--amber)"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              Tuttle Time Tracker
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[48px]">
              Track Billable Hours & Maximize Productivity —{" "}
              <GradientText from="#2FE0C8" to="#8B7CF6">
                100% Free & Private
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The ultimate privacy-first desktop time tracker for freelancers, developers, and
              agency teams. Track project tasks, billable hours, and generate professional timesheet
              reports with zero cloud surveillance.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} download="Tuttle-Setup.exe">
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download Tuttle for Windows
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Version: Latest x64 • 212.5 MB • Windows 10 / 11 (64-bit) • 100% Verified •
              Tuttle-Setup.exe
            </p>
          </div>

          <GlassCard glowColor="var(--cyan)" className="p-3">
            <img
              src={screenshot.url}
              alt="Tuttle Time Tracker desktop app showing the dashboard with revenue metrics and project timeline"
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
            Tuttle vs paid time trackers
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left font-body text-[14px]">
              <thead>
                <tr className="text-[var(--text-primary)]">
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    &nbsp;
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em] text-[var(--cyan)]">
                    Tuttle
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    Toggl Track
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 font-display text-[13px] uppercase tracking-[0.12em]">
                    Clockify Pro
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
                      {row.tuttle}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 pr-4 text-[var(--text-secondary)]">
                      {row.toggl}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 text-[var(--text-secondary)]">
                      {row.clockify}
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
            Get Tuttle free, then automate everything with DIGI BIZ OS
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} download="Tuttle-Setup.exe">
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download Tuttle for Windows
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
