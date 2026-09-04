import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/compare/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/blog/$slug", params: { slug: params.slug } });
  },
  component: () => null,
});

