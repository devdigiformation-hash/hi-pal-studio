import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Digi Biz OS" },
      {
        name: "description",
        content:
          "Simple plans for solo operators, teams and enterprises running the autonomous desktop AI OS.",
      },
      { property: "og:title", content: "Pricing — Digi Biz OS" },
      {
        property: "og:description",
        content: "Plans for solo operators, teams and enterprises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      {/* SEGMENT 3 builds this */}
    </main>
  );
}