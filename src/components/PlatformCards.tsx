import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import CyanButton from "@/components/CyanButton";
import { WindowsIcon, AppleIcon, LinuxIcon, MobileIcon } from "@/components/PlatformIcons";

function ComingSoonBadge({ color }: { color?: string }) {
  return (
    <div className="mt-6 flex items-center justify-center rounded-[var(--r-md)] border border-dashed border-[var(--border-glass)] py-3">
      <MonoBadge color={color}>Coming Soon</MonoBadge>
    </div>
  );
}

export default function PlatformCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <GlassCard className="border-[var(--cyan-border)] p-7 text-left" glowColor="var(--cyan)">
        <div className="flex items-center gap-3">
          <span className="text-[var(--cyan)]">
            <WindowsIcon size={26} />
          </span>
          <div>
            <h3 className="font-display text-[18px] font-bold text-[var(--text-primary)]">
              Windows
            </h3>
            <p className="font-mono text-[12px] text-[var(--text-muted)]">
              Windows 10 &amp; 11 · 64-bit
            </p>
          </div>
        </div>
        <p className="mt-4 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
          The full DIGI BIZ OS desktop build — voice control, 115+ built-in tools and Agent Town,
          available today.
        </p>
        <div className="mt-6">
          <CyanButton className="w-full" icon={<WindowsIcon size={16} />}>
            Download for Windows
          </CyanButton>
        </div>
      </GlassCard>

      <GlassCard className="p-7 text-left opacity-90" glowColor="var(--purple)">
        <div className="flex items-center gap-3">
          <span className="text-[var(--purple)]">
            <AppleIcon size={26} />
          </span>
          <div>
            <h3 className="font-display text-[18px] font-bold text-[var(--text-primary)]">macOS</h3>
            <p className="font-mono text-[12px] text-[var(--text-muted)]">
              Apple Silicon &amp; Intel
            </p>
          </div>
        </div>
        <p className="mt-4 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
          The macOS edition is on the way with the same voice-first execution. Join the waitlist to
          get it first.
        </p>
        <ComingSoonBadge color="var(--purple)" />
      </GlassCard>

      <GlassCard className="p-7 text-left opacity-90" glowColor="var(--green)">
        <div className="flex items-center gap-3">
          <span className="text-[var(--green)]">
            <LinuxIcon size={26} />
          </span>
          <div>
            <h3 className="font-display text-[18px] font-bold text-[var(--text-primary)]">Linux</h3>
            <p className="font-mono text-[12px] text-[var(--text-muted)]">
              Ubuntu · Debian · Fedora
            </p>
          </div>
        </div>
        <p className="mt-4 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
          A Linux edition is on the roadmap for power users and always-on business machines.
        </p>
        <ComingSoonBadge color="var(--green)" />
      </GlassCard>

      <GlassCard className="p-7 text-left opacity-90" glowColor="var(--orange)">
        <div className="flex items-center gap-3">
          <span className="text-[var(--orange)]">
            <MobileIcon size={26} />
          </span>
          <div>
            <h3 className="font-display text-[18px] font-bold text-[var(--text-primary)]">
              Mobile App
            </h3>
            <p className="font-mono text-[12px] text-[var(--text-muted)]">
              iOS &amp; Android
            </p>
          </div>
        </div>
        <p className="mt-4 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
          A companion mobile app for remote voice commands, notifications and agent status is coming
          later this year.
        </p>
        <ComingSoonBadge color="var(--orange)" />
      </GlassCard>
    </div>
  );
}
