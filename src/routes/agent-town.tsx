import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/agent-town")({
  head: () => ({
    meta: [
      { title: "Agent Town — Digi Biz OS" },
      {
        name: "description",
        content:
          "A live multi-agent workspace where specialised AI agents collaborate on your desktop tasks.",
      },
      { property: "og:title", content: "Agent Town — Digi Biz OS" },
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

function AgentTownPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      {/* SEGMENT 3 builds this */}
    </main>
  );
}