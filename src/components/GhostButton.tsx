import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GhostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
}

const sizes = {
  sm: "px-5 py-2 text-[13px]",
  md: "px-7 py-[13px] text-[15px]",
  lg: "px-9 py-4 text-[17px]",
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
        "inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border-glass)] bg-transparent",
        "font-display font-semibold text-[var(--text-primary)] transition-all duration-300",
        "hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:shadow-[0_0_28px_var(--cyan-glow)] active:scale-[0.97]",
        sizes[size],
        className,
      )}
    >
      {icon}
      {children}
    </button>
  );
}