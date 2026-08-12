import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Menu, User, X } from "lucide-react";
import { WindowsIcon } from "@/components/PlatformIcons";
import logoClean from "@/assets/logo-clean.png";
import ActivePulse from "./ActivePulse";
import CyanButton from "./CyanButton";
import GhostButton from "./GhostButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "JARVIS AI", to: "/jarvis-ai" },
  { label: "Voice AI", to: "/voice-ai" },
  { label: "Agents", to: "/agents" },
  { label: "Blog", to: "/blog" },
  { label: "Pricing", to: "/pricing" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[1000] px-3 pt-3 md:px-6 md:pt-5">
        <nav
          className={cn(
            "mx-auto flex h-[56px] max-w-[1180px] items-center justify-between gap-6 rounded-full border px-4 transition-all duration-[400ms] ease-out md:h-[64px] md:px-5",
            scrolled
              ? "border-[var(--border-glass)] shadow-[0_10px_40px_rgba(0,0,0,0.55)]"
              : "border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.35)]",
          )}
          style={{
            background: scrolled ? "rgba(8,10,14,0.82)" : "rgba(8,10,14,0.55)",
            backdropFilter: "blur(28px) saturate(180%)",
          }}
        >
          <Link to="/" className="group flex shrink-0 items-center gap-2">
            <img
              src={logoClean}
              alt="DIGI BIZ OS"
              className="h-8 w-8 rounded-full transition-all duration-300 group-hover:animate-logo-blink md:h-9 md:w-9"
            />
            <span className="font-display text-[13.5px] font-bold tracking-tight text-[var(--text-primary)] md:text-[14px]">
              DIGI BIZ OS
            </span>
            <ActivePulse />
          </Link>

          <div className="hidden items-center gap-5 lg:flex xl:gap-7">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={cn(
                    "group relative font-display text-[12.5px] font-medium tracking-tight transition-colors duration-300 xl:text-[13px]",
                    active
                      ? "text-[var(--cyan)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px w-full origin-left bg-[var(--cyan)] transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2 lg:gap-2.5">
            <button
              type="button"
              aria-label="Account"
              className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--text-primary)] lg:flex"
            >
              <User size={16} />
            </button>
            <Link
              to="/pricing"
              className="group inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 font-display text-[12px] font-bold text-[#04120F] shadow-[0_6px_22px_rgba(47,224,200,0.35)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_28px_rgba(47,224,200,0.5)] sm:px-4 sm:text-[12.5px]"
              style={{
                background: "linear-gradient(135deg, #6BF3DE 0%, #2FE0C8 55%, #16C2AC 100%)",
              }}
            >
              Get Started
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] lg:hidden"
          >
            <Menu size={20} color="var(--cyan)" />
          </button>
        </nav>
      </header>

      {open && (
        <div
          className="animate-scale-in fixed inset-0 z-[1100] lg:hidden"
          style={{ background: "var(--bg-glass-heavy)", backdropFilter: "blur(32px)" }}
        >
          <div className="flex h-[60px] items-center justify-between px-5">
            <span className="font-display text-[15px] font-bold text-[var(--text-primary)]">
              DIGI BIZ OS
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-[var(--r-sm)] border border-[var(--border-glass)]"
            >
              <X size={22} color="var(--cyan)" />
            </button>
          </div>

          <div className="flex flex-col gap-6 px-7 pt-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-display text-[22px] font-bold text-[var(--text-primary)] transition-all duration-300 hover:translate-x-2 hover:text-[var(--cyan)]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <GhostButton>Live Demo</GhostButton>
              <CyanButton icon={<WindowsIcon size={17} />}>Download App</CyanButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}