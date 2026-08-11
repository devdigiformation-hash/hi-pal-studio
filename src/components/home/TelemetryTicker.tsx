const ITEMS = [
  "Digi AI · Digi Code · Digi Docs",
  "Digi Tools · Digi Flow · Digi Jobs",
  "Digi Tasks · Digi Office",
  "Live Tracking",
  "Memory · Soul · Skills",
  "Screen Sharing & Camera",
  "Multi Agents & Tools",
  "150+ Desktop Tools",
  "500+ AI Skills",
  "Live Bilingual Transcript",
  "Multi-MCP Ready",
  "Mobile Companion",
];

export default function TelemetryTicker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div
      className="group relative h-[60px] overflow-hidden"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid rgba(47,224,200,0.15)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="marquee-mask flex h-full items-center">
        <div className="animate-marquee flex w-max shrink-0 items-center group-hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <span key={i} className="flex items-center whitespace-nowrap">
              <span className="font-display text-[13px] font-semibold text-[var(--text-secondary)]">
                {item}
              </span>
              <span className="mx-5 text-[10px] text-[var(--cyan)]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
