import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";

const ROWS: [string, boolean, boolean, boolean][] = [
  ["Native Desktop Mouse & Keyboard Control", true, false, false],
  ["Real-Time Screen & Camera Vision Stream", true, false, false],
  ["Multi Agent Concurrent Execution", true, false, false],
  ["Voice-First Zero-Latency Operation", true, false, false],
  ["Local File System Full Sovereign Access", true, false, true],
  ["Multi-Provider AI Model Routing & Free Fallback", true, true, false],
  ["Offline Video Editor & Talking Avatar AI", true, false, false],
  ["Single Knowledge Base CRM Auto-Configuration", true, false, false],
  ["Always-On Automated Business Rules", true, false, false],
  ["Universal Model Context Protocol (MCP) Client", true, true, false],
  ["WhatsApp QR 24/7 Sales Agent & Order Intake", true, false, false],
];

function Mark({ on }: { on: boolean }) {
  return on ? (
    <Check size={18} className="mx-auto text-[var(--cyan)]" />
  ) : (
    <X size={18} className="mx-auto text-[var(--text-mono)]" />
  );
}

export default function ComparisonMatrix() {
  return (
    <SectionWrapper id="comparison" className="bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <EyebrowLabel text="Why DIGI BIZ OS" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Leave Browser AI{" "}
            <GradientText from="#F5A623" to="#4DA3FF">
              in the Dust.
            </GradientText>
          </h2>
        </div>

        <div className="reveal-item delay-2 mt-14">
          <GlassCard className="overflow-x-auto p-0">
            <table className="w-full min-w-[640px] border-collapse">
              <thead>
                <tr className="border-b border-[var(--border-glass)]">
                  <th className="px-6 py-5 text-left font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Feature
                  </th>
                  <th className="px-4 py-5 text-center font-display text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--cyan)]">
                    DIGI BIZ OS
                  </th>
                  <th className="px-4 py-5 text-center font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Browser AI
                  </th>
                  <th className="px-4 py-5 text-center font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    Legacy Tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(([label, a, b, c], i) => (
                  <motion.tr
                    key={label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-[var(--border-subtle)] last:border-0"
                  >
                    <td className="px-6 py-4 font-body text-[14px] text-[var(--text-secondary)]">
                      {label}
                    </td>
                    <td className="px-4 py-4" style={{ background: "rgba(47,224,200,0.05)" }}>
                      <Mark on={a} />
                    </td>
                    <td className="px-4 py-4">
                      <Mark on={b} />
                    </td>
                    <td className="px-4 py-4">
                      <Mark on={c} />
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
