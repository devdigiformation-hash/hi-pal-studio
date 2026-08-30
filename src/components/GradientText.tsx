import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function GradientText({
  children,
  from = "#2FE0C8",
  to = "#8B7CF6",
  className,
}: {
  children: ReactNode;
  from?: string;
  to?: string;
  className?: string;
}) {
  return (
    <span
      className={cn("animate-gradient-shift bg-clip-text text-transparent", className)}
      style={{ backgroundImage: `linear-gradient(120deg, ${from}, ${to}, ${from})` }}
    >
      {children}
    </span>
  );
}
