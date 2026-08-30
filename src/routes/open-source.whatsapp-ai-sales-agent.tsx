import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/open-source/whatsapp-ai-sales-agent")({
  beforeLoad: () => {
    throw redirect({ to: "/features/digi-whatsapp" });
  },
  component: () => null,
});
