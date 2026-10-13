import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Key,
  Download,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Terminal,
  Zap,
  Layers,
  FileText,
  BadgeCheck,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import { BLOG_BY_SLUG, BlogPost } from "@/content/blog-posts";
import { OPEN_SOURCE_SUBPAGES } from "@/content/open-source-subpages";
import {
  buildMeta,
  breadcrumbLd,
  articleLd,
  faqLd,
  speakableLd,
  digiLabsSoftwareLd,
  howToLd,
} from "@/lib/seo";

interface ArticleCtaData {
  badge: string;
  headline: string;
  description: string;
  borderClass: string;
  bgClass: string;
  badgeClass: string;
  primaryButton: {
    label: string;
    to?: string;
    href?: string;
    icon: any;
    className: string;
  };
  secondaryButton?: {
    label: string;
    to?: string;
    href?: string;
    icon?: any;
    className?: string;
  };
  footerBadge?: string;
}

function getArticleCta(post: BlogPost): ArticleCtaData {
  const slug = post.slug.toLowerCase();
  const cluster = post.cluster.toLowerCase();
  const title = post.title.toLowerCase();

  // 1. GenOffice Articles
  if (
    slug.includes("genoffice") ||
    title.includes("genoffice") ||
    slug.includes("sheets-ai") ||
    slug.includes("pitch-deck-genoffice")
  ) {
    return {
      badge: "OPEN SOURCE AI OFFICE SUITE • 100% FREE SETUP",
      headline: "GenOffice: AI-Native Office Suite (.docx, .xlsx, .pptx, PDF)",
      description:
        "Replace Microsoft 365 ($99-$240/yr) & Copilot ($30/mo) for $0. Built-in AI edits Word files, writes live Excel formulas, and generates full pitch decks on your local PC.",
      borderClass: "border-blue-500/40",
      bgClass:
        "bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-cyan-950/40 shadow-[0_0_35px_rgba(59,130,246,0.15)]",
      badgeClass: "text-blue-300 border-blue-500/30 bg-blue-500/10",
      primaryButton: {
        label: "Download GenOffice Setup (.exe 156MB)",
        to: "/open-source/genoffice",
        icon: Download,
        className:
          "border-blue-400 bg-blue-500 hover:bg-blue-400 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]",
      },
      secondaryButton: {
        label: "Explore Open-Source Office",
        to: "/open-source/genoffice",
        icon: ExternalLink,
        className:
          "border-white/15 bg-white/[0.04] text-zinc-200 hover:text-white hover:bg-white/[0.08]",
      },
      footerBadge: "Native Windows 11 & 10 (x64) • Apache 2.0 • Zero Cloud Telemetry",
    };
  }

  // 2. DIGI LABS Articles
  if (
    slug.includes("digi-labs") ||
    slug.includes("tts") ||
    slug.includes("elevenlabs") ||
    slug.includes("voice") ||
    slug.includes("audiobook") ||
    slug.includes("transcript") ||
    slug.includes("gemini-voice") ||
    cluster.includes("voice") ||
    cluster.includes("speech")
  ) {
    return {
      badge: "OFFICIAL DIGIFORMATION SOFTWARE • 100% FREE WORKSTATION",
      headline: "DIGI LABS: Free Voice & Video-to-Prompt Studio",
      description:
        "Replace ElevenLabs ($264-$1,188/yr) and course transcription tools for $0. Unlimited Edge-TTS, emotional Gemini Studio Voice, and video prompt reverse-engineering.",
      borderClass: "border-purple-500/40",
      bgClass:
        "bg-gradient-to-r from-purple-950/40 via-slate-900/60 to-pink-950/40 shadow-[0_0_35px_rgba(168,85,247,0.15)]",
      badgeClass: "text-amber-300 border-amber-500/30 bg-amber-500/10",
      primaryButton: {
        label: "Download Setup (.exe 253MB)",
        to: "/open-source/digi-labs",
        icon: Download,
        className:
          "border-purple-400 bg-purple-500 hover:bg-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.35)]",
      },
      secondaryButton: {
        label: "Get Free Gemini API Key",
        href: "https://aistudio.google.com/app/apikey",
        icon: Key,
        className:
          "border-amber-400 bg-amber-400/20 text-amber-300 hover:bg-amber-400/30 shadow-[0_0_15px_rgba(245,158,11,0.2)]",
      },
      footerBadge: "Direct Windows Setup • Dual Voice Engines • Strict No-Resale License",
    };
  }

  // 3. DIGI LEAD HUNTER Articles
  if (
    slug.includes("lead-hunter") ||
    slug.includes("lead") ||
    slug.includes("apollo") ||
    slug.includes("b2b") ||
    slug.includes("scraper") ||
    cluster.includes("lead")
  ) {
    return {
      badge: "OFFICIAL DIGIFORMATION SOFTWARE • UNLIMITED B2B LEADS",
      headline: "DIGI LEAD HUNTER: Sovereign High-Intent Lead Scraper",
      description:
        "Stop paying Apollo & ZoomInfo hundreds of dollars monthly. Extract verified B2B leads, emails, and phone numbers natively with zero cloud proxy limits.",
      borderClass: "border-emerald-500/40",
      bgClass:
        "bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-cyan-950/40 shadow-[0_0_35px_rgba(16,185,129,0.15)]",
      badgeClass: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10",
      primaryButton: {
        label: "Get DIGI LEAD HUNTER Free",
        to: "/open-source/digi-lead-hunter",
        icon: Download,
        className:
          "border-emerald-400 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.35)]",
      },
      secondaryButton: {
        label: "Explore Lead Hunter Engine",
        to: "/open-source/digi-lead-hunter",
        icon: ExternalLink,
        className:
          "border-white/15 bg-white/[0.04] text-zinc-200 hover:text-white hover:bg-white/[0.08]",
      },
      footerBadge: "Native Windows Setup • Verified B2B Extraction • 100% Free for Your System",
    };
  }

  // 4. Other Specific Open Source Tools
  const osToolMatch = Object.keys(OPEN_SOURCE_SUBPAGES).find(
    (id) => slug.includes(id) && id !== "open-source",
  );
  if (osToolMatch && OPEN_SOURCE_SUBPAGES[osToolMatch]) {
    const tool = OPEN_SOURCE_SUBPAGES[osToolMatch];
    return {
      badge: `OPEN SOURCE • ${tool.license.toUpperCase()} • 100% FREE`,
      headline: `${tool.name}`,
      description: `${tool.tagline} Replaces ${tool.alternativeTo.join(", ")} for $0 perpetual cost with complete offline sovereignty.`,
      borderClass: "border-cyan-500/40",
      bgClass:
        "bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-purple-950/40 shadow-[0_0_35px_rgba(47,224,200,0.15)]",
      badgeClass: "text-cyan-300 border-cyan-500/30 bg-cyan-500/10",
      primaryButton: {
        label: `Download ${tool.shortName} (${tool.downloadTypeLabel})`,
        to: tool.route,
        icon: Download,
        className:
          "border-cyan-400 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold shadow-[0_0_20px_rgba(47,224,200,0.35)]",
      },
      secondaryButton: {
        label: "View All 15+ Free Tools",
        to: "/open-source",
        icon: ExternalLink,
        className:
          "border-white/15 bg-white/[0.04] text-zinc-200 hover:text-white hover:bg-white/[0.08]",
      },
      footerBadge: `Verified Open Source • ${tool.stars} • 100% Free Forever`,
    };
  }

  // 5. Default / DIGI BIZ OS Autonomous Workstation (for all other blogs)
  return {
    badge: "SOVEREIGN AI OPERATING SYSTEM • WINDOWS 10 & 11 NATIVE",
    headline: "DIGI BIZ OS: Sovereign Autonomous Desktop Workstation",
    description:
      "Replace 10+ expensive SaaS subscriptions ($250+/month) with 12 sovereign desktop modules, Whisper voice AI, offline CRM, and zero subscription fees forever.",
    borderClass: "border-cyan-500/40",
    bgClass:
      "bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-indigo-950/40 shadow-[0_0_35px_rgba(47,224,200,0.15)]",
    badgeClass: "text-cyan-300 border-cyan-500/30 bg-cyan-500/10",
    primaryButton: {
      label: "Download DIGI BIZ OS (x64 Setup)",
      to: "/download",
      icon: Download,
      className:
        "border-cyan-400 bg-[var(--cyan)] hover:brightness-110 text-slate-950 font-bold shadow-[0_0_25px_rgba(47,224,200,0.4)]",
    },
    secondaryButton: {
      label: "Get Lifetime License (£29 One-Time)",
      to: "/pricing",
      icon: Sparkles,
      className:
        "border-purple-400/50 bg-purple-500/20 text-purple-200 hover:bg-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.25)]",
    },
    footerBadge: "12 Native Modules • Whisper Voice AI • Lifetime Access (£29) • Zero Seat Fees",
  };
}

