import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/pages/LegalPage";

export const Route = createFileRoute("/setup-guide")({
  head: () => ({
    meta: [
      { title: "Setup Guide — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "How to install DIGI BIZ OS, let its dependencies finish installing on first run, connect your free AI models, and keep it auto-updated.",
      },
      { property: "og:title", content: "Setup Guide — DIGI BIZ OS" },
      { property: "og:description", content: "Install, first-run setup, AI model/API-key setup, and auto-updates for DIGI BIZ OS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.digibizos.co.uk/setup-guide" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.digibizos.co.uk" },
            { "@type": "ListItem", position: 2, name: "Setup Guide", item: "https://www.digibizos.co.uk/setup-guide" },
          ],
        }),
      },
    ],
  }),
  component: () => (
    <LegalPage
      eyebrow="Getting started"
      title="Setup Guide"
      intro="Everything you need to install DIGI BIZ OS and get it fully working — from the first launch to connecting your free AI models. Take your time with the first run; most of the setup happens by itself."
      sections={[
        {
          heading: "1. Install the app",
          body: [
            "Run the DIGI BIZ OS installer you received and follow the on-screen steps. It installs like any normal Windows app (Windows 10 or 11).",
            "On a free trial, enter the trial key you were given when you signed up — it activates the app for your trial period on this PC.",
          ],
        },
        {
          heading: "2. First run — let it finish (important)",
          body: [
            "The very first time you open DIGI BIZ OS, it installs its own engines and dependencies in the BACKGROUND — the AI runtime plus the media, document, audio and data tools. You do not install anything by hand.",
            "Leave the app running while this happens. Depending on your internet speed it can take anywhere from a few minutes to a couple of hours on the first run only. After that it starts instantly.",
            "You can watch the progress in Settings (shown by category, e.g. 'Media processing', 'Documents & PDF'). If anything stalls — for example on a locked-down PC, no internet, or antivirus interference — use the 'Install Python' and 'Install all' buttons in Settings to finish it.",
          ],
        },
        {
          heading: "3. Connect your AI models (free)",
          body: [
            "The one key that matters first is the Gemini Voice key — it powers the voice assistant and is completely free. Open aistudio.google.com/api-keys, sign in with a Google account, click Create API Key, and copy it.",
            "In the app open Models (Intelligence Modules), paste the key into 'Gemini Voice — Primary', and Save. That alone makes the assistant work.",
            "For the WhatsApp Agent, paste your Gemini key into the 'WhatsApp Agent — Gemini' box to enable intelligent conversational responses.",
            "Every other free model already works with no key at all. Paid keys (OpenRouter, Groq, and others) are only for extra capacity and are never required — each row has a 'Get API Key' button that opens the provider's official page.",
            "Prefer to listen? The Models panel has an Urdu voice note that walks you through this step by step.",
          ],
        },
        {
          heading: "4. Auto-updates — just restart when asked",
          body: [
            "DIGI BIZ OS keeps itself up to date automatically. When a new version is ready it downloads quietly in the background and then asks you to restart.",
            "Click yes to apply the update, or choose later and it will install the next time you close the app. There is nothing else to do — you always stay on the latest version.",
          ],
        },
        {
          heading: "5. Need the full written guide?",
          body: [
            "A detailed step-by-step PDF guide (with screenshots) is available on request. Message us on WhatsApp at +92 316 4467464 and we'll send it to you.",
            "The same number is where we confirm orders and help with any setup question — you're never left on your own.",
          ],
        },
      ]}
    />
  ),
});
