import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  text: string;
  color?: string;
  className?: string;
}

export default function EyebrowLabel({ text, color = "var(--cyan)", className }: EyebrowLabelProps) {
  return (
    <span
      style={{ color, letterSpacing: "0.16em" }}
      className={cn(
        "reveal-item inline-block font-display text-[12px] font-semibold uppercase",
        className,
      )}
    >
      {text}
    </span>
  );
}