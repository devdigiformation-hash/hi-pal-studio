import { SITE_URL } from "./seo";

export interface PageCheck {
  url: string;
  status_code: number | null;
  title: string | null;
  title_length: number;
  description: string | null;
  description_length: number;
  h1_count: number;
  canonical: string | null;
  has_og: boolean;
  has_jsonld: boolean;
  word_count: number;
  issues: string[];
  score: number;
}

const MAX_PAGES = 60;
const CONCURRENCY = 6;

function decode(input: string) {
  return input
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function firstMatch(html: string, re: RegExp) {
  const m = html.match(re);
  return m ? decode(m[1].trim()) : null;
}

export async function fetchSitemapUrls(baseUrl: string) {
  const res = await fetch(`${baseUrl}/sitemap.xml`, { headers: { "user-agent": "DigiBizOS-SEO-Monitor" } });
  if (!res.ok) return { ok: false, urls: [] as string[] };
  const xml = await res.text();
  const urls = Array.from(xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)).map((m) => decode(m[1]));
  return { ok: urls.length > 0, urls: Array.from(new Set(urls)) };
}

export async function checkRobots(baseUrl: string) {
  try {
    const res = await fetch(`${baseUrl}/robots.txt`);
    if (!res.ok) return false;
    const txt = await res.text();
    const blocksAll = /^\s*disallow:\s*\/\s*$/im.test(txt) && !/allow:/i.test(txt);
    return txt.length > 0 && !blocksAll;
  } catch {
    return false;
  }
}

export async function checkPage(url: string): Promise<PageCheck> {
  const issues: string[] = [];
  let status: number | null = null;
  let html = "";

  try {
    const res = await fetch(url, { headers: { "user-agent": "DigiBizOS-SEO-Monitor" } });
    status = res.status;
    html = await res.text();
  } catch {
    issues.push("Page could not be fetched");
  }

  const head = html.slice(0, 200000);
  const title = firstMatch(head, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = firstMatch(head, /<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["']/i);
  const canonical = firstMatch(head, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
  const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
  const hasOg = /<meta[^>]+property=["']og:title["']/i.test(head) && /<meta[^>]+property=["']og:description["']/i.test(head);
  const hasJsonLd = /application\/ld\+json/i.test(html);
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");
  const wordCount = text.split(/\s+/).filter((w) => w.length > 1).length;

  if (status === null) issues.push("No response");
  else if (status >= 500) issues.push(`Server error (${status})`);
  else if (status >= 400) issues.push(`Broken page (${status})`);

  if (!title) issues.push("Missing title");
  else if (title.length < 20) issues.push("Title too short (<20 chars)");
  else if (title.length > 60) issues.push("Title too long (>60 chars)");

  if (!description) issues.push("Missing meta description");
  else if (description.length < 70) issues.push("Description too short (<70 chars)");
  else if (description.length > 160) issues.push("Description too long (>160 chars)");

  if (h1Count === 0) issues.push("No H1 heading");
  else if (h1Count > 1) issues.push(`Multiple H1 headings (${h1Count})`);

  if (!canonical) issues.push("Missing canonical link");
  if (!hasOg) issues.push("Missing Open Graph tags");
  if (!hasJsonLd) issues.push("No structured data (JSON-LD)");
  if (wordCount < 250 && status === 200) issues.push("Thin content (<250 words)");

  const fatal = status === null || status >= 400;
  const score = fatal ? 0 : Math.max(0, 100 - issues.length * 12);

  return {
    url,
    status_code: status,
    title,
    title_length: title?.length ?? 0,
    description,
    description_length: description?.length ?? 0,
    h1_count: h1Count,
    canonical,
    has_og: hasOg,
    has_jsonld: hasJsonLd,
    word_count: wordCount,
    issues,
    score,
  };
}

export async function runCrawl(baseUrl = SITE_URL) {
  const [{ ok: sitemapOk, urls }, robotsOk] = await Promise.all([
    fetchSitemapUrls(baseUrl),
    checkRobots(baseUrl),
  ]);

  const targets = urls.slice(0, MAX_PAGES);
  const results: PageCheck[] = [];
  let cursor = 0;

  async function worker() {
    while (cursor < targets.length) {
      const index = cursor++;
      results.push(await checkPage(targets[index]));
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, targets.length) }, worker));

  const errorCount = results.filter((r) => r.status_code === null || r.status_code >= 400).length;
  const warnCount = results.filter((r) => r.issues.length > 0 && r.status_code !== null && r.status_code < 400).length;
  const okCount = results.filter((r) => r.issues.length === 0).length;
  const avgScore = results.length ? results.reduce((a, r) => a + r.score, 0) / results.length : 0;

  return {
    sitemapOk,
    robotsOk,
    sitemapUrlCount: urls.length,
    results,
    errorCount,
    warnCount,
    okCount,
    avgScore: Math.round(avgScore * 100) / 100,
  };
}
