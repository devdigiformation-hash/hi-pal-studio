import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Download, MonitorSmartphone } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, faqLd, softwareLd } from "@/lib/seo";

const TITLE = "Download DIGI BIZ OS for Windows 10 & 11 — AI Desktop Assistant";
const DESC =
  "Download DIGI BIZ OS for Windows 10 and 11. Install the voice-first AI business operating system, activate your lifetime licence and start running work by voice.";

const STEPS = [
  { title: "Choose your licence", body: "Pick Lifetime Access, the Source Code Licence or a Custom Build on the pricing page." },
  { title: "Complete payment", body: "Pay by mobile account or bank transfer in PKR, GBP or USD at checkout." },
  { title: "Receive your files", body: "Your download link and licence key are emailed once payment is confirmed." },
  { title: "Install and activate", body: "Run the installer on Windows 10 or 11, enter your key and start speaking." },
];

const PLATFORMS = [
  { name: "Windows 10 & 11", status: "Available now", live: true },
  { name: "macOS", status: "Coming soon", live: false },
  { name: "Linux", status: "Coming soon", live: false },
  { name: "Mobile companion", status: "Coming soon", live: false },
];

const FAQ = [
  { q: "Which Windows versions are supported?", a: "Windows 10 and Windows 11. macOS, Linux and a mobile companion are in development." },
  { q: "How do I get the download link?", a: "It is emailed to the address you provide at checkout once your payment is confirmed." },
  { q: "Is there a subscription?", a: "No. Lifetime Access is a single one-time payment." },
  { q: "How long does installation take?", a: "A few minutes: run the installer, enter your licence key and the workspace opens." },
];

export const Route = createFileRoute("/download")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/download", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Download", path: "/download" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            softwareLd(
              "DIGI BIZ OS",
              "Voice-first AI agentic business operating system for Windows 10 and 11.",
              "https://digibizos.co.uk/download",
            ),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqLd(FAQ)) },
      ],
    };
  },
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Download", path: "/download" },
          ]}
        />
        <div className="mx-auto max-w-[880px] text-center">
          <EyebrowLabel text="Download" color="var(--cyan)" />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[50px]">
            Download DIGI BIZ OS{" "}
            <GradientText from="#2FE0C8" to="#8B7CF6">
              for Windows.
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[700px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
            DIGI BIZ OS installs on Windows 10 and 11. Choose a licence, complete checkout and your
            download link and key arrive by email — usually within minutes.
          </p>
          <div className="reveal-item delay-3 mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/pricing">
              <CyanButton icon={<Download size={16} />}>Get your licence</CyanButton>
            </Link>
            <Link
              to="/faq"
              className="inline-flex h-11 items-center rounded-full border border-[var(--border-glass)] px-5 font-display text-[13px] font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            How to get started
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <GlassCard glowColor="var(--cyan)" className="h-full p-6">
                  <span className="font-mono text-[12px] text-[var(--cyan)]">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-[16px] font-bold text-[var(--text-primary)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 font-body text-[13.5px] leading-[1.75] text-[var(--text-secondary)]">
                    {s.body}
                  </p>
                </GlassCard>
              </li>
            ))}
          </ol>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Platform availability
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORMS.map((p) => (
              <GlassCard key={p.name} glowColor={p.live ? "var(--cyan)" : "var(--purple)"} className="p-6">
                <MonitorSmartphone size={18} color={p.live ? "var(--cyan)" : "var(--text-muted)"} />
                <h3 className="mt-3 font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                  {p.name}
                </h3>
                <p className="mt-1 font-body text-[13px] text-[var(--text-secondary)]">{p.status}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[900px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Download questions
          </h2>
          <dl className="mt-8 space-y-5">
            {FAQ.map((f) => (
              <div key={f.q}>
                <dt className="flex items-start gap-2 font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                  <Check size={16} color="var(--cyan)" className="mt-[3px] shrink-0" />
                  {f.q}
                </dt>
                <dd className="mt-2 pl-6 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </SectionWrapper>
    </main>
  );
}
