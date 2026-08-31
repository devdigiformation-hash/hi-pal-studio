---
name: gsc-fast-indexing
description: >-
  Google Search Console Fast Indexing and Automated Ping Suite for Antigravity (derived from gsc-fast-indexing-automation).
  Specializes in XML Sitemap prioritization, Googlebot crawl ping signals, indexation speed optimization,
  and search engine recrawl acceleration.
---

# Google Search Console Fast Indexing Suite

Equips Antigravity with mechanisms to trigger rapid search engine discovery, crawling, and indexation of new or updated pages.

## 1. Dynamic Sitemap Prioritization Rules
- Root URL (`/`): `<priority>1.0</priority>`, `<changefreq>weekly</changefreq>`
- Core Conversion URLs (`/download`, `/pricing`): `<priority>0.9</priority>`, `<changefreq>monthly</changefreq>`
- Tool & Feature URLs (`/open-source/*`, `/voice-ai`, `/desktop-os`): `<priority>0.7 - 0.8</priority>`
- Legal URLs (`/terms`, `/privacy`): `<priority>0.2</priority>`, `<changefreq>yearly</changefreq>`

## 2. Fast Crawl Signals
- Maintain clean `robots.txt` allowing full indexing: `User-agent: *`, `Allow: /`, `Sitemap: https://digibizos.co.uk/sitemap.xml`.
- Ensure server returns instant 200 OK with compression (Gzip / Brotli) and valid HTTP caching headers.
