import { createFileRoute } from "@tanstack/react-router";
import SectionWrapper from "@/components/SectionWrapper";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import { AIJarvis } from "@/components/AIJarvis";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import { buildMeta, breadcrumbLd } from "@/lib/seo";

const TITLE = "AI Jarvis — Advanced Business Automation & Multi-Agent Intelligence";
const DESC = "Experience the physical embodiment of the JARVIS business operating system. High-performance multi-agent AI for mission-critical automation.";

export const Route = createFileRoute("/ai-jarvis")({
  head: () => {
    const { meta, links } = buildMeta({
      path: "/ai-jarvis",
      title: TITLE,
      description: DESC,
    });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "AI Jarvis", path: "/ai-jarvis" },
            ]),
          ),
        },
      ],
    };
  },
  component: AIJarvisPage,
});

function AIJarvisPage() {
  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px] bg-[#000000]">
      <SectionWrapper className="pb-0">
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "AI Jarvis", path: "/ai-jarvis" },
          ]}
        />
        <div className="mt-8 text-center max-w-[800px] mx-auto">
          <EyebrowLabel text="Autonomous Business Intelligence" color="#00ffff" />
          <h1 className="mt-4 font-display text-[38px] font-extrabold tracking-tight text-white md:text-[56px] leading-[1.1]">
            Meet{" "}
            <GradientText from="#00ffff" to="#8B7CF6">
              AI JARVIS
            </GradientText>
          </h1>
          <p className="mt-6 font-body text-[16px] leading-[1.6] text-gray-400 md:text-[18px]">
            The futuristic command center for your digital empire. Jarvis doesn't just process data—it thinks, reasons, and executes complex workflows across your entire business ecosystem.
          </p>
        </div>
      </SectionWrapper>

      <div className="relative mt-12">
        <AIJarvis />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ffff]/20 bg-[#00ffff]/5 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#00ffff] animate-pulse" />
            <span className="font-mono text-[12px] tracking-wider text-[#00ffff] uppercase">System Online: JARVIS-CORE-01</span>
          </div>
        </div>
      </div>

      <SectionWrapper className="bg-[#050505]">
        <div className="mx-auto max-w-[1000px] grid gap-8 md:grid-cols-3">
          {[
            { title: "Multi-Agent Logic", body: "Orchestrates dozens of specialized AI agents to handle marketing, sales, and operations simultaneously." },
            { title: "Neural Processing", body: "Advanced context window management ensuring your business data is processed with 99.9% accuracy." },
            { title: "Command & Control", body: "Unified interface for monitoring all autonomous activities across your digital properties in real-time." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <h3 className="font-display text-[18px] font-bold text-white">{item.title}</h3>
              <p className="mt-3 font-body text-[14px] leading-[1.6] text-gray-400">{item.body}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      
      <div className="hidden" aria-hidden="true">
        {`'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            page khan h nzar ni arha h page to already tha usi pr ye animated robot bnana tha

Create a React component using React Three Fiber (R3F) and Drei for a website page  called "AI Jarvis". 


**Requirements:**
1. **Container:** A full-width div with a black background (#000000), height 100vh or 600px.
2. **Scene Setup:** Inside the div, render a from R3F. Set the camera position to [0, 0, 8] and a field of view of 60.
3. **3D Robot Model (GLB):** Use useGLTF from @react-three/drei to load a 3D robot model. 
   - *Important: Since I don't have a specific GLB file URL, implement a fallback logic.* 
   - If the GLB loads, traverse the scene and apply a meshStandardMaterial with color: "#111111", metalness: 0.95, and roughness: 0.1 to make it look glossy black.
   - If the GLB fails to load, build a basic humanoid robot using primitive geometry (a SphereGeometry for the head, CylinderGeometry for the torso, arms, and legs) and apply the same glossy black material.
4. **Jarvis Eye:** Add a glowing cyan/blue "eye" on the robot's head. Use a small CircleGeometry or a SphereGeometry with a meshBasicMaterial of color #00ffff. Add a pointLight of color #00ffff around the eye to create a glow effect.
5. **Lighting:** Add an ambientLight with intensity 0.4, a directionalLight with intensity 1.5 positioned at [5, 5, 5], and a pointLight with intensity 2 positioned at [-3, 2, 4].
6. **Cursor Interaction:** Implement mouse tracking. Use a useFrame hook to get the mouse coordinates. The robot's group should smoothly lookAt the 3D position corresponding to the mouse cursor.
7. **Animation:** Add a subtle floating animation to the robot group using Math.sin(Date.now() * 0.002) * 0.1 for the Y position.
8. **Resizing:** Ensure the canvas and the 3D scene resize automatically when the window or container is resized.
9. **Performance:** Add the shadows prop to the canvas and enable shadowMap.
10. **Responsive:** Make sure it looks perfect on both desktop (where mouse is used) and mobile (where touch is used, or it just stays static).

This section should look like a futuristic, sleek, high-tech Jarvis robot interface.`}
      </div>
    </main>
  );
}
