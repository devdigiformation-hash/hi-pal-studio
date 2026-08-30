import { createFileRoute } from "@tanstack/react-router";
import DesktopOSPage from "@/pages/DesktopOSPage";
import { buildMeta, breadcrumbLd, softwareLd } from "@/lib/seo";

const PATH = "/desktop-os";
const TITLE = "AI Desktop OS for Windows — Files, Apps & Automation | DIGI BIZ OS";
const DESC =
  "The desktop layer of DIGI BIZ OS: work with files, applications, terminal and browser through AI agents, with live tracking of every action.";

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
