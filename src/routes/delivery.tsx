import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/pages/LegalPage";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: "Delivery Policy — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "How and when your DIGI BIZ OS licence, installer and setup help are delivered after payment is verified.",
      },
      { property: "og:title", content: "Delivery Policy — DIGI BIZ OS" },
      {
        property: "og:description",
        content: "Digital delivery timelines, activation and setup support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Delivery Policy"
      intro="DIGI BIZ OS is delivered digitally. This policy explains what you receive after you pay and how long it takes."
      sections={[
        {
          heading: "What you receive",
          body: [
            "A licence activated on the email address you enter at checkout, the installer download, and setup instructions for your plan.",
            "Source Code and Customised Build plans additionally include the package agreed for that plan, delivered to the same email address.",
          ],
        },
        {
          heading: "Delivery time",
          body: [
            "Payments are verified manually. Most orders are activated within a few hours during working hours, and within 24 hours at the latest.",
            "Customised builds start after a short scoping conversation, and the timeline is confirmed with you before work begins.",
          ],
        },
        {
          heading: "If something does not arrive",
          body: [
            "Check the spam folder for the activation email first. If it still has not arrived, message us with your order reference and payment proof and we will resolve it.",
          ],
        },
        {
          heading: "Setup help",
          body: [
            "Installation and first-run setup support is included with every plan, in English or Urdu, over WhatsApp or email.",
          ],
        },
      ]}
    />
  ),
});