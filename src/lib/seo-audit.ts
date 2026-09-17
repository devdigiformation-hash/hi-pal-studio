/**
 * seo-audit.ts — a dependency-free, regex-based analyzer for a single HTML page.
 *
 * It runs UNCHANGED in the browser (paste-HTML mode) and on the server (URL
 * mode via /api/seo-check), so there is exactly one source of truth for the
 * checks. No DOM APIs are used, so it is safe in a Node/Nitro handler.
 *
 * It only reports what is present in the HTML — it never invents scores or
 * "trending" claims. Every check has a plain fix.
 */

export type CheckStatus = "pass" | "warn" | "fail";
export type CheckGroup = "Meta" | "Structure" | "Schema" | "AEO / GEO" | "Social" | "Technical" | "Performance";

export interface SeoCheck {
  id: string;
  group: CheckGroup;
  label: string;
  status: CheckStatus;
  detail: string;
  fix?: string;
}

export interface SeoAuditReport {
  sourceUrl?: string;
  score: number; // 0-100 overall
  aeoScore: number; // 0-100 AEO/GEO readiness
  scoresByCategory: Record<string, number>; // per-group 0-100, transparent
  counts: { pass: number; warn: number; fail: number };
  title: string | null;
  metaDescription: string | null;
  canonical: string | null;
  h1Count: number;
  h2Count: number;
  jsonLdTypes: string[];
  jsonLdErrors: number;
  wordCount: number;
  questionHeadings: number;
  checks: SeoCheck[];
}

const firstMatch = (re: RegExp, s: string): string | null => {
  const m = re.exec(s);
  return m ? m[1] : null;
};

