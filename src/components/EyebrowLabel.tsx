import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  text: string;
  color?: string;
  className?: string;
  reveal?: boolean;
}

export default function EyebrowLabel({
  text,
  color = "var(--cyan)",
  className,
  reveal = true,
}: EyebrowLabelProps) {
  return (
    <span
      style={{ color, letterSpacing: "0.16em" }}
      className={cn(
        reveal ? "reveal-item" : "",
        "inline-block font-display text-[12px] font-semibold uppercase",
        className,
      )}
    >
      {text}
    </span>
  );
}