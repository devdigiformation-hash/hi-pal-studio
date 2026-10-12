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
  ArrowRight,
  Check,
  Github,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Building2,
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
import { useState } from "react";
import OpenSourceDigiBizBridge from "@/components/seo/OpenSourceDigiBizBridge";
import SubscribeToDownloadModal from "@/components/seo/SubscribeToDownloadModal";
import { OPEN_SOURCE_SUBPAGES } from "@/content/open-source-subpages";
import digiLabsLogo from "@/assets/digi-labs-logo.png";
import digiLabsBanner from "@/assets/digi-labs-banner.png";

const toolData = OPEN_SOURCE_SUBPAGES["digi-labs"];

const RELATED_BLOGS = [
  {
    slug: "digi-labs-vs-elevenlabs-free-human-tts-alternative-2026",
    title: "Why 100,000+ Creators Are Ditching ElevenLabs in 2026: The Free Human TTS Studio with Zero Character Taxes (Strictly No Resale)",
    desc: "A deep architectural and pricing comparison between ElevenLabs cloud quotas and DIGI LABS sovereign local desktop speech synthesis.",
  },
  {
    slug: "turn-any-video-link-into-ai-prompts-and-courses-digi-labs",
    title: "The Viral Video-to-Prompt Hack: How to Steal Any Video's Exact AI Prompts, Lighting & Turn It Into a Course in 60 Seconds",
    desc: "The complete tutorial on reverse-engineering visual style, director cues, camera movement, and lesson notes from any web video.",
  },
  {
    slug: "gemini-voice-tts-free-local-desktop-setup-guide",
    title: "The 9-Key Secret: How to Run Gemini 2.5 Flash Emotional Voice on Desktop for $0 with Zero Rate Limits (Free Setup Guide)",
    desc: "Step-by-step setup guide for running emotional expressive human TTS locally on Windows with zero monthly character fees.",
  },
  {
    slug: "convert-youtube-transcripts-into-viral-threads-and-articles",
    title: "The 60-Second Cashflow Machine: How Creators Turn 10-Minute YouTube Videos into 5 Viral Revenue Streams for $0",
    desc: "How content creators and agencies repurpose long-form multimedia into multi-channel written revenue engines in 60 seconds.",
  },
  {
    slug: "zero-cost-ai-media-production-studio-stack-2026",
    title: "How to Build a $0 Production Studio and Save $3,743/Year: The Open-Source Trifecta (DIGI LABS + ArtCraft + DIGI BIZ OS)",
    desc: "How independent founders and creative agencies build full production studios without paying SaaS tolls or subscriptions.",
  },
];

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
  const [modalOpen, setModalOpen] = useState(false);
  const [activeDownloadUrl, setActiveDownloadUrl] = useState(DOWNLOAD_URL);
  const [activeDownloadLabel, setActiveDownloadLabel] = useState("DIGI LABS Setup (.exe 253MB)");

  const openSubscribeModal = (url: string, label: string) => {
    setActiveDownloadUrl(url);
    setActiveDownloadLabel(label);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SubscribeToDownloadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        downloadUrl={activeDownloadUrl}
        downloadLabel={activeDownloadLabel}
        channelUrl="https://www.youtube.com/@Digiformationltd"
        channelName="Digiformation Ltd Official"
      />
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
                <button
                  type="button"
                  onClick={() => openSubscribeModal(DOWNLOAD_URL, "DIGI LABS Windows Setup (.exe 253MB)")}
                >
                  <CyanButton icon={<Download size={16} />}>
                    Download Windows Setup (.exe 253MB)
                  </CyanButton>
                </button>
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

            <div className="w-full max-w-lg lg:w-auto">
              <div className="relative overflow-hidden rounded-3xl border border-pink-500/30 bg-black/60 shadow-[0_0_50px_rgba(236,72,153,0.25)] backdrop-blur-xl">
                <img
                  src={digiLabsBanner}
                  alt="DIGI LABS vs ElevenLabs - Sovereign Open Source Voice Studio"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute top-3 right-3 rounded-full border border-emerald-500/40 bg-slate-950/90 px-3 py-1 font-mono text-xs font-bold text-emerald-400 shadow-lg">
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

        {/* ── 5 IN-DEPTH STRATEGY GUIDES (BLOGS) ─────────────────── */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <EyebrowLabel text="Knowledge Base &amp; Tutorials" color="#EC4899" />
              <h2 className="mt-1 font-display text-[26px] font-bold text-white md:text-[34px]">
                5 In-Depth Guides on DIGI LABS &amp; Voice Synthesis
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-[12.5px] text-pink-400 hover:underline"
            >
              <span>Explore All Articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {RELATED_BLOGS.map((blog) => (
              <Link
                key={blog.slug}
                to={`/blog/${blog.slug}` as any}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#090514] p-5 transition hover:border-pink-500/40 hover:bg-[#120826]"
              >
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-pink-400">
                    <BookOpen size={13} />
                    <span>In-Depth Production Guide</span>
                  </div>
                  <h3 className="mt-3 font-display text-[15.5px] font-bold leading-snug text-white group-hover:text-pink-300 transition">
                    {blog.title}
                  </h3>
                  <p className="mt-2 font-body text-[13px] leading-[1.65] text-zinc-400">
                    {blog.desc}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 font-mono text-[11.5px] font-semibold text-pink-400 group-hover:translate-x-1 transition">
                  <span>Read Article</span>
                  <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── COMPARISON MATRIX ────────────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceValueComparisonChart toolId="digi-labs" />
        </div>

        {/* ── TECHNICAL SPECIFICATIONS ─────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceTechSpecs
            toolName={toolData.shortName}
            requirements={toolData.requirements}
            privacy={toolData.privacy}
          />
        </div>

        {/* ── TRUST & PROVENANCE ───────────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceSubpageTrustSection tool={toolData} />
        </div>

        {/* ── FAQ ─────────────────────────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceSubpageFaq toolName={toolData.shortName} faqs={toolData.faqs} />
        </div>

        {/* ── DIGI BIZ OS BRIDGE ──────────────────────────────────── */}
        <div className="mt-16">
          <OpenSourceDigiBizBridge
            headline={toolData.bridge.headline}
            description={toolData.bridge.description}
            highlights={toolData.bridge.highlights}
          />
        </div>

        {/* ── BOTTOM ACTION & ABOUT DIRECTORY (MATCHES DIGI LEAD HUNTER) ── */}
        <div className="mt-20 py-14 md:py-20 border-t border-white/10 text-center">
          <div className="mx-auto max-w-[880px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-1.5 font-mono text-[12px] font-bold uppercase tracking-wider text-purple-300">
              <Github size={15} />
              <span>Official DIGIFORMATION LTD GitHub Release</span>
            </div>

            <h2 className="mt-5 font-display text-[28px] font-extrabold tracking-[-0.03em] text-[var(--text-primary)] md:text-[42px]">
              Ready to Replace ElevenLabs with Sovereign Free Voice?
            </h2>

            <p className="mt-4 font-body text-[15px] leading-[1.8] text-[var(--text-secondary)] md:text-[17px]">
              DIGI LABS is 100% free and open-source for your personal and agency systems. Download the standalone Windows installer (.exe) or clone the repository directly from GitHub. Resale and paid cloud re-hosting are strictly prohibited.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-[540px] mx-auto">
              <button
                type="button"
                onClick={() => openSubscribeModal(DOWNLOAD_URL, "DIGI LABS Setup (.exe 253MB)")}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-purple-400 bg-purple-500 px-7 py-3.5 sm:py-4 font-mono text-[14px] sm:text-[15px] font-bold text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:bg-purple-400 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] cursor-pointer"
              >
                <Download size={18} className="shrink-0" />
                <span>Download Windows Setup (.exe 253MB)</span>
              </button>

              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 sm:py-4 font-mono text-[13px] font-semibold text-white transition hover:border-purple-400 hover:bg-white/10"
              >
                <Github size={17} />
                <span>GitHub</span>
                <ExternalLink size={13} className="opacity-70" />
              </a>
            </div>

            {/* Official Support & Corporate Credentials */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-400">
              <a
                href="https://wa.me/923164467464"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition"
              >
                <Phone size={13} className="text-emerald-400" />
                <span>WhatsApp: +92 316 4467464</span>
              </a>
              <a
                href="mailto:info@digiformation.co.uk"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition"
              >
                <Mail size={13} className="text-cyan-400" />
                <span>Email: info@digiformation.co.uk</span>
              </a>
              <a
                href="https://www.digiformation.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition"
              >
                <Globe size={13} className="text-purple-400" />
                <span>DIGIFORMATION LTD (UK # 16994903)</span>
              </a>
            </div>

            <div className="mt-8">
              <Link
                to="/open-source"
                className="font-body text-[14px] text-purple-400 hover:underline"
              >
                ← Back to Open-Source Software Hub
              </Link>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
