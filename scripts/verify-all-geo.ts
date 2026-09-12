import { SEO_PAGES } from "../src/content/seo-pages";
import { BLOG_POSTS } from "../src/content/blog-posts";
import { COMPARE_PAGES } from "../src/content/compare-pages";
import { MODULES_LIST } from "../src/content/modules-data";
import { MODELS_LIST } from "../src/content/models-data";
// @ts-ignore
import nitroHandler from "../.output/server/index.mjs";

const BASE_URL = "https://digibizos.co.uk";

// 1. Gather all 140 canonical paths
const paths: string[] = [
  "/",
  "/features",
  "/voice-ai",
  "/desktop-os",
  "/agents",
  "/integrations",
  "/pricing",
  "/download",
  "/compare",
  "/modules",
  "/models",
  "/blog",
  "/faq",
  "/about",
  "/contact",
  "/sitemap",
  "/terms",
  "/privacy",
  "/refund",
  "/delivery",
  "/open-source",
  "/open-source/openhands",
  "/open-source/openclaw",
  "/open-source/hermes-agent",
  "/open-source/jan-ai",
  "/open-source/anythingllm",
  "/open-source/pocketbase",
  "/open-source/upscayl",
  "/open-source/kdenlive",
  "/open-source/facefusion",
  "/open-source/deep-live-cam",
  "/open-source/shotcut",
  "/open-source/audacity",
  "/open-source/opencut",
  "/open-source/seo-spider",
  "/open-source/tuttle",
  ...SEO_PAGES.map((p) => p.path),
  ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
  ...COMPARE_PAGES.map((p) => `/compare/${p.slug}`),
  ...MODULES_LIST.map((m) => `/modules/${m.slug}`),
  ...MODELS_LIST.map((m) => `/models/${m.slug}`),
];

const uniquePaths = Array.from(new Set(paths));

console.log(`Auditing ${uniquePaths.length} unique canonical routes for 100% GEO Optimization...`);

async function audit() {
  let directAnswerCount = 0;
  let digiformationCount = 0;
  let schemaCount = 0;
  let errorCount = 0;
  const missingDirectAnswer: string[] = [];

  for (const p of uniquePaths) {
    const req = new Request(BASE_URL + p, {
      headers: { "user-agent": "GEO-Audit-Bot/1.0" },
    });
    const res = await nitroHandler.fetch(req, { ASSETS: null }, { waitUntil: () => {} });
    if (!res.ok) {
      console.error(`FAILED: ${p} returned ${res.status}`);
      errorCount++;
      continue;
    }
    const html = await res.text();

    const hasDirectAnswer =
      html.includes("Direct Answer") ||
      html.includes("Direct answer") ||
      html.includes("directAnswer") ||
      html.includes("Executive Summary") ||
      html.includes("Quick Answer") ||
      html.includes("Key Takeaway");

    if (hasDirectAnswer) {
      directAnswerCount++;
    } else {
      missingDirectAnswer.push(p);
    }

    if (html.includes("Digiformation") || html.includes("digiformation")) {
      digiformationCount++;
    }

    if (html.includes('application/ld+json')) {
      schemaCount++;
    }
  }

  console.log("=== GEO AUDIT RESULTS ===");
  console.log(`Total URLs Audited: ${uniquePaths.length}`);
  console.log(`Direct Answer / AEO Blocks: ${directAnswerCount}/${uniquePaths.length} (${Math.round((directAnswerCount / uniquePaths.length) * 100)}%)`);
  console.log(`Digiformation Entity Mentioned: ${digiformationCount}/${uniquePaths.length} (${Math.round((digiformationCount / uniquePaths.length) * 100)}%)`);
  console.log(`JSON-LD Schema Present: ${schemaCount}/${uniquePaths.length} (${Math.round((schemaCount / uniquePaths.length) * 100)}%)`);
  console.log(`HTTP Errors: ${errorCount}`);

  if (missingDirectAnswer.length > 0) {
    console.log("URLs missing Direct Answer blocks:", missingDirectAnswer);
  } else {
    console.log("PERFECT: 100% of all canonical routes have verified Direct Answer / GEO blocks!");
  }
}

audit().catch(console.error);
