import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GhostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  /** Brand tone as "r,g,b" — defaults to neutral white/gray. */
  tone?: string;
}

const sizes = {
  sm: "px-3.5 py-2 text-[12px] sm:px-5 sm:text-[13px]",
  md: "px-5 py-3 text-[14px] sm:px-7 sm:py-[13px] sm:text-[15px]",
  lg: "px-6 py-3.5 text-[15px] sm:px-9 sm:py-4 sm:text-[17px]",
};

export default function GhostButton({
  children,
  size = "md",
  icon,
  className,
  tone = "47,224,200",
  ...props
}: GhostButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "group relative inline-flex max-w-full items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border bg-white/[0.06] backdrop-blur-xl",
        "font-display font-semibold transition-all duration-300",
        "active:scale-[0.97]",
        sizes[size],
        className,
      )}
      style={{
        color: `rgb(${tone})`,
        borderColor: `rgba(${tone},0.28)`,
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.12),0 6px 24px rgba(0,0,0,0.25)`,
        "--hover-bg": `rgba(${tone},0.10)`,
        "--hover-border": `rgba(${tone},0.55)`,
        "--hover-glow": `rgba(${tone},0.22)`,
      } as CSSProperties}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--hover-bg)";
        e.currentTarget.style.borderColor = "var(--hover-border)";
        e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.12),0 0 28px var(--hover-glow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.borderColor = `rgba(${tone},0.28)`;
        e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.12),0 6px 24px rgba(0,0,0,0.25)";
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/20 blur-md group-hover:[animation:shimmerSweep_1.2s_ease-out]"
      />
      {icon ? <span className="relative z-10 inline-flex">{icon}</span> : null}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
