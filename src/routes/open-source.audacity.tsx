import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mic,
  Sparkles,
  Volume2,
  Zap,
  FileAudio,
  PiggyBank,
  ShieldCheck,
  MessageSquare,
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

const TITLE = "Audacity Audio Studio — Free Open-Source Adobe Audition Alternative";
const DESC =
  "Download Audacity free for Windows: multi-track recording, 1-click background noise reduction, studio mastering, VST3 plugins, and lossless audio export.";

// CONFIGURABLE DOWNLOAD URL: Replace with your direct Google Drive or hosted EXE link
const DOWNLOAD_URL = "https://www.audacityteam.org/download/windows/";
const WHATSAPP_URL = "https://wa.me/923164467464";

const FEATURES = [
  {
    icon: Mic,
    color: "var(--cyan)",
    title: "Multi-Track Audio Recording & Editing",
    body: "Record multiple microphone tracks, instruments, and system audio simultaneously with low latency.",
  },
  {
    icon: Sparkles,
    color: "var(--purple)",
    title: "1-Click Background Noise Removal",
    body: "Erase fan noise, room hiss, and AC hum instantly with advanced spectral noise reduction.",
  },
  {
    icon: Volume2,
    color: "var(--amber)",
    title: "Studio Mastering & Effects Suite",
    body: "Graphic & Parametric EQ, Compressor, Limiter, Reverb, Pitch Shifting, and Auto-Duck voiceover ducking.",
  },
  {
    icon: Zap,
    color: "#3DDC84",
    title: "Real-Time VST3 Plugin Support",
    body: "Enhance voiceovers and music with professional third-party VST3 audio effects and mastering plugins.",
  },
  {
    icon: FileAudio,
    color: "#7DD3FC",
    title: "High-Res Lossless Audio Export",
    body: "Exports pristine 24-bit and 32-bit float WAV, FLAC, OGG, and high-bitrate 320kbps MP3 audio.",
  },
  {
    icon: PiggyBank,
    color: "#F472B6",
    title: "Save $240+/Year on Adobe Audition",
    body: "Industry-standard audio production with a permanent $0 license and zero monthly subscription fees.",
  },
];

const COMPARISON = [
  {
    label: "Pricing & Licence",
    tool: "$0 — Free Forever (GPL-3.0)",
    other1: "$240 / year (Adobe Audition)",
    other2: "$15–$30/mo (Paid Podcast Apps)",
  },
  {
    label: "Noise Reduction",
    tool: "Built-in 1-Click Spectral Cleaning",
    other1: "Requires complex setup",
    other2: "Paid cloud AI credits",
  },
  {
    label: "Export Formats",
    tool: "Lossless WAV, FLAC, MP3, OGG",
    other1: "Standard formats",
    other2: "Export limits on free tier",
  },
  {
    label: "VST3 Plugins",
    tool: "Full Real-Time VST3 Support",
    other1: "Supported",
    other2: "Not supported",
  },
  {
    label: "Offline Privacy",
    tool: "100% Local on your machine",
    other1: "Adobe Cloud telemetry",
    other2: "Cloud storage only",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit)",
  "RAM: 4 GB minimum (8 GB recommended for multi-track sessions)",
  "Processor: Intel / AMD 2 GHz or faster",
  "Storage: 100 MB free disk space for application files",
  "Audio: Any standard USB microphone or sound card",
];

export const Route = createFileRoute("/open-source/audacity")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/audacity",
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
              { name: "Audacity Audio Studio", path: "/open-source/audacity" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Audacity Multi-Track Audio Studio",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Windows 10, Windows 11 (64-bit)",
            description: DESC,
            url: abs("/open-source/audacity"),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: AudacityPage,
});

function AudacityPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "Audacity", path: "/open-source/audacity" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="🎁 DUNIYA KA #1 MULTI-TRACK AUDIO EDITOR • 100% FREE"
              color="var(--cyan)"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              Audacity Multi-Track Audio Studio
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
              Record, Clean & Master Studio-Quality Audio & Podcasts —{" "}
              <GradientText from="#2FE0C8" to="#3B82F6">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The world's most popular multi-track audio workstation. Record live voiceovers, eliminate
              background noise with 1-click AI noise reduction, adjust vocal pitch, and export
              broadcast-ready MP3, WAV, and FLAC audio.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download Audacity for Windows (.EXE)
                </CyanButton>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <GhostButton size="lg" icon={<MessageSquare size={18} />}>
                  WhatsApp Support
                </GhostButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Direct File Trigger: Audacity-Setup.exe (~30 MB) • Windows 10/11 (64-bit Standalone) •
              GPL-3.0
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
                <Mic size={40} color="#3B82F6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                  Audacity Multi-Track Studio
                </p>
                <p className="mx-auto mt-1 max-w-[320px] font-body text-[13.5px] text-[var(--text-secondary)]">
                  Live voice recording, 1-click spectral noise cleaning, parametric EQ, compressor & real-time
                  VST3 plugins.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <MonoBadge>Multi-Track Audio</MonoBadge>
                <MonoBadge>1-Click Noise Removal</MonoBadge>
                <MonoBadge>VST3 Plugin Suite</MonoBadge>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 Key Superpowers of Audacity
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
            Audacity vs Commercial Paid DAWs
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left font-body text-[14px]">
              <thead>
                <tr className="text-[var(--text-primary)]">
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    Feature
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em] text-[var(--cyan)]">
                    Audacity (Open-Source)
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    Adobe Audition
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 font-display text-[13px] uppercase tracking-[0.12em]">
                    Paid Podcast Apps
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
              What you need to run Audacity
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
                href={WHATSAPP_URL}
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
            Download Audacity Free for Windows
          </h2>
          <p className="mt-4 font-body text-[15px] text-[var(--text-secondary)]">
            Enjoy full access with zero watermarks, zero subscription fees, and 100% offline privacy.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download Audacity for Windows (.EXE)
              </CyanButton>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <GhostButton size="lg" icon={<MessageSquare size={18} />}>
                WhatsApp: +92 316 446 7464
              </GhostButton>
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
