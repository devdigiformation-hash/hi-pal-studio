import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CyanButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  /** Brand tone as "r,g,b" — defaults to the DIGI BIZ OS cyan. */
  tone?: string;
}

const sizes = {
  sm: "px-5 py-2 text-[13px]",
  md: "px-8 py-[14px] text-[15px]",
  lg: "px-10 py-4 text-[17px]",
};

export default function CyanButton({
  children,
  size = "md",
  icon,
  className,
  tone = "47,224,200",
  ...props
}: CyanButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-display font-bold",
        "border backdrop-blur-xl transition-all duration-300 ease-out hover:text-[var(--text-primary)]",
        "hover:scale-[1.03] active:scale-[0.97]",
        sizes[size],
        className,
      )}
      style={{
        color: `rgb(${tone})`,
        borderColor: `rgba(${tone},0.45)`,
        boxShadow: `0 8px 32px rgba(${tone},0.18), inset 0 1px 0 rgba(255,255,255,0.16)`,
        background:
          `linear-gradient(135deg, rgba(${tone},0.22), rgba(${tone},0.10) 55%, rgba(255,255,255,0.05))`,
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/20 blur-md group-hover:[animation:shimmerSweep_0.9s_ease-out]"
      />
      {icon ? <span className="relative z-10 inline-flex">{icon}</span> : null}
      <span className="relative z-10">{children}</span>
    </button>
  );
}