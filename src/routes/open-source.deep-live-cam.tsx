import OpenSourceValueComparisonChart from "@/components/seo/OpenSourceValueComparisonChart";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Camera,
  Video,
  Zap,
  Cpu,
  ShieldCheck,
  PiggyBank,
  CheckCircle2,
  Download,
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
import exeFile from "@/assets/deep-live-cam-studio.exe.asset.json";
import zipFile from "@/assets/deep-live-cam-main.zip.asset.json";

const TITLE = "Deep-Live-Cam — Free Real-Time Live Stream & Webcam Face Swapper";
const DESC =
  "Download Deep-Live-Cam free for Windows: real-time live webcam face swapping for OBS, Zoom, Google Meet & Discord with 1 single portrait photo.";

const EXE_URL = exeFile.url;
const ZIP_URL = zipFile.url;

const FEATURES = [
  {
    icon: Camera,
    color: "var(--cyan)",
    title: "1-Image Instant Setup",
    body: "Requires only a single source photo to generate a full 3D live facial mesh and landmark tracker.",
  },
  {
    icon: Video,
    color: "var(--purple)",
    title: "Real-Time Live Webcam Support",
    body: "Connects directly to Zoom, Google Meet, Discord, and OBS via built-in virtual camera driver.",
  },
  {
    icon: Zap,
    color: "var(--amber)",
    title: "Ultra-Low Latency Tracking",
    body: "Fast 30+ FPS face tracking with natural blink, gaze, smile, and mouth movement replication.",
  },
  {
    icon: Cpu,
    color: "#3DDC84",
    title: "Lightweight CPU/GPU Execution",
    body: "Runs smoothly on consumer PC hardware with ONNX Runtime & NVIDIA CUDA acceleration.",
  },
  {
    icon: ShieldCheck,
    color: "#7DD3FC",
    title: "100% Local Video Stream",
    body: "Your live webcam video feed remains strictly on your local PC with zero external relay servers.",
  },
  {
    icon: PiggyBank,
    color: "#F472B6",
    title: "Free & Open-Source Forever",
    body: "Complete access to open weights, models, and source code without expensive SaaS subscriptions.",
  },
];

const COMPARISON = [
  {
    label: "Pricing Model",
    tool: "$0 — Free & Open Source",
    other1: "$200+/yr (Virtual Cam Plugins)",
    other2: "$30/mo (Live Cloud Apps)",
  },
  {
    label: "Latency & FPS",
    tool: "30–60 FPS Local Real-Time",
    other1: "High lag via cloud streaming",
    other2: "Variable bitrate drops",
  },
  {
    label: "Source Setup",
    tool: "1 Single Photo Instant",
    other1: "Requires complex video dataset",
    other2: "Requires 100+ training photos",
  },
  {
    label: "Software Integration",
    tool: "OBS, Zoom, Discord, Meet",
    other1: "OBS only",
    other2: "Browser tab only",
  },
  {
    label: "Privacy & Safety",
    tool: "100% Local Execution",
    other1: "Streams video to 3rd party",
    other2: "Logs video calls on cloud",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit)",
  "Webcam: Any standard 720p or 1080p USB or built-in webcam",
  "RAM: 8 GB minimum (16 GB recommended)",
  "GPU: NVIDIA GPU with CUDA recommended for 60 FPS live output (CPU fallback supported)",
  "Storage: 2 GB free disk space",
];

export const Route = createFileRoute("/open-source/deep-live-cam")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/deep-live-cam",
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
              { name: "Deep-Live-Cam", path: "/open-source/deep-live-cam" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Deep-Live-Cam Real-Time Webcam Swapper",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Windows 10, Windows 11 (64-bit)",
            description: DESC,
            url: abs("/open-source/deep-live-cam"),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: DeepLiveCamPage,
});

function DeepLiveCamPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "Deep-Live-Cam", path: "/open-source/deep-live-cam" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="🎁 REAL-TIME LIVE WEBCAM FACE SWAP • 45,000+ GITHUB STARS"
              color="var(--cyan)"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              Deep-Live-Cam Real-Time Webcam Swapper
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
              Instant Live Face Swapping for Webcams & Streaming —{" "}
              <GradientText from="#2FE0C8" to="#8B5CF6">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The viral open-source live webcam face swapper. Upload a single portrait photo and
              swap your face in real-time on live video calls, OBS streams, and recording software
              with ultra-low latency.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={EXE_URL} download="Deep-Live-Cam-Studio.exe">
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download Deep-Live-Cam (.EXE)
                </CyanButton>
              </a>
              <a href={ZIP_URL} download="deep-live-cam-main.zip">
                <GhostButton size="lg" icon={<Download size={18} />}>
                  Source Code (.ZIP)
                </GhostButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Direct File Trigger: Deep-Live-Cam-Studio.exe + deep-live-cam-main.zip (67 MB) • Windows 10/11 • GPL-3.0
            </p>
          </div>

          <GlassCard glowColor="#8B5CF6" className="p-3">
            <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "#8B5CF626",
                  boxShadow: "0 0 40px #8B5CF640",
                }}
              >
                <Camera size={40} color="#8B5CF6" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                  Deep-Live-Cam Virtual Studio
                </p>
                <p className="mx-auto mt-1 max-w-[320px] font-body text-[13.5px] text-[var(--text-secondary)]">
                  Single-photo instant 3D mesh, 30+ FPS live webcam tracking for OBS, Zoom, Meet and
                  Discord.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <MonoBadge>45,000+ Stars</MonoBadge>
                <MonoBadge>Live OBS Virtual Cam</MonoBadge>
                <MonoBadge>30+ FPS Ultra-Low Latency</MonoBadge>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 Key Superpowers of Deep-Live-Cam
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
        <OpenSourceValueComparisonChart toolId="deep-live-cam" downloadUrl={EXE_URL} />
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="System Requirements" color="var(--cyan)" />
            <h2 className="mt-4 font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[30px]">
              What you need to run Deep-Live-Cam
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
            Download Deep-Live-Cam Free for Windows
          </h2>
          <p className="mt-4 font-body text-[15px] text-[var(--text-secondary)]">
            Enjoy full access with zero watermarks, zero subscription fees, and 100% offline privacy.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={EXE_URL} download="Deep-Live-Cam-Studio.exe">
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download Deep-Live-Cam (.EXE)
              </CyanButton>
            </a>
            <a href={ZIP_URL} download="deep-live-cam-main.zip">
              <GhostButton size="lg" icon={<Download size={18} />}>
                Download Source (.ZIP)
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