export const Route = createFileRoute("/blog/$slug")({
  beforeLoad: ({ params }) => {
    if (!BLOG_BY_SLUG[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const post = BLOG_BY_SLUG[params.slug];
    if (!post) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const path = `/blog/${post.slug}`;
    const { meta, links } = buildMeta({
      path,
      title: post.metaTitle,
      description: post.description,
      type: "article",
    });

    const isDigiLabsArticle =
      post.slug.includes("digi-labs") ||
      post.slug.includes("tts") ||
      post.slug.includes("gemini") ||
      post.slug.includes("audiobook") ||
      post.cluster === "Voice AI" ||
      post.cluster === "Speech AI" ||
      post.cluster === "Content Automation";

    const faqQuestions = post.body.filter((b) => b.heading.trim().endsWith("?"));
    const scripts: Array<{ type: string; children: string }> = [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          articleLd({
            title: post.title,
            description: post.description,
            path,
            date: post.date,
            cluster: post.cluster,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(speakableLd([".direct-answer", "h1", ".executive-summary"])),
      },
    ];

    if (isDigiLabsArticle) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(digiLabsSoftwareLd()),
      });

      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(
          howToLd({
            name: "How to Set Up DIGI LABS Free Voice & Media Workstation",
            description:
              "Complete 3-step setup guide: install the native Windows app, generate your free Gemini API key from Google AI Studio, and start producing voiceovers and AI video prompts.",
            steps: [
              {
                name: "Install DIGI LABS on Windows 10/11",
                text: "Download and run DIGI-LABS-Setup-1.0.0.exe on your Windows PC. No Python or developer setup required.",
                url: "/open-source/digi-labs",
              },
              {
                name: "Get Free Gemini API Key from Google AI Studio",
                text: "Visit Google AI Studio (aistudio.google.com/app/apikey), click Create API key in new project, and copy your key string. 100% free with no credit card required.",
                url: "https://aistudio.google.com/app/apikey",
              },
              {
                name: "Paste Key into DIGI LABS Settings & Start Using",
                text: "Launch DIGI LABS, open Settings, paste the key into the Gemini API Key field, click Save, and begin generating voiceovers, audiobooks, and video prompts immediately.",
                url: "/open-source/digi-labs",
              },
            ],
          }),
        ),
      });
    }

    if (faqQuestions.length > 0) {
      scripts.push({
        type: "application/ld+json",
        children: JSON.stringify(
          faqLd(
            faqQuestions.map((q) => ({
              q: q.heading,
              a: q.paragraphs.join(" "),
            })),
          ),
        ),
      });
    }

    return {
      meta,
      links,
      scripts,
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = BLOG_BY_SLUG[slug];
  if (!post) return null;

  const cta = getArticleCta(post);
  const PrimaryIcon = cta.primaryButton.icon;
  const SecondaryIcon = cta.secondaryButton?.icon;

  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <article className="mx-auto max-w-[780px]">
          <EyebrowLabel text={post.cluster} color="var(--cyan)" />
          <h1 className="mt-5 font-display text-[30px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 font-body text-[13px] text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5 font-medium text-[var(--text-secondary)]">
              By{" "}
              <Link
                to="/about"
                className="underline decoration-dotted transition-colors hover:text-[var(--cyan)]"
              >
                DIGI BIZ OS Research Team
              </Link>
            </span>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
            <span>•</span>
            <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-400">
              Verified Technical Analysis
            </span>
          </div>

          {/* ── AEO & AI SEARCH DIRECT ANSWER BOX ── */}
          <div
            className="direct-answer my-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 via-slate-900/40 to-purple-950/30 p-5 sm:p-6 backdrop-blur-md shadow-[0_0_30px_rgba(47,224,200,0.1)]"
            data-aeo-answer="true"
          >
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-cyan-300">
              <Sparkles size={14} className="text-cyan-400" />
              <span>Key Takeaways &amp; Direct Answer (AEO Summary)</span>
            </div>
            <p className="mt-2.5 text-[15px] font-medium leading-relaxed text-zinc-100 font-body">
              {post.description}
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] font-mono text-zinc-300 pt-3 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                <span>Publisher: DIGIFORMATION LTD (UK # 16994903)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                <span>License: Source-Available • 100% Sovereign</span>
              </div>
            </div>
          </div>

          {/* ── TOP FAST-ACTION CTA CARD (DYNAMIC PER ARTICLE TOPIC) ── */}
          <div
            className={`my-8 rounded-2xl border ${cta.borderClass} ${cta.bgClass} p-5 sm:p-6 backdrop-blur-md transition-all`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span
                  className={`inline-block font-mono text-[10.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${cta.badgeClass}`}
                >
                  {cta.badge}
                </span>
                <h3 className="mt-2 font-display text-base sm:text-lg font-bold text-white">
                  {cta.headline}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-300 font-body leading-relaxed max-w-[560px]">
                  {cta.description}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                {cta.secondaryButton &&
                  (cta.secondaryButton.to ? (
                    <Link
                      to={cta.secondaryButton.to}
                      className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 font-mono text-xs font-semibold transition ${cta.secondaryButton.className}`}
                    >
                      {SecondaryIcon && <SecondaryIcon size={13} />}
                      <span>{cta.secondaryButton.label}</span>
                    </Link>
                  ) : (
                    <a
                      href={cta.secondaryButton.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 font-mono text-xs font-semibold transition ${cta.secondaryButton.className}`}
                    >
                      {SecondaryIcon && <SecondaryIcon size={13} />}
                      <span>{cta.secondaryButton.label}</span>
                      <ExternalLink size={11} className="opacity-70" />
                    </a>
                  ))}

                {cta.primaryButton.to ? (
                  <Link
                    to={cta.primaryButton.to}
                    className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-mono text-xs font-bold transition ${cta.primaryButton.className}`}
                  >
                    <PrimaryIcon size={14} />
                    <span>{cta.primaryButton.label}</span>
                  </Link>
                ) : (
                  <a
                    href={cta.primaryButton.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-mono text-xs font-bold transition ${cta.primaryButton.className}`}
                  >
                    <PrimaryIcon size={14} />
                    <span>{cta.primaryButton.label}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {post.body.map((section) => (
            <section key={section.heading} className="mt-12">
              <h2 className="font-display text-[22px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[28px]">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="mt-4 font-body text-[15px] leading-[1.85] text-[var(--text-secondary)]"
                >
                  {p}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-5 list-disc space-y-2 pl-5">
                  {section.bullets.map((b) => (
                    <li
                      key={b}
                      className="font-body text-[14.5px] leading-[1.8] text-[var(--text-secondary)]"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.table ? (
                <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.02]">
                  <table className="w-full text-left font-body text-[14px]">
                    <thead className="border-b border-white/10 bg-white/[0.04] text-[12px] font-semibold uppercase tracking-wider text-[var(--cyan)]">
                      <tr>
                        {section.table.headers.map((h, idx) => (
                          <th key={idx} className="px-4 py-3 sm:px-5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-[var(--text-secondary)]">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3.5 sm:px-5">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </section>
          ))}

          {/* ── BOTTOM HIGH-CONVERTING CONVERSION CARD (ACCORDING TO SOFTWARE) ── */}
          <div
            className={`mt-14 rounded-3xl border ${cta.borderClass} ${cta.bgClass} p-7 sm:p-8 backdrop-blur-xl`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <span
                  className={`inline-block font-mono text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded ${cta.badgeClass}`}
                >
                  {cta.badge}
                </span>
                <h3 className="mt-3 font-display text-[22px] sm:text-[26px] font-extrabold text-white leading-tight">
                  {cta.headline}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-zinc-300 font-body max-w-[560px]">
                  {cta.description}
                </p>
                {cta.footerBadge && (
                  <p className="mt-3 font-mono text-[11.5px] text-zinc-400 flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-cyan-400" />
                    <span>{cta.footerBadge}</span>
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
                {cta.primaryButton.to ? (
                  <Link
                    to={cta.primaryButton.to}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 font-mono text-[13px] font-bold transition text-center ${cta.primaryButton.className}`}
                  >
                    <PrimaryIcon size={16} />
                    <span>{cta.primaryButton.label}</span>
                  </Link>
                ) : (
                  <a
                    href={cta.primaryButton.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 font-mono text-[13px] font-bold transition text-center ${cta.primaryButton.className}`}
                  >
                    <PrimaryIcon size={16} />
                    <span>{cta.primaryButton.label}</span>
                  </a>
                )}

                {cta.secondaryButton &&
                  (cta.secondaryButton.to ? (
                    <Link
                      to={cta.secondaryButton.to}
                      className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-mono text-[12.5px] font-medium transition text-center ${cta.secondaryButton.className}`}
                    >
                      {SecondaryIcon && <SecondaryIcon size={14} />}
                      <span>{cta.secondaryButton.label}</span>
                    </Link>
                  ) : (
                    <a
                      href={cta.secondaryButton.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 font-mono text-[12.5px] font-medium transition text-center ${cta.secondaryButton.className}`}
                    >
                      {SecondaryIcon && <SecondaryIcon size={14} />}
                      <span>{cta.secondaryButton.label}</span>
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  ))}
              </div>
            </div>
          </div>

          {/* Editorial & Publisher Authority Signature (GEO Entity Grounding) */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-white/5 pb-4 sm:flex-row sm:items-center">
              <div>
                <p className="font-display text-[15px] font-bold text-[var(--text-primary)]">
                  Published by DIGI BIZ OS Research
                </p>
                <p className="font-body text-[13px] text-[var(--text-secondary)]">
                  Digiformation Ltd • Covent Garden, London, WC2H 9JQ, UK
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/923164467464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-emerald-400 hover:bg-emerald-500/20 transition"
                >
                  WhatsApp: +92 316 4467464
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-1.5 font-body text-[12px] font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--cyan)] hover:text-white"
                >
                  About &amp; Standards
                </Link>
              </div>
            </div>
            <p className="mt-4 font-body text-[13.5px] leading-[1.75] text-[var(--text-secondary)]">
              This publication is maintained by Digiformation Ltd (Company # 16994903, England &amp; Wales). All technical architecture benchmarks, local AI speech synthesis tests, and software workflows are tested natively on Windows 10/11 with zero corporate sponsorship.
            </p>
          </div>

          <nav
            aria-label="Related pages"
            className="mt-14 flex flex-wrap gap-3 border-t border-[var(--border-subtle)] pt-8"
          >
            {post.links.map((l) =>
              l.to.startsWith("http") ? (
                <a
                  key={l.to}
                  href={l.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] px-4 py-2 font-body text-[13.5px] text-[var(--text-secondary)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--text-primary)]"
                >
                  {l.label} <ExternalLink size={12} className="opacity-70" />
                </a>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] px-4 py-2 font-body text-[13.5px] text-[var(--text-secondary)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--text-primary)]"
                >
                  {l.label} <ArrowRight size={13} />
                </Link>
              ),
            )}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] px-4 py-2 font-body text-[13.5px] text-[var(--text-secondary)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--text-primary)]"
            >
              All articles
            </Link>
          </nav>
        </article>
      </SectionWrapper>
    </main>
  );
}
