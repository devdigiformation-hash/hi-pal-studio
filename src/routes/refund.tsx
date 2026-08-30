import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/pages/LegalPage";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — DIGI BIZ OS" },
      {
        name: "description",
        content:
          "When a payment for a DIGI BIZ OS licence can and cannot be returned, including delivery, duplicate payments and chargebacks.",
      },
      { property: "og:title", content: "Refund Policy — DIGI BIZ OS" },
      { property: "og:description", content: "Digital delivery, final sale and exceptions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://digibizos.co.uk/refund" }],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Refund Policy"
      intro="This policy explains when a payment made to DIGI BIZ OS can and cannot be returned. It forms part of our Terms & Conditions and applies to every purchase made through this site."
      sections={[
        {
          heading: "Digital delivery and final sale",
          body: [
            "Once your payment is verified we activate your licence on the email you provided and give you the installer. At that point the product has been fully delivered, so all sales are final and non-refundable.",
            "This applies regardless of how much you use the software, including a change of mind or a workflow that turns out not to suit you.",
          ],
        },
        {
          heading: "Before you buy",
          body: [
            "Because sales are final, we would rather answer questions before you pay. System requirements, features and setup are described across this site, and our WhatsApp line is open for pre-purchase questions.",
          ],
        },
        {
          heading: "Delivery and activation problems",
          body: [
            "If we cannot deliver or activate your licence at all, and support cannot resolve it, we refund the payment in full using the original payment rail.",
          ],
        },
        {
          heading: "Duplicate and incorrect payments",
          body: [
            "Accidental duplicate transfers, or amounts sent above the checkout price, are returned once verified. Send us the transaction reference and we will reconcile it.",
          ],
        },
        {
          heading: "Third-party AI and payment charges",
          body: [
            "Charges billed by your AI provider, bank, exchange or wallet are outside our control and are not refundable by us.",
          ],
        },
        {
          heading: "Subscriptions",
          body: [
            "Lifetime licences have nothing to cancel. Pro subscriptions can be cancelled at any time and simply stop renewing at the end of the paid period.",
          ],
        },
        {
          heading: "Chargebacks and disputes",
          body: [
            "Please contact us before raising a dispute. Licences attached to a reversed or disputed payment are deactivated until the matter is resolved.",
          ],
        },
      ]}
    />
  ),
});
