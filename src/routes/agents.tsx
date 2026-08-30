import { createFileRoute } from "@tanstack/react-router";
import AgentsPage from "@/pages/AgentsPage";
import { buildMeta, breadcrumbLd, softwareLd } from "@/lib/seo";

const PATH = "/agents";
const TITLE = "AI Agents — Multi-Agent Platform for Real Work | DIGI BIZ OS";
const DESC =
  "A multi-agent AI platform on your desktop: specialist agents with skills and tools that plan, delegate and execute business work with live tracking.";

export const Route = createFileRoute("/agents")({
  head: () => {
    const { meta, links } = buildMeta({ path: PATH, title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Agents", path: PATH },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(softwareLd("DIGI BIZ OS", DESC, PATH)),
        },
      ],
    };
  },
  component: AgentsPage,
});
