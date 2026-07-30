import { cn } from "@/lib/utils";

export default function ActivePulse({
  className,
  color = "var(--pulse-active)",
  size = 8,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size, background: color }}
      className={cn("inline-block shrink-0 rounded-full animate-glow-pulse", className)}
    />
  );
}