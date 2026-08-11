import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import {
  Code2,
  Settings,
  Workflow,
  Rocket,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";

const PERKS = [
  {
    icon: Code2,
    color: "var(--cyan)",
    title: "Complete Source Code",
    body: "Desktop app, agent engine and automation core — every line delivered to you.",
  },
  {
    icon: Settings,
    color: "var(--purple)",
    title: "Customise Everything",
    body: "Rebrand screens, rewrite workflows and tune the AI to match your business exactly.",
  },
  {
    icon: Workflow,
    color: "var(--amber)",
    title: "Automate A to Z",
    body: "Connect your tools, build cron jobs and let agents run your operations hands-free.",
  },
  {
    icon: Rocket,
    color: "#F472B6",
    title: "Ship as Your Product",
    body: "Build signed installers, add your licence and sell your own branded AI OS.",
  },
  {
    icon: ShieldCheck,
    color: "#7DD3FC",
    title: "Full Commercial Rights",
    body: "Resale is included. Use it for one client or ship it to thousands — no royalties.",
  },
  {
    icon: RefreshCw,
    color: "#3DDC84",
    title: "12 Months of Updates",
    body: "Pull new features, fixes and improvements for a full year after purchase.",
  },
];

export default function SourceCodeSection() {
  return (
    <SectionWrapper id="source-code" className="bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left copy */}
          <div>
            <EyebrowLabel text="Full Ownership" color="var(--purple)" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
              Own the Code.{" "}
              <GradientText from="#8B7CF6" to="#2FE0C8">
                Build Your Empire.
              </GradientText>
            </h2>
            <p className="reveal-item delay-2 mt-5 font-body text-[16px] leading-[1.8] text-[var(--text-secondary)] md:text-[17px]">
              Buy the full source code licence and rebuild DIGI BIZ OS around your business.
              Change the brand, add your own modules, wire in your services and let agents run
              your entire operation — from first task to final delivery.
            </p>

            <div className="reveal-item delay-3 mt-8 flex flex-wrap items-center gap-4">
              <Link to="/checkout" search={{ plan: "source_code" }}>
                <CyanButton size="lg">Buy Source Code — £99</CyanButton>
              </Link>
              <span className="font-body text-[13px] text-[var(--text-muted)]">
                One-time payment · Full commercial rights
              </span>
            </div>
          </div>

          {/* Right cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PERKS.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 22, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    delay: (i % 2) * 0.1 + Math.floor(i / 2) * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <GlassCard glowColor={perk.color} className="h-full p-5">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-lg border"
                      style={{
                        borderColor: `${perk.color}44`,
                        background: `${perk.color}14`,
                      }}
                    >
                      <Icon size={17} color={perk.color} strokeWidth={1.6} />
                    </div>
                    <h3 className="mt-4 font-display text-[15px] font-bold text-[var(--text-primary)]">
                      {perk.title}
                    </h3>
                    <p className="mt-2 font-body text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                      {perk.body}
                    </p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
