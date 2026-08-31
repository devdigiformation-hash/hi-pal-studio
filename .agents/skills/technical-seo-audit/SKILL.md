---
name: technical-seo-audit
description: >-
  Enterprise Technical SEO Audit Suite for AI Agents (derived from claude-seo and awesome-seo-tools).
  Automates crawlability audits, Core Web Vitals optimization, heading hierarchy validation (H1-H3),
  canonical tag enforcement, OpenGraph and Twitter card generation, and zero-defect page hygiene.
---

# Technical SEO Audit Suite

Equips Antigravity with complete technical crawl audit capabilities to guarantee search engines can index and rank every route without rendering errors.

## 1. Technical Audit Checklist
- **Single H1 Rule:** Every indexed URL must contain exactly one `<h1>` containing the target primary commercial keyword.
- **Hierarchical Heading Structure:** `H1` -> `H2` -> `H3` without skipping heading levels.
- **Canonical URLs:** Strict self-referential `<link rel="canonical" href="https://..."/>` without URL fragments (`#`) or query params.
- **Meta Robots Directives:** Ensure indexable pages specify `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`.
- **Title Tag Length & Density:** 50–60 characters, brand suffix ` | DIGI BIZ OS`, primary keyword in the first 35 characters.
- **Meta Description:** 140–160 characters with clear value proposition and conversion action.

## 2. Core Web Vitals Standards
- **LCP (Largest Contentful Paint):** Under 2.0 seconds. Preload critical hero assets and avoid render-blocking CSS/JS.
- **CLS (Cumulative Layout Shift):** 0.00. Explicit `width` and `height` on all image containers and aspect-ratio wrappers.
- **INP (Interaction to Next Paint):** Under 150ms. Debounce input events and ensure fast client hydration.

## 3. Crawlability & HTTP Directives
- Ensure all internal links use SSR-rendered HTML `<a href="...">` rather than JavaScript-only `onClick` transitions to enable crawler discovery.
- Guarantee 0 broken redirect chains (301 -> 301) and eliminate all 404 links.
