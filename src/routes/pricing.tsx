import { createFileRoute } from "@tanstack/react-router";
import PricingPage from "@/pages/PricingPage";
import { buildMeta, breadcrumbLd, softwareLd } from "@/lib/seo";

const PATH = "/pricing";
const TITLE = "Pricing — Lifetime Licence, Source Code & Custom Build | DIGI BIZ OS";
const DESC = "One-time pricing for DIGI BIZ OS: £50 lifetime access, £199 source code licence and £299 fully customised build with your branding and automations.";

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
