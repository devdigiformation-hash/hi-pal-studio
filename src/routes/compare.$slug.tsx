import { createFileRoute, notFound } from "@tanstack/react-router";
import CompareLanding from "@/components/seo/CompareLanding";
import { COMPARE_BY_SLUG } from "@/content/compare-pages";
import { buildMeta, breadcrumbLd, faqLd } from "@/lib/seo";

export const Route = createFileRoute("/compare/$slug")({
  beforeLoad: ({ params }) => {
    if (!COMPARE_BY_SLUG[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const page = COMPARE_BY_SLUG[params.slug];
    if (!page) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const path = `/compare/${page.slug}`;
    const { meta, links } = buildMeta({
      path,
      title: page.metaTitle,
      description: page.metaDescription,
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
              { name: "Comparisons", path: "/compare" },
              { name: `DIGI BIZ OS vs ${page.competitor}`, path },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqLd(page.faq)) },
      ],
    };
  },
  component: ComparePageRoute,
});

function ComparePageRoute() {
  const { slug } = Route.useParams();
  const page = COMPARE_BY_SLUG[slug];
  if (!page) return null;
  return <CompareLanding page={page} />;
}
