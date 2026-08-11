import { Briefcase, Building2, Terminal, type LucideIcon } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";

const CASES: { icon: LucideIcon; color: string; title: string; body: string; chain: string[] }[] = [
  {
    icon: Briefcase,
    color: "var(--cyan)",
    title: "Founders & Business Leaders",
    body: "Voice-command your workstation while multitasking. Automate WhatsApp customer replies, draft emails, and run business research hands-free.",
    chain: ["Voice", "Agent", "WhatsApp/Email"],
  },
  {
    icon: Terminal,
    color: "var(--purple)",
    title: "Developers & Engineers",
    body: "A coding workspace with repo and branch context, 40+ MCP servers, local CLI runners, 500+ skills and 150+ desktop tools — all reachable by voice.",
    chain: ["Voice", "Digi Code", "CLI Runners", "Ship"],
  },
  {
    icon: Building2,
    color: "var(--amber)",
    title: "Research & Operations Teams",
    body: "Research the web, parse PDFs, run OCR, compare documents and compile ready-to-send reports — all from a single spoken brief, fully on your machine.",
    chain: ["Voice", "Research", "Digi Docs", "Report"],
  },
];

export default function UseCases() {
  return (
    <SectionWrapper id="use-cases">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="Real World Impact" color="var(--pink)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Built for Winners. <GradientText>Not Browsers.</GradientText>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {CASES.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className={`reveal-item delay-${i + 1}`}>
                <GlassCard glowColor={c.color} className="h-full p-8">
                  <Icon size={40} color={c.color} strokeWidth={1.4} />
                  <h3 className="mt-5 font-display text-[20px] font-bold text-[var(--text-primary)]">
                    {c.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                    {c.body}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-2 font-code text-[12px] text-[var(--text-muted)]">
                    {c.chain.map((step, s) => (
                      <span key={step} className="flex items-center gap-2">
                        <span style={{ color: c.color }}>{step}</span>
                        {s < c.chain.length - 1 ? <span>→</span> : null}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
