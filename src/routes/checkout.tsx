import { createFileRoute } from "@tanstack/react-router";
import CheckoutPage from "@/pages/CheckoutPage";

export const Route = createFileRoute("/checkout")({
  validateSearch: (search: Record<string, unknown>) => ({
    plan: typeof search.plan === "string" ? search.plan : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Secure Checkout — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "Pay for your DIGI BIZ OS licence via JazzCash, EasyPaisa, SadaPay, NayaPay, UBL, or our UK GBP and USD bank accounts. Manually verified by Digiformation Ltd.",
      },
      { property: "og:title", content: "Secure Checkout — DIGI BIZ OS" },
      {
        property: "og:description",
        content: "Choose a payment rail and activate your DIGI BIZ OS licence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CheckoutPage,
});