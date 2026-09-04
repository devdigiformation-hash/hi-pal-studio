import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import CyanButton from "@/components/CyanButton";
import { WindowsIcon, AppleIcon, LinuxIcon, MobileIcon } from "@/components/PlatformIcons";

function ComingSoonBadge({ color }: { color?: string }) {
  return (
    <div className="mt-auto flex items-center justify-center rounded-[var(--r-md)] border border-dashed border-[var(--border-glass)] py-3">
      <MonoBadge color={color}>Coming Soon</MonoBadge>
    </div>
  );
}

function CardHead({
  icon,
  color,
  title,
  sub,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="shrink-0" style={{ color }}>
        {icon}
      </span>
      <div className="min-w-0">
        <h3 className="truncate font-display text-[17px] font-bold text-[var(--text-primary)]">
          {title}
        </h3>
        <p className="font-mono text-[11px] leading-[1.5] text-[var(--text-muted)]">{sub}</p>
      </div>
    </div>
  );
}

export default function PlatformCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <GlassCard
        className="flex h-full flex-col border-[var(--cyan-border)] p-6 text-left"
        glowColor="var(--cyan)"
      >
        <CardHead
          icon={<WindowsIcon size={24} />}
          color="var(--cyan)"
          title="Windows"
          sub="Windows 10 & 11"
        />
        <p className="mt-4 mb-6 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
          The full DIGI BIZ OS desktop build — voice control, built-in desktop automation tools and AI
          agents, available today.
        </p>
        <div className="mt-auto">
          <CyanButton className="w-full !px-4 text-[13px]" icon={<WindowsIcon size={15} />}>
            Download
          </CyanButton>
        </div>
      </GlassCard>

      <GlassCard
        className="flex h-full flex-col p-6 text-left opacity-90"
        glowColor="var(--purple)"
      >
        <CardHead
          icon={<AppleIcon size={24} />}
          color="var(--purple)"
          title="macOS"
          sub="Apple Silicon & Intel"
        />
        <p className="mt-4 mb-6 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
          The macOS edition is on the way with the same voice-first execution. Join the waitlist to
          get it first.
        </p>
        <ComingSoonBadge color="var(--purple)" />
      </GlassCard>

      <GlassCard className="flex h-full flex-col p-6 text-left opacity-90" glowColor="var(--green)">
        <CardHead
          icon={<LinuxIcon size={24} />}
          color="var(--green)"
          title="Linux"
          sub="Ubuntu · Debian · Fedora"
        />
        <p className="mt-4 mb-6 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
          A Linux edition is on the roadmap for power users and always-on business machines.
        </p>
        <ComingSoonBadge color="var(--green)" />
      </GlassCard>

      <GlassCard
        className="flex h-full flex-col p-6 text-left opacity-90"
        glowColor="var(--orange)"
      >
        <CardHead
          icon={<MobileIcon size={24} />}
          color="var(--orange)"
          title="Mobile"
          sub="iOS & Android"
        />
        <p className="mt-4 mb-6 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
          A companion mobile app for remote voice commands, notifications and agent status is coming
          later this year.
        </p>
        <ComingSoonBadge color="var(--orange)" />
      </GlassCard>
    </div>
  );
}
