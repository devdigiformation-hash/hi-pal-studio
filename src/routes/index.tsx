import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digi Biz OS — Operate Your Desktop at the Speed of Voice" },
      {
        name: "description",
        content:
          "DigiBiz Voice is the autonomous desktop AI OS: voice-first control, multi-agent automation and native app orchestration.",
      },
      { property: "og:title", content: "Digi Biz OS — Operate Your Desktop at the Speed of Voice" },
      {
        property: "og:description",
        content: "The autonomous desktop AI OS, driven entirely by voice.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper id="hero">
        <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
          <div className="reveal-item">
            <MonoBadge>
              <ActivePulse />
              v2.5 — Now Available
            </MonoBadge>
          </div>
          <EyebrowLabel text="DigiBiz Voice" className="delay-1 mt-6" />
          <h1 className="reveal-item delay-2 mt-4 font-display text-[52px] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--text-primary)] md:text-[72px] lg:text-[96px]">
            Operate Your Desktop at the{" "}
            <GradientText from="#2FE0C8" to="#8B7CF6">
              Speed of Voice
            </GradientText>
          </h1>
          <p className="reveal-item delay-3 mt-6 max-w-[640px] font-body text-[15px] leading-[1.75] text-[var(--text-secondary)] md:text-[17px]">
            DigiBiz Voice is the autonomous desktop AI operating system — a voice-first, multi-agent
            layer that runs your apps, files and workflows for you.
          </p>
          <div className="reveal-item delay-4 mt-9 flex flex-wrap items-center justify-center gap-4">
            <CyanButton icon={<Download size={18} />}>Download App</CyanButton>
            <GhostButton>Live Demo</GhostButton>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
