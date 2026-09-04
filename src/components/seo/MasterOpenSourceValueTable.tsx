import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Download,
  ExternalLink,
  HelpCircle,
  Layers,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Zap,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";
import { OPEN_SOURCE_COMPARISONS } from "@/content/open-source-comparison-data";

const TOOLS_SUMMARY = [
  {
    id: "openhands",
    name: "OpenHands AI Coder",
    commercial: "Devin AI ($6,000/yr)",
    marketCost: "$6,000/yr",
    annualSavings: "$6,000/yr",
    category: "Autonomous Coding",
    to: "/open-source/openhands",
  },
  {
    id: "openclaw",
    name: "OpenClaw AI Crawler",
    commercial: "Apify / BrightData ($1,200/yr)",
    marketCost: "$1,200/yr",
    annualSavings: "$1,200/yr",
    category: "Autonomous Coding",
    to: "/open-source/openclaw",
  },
  {
    id: "hermes-agent",
    name: "Hermes Agent",
    commercial: "AutoGPT Enterprise ($600/yr)",
    marketCost: "$600/yr",
    annualSavings: "$600/yr",
    category: "Autonomous Coding",
    to: "/open-source/hermes-agent",
  },
  {
    id: "kdenlive",
    name: "Kdenlive Studio",
    commercial: "Adobe Premiere Pro ($287/yr)",
    marketCost: "$287/yr",
    annualSavings: "$287/yr",
    category: "Video & Media",
    to: "/open-source/kdenlive",
  },
  {
    id: "opencut",
    name: "OpenCut Video Studio",
    commercial: "CapCut Pro ($120/yr)",
    marketCost: "$120/yr",
    annualSavings: "$120/yr",
    category: "Video & Media",
    to: "/open-source/opencut",
  },
  {
    id: "shotcut",
    name: "Shotcut 4K Lab",
    commercial: "Filmora / Camtasia ($240/yr)",
    marketCost: "$240/yr",
    annualSavings: "$240/yr",
    category: "Video & Media",
    to: "/open-source/shotcut",
  },
  {
    id: "audacity",
    name: "Audacity Multi-Track",
    commercial: "Adobe Audition ($287/yr)",
    marketCost: "$287/yr",
    annualSavings: "$287/yr",
    category: "Audio & Voice",
    to: "/open-source/audacity",
  },
  {
    id: "facefusion",
    name: "FaceFusion Neural",
    commercial: "HeyGen / DeepBrain ($348/yr)",
    marketCost: "$348/yr",
    annualSavings: "$348/yr",
    category: "AI Media",
    to: "/open-source/facefusion",
  },
  {
    id: "deep-live-cam",
    name: "Deep-Live-Cam Realtime",
    commercial: "ManyCam / Live3D ($190/yr)",
    marketCost: "$190/yr",
    annualSavings: "$190/yr",
    category: "AI Media",
    to: "/open-source/deep-live-cam",
  },
  {
    id: "jan-ai",
    name: "Jan AI Desktop",
    commercial: "ChatGPT Team / Claude Pro ($300/yr)",
    marketCost: "$300/yr",
    annualSavings: "$300/yr",
    category: "Local LLM",
    to: "/open-source/jan-ai",
  },
  {
    id: "anythingllm",
    name: "AnythingLLM Document RAG",
    commercial: "Chatbase / CustomGPT ($400/yr)",
    marketCost: "$400/yr",
    annualSavings: "$400/yr",
    category: "Local LLM",
    to: "/open-source/anythingllm",
  },
  {
    id: "upscayl",
    name: "Upscayl AI Super-Res",
    commercial: "Topaz Gigapixel AI ($199/yr)",
    marketCost: "$199/yr",
    annualSavings: "$199/yr",
    category: "AI Media",
    to: "/open-source/upscayl",
  },
  {
    id: "pocketbase",
    name: "PocketBase Backend",
    commercial: "Supabase / Firebase Pro ($300/yr)",
    marketCost: "$300/yr",
    annualSavings: "$300/yr",
    category: "Database & Backend",
    to: "/open-source/pocketbase",
  },
  {
    id: "seo-spider",
    name: "Open SEO Spider",
    commercial: "Screaming Frog SEO ($259/yr)",
    marketCost: "$259/yr",
    annualSavings: "$259/yr",
    category: "SEO & Web Tools",
    to: "/open-source/seo-spider",
  },
  {
    id: "tuttle",
    name: "Tuttle Productivity Engine",
    commercial: "Toggl Track / Hubstaff ($180/yr)",
    marketCost: "$180/yr",
    annualSavings: "$180/yr",
    category: "Productivity",
    to: "/open-source/tuttle",
  },
];

