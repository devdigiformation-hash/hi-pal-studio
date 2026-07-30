import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/voice-ai")({
  head: () => ({
    meta: [
      { title: "Voice AI — Digi Biz OS" },
      {
        name: "description",
        content:
          "Real-time Gemini Live voice control for your desktop: sub-second intent, native command execution.",
      },
      { property: "og:title", content: "Voice AI — Digi Biz OS" },
      {
        property: "og:description",
        content: "Real-time voice control for your entire desktop workspace.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VoiceAIPage,
});

function VoiceAIPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      {/* SEGMENT 3 builds this */}
    </main>
  );
}