import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/compare/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ to: "/blog/$slug", params: { slug: params.slug } });
  },
  component: () => null,
});

function ComparePageRoute() {
  const { slug } = Route.useParams();
  const page = COMPARE_BY_SLUG[slug];
  if (!page) return null;
  return <CompareLanding page={page} />;
}
