import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, Zap, Bot, Database, PiggyBank } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";

const TITLE = "Upscayl AI Image Enhancer — Free Offline Upscaler for Windows";
const DESC =
  "Download Upscayl free: enhance, sharpen, and upscale images locally on your Windows PC. 100% private, no watermarks, unlimited processing, no subscription.";

const DOWNLOAD_URL = "#"; 
const WHATSAPP = "https://wa.me/923164467464";

const FEATURES = [
  {
    icon: Sparkles,
    color: "var(--cyan)",
    title: "AI-Powered Super-Resolution",
    body: "Turn low-resolution images into sharp, high-definition masterpieces with custom AI models.",
  },
  {
    icon: ShieldCheck,
    color: "var(--purple)",
    title: "100% Private & Offline",
    body: "Your photos never leave your device. No cloud upload, no tracking, total privacy.",
  },
  {
    icon: Zap,
    color: "var(--amber)",
    title: "Lightning Fast Batch Processing",
    body: "Upscale entire folders of images in seconds using your GPU power.",
  },
  {
    icon: Bot,
    color: "#7DD3FC",
    title: "Multiple AI Models",
    body: "Choose from different models optimized for real-world photos, digital art, or sketches.",
  },
  {
    icon: Database,
    color: "#F472B6",
    title: "No Watermarks",
    body: "Upscayl: 0% Watermark | Freemium Tools: Forces watermark unless upgraded.",
  },
  {
    icon: PiggyBank,
    color: "#3DDC84",
    title: "100% Free Forever",
    body: "No subscription plans or hidden costs. Truly open-source.",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit)",
  "GPU: Dedicated graphics card recommended (NVIDIA/AMD) for fastest results",
  "RAM: 8 GB minimum",
  "Storage: 500 MB free disk space",
];

export const Route = createFileRoute("/open-source/upscayl")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/upscayl",
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
              { name: "Upscayl", path: "/open-source/upscayl" },
            ]),
          ),
        },
      ],
    };
  },
  component: UpscaylPage,
});

function UpscaylPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "Upscayl", path: "/open-source/upscayl" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel text="100% Free & Open-Source AI Upscaler" color="var(--amber)" />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              Upscayl AI Image Enhancer
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[48px]">
              Enhance Your Images with AI —{" "}
              <GradientText from="#2FE0C8" to="#8B7CF6">
                100% Free, Private & Offline
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              Upscayl uses powerful AI models to upscale your images without losing quality. Enhance blurry photos, sharpen graphics, and upscale digital art — all on your own machine.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<WindowsIcon />}>Download Upscayl</CyanButton>
              </a>
            </div>
          </div>

          <GlassCard glowColor="var(--cyan)" className="p-3">
            <div className="aspect-video w-full rounded-[10px] bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-muted)]">
                [Upscayl Desktop Interface Preview]
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            Core features & highlights
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
            Get Upscayl free, then automate everything with DIGI BIZ OS
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<WindowsIcon />}>Download Upscayl</CyanButton>
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
