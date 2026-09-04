import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  MessageSquarePlus,
  Plug,
  Sparkles,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";

const ITEMS: { icon: LucideIcon; color: string; title: string; body: string }[] = [
  {
    icon: Sparkles,
    color: "var(--cyan)",
    title: "Custom Skills",
    body: "Teach DIGI BIZ OS a new skill and reuse it forever across your business.",
  },
  {
    icon: Brain,
    color: "var(--purple)",
    title: "Custom Memories",
    body: "Store the facts, rules and preferences your AI should never forget.",
  },
  {
    icon: Wrench,
    color: "var(--amber)",
    title: "Custom Tools",
    body: "Add your own tools on top of the 200+ built-in ones already included.",
  },
  {
    icon: Users,
    color: "#F472B6",
    title: "Custom Agents",
    body: "Start with multi agents and create as many specialists as your work needs.",
  },
  {
    icon: Workflow,
    color: "#7DD3FC",
    title: "Custom Workflows",
    body: "Chain steps into an automation and launch it by voice or on schedule.",
  },
  {
    icon: Clock,
    color: "#3DDC84",
    title: "Cron Jobs",
    body: "Schedule anything to run hourly, daily or weekly — fully hands-off.",
  },
  {
    icon: Plug,
    color: "#A855F7",
    title: "Connected Services",
    body: "Plug in the platforms your business already runs on, no technical setup.",
  },
  {
    icon: MessageSquarePlus,
    color: "var(--cyan)",
    title: "Custom Prompts",
    body: "Save your best instructions as one-tap commands for the whole team.",
  },
];

export default function BuildYourOwn() {
  return (
    <SectionWrapper id="build-your-own" className="bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="Fully Extensible" color="var(--amber)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Your Rules.{" "}
            <GradientText from="#F5A623" to="#8B7CF6">
              Your AI. Your Way.
            </GradientText>
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-5 max-w-[760px] font-body text-[16px] leading-[1.8] text-[var(--text-secondary)] md:text-[17px]">
            DIGI BIZ OS ships ready to work — and grows with you. Skills, memories, tools, agents,
            workflows and schedules are all created directly inside the app. No developers, no
            waiting, no extra licences.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: (i % 4) * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard glowColor={item.color} className="h-full p-6">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl border"
                    style={{ borderColor: `${item.color}44`, background: `${item.color}14` }}
                  >
                    <Icon size={18} color={item.color} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-4 font-display text-[16px] font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                    {item.body}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
