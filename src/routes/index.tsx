import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/home/HeroSection";
import TelemetryTicker from "@/components/home/TelemetryTicker";
import SoftwareShowcase from "@/components/home/SoftwareShowcase";
import FourPillars from "@/components/home/FourPillars";
import ProductWorkbench from "@/components/home/ProductWorkbench";
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
      { title: "Digi Biz OS — Operate Your Desktop at the Speed of Voice" },
      {
        name: "description",
        content:
          "DIGI BIZ OS is the autonomous desktop AI OS: voice-first control, 27 autonomous agents, real-time screen vision and native desktop automation.",
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
      <HeroSection />
      <TelemetryTicker />
      <SoftwareShowcase />
      <FourPillars />
      <ProductWorkbench />
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
