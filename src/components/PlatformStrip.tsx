import { motion } from "framer-motion";
import CyanButton from "@/components/CyanButton";
import { WindowsIcon, AppleIcon, LinuxIcon, MobileIcon } from "@/components/PlatformIcons";

const SOON = [
  // Apple silver-grey
  { icon: <AppleIcon size={15} />, tone: "216,220,228", label: "macOS" },
  // Linux / Tux gold-amber
  { icon: <LinuxIcon size={15} />, tone: "246,193,54", label: "Linux" },
  // Android green
  { icon: <MobileIcon size={15} />, tone: "61,220,132", label: "Mobile" },
];

export default function PlatformStrip() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {SOON.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.95 + i * 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <CyanButton
            size="sm"
            tone={item.tone}
            icon={item.icon}
            disabled
            className="cursor-not-allowed"
          >
            {item.label} · Coming Soon
          </CyanButton>
        </motion.div>
      ))}
    </div>
  );
}
