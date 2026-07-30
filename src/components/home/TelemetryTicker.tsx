const ITEMS = [
  "115+ Built-in Tools",
  "94 Desktop & Browser Tools",
  "27 Autonomous Sub-Agents",
  "<200ms Voice Stream Latency",
  "6 AI Model Providers",
  "46 Playwright Browser Tools",
  "52 Hermes CLI Skills",
  "Real-Time Screen Vision",
  "Companies House API",
  "WhatsApp · Email · Discord",
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
