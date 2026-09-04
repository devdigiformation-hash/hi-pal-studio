const ITEMS = [
  "Digi AI · Digi Code · Digi CRM",
  "Digi Studio · Digi CLI · Digi MCP",
  "Digi Flow · Digi Marketing · Digi Connectors",
  "Live Tracking 30-Event Audit",
  "Business Knowledge Base · Accounts P&L",
  "Screen Vision & Camera Stream",
  "Multi-Agent Parallel Execution",
  "Universal MCP Protocol Client",
  "Offline Video Editor & Talking Avatar",
  "Multilingual Voice TTS & Audiobooks",
  "Always-On Business Rules",
  "Live Transcripts & Speech-to-Text",
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
