import { useEffect, useRef, useState } from "react";
import robotImg from "@/assets/jarvis-robot.png";

export const AIJarvis = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const nx = (e.clientX - (r.left + r.width / 2)) / r.width;
      const ny = (e.clientY - (r.top + r.height / 2)) / r.height;
      setTilt({ x: Math.max(-1, Math.min(1, nx)), y: Math.max(-1, Math.min(1, ny)) });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="jarvis-canvas-container relative mx-auto flex h-[420px] w-full items-center justify-center overflow-hidden rounded-[20px] border border-[var(--border-soft,rgba(255,255,255,0.08))] md:h-[600px]"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 20%, rgba(47,224,200,0.16) 0%, rgba(139,124,246,0.12) 40%, rgba(7,11,20,0.98) 78%)",
        perspective: "1200px",
      }}
      aria-label="Animated AI Jarvis robot"
    >
      {/* glow rings */}
      <div
        className="pointer-events-none absolute h-[320px] w-[320px] rounded-full opacity-70 blur-3xl md:h-[460px] md:w-[460px]"
        style={{ background: "radial-gradient(circle, rgba(47,224,200,0.35), transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute h-[240px] w-[240px] animate-pulse rounded-full border border-[rgba(47,224,200,0.25)] md:h-[380px] md:w-[380px]"
      />

      <img
        src={robotImg}
        alt="JARVIS AI robot"
        className="relative z-10 h-[85%] w-auto max-w-[90%] object-contain drop-shadow-[0_0_45px_rgba(47,224,200,0.35)]"
        style={{
          transform: `translate3d(${tilt.x * 18}px, ${tilt.y * 10}px, 0) rotateY(${tilt.x * 12}deg) rotateX(${-tilt.y * 8}deg)`,
          transition: "transform 400ms cubic-bezier(0.22,1,0.36,1)",
          animation: "jarvis-float 6s ease-in-out infinite",
        }}
        loading="lazy"
      />

      <style>{`
        @keyframes jarvis-float {
          0%, 100% { margin-top: 0px; }
          50% { margin-top: -18px; }
        }
      `}</style>
    </div>
  );
};
