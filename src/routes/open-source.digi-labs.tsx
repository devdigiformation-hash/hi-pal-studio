import OpenSourceValueComparisonChart from "@/components/seo/OpenSourceValueComparisonChart";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  ShieldCheck,
  PiggyBank,
  Layers,
  Sparkles,
  ExternalLink,
  GitFork,
  CheckCircle2,
  Mic,
  Volume2,
  FileText,
  Cpu,
  Video,
  BookOpen,
  Sliders,
  Download,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import OpenSourceHeroStage from "@/components/seo/OpenSourceHeroStage";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";
import OpenSourceSubpageTrustSection from "@/components/seo/OpenSourceSubpageTrustSection";
import OpenSourceSubpageFaq from "@/components/seo/OpenSourceSubpageFaq";
import OpenSourceTechSpecs from "@/components/seo/OpenSourceTechSpecs";
import OpenSourceRelatedTools from "@/components/seo/OpenSourceRelatedTools";
import OpenSourceDigiBizBridge from "@/components/seo/OpenSourceDigiBizBridge";
import { OPEN_SOURCE_SUBPAGES } from "@/content/open-source-subpages";
import digiLabsLogo from "@/assets/digi-labs-logo.png";

const toolData = OPEN_SOURCE_SUBPAGES["digi-labs"];

const TITLE = "DIGI LABS — Free Human TTS & Video-to-Prompt Studio (ElevenLabs Alternative) | DIGI BIZ OS";
const DESC =
  toolData.tagline + " Download 100% free Windows desktop installer (.exe) with Gemini voice, unlimited Edge-TTS, and video prompt extraction.";

const DOWNLOAD_URL = toolData.downloadUrl;
const REPO_URL = toolData.repoUrl;

const FEATURES = [
  {
    icon: Sparkles,
    color: "#EC4899",
    title: "Gemini 2.5 Flash Studio Voice",
    body: "Hyper-realistic human voice with emotional inflection, realistic breathing, and multi-key auto-rotation across 9 API key slots.",
  },
  {
    icon: Volume2,
    color: "#3B82F6",
    title: "Unlimited Free Voice (Edge-TTS)",
    body: "Narrate entire audiobooks, multi-hour podcast episodes, and chapters with zero character credits, zero rate limits, and zero costs.",
  },
  {
    icon: Video,
    color: "#8B5CF6",
    title: "Video-to-Prompt Reverse-Engineering",
    body: "Paste any video link to extract cinematic visual prompts, camera pacing, and lighting scripts for regeneration with Sora, Runway Gen-3, or Kling.",
  },
  {
    icon: BookOpen,
    color: "#10B981",
    title: "Instant Course & Study Guide Generator",
    body: "Turn YouTube lectures and webinars into modular curricula, chapter-by-chapter student notes, and executive summaries automatically.",
  },
  {
    icon: Mic,
    color: "#F59E0B",
    title: "Native Urdu & Nastaliq RTL Support",
    body: "Full Urdu, Hindi, Arabic, and English vocal models with a 1-click Nastaliq typography editor toggle for regional localization.",
  },
  {
    icon: PiggyBank,
    color: "#2FE0C8",
    title: "Save $264 – $1,188 Every Single Year",
    body: "Completely eliminate recurring ElevenLabs and Descript subscription taxes with sovereign, 100% private local desktop ownership.",
  },
];

export const Route = createFileRoute("/open-source/digi-labs")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/digi-labs",
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
              { name: toolData.name, path: "/open-source/digi-labs" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: toolData.name,
            applicationCategory: "MultimediaApplication",
            operatingSystem: toolData.requirements.os,
            description: DESC,
            url: abs("/open-source/digi-labs"),
            downloadUrl: DOWNLOAD_URL,
            license: toolData.license,
            codeRepository: REPO_URL,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: DigiLabsSubpage,
});

