import { Link } from "@tanstack/react-router";
import { Github, Linkedin, MessageCircle, Twitter } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";
import ActivePulse from "./ActivePulse";
import EyebrowLabel from "./EyebrowLabel";
import MonoBadge from "./MonoBadge";

const PRODUCT = [
  { label: "Product", to: "/" },
  { label: "Voice AI", to: "/voice-ai" },
  { label: "Desktop OS", to: "/desktop-os" },
  { label: "Agent Town", to: "/agent-town" },
  { label: "Integrations", to: "/integrations" },
  { label: "Pricing", to: "/pricing" },
] as const;

const RESOURCES = [
  "Documentation",
  "API Reference",
  "Changelog",
  "System Requirements",
  "Blog",
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
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 md:px-10 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logoAsset.url} alt="Digi Biz OS" className="h-9 w-9 rounded-full" />
            <span className="font-display text-[16px] font-bold text-[var(--text-primary)]">
              Digi Biz OS
            </span>
          </div>
          <p className="mt-4 font-display text-[14px] italic text-[var(--text-muted)]">
            The Autonomous Desktop AI OS
          </p>
          <p className="mt-3 max-w-[280px] font-body text-[13px] leading-[1.7] text-[var(--text-muted)]">
            DigiBiz Voice transforms your desktop into a voice-first, multi-agent AI operating
            system.
          </p>
          <div className="mt-5">
            <MonoBadge>
              <ActivePulse />
              v2.5 — Now Available
            </MonoBadge>
          </div>
        </div>

        <div>
          <EyebrowLabel text="Product" />
          <ul className="mt-5 space-y-3">
            {PRODUCT.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <EyebrowLabel text="Resources" color="var(--purple)" />
          <ul className="mt-5 space-y-3">
            {RESOURCES.map((item) => (
              <li key={item}>
                <Link
                  to="/docs"
                  className="font-body text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--cyan)]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <EyebrowLabel text="Connect" color="var(--amber)" />
          <div className="mt-5 flex flex-wrap gap-3">
            {SOCIALS.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-glass)] backdrop-blur-xl transition-all duration-300 hover:scale-[1.08] hover:border-[var(--cyan)] hover:shadow-[0_0_28px_var(--cyan-glow)]"
                style={{ background: "var(--bg-glass-light)" }}
              >
                <Icon size={18} color="var(--text-secondary)" />
              </a>
            ))}
          </div>
          <a
            href="mailto:support@digibizvoice.com"
            className="mt-6 inline-block font-body text-[14px] text-[var(--cyan)] transition-opacity hover:opacity-80"
          >
            support@digibizvoice.com
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--border-subtle)]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-2 px-6 py-6 text-center">
          <p className="font-body text-[12px] text-[var(--text-muted)]">
            © 2025 DigiBiz Voice · All Rights Reserved
          </p>
          <p className="font-body text-[12px] text-[var(--text-muted)]">
            Built with Gemini Live · Powered by Agent Town
          </p>
        </div>
      </div>
    </footer>
  );
}