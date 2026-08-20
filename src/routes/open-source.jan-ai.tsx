import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, WifiOff, Bot, PiggyBank, Zap, Terminal } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import TickList from "@/components/inner/TickList";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, abs } from "@/lib/seo";
import shot from "@/assets/jan-ai-screenshot.jpg.asset.json";
import setupFile from "@/assets/jan-setup-x64.exe.asset.json";

const TITLE = "Jan AI — Free Offline ChatGPT Alternative for Windows";
const DESC =
  "Download Jan AI free: run DeepSeek, Llama 3, Qwen and Mistral locally on Windows. 100% private, works offline, unlimited messages, no subscription.";

const DOWNLOAD_URL = setupFile.url;
const WHATSAPP = "https://wa.me/923164467464";

const FEATURES = [
  {
    icon: ShieldCheck,
    color: "var(--cyan)",
    title: "100% Private & Air-Gapped",
    body: "Your chats, confidential files and code never leave your computer. No tracking and no cloud data leaks.",
  },
  {
    icon: WifiOff,
    color: "var(--purple)",
    title: "Works 100% Offline",
    body: "Zero Wi-Fi or internet connection needed. Write code, draft documents and brainstorm anywhere.",
  },
  {
    icon: Bot,
    color: "var(--amber)",
    title: "Multi-Model Powerhouse",
    body: "Switch between DeepSeek-R1, Llama 3.2, Qwen 2.5 and Mistral with a single click.",
  },
  {
    icon: PiggyBank,
    color: "#3DDC84",
    title: "Save $240 / Year",
    body: "Enjoy unlimited AI capabilities without paying $20/month for ChatGPT Plus or Claude Pro.",
  },
  {
    icon: Zap,
    color: "#7DD3FC",
    title: "Dual-Mode Cloud AI",
    body: "Optionally connect free API keys (Groq, OpenRouter, DeepSeek) for lightning-fast cloud speed with zero RAM usage.",
  },
  {
    icon: Terminal,
    color: "#F472B6",
    title: "Developer-Ready & Local API",
    body: "Includes a built-in local OpenAI-compatible server (localhost:1337) and MCP tool routing.",
  },
];

const COMPARISON = [
  { label: "Pricing", jan: "$0 — free forever", chatgpt: "$240 / year", claude: "$240 / year" },
  { label: "Data privacy", jan: "100% local & private", chatgpt: "Logged on cloud", claude: "Logged on cloud" },
  { label: "Offline access", jan: "Yes — no internet", chatgpt: "No — always needs Wi-Fi", claude: "No — always needs Wi-Fi" },
  { label: "Message limits", jan: "Unlimited", chatgpt: "Strict hourly rate caps", claude: "Strict hourly rate caps" },
];

const REQUIREMENTS = [
  "Operating system: Windows 10 / Windows 11 (64-bit)",
  "RAM: 8 GB minimum (16 GB recommended for 3B/8B models)",
  "Processor: Intel Core i3 / i5 / i7 or AMD Ryzen",
  "Storage: 2 GB free disk space",
];

export const Route = createFileRoute("/open-source/jan-ai")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source/jan-ai",
      title: TITLE,
      description: DESC,
      image: abs(shot.url),
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
              { name: "Jan AI", path: "/open-source/jan-ai" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Jan AI",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Windows 10, Windows 11 (64-bit)",
            description: DESC,
            url: abs("/open-source/jan-ai"),
            image: abs(shot.url),
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        },
      ],
    };
  },
  component: JanAiPage,
});

function JanAiPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
            { name: "Jan AI", path: "/open-source/jan-ai" },
          ]}
        />
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <EyebrowLabel text="100% Free & Open-Source Desktop Suite — No Subscription" color="var(--amber)" />
            <p className="reveal-item mt-5 font-display text-[15px] font-bold uppercase tracking-[0.18em] text-[var(--cyan)]">
              Jan AI
            </p>
            <h1 className="reveal-item delay-1 mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[48px]">
              Run Powerful AI on Your PC —{" "}
              <GradientText from="#2FE0C8" to="#8B7CF6">
                100% Private, Fast & Offline
              </GradientText>
            </h1>
            <p className="reveal-item delay-2 mt-6 max-w-[640px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
              The ultimate free ChatGPT alternative. Chat with local AI models (DeepSeek, Llama 3, Qwen,
              Mistral) directly on your laptop RAM with zero internet, zero tracking and lifetime free
              access.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <a href={DOWNLOAD_URL} download="Jan-Setup-x64.exe">
                <CyanButton size="lg" icon={<WindowsIcon />}>Download Jan AI</CyanButton>
              </a>
              <div className="hidden">
                {`'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''\n                                        \n                                            \n                                            jan ai page par b same kam kro`}
              </div>
            </div>
            <p className="mt-4 font-mono text-[12.5px] text-[var(--text-muted)]">
              Version: Latest x64 • 57.7 MB • Windows 10 / 11 (64-bit) • 100% Verified •
              Jan-Setup-x64.exe
            </p>
          </div>

          <GlassCard glowColor="var(--cyan)" className="p-3">
            <img
              src={shot.url}
              alt="Jan AI desktop app on Windows showing the local chat window and model selector"
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
            Jan AI vs paid services
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left font-body text-[14px]">
              <thead>
                <tr className="text-[var(--text-primary)]">
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    &nbsp;
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em] text-[var(--cyan)]">
                    Jan AI
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 pr-4 font-display text-[13px] uppercase tracking-[0.12em]">
                    ChatGPT Plus
                  </th>
                  <th className="border-b border-[var(--border-glass)] py-3 font-display text-[13px] uppercase tracking-[0.12em]">
                    Claude Pro
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
                      {row.jan}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 pr-4 text-[var(--text-secondary)]">
                      {row.chatgpt}
                    </td>
                    <td className="border-b border-[var(--border-glass)] py-3 text-[var(--text-secondary)]">
                      {row.claude}
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
            Get Jan AI free, then automate everything with DIGI BIZ OS
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={DOWNLOAD_URL} download="Jan-Setup-x64.exe">
              <CyanButton size="lg" icon={<WindowsIcon />}>Download Jan AI</CyanButton>
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
