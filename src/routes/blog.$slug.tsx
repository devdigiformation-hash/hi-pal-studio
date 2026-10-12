import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Key, Download, ExternalLink, CheckCircle2, ShieldCheck, Terminal } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import { BLOG_BY_SLUG } from "@/content/blog-posts";
import {
  buildMeta,
  breadcrumbLd,
  articleLd,
  faqLd,
  speakableLd,
  digiLabsSoftwareLd,
  howToLd,
} from "@/lib/seo";

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

  const isDigiLabsArticle =
    post.slug.includes("digi-labs") ||
    post.slug.includes("tts") ||
    post.slug.includes("gemini") ||
    post.slug.includes("audiobook") ||
    post.cluster === "Voice AI" ||
    post.cluster === "Speech AI" ||
    post.cluster === "Content Automation";

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

          {/* ── DIGI LABS FAST-ACTION CTA CARD ── */}
          {isDigiLabsArticle && (
            <div className="my-8 rounded-2xl border border-purple-500/30 bg-purple-950/25 p-5 sm:p-6 backdrop-blur-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-amber-300">
                    SUPER SIMPLE SETUP • 100% FREE
                  </span>
                  <h3 className="mt-1 font-display text-base sm:text-lg font-bold text-white">
                    DIGI LABS: Free Voice &amp; Media Workstation
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-300 font-body">
                    Unlimited emotional TTS (Gemini 2.5 Flash), audiobook narrator (Edge-TTS), and Video-to-Prompt AI.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-amber-400 bg-amber-400/20 px-3.5 py-2 font-mono text-xs font-bold text-amber-300 hover:bg-amber-400/30 transition shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                  >
                    <Key size={13} />
                    <span>Get Free API Key</span>
                    <ExternalLink size={11} className="opacity-70" />
                  </a>
                  <Link
                    to="/open-source/digi-labs"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-purple-400 bg-purple-500 px-4 py-2 font-mono text-xs font-bold text-white hover:bg-purple-400 transition shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  >
                    <Download size={13} />
                    <span>Download Setup (.exe 253MB)</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

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

          {/* Editorial & Publisher Authority Signature (GEO Entity Grounding) */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
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
            {post.links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] px-4 py-2 font-body text-[13.5px] text-[var(--text-secondary)] transition-colors hover:border-[var(--cyan)] hover:text-[var(--text-primary)]"
              >
                {l.label} <ArrowRight size={13} />
              </Link>
            ))}
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
