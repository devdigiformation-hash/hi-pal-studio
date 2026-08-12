import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import { BLOG_POSTS } from "@/content/blog-posts";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

const TITLE = "Blog — AI Agents, Business Automation & JARVIS-Style AI | DIGI BIZ OS";
const DESC =
  "Practical guides on JARVIS-style AI assistants, AI business operating systems, agents, voice control, computer-use AI and coding agents.";

export const Route = createFileRoute("/blog/")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/blog", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
            ]),
          ),
        },
      ],
    };
  },
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <div className="mx-auto max-w-[900px] text-center">
          <EyebrowLabel text="Content Hub" color="var(--purple)" />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] md:text-[54px]">
            Guides to{" "}
            <GradientText from="#8B7CF6" to="#2FE0C8">
              AI That Does the Work.
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[720px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[17px]">
            Clear, practical writing on JARVIS-style assistants, AI business operating systems,
            agents, workflows, voice control and computer-use AI.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} to="/blog/$slug" params={{ slug: post.slug }} className="group block h-full">
              <GlassCard className="h-full p-6">
                <span className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--cyan)]">
                  {post.cluster}
                </span>
                <h2 className="mt-3 font-display text-[17px] font-bold leading-[1.35] text-[var(--text-primary)]">
                  {post.title}
                </h2>
                <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                  {post.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-display text-[12.5px] font-semibold text-[var(--cyan)]">
                  {post.readingTime} <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </GlassCard>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
