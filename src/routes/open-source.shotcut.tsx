import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Film,
  Sparkles,
  Zap,
  Volume2,
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
import setupFile from "@/assets/shotcut-setup.exe.asset.json";

const TITLE = "Shotcut 4K Video Editor — Free Open-Source Filmora & Vegas Alternative";
const DESC =
  "Download Shotcut free for Windows: lightweight and rock-solid 4K video editing, 3-way color grading, audio visualizers, and zero export watermarks.";

// Direct setup installer download
const DOWNLOAD_URL = setupFile.url;

const FEATURES = [
  {
    icon: Film,
    color: "var(--cyan)",
    title: "Universal Format Support",
    body: "Natively imports MP4, MKV, ProRes, DNxHD, and RAW footage via embedded high-performance FFmpeg.",
  },
  {
    icon: Sparkles,
    color: "var(--purple)",
    title: "Advanced Video Filters & Color Grading",
    body: "Color wheels, 3-way color balance, glow, lens correction, LUTs, and optical blur effects.",
  },
  {
    icon: Zap,
    color: "var(--amber)",
    title: "Precise Keyframe Control",
    body: "Smooth easing and property animation for transitions, zooms, pans, and lower-third titles.",
  },
  {
    icon: Volume2,
    color: "#3DDC84",
    title: "Comprehensive Audio Mixing",
    body: "Audio spectrum visualizer, parametric EQ, compressor, limiter, and volume normalization.",
  },
  {
    icon: ShieldCheck,
    color: "#7DD3FC",
    title: "Zero Telemetry & Zero Watermarks",
    body: "Export clean, unbranded 4K/60FPS videos forever without hidden watermarks or export locks.",
  },
  {
    icon: PiggyBank,
    color: "#F472B6",
    title: "Save $150+ on Paid Editors",
    body: "No subscriptions, no registration required, 100% free open-source software with lifetime updates.",
  },
];

const COMPARISON = [
  {
    label: "Pricing & Licence",
    tool: "$0 — 100% Free Forever",
    other1: "$80 / year (Filmora Pro)",
    other2: "$150 (Vegas Pro perpetual)",
  },
  {
    label: "Export Watermarks",
    tool: "Zero Watermark Guaranteed",
    other1: "Forced massive center logo on free",
    other2: "Trial watermark",
  },
  {
    label: "System Resource Usage",
    tool: "Lightweight (~85MB installer)",
    other1: "Heavy background bloatware",
    other2: "Heavy disk consumption",
  },
  {
    label: "Codec & Format Import",
    tool: "Hundreds of formats via FFmpeg",
    other1: "Restricted formats on free",
    other2: "Requires paid codec add-ons",
  },
  {
    label: "Registration & Ads",
    tool: "No account needed, zero ads",
    other1: "Forced account & upsell popups",
    other2: "Registration mandatory",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit)",
  "RAM: 4 GB minimum (8 GB recommended for 1080p, 16 GB for 4K)",
  "Processor: Intel Core i3 / i5 or AMD Ryzen",
  "GPU: OpenGL 2.0 compatible graphics card (NVIDIA / AMD / Intel HD)",
  "Storage: 500 MB free disk space",
];

export const Route = createFileRoute("/open-source/shotcut")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/shotcut",
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
              { name: "Shotcut 4K Video Editor", path: "/open-source/shotcut" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Shotcut 4K Video Editor",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Windows 10, Windows 11 (64-bit)",
            description: DESC,
            url: abs("/open-source/shotcut"),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: ShotcutPage,
});

function ShotcutPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "Shotcut", path: "/open-source/shotcut" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="🎁 STABLE 4K MULTI-TRACK VIDEO EDITOR • NO WATERMARK"
              color="var(--cyan)"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              Shotcut 4K Video Editor Workhorse
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
              Powerful, Lightweight 4K Video Editing Made Simple —{" "}
              <GradientText from="#2FE0C8" to="#10B981">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The rock-solid cross-platform video editor. Supports hundreds of audio and video formats
              via FFmpeg, smooth keyframe animations, audio peak meters, and crisp 4K exports with zero
              ads or watermarks.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} download="Shotcut-Setup.exe">
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download Shotcut for Windows (.EXE)
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Direct File Trigger: Shotcut-Setup.exe (~85 MB) • Windows 10/11 (64-bit) • GPL-3.0
            </p>
          </div>

          <GlassCard glowColor="#10B981" className="p-3">
            <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "#10B98126",
                  boxShadow: "0 0 40px #10B98140",
                }}
              >
                <Film size={40} color="#10B981" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                  Shotcut 4K Video Studio
                </p>
                <p className="mx-auto mt-1 max-w-[320px] font-body text-[13.5px] text-[var(--text-secondary)]">
                  Universal FFmpeg format support, 3-way color grading wheels, audio peak mixing & keyframe
                  easing.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <MonoBadge>4K / ProRes / RAW</MonoBadge>
                <MonoBadge>Zero Ads or Watermarks</MonoBadge>
                <MonoBadge>Lightweight ~85MB</MonoBadge>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 Key Superpowers of Shotcut
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
            Shotcut vs Commercial Paid Tools
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left font-body text-[14px]">
              <thead>
                <tr className="text-[var(--text-primary)]">
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    Feature
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em] text-[var(--cyan)]">
                    Shotcut (Open-Source)
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    Wondershare Filmora
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 font-display text-[13px] uppercase tracking-[0.12em]">
                    Vegas Pro
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
              What you need to run Shotcut
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
            Download Shotcut Free for Windows
          </h2>
          <p className="mt-4 font-body text-[15px] text-[var(--text-secondary)]">
            Enjoy full access with zero watermarks, zero subscription fees, and 100% offline privacy.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} download="Shotcut-Setup.exe">
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download Shotcut for Windows (.EXE)
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
