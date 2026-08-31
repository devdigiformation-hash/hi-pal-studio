import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Smile,
  Sparkles,
  Mic,
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
import setupFile from "@/assets/facefusion-master.zip.asset.json";

const TITLE = "FaceFusion AI Face Swap Studio — Free Next-Gen Face Swapper for Windows";
const DESC =
  "Download FaceFusion free for Windows: swap faces in 4K videos & photos, built-in GFPGAN/CodeFormer AI facial restoration, lip-sync, and 100% local privacy.";

// Direct setup package download
const DOWNLOAD_URL = setupFile.url;

const FEATURES = [
  {
    icon: Smile,
    color: "var(--cyan)",
    title: "High-Fidelity Video & Photo Face Swap",
    body: "Seamlessly replaces target faces while preserving expressions, head angles, and natural lighting.",
  },
  {
    icon: Sparkles,
    color: "var(--purple)",
    title: "Built-in AI Face Enhancers",
    body: "Restores blurry or low-res faces to 4K clarity using integrated GFPGAN and CodeFormer neural networks.",
  },
  {
    icon: Mic,
    color: "var(--amber)",
    title: "Real-Time Lip-Sync Generation",
    body: "Syncs facial lip movements to any audio voice track for multilingual dubbing and voiceover videos.",
  },
  {
    icon: Zap,
    color: "#3DDC84",
    title: "CPU & GPU Hardware Acceleration",
    body: "Optimized for NVIDIA CUDA, DirectML, and standard Intel/AMD multi-core CPUs with ONNX runtime.",
  },
  {
    icon: ShieldCheck,
    color: "#7DD3FC",
    title: "100% Local Confidentiality",
    body: "Your personal media and videos never leave your local computer. Zero cloud uploads or surveillance.",
  },
  {
    icon: PiggyBank,
    color: "#F472B6",
    title: "$0 Lifetime Cost",
    body: "Enjoy unrestricted face swaps without paying expensive per-credit fees to commercial web SaaS apps.",
  },
];

const COMPARISON = [
  {
    label: "Pricing Model",
    tool: "$0 — Free Forever",
    other1: "$300+/yr (Cloud Deepfake SaaS)",
    other2: "$20–$50/mo (Remaker AI credits)",
  },
  {
    label: "Face Swaps Limit",
    tool: "Unlimited Free Swaps",
    other1: "Strict monthly credit limits",
    other2: "Pay per photo / video minute",
  },
  {
    label: "Video Resolution",
    tool: "Native 4K / 60FPS",
    other1: "Often capped at 720p/1080p",
    other2: "Credits multiplier for 4K",
  },
  {
    label: "Data Privacy",
    tool: "100% Offline Local PC",
    other1: "Uploaded to cloud servers",
    other2: "Photos stored on cloud",
  },
  {
    label: "Lip-Sync & Enhancers",
    tool: "Built-in GFPGAN & CodeFormer",
    other1: "Extra paid add-on",
    other2: "Not included",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit)",
  "RAM: 8 GB minimum (16 GB recommended for video batch processing)",
  "GPU: NVIDIA RTX GPU (CUDA) recommended for 10x speed, or Intel/AMD CPU with DirectML",
  "Storage: 4 GB free disk space for AI neural weights",
  "Python: Python 3.10+ (included in standalone bundles)",
];

export const Route = createFileRoute("/open-source/facefusion")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/facefusion",
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
              { name: "FaceFusion", path: "/open-source/facefusion" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "FaceFusion Next-Gen AI Face Swapper",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Windows 10, Windows 11 (64-bit)",
            description: DESC,
            url: abs("/open-source/facefusion"),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: FaceFusionPage,
});

function FaceFusionPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "FaceFusion", path: "/open-source/facefusion" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel
              text="🎁 #1 OPEN-SOURCE AI FACE SWAP ENGINE • 25,000+ GITHUB STARS"
              color="var(--cyan)"
            />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              FaceFusion Next-Gen AI Face Swapper
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
              Next-Gen AI Face Swapping & Lip-Sync for Videos & Photos —{" "}
              <GradientText from="#2FE0C8" to="#EC4899">
                100% Free
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The industry standard in open-source facial manipulation. Swap faces seamlessly in
              high-definition videos, enhance resolution with built-in GFPGAN/CodeFormer, and generate
              realistic lip-sync with zero monthly fees.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} download="facefusion-master.zip">
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download FaceFusion Studio (.ZIP)
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Direct File Trigger: facefusion-master.zip • Windows 10/11 (64-bit) & Web UI • 100% Free
              (MIT License)
            </p>
          </div>

          <GlassCard glowColor="#EC4899" className="p-3">
            <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-4 rounded-[10px] border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 text-center">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-full"
                style={{
                  background: "#EC489926",
                  boxShadow: "0 0 40px #EC489940",
                }}
              >
                <Smile size={40} color="#EC4899" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                  FaceFusion AI Face Engine
                </p>
                <p className="mx-auto mt-1 max-w-[320px] font-body text-[13.5px] text-[var(--text-secondary)]">
                  High-fidelity video & photo face swap, GFPGAN 4K face enhancement, lip-sync & CUDA
                  GPU acceleration.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <MonoBadge>25,000+ Stars</MonoBadge>
                <MonoBadge>GFPGAN 4K</MonoBadge>
                <MonoBadge>100% Local</MonoBadge>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            6 Key Superpowers of FaceFusion
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
            FaceFusion vs Commercial Paid Tools
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left font-body text-[14px]">
              <thead>
                <tr className="text-[var(--text-primary)]">
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    Feature
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em] text-[var(--cyan)]">
                    FaceFusion (Open-Source)
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    Cloud Deepfake SaaS
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 font-display text-[13px] uppercase tracking-[0.12em]">
                    Remaker AI
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
              What you need to run FaceFusion
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
            Download FaceFusion Free for Windows
          </h2>
          <p className="mt-4 font-body text-[15px] text-[var(--text-secondary)]">
            Enjoy full access with zero watermarks, zero subscription fees, and 100% offline privacy.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} download="facefusion-master.zip">
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download FaceFusion Studio (.ZIP)
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
