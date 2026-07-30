import { useEffect, useRef } from "react";

interface JupiterGlobeProps {
  /** Rendered size in px (CSS). */
  size?: number;
  className?: string;
}

const POINTS = 2200;

/**
 * Canvas particle sphere — dense dot globe that rotates on its own axis
 * with depth-faded particles and a soft teal bloom.
 */
export default function JupiterGlobe({ size = 300, className }: JupiterGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = size;
    const h = size;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const pts: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < POINTS; i++) {
      const y = 1 - (i / (POINTS - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
    }

    const radius = w * 0.36;
    const cx = w / 2;
    const cy = h / 2;
    const sinT = Math.sin(-0.28);
    const cosT = Math.cos(-0.28);

    let raf = 0;
    let angle = 0;
    let last = performance.now();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      if (!reduced) angle += dt * 0.00016;

      ctx.clearRect(0, 0, w, h);
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const x1 = p.x * cosA - p.z * sinA;
        const z1 = p.x * sinA + p.z * cosA;
        const y2 = p.y * cosT - z1 * sinT;
        const z2 = p.y * sinT + z1 * cosT;

        const depth = (z2 + 1) / 2;
        const persp = 0.72 + depth * 0.28;
        const sx = cx + x1 * radius * persp;
        const sy = cy + y2 * radius * persp;

        const alpha = 0.04 + depth * depth * 0.42;
        const dotSize = 0.5 + depth * 1.05;
        const band = 0.72 + 0.28 * Math.abs(Math.cos(p.y * Math.PI * 3));

        ctx.fillStyle = `rgba(${Math.round(120 + depth * 60)}, ${Math.round(
          232 - depth * 12,
        )}, ${Math.round(210 + depth * 30)}, ${(alpha * band).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(sx, sy, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [size]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter:
          "drop-shadow(0 0 16px rgba(47,224,200,0.20)) drop-shadow(0 0 6px rgba(210,225,240,0.10))",
        pointerEvents: "none",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "12%",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(47,224,200,0.10), rgba(47,224,200,0.03) 55%, transparent 72%)",
        }}
      />
      <canvas ref={canvasRef} style={{ width: size, height: size, display: "block" }} />
    </div>
  );
}
