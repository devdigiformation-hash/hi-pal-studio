import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function MonoBadge({
  children,
  label,
  active,
  className,
  color = "var(--cyan)",
}: {
  children?: ReactNode;
  label?: string;
  active?: boolean;
  className?: string;
  color?: string;
}) {
  return (
    <span
      style={{ color, background: "var(--bg-glass-light)", borderRadius: "var(--r-pill)" }}
      className={cn(
        "inline-flex items-center gap-2 border border-[var(--border-glass)] px-3 py-1 font-code text-[12px] font-medium tracking-tight backdrop-blur-md",
        active
          ? "border-[var(--cyan)] text-[var(--cyan)] shadow-[0_0_12px_rgba(47,224,200,0.25)]"
          : "",
        className,
      )}
    >
      {children || label}
    </span>
  );
}
