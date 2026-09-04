import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MetricBadge from "@/components/MetricBadge";
import GradientText from "@/components/GradientText";

const QUOTES = [
  {
    quote:
      "The multi-agent feature alone saved me 4 hours daily. I voice-command research tasks and multi agents execute them while I focus on high-value work.",
    name: "James Whitfield",
    role: "Founder, Whitfield Ventures",
  },
  {
    quote:
      "As a developer, the MCP server integration and built-in desktop automation tools give me control I've never had with any other AI tool. DIGI BIZ OS is genuinely different.",
    name: "Tariq Ahmed",
    role: "Senior DevOps Engineer",
  },
  {
    quote:
      "I use it daily for market research. The voice query feature lets me gather business intelligence hands-free. Extraordinary productivity boost.",
    name: "Daniel Hughes",
    role: "Business Consultant",
  },
];

export default function SocialProof() {
  return (
    <SectionWrapper id="testimonials">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="From the Community" color="var(--purple)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            They Spoke.{" "}
            <GradientText from="#3DDC84" to="#F5A623">
              We Delivered.
            </GradientText>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {QUOTES.map((q, i) => (
            <div key={q.name} className={`reveal-item delay-${i + 1}`}>
              <GlassCard className="h-full p-8">
                <div
                  className="font-display text-[72px] leading-none"
                  style={{ color: "rgba(47,224,200,0.15)" }}
                >
                  &ldquo;
                </div>
                <p className="-mt-4 font-body text-[15px] italic leading-[1.85] text-[var(--text-secondary)]">
                  {q.quote}
                </p>
                <div className="mt-6 flex gap-1 text-[14px] text-[var(--amber)]">
                  {"★★★★★".split("").map((s, k) => (
                    <span key={k}>{s}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="font-display text-[14px] font-bold text-[var(--text-primary)]">
                    {q.name}
                  </div>
                  <div className="font-body text-[12px] text-[var(--text-muted)]">{q.role}</div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="reveal-item delay-4 mt-12 flex flex-wrap justify-center gap-4">
          <MetricBadge value="500+" label="Beta Users" />
          <MetricBadge value="4.8/5" label="Average Rating" color="var(--amber)" />
          <MetricBadge value="2,500+" label="Daily Commands" color="var(--purple)" />
        </div>
      </div>
    </SectionWrapper>
  );
}
