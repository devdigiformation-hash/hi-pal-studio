import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BLOG_POSTS } from "@/content/blog-posts";

const BASE_URL = "https://hi-pal-studio.lovable.app";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const items = [...BLOG_POSTS]
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((p) =>
            [
              `    <item>`,
              `      <title>${esc(p.title)}</title>`,
              `      <link>${BASE_URL}/blog/${p.slug}</link>`,
              `      <guid isPermaLink="true">${BASE_URL}/blog/${p.slug}</guid>`,
              `      <description>${esc(p.description)}</description>`,
              `      <category>${esc(p.cluster)}</category>`,
              `      <pubDate>${new Date(`${p.date}T09:00:00Z`).toUTCString()}</pubDate>`,
              `    </item>`,
            ].join("\n"),
          );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
          `  <channel>`,
          `    <title>DIGI BIZ OS Blog</title>`,
          `    <link>${BASE_URL}/blog</link>`,
          `    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
          `    <description>Guides on JARVIS-style AI assistants, AI desktop agents, voice control and business automation.</description>`,
          `    <language>en-GB</language>`,
          ...items,
          `  </channel>`,
          `</rss>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
