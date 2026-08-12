export const SITE_URL = "https://hi-pal-studio.lovable.app";
export const BRAND = "DIGI BIZ OS";

export function abs(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export interface MetaInput {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  image?: string;
}

export function buildMeta({ path, title, description, type = "website", image }: MetaInput) {
  const url = abs(path);
  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: BRAND },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
  if (image) {
    meta.push({ property: "og:image", content: image });
    meta.push({ name: "twitter:image", content: image });
  }
  return { meta, links: [{ rel: "canonical", href: url }] };
}

export function breadcrumbLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

export function softwareLd(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows 10, Windows 11",
    url: abs(url),
    description,
    brand: { "@type": "Brand", name: BRAND },
    offers: {
      "@type": "Offer",
      price: "50",
      priceCurrency: "GBP",
      url: abs("/pricing"),
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function articleLd(opts: { title: string; description: string; path: string; date: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.date,
    dateModified: opts.date,
    mainEntityOfPage: abs(opts.path),
    author: { "@type": "Organization", name: BRAND, url: SITE_URL },
    publisher: { "@type": "Organization", name: BRAND, url: SITE_URL },
  };
}
