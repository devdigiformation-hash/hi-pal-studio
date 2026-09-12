export const SITE_URL = "https://digibizos.co.uk";
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

export function breadcrumbLd(trail: { name: string; path?: string; url?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: t.url ? (t.url.startsWith("http") ? t.url : abs(t.url)) : abs(t.path || "/"),
    })),
  };
}

export function siteNavigationLd(items: [string, string][]) {
  return items.map(([name, path]) => ({
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name,
    url: abs(path),
    isPartOf: { "@id": `${SITE_URL}/#website` },
  }));
}

export function softwareLd(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows 10 (64-bit), Windows 11 (64-bit)",
    url: abs(url),
    description,
    image: abs("/logo-512.png"),
    softwareVersion: "1.0",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    brand: {
      "@type": "Brand",
      name: BRAND,
      url: SITE_URL,
    },
    offers: {
      "@type": "Offer",
      price: "50",
      priceCurrency: "GBP",
      url: abs("/pricing"),
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
      seller: { "@id": `${SITE_URL}/#organization` },
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

export function articleLd(opts: {
  title: string;
  description: string;
  path: string;
  date: string;
  cluster?: string;
}) {
  const iso = /T/.test(opts.date) ? opts.date : `${opts.date}T09:00:00+00:00`;
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: opts.title,
    description: opts.description,
    datePublished: iso,
    dateModified: iso,
    image: abs("/logo-512.png"),
    url: abs(opts.path),
    inLanguage: "en-GB",
    mainEntityOfPage: abs(opts.path),
    author: {
      "@type": "Organization",
      name: "DIGI BIZ OS Research Team",
      url: abs("/about"),
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Digiformation Ltd",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: abs("/logo-512.png"), width: 512, height: 512 },
    },
    copyrightHolder: { "@id": `${SITE_URL}/#organization` },
    ...(opts.cluster ? { articleSection: opts.cluster } : {}),
  };
}

export function itemListLd(
  items: { name: string; url: string; description?: string }[],
  name = "Curated Open-Source Desktop Software Library",
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: abs(item.url),
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}
