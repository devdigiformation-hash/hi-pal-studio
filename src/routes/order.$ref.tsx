import { createFileRoute } from "@tanstack/react-router";
import OrderStatusPage from "@/pages/OrderStatusPage";

export const Route = createFileRoute("/order/$ref")({
  head: () => ({
    meta: [
      { title: "Your Order — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "Track your DIGI BIZ OS order, send payment proof and get your licence activated.",
      },
      { property: "og:title", content: "Your Order — DIGI BIZ OS" },
      { property: "og:description", content: "Order status and licence activation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OrderRoute,
});

function OrderRoute() {
  const { ref } = Route.useParams();
  return <OrderStatusPage orderRef={ref} />;
}