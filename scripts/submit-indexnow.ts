import { SEO_PAGES } from "../src/content/seo-pages";
import { BLOG_POSTS } from "../src/content/blog-posts";
import { MODULES_LIST } from "../src/content/modules-data";
import { MODELS_LIST } from "../src/content/models-data";

const BASE_URL = "https://digibizos.co.uk";
const INDEXNOW_KEY = "c0378ea5553e414fa8d0429f64bf5f28";
const KEY_LOCATION = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

const STATIC_PATHS = [
  "/",
  "/features",
  "/voice-ai",
  "/desktop-os",
  "/agents",
  "/integrations",
  "/pricing",
  "/blog",
  "/download",
  "/open-source",
  "/open-source/openhands",
  "/open-source/openclaw",
  "/open-source/hermes-agent",
  "/open-source/jan-ai",
  "/open-source/anythingllm",
  "/open-source/tuttle",
  "/open-source/pocketbase",
  "/open-source/upscayl",
  "/open-source/kdenlive",
  "/open-source/facefusion",
  "/open-source/deep-live-cam",
  "/open-source/shotcut",
  "/open-source/audacity",
  "/open-source/opencut",
  "/open-source/seo-spider",
  "/about",
  "/contact",
  "/faq",
  "/sitemap",
  "/terms",
  "/privacy",
  "/refund",
  "/delivery",
  "/modules",
  "/models",
  "/compare",
];

export function getAllIndexableUrls(): string[] {
  const urls: string[] = [
    ...STATIC_PATHS.map((p) => `${BASE_URL}${p}`),
    ...MODULES_LIST.map((m) => `${BASE_URL}/modules/${m.slug}`),
    ...MODELS_LIST.map((m) => `${BASE_URL}/models/${m.slug}`),
    ...SEO_PAGES.map((p) => `${BASE_URL}${p.path}`),
    ...BLOG_POSTS.map((b) => `${BASE_URL}/blog/${b.slug}`),
  ];
  return Array.from(new Set(urls));
}

async function submitIndexNow() {
  const urlList = getAllIndexableUrls();
  console.log(`[IndexNow] Prepared ${urlList.length} canonical URLs for submission.`);

  const payload = {
    host: "digibizos.co.uk",
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  const endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`[IndexNow] Submitting to ${endpoint}...`);
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
      console.log(`[IndexNow] ${endpoint} Response Status: ${res.status} (${res.statusText})`);
    } catch (err: any) {
      console.error(`[IndexNow] Failed to submit to ${endpoint}:`, err.message);
    }
  }
}

if (import.meta.main) {
  submitIndexNow();
}
