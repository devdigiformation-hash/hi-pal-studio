import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Video,
  Mic,
  Layers,
  Sparkles,
  Zap,
  PiggyBank,
  CheckCircle2,
  ShieldCheck,
  Film,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import MonoBadge from "@/components/MonoBadge";
import TickList from "@/components/inner/TickList";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";

const TITLE = "Kdenlive Video Editor — Free Open-Source CapCut & Premiere Alternative";
const DESC =
  "Download Kdenlive free for Windows: 4K multi-track video editing, OpenAI Whisper auto-subtitles, chroma key, motion tracking, and zero export watermarks.";

// CONFIGURABLE DOWNLOAD URL: Replace with your direct Google Drive or hosted EXE link
const DOWNLOAD_URL = "https://kdenlive.org/download/";

const FEATURES = [
  {
    icon: Mic,
    color: "var(--cyan)",
    title: "Built-in Whisper AI Auto-Subtitles",
    body: "Generates animated speech-to-text subtitles and captions in Roman Urdu & English with 1 click.",
  },
  {
    icon: Layers,
    color: "var(--purple)",
    title: "Unlimited Multi-Track 4K Timeline",
    body: "Layer video tracks, B-rolls, sound effects, green screens, and background music without restrictions.",
  },
  {
    icon: Sparkles,
    color: "var(--amber)",
    title: "Motion Tracking & Keyframe Animations",
    body: "Attach text, blur filters, or badges to moving objects automatically with smooth keyframes.",
  },
  {
    icon: Film,
    color: "#3DDC84",
    title: "Advanced Chroma Key & Rotoscoping",
    body: "Remove green screen backgrounds and replace with custom virtual studio backdrops seamlessly.",
  },
  {
    icon: Zap,
    color: "#7DD3FC",
    title: "Hardware GPU Accelerated 4K/60FPS Export",
    body: "Renders smooth high-bitrate MP4, ProRes, and WebM videos without watermarks or time limits.",
  },
  {
    icon: PiggyBank,
    color: "#F472B6",
    title: "Save $240+/Year on Adobe & CapCut",
    body: "100% free open-source software with a permanent lifetime $0 license fee and zero subscriptions.",
  },
];

const COMPARISON = [
  {
    label: "Pricing & Licence",
    tool: "$0 — 100% Free Forever",
    other1: "$240 / year (Premiere Pro)",
    other2: "$120 / year (CapCut Pro)",
  },
  {
    label: "Export Watermarks",
    tool: "0% Watermark — 100% Clean",
    other1: "No watermark (paid only)",
    other2: "Forced end-cards on free tier",
  },
  {
    label: "AI Auto-Captions",
    tool: "Built-in OpenAI Whisper",
    other1: "Adobe Cloud Speech to Text",
    other2: "Paid feature wall",
  },
  {
    label: "Offline Privacy",
    tool: "100% Local on your PC",
    other1: "Requires Adobe cloud sign-in",
    other2: "Cloud uploads & telemetry",
  },
  {
    label: "Max Resolution",
    tool: "Unlimited 4K / 8K 60FPS",
    other1: "4K / 8K (paid only)",
    other2: "Locked behind Pro plan",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit)",
  "RAM: 8 GB minimum (16 GB recommended for smooth 4K editing)",
  "Processor: Intel Core i5 / i7 / i9 or AMD Ryzen multi-core",
  "GPU: Dedicated NVIDIA, AMD, or Intel Arc GPU recommended",
  "Storage: 1 GB free disk space (SSD recommended for cache)",
];

export const Route = createFileRoute("/open-source/kdenlive")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/kdenlive",
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
              { name: "Kdenlive Video Editor", path: "/open-source/kdenlive" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Kdenlive Video Editor",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Windows 10, Windows 11 (64-bit)",
            description: DESC,
            url: abs("/open-source/kdenlive"),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: KdenlivePage,
});

function KdenlivePage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "Kdenlive", path: "/open-source/kdenlive" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="🎁 #1 OPEN-SOURCE CAPCUT & PREMIERE ALTERNATIVE • WHISPER AI AUTO-SUBTITLES"
              color="var(--cyan)"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              Kdenlive Professional Video Editor
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
              Edit 4K Videos, Generate AI Subtitles & Animate Like a Pro —{" "}
              <GradientText from="#2FE0C8" to="#3B82F6">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The professional non-linear video editor powered by the KDE community. Includes
              built-in OpenAI Whisper speech-to-text auto-captions, multi-track timeline, color
              grading, motion tracking, and zero export watermarks.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download Kdenlive for Windows (.EXE)
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Direct File Trigger: Kdenlive-Setup.exe (~100 MB) • Windows 10/11 (64-bit) • 100% Free
              (GPL-3.0)
            </p>
          </div>

          <GlassCard glowColor="#3B82F6" className="p-3">
            <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "#3B82F626",
                  boxShadow: "0 0 40px #3B82F640",
                }}
              >
                <Video size={40} color="#3B82F6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                  Kdenlive Studio Timeline
                </p>
                <p className="mx-auto mt-1 max-w-[320px] font-body text-[13.5px] text-[var(--text-secondary)]">
                  Multi-track 4K timeline, Whisper AI speech-to-text captions, keyframe motion
                  tracking & GPU acceleration.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <MonoBadge>4K / 60FPS Timeline</MonoBadge>
                <MonoBadge>Whisper Subtitles</MonoBadge>
                <MonoBadge>Zero Watermark</MonoBadge>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 Key Superpowers of Kdenlive
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
            Kdenlive vs Commercial Paid Tools
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left font-body text-[14px]">
              <thead>
                <tr className="text-[var(--text-primary)]">
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    Feature
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em] text-[var(--cyan)]">
                    Kdenlive (Open-Source)
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    Adobe Premiere Pro
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 font-display text-[13px] uppercase tracking-[0.12em]">
                    CapCut Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label}>
                    <td className="border-b border-[var(--border-glass)] py-3 pr-4 text-[var(--text-primary)]">
                      {row.label}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 pr-4 text-[var(--cyan)] font-semibold">
                      {row.tool}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 pr-4 text-[var(--text-secondary)]">
                      {row.other1}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 text-[var(--text-secondary)]">
                      {row.other2}
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
              What you need to run Kdenlive
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
            Download Kdenlive Free for Windows
          </h2>
          <p className="mt-4 font-body text-[15px] text-[var(--text-secondary)]">
            Enjoy full access with zero watermarks, zero subscription fees, and 100% offline privacy.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download Kdenlive for Windows (.EXE)
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
      <path d="M0 3.449L9.327 2.12v9.38H0M10.029 1.949L24 0v11.44H10.029M0 12.56h9.327v9.38L0 20.611M10.029 12.56H24V24l-13.971-1.799" />
    </svg>
  );
}
