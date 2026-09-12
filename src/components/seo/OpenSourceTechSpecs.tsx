import { Cpu, HardDrive, Monitor, Layers, ShieldCheck, Terminal } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import EyebrowLabel from "@/components/EyebrowLabel";
import { SystemRequirements } from "@/content/open-source-subpages";

interface OpenSourceTechSpecsProps {
  toolName: string;
  requirements: SystemRequirements;
  privacy: string;
}

export default function OpenSourceTechSpecs({
  toolName,
  requirements,
  privacy,
}: OpenSourceTechSpecsProps) {
  const specs = [
    {
      icon: Monitor,
      label: "Supported OS",
      value: requirements.os,
      color: "var(--cyan)",
    },
    {
      icon: Cpu,
      label: "Processor (CPU)",
      value: requirements.cpu,
      color: "#3B82F6",
    },
    {
      icon: Layers,
      label: "System RAM",
      value: requirements.ram,
      color: "#F59E0B",
    },
    {
      icon: HardDrive,
      label: "GPU & Acceleration",
      value: requirements.gpu,
      color: "#EC4899",
    },
    {
      icon: HardDrive,
      label: "Storage Footprint",
      value: requirements.storage,
      color: "#10B981",
    },
    {
      icon: Terminal,
      label: "Runtime / Setup",
      value: requirements.runtime,
      color: "#8B5CF6",
    },
  ];

  return (
    <section className="py-12 border-t border-white/10">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <EyebrowLabel text="Hardware & Software Compatibility" color="#3B82F6" />
            <h2 className="mt-3 font-display text-[24px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[30px]">
              System Requirements & Technical Specs
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-[12px] text-emerald-400 self-start sm:self-auto">
            <ShieldCheck size={15} />
            <span>Execution Mode: {privacy}</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <GlassCard key={i} glowColor={spec.color} className="p-4 flex items-start gap-3.5">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${spec.color}15`, border: `1px solid ${spec.color}30` }}
                >
                  <Icon size={18} style={{ color: spec.color }} />
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                    {spec.label}
                  </p>
                  <p className="mt-1 font-body text-[13.5px] font-medium text-[var(--text-primary)] leading-snug">
                    {spec.value}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
