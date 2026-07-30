import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Docs — Digi Biz OS" },
      {
        name: "description",
        content:
          "Install guides, voice command reference, agent APIs and system requirements for DigiBiz Voice.",
      },
      { property: "og:title", content: "Docs — Digi Biz OS" },
      {
        property: "og:description",
        content: "Guides, command reference and agent APIs for DigiBiz Voice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DocsPage,
});

function DocsPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      {/* SEGMENT 3 builds this */}
    </main>
  );
}