/** Extract a <meta> content by name/property, tolerating attribute order. */
function metaContent(html: string, key: string): string | null {
  const k = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const a = new RegExp(`<meta[^>]+(?:name|property)=["']${k}["'][^>]*\\bcontent=["']([^"']*)["']`, "i");
  const b = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*(?:name|property)=["']${k}["']`, "i");
  return firstMatch(a, html) ?? firstMatch(b, html);
}

const decode = (s: string) =>
  s
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ").trim();

const countMatches = (re: RegExp, s: string): number => (s.match(re) || []).length;

export function analyzeHtml(rawHtml: string, sourceUrl?: string): SeoAuditReport {
  const html = String(rawHtml || "");
  const checks: SeoCheck[] = [];
  const add = (c: SeoCheck) => checks.push(c);

  // ── Meta ──────────────────────────────────────────────────────────────────
  const titleRaw = firstMatch(/<title[^>]*>([\s\S]*?)<\/title>/i, html);
  const title = titleRaw != null ? decode(titleRaw) : null;
  if (!title) add({ id: "title", group: "Meta", label: "Title tag", status: "fail", detail: "No <title> found.", fix: "Add a unique <title> of about 50–60 characters that leads with the primary keyword." });
  else {
    const len = title.length;
    const status: CheckStatus = len >= 30 && len <= 65 ? "pass" : "warn";
    add({ id: "title", group: "Meta", label: "Title tag", status, detail: `“${title}” (${len} chars).`, fix: status === "pass" ? undefined : "Aim for 30–65 characters so it is not truncated in results or AI citations." });
  }

  const metaDescription = (() => { const d = metaContent(html, "description"); return d != null ? decode(d) : null; })();
  if (!metaDescription) add({ id: "description", group: "Meta", label: "Meta description", status: "warn", detail: "No meta description found.", fix: "Add a 120–160 character description that answers the query directly — AI engines often quote it." });
  else {
    const len = metaDescription.length;
    const status: CheckStatus = len >= 80 && len <= 170 ? "pass" : "warn";
    add({ id: "description", group: "Meta", label: "Meta description", status, detail: `${len} chars.`, fix: status === "pass" ? undefined : "Aim for 120–160 characters with a direct, quotable answer." });
  }

  // ── Technical ───────────────────────────────────────────────────────────────
  const canonical = metaContent(html, "canonical") ?? firstMatch(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i, html) ?? firstMatch(/<link[^>]+href=["']([^"']*)["'][^>]*rel=["']canonical["']/i, html);
  add(canonical
    ? { id: "canonical", group: "Technical", label: "Canonical URL", status: "pass", detail: canonical }
    : { id: "canonical", group: "Technical", label: "Canonical URL", status: "warn", detail: "No canonical link.", fix: "Add <link rel=\"canonical\"> to prevent duplicate-URL dilution." });

  const robots = metaContent(html, "robots");
  const noindex = robots ? /noindex/i.test(robots) : false;
  add(noindex
    ? { id: "robots", group: "Technical", label: "Robots meta", status: "fail", detail: `robots = “${robots}” — this page is set to noindex.`, fix: "Remove noindex if you want this page in search and AI answers." }
    : { id: "robots", group: "Technical", label: "Robots meta", status: "pass", detail: robots ? `robots = “${robots}”` : "Indexable (no blocking robots meta)." });

  const viewport = metaContent(html, "viewport");
  add(viewport
    ? { id: "viewport", group: "Technical", label: "Mobile viewport", status: "pass", detail: "Responsive viewport is set." }
    : { id: "viewport", group: "Technical", label: "Mobile viewport", status: "warn", detail: "No viewport meta.", fix: "Add <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">." });

  const lang = firstMatch(/<html[^>]*\blang=["']([^"']+)["']/i, html);
  add(lang
    ? { id: "lang", group: "Technical", label: "Language attribute", status: "pass", detail: `lang = “${lang}”` }
    : { id: "lang", group: "Technical", label: "Language attribute", status: "warn", detail: "No <html lang> attribute.", fix: "Set <html lang=\"en\"> (or your locale) to help search and AI engines." });

  // ── Structure ────────────────────────────────────────────────────────────────
  const h1Count = countMatches(/<h1[\s>]/gi, html);
  add({
    id: "h1", group: "Structure", label: "H1 heading",
    status: h1Count === 1 ? "pass" : "warn",
    detail: h1Count === 0 ? "No H1 found." : `${h1Count} H1 heading(s).`,
    fix: h1Count === 1 ? undefined : "Use exactly one clear H1 that states the page topic.",
  });
  const h2Count = countMatches(/<h2[\s>]/gi, html);
  add({
    id: "h2", group: "Structure", label: "Section headings (H2)",
    status: h2Count >= 2 ? "pass" : "warn",
    detail: `${h2Count} H2 heading(s).`,
    fix: h2Count >= 2 ? undefined : "Break content into H2 sections so engines can extract each answer.",
  });

  const bodyText = decode(html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " "));
  const wordCount = bodyText ? bodyText.split(/\s+/).filter(Boolean).length : 0;
  add({
    id: "words", group: "Structure", label: "Content depth",
    status: wordCount >= 300 ? "pass" : "warn",
    detail: `${wordCount} words of visible text.`,
    fix: wordCount >= 300 ? undefined : "Thin pages are rarely cited — add genuine, first-party detail.",
  });

  const imgTotal = countMatches(/<img\b/gi, html);
  const imgNoAlt = countMatches(/<img\b(?:(?!\balt=)[^>])*>/gi, html);
  if (imgTotal > 0) add({
    id: "alt", group: "Structure", label: "Image alt text",
    status: imgNoAlt === 0 ? "pass" : "warn",
    detail: `${imgNoAlt} of ${imgTotal} <img> tags have no alt attribute.`,
    fix: imgNoAlt === 0 ? undefined : "Add descriptive alt text to every meaningful image.",
  });

  // ── Social ───────────────────────────────────────────────────────────────────
  const og = ["og:title", "og:description", "og:image"].filter((k) => metaContent(html, k));
  add({
    id: "og", group: "Social", label: "Open Graph tags",
    status: og.length === 3 ? "pass" : og.length ? "warn" : "warn",
    detail: og.length ? `Found: ${og.join(", ")}.` : "No Open Graph tags.",
    fix: og.length === 3 ? undefined : "Add og:title, og:description and og:image for rich sharing previews.",
  });
  const twitter = metaContent(html, "twitter:card");
  add({
    id: "twitter", group: "Social", label: "Twitter/X card",
    status: twitter ? "pass" : "warn",
    detail: twitter ? `twitter:card = “${twitter}”` : "No twitter:card tag.",
    fix: twitter ? undefined : "Add <meta name=\"twitter:card\" content=\"summary_large_image\">.",
  });

  // ── Schema (JSON-LD) ─────────────────────────────────────────────────────────
  const jsonLdTypes: string[] = [];
  let jsonLdErrors = 0;
  const ldBlocks = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];
  for (const block of ldBlocks) {
    const inner = block.replace(/^<script[^>]*>/i, "").replace(/<\/script>$/i, "").trim();
    try {
      const parsed = JSON.parse(inner);
      const collect = (o: any) => {
        if (!o || typeof o !== "object") return;
        if (Array.isArray(o)) return o.forEach(collect);
        if (o["@graph"]) collect(o["@graph"]);
        const t = o["@type"];
        if (typeof t === "string") jsonLdTypes.push(t);
        else if (Array.isArray(t)) t.forEach((x) => typeof x === "string" && jsonLdTypes.push(x));
      };
      collect(parsed);
    } catch {
      jsonLdErrors++;
    }
  }
  const uniqTypes = [...new Set(jsonLdTypes)];
  if (!ldBlocks.length) add({ id: "jsonld", group: "Schema", label: "Structured data (JSON-LD)", status: "fail", detail: "No JSON-LD found.", fix: "Add JSON-LD (Article, FAQPage, BreadcrumbList, Organization or SoftwareApplication) so engines read the meaning, not just the words." });
  else add({
    id: "jsonld", group: "Schema", label: "Structured data (JSON-LD)",
    status: jsonLdErrors ? "warn" : "pass",
    detail: `${ldBlocks.length} block(s); types: ${uniqTypes.join(", ") || "none detected"}${jsonLdErrors ? `; ${jsonLdErrors} block(s) failed to parse` : ""}.`,
    fix: jsonLdErrors ? "Fix the invalid JSON-LD block(s) — invalid schema is ignored by engines." : undefined,
  });

  const hasBreadcrumb = uniqTypes.some((t) => /BreadcrumbList/i.test(t));
  add({
    id: "breadcrumb", group: "Schema", label: "BreadcrumbList schema",
    status: hasBreadcrumb ? "pass" : "warn",
    detail: hasBreadcrumb ? "Present." : "No BreadcrumbList schema.",
    fix: hasBreadcrumb ? undefined : "Add BreadcrumbList so engines show and understand the page hierarchy.",
  });

  // ── AEO / GEO ────────────────────────────────────────────────────────────────
  const headingTexts = (html.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi) || []).map((h) => decode(h.replace(/<[^>]+>/g, " ")));
  const questionHeadings = headingTexts.filter((t) => t.trim().endsWith("?")).length;
  add({
    id: "questions", group: "AEO / GEO", label: "Question-style headings",
    status: questionHeadings >= 2 ? "pass" : questionHeadings === 1 ? "warn" : "warn",
    detail: `${questionHeadings} heading(s) phrased as a question.`,
    fix: questionHeadings >= 2 ? undefined : "Use headings that mirror real questions, then answer each directly beneath — this is how AI engines lift answers.",
  });

  const hasFaqSchema = uniqTypes.some((t) => /FAQPage|QAPage/i.test(t));
  add({
    id: "faq", group: "AEO / GEO", label: "FAQ schema",
    status: hasFaqSchema ? "pass" : "warn",
    detail: hasFaqSchema ? "FAQPage/QAPage present." : "No FAQ schema.",
    fix: hasFaqSchema ? undefined : "Add an FAQ section with FAQPage schema — a strong signal for AI answers and voice results.",
  });

  const hasArticleish = uniqTypes.some((t) => /Article|BlogPosting|NewsArticle|HowTo|WebPage/i.test(t));
  add({
    id: "entity", group: "AEO / GEO", label: "Entity/answer schema",
    status: hasArticleish ? "pass" : "warn",
    detail: hasArticleish ? `Found: ${uniqTypes.filter((t) => /Article|BlogPosting|NewsArticle|HowTo|WebPage/i.test(t)).join(", ")}.` : "No Article/HowTo/WebPage schema.",
    fix: hasArticleish ? undefined : "Add Article or HowTo schema with author, publisher and dateModified so engines trust and attribute the page.",
  });

  // Direct-answer heuristic: first substantial paragraph should be concise.
  const firstPara = decode((firstMatch(/<p\b[^>]*>([\s\S]*?)<\/p>/i, html) || ""));
  const firstWords = firstPara ? firstPara.split(/\s+/).filter(Boolean).length : 0;
  add({
    id: "answer", group: "AEO / GEO", label: "Direct answer up top",
    status: firstWords > 0 && firstWords <= 60 ? "pass" : "warn",
    detail: firstWords ? `First paragraph is ${firstWords} words.` : "No opening paragraph detected.",
    fix: firstWords > 0 && firstWords <= 60 ? undefined : "Open with a concise, self-contained answer (roughly 2 sentences) before any preamble.",
  });

  // ── Internationalization ─────────────────────────────────────────────────────
  const hreflangs = (html.match(/<link[^>]+rel=["']alternate["'][^>]+hreflang=["']([^"']+)["']/gi) || []).length;
  add({
    id: "hreflang", group: "Technical", label: "Hreflang (international)",
    status: hreflangs > 0 ? "pass" : "warn",
    detail: hreflangs > 0 ? `${hreflangs} hreflang alternate(s).` : "No hreflang tags.",
    fix: hreflangs > 0 ? undefined : "If you target more than one language or region, add rel=\"alternate\" hreflang tags — otherwise this can be ignored.",
  });

  // ── AEO structure: lists & tables are answer-friendly ─────────────────────────
  const lists = countMatches(/<(ul|ol)[\s>]/gi, html);
  const tables = countMatches(/<table[\s>]/gi, html);
  add({
    id: "lists", group: "AEO / GEO", label: "Lists & tables",
    status: lists + tables >= 1 ? "pass" : "warn",
    detail: `${lists} list(s), ${tables} table(s).`,
    fix: lists + tables >= 1 ? undefined : "Use bullet lists and comparison tables — AI engines lift these directly into answers.",
  });

  // ── Performance signals (from HTML only — not a full Lighthouse run) ───────────
  const bytes = html.length;
  add({
    id: "html-weight", group: "Performance", label: "HTML document weight",
    status: bytes <= 300000 ? "pass" : bytes <= 500000 ? "warn" : "fail",
    detail: `${(bytes / 1024).toFixed(0)} KB of HTML.`,
    fix: bytes <= 300000 ? undefined : "Large HTML slows first render — trim inline data and defer non-critical markup.",
  });
  const scripts = countMatches(/<script\b(?![^>]*\btype=["']application\/ld\+json["'])/gi, html);
  add({
    id: "scripts", group: "Performance", label: "Script tags",
    status: scripts <= 15 ? "pass" : scripts <= 30 ? "warn" : "fail",
    detail: `${scripts} <script> tag(s).`,
    fix: scripts <= 15 ? undefined : "Many scripts hurt Core Web Vitals — bundle, defer or remove unused JavaScript. Run a full Lighthouse test for exact figures.",
  });
  const stylesheets = countMatches(/<link[^>]+rel=["']stylesheet["']/gi, html);
  add({
    id: "css", group: "Performance", label: "Stylesheet links",
    status: stylesheets <= 6 ? "pass" : "warn",
    detail: `${stylesheets} stylesheet link(s).`,
    fix: stylesheets <= 6 ? undefined : "Consolidate CSS and inline critical styles to cut render-blocking requests.",
  });

  // ── Score ─────────────────────────────────────────────────────────────────
  const counts = {
    pass: checks.filter((c) => c.status === "pass").length,
    warn: checks.filter((c) => c.status === "warn").length,
    fail: checks.filter((c) => c.status === "fail").length,
  };
  const val = (s: CheckStatus) => (s === "pass" ? 1 : s === "warn" ? 0.5 : 0);
  const score = Math.round((checks.reduce((a, c) => a + val(c.status), 0) / Math.max(1, checks.length)) * 100);
  const aeo = checks.filter((c) => c.group === "AEO / GEO");
  const aeoScore = Math.round((aeo.reduce((a, c) => a + val(c.status), 0) / Math.max(1, aeo.length)) * 100);

  const groups: CheckGroup[] = ["Meta", "AEO / GEO", "Schema", "Structure", "Social", "Technical", "Performance"];
  const scoresByCategory: Record<string, number> = {};
  for (const g of groups) {
    const gc = checks.filter((c) => c.group === g);
    if (gc.length) scoresByCategory[g] = Math.round((gc.reduce((a, c) => a + val(c.status), 0) / gc.length) * 100);
  }

  return {
    sourceUrl,
    score,
    aeoScore,
    scoresByCategory,
    counts,
    title,
    metaDescription,
    canonical,
    h1Count,
    h2Count,
    jsonLdTypes: uniqTypes,
    jsonLdErrors,
    wordCount,
    questionHeadings,
    checks,
  };
}
