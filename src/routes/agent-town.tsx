import { createFileRoute } from "@tanstack/react-router";
import AgentTownPage from "@/pages/AgentTownPage";

export const Route = createFileRoute("/agent-town")({
  head: () => ({
    meta: [
      { title: "Agent Town — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "A live multi-agent workspace where specialised AI agents collaborate on your desktop tasks.",
      },
      { property: "og:title", content: "Agent Town — DIGI BIZ OS" },
      {
        property: "og:description",
        content: "A live multi-agent workspace for autonomous desktop work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AgentTownPage,
});

