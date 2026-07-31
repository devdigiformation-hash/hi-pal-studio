import { createFileRoute } from "@tanstack/react-router";
import AgentsPage from "@/pages/AgentsPage";

export const Route = createFileRoute("/agents")({
  head: () => ({
    meta: [
      { title: "AI Agents — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "A live multi-agent workspace where specialised AI agents collaborate on your desktop tasks.",
      },
      { property: "og:title", content: "AI Agents — DIGI BIZ OS" },
      {
        property: "og:description",
        content: "A live multi-agent workspace for autonomous desktop work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgentsPage,
});
