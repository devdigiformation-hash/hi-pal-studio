import { motion, AnimatePresence } from "framer-motion";
import MonoBadge from "@/components/MonoBadge";
import { WindowsIcon, AppleIcon, LinuxIcon, MobileIcon } from "@/components/PlatformIcons";

const WINDOWS = {
  icon: <WindowsIcon size={20} />,
  color: "var(--cyan)",
  label: "Windows",
  note: "Available now",
};

const SOON = [
  { icon: <AppleIcon size={20} />, color: "var(--purple)", label: "macOS", note: "Coming Soon" },
  { icon: <LinuxIcon size={20} />, color: "var(--green)", label: "Linux", note: "Coming Soon" },
  { icon: <MobileIcon size={20} />, color: "var(--orange)", label: "Mobile", note: "Coming Soon" },
];

type Item = typeof WINDOWS;

function Card({ item, dim }: { item: Item; dim?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-[var(--r-md)] border border-white/10 bg-white/[0.05] px-4 py-3 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.08] ${
        dim ? "cursor-not-allowed opacity-80" : ""
      }`}
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
  );
}

export default function PlatformStrip({ revealed = false }: { revealed?: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      <Card item={WINDOWS} />
      <AnimatePresence>
        {revealed
          ? SOON.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 44, scale: 0.94 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 32, scale: 0.96 }}
                transition={{ delay: i * 0.12, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card item={item} dim />
              </motion.div>
            ))
          : null}
      </AnimatePresence>
    </div>
  );
}
