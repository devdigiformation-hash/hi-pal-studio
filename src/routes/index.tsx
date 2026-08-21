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
import ExploreHub from "@/components/home/ExploreHub";
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
      <ExploreHub />
      <FAQSection />
      <WhatsAppFloat />
      <div className="hidden" aria-hidden="true">
        {`'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            For the code present, I get the error below.

Please think step-by-step in order to resolve it.
\`\`\`
Could not load https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/robot-log-body/model.gltf: Failed to fetch

{
  "timestamp": 1787300189265,
  "error_type": "RUNTIME_ERROR",
  "filename": "/jarvis-ai",
  "lineno": 0,
  "colno": 0,
  "stack": "Error: Could not load https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/robot-log-body/model.gltf: Failed to fetch\\n    at https://588214df-1d5e-4126-93c8-5d249b243a65.lovableproject.com/node_modules/.vite/deps/react-three-fiber.esm-BRcxtMzq.js?v=511a55af:1063:52\\n    at Object._onError [as onError] (https://588214df-1d5e-4126-93c8-5d249b243a65.lovableproject.com/node_modules/.vite/deps/@react-three_drei.js?v=511a55af:16630:17)\\n    at https://588214df-1d5e-4126-93c8-5d249b243a65.lovableproject.com/node_modules/.vite/deps/three.module-omPc_b5b.js?v=511a55af:31468:36",
  "has_blank_screen": true
}
\`\`\``}
      </div>
    </main>
  );
}
