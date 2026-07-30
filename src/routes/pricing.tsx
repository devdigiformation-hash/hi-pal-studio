import { createFileRoute } from "@tanstack/react-router";
import PricingPage from "@/pages/PricingPage";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "Simple plans for solo operators, teams and enterprises running the autonomous desktop AI OS.",
      },
      { property: "og:title", content: "Pricing — DIGI BIZ OS" },
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

