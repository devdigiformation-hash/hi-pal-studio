import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { WindowsIcon } from "@/components/PlatformIcons";
import logoClean from "@/assets/logo-clean.png";
import ActivePulse from "./ActivePulse";
import CyanButton from "./CyanButton";
import GhostButton from "./GhostButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Product", to: "/" },
  { label: "Voice AI", to: "/voice-ai" },
  { label: "Desktop OS", to: "/desktop-os" },
  { label: "Agents", to: "/agents" },
  { label: "Integrations", to: "/integrations" },
  { label: "Pricing", to: "/pricing" },
  { label: "Docs", to: "/docs" },
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
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[1000] h-[60px] transition-all duration-[400ms] ease-out md:h-[72px]",
          scrolled && "border-b border-[var(--border-glass)] shadow-[0_4px_32px_rgba(0,0,0,0.4)]",
        )}
        style={
          scrolled
            ? { background: "var(--bg-glass-heavy)", backdropFilter: "blur(28px) saturate(200%)" }
            : { background: "transparent" }
        }
      >
        <nav className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10">
          <Link to="/" className="group flex items-center gap-2">
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

          <div className="hidden items-center gap-5 lg:flex xl:gap-6">
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

          <div className="hidden items-center gap-3 lg:flex">
            <GhostButton size="sm">Live Demo</GhostButton>
            <CyanButton size="sm" icon={<WindowsIcon size={15} />}>
              Download App
            </CyanButton>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-[var(--r-sm)] border border-[var(--border-glass)] lg:hidden"
          >
            <Menu size={22} color="var(--cyan)" />
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