function DigiLabsSubpage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        {/* ── BREADCRUMBS ─────────────────────────────────────────── */}
        <div className="mb-6">
          <Breadcrumbs
            trail={[
              { name: "Home", path: "/" },
              { name: "Open Source", path: "/open-source" },
              { name: "DIGI LABS", path: "/open-source/digi-labs" },
            ]}
          />
        </div>

        {/* ── HERO BANNER ─────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-b from-pink-950/20 via-black/40 to-black/80 p-6 md:p-12">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-3.5 py-1 text-xs font-semibold text-pink-400">
                <Sparkles size={13} />
                <span>OFFICIAL DIGIFORMATION OPEN SOURCE WORKSTATION</span>
              </div>
              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                DIGI LABS — <GradientText from="#EC4899" to="#2FE0C8">Unlimited Free Human TTS &amp; Video-to-Prompt</GradientText>
              </h1>
              <p className="mt-4 font-body text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                The zero-cost ElevenLabs alternative engineered by DigiFormation Ltd. Experience studio-quality human voice synthesis powered by Gemini 2.5 Flash, unlimited Edge-TTS audiobooks, and reverse-engineer any video URL into cinematic AI prompts, courses, and executive notes.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                  <CyanButton icon={<Download size={16} />}>
                    Download Windows Setup (.exe 240MB)
                  </CyanButton>
                </a>
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 font-display text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
                >
                  <GitFork size={15} />
                  <span>GitHub Repository</span>
                  <ExternalLink size={13} className="text-white/50" />
                </a>
              </div>
            </div>

            <div className="w-full max-w-md lg:w-auto">
              <div className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-3xl border border-pink-500/30 bg-black/60 p-6 shadow-[0_0_50px_rgba(236,72,153,0.2)] backdrop-blur-xl">
                <img
                  src={digiLabsLogo}
                  alt="DIGI LABS Workspace"
                  className="h-full w-full object-contain drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                />
                <div className="absolute -bottom-3 -right-3 rounded-full border border-emerald-500/40 bg-slate-950/90 px-3 py-1 font-mono text-xs font-bold text-emerald-400 shadow-lg">
                  v1.0.0 STABLE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── KEY CAPABILITIES ─────────────────────────────────────── */}
        <div className="mt-16">
          <div className="text-center">
            <EyebrowLabel text="ZERO SUBSCRIPTIONS • 100% LOCAL PRIVACY" color="#EC4899" />
            <h2 className="mt-2 font-display text-2xl font-bold text-white md:text-3xl">
              Engineered to Replace Expensive Voice &amp; Video SaaS Stacks
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <GlassCard key={i} className="p-6">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ backgroundColor: `${f.color}15`, color: f.color }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-white">{f.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-[var(--text-secondary)]">
                    {f.body}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* ── HOW-TO GUIDE & RUN PROTOCOL ──────────────────────────── */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h2 className="font-display text-xl font-bold text-white md:text-2xl">
            Quick Installation &amp; How to Run DIGI LABS
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/5 bg-black/40 p-5">
              <span className="font-mono text-xs font-bold text-pink-400">OPTION 1 (RECOMMENDED)</span>
              <h4 className="mt-2 font-display text-base font-bold text-white">Standalone Windows (.exe)</h4>
              <p className="mt-2 text-xs text-[var(--text-secondary)]">
                Download <code className="text-pink-300">DIGI-LABS-Setup-1.0.0.exe</code>, run the installer, and launch the native desktop workstation directly from your Windows Start Menu.
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-black/40 p-5">
              <span className="font-mono text-xs font-bold text-cyan-400">OPTION 2 (DEVELOPER CLI)</span>
              <h4 className="mt-2 font-display text-base font-bold text-white">Run From GitHub Source</h4>
              <p className="mt-2 text-xs text-[var(--text-secondary)]">
                Clone the repo, run <code className="text-cyan-300">npm install</code>, and start the local studio server with <code className="text-cyan-300">npm run server</code> on port 4300.
              </p>
            </div>
            <div className="rounded-xl border border-white/5 bg-black/40 p-5">
              <span className="font-mono text-xs font-bold text-emerald-400">OPTION 3 (DESKTOP SHELL)</span>
              <h4 className="mt-2 font-display text-base font-bold text-white">Electron Workstation</h4>
              <p className="mt-2 text-xs text-[var(--text-secondary)]">
                Launch with <code className="text-emerald-300">npm start</code> for the full window shell with splash loader and automatic background process lifecycle management.
              </p>
            </div>
          </div>
        </div>

        {/* ── COMPARISON MATRIX ────────────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceValueComparisonChart toolId="digi-labs" />
        </div>

        {/* ── TRUST & PROVENANCE ───────────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceSubpageTrustSection toolId="digi-labs" />
        </div>

        {/* ── TECHNICAL SPECIFICATIONS ─────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceTechSpecs toolId="digi-labs" />
        </div>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceSubpageFaq toolId="digi-labs" />
        </div>

        {/* ── DIGI BIZ OS BRIDGE ──────────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceDigiBizBridge toolId="digi-labs" />
        </div>

        {/* ── RELATED OPEN SOURCE TOOLS ───────────────────────────── */}
        <div className="mt-16">
          <OpenSourceRelatedTools currentToolId="digi-labs" />
        </div>
      </SectionWrapper>
    </main>
  );
}
