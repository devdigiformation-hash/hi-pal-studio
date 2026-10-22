import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/open-source/digi-office-suite")({
  beforeLoad: () => {
    throw redirect({ to: "/open-source/digioffice" });
  },
  component: () => null,
});
