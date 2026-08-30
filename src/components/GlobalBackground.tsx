import HoloNetwork from "./HoloNetwork";

export default function GlobalBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1 — deep holographic atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 15% 0%, rgba(30,110,170,0.18), transparent 62%), radial-gradient(ellipse 70% 60% at 85% 15%, rgba(47,224,200,0.06), transparent 60%), radial-gradient(ellipse 80% 60% at 60% 110%, rgba(139,124,246,0.06), transparent 65%), #04070E",
        }}
      />

      {/* Layer 2 — drifting nebula haze */}
      <div
        className="animate-holo-drift absolute -inset-[20%]"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(60,150,220,0.08), transparent 45%), radial-gradient(circle at 70% 65%, rgba(47,224,200,0.05), transparent 45%)",
          filter: "blur(40px)",
        }}
      />

      {/* Layer 3 — holographic grid (subtle) */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,200,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(120,200,235,0.06) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black, transparent 80%)",
        }}
      />

      {/* Layer 4 — animated constellation network */}
      <HoloNetwork />

      {/* Layer 6 — grain */}
      <svg className="animate-noise-flicker absolute inset-0 h-full w-full opacity-[0.03]">
        <filter id="digibiz-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#digibiz-noise)" />
      </svg>

      {/* Layer 7 — vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 55%, rgba(2,4,8,0.55))",
        }}
      />
    </div>
  );
}
