import { useEffect, useRef, useState } from "react";

interface JupiterGlobeProps {
  /** Rendered box size in CSS px. */
  size?: number;
  /** Controlled active state. Omit for uncontrolled. */
  active?: boolean;
  /** Fired when the toggle button is pressed. */
  onToggle?: (nextActive: boolean) => void;
  /** Hide the START/STOP button and standby label (pure globe). */
  hideControls?: boolean;
  className?: string;
}

const PLANET_R = 700;
const FOV = 2.85;
const TILT = 0.35;
const SPHERE_POINTS = 500;
const RING_POINTS = 900;
const CANVAS_SIZE = 1000;

const ACTIVE_SPEED = 0.006;
const STANDBY_SPEED = 0.0015;

type PointKind = "sphere" | "ring";

interface Point {
  kind: PointKind;
  x: number;
  y: number;
  z: number;
  // original untilted coordinates for banding
  by: number;
  // ring gap marker
  gap?: boolean;
}

function generatePoints(): Point[] {
  const pts: Point[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));

  // Sphere
  for (let i = 0; i < SPHERE_POINTS; i++) {
    const y = 1 - (i / (SPHERE_POINTS - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    pts.push({
      kind: "sphere",
      x: Math.cos(theta) * r,
      y,
      z: Math.sin(theta) * r,
      by: y,
    });
  }

  // Ring
  for (let i = 0; i < RING_POINTS; i++) {
    const t = i / RING_POINTS;
    const radius = 1.15 + t * (1.8 - 1.15);
    const angle = t * Math.PI * 2 * 37; // 37 loops for grain
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const y = (Math.random() - 0.5) * 0.03;
    pts.push({
      kind: "ring",
      x,
      y,
      z,
      by: y,
      gap: radius >= 1.45 && radius <= 1.55,
    });
  }

  return pts;
}

function pickColor(
  band: number,
  active: boolean,
  depth: number,
): { r: number; g: number; b: number; a: number } {
  let r = 0;
  let g = 0;
  let b = 0;

  if (active) {
    if (band > 0.8) {
      r = 180;
      g = 255;
      b = 245;
    } else if (band > 0.2) {
      r = 30;
      g = 150;
      b = 180;
    } else if (band > -0.5) {
      r = 47;
      g = 224;
      b = 200;
    } else if (band > -1.2) {
      r = 20;
      g = 100;
      b = 140;
    } else {
      r = 10;
      g = 70;
      b = 100;
    }
  } else {
    if (band > 0.8) {
      r = 74;
      g = 222;
      b = 170;
    } else if (band > 0.2) {
      r = 52;
      g = 211;
      b = 153;
    } else if (band > -0.5) {
      r = 16;
      g = 185;
      b = 129;
    } else if (band > -1.2) {
      r = 4;
      g = 120;
      b = 87;
    } else {
      r = 2;
      g = 80;
      b = 60;
    }
  }

  const alpha = 0.1 + depth * depth * 0.9;
  return { r, g, b, a: Math.min(1, Math.max(0.1, alpha)) };
}

export default function JupiterGlobe({
  size = 380,
  active: activeProp,
  onToggle,
  hideControls = false,
  className,
}: JupiterGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [internalActive, setInternalActive] = useState(false);
  const active = activeProp ?? internalActive;
  const setActive = (v: boolean) => {
    if (activeProp === undefined) setInternalActive(v);
    onToggle?.(v);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    const points = generatePoints();
    const sinT = Math.sin(TILT);
    const cosT = Math.cos(TILT);

    let raf = 0;
    let angle = 0;
    let last = performance.now();
    let hue = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cx = CANVAS_SIZE / 2;
    const cy = CANVAS_SIZE / 2;

    const projected: {
      kind: PointKind;
      x: number;
      y: number;
      depth: number;
      by: number;
      gap?: boolean;
    }[] = [];

    const render = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      const speed = active ? ACTIVE_SPEED : STANDBY_SPEED;
      if (!reduced) {
        angle += dt * speed;
        hue = (hue + dt * 0.05) % 360;
      }

      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      projected.length = 0;

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        // rotate around Y
        const x1 = p.x * cosA - p.z * sinA;
        const z1 = p.x * sinA + p.z * cosA;
        // tilt around X
        const y2 = p.y * cosT - z1 * sinT;
        const z2 = p.y * sinT + z1 * cosT;

        const pz = z2 + FOV;
        if (pz <= 0.1) continue;

        const scale = PLANET_R / pz;
        const depth = (z2 + 1) / 2;

        projected.push({
          kind: p.kind,
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          depth,
          by: p.by,
          gap: p.gap,
        });
      }

      // Painter's algorithm: back-to-front
      projected.sort((a, b) => a.depth - b.depth);

      ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      // Aura behind sphere
      const auraGrad = ctx.createRadialGradient(cx, cy, PLANET_R * 0.35, cx, cy, PLANET_R * 1.15);
      if (active) {
        auraGrad.addColorStop(0, `hsla(${hue},100%,65%,0.22)`);
        auraGrad.addColorStop(0.55, `hsla(${(hue + 40) % 360},100%,60%,0.10)`);
        auraGrad.addColorStop(1, "rgba(0,0,0,0)");
      } else {
        auraGrad.addColorStop(0, "rgba(16,185,129,0.13)");
        auraGrad.addColorStop(0.55, "rgba(4,120,87,0.06)");
        auraGrad.addColorStop(1, "rgba(0,0,0,0)");
      }
      ctx.fillStyle = auraGrad;
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const d = Math.min(1, Math.max(0.1, p.depth));

        if (p.kind === "sphere") {
          const band = Math.sin(p.by * Math.PI * 15) + Math.cos(p.by * Math.PI * 35) * 0.5;
          const color = pickColor(band, active, d);
          const dotSize = Math.max(0.1, active ? 0.6 + d * 1.8 : 0.5 + d * 1.2);

          ctx.fillStyle = `rgba(${color.r},${color.g},${color.b},${color.a.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
          ctx.fill();

          // Sparkle highlight
          if (active && d > 0.82) {
            const sparkle = (d - 0.82) * 2;
            ctx.fillStyle = `rgba(180,255,245,${sparkle.toFixed(3)})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, dotSize * 0.45, 0, Math.PI * 2);
            ctx.fill();
          }
        } else {
          // Ring
          let alpha = 0.1 + d * d * 0.9;
          if (p.gap) alpha *= 0.3;
          alpha *= 0.9; // ring opacity multiplier
          const dotSize = Math.max(0.1, active ? 0.5 + d * 1.4 : 0.4 + d * 1.0);

          // Ring color: subtle cyan/emerald based on mode
          const [rr, rg, rb] = active ? [47, 224, 200] : [16, 185, 129];
          ctx.fillStyle = `rgba(${rr},${rg},${rb},${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: size,
        height: hideControls ? size : size + 56,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        pointerEvents: hideControls ? "none" : "auto",
      }}
    >
      <style>{`
        @keyframes jupiter-breathe {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.028); filter: brightness(1.12); }
        }
        .jupiter-glow-active {
          filter: drop-shadow(0 0 40px rgba(47,224,200,0.55));
          animation: jupiter-breathe 4s ease-in-out infinite;
        }
        .jupiter-glow-standby {
          filter: drop-shadow(0 0 16px rgba(47,224,200,0.18));
        }
      `}</style>

      <div
        className={active ? "jupiter-glow-active" : "jupiter-glow-standby"}
        style={{
          width: size,
          height: size,
          transition: "filter 0.5s ease",
        }}
      >
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          style={{
            width: size,
            height: size,
            display: "block",
          }}
        />
      </div>

      {!hideControls && (
        <div
          style={{
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 10,
          }}
        >
          <button
            onClick={() => setActive(!active)}
            style={{
              padding: "8px 20px",
              borderRadius: 24,
              border: `1px solid ${active ? "rgba(255,92,92,0.35)" : "rgba(52,211,153,0.2)"}`,
              background: "rgba(10,15,20,0.8)",
              color: active ? "#FF5C5C" : "#34D399",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.08em",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(20,30,38,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(10,15,20,0.8)";
            }}
          >
            {active ? "STOP AI" : "START AI"}
          </button>

          {!active && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9,
                color: "#5C616B",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 1,
                  background: "rgba(92,97,107,0.5)",
                }}
              />
              <span>· SYSTEM STANDBY ·</span>
              <span
                style={{
                  width: 18,
                  height: 1,
                  background: "rgba(92,97,107,0.5)",
                }}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
