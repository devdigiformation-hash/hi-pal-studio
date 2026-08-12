import { createFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/home/HeroSection";
import TelemetryTicker from "@/components/home/TelemetryTicker";
import SoftwareShowcase from "@/components/home/SoftwareShowcase";
import ModulesGrid from "@/components/home/ModulesGrid";
import CapabilityVault from "@/components/home/CapabilityVault";
import FourPillars from "@/components/home/FourPillars";
import ProductWorkbench from "@/components/home/ProductWorkbench";
import ModelsSection from "@/components/home/ModelsSection";
import CodebaseIntelligence from "@/components/home/CodebaseIntelligence";
import WorkflowsSection from "@/components/home/WorkflowsSection";
import LiveTrackingSection from "@/components/home/LiveTrackingSection";
import BuildYourOwn from "@/components/home/BuildYourOwn";
import VisionShowcase from "@/components/home/VisionShowcase";
import SourceCodeSection from "@/components/home/SourceCodeSection";
import ComparisonMatrix from "@/components/home/ComparisonMatrix";
import UseCases from "@/components/home/UseCases";
import SocialProof from "@/components/home/SocialProof";
import PricingPreview from "@/components/home/PricingPreview";
import FAQSection from "@/components/home/FAQSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { buildMeta, softwareLd } from "@/lib/seo";

const TITLE = "DIGI BIZ OS — AI Business Operating System";
const DESC =
  "Voice-first AI business operating system for Windows: multi-agent execution, 500+ AI skills, 150+ tools, workflows and scheduled automation.";

export const Route = createFileRoute("/")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(softwareLd("DIGI BIZ OS", DESC, "/")),
        },
      ],
    };
  },
  component: HomePage,
});

function HomePage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <HeroSection />
      <TelemetryTicker />
      <SoftwareShowcase />
      <ModulesGrid />
      <CapabilityVault />
      <FourPillars />
      <ProductWorkbench />
      <ModelsSection />
      <CodebaseIntelligence />
      <WorkflowsSection />
      <LiveTrackingSection />
      <BuildYourOwn />
      <VisionShowcase />
      <SourceCodeSection />
      <ComparisonMatrix />
      <UseCases />
      <SocialProof />
      <PricingPreview />
      <FAQSection />
      <WhatsAppFloat />
    </main>
  );
}
