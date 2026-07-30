import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NodeCardProps {
  icon: LucideIcon;
  label: string;
  color?: string;
  glowColor?: string;
  delay?: number;
  className?: string;
}

export default function NodeCard({
  icon: Icon,
  label,
  color = "var(--cyan)",
  glowColor = "var(--cyan-glow)",
  delay = 0,
  className,
}: NodeCardProps) {
  return (
    <div className={cn("group flex w-[104px] flex-col items-center gap-3 text-center", className)}>
      <div
        style={{
          animationDelay: `${delay}s`,
          background: "var(--bg-glass)",
          borderColor: "var(--border-glass)",
          boxShadow: `0 0 32px ${glowColor}`,
        }}
        className="animate-float flex h-20 w-20 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 group-hover:scale-110"
      >
        <Icon size={28} color={color} strokeWidth={1.6} />
      </div>
      <span className="font-display text-[13px] font-medium text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]">
        {label}
      </span>
    </div>
  );
}