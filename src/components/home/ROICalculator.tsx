import { useMemo, useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import CyanButton from "@/components/CyanButton";
import GradientText from "@/components/GradientText";

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  prefix = "",
  suffix = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-body text-[14px] text-[var(--text-secondary)]">{label}</span>
        <span className="font-code text-[14px] text-[var(--cyan)]">
          {prefix}
          {value}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full accent-[var(--cyan)]"
        style={{ background: "rgba(47,224,200,0.25)" }}
      />
    </div>
  );
}

export default function ROICalculator() {
  const [hours, setHours] = useState(3);
  const [team, setTeam] = useState(1);
  const [rate, setRate] = useState(75);

  const { weekly, monthly, annual } = useMemo(() => {
    const savedPerDay = hours * 0.65;
    const weeklyHours = savedPerDay * 5 * team;
    const monthlyValue = weeklyHours * 4.33 * rate;
    return {
      weekly: Math.round(weeklyHours),
      monthly: Math.round(monthlyValue),
      annual: Math.round(monthlyValue * 12),
    };
  }, [hours, team, rate]);

  const fmt = (n: number) => n.toLocaleString("en-GB");

  return (
    <SectionWrapper id="roi" className="bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[900px]">
        <div className="text-center">
          <EyebrowLabel text="Calculate Your ROI" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Calculate Your <GradientText>Time Empire.</GradientText>
          </h2>
        </div>

        <div className="reveal-item delay-2 mx-auto mt-12 max-w-[700px]">
          <GlassCard className="p-8">
            <div className="space-y-7">
              <Slider
                label="Hours spent on repetitive desktop tasks / day"
                value={hours}
                min={1}
                max={8}
                suffix=" hrs"
                onChange={setHours}
              />
              <Slider
                label="Number of team members using DIGI BIZ OS"
                value={team}
                min={1}
                max={20}
                onChange={setTeam}
              />
              <Slider
                label="Average hourly value of your time"
                value={rate}
                min={10}
                max={500}
                step={5}
                prefix="£"
                onChange={setRate}
              />
            </div>

            <div className="mt-9 grid grid-cols-1 gap-4 border-t border-[var(--border-glass)] pt-8 sm:grid-cols-3">
              <div>
                <div className="font-body text-[12px] text-[var(--text-muted)]">
                  Hours saved / week
                </div>
                <div
                  key={weekly}
                  className="animate-counter-roll font-code text-[26px] text-[var(--cyan)]"
                >
                  {weekly} hrs
                </div>
              </div>
              <div>
                <div className="font-body text-[12px] text-[var(--text-muted)]">
                  Monthly productivity value
                </div>
                <div
                  key={monthly}
                  className="animate-counter-roll font-code text-[26px] text-[var(--cyan)]"
                >
                  £{fmt(monthly)}
                </div>
              </div>
              <div>
                <div className="font-body text-[12px] text-[var(--text-muted)]">Annual ROI</div>
                <div
                  key={annual}
                  className="animate-counter-roll font-code text-[26px] font-medium"
                >
                  <GradientText from="#2FE0C8" to="#8B7CF6">
                    £{fmt(annual)}
                  </GradientText>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <CyanButton>Claim Your Productivity Gain →</CyanButton>
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
