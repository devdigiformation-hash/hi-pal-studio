const ITEMS = [
  "115+ Built-in Tools",
  "500+ AI Skills",
  "10+ Autonomous Sub-Agents",
  "<200ms Voice Stream Latency",
  "Multi-MCP Ready",
  "Browser Automation Built In",
  "Professional CLI Workspace",
  "Screen Sharing & Camera",
  "Folder & Document Intelligence",
  "WhatsApp · Email · Discord",
];

export default function TelemetryTicker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div
      className="group relative h-[60px] w-full max-w-full overflow-hidden"
      style={{
        background: "var(--bg-surface)",
        borderTop: "1px solid rgba(47,224,200,0.15)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="marquee-mask relative h-full w-full overflow-hidden">
        <div className="animate-marquee absolute left-0 top-0 flex h-full w-max shrink-0 items-center group-hover:[animation-play-state:paused]">
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
