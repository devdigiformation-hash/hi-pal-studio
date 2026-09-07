import { createFileRoute } from "@tanstack/react-router";
import DesktopOSPage from "@/pages/DesktopOSPage";
import { buildMeta, breadcrumbLd, softwareLd } from "@/lib/seo";

const PATH = "/desktop-os";
const TITLE = "Autonomous Desktop AI Workstation — Business Automation OS | DIGI BIZ OS";
const DESC =
  "Transform Windows 10 & 11 into an autonomous business workstation. Run local models, orchestrate desktop apps, execute CLI scripts, and manage files hands-free.";

export const Route = createFileRoute("/desktop-os")({
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
              { name: "Desktop OS", path: PATH },
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
  component: DesktopOSPage,
});
