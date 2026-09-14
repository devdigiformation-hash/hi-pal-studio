import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMouseGlow } from "@/hooks/use-mouse-glow";

interface GlassCardProps {
  children: ReactNode;
  glowColor?: string;
  className?: string;
  style?: CSSProperties;
}

export default function GlassCard({
  children,
  glowColor = "var(--cyan)",
  className,
  style,
}: GlassCardProps) {
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
          backdropFilter: "blur(28px) saturate(190%) contrast(102%)",
          WebkitBackdropFilter: "blur(28px) saturate(190%) contrast(102%)",
          "--glass-glow": glowColor,
          "--mouse-x": "50%",
          "--mouse-y": "-20%",
          ...style,
        } as CSSProperties
      }
      className={cn(
        "group relative overflow-hidden border border-white/[0.12] p-6",
        "transition-all duration-[350ms] cubic-bezier(0.16, 1, 0.3, 1)",
        "hover:-translate-y-1 hover:border-white/[0.28] hover:shadow-[var(--shadow-glass-elevated)]",
        className,
      )}
    >
      {/* iOS 18 Specular Top-Edge Refraction Highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/45 to-transparent transition-opacity duration-300 group-hover:via-white/80 z-20"
      />

      {/* Liquid Glass Internal Refraction Sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-black/20 pointer-events-none z-10"
      />

      {/* Dynamic Cursor Specular Glare */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          background:
            "radial-gradient(circle 320px at var(--mouse-x) var(--mouse-y), color-mix(in oklab, var(--glass-glow) 18%, rgba(255,255,255,0.12)), transparent 70%)",
        }}
      />

      <div className="relative z-20">{children}</div>
    </div>
  );
}
