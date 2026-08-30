import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, ShieldCheck, Globe, Bot, Users, PiggyBank, Key } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import TickList from "@/components/inner/TickList";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";
import screenshot from "@/assets/anythingllm-screenshot.jpg.asset.json";

const TITLE = "AnythingLLM — Free Local Document AI for Windows";
const DESC =
  "Download AnythingLLM free: chat with PDFs, Word docs, CSVs and websites 100% privately on your Windows PC. Local vector database, multi-LLM support, no subscription.";

const DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1QNyBB7YIE8zdCHKPY4baDcbC_DvrHfJt";
const WHATSAPP = "https://wa.me/923164467464";

const FEATURES = [
  {
    icon: FileText,
    color: "var(--cyan)",
    title: "Universal Document Chat (PDF, DOCX, CSV, Notion)",
    body: "Drag and drop complex PDFs, financial statements, contracts, or books and ask questions with exact page citations.",
  },
  {
    icon: ShieldCheck,
    color: "var(--purple)",
    title: "Zero Data Leaks (Air-Gapped & Offline)",
    body: "Built-in vector database (LanceDB) stores your embeddings locally on your PC. No third-party tracking or indexing.",
  },
  {
    icon: Globe,
    color: "var(--amber)",
    title: "Web Scraping & Multi-Source Knowledge",
    body: "Import live web pages, documentation URLs, YouTube video transcripts, or entire GitHub repositories into your AI knowledge base.",
  },
  {
    icon: Bot,
    color: "#7DD3FC",
    title: "Multi-LLM Flexible Engine",
    body: "Connects out-of-the-box to local models (Ollama, LM Studio, Jan, LocalAI) or cloud providers (OpenAI, Anthropic, Groq, DeepSeek).",
  },
  {
    icon: Users,
    color: "#F472B6",
    title: "Unlimited Custom Workspaces & Multi-User",
    body: "Create isolated workspaces for Legal, Accounting, Marketing, or Development with custom system prompts and permissions.",
  },
  {
    icon: PiggyBank,
    color: "#3DDC84",
    title: "Save $300+/Year on ChatPDF & Humata",
    body: "Replaces expensive SaaS document chat tools (ChatPDF, AskYourPDF, Humata AI) with lifetime free unlimited access.",
  },
];

const COMPARISON = [
  {
    label: "Pricing",
    anythingllm: "$0 — Free forever",
    chatpdf: "$180 / year",
    humata: "$240 / year",
  },
  {
    label: "Data privacy",
    anythingllm: "100% local / zero cloud storage",
    chatpdf: "Uploads PDFs to third-party servers",
    humata: "Uploads PDFs to third-party servers",
  },
  {
    label: "Supported formats",
    anythingllm: "PDF, DOCX, TXT, CSV, Notion, Web, YouTube",
    chatpdf: "Limited to simple PDFs",
    humata: "Limited to simple PDFs",
  },
  {
    label: "Vector database",
    anythingllm: "Built-in local LanceDB / Chroma",
    chatpdf: "Hosted cloud vector DB",
    humata: "Hosted cloud vector DB",
  },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit)",
  "RAM: 8 GB minimum (16 GB recommended for large PDF collections)",
  "Storage: 2 GB free disk space",
];

export const Route = createFileRoute("/open-source/anythingllm")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/anythingllm",
      title: TITLE,
      description: DESC,
      image: abs(screenshot.url),
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
              { name: "AnythingLLM", path: "/open-source/anythingllm" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "AnythingLLM Desktop",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Windows 10, Windows 11 (64-bit)",
            description: DESC,
            url: abs("/open-source/anythingllm"),
            image: abs(screenshot.url),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: AnythingLlmPage,
});

function AnythingLlmPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "AnythingLLM", path: "/open-source/anythingllm" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel text="100% Free & Open-Source Document AI Suite" color="var(--amber)" />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              AnythingLLM Desktop
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[48px]">
              Chat with Any Document, PDF & Knowledge Base —{" "}
              <GradientText from="#2FE0C8" to="#8B7CF6">
                100% Privately on Your PC
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The ultimate all-in-one AI workspace. Turn PDFs, Word docs, spreadsheets, websites,
              and YouTube videos into an intelligent, searchable chatbot without sending your
              sensitive data to the cloud.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<WindowsIcon />}>
                  Download AnythingLLM
                </CyanButton>
              </a>
              <a href="https://opencode.ai/auth" target="_blank" rel="noopener noreferrer">
                <CyanButton size="lg" icon={<Key size={18} />} tone="139,92,246">
                  Get Free API Key
                </CyanButton>
              </a>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Version: Latest x64 • 396 MB • Windows 10 / 11 (64-bit) • 100% Verified •
              AnythingLLM-Setup.exe
            </p>
          </div>

          <GlassCard glowColor="var(--cyan)" className="p-3">
            <img
              src={screenshot.url}
              alt="AnythingLLM desktop app running on Windows showing the chat workspace with document upload and thread sidebar"
              loading="lazy"
              className="w-full rounded-[10px]"
            />
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
        <div className="mx-auto max-w-[1080px]">
          <h2 className="font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
            AnythingLLM vs paid cloud document AI
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left font-body text-[14px]">
              <thead>
                <tr className="text-[var(--text-primary)]">
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    &nbsp;
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em] text-[var(--cyan)]">
                    AnythingLLM
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    ChatPDF Plus
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 font-display text-[13px] uppercase tracking-[0.12em]">
                    Humata AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label}>
                    <td className="border-b border-[var(--border-glass)] py-3 pr-4 text-[var(--text-primary)]">
                      {row.label}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 pr-4 text-[var(--cyan)]">
                      {row.anythingllm}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 pr-4 text-[var(--text-secondary)]">
                      {row.chatpdf}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 text-[var(--text-secondary)]">
                      {row.humata}
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
            Get AnythingLLM free, then automate everything with DIGI BIZ OS
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<WindowsIcon />}>
                Download AnythingLLM
              </CyanButton>
            </a>
            <a href="https://opencode.ai/auth" target="_blank" rel="noopener noreferrer">
              <CyanButton size="lg" icon={<Key size={18} />} tone="139,92,246">
                Get Free API Key
              </CyanButton>
            </a>
            <Link
              to="/open-source"
              className="font-body text-[14px] text-[var(--cyan)] hover:underline"
            >
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
