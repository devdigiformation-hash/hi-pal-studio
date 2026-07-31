import MonoBadge from "@/components/MonoBadge";
import { WindowsIcon, AppleIcon, LinuxIcon, MobileIcon } from "@/components/PlatformIcons";

const ITEMS = [
  { icon: <WindowsIcon size={20} />, color: "var(--cyan)", label: "Windows", note: "Available now" },
  { icon: <AppleIcon size={20} />, color: "var(--purple)", label: "macOS", note: "Coming Soon" },
  { icon: <LinuxIcon size={20} />, color: "var(--green)", label: "Linux", note: "Coming Soon" },
  { icon: <MobileIcon size={20} />, color: "var(--orange)", label: "Mobile", note: "Coming Soon" },
];

export default function PlatformStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {ITEMS.map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-3 rounded-[var(--r-md)] border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.08]"
          style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }}
        >
          <span className="shrink-0" style={{ color: item.color }}>
            {item.icon}
          </span>
          <div className="min-w-0">
            <div className="truncate font-display text-[14px] font-bold text-[var(--text-primary)]">
              {item.label}
            </div>
            <div className="mt-1">
              <MonoBadge color={item.color}>{item.note}</MonoBadge>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
