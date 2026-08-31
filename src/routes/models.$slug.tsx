import { createFileRoute, notFound } from "@tanstack/react-router";
import ModelLanding from "@/components/seo/ModelLanding";
import { MODELS_BY_SLUG } from "@/content/models-data";
import { buildMeta, breadcrumbLd, faqLd, softwareLd } from "@/lib/seo";

export const Route = createFileRoute("/models/$slug")({
  beforeLoad: ({ params }) => {
    if (!MODELS_BY_SLUG[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const mod = MODELS_BY_SLUG[params.slug];
    if (!mod) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const path = `/models/${mod.slug}`;
    const { meta, links } = buildMeta({
      path,
      title: mod.metaTitle,
      description: mod.metaDescription,
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
              { name: "Models", path: "/models" },
              { name: mod.name, path },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(softwareLd(mod.name, mod.metaDescription, path)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqLd(mod.faq)),
        },
      ],
    };
  },
  component: ModelPageRoute,
});

function ModelPageRoute() {
  const { slug } = Route.useParams();
  const mod = MODELS_BY_SLUG[slug];
  if (!mod) return null;
  return <ModelLanding model={mod} />;
}
