import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/desktop-os")({
  head: () => ({
    meta: [
      { title: "Desktop OS — Digi Biz OS" },
      {
        name: "description",
        content:
          "An agentic layer over your operating system: files, apps, windows and workflows driven autonomously.",
      },
      { property: "og:title", content: "Desktop OS — Digi Biz OS" },
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

function DesktopOSPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      {/* SEGMENT 3 builds this */}
    </main>
  );
}