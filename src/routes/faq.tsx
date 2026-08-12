import { createFileRoute, Link } from "@tanstack/react-router";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { buildMeta, breadcrumbLd, faqLd } from "@/lib/seo";

const TITLE = "DIGI BIZ OS FAQ — Answers on Voice AI, Agents, Licensing & Setup";
const DESC =
  "Clear answers about DIGI BIZ OS: what it does, supported platforms, voice control, agents and skills, lifetime licensing, source code, payments and support.";

const GROUPS: { heading: string; items: { q: string; a: string }[] }[] = [
  {
    heading: "Product",
    items: [
      {
        q: "What is DIGI BIZ OS?",
        a: "DIGI BIZ OS is an AI agentic business operating system for Windows. You speak or type an instruction and it carries out the work — documents, files, research, coding, reports and repeatable business automation — instead of only replying with text.",
      },
      {
        q: "How is it different from a chat assistant?",
        a: "A chat assistant produces answers. DIGI BIZ OS plans the task, picks the right skills and tools, executes the steps on your machine and shows you every action in a live run view.",
      },
      {
        q: "What can it actually do?",
        a: "It ships with 500+ AI skills and 150+ mixed tools, multi-agent runs, a coding workspace, document processing, browser and file operations, custom memories, workflows and scheduled jobs.",
      },
      {
        q: "Does it work without voice?",
        a: "Yes. Voice is the fastest way to drive it, but every capability is available through typed instructions and the workspace interface.",
      },
    ],
  },
  {
    heading: "Platforms and setup",
    items: [
      {
        q: "Which platforms are supported?",
        a: "Windows 10 and 11 are available today. macOS, Linux and a mobile companion are marked coming soon.",
      },
      {
        q: "How long does setup take?",
        a: "Download, install and activate with your licence key. Most people are running their first task within minutes.",
      },
      {
        q: "Can it access my local folders?",
        a: "Yes, with your permission. Local folder access, file organisation and document pipelines are core to how it works.",
      },
    ],
  },
  {
    heading: "Pricing and licensing",
    items: [
      {
        q: "Is it a subscription?",
        a: "No. Lifetime Access is a one-time payment. There is no recurring licence fee.",
      },
      {
        q: "What are the plans?",
        a: "Lifetime Access, a Source Code Licence for teams who want to own and modify the software, and a Custom Build where we tailor the product to your brand and workflows.",
      },
      {
        q: "Can I use my own branding?",
        a: "Yes — that is the purpose of the Source Code Licence and the Custom Build plan.",
      },
      {
        q: "Which payment methods do you accept?",
        a: "Mobile accounts (JazzCash, EasyPaisa, SadaPay, NayaPay) and bank transfer in PKR, GBP and USD. Payment details are shown at checkout.",
      },
      {
        q: "How is the licence delivered?",
        a: "Once payment is confirmed, your download link and licence key are sent to the email address you provide at checkout.",
      },
    ],
  },
  {
    heading: "Support",
    items: [
      {
        q: "How do I get help?",
        a: "Message us on WhatsApp at +92 316 446 7464 or email info@digiformation.co.uk. We respond during UK and Pakistan business hours.",
      },
      {
        q: "Do you offer custom automation work?",
        a: "Yes. The Custom Build plan covers tailored workflows, integrations and branding for your business.",
      },
    ],
  },
];

const ALL = GROUPS.flatMap((g) => g.items);

export const Route = createFileRoute("/faq")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/faq", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "FAQ", path: "/faq" },
            ]),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqLd(ALL)) },
      ],
    };
  },
  component: FaqPage,
});

function FaqPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]}
        />
        <div className="mx-auto max-w-[860px] text-center">
          <EyebrowLabel text="Answers" color="var(--purple)" />
          <h1 className="reveal-item delay-1 mt-5 font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.035em] text-[var(--text-primary)] md:text-[50px]">
            Everything You{" "}
            <GradientText from="#8B7CF6" to="#2FE0C8">
              Asked Us.
            </GradientText>
          </h1>
          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[700px] font-body text-[15px] leading-[1.85] text-[var(--text-secondary)] md:text-[16.5px]">
            The questions we get most often about DIGI BIZ OS — what it does, what it runs on, how
            licensing works and how to get support.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-[900px] space-y-10">
          {GROUPS.map((g) => (
            <section key={g.heading}>
              <h2 className="font-display text-[20px] font-bold tracking-[-0.02em] text-[var(--text-primary)] md:text-[26px]">
                {g.heading}
              </h2>
              <div className="mt-5 space-y-3">
                {g.items.map((f) => (
                  <GlassCard key={f.q} glowColor="var(--purple)" className="p-5 md:p-6">
                    <h3 className="font-display text-[15.5px] font-bold text-[var(--text-primary)]">
                      {f.q}
                    </h3>
                    <p className="mt-2 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                      {f.a}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-[900px] text-center">
          <p className="font-body text-[14.5px] text-[var(--text-secondary)]">
            Still deciding?{" "}
            <Link to="/compare" className="text-[var(--cyan)] hover:underline">
              Compare DIGI BIZ OS with other assistants
            </Link>{" "}
            or{" "}
            <Link to="/pricing" className="text-[var(--cyan)] hover:underline">
              view pricing
            </Link>
            .
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
