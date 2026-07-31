import { motion } from "framer-motion";
import { Clock, GitBranch, Repeat, Workflow } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import MonoBadge from "@/components/MonoBadge";

const FLOW = [
  { label: "Trigger", detail: "Voice, schedule or event", color: "var(--cyan)" },
  { label: "Agents", detail: "Work split across 10+ agents", color: "var(--purple)" },
  { label: "Tools", detail: "115+ built-in tools fire", color: "var(--amber)" },
  { label: "Delivered", detail: "Report, message or file", color: "#3DDC84" },
];

const SCHEDULES = [
  { time: "07:00 · Daily", task: "Morning business briefing compiled and delivered" },
  { time: "Every 15 min", task: "New enquiries triaged, tagged and answered" },
  { time: "17:30 · Weekdays", task: "Follow-ups sent to every open lead" },
  { time: "Mon 09:00", task: "Weekly performance report generated" },
];

export default function WorkflowsSection() {
  return (
    <SectionWrapper id="workflows" className="bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="Workflows & Scheduling" color="var(--purple)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Build Unlimited Workflows. <GradientText from="#8B7CF6" to="#2FE0C8">Then Let Them Run.</GradientText>
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-5 max-w-[740px] font-body text-[16px] leading-[1.8] text-[var(--text-secondary)] md:text-[17px]">
            Turn any repeatable part of your business into an automated workflow — created in
            minutes, scheduled on a timer, and executed by your agents while you sleep.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard glowColor="var(--purple)" className="reveal-item delay-2 p-8">
            <div className="flex items-center gap-3">
              <Workflow size={20} className="text-[var(--purple)]" />
              <span className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                Anatomy of a Workflow
              </span>
            </div>

            <div className="mt-8 space-y-3">
              {FLOW.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border-glass)] bg-[var(--bg-glass-light)] px-5 py-4 backdrop-blur-md"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-code text-[12px] font-bold"
                    style={{ color: step.color, background: `${step.color}1A` }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <div
                      className="font-display text-[15px] font-bold"
                      style={{ color: step.color }}
                    >
                      {step.label}
                    </div>
                    <div className="font-body text-[13px] text-[var(--text-secondary)]">
                      {step.detail}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              <MonoBadge color="var(--purple)">
                <GitBranch size={12} /> Conditional Steps
              </MonoBadge>
              <MonoBadge color="var(--cyan)">
                <Repeat size={12} /> Reusable Templates
              </MonoBadge>
              <MonoBadge color="var(--amber)">Unlimited Workflows</MonoBadge>
            </div>
          </GlassCard>

          <GlassCard glowColor="var(--amber)" className="reveal-item delay-3 p-8">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-[var(--amber)]" />
              <span className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                Scheduled Jobs (Cron)
              </span>
            </div>
            <p className="mt-3 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
              Set it once and DIGI BIZ OS keeps the business moving on schedule — hourly, daily,
              weekly or on your own custom timing.
            </p>

            <div className="mt-6 space-y-3">
              {SCHEDULES.map((s, i) => (
                <motion.div
                  key={s.time}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
                  className="rounded-xl border border-[var(--border-glass)] bg-[var(--bg-glass-light)] px-4 py-3"
                >
                  <div className="font-code text-[11px] uppercase tracking-[0.12em] text-[var(--amber)]">
                    {s.time}
                  </div>
                  <div className="mt-1 font-body text-[13px] text-[var(--text-secondary)]">
                    {s.task}
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
