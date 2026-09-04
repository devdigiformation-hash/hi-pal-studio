import { Link } from "@tanstack/react-router";
import SmartLink from "./SmartLink";
import { Github, Globe, Linkedin, Mail, MessageCircle, Phone, Twitter } from "lucide-react";
import logoClean from "@/assets/logo-clean.png";
import ActivePulse from "./ActivePulse";
import EyebrowLabel from "./EyebrowLabel";
import MonoBadge from "./MonoBadge";

const OVERVIEW = [
  { label: "Overview", to: "/" },
  { label: "All Features Hub", to: "/features" },
  { label: "Enterprise Modules", to: "/modules" },
  { label: "AI Models Universe", to: "/models" },
  { label: "Voice AI & JARVIS", to: "/voice-ai" },
  { label: "Desktop Automation", to: "/desktop-os" },
  { label: "Multi-Agent Platform", to: "/agents" },
  { label: "Open Source Suite", to: "/open-source" },
  { label: "One-Time Pricing", to: "/pricing" },
  { label: "Download for Windows", to: "/download" },
  { label: "Blog & Guides", to: "/blog" },
  { label: "FAQ", to: "/faq" },
] as const;

const MODULES = [
  { label: "Digi CRM & Operations", to: "/modules/crm" },
  { label: "Digi Studio Creative Suite", to: "/modules/studio" },
  { label: "Digi AI Studio", to: "/modules/ai" },
  { label: "Digi WhatsApp Agent", to: "/modules/whatsapp" },
  { label: "Digi Marketing", to: "/modules/marketing" },
  { label: "Digi Flow Automations", to: "/modules/workflows" },
  { label: "Digi Code Workspace", to: "/modules/code" },
  { label: "Digi MCP Protocol Client", to: "/modules/mcp" },
  { label: "Digi CLI Command Runner", to: "/modules/cli" },
  { label: "Digi Models Router", to: "/modules/models" },
  { label: "Digi Connectors Hub", to: "/modules/connectors" },
  { label: "Digi Intelligence", to: "/modules/intelligence" },
] as const;

const SAAS_ALTERNATIVES = [
  { label: "CapCut Pro Alternative", to: "/compare/opencut-vs-capcut" },
  { label: "Premiere Pro Alternative", to: "/compare/kdenlive-vs-premiere-pro" },
  { label: "ElevenLabs Voice Alternative", to: "/compare" },
  { label: "HeyGen Avatar Alternative", to: "/compare" },
  { label: "HubSpot CRM Alternative", to: "/compare" },
  { label: "Zapier Automation Alternative", to: "/compare" },
  { label: "Cursor AI Coding Alternative", to: "/compare" },
  { label: "Screaming Frog SEO Alternative", to: "/compare/open-seo-spider-vs-screaming-frog" },
  { label: "ChatGPT & Copilot Alternative", to: "/compare/digi-biz-os-vs-chatgpt" },
  { label: "All Paid vs Free Comparisons →", to: "/compare" },
] as const;

const RESOURCES = [
  { label: "AI Desktop Assistant", to: "/ai-desktop-assistant" },
  { label: "AI Business Assistant", to: "/ai-business-assistant" },
  { label: "AI Workflow Automation", to: "/ai-workflow-automation" },
  { label: "Multi-Agent AI", to: "/multi-agent-ai" },
  { label: "AI Coding Agent", to: "/ai-coding-agent" },
  { label: "Computer-Use AI", to: "/computer-use-ai" },
  { label: "JARVIS Alternative", to: "/jarvis-alternative" },
  { label: "JARVIS for Windows", to: "/jarvis-for-windows" },
  { label: "Desktop AI Agent", to: "/desktop-ai-agent" },
  { label: "AI Computer Control", to: "/ai-computer-control" },
] as const;

const LEGAL = [
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Refund Policy", to: "/refund" },
  { label: "Delivery Policy", to: "/delivery" },
  { label: "Site Map", to: "/sitemap" },
] as const;

const BUSINESS = [
  "UK Services",
  "USA Services",
  "Banks & Payment Solutions",
  "UK Compliance",
  "Web Development",
] as const;

