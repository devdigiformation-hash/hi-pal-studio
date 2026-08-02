import { motion } from "framer-motion";
import CyanButton from "@/components/CyanButton";
import { WindowsIcon, AppleIcon, LinuxIcon, MobileIcon } from "@/components/PlatformIcons";

const SOON = [
  // Apple silver-grey
  { icon: <AppleIcon size={16} />, tone: "216,220,228", label: "macOS" },
  // Linux / Tux gold-amber
  { icon: <LinuxIcon size={16} />, tone: "246,193,54", label: "Linux" },
  // Android green
  { icon: <MobileIcon size={16} />, tone: "61,220,132", label: "Mobile" },
];

export default function PlatformStrip() {
  return (
    <div className="grid w-full max-w-[560px] grid-cols-3 items-stretch gap-2 sm:flex sm:max-w-none sm:flex-wrap sm:items-center sm:gap-3">
      {SOON.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.95 + i * 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full min-w-0 sm:w-auto">
            <CyanButton
              size="sm"
              tone={item.tone}
              icon={item.icon}
              aria-disabled
              onClick={(e) => e.preventDefault()}
              className="w-full min-w-0 cursor-not-allowed px-2 text-[11px] sm:w-auto sm:px-5 sm:text-[13px]"
            >
              <span className="hidden sm:inline">Download for </span>
              {item.label}
            </CyanButton>
            <span
              className="pointer-events-none absolute -top-1.5 -right-1.5 rounded-full border px-1.5 py-[1px] font-mono text-[8px] uppercase tracking-[0.14em] backdrop-blur-md"
              style={{
                color: `rgb(${item.tone})`,
                borderColor: `rgba(${item.tone},0.4)`,
                background: `rgba(${item.tone},0.12)`,
              }}
            >
              Coming Soon
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
