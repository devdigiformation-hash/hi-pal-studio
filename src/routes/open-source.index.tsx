import { createFileRoute, Link } from "@tanstack/react-router";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

const TITLE = "Open Source Software — DIGI BIZ OS";
const DESC =
  "Open source and self-hosted software that works alongside DIGI BIZ OS, plus our source code licence for full ownership, rebranding and resale rights.";

const CATEGORIES = [
  {
    color: "var(--cyan)",
    title: "Documents & Office",
    body: "Open source office suites, PDF editors and note tools. DIGI BIZ OS reads, writes and converts these formats for you by voice.",
  },
  {
    color: "var(--purple)",
    title: "Developer Workspaces",
    body: "Open editors, terminals and version control. Your coding workspace runs against the same projects and repositories you already use.",
  },
  {
    color: "var(--amber)",
    title: "Self-Hosted Storage",
    body: "Keep files on your own machine or private server. Nothing is forced into a vendor cloud you cannot leave.",
  },
  {
    color: "#F472B6",
    title: "Automation & Schedulers",
    body: "Open automation platforms pair with DIGI BIZ OS workflows and cron jobs for end-to-end business processes.",
  },
  {
    color: "#7DD3FC",
    title: "Local Model Runners",
    body: "Run open weight models locally and route work to them when you want everything to stay on your own hardware.",
  },
  {
    color: "#3DDC84",
    title: "Business & Reporting",
    body: "Open CRM, accounting and analytics tools. Agents can gather, summarise and file the reports you need each week.",
  },
];

const LICENCE_POINTS = [
  "Complete source code for the desktop app and automation core.",
  "Rebrand the product, change screens and add your own modules.",
  "Full commercial rights — resale included, no royalties.",
  "12 months of updates after purchase.",
];

export const Route = createFileRoute("/open-source/")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source",
      title: TITLE,
      description: DESC,
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
            ]),
          ),
        },
      ],
    };
  },
  component: OpenSourcePage,
});

function OpenSourcePage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
          ]}
        />
        <div className="mx-auto max-w-[880px] text-center">
          <EyebrowLabel text="Open Source" color="var(--cyan)" />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[50px]">
            Open Source Software,{" "}
            <GradientText from="#2FE0C8" to="#8B7CF6">
              Fully Under Your Control.
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[720px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
            DIGI BIZ OS is built to work with the open and self-hosted software you already trust —
            and you can own our code too. No lock-in, no subscription, no forced cloud.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Open software DIGI BIZ OS works with
          </h2>
          <div className="mt-6 grid gap-4">
            <Link to="/open-source/jan-ai" className="block">
              <GlassCard glowColor="var(--cyan)" className="p-5">
                <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-[var(--amber)]">
                  Free download
                </p>
                <h3 className="mt-2 font-display text-[18px] font-bold text-[var(--text-primary)]">
                  Jan AI — offline ChatGPT alternative for Windows
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  Run DeepSeek, Llama 3, Qwen and Mistral locally. 100% private, works offline, no
                  subscription. Read the full guide and download it here.
                </p>
              </GlassCard>
            </Link>
            <Link to="/open-source/anythingllm" className="block">
              <GlassCard glowColor="var(--purple)" className="p-5">
                <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-[var(--amber)]">
                  Free download
                </p>
                <h3 className="mt-2 font-display text-[18px] font-bold text-[var(--text-primary)]">
                  AnythingLLM — local document AI for Windows
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  Chat with PDFs, Word docs, CSVs and websites locally. Built-in vector database, no
                  cloud uploads, no subscription. Read the full guide and download it here.
                </p>
              </GlassCard>
            </Link>
            <Link to="/open-source/tuttle" className="block">
              <GlassCard glowColor="#3DDC84" className="p-5">
                <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-[var(--amber)]">
                  Free download
                </p>
                <h3 className="mt-2 font-display text-[18px] font-bold text-[var(--text-primary)]">
                  Tuttle Time Tracker — free billable hours & productivity for Windows
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  Track project tasks, billable hours, and client timesheets 100% privately. Offline
                  time tracking with CSV, Excel & PDF export. Read the full guide and download it here.
                </p>
              </GlassCard>
            </Link>
            <Link to="/open-source/pocketbase" className="block">
              <GlassCard glowColor="#7DD3FC" className="p-5">
                <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-[var(--amber)]">
                  Free download
                </p>
                <h3 className="mt-2 font-display text-[18px] font-bold text-[var(--text-primary)]">
                  PocketBase Backend — free database, auth & storage server for Windows
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  Launch an enterprise-grade SQLite database, real-time subscriptions, user authentication
                  and file storage in a single 32 MB executable. Read the full guide and download it here.
                </p>
              </GlassCard>
            </Link>
          </div>
          <p className="mt-3 max-w-[740px] font-body text-[14.5px] leading-[1.8] text-[var(--text-secondary)]">
            Point it at the free and open tools on your machine and let agents do the work inside
            them — documents, code, files, schedules and reports.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <GlassCard key={c.title} glowColor={c.color} className="h-full p-5">
                <h3 className="font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                  {c.title}
                </h3>
                <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {c.body}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto grid max-w-[1080px] items-center gap-10 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="Source Code Licence" color="var(--purple)" />
            <h2 className="mt-4 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[34px]">
              Own the code, not just a seat
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
              The Source Code Licence gives you the complete codebase of DIGI BIZ OS so your team can
              audit it, extend it, rebrand it and ship it as your own product — a one-time payment of
              £199.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link to="/checkout" search={{ plan: "source_code" }}>
                <CyanButton size="lg">Buy Source Code — £199</CyanButton>
              </Link>
              <Link
                to="/pricing"
                className="font-body text-[14px] text-[var(--cyan)] hover:underline"
              >
                Compare all licences
              </Link>
            </div>
          </div>
          <GlassCard glowColor="var(--purple)" className="p-6">
            <ul className="space-y-4">
              {LICENCE_POINTS.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 font-body text-[14px] leading-[1.7] text-[var(--text-secondary)]"
                >
                  <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[var(--cyan)]" />
                  {p}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-display text-[22px] font-bold text-[var(--text-primary)] md:text-[28px]">
            Need a custom open build for your business?
          </h2>
          <p className="mt-3 font-body text-[14.5px] text-[var(--text-secondary)]">
            <Link to="/contact" className="text-[var(--cyan)] hover:underline">
              Talk to the team
            </Link>{" "}
            or{" "}
            <Link to="/download" className="text-[var(--cyan)] hover:underline">
              download for Windows
            </Link>
            .
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}