const SOCIALS = [
  { label: "GitHub", icon: Github },
  { label: "Discord Community", icon: MessageCircle },
  { label: "Twitter / X", icon: Twitter },
  { label: "LinkedIn", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer
      className="relative border-t border-[var(--border-subtle)]"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 md:px-10 lg:grid-cols-3 xl:grid-cols-6">
        <div>
          <div className="flex items-center gap-2">
            <img src={logoClean} alt="DIGI BIZ OS logo" className="h-9 w-9 rounded-full" />
            <span className="font-display text-[16px] font-bold text-[var(--text-primary)]">
              DIGI BIZ OS
            </span>
          </div>
          <p className="mt-4 font-display text-[14px] italic text-[var(--text-muted)]">
            The Autonomous Desktop AI OS
          </p>
          <p className="mt-3 max-w-[280px] font-body text-[13px] leading-[1.7] text-[var(--text-muted)]">
            DIGI BIZ OS transforms your desktop into a voice-first, multi-agent AI operating system.
          </p>
          <div className="mt-5">
            <MonoBadge>
              <ActivePulse />
              v2.5 — Now Available
            </MonoBadge>
          </div>
        </div>

        <div>
          <EyebrowLabel text="Overview" />
          <ul className="mt-5 space-y-3">
            {OVERVIEW.map((item) => (
              <li key={item.label}>
                <SmartLink
                  to={item.to}
                  className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                >
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <EyebrowLabel text="Modules" color="var(--cyan)" />
          <ul className="mt-5 space-y-3">
            {MODULES.map((item) => (
              <li key={item.label}>
                <SmartLink
                  to={item.to}
                  className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                >
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <EyebrowLabel text="SaaS Alternatives" color="var(--green)" />
          <ul className="mt-5 space-y-3">
            {SAAS_ALTERNATIVES.map((item) => (
              <li key={item.label}>
                <SmartLink
                  to={item.to}
                  className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                >
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <EyebrowLabel text="Solutions" color="var(--purple)" />
          <ul className="mt-5 space-y-3">
            {RESOURCES.map((item) => (
              <li key={item.label}>
                <SmartLink
                  to={item.to}
                  className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                >
                  {item.label}
                </SmartLink>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <EyebrowLabel text="Legal" color="var(--amber)" />
            <ul className="mt-5 space-y-3">
              {LEGAL.map((item) => (
                <li key={item.label}>
                  <SmartLink
                    to={item.to}
                    className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                  >
                    {item.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <EyebrowLabel text="Company" color="var(--purple)" />
          <ul className="mt-5 space-y-3">
            <li>
              <SmartLink
                to="/about"
                className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
              >
                About DIGI BIZ OS
              </SmartLink>
            </li>
            <li>
              <SmartLink
                to="/contact"
                className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
              >
                Contact
              </SmartLink>
            </li>
            <li>
              <SmartLink
                to="/compare"
                className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
              >
                SaaS vs DIGI BIZ OS ($4,800+ Saved)
              </SmartLink>
            </li>
            <li>
              <SmartLink
                to="/models"
                className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
              >
                50+ Free & Open Models
              </SmartLink>
            </li>
            {BUSINESS.map((item) => (
              <li key={item}>
                <a
                  href="https://www.digiformation.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <EyebrowLabel text="Contact Digiformation" color="var(--amber)" />
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href="mailto:info@digiformation.co.uk"
                className="inline-flex items-center gap-2 font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
              >
                <Mail size={15} /> info@digiformation.co.uk
              </a>
            </li>
            <li>
              <a
                href="tel:+923164467464"
                className="inline-flex items-center gap-2 font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
              >
                <Phone size={15} /> +92 316 446 7464
              </a>
            </li>
            <li>
              <a
                href="https://www.digiformation.co.uk/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
              >
                <Globe size={15} /> www.digiformation.co.uk
              </a>
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            {SOCIALS.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="https://www.digiformation.co.uk/"
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-glass)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.08] hover:border-[var(--cyan)] hover:shadow-[0_0_28px_var(--cyan-glow)]"
                style={{ background: "var(--bg-glass-light)" }}
              >
                <Icon size={18} color="var(--text-secondary)" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border-subtle)]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-2 px-6 py-6 text-center">
          <p className="font-body text-[12px] text-[var(--text-muted)]">
            © 2025 DIGI BIZ OS · All Rights Reserved
          </p>
          <p className="font-body text-[12px] text-[var(--text-muted)]">
            Made by{" "}
            <a
              href="https://www.digiformation.co.uk/"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--cyan)] transition-opacity hover:opacity-80"
            >
              Digiformation Ltd
            </a>{" "}
            · UK Company Formation & Compliance Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
