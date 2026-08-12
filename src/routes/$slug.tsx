import { createFileRoute, notFound } from "@tanstack/react-router";
import SeoLanding from "@/components/seo/SeoLanding";
import { SEO_PAGE_BY_PATH } from "@/content/seo-pages";
import { buildMeta, breadcrumbLd, faqLd, softwareLd } from "@/lib/seo";

export const Route = createFileRoute("/$slug")({
  beforeLoad: ({ params }) => {
    if (!SEO_PAGE_BY_PATH[`/${params.slug}`]) throw notFound();
  },
  head: ({ params }) => {
    const page = SEO_PAGE_BY_PATH[`/${params.slug}`];
    if (!page) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const { meta, links } = buildMeta({
      path: page.path,
      title: page.metaTitle,
      description: page.metaDescription,
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
              { name: page.eyebrow, path: page.path },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(softwareLd("DIGI BIZ OS", page.metaDescription, page.path)),
        },
        { type: "application/ld+json", children: JSON.stringify(faqLd(page.faq)) },
      ],
    };
  },
  component: IntentPage,
});

function IntentPage() {
  const { slug } = Route.useParams();
  const page = SEO_PAGE_BY_PATH[`/${slug}`];
  if (!page) return null;
  return <SeoLanding page={page} />;
}
