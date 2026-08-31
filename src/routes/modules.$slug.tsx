import { createFileRoute, notFound } from "@tanstack/react-router";
import ModuleLanding from "@/components/seo/ModuleLanding";
import { MODULES_BY_SLUG } from "@/content/modules-data";
import { buildMeta, breadcrumbLd, faqLd, softwareLd } from "@/lib/seo";

export const Route = createFileRoute("/modules/$slug")({
  beforeLoad: ({ params }) => {
    if (!MODULES_BY_SLUG[params.slug]) throw notFound();
  },
  head: ({ params }) => {
    const mod = MODULES_BY_SLUG[params.slug];
    if (!mod) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const path = `/modules/${mod.slug}`;
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
              { name: "Modules", path: "/modules" },
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
  component: ModulePageRoute,
});

function ModulePageRoute() {
  const { slug } = Route.useParams();
  const mod = MODULES_BY_SLUG[slug];
  if (!mod) return null;
  return <ModuleLanding module={mod} />;
}
