---
name: seo-master-suite
description: >-
  World-Class Enterprise SEO Master Suite for Antigravity. Covers Google Sitelinks (6-Pack) architecture,
  multi-tier JSON-LD Schema.org generators (SiteNavigationElement, SoftwareApplication, Organization, BreadcrumbList),
  technical crawl audit rules, internal linking power matrices, canonical management, and programmatic indexing.
---

# Enterprise SEO Master Suite

This skill equips Antigravity with production-grade search engine optimization capabilities designed to achieve #1 Google rankings and trigger Google Rich Sitelinks snippets.

## 1. Google Sitelinks Architecture (The 6-Pack Snippet)

To make Google award expanded sitelinks (sub-pages displayed indented below the main search result):

1. **Root `SiteNavigationElement` JSON-LD Schema:**
   Every primary hub page must publish `SiteNavigationElement` declaring the top 6 core destination URLs with precise, intent-rich names.
2. **`BreadcrumbList` on 100% of Sub-Pages:**
   Every child route must have a `BreadcrumbList` linking position 1 (Home) to position 2 (Parent Hub) to position 3 (Current Page).
3. **Exact-Match Brand Anchor Text:**
   Navigation headers and footers must use exact semantic anchor text matching target titles (e.g. `Download DIGI BIZ OS`, `Lifetime Pricing`, `Voice AI Desktop`, `Open Source Suite`).
4. **Distinct Canonical URLs:**
   Every page must feature a strict `<link rel="canonical" href="https://..."/>` without URL fragmentation or trailing-slash discrepancies.
5. **Entity Graph Schema (`Organization` + `SoftwareApplication`):**
   Root and landing pages must declare company ownership (`Digiformation Ltd`), founder info, sameAs links, download links, and pricing.

## 2. Standard Schema.org JSON-LD Matrix

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://digibizos.com/#website",
      "url": "https://digibizos.com",
      "name": "DIGI BIZ OS",
      "description": "Voice-First AI Business Operating System for Windows 10 & 11",
      "publisher": { "@id": "https://digibizos.com/#organization" }
    },
    {
      "@type": "SiteNavigationElement",
      "@id": "https://digibizos.com/#navigation",
      "name": ["Download", "Pricing", "Voice AI", "Features", "Open Source Tools", "Desktop OS"],
      "url": [
        "https://digibizos.com/download",
        "https://digibizos.com/pricing",
        "https://digibizos.com/voice-ai",
        "https://digibizos.com/features",
        "https://digibizos.com/open-source",
        "https://digibizos.com/desktop-os"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "DIGI BIZ OS",
      "operatingSystem": "Windows 10, Windows 11",
      "applicationCategory": "BusinessApplication, ProductivityApplication",
      "offers": {
        "@type": "Offer",
        "price": "99",
        "priceCurrency": "GBP"
      }
    }
  ]
}
```

## 3. On-Page SEO Quality Standards
- **Single H1 per page** containing primary commercial intent keyword.
- **H2 sub-sections** answering top related search queries.
- **Rich Meta Titles:** `[Brand / Keyword] — [Primary Benefit] | DIGI BIZ OS`
- **Compelling Meta Descriptions (150-160 chars):** Clear CTA, benefits, and zero generic fluff.
- **Image SEO:** Explicit descriptive `alt`, lazy-loading, and width/height dimensions.
