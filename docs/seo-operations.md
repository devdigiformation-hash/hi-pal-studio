# DIGI BIZ OS — SEO Operations & Continuous Monitoring Runbook

## Overview
This runbook establishes the recurring operational procedures, health checks, and monitoring standards for DIGI BIZ OS. It governs the production readiness of our Technical SEO, AEO/GEO Knowledge Layer, Open-Source Software Acquisition Funnel, and Conversion Architecture.

---

## 1. Automated Health Monitoring

We maintain a dedicated zero-dependency automated health monitor in `scripts/seo-ops-monitor.ts`.

### Running the Monitor
```bash
bun run seo:ops
```

### Full Multi-Stage Verification Pipeline
```bash
bun run seo:verify
```
Runs:
1. TypeScript strict compiler checks (`bunx tsc --noEmit`)
2. Maximum Indexability & Metadata Audit (`bun scripts/seo-audit.ts` - 150 canonical routes)
3. Operational Health & Funnel Monitor (`bun scripts/seo-ops-monitor.ts`)
4. Vite Production Build (`vite build`)

---

## 2. Issue Severity Hierarchy

| Level | Severity | Definition | Action Required |
| :--- | :--- | :--- | :--- |
| **P0** | **Critical** | Homepage/critical page down, missing robots/sitemap, broken canonical host, widespread 5xx. | Fix immediately; blocks deployment. |
| **P1** | **High** | Broken open-source download, orphaned open-source tool, missing JSON-LD schema on indexable page. | Fix within current sprint / prior to launch. |
| **P2** | **Medium** | Stale metadata length, single comparison link gap, unoptimized image aspect. | Address in regular maintenance backlog. |
| **P3** | **Informational** | Content freshness reminders, emerging topic candidates, long-tail opportunities. | Editorial backlog review. |

---

## 3. Recurring Operational Cadence

### Weekly Operations
- **Automated Check**: Run `bun run seo:ops`. Verify 0 P0/P1 issues.
- **Download Integrity**: Spot-check download links for verified tools (`kdenlive`, `pocketbase`, `jan-ai`, `upscayl`, `shotcut`, `audacity`, `opencut`, `seo-spider`, etc.).
- **Indexing Ping**: Run `bun run indexnow` upon publishing new blog articles or tool releases.

### Monthly Operations
- **Canonical & Sitemap Audit**: Validate that `public/sitemap.xml` matches the 150 canonical routes exactly.
- **Orphan Prevention Check**: Ensure any new blog post links to relevant open-source tools and vice versa.
- **AEO Question Review**: Test direct-answer blocks against newly emerging search questions.

### Quarterly Operations
- **Competitor Landscape**: Review alternative/comparison pages (`/compare/*`) to ensure pricing models and specs remain 100% accurate.
- **Entity Consistency**: Verify Digiformation Ltd company records, trademark notices, and GitHub repository links.

---

## 4. Operational Governance Rules
1. **Never Fabricate Metrics**: Never invent search volumes, keyword rankings, AI citation guarantees, or false user counts.
2. **Honest Installer Labeling**: Always clearly label whether a tool provides a direct offline setup or a developer source/bootstrap archive.
3. **Transparent Ownership**: Always make clear that open-source tools (Kdenlive, Jan AI, OpenHands, PocketBase, etc.) are independent open-source projects curated by DigiFormation Ltd, not developed or owned by us.
4. **Contextual Bridges**: Digi Biz OS bridges must only appear after the user's primary informational or technical question has been thoroughly answered.