export default function MasterOpenSourceValueTable() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = ["All", "Autonomous Coding", "Video & Media", "Local LLM", "AI Media", "Database & Backend", "SEO & Web Tools"];

  const filtered = TOOLS_SUMMARY.filter((t) => {
    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.commercial.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCat === "All" || t.category === selectedCat;
    return matchSearch && matchCat;
  });

  return (
    <div id="market-savings" className="space-y-8">
      {/* GLOWING HEADER */}
      <div className="rounded-2xl border border-[rgba(47,224,200,0.3)] bg-gradient-to-br from-[#2FE0C8]/10 via-black/50 to-[#8B5CF6]/10 p-6 md:p-8 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <ActivePulse size={7} />
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cyan)]">
                Transparent Software Valuation
              </span>
            </div>
            <h3 className="mt-2 font-display text-[26px] font-extrabold text-[var(--text-primary)] md:text-[34px]">
              $14,800+ Commercial SaaS Subscriptions.{" "}
              <span className="text-[#3DDC84]">Replaced Free.</span>
            </h3>
            <p className="mt-2 max-w-[650px] font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">
              We do not charge you for open-source software. We show you the exact pathway to run them
              completely free on your machine, avoid recurring cloud locks, and orchestrate them through DIGI BIZ OS.
            </p>
          </div>

          <div className="shrink-0 rounded-2xl border border-[#3DDC84]/30 bg-[#3DDC84]/10 p-5 text-center">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#3DDC84]">
              Combined Annual Savings
            </span>
            <p className="mt-1 font-display text-[32px] font-extrabold text-[#3DDC84]">
              $14,800+ <span className="text-[14px] font-normal text-white/60">/ yr</span>
            </p>
            <span className="mt-1 block font-mono text-[11px] text-[var(--text-muted)]">
              100% Permissive Open Source
            </span>
          </div>
        </div>
      </div>

      {/* SEARCH AND FILTER BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className="rounded-lg border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition"
              style={{
                borderColor: selectedCat === cat ? "var(--cyan)" : "rgba(255,255,255,0.08)",
                background: selectedCat === cat ? "rgba(47,224,200,0.15)" : "rgba(255,255,255,0.02)",
                color: selectedCat === cat ? "#FFFFFF" : "var(--text-muted)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search size={14} className="absolute left-3 top-3 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Search software or alternative..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2 pl-9 pr-4 font-body text-[13px] text-white placeholder-[var(--text-muted)] focus:border-[var(--cyan)] focus:outline-none"
          />
        </div>
      </div>

      {/* MASTER COMPARISON TABLE */}
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
        <table className="w-full text-left text-[13.5px]">
          <thead>
            <tr className="border-b border-white/10 bg-white/[0.03] font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
              <th className="py-4 pl-6 pr-4">Open Source Software</th>
              <th className="px-4 py-4">Commercial Tool Replaced</th>
              <th className="px-4 py-4 text-right">Market Annual Cost</th>
              <th className="px-4 py-4 text-right">Open Source Cost</th>
              <th className="px-4 py-4 text-right text-[#3DDC84]">Your Annual Savings</th>
              <th className="py-4 pl-4 pr-6 text-right">Free Pathway & Guide</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-body">
            {filtered.map((item) => (
              <tr
                key={item.id}
                className="group transition-colors hover:bg-white/[0.02]"
              >
                <td className="py-4 pl-6 pr-4">
                  <div className="font-display font-bold text-[var(--text-primary)] group-hover:text-[var(--cyan)]">
                    {item.name}
                  </div>
                  <span className="font-mono text-[10.5px] text-[var(--text-muted)]">
                    {item.category}
                  </span>
                </td>
                <td className="px-4 py-4 text-[var(--text-secondary)]">
                  {item.commercial}
                </td>
                <td className="px-4 py-4 text-right font-mono text-red-400/90 line-through">
                  {item.marketCost}
                </td>
                <td className="px-4 py-4 text-right font-mono font-bold text-[#2FE0C8]">
                  $0 (Free Forever)
                </td>
                <td className="px-4 py-4 text-right font-mono font-bold text-[#3DDC84]">
                  +{item.annualSavings}
                </td>
                <td className="py-4 pl-4 pr-6 text-right">
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--cyan-border)] bg-[rgba(47,224,200,0.08)] px-3 py-1.5 font-display text-[12px] font-semibold text-[var(--cyan)] transition hover:bg-[rgba(47,224,200,0.2)]"
                  >
                    <span>View Pathway</span>
                    <ArrowRight size={13} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* VALUE SUMMARY NOTICE */}
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 font-body text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
        <div className="flex items-center gap-2 font-display text-[14px] font-bold text-[var(--text-primary)]">
          <ShieldCheck size={16} className="text-[var(--cyan)]" />
          <span>Why is this software free and how does DIGI BIZ OS connect them?</span>
        </div>
        <p className="mt-2 text-[var(--text-secondary)]">
          Every tool above is governed by open licenses (MIT, Apache 2.0, or GPL). We curate official Windows-compatible binaries, verify their SHA checksums, provide simple step-by-step local launch pathways ("راستہ"), and pre-wire them into DIGI BIZ OS so you can command them effortlessly using natural speech or autonomous workflows.
        </p>
      </div>
    </div>
  );
}
