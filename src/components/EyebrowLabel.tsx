import { cn } from "@/lib/utils";

interface EyebrowLabelProps {
  text: string;
  color?: string;
  className?: string;
  reveal?: boolean;
  icon?: any;
}

export default function EyebrowLabel({
  text,
  color = "var(--cyan)",
  className,
  reveal = true,
  icon: Icon,
}: EyebrowLabelProps) {
  return (
    <span
      style={{ color, letterSpacing: "0.16em" }}
      className={cn(
        reveal ? "reveal-item" : "",
        "inline-flex items-center gap-1.5 font-display text-[12px] font-semibold uppercase",
        className,
      )}
    >
      {Icon && <Icon size={14} className="shrink-0" />}
      <span>{text}</span>
    </span>
  );
}
