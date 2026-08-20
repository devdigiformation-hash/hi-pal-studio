import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Workflow, ShieldCheck, Bot, FolderOutput, PiggyBank, Gift, MessageCircle } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import TickList from "@/components/inner/TickList";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";

const TITLE = "Agency Orchestrator — One-Person AI Company for Windows";
const DESC =
  "Download Agency Orchestrator free: 267 specialized AI agents across 20 business departments. Autonomous multi-agent DAG workflows deliver complete projects in minutes.";

const DOWNLOAD_URL = "/Agency-Orchestrator-Studio.exe";
const WHATSAPP = "https://wa.me/923164467464";

const FEATURES = [
  {
    icon: Users,
    color: "var(--cyan)",
    title: "267 Built-in Persona Experts",
    body: "Specialized product managers, full-stack coders, copywriters, SEO analysts, financial modelers and more across 20 departments.",
  },
  {
    icon: Workflow,
    color: "var(--purple)",
    title: "Automatic DAG Task Decomposition",
    body: "Turns high-level goals into multi-stage execution pipelines. Agents hand off work in the correct order until the deliverable is complete.",
  },
  {
    icon: ShieldCheck,
    color: "var(--amber)",
    title: "Adversarial Quality Verification",
    body: "Built-in QA and compliance agents inspect, test and challenge deliverables before sign-off — so the output is production-ready.",
  },
  {
    icon: Bot,
    color: "#7DD3FC",
    title: "Multi-Model Synergy",
    body: "Assigns each role to the model best suited for the task: DeepSeek for code, Claude for copy, GPT-4o for reasoning, Qwen and Ollama for local work.",
  },
  {
    icon: FolderOutput,
    color: "#F472B6",
    title: "One-Click Complete Deliverables",
    body: "Exports fully packaged folders containing production code, design assets, marketing copy, SEO briefs and financial models.",
  },
  {
    icon: PiggyBank,
    color: "#3DDC84",
    title: "Save $2,000+ per Project",
    body: "Eliminate agency overhead and retain 100% control of your business roadmap. One sentence brief, full project delivered.",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit)",
  "Processor: Intel Core i3 / i5 / i7 or AMD Ryzen (64-bit)",
  "RAM: 8 GB minimum (16 GB recommended for multi-agent workloads)",
  "Storage: 500 MB free disk space",
  "Internet: Required for cloud model providers (Ollama runs offline)",
];

const MODELS = [
  "DeepSeek-R1 — best for code and reasoning",
  "Claude 3.5 — best for copy and long-form content",
  "GPT-4o — best for general reasoning and analysis",
  "Qwen — best for multilingual and local tasks",
  "Ollama — best for 100% offline local models",
];

export const Route = createFileRoute("/open-source/agency-orchestrator")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/agency-orchestrator",
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
              { name: "Agency Orchestrator", path: "/open-source/agency-orchestrator" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Agency Orchestrator",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Windows 10, Windows 11 (64-bit)",
            description: DESC,
            url: abs("/open-source/agency-orchestrator"),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: AgencyOrchestratorPage,
});

function AgencyOrchestratorPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "Agency Orchestrator", path: "/open-source/agency-orchestrator" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="reveal-item inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] bg-white/[0.04] px-3 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-[var(--amber)]">
              <Gift size={13} color="var(--amber)" />
              One-Person AI Company • 267 Expert Agents Included
            </div>
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              Agency Orchestrator
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[48px]">
              One Sentence Brief →{" "}
              <GradientText from="#2FE0C8" to="#8B7CF6">
                267 AI Experts Deliver Complete Projects
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              Deploy a virtual workforce of 267 specialized AI agents across 20 business departments
              (Software Dev, UI/UX Design, Growth Marketing, SEO, Finance). Multi-agent DAG workflows
              deliver full production deliverables in minutes.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} download="Agency-Orchestrator-Studio.exe">
                <CyanButton size="lg" icon={<WindowsIcon />}>Download Agency Orchestrator</CyanButton>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<MessageCircle size={18} />} tone="245,166,35">WhatsApp Support</CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Category: Autonomous Multi-Agent Business Swarm (Apache-2.0) • 93 KB • Windows 10 / 11 (64-bit) •
              Agency-Orchestrator-Studio.exe
            </p>
          </div>

          <GlassCard glowColor="var(--cyan)" className="p-6">
            <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 text-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--bg-card)] shadow-[0_0_40px_rgba(47,224,200,0.2)]">
                <Bot size={38} color="var(--cyan)" strokeWidth={1.5} />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--amber)] text-[11px] font-bold text-[var(--bg-base)]">
                  267
                </span>
              </div>
              <h3 className="mt-5 font-display text-[18px] font-bold text-[var(--text-primary)]">
                Your Entire Agency, Inside One .exe
              </h3>
              <p className="mx-auto mt-2 max-w-[320px] font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                A 93 KB desktop studio that bootstraps 267 expert agents and runs entire project workflows end-to-end.
              </p>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 key features
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
            Supported model providers
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MODELS.map((m) => (
              <GlassCard key={m} glowColor="var(--purple)" className="p-4">
                <p className="font-body text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                  <span className="font-semibold text-[var(--text-primary)]">{m.split(" — ")[0]}</span>
                  {" — "}
                  {m.split(" — ")[1]}
                </p>
              </GlassCard>
            ))}
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
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--cyan)] hover:underline"
              >
                WhatsApp support
              </a>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
            Run your own AI agency, free
          </h2>
          <p className="mt-4 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
            Download Agency Orchestrator and turn one sentence into a complete project — code, copy, design, SEO and finance — delivered in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} download="Agency-Orchestrator-Studio.exe">
              <CyanButton size="lg" icon={<WindowsIcon />}>Download Agency Orchestrator</CyanButton>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<MessageCircle size={18} />} tone="245,166,35">WhatsApp Support</CyanButton>
            </a>
            <Link to="/open-source" className="font-body text-[14px] text-[var(--cyan)] hover:underline">
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
