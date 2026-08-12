import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/pages/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "What DIGI BIZ OS collects, how your data stays on your machine, and how we handle purchase and support information.",
      },
      { property: "og:title", content: "Privacy Policy — DIGI BIZ OS" },
      {
        property: "og:description",
        content: "Privacy-first by design: your work stays on your machine.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://digibizos.co.uk/privacy" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="DIGI BIZ OS is built privacy-first. This policy explains what information we handle when you buy, activate and use the product."
      sections={[
        {
          heading: "Your work stays with you",
          body: [
            "Your files, documents and workspace content stay on your own machine. We do not upload, mirror or store your working data on our servers.",
            "Anything you connect yourself — your own accounts and services — is used only to carry out the action you asked for.",
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "When you purchase a licence we collect the name, email address and payment reference you provide so we can verify the payment and activate your licence.",
            "When you contact support by email or WhatsApp we keep that conversation so we can help you and keep a record of the issue.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "We use your details to verify payments, deliver your licence and installer, send release and update notices, and answer support requests. We do not sell your information.",
          ],
        },
        {
          heading: "Retention and your rights",
          body: [
            "Purchase records are kept for as long as required for accounting and licence verification. You can ask us to correct your details, or to remove information we are not legally required to keep, by contacting us.",
          ],
        },
      ]}
    />
  ),
});