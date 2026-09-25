import { createFileRoute } from "@tanstack/react-router";
import VoiceAIPage from "@/pages/VoiceAIPage";
import { buildMeta, breadcrumbLd, softwareLd, faqLd } from "@/lib/seo";

const PATH = "/voice-ai";
const TITLE = "Voice AI Assistant for Windows PC | DIGI BIZ OS";
const DESC =
  "Speak a request and DIGI BIZ OS plans it, picks the right agent, skill and tool, then runs it live on your Windows desktop.";

// Answer-engine (AEO) questions — real questions buyers ask, answered in the
// page's own voice so Google and AI answer engines can quote them directly.
const FAQS = [
  {
    q: "What is a voice AI assistant for PC?",
    a: "A voice AI assistant lets you run work on your computer by speaking instead of clicking. In DIGI BIZ OS you say what you want, and it plans the request, picks the right agent, skill and tool, then executes it on your Windows desktop.",
  },
  {
    q: "Can I control my Windows computer by voice?",
    a: "Yes. DIGI BIZ OS is voice-first: you can ask it to run business tasks, open modules, pull reports and trigger workflows by speaking, and it carries the request through to execution rather than only transcribing it.",
  },
  {
    q: "Does the voice assistant work offline?",
    a: "DIGI BIZ OS can run open-source AI models locally on Windows, so voice-driven work can continue without sending your data to a cloud service. You can also connect cloud models when you want faster reasoning.",
  },
  {
    q: "How is it different from Siri, Alexa or Cortana?",
    a: "Consumer assistants mainly answer questions and control apps. DIGI BIZ OS is a business operating system: the voice layer drives real modules such as CRM, automation, research and messaging, and can complete multi-step work end to end.",
  },
  {
    q: "What do I need to run it?",
    a: "A Windows 10 or 11 PC. You install DIGI BIZ OS, choose local or cloud models, and start speaking — no smart speaker and no separate voice-platform subscription is required.",
  },
];

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
        {
          type: "application/ld+json",
          children: JSON.stringify(faqLd(FAQS)),
        },
      ],
    };
  },
  component: VoiceAIPage,
});
