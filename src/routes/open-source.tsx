import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/open-source")({
  component: () => <Outlet />,
});
