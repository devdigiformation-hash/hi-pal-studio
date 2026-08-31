---
name: schema-sitelinks-engine
description: >-
  Advanced Schema.org JSON-LD and Google Sitelinks Architect for Antigravity (derived from schema-org-jsonld-engine).
  Automates multi-tier entity graphs, SiteNavigationElement injection for 6-pack Google Sitelinks, SearchAction search box,
  SoftwareApplication cards, Organization knowledge graphs, and nested BreadcrumbList schemas.
---

# Google Sitelinks & Schema Engine

Enables Antigravity to structure web pages so Google's search algorithms generate rich snippet cards and expanded 6-pack Sitelinks.

## 1. Google Sitelinks 6-Pack Requirements
- **`SiteNavigationElement`:** Placed in the root layout or homepage schema declaring the 6 most valuable brand navigation endpoints (`Download`, `Pricing`, `Voice AI`, `Desktop OS`, `Open Source`, `Features`).
- **`WebSite` with `SearchAction`:** Declares the site search URL template so Google shows an integrated search box.
- **Hierarchical `BreadcrumbList`:** Present on 100% of internal pages so Google understands parent-child relationships.

## 2. JSON-LD Implementation Standard

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://digibizos.co.uk/#organization",
      "name": "DIGI BIZ OS",
      "url": "https://digibizos.co.uk",
      "logo": "https://digibizos.co.uk/logo-512.png"
    },
    {
      "@type": "WebSite",
      "@id": "https://digibizos.co.uk/#website",
      "name": "DIGI BIZ OS",
      "url": "https://digibizos.co.uk",
      "publisher": { "@id": "https://digibizos.co.uk/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://digibizos.co.uk/compare?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```
