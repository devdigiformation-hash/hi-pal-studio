import { createFileRoute } from "@tanstack/react-router";
import DocsPage from "@/pages/DocsPage";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Docs — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "Install guides, voice command reference, agent APIs and system requirements for DIGI BIZ OS.",
      },
      { property: "og:title", content: "Docs — DIGI BIZ OS" },
      {
        property: "og:description",
        content: "Guides, command reference and agent APIs for DIGI BIZ OS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DocsPage,
});

