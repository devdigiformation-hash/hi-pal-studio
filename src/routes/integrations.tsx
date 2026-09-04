import { createFileRoute } from "@tanstack/react-router";
import IntegrationsPage from "@/pages/IntegrationsPage";
import { buildMeta, breadcrumbLd, softwareLd } from "@/lib/seo";

const PATH = "/integrations";
const TITLE = "Integrations & DigiMCP — Connect Your Business Tools | DIGI BIZ OS";
const DESC =
  "Connect DIGI BIZ OS to the platforms your business already runs on with multi-MCP connectivity, local runners and 200+ agent-accessible tools.";

export const Route = createFileRoute("/integrations")({
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
              { name: "Integrations", path: PATH },
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
  component: IntegrationsPage,
});
