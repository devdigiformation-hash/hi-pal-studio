import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import { BLOG_BY_SLUG } from "@/content/blog-posts";
import { buildMeta, breadcrumbLd, articleLd } from "@/lib/seo";

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
              { name: post.title, path },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            articleLd({ title: post.title, description: post.description, path, date: post.date }),
          ),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = BLOG_BY_SLUG[slug];
  if (!post) return null;

  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <article className="mx-auto max-w-[780px]">
          <EyebrowLabel text={post.cluster} color="var(--cyan)" />
          <h1 className="mt-5 font-display text-[30px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[var(--text-primary)] md:text-[46px]">
            {post.title}
          </h1>
          <p className="mt-4 font-body text-[13px] text-[var(--text-muted)]">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>{" "}
            · {post.readingTime}
          </p>
          <p className="mt-6 font-body text-[16px] leading-[1.85] text-[var(--text-secondary)]">
            {post.description}
          </p>

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
            </section>
          ))}

          <nav aria-label="Related pages" className="mt-14 flex flex-wrap gap-3 border-t border-[var(--border-subtle)] pt-8">
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
