const PARTICLE_COLORS = ["#2FE0C8", "#8B7CF6", "#F5A623"];

const particles = Array.from({ length: 24 }, (_, i) => ({
  left: `${(i * 37) % 97}%`,
  top: `${(i * 61) % 93}%`,
  size: 2 + (i % 3),
  color: PARTICLE_COLORS[i % 3],
  duration: 15 + ((i * 7) % 16),
  delay: (i * 0.42) % 10,
}));

export default function GlobalBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1 — base gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(47,224,200,0.08), transparent), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(139,124,246,0.06), transparent), #090D16",
        }}
      />

      {/* Layer 2 — animated noise texture */}
      <svg className="animate-noise-flicker absolute inset-0 h-full w-full opacity-[0.03]">
        <filter id="digibiz-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#digibiz-noise)" />
      </svg>

      {/* Layer 3 — floating particle field (desktop only) */}
      <div className="hidden md:block">
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              background: p.color,
              opacity: 0.2,
              animation: `particleDrift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Layer 4 — scan line */}
      <div className="animate-scan-line absolute inset-x-0 top-0 hidden h-px bg-white opacity-[0.02] md:block" />
    </div>
  );
}