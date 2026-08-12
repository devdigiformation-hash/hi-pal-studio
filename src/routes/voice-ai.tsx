import { createFileRoute } from "@tanstack/react-router";
import VoiceAIPage from "@/pages/VoiceAIPage";
import { buildMeta, breadcrumbLd, softwareLd } from "@/lib/seo";

const PATH = "/voice-ai";
const TITLE = "Voice AI Assistant for PC — Control Your Computer by Speaking | DIGI BIZ OS";
const DESC = "Voice-first control for your Windows desktop: speak a request and DIGI BIZ OS plans it, picks the right agent, skill and tool, and executes it live.";

export const Route = createFileRoute("/voice-ai")({
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
              { name: "Voice AI", path: PATH },
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
  component: VoiceAIPage,
});
