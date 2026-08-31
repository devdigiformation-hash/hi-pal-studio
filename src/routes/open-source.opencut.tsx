import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Smartphone,
  Scissors,
  Sparkles,
  Zap,
  ShieldCheck,
  PiggyBank,
  CheckCircle2,
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

const TITLE = "OpenCut Social Video Editor — Free Open-Source CapCut & Canva Alternative";
const DESC =
  "Download OpenCut free: fast video cuts, 9:16 vertical presets for TikTok & Reels, animated text overlays, and clean exports with zero watermarks.";

// CONFIGURABLE DOWNLOAD URL: Replace with your direct Google Drive or hosted package link
const DOWNLOAD_URL = "https://github.com/opencut/opencut/releases";

const FEATURES = [
  {
    icon: Smartphone,
    color: "var(--cyan)",
    title: "Social-First Aspect Ratios",
    body: "Instant 1-click toggles for 9:16 (TikTok & Reels), 1:1 (Instagram Feed), and 16:9 (YouTube).",
  },
  {
    icon: Scissors,
    color: "var(--purple)",
    title: "Magnetic Snapping Timeline",
    body: "Rapid trimming, split cuts, and effortless clip re-arranging without gap errors.",
  },
  {
    icon: Sparkles,
    color: "var(--amber)",
    title: "Animated Text & Sticker Overlays",
    body: "Trendy title templates, lower-thirds, animated captions, and social media call-to-actions.",
  },
  {
    icon: Zap,
    color: "#3DDC84",
    title: "Instant Export with Zero Watermarks",
    body: "Clean, full 1080p and 4K video rendering without forced end-screen logos or branded overlays.",
  },
  {
    icon: ShieldCheck,
    color: "#7DD3FC",
    title: "Complete Local Privacy",
    body: "100% browser and desktop local processing. Your drafts, footage, and audio never leave your PC.",
  },
  {
    icon: PiggyBank,
    color: "#F472B6",
    title: "$0 Forever",
    body: "Enjoy unlimited video edits without freemium export locks, resolution caps, or paid feature walls.",
  },
];

const COMPARISON = [
  {
    label: "Pricing Model",
    tool: "$0 — 100% Free Forever",
    other1: "$120 / year (CapCut Pro)",
    other2: "$120 / year (Canva Video Pro)",
  },
  {
    label: "Export Watermarks",
    tool: "Zero Watermark",
    other1: "Forced ending watermark",
    other2: "Watermark on premium elements",
  },
  {
    label: "Vertical Formats (9:16)",
    tool: "Native 1-Click Preset",
    other1: "Supported",
    other2: "Supported",
  },
  {
    label: "Export Resolution",
    tool: "Full 1080p / 4K 60FPS",
    other1: "Locked behind Pro plan",
    other2: "Locked behind Pro plan",
  },
  {
    label: "Privacy & Data",
    tool: "100% Local on Device",
    other1: "Uploaded to ByteDance cloud",
    other2: "Stored on Canva cloud",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit) & Modern Web Browsers",
  "RAM: 4 GB minimum (8 GB recommended for smooth video playback)",
  "Processor: Any modern dual-core or quad-core CPU",
  "Storage: 500 MB free disk space",
  "Display: 1280x720 or higher resolution screen",
];

export const Route = createFileRoute("/open-source/opencut")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/opencut",
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
              { name: "OpenCut Social Video Editor", path: "/open-source/opencut" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "OpenCut Social Video Studio",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Windows 10, Windows 11 (64-bit)",
            description: DESC,
            url: abs("/open-source/opencut"),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: OpenCutPage,
});

function OpenCutPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "OpenCut", path: "/open-source/opencut" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="🎁 MODERN CAPCUT ALTERNATIVE • OPTIMIZED FOR REELS & TIKTOKS"
              color="var(--cyan)"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              OpenCut Social Video Studio
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
              Create Viral Social Media Reels, Shorts & TikToks —{" "}
              <GradientText from="#2FE0C8" to="#F59E0B">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The modern open-source video editor designed specifically for content creators. Fast
              cuts, vertical aspect ratio presets (9:16), animated text overlays, and clean exports with
              zero platform watermarks.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download OpenCut Studio (.ZIP)
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Direct File Trigger: opencut-main.zip • Cross-Platform Web & Desktop Studio • MIT License
            </p>
          </div>

          <GlassCard glowColor="#F59E0B" className="p-3">
            <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "#F59E0B26",
                  boxShadow: "0 0 40px #F59E0B40",
                }}
              >
                <Smartphone size={40} color="#F59E0B" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                  OpenCut Reels & Shorts Studio
                </p>
                <p className="mx-auto mt-1 max-w-[320px] font-body text-[13.5px] text-[var(--text-secondary)]">
                  Instant 9:16 TikTok/Reels presets, magnetic snapping timeline, animated text
                  overlays & zero watermarks.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <MonoBadge>9:16 Vertical Video</MonoBadge>
                <MonoBadge>Magnetic Snapping</MonoBadge>
                <MonoBadge>Zero Watermark</MonoBadge>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 Key Superpowers of OpenCut
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
            OpenCut vs Commercial Paid Tools
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left font-body text-[14px]">
              <thead>
                <tr className="text-[var(--text-primary)]">
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    Feature
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em] text-[var(--cyan)]">
                    OpenCut (Open-Source)
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    CapCut Web / Pro
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 font-display text-[13px] uppercase tracking-[0.12em]">
                    Canva Video Pro
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
              What you need to run OpenCut
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
            Download OpenCut Free for Windows
          </h2>
          <p className="mt-4 font-body text-[15px] text-[var(--text-secondary)]">
            Enjoy full access with zero watermarks, zero subscription fees, and 100% offline privacy.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download OpenCut Studio (.ZIP)
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
