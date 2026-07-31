import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, FileText, ScrollText, Square } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import ActivePulse from "@/components/ActivePulse";

const STREAM: { label: string; detail: string; color: string }[] = [
  { label: "Task received", detail: "“Prepare this week’s client report”", color: "var(--cyan)" },
  { label: "Plan created", detail: "6 steps · 3 agents assigned", color: "var(--purple)" },
  { label: "Research agent", detail: "Gathering data · 4 sources", color: "var(--amber)" },
  { label: "Writer agent", detail: "Drafting summary · 1,240 words", color: "#7DD3FC" },
  { label: "Review agent", detail: "Fact-check passed · 0 issues", color: "#F472B6" },
  { label: "File created", detail: "client-report.pdf saved", color: "#3DDC84" },
  { label: "Delivered", detail: "Sent to the client inbox", color: "var(--cyan)" },
];

const CAPS = [
  { icon: Activity, title: "Inline Live Tracker", body: "Watch every command, tool call and agent action stream in real time — nothing hidden behind a spinner." },
  { icon: Square, title: "Start / Stop Control", body: "Pause or stop any run mid-flight. You stay in command of what executes and when." },
  { icon: ScrollText, title: "Full Activity Logs", body: "Every run is logged step by step, so you can revisit exactly what happened and why." },
  { icon: FileText, title: "Exportable Reports", body: "Turn any run into a shareable record for your team, your client or your audit trail." },
];

export default function LiveTrackingSection() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s >= STREAM.length ? 1 : s + 1)), 1400);
    return () => clearInterval(t);
  }, []);

  return (
    <SectionWrapper id="live-tracking">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="End-to-End Transparency" color="#3DDC84" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            See Every Step. <GradientText from="#3DDC84" to="#2FE0C8">As It Happens.</GradientText>
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-5 max-w-[720px] font-body text-[16px] leading-[1.8] text-[var(--text-secondary)] md:text-[17px]">
            No black box. A live inline tracker shows each tool, each command and each agent action
            end to end — with start, stop and a complete log for every run.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr]">
          <GlassCard glowColor="#3DDC84" className="reveal-item delay-2 overflow-hidden p-0">
            <div className="flex items-center justify-between border-b border-[var(--border-glass)] px-5 py-3">
              <div className="flex items-center gap-2">
                <ActivePulse />
                <span className="font-code text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Live Activity Tracker
                </span>
              </div>
              <span className="font-code text-[11px] text-[#3DDC84]">RUNNING</span>
            </div>

            <div className="space-y-2 p-5">
              {STREAM.map((row, i) => {
                const active = i === step - 1;
                const done = i < step - 1;
                return (
                  <motion.div
                    key={row.label}
                    animate={{ opacity: done || active ? 1 : 0.28, x: active ? 4 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex items-start gap-3 rounded-xl border px-4 py-3"
                    style={{
                      borderColor: active ? `${row.color}55` : "var(--border-glass)",
                      background: active ? `${row.color}12` : "transparent",
                    }}
                  >
                    <span
                      className="mt-[6px] h-2 w-2 shrink-0 rounded-full"
                      style={{
                        background: row.color,
                        boxShadow: active ? `0 0 12px ${row.color}` : "none",
                      }}
                    />
                    <div className="min-w-0">
                      <div className="font-code text-[12px]" style={{ color: row.color }}>
                        {row.label}
                      </div>
                      <div className="font-body text-[13px] text-[var(--text-secondary)]">
                        {row.detail}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CAPS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <GlassCard className="h-full p-6">
                    <Icon size={20} className="text-[var(--cyan)]" strokeWidth={1.6} />
                    <h3 className="mt-4 font-display text-[16px] font-bold text-[var(--text-primary)]">
                      {c.title}
                    </h3>
                    <p className="mt-2 font-body text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                      {c.body}
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
