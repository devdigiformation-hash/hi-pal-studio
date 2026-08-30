import { createFileRoute } from "@tanstack/react-router";
import CommandCore3D from "@/components/home/CommandCore3D";
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
    <main className="min-h-screen pt-[60px] md:pt-[72px] bg-[#05070B]">
      <CommandCore3D />
      <ComparisonMatrix />
      <UseCases />
      <SocialProof />
      <PricingPreview />
      <ExploreHub />
      <FAQSection />
      <WhatsAppFloat />
      <div className="hidden" aria-hidden="true">
        {`'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            langflow wla page fully remove kr do
                                            home page se download for mobile ka button nikal do
                                            ABI JO ROBOT H IS K BACK SE BOX REMOVE KR DO REAL BACKGROUND RHNE DO SITE KA


Create a massive, heavy-duty futuristic AI robot for a premium business automation platform called JARVIS.

The robot must NOT look like a human, android, superhero, or humanoid character. It should look like a powerful autonomous industrial AI machine, built specifically to control and operate an entire digital business ecosystem.

Robot Design

Design a huge, intimidating, sophisticated robotic machine with:

Extremely heavy mechanical body

Broad armored shoulders

Large industrial mechanical arms

Powerful articulated hands designed for operating machines and digital systems

Thick mechanical legs and a strong industrial base

Heavy metal armor and layered mechanical components

Exposed mechanical joints, pistons, cables, actuators and precision machinery

Large central torso containing a visible AI Core

A clearly visible artificial brain / neural processing core inside the upper torso or head

The brain should look like a complex futuristic neural network made from glowing circuits, interconnected nodes and flowing data

No human face

No realistic human skin

No human anatomy

No cartoon appearance

AI Brain

The robot's brain is the most important visual element.

Create a sophisticated glowing AI Neural Brain Core inside the robot.

Show:

Thousands of interconnected neural pathways

Digital nodes

Data streams

Neural-network patterns

Multiple processing layers

Holographic information flowing through the brain

Small rotating data structures

Pulsing computational energy

Multiple simultaneous processing streams

The brain should visually communicate:

Thinking + Planning + Reasoning + Automation + Multi-Agent Intelligence

Multi-Task Capability

The robot must visually appear to be performing multiple tasks simultaneously.

Around the robot, create several floating holographic interfaces showing different active operations:

CRM management

Email automation

Lead processing

Business analytics

Task management

Calendar scheduling

Workflow automation

AI agents

Skills and tools

Browser automation

File/document processing

Database operations

These interfaces should appear connected to the robot's central AI brain through glowing data streams.

The visual idea is:

One powerful AI machine controlling an entire business.

Mechanical Intelligence

Make the robot look like it has been engineered for continuous autonomous operation.

Include:

Robotic arms performing different operations

One arm interacting with a holographic dashboard

Another arm manipulating a digital workflow

Small robotic components processing data

Mechanical modules working simultaneously

Moving gears and actuators

Data flowing between different mechanical sections

Multiple active processing zones

The robot should feel like a digital factory + supercomputer + autonomous business operator combined into one machine.

Overall Visual Style

Style:

Ultra-premium cinematic futuristic technology

Use:

Dark background

Deep black / gunmetal metallic body

Heavy industrial materials

Subtle futuristic illumination

High contrast

Cinematic lighting

Volumetric light

Glowing holographic interfaces

Complex mechanical details

Photorealistic 3D rendering

AAA game-quality asset

High-end sci-fi film aesthetic

Extremely detailed materials and textures

Realistic reflections

Realistic shadows

Deep depth

Powerful sense of scale

The robot should look heavy, expensive, intelligent, powerful and technologically advanced.

Composition

Place the robot as the primary central object.

Use a slightly low camera angle so the machine feels enormous and powerful.

The robot should occupy most of the visual frame while leaving enough negative space around it for holographic interfaces.

Behind and around the robot, subtly show:

Digital network architecture

Data streams

AI processing nodes

Business workflow connections

Multiple autonomous tasks

Floating system panels

The entire scene should communicate:

"This machine runs the entire business."

Important Restrictions

Do NOT create:

A human

A humanoid robot

A superhero

A cute robot

A cartoon robot

A toy

A simple mechanical arm

A generic Transformer-like character

A robot with a human face

Instead create:

A gigantic autonomous industrial AI machine with a visible neural brain and multiple simultaneous business operations.

The final result should look like the physical embodiment of an advanced AI operating system.

It should immediately communicate:

JARVIS — THINKS. EXECUTES. AUTOMATES. CONTROLS THE BUSINESS.`}
      </div>
    </main>
  );
}
