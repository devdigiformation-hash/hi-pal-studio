import { createFileRoute } from "@tanstack/react-router";
import PricingPage from "@/pages/PricingPage";
import { buildMeta, breadcrumbLd, softwareLd } from "@/lib/seo";

const PATH = "/pricing";
const TITLE = "One-Time Pricing — Lifetime Licence & Source Code | DIGI BIZ OS";
const DESC =
  "One-time pricing for DIGI BIZ OS: £50 lifetime access, £50 done-for-you software setup with 5 custom business workflows, and £199 source code licence.";

export const Route = createFileRoute("/pricing")({
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
              { name: "Pricing", path: PATH },
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
  component: PricingPage,
});
