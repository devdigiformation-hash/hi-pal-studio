import SmartLink from "@/components/SmartLink";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import GlassCard from "@/components/GlassCard";

const HUB = [
  {
    to: "/pricing",
    title: "Pricing",
    desc: "One-time payment, lifetime licence. Compare the Lifetime, Source Code and Customised Build plans.",
  },
  {
    to: "/download",
    title: "Download for Windows",
    desc: "Get the DIGI BIZ OS installer for Windows 10 and 11, with step-by-step setup instructions.",
  },
  {
    to: "/voice-ai",
    title: "Voice AI Control",
    desc: "Just speak. DIGI BIZ OS listens, plans and executes real work on your PC hands-free.",
  },
  {
    to: "/desktop-os",
    title: "Desktop Automation",
    desc: "System-level control of apps, files, terminal and browser from a single AI workspace.",
  },
  {
    to: "/agents",
    title: "Multi-Agent Platform",
    desc: "Specialist AI agents that delegate, collaborate and report back while the work runs.",
  },
  {
    to: "/integrations",
    title: "Integrations & Tools",
    desc: "Universal MCP connectivity, custom CLI runners, and messaging connectors for the services your business already uses.",
  },
  {
    to: "/features",
    title: "All Features",
    desc: "Every core module in the operating system: Digi AI, Digi CRM, Digi Studio, Digi Flow, Digi Marketing, Digi WhatsApp, Digi Code, Digi MCP, Digi CLI, and more.",
  },
  {
    to: "/compare",
    title: "Comparisons",
    desc: "How DIGI BIZ OS compares with other AI assistants for real desktop execution.",
  },
  {
    to: "/blog",
    title: "Blog & Guides",
    desc: "Practical guides on voice control, AI agents and business automation on Windows.",
  },
  {
    to: "/faq",
    title: "FAQ",
    desc: "Licensing, privacy, system requirements and delivery questions answered.",
  },
  {
    to: "/about",
    title: "About DIGI BIZ OS",
    desc: "The team and mission behind the AI agentic business operating system.",
  },
  {
    to: "/contact",
    title: "Contact & Support",
    desc: "Talk to us on WhatsApp or email for sales, licensing and technical support.",
  },
] as const;

export default function ExploreHub() {
  return (
    <SectionWrapper id="explore">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <EyebrowLabel text="Explore DIGI BIZ OS" color="var(--amber)" />
          <h2 className="reveal-item mt-4 font-display text-[32px] font-bold leading-tight md:text-[44px]">
            <GradientText from="#F5A623" to="#2FE0C8">
              Everything inside the operating system
            </GradientText>
          </h2>
          <p className="reveal-item mx-auto mt-4 max-w-[640px] font-body text-[15px] text-[var(--text-secondary)]">
            Jump straight to the part of DIGI BIZ OS you need — pricing, download, voice control,
            desktop automation, agents, integrations and support.
          </p>
        </div>

        <nav aria-label="Explore DIGI BIZ OS" className="mt-12">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HUB.map((item) => (
              <li key={item.to} className="reveal-item">
                <SmartLink to={item.to} className="block h-full">
                  <GlassCard className="h-full">
                    <h3 className="font-display text-[17px] font-semibold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-body text-[14px] leading-relaxed text-[var(--text-secondary)]">
                      {item.desc}
                    </p>
                  </GlassCard>
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </SectionWrapper>
  );
}
