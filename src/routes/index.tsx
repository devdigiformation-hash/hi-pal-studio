import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import HeroSection from "@/components/home/HeroSection";
import TelemetryTicker from "@/components/home/TelemetryTicker";
import SoftwareShowcase from "@/components/home/SoftwareShowcase";
import AiBrainArchitectureShowcase from "@/components/home/AiBrainArchitectureShowcase";
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
import SaasComparisonMatrix from "@/components/home/SaasComparisonMatrix";
import UseCases from "@/components/home/UseCases";
import SocialProof from "@/components/home/SocialProof";
import PricingPreview from "@/components/home/PricingPreview";
import FAQSection, { FAQS } from "@/components/home/FAQSection";
import ExploreHub from "@/components/home/ExploreHub";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { buildMeta, softwareLd, breadcrumbLd, faqLd, webPageLd, speakableLd } from "@/lib/seo";

const TITLE = "DIGI BIZ OS — The Voice-Controlled Business Operating System";
const DESC =
  "DIGI BIZ OS is the autonomous AI business operating system for Windows. Control operations with voice, run local neural models, and automate workflows with zero monthly fees.";

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
        {
          type: "application/ld+json",
          children: JSON.stringify(breadcrumbLd([{ name: "Home", path: "/" }])),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(faqLd(FAQS)),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(webPageLd({ title: TITLE, description: DESC, path: "/" })),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(speakableLd([".answer", ".summary"])),
        },
      ],
    };
  },
  component: HomePage,
});

function ClientDeferred({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return <>{children}</>;
}

function HomePage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <HeroSection />
      <SoftwareShowcase />
      <ModulesGrid />
      <CapabilityVault />
      <FourPillars />
      <WorkflowsSection />
      <LiveTrackingSection />
      <SaasComparisonMatrix />
      <SocialProof />
      <PricingPreview />
      <ExploreHub />
      <FAQSection />

      {/* Non-critical interactive demo widgets deferred to keep initial HTML lean and fast */}
      <ClientDeferred>
        <TelemetryTicker />
        <AiBrainArchitectureShowcase />
        <ProductWorkbench />
        <ModelsSection />
        <CodebaseIntelligence />
        <BuildYourOwn />
        <VisionShowcase />
        <SourceCodeSection />
        <UseCases />
        <WhatsAppFloat />
      </ClientDeferred>
    </main>
  );
}
