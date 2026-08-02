import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GhostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
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
  ...props
}: GhostButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/12 bg-white/[0.06] backdrop-blur-xl",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_6px_24px_rgba(0,0,0,0.25)]",
        "font-display font-semibold text-[var(--text-primary)] transition-all duration-300",
        "hover:border-[var(--cyan)]/60 hover:bg-white/[0.1] hover:text-[var(--cyan)] hover:shadow-[0_0_28px_var(--cyan-glow)] active:scale-[0.97]",
        sizes[size],
        className,
      )}
    >
      {icon}
      {children}
    </button>
  );
}