import { createFileRoute } from "@tanstack/react-router";
import DesktopOSPage from "@/pages/DesktopOSPage";

export const Route = createFileRoute("/desktop-os")({
  head: () => ({
    meta: [
      { title: "Desktop OS — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "An agentic layer over your operating system: files, apps, windows and workflows driven autonomously.",
      },
      { property: "og:title", content: "Desktop OS — DIGI BIZ OS" },
      {
        property: "og:description",
        content: "An autonomous agentic layer over your operating system.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesktopOSPage,
});

