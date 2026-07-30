import { createFileRoute } from "@tanstack/react-router";
import CheckoutPage from "@/pages/CheckoutPage";

export const Route = createFileRoute("/checkout")({
  validateSearch: (search: Record<string, unknown>) => ({
    plan: typeof search.plan === "string" ? search.plan : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Secure Checkout — Digi Biz OS" },
      {
        name: "description",
        content:
          "Pay for your Digi Biz OS licence via JazzCash, bank transfer, USDT, Binance Pay or Redot Pay. Manually verified by Digiformation Ltd.",
      },
      { property: "og:title", content: "Secure Checkout — Digi Biz OS" },
      {
        property: "og:description",
        content: "Choose a payment rail and activate your Digi Biz OS licence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CheckoutPage,
});