import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMouseGlow } from "@/hooks/use-mouse-glow";

interface GlassCardProps {
  children: ReactNode;
  glowColor?: string;
  className?: string;
}

export default function GlassCard({ children, glowColor = "var(--cyan)", className }: GlassCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useMouseGlow<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={
        {
          background: "var(--bg-glass)",
          borderRadius: "var(--r-lg)",
          boxShadow: "var(--shadow-glass)",
          backdropFilter: "blur(24px) saturate(180%)",
          "--glass-glow": glowColor,
          "--mouse-x": "50%",
          "--mouse-y": "-20%",
        } as React.CSSProperties
      }
      className={cn(
        "group relative overflow-hidden border border-[var(--border-glass)] p-6",
        "transition-all duration-[350ms] ease-out",
        "hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[var(--glow-cyan)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), color-mix(in oklab, var(--glass-glow) 14%, transparent), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}