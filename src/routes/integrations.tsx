import { createFileRoute } from "@tanstack/react-router";
import IntegrationsPage from "@/pages/IntegrationsPage";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "Connect DIGI BIZ OS to the tools you already run: mail, calendars, browsers, IDEs and native apps.",
      },
      { property: "og:title", content: "Integrations — DIGI BIZ OS" },
      {
        property: "og:description",
        content: "Connect DIGI BIZ OS to the tools your desktop already runs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IntegrationsPage,
});

