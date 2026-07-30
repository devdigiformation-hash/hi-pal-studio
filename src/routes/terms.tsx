import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/pages/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Digi Biz OS" },
      {
        name: "description",
        content:
          "Licence terms, permitted use, payment and activation rules for the Digi Biz OS desktop AI operating system.",
      },
      { property: "og:title", content: "Terms & Conditions — Digi Biz OS" },
      { property: "og:description", content: "Licence and purchase terms for Digi Biz OS." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="These terms govern every purchase of a Digi Biz OS licence made through this website or through the payment methods shown at checkout. Digi Biz OS is operated by Digiformation Ltd."
      sections={[
        {
          heading: "What you are buying",
          body: [
            "A licence to install and use the ready-made Digi Biz OS desktop application. The purchase does not include source code, resale rights, custom development, or any guaranteed third-party AI service.",
          ],
        },
        {
          heading: "Activation and devices",
          body: [
            "A lifetime licence can be activated on up to 3 computers. Activation is linked to the email address you provide at checkout, so you can reinstall at any time.",
          ],
        },
        {
          heading: "Payment and verification",
          body: [
            "Payments made through JazzCash, bank transfer, USDT, Binance Pay or Redot Pay are verified manually. Your order is recorded with a reference; activation follows once the transfer is confirmed.",
            "Send exactly the amount shown at checkout. Underpaid or unmatched transfers delay verification.",
          ],
        },
        {
          heading: "AI usage costs",
          body: [
            "You connect your own AI provider account or API key. Any usage charged by that provider is your responsibility and is separate from your Digi Biz OS licence.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "Do not resell, sublicense, redistribute or reverse-engineer the software, and do not use it for unlawful automation. Licences found in breach may be deactivated without refund.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "The software is provided as-is. Digiformation Ltd is not liable for indirect or consequential loss arising from automated actions you instruct the software to perform.",
          ],
        },
      ]}
    />
  ),
});