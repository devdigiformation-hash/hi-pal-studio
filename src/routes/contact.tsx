import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MessageCircle, Clock, Globe } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd } from "@/lib/seo";
import { WHATSAPP_NUMBER, SUPPORT_EMAIL } from "@/lib/payment-config";

const TITLE = "Contact DIGI BIZ OS — Sales, Support & Custom Builds";
const DESC =
  "Contact the DIGI BIZ OS team about licences, custom builds, source code or support. Reach us on WhatsApp at +92 316 446 7464 or by email at info@digiformation.co.uk.";

export const Route = createFileRoute("/contact")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/contact", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        },
      ],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]}
        />
        <div className="mx-auto max-w-[860px] text-center">
          <EyebrowLabel text="Contact" color="var(--amber)" />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[50px]">
            Talk to the{" "}
            <GradientText from="#F5A623" to="#2FE0C8">
              DIGI BIZ OS Team.
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[680px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
            Questions about licences, source code, custom builds or setup? Message us directly — we
            reply during UK and Pakistan business hours.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-[900px] gap-4 sm:grid-cols-2">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message DIGI BIZ OS on WhatsApp"
            className="block h-full"
          >
            <GlassCard glowColor="var(--cyan)" className="h-full p-6">
              <MessageCircle size={20} color="var(--cyan)" />
              <h2 className="mt-3 font-display text-[16.5px] font-bold text-[var(--text-primary)]">
                WhatsApp
              </h2>
              <p className="mt-1 font-mono text-[13.5px] text-[var(--cyan)]">+92 316 446 7464</p>
              <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                Fastest route for sales questions, payment confirmation and setup help.
              </p>
            </GlassCard>
          </a>
          <a href={`mailto:${SUPPORT_EMAIL}`} aria-label="Email DIGI BIZ OS support" className="block h-full">
            <GlassCard glowColor="var(--purple)" className="h-full p-6">
              <Mail size={20} color="var(--purple)" />
              <h2 className="mt-3 font-display text-[16.5px] font-bold text-[var(--text-primary)]">
                Email
              </h2>
              <p className="mt-1 font-mono text-[13.5px] text-[var(--purple)]">{SUPPORT_EMAIL}</p>
              <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
                Best for detailed requirements, custom build briefs and invoices.
              </p>
            </GlassCard>
          </a>
          <GlassCard glowColor="var(--amber)" className="p-6">
            <Clock size={20} color="var(--amber)" />
            <h2 className="mt-3 font-display text-[16.5px] font-bold text-[var(--text-primary)]">
              Response times
            </h2>
            <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
              WhatsApp messages are usually answered the same day. Email replies typically arrive
              within one business day.
            </p>
          </GlassCard>
          <GlassCard glowColor="var(--cyan)" className="p-6">
            <Globe size={20} color="var(--cyan)" />
            <h2 className="mt-3 font-display text-[16.5px] font-bold text-[var(--text-primary)]">
              Company
            </h2>
            <p className="mt-2 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
              DIGI BIZ OS is built and supported by Digiformation Ltd —{" "}
              <a
                href="https://www.digiformation.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--cyan)] hover:underline"
              >
                digiformation.co.uk
              </a>
              .
            </p>
          </GlassCard>
        </div>

        <div className="mx-auto mt-12 max-w-[900px] text-center">
          <p className="font-body text-[14.5px] text-[var(--text-secondary)]">
            Looking for answers first? Read the{" "}
            <Link to="/faq" className="text-[var(--cyan)] hover:underline">
              FAQ
            </Link>{" "}
            or{" "}
            <Link to="/download" className="text-[var(--cyan)] hover:underline">
              download details
            </Link>
            .
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
