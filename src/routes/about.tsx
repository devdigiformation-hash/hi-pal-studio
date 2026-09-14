import { createFileRoute, Link } from "@tanstack/react-router";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

const TITLE = "About DIGI BIZ OS — Built by Digiformation";
const DESC =
  "DIGI BIZ OS is an AI agentic business operating system by Digiformation Ltd. See what we build, who it is for and how the modules fit together.";

const MODULES = [
  {
    name: "Digi AI",
    to: "/features/digi-ai",
    body: "The assistant core: voice, chat, planning and model routing.",
  },
  {
    name: "DigiCode",
    to: "/features/digicode",
    body: "Coding workspace, terminal and repository work.",
  },
  {
    name: "Digi Studio",
    to: "/features/digi-studio",
    body: "Offline video editor, talking avatars, multilingual voiceover TTS and photo studio.",
  },
  {
    name: "Digi CRM",
    to: "/features/digi-crm",
    body: "Knowledge Base setup, 1-second live dashboard, 1-click trigger actions and accounting ledger.",
  },
  {
    name: "DigiCLI",
    to: "/features/digicli",
    body: "Command-line control for technical routines.",
  },
  {
    name: "DigiMCP",
    to: "/features/digimcp",
    body: "Connectivity to external services and local runners.",
  },
  {
    name: "DigiFlow",
    to: "/features/digiflow",
    body: "Workflows that chain steps into repeatable processes.",
  },
  {
    name: "DigiTasks",
    to: "/features/digitasks",
    body: "Task queues and delegation across agents.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/about", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]),
          ),
        },
      ],
    };
  },
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]}
        />
        <div className="mx-auto max-w-[880px] text-center">
          <EyebrowLabel text="About" color="var(--purple)" />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[50px]">
            We Build the{" "}
            <GradientText from="#8B7CF6" to="#F5A623">
              Execution Layer.
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[720px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
            DIGI BIZ OS is an AI agentic business operating system, built and supported by
            Digiformation Ltd. Our focus is simple: the gap between an AI answer and finished work.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[900px] space-y-8">
          <div>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
              What we build
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
              A voice-first Windows application that plans and executes multi-step business work:
              documents, files, research, coding, reporting and scheduled automation. Everything is
              designed around one idea — you say what you need, the system does it and shows you
              exactly what happened.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
              Who it is for
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
              Small businesses, agencies, consultants and technical teams who lose hours every week
              to repetitive operational work. It suits people who want to own their tooling — which
              is why we offer a source code licence alongside the standard lifetime licence.
            </p>
          </div>
          <div>
            <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
              How we work
            </h2>
            <p className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]">
              One-time licensing instead of subscriptions, direct support over WhatsApp and email,
              and custom builds for businesses that need the product shaped around their own
              processes and branding.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            The DIGI BIZ OS ecosystem
          </h2>
          <p className="mt-3 max-w-[720px] font-body text-[14.5px] leading-[1.8] text-[var(--text-secondary)]">
            Every module below is part of the same product — one install, one licence, one
            workspace.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <Link key={m.to} to={m.to} className="block h-full">
                <GlassCard glowColor="var(--cyan)" className="h-full p-5">
                  <h3 className="font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                    {m.name}
                  </h3>
                  <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                    {m.body}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="font-display text-[22px] font-bold text-[var(--text-primary)] md:text-[28px]">
            Want to talk to us?
          </h2>
          <p className="mt-3 font-body text-[14.5px] text-[var(--text-secondary)]">
            <Link to="/contact" className="text-[var(--cyan)] hover:underline">
              Contact the team
            </Link>{" "}
            or{" "}
            <Link to="/pricing" className="text-[var(--cyan)] hover:underline">
              view pricing
            </Link>
            .
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
