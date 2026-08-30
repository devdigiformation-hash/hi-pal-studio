import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function MonoBadge({
  children,
  className,
  color = "var(--cyan)",
}: {
  children: ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <span
      style={{ color, background: "var(--bg-glass-light)", borderRadius: "var(--r-pill)" }}
      className={cn(
        "inline-flex items-center gap-2 border border-[var(--border-glass)] px-3 py-1 font-code text-[12px] font-medium tracking-tight backdrop-blur-md",
        className,
      )}
    >
      {children}
    </span>
  );
}
