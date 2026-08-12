import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SEO_PAGES } from "@/content/seo-pages";
import { BLOG_POSTS } from "@/content/blog-posts";
import { COMPARE_PAGES } from "@/content/compare-pages";

const BASE_URL = "https://digibizos.co.uk";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const STATIC: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/features", changefreq: "weekly", priority: "0.9" },
  { path: "/voice-ai", changefreq: "monthly", priority: "0.8" },
  { path: "/desktop-os", changefreq: "monthly", priority: "0.8" },
  { path: "/agents", changefreq: "monthly", priority: "0.8" },
  { path: "/integrations", changefreq: "monthly", priority: "0.7" },
  { path: "/pricing", changefreq: "monthly", priority: "0.9" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/compare", changefreq: "monthly", priority: "0.8" },
  { path: "/download", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "yearly", priority: "0.5" },
  { path: "/contact", changefreq: "yearly", priority: "0.6" },
  { path: "/faq", changefreq: "monthly", priority: "0.7" },
  { path: "/terms", changefreq: "yearly", priority: "0.2" },
  { path: "/privacy", changefreq: "yearly", priority: "0.2" },
  { path: "/refund", changefreq: "yearly", priority: "0.2" },
  { path: "/delivery", changefreq: "yearly", priority: "0.2" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          ...STATIC,
          ...SEO_PAGES.map((p) => ({
            path: p.path,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...COMPARE_PAGES.map((p) => ({
            path: `/compare/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...BLOG_POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
