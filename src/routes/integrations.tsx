import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — Digi Biz OS" },
      {
        name: "description",
        content:
          "Connect DIGI BIZ OS to the tools you already run: mail, calendars, browsers, IDEs and native apps.",
      },
      { property: "og:title", content: "Integrations — Digi Biz OS" },
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

function IntegrationsPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      {/* SEGMENT 3 builds this */}
    </main>
  );
}