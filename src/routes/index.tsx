import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/home/HeroSection";
import TelemetryTicker from "@/components/home/TelemetryTicker";
import SoftwareShowcase from "@/components/home/SoftwareShowcase";
import FourPillars from "@/components/home/FourPillars";
import ProductWorkbench from "@/components/home/ProductWorkbench";
import ModelsSection from "@/components/home/ModelsSection";
import CodebaseIntelligence from "@/components/home/CodebaseIntelligence";
import WorkflowsSection from "@/components/home/WorkflowsSection";
import LiveTrackingSection from "@/components/home/LiveTrackingSection";
import BuildYourOwn from "@/components/home/BuildYourOwn";
import VisionShowcase from "@/components/home/VisionShowcase";
import ComparisonMatrix from "@/components/home/ComparisonMatrix";
import UseCases from "@/components/home/UseCases";
import SecuritySection from "@/components/home/SecuritySection";
import SocialProof from "@/components/home/SocialProof";
import ROICalculator from "@/components/home/ROICalculator";
import PricingPreview from "@/components/home/PricingPreview";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DIGI BIZ OS — Operate Your Desktop at the Speed of Voice" },
      {
        name: "description",
        content:
          "DIGI BIZ OS is the autonomous desktop AI OS: voice-first control, 10+ autonomous agents, real-time screen vision and native desktop automation.",
      },
      { property: "og:title", content: "DIGI BIZ OS — Operate Your Desktop at the Speed of Voice" },
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
      <HeroSection />
      <TelemetryTicker />
      <SoftwareShowcase />
      <FourPillars />
      <ProductWorkbench />
      <ModelsSection />
      <CodebaseIntelligence />
      <WorkflowsSection />
      <LiveTrackingSection />
      <BuildYourOwn />
      <VisionShowcase />
      <ComparisonMatrix />
      <UseCases />
      <SecuritySection />
      <SocialProof />
      <ROICalculator />
      <PricingPreview />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
