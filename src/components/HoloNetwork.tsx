import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number; phase: number };

/**
 * Holographic constellation network — soft, subtle background only.
 * Nodes drift slowly and link with thin, low-opacity lines when close.
 */
export default function HoloNetwork() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: Node[] = [];

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Lower density for a cleaner, less cluttered look
      const density = w < 768 ? 42000 : 24000;
      const count = Math.min(90, Math.max(20, Math.round((w * h) / density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 0.9 + 0.4,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const linkDist = () => (w < 768 ? 85 : 120);

    const draw = (time = 0) => {
      ctx.clearRect(0, 0, w, h);
      const max = linkDist();

      // Draw links first (behind nodes)
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d > max || d < 0.1) continue;
          const t = 1 - d / max;
          ctx.strokeStyle = `rgba(120, 205, 235, ${t * 0.12})`;
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Draw nodes with soft glow
      for (const n of nodes) {
        const pulse = 0.55 + Math.sin(time * 0.001 + n.phase) * 0.25;
        const glow = n.r * 2.5;

        // Soft glow
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, glow);
        g.addColorStop(0, `rgba(170, 235, 250, ${pulse * 0.35})`);
        g.addColorStop(1, "rgba(170, 235, 250, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(n.x, n.y, glow, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(200, 245, 255, ${pulse * 0.65})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = (time: number) => {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }
      draw(time);
      raf = requestAnimationFrame(step);
    };

    build();
    if (reduced) {
      draw(0);
    } else {
      raf = requestAnimationFrame(step);
    }

    const onResize = () => {
      build();
      draw(0);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}
