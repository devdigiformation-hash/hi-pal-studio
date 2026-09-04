import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function GradientText({
  children,
  text,
  from = "#2FE0C8",
  via,
  to = "#8B7CF6",
  gradient,
  className,
}: {
  children?: ReactNode;
  text?: string;
  from?: string;
  via?: string;
  to?: string;
  gradient?: string;
  className?: string;
}) {
  const bg =
    gradient ||
    (via
      ? `linear-gradient(120deg, ${from}, ${via}, ${to})`
      : `linear-gradient(120deg, ${from}, ${to}, ${from})`);

  return (
    <span
      className={cn("animate-gradient-shift bg-clip-text text-transparent", className)}
      style={{ backgroundImage: bg }}
    >
      {children || text}
    </span>
  );
}
