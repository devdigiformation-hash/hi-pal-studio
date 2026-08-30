import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  Database,
  Download,
  FileText,
  Globe,
  Layers,
  Lock,
  Megaphone,
  MessageSquare,
  Mic,
  Play,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Terminal,
  Volume2,
  Wrench,
  Zap,
} from "lucide-react";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import GlassCard from "@/components/GlassCard";

interface ModuleNode {
  id: string;
  name: string;
  category: string;
  spec: string;
  color: string;
  icon: any;
  angle: number;
  radius: number;
  height: number;
  explodedOffset: [number, number, number];
}

const MODULES_DATA: ModuleNode[] = [
  {
    id: "voice",
    name: "Voice Core",
    category: "Flagship Controller",
    spec: "Gemini-Live class, bilingual transcript, screen & camera aware.",
    color: "#2FE0C8",
    icon: Mic,
    angle: 0,
    radius: 3.2,
    height: 0.2,
    explodedOffset: [0, 2.5, 2.2],
  },
  {
    id: "ai",
    name: "Digi AI",
    category: "Intelligence Hub",
    spec: "200+ models, single memory-carrying thread, image generator.",
    color: "#38BDF8",
    icon: Bot,
    angle: (Math.PI * 2 * 1) / 9,
    radius: 3.2,
    height: 0.1,
    explodedOffset: [2.6, 1.8, 1.4],
  },
  {
    id: "code",
    name: "Digi Code",
    category: "Autonomous Dev",
    spec: "Coding agent inside repos, branch awareness & auto refactors.",
    color: "#6366F1",
    icon: Terminal,
    angle: (Math.PI * 2 * 2) / 9,
    radius: 3.2,
    height: -0.1,
    explodedOffset: [3.4, 0.4, -0.6],
  },
  {
    id: "crm",
    name: "Digi CRM",
    category: "Sales Pipeline",
    spec: "Contacts, company intel, deal pipelines & won-revenue tracking.",
    color: "#10B981",
    icon: Database,
    angle: (Math.PI * 2 * 3) / 9,
    radius: 3.2,
    height: -0.2,
    explodedOffset: [2.5, -1.8, -1.8],
  },
  {
    id: "intel",
    name: "Digi Intelligence",
    category: "Market Engine",
    spec: "20-stage product & lead research with verified CSV reports.",
    color: "#F59E0B",
    icon: Zap,
    angle: (Math.PI * 2 * 4) / 9,
    radius: 3.2,
    height: -0.1,
    explodedOffset: [0, -2.8, -2.2],
  },
  {
    id: "marketing",
    name: "Digi Marketing",
    category: "Campaign Studio",
    spec: "Multi-platform auto publisher, AI captions & scheduled calendar.",
    color: "#F43F5E",
    icon: Megaphone,
    angle: (Math.PI * 2 * 5) / 9,
    radius: 3.2,
    height: 0.1,
    explodedOffset: [-2.5, -1.8, -1.8],
  },
  {
    id: "whatsapp",
    name: "WhatsApp Agent",
    category: "Autonomous Closer",
    spec: "24/7 sales agent, multi-slot QR pairing & voice note AI.",
    color: "#25D366",
    icon: MessageSquare,
    angle: (Math.PI * 2 * 6) / 9,
    radius: 3.2,
    height: 0.2,
    explodedOffset: [-3.4, 0.4, -0.6],
  },
  {
    id: "docs",
    name: "Digi Docs · Tools · Flow",
    category: "Offline Powerhouse",
    spec: "100+ offline utilities, OCR suite & cron-style scheduled workflows.",
    color: "#A855F7",
    icon: FileText,
    angle: (Math.PI * 2 * 7) / 9,
    radius: 3.2,
    height: 0.1,
    explodedOffset: [-2.6, 1.8, 1.4],
  },
  {
    id: "skills",
    name: "Skills · MCP · Mixed Tools",
    category: "Universal Reach",
    spec: "500+ AI skills, 40+ MCP servers & direct Windows desktop reach.",
    color: "#EAB308",
    icon: Wrench,
    angle: (Math.PI * 2 * 8) / 9,
    radius: 3.2,
    height: -0.1,
    explodedOffset: [0, 0, 3.2],
  },
];

interface DemoCommand {
  label: string;
  command: string;
  targetModuleId: string;
  outputTitle: string;
  outputDetails: string[];
  metricTag: string;
}

const DEMO_COMMANDS: DemoCommand[] = [
  {
    label: "Socials Dispatch",
    command: '"Post this product launch teaser across Twitter, LinkedIn & Instagram."',
    targetModuleId: "marketing",
    outputTitle: "Cross-Channel Campaign Scheduled",
    outputDetails: [
      "AI Captions generated (3 tailored variations)",
      "Image assets resized for 16:9 & 1:1 feeds",
      "Queued for dispatch at peak engagement (14:00 GMT)",
    ],
    metricTag: "Digi Marketing · 3 Platforms Synced",
  },
  {
    label: "Sales Audit",
    command: '"Give me today\'s closed deals and open pipeline revenue report."',
    targetModuleId: "crm",
    outputTitle: "Live Sales Pipeline Digest",
    outputDetails: [
      "Won Deals: £4,850 across 3 new enterprise licences",
      "Active Pipeline: £24,600 with 8 prospective follow-ups",
      "Lead scoring audit compiled to CRM summary PDF",
    ],
    metricTag: "Digi CRM · 100% Local SQLite",
  },
  {
    label: "Product Hunt",
    command: '"Research top trending smart fitness gadgets on Amazon & TikTok."',
    targetModuleId: "intel",
    outputTitle: "20-Stage E-Commerce Market Report",
    outputDetails: [
      "Scraped 142 listings across Amazon US, UK & TikTok Shop",
      "Identified 4 high-margin low-competition product niches",
      "Exported verified CSV report with supplier contacts",
    ],
    metricTag: "Digi Intelligence · 20-Stage Pipeline",
  },
  {
    label: "Document Sign",
    command: '"Draft a mutual non-disclosure agreement with Acme Corp and sign it."',
    targetModuleId: "docs",
    outputTitle: "Legal Document Generated & Signed",
    outputDetails: [
      "Standard UK-compliant NDA drafted with custom clauses",
      "Cryptographic signature applied in local sandbox",
      "Archived to Client_Contracts/2026/Acme_NDA.pdf",
    ],
    metricTag: "Digi Docs · Offline OCR Engine",
  },
];

export default function CommandCore3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [selectedCommandIndex, setSelectedCommandIndex] = useState(0);
  const [isExecuting, setIsExecuting] = useState(false);
  const [voicePersona, setVoicePersona] = useState<"Nova-7" | "Titan-Prime">("Nova-7");
  const [tokensPerSec, setTokensPerSec] = useState(148);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let isDestroyed = false;
    let animationFrameId: number;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 11);

    const coreRoot = new THREE.Group();
    scene.add(coreRoot);

    const sphereCount = 500;
    const sphereGeo = new THREE.BufferGeometry();
    const spherePositions = new Float32Array(sphereCount * 3);
    const sphereColors = new Float32Array(sphereCount * 3);

    const phi = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < sphereCount; i++) {
      const y = 1 - (i / (sphereCount - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const r = 1.35;
      spherePositions[i * 3] = x * r;
      spherePositions[i * 3 + 1] = y * r;
      spherePositions[i * 3 + 2] = z * r;

      const band = Math.sin(y * 15) + Math.cos(y * 35) * 0.5;
      if (band > 0.6) {
        sphereColors[i * 3] = 0.7;
        sphereColors[i * 3 + 1] = 1.0;
        sphereColors[i * 3 + 2] = 0.96;
      } else if (band > 0.0) {
        sphereColors[i * 3] = 0.18;
        sphereColors[i * 3 + 1] = 0.88;
        sphereColors[i * 3 + 2] = 0.78;
      } else {
        sphereColors[i * 3] = 0.08;
        sphereColors[i * 3 + 1] = 0.45;
        sphereColors[i * 3 + 2] = 0.65;
      }
    }
    sphereGeo.setAttribute("position", new THREE.BufferAttribute(spherePositions, 3));
    sphereGeo.setAttribute("color", new THREE.BufferAttribute(sphereColors, 3));

    const sphereMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
    });
    const spherePoints = new THREE.Points(sphereGeo, sphereMat);
    coreRoot.add(spherePoints);

    // Rings removed on the owner's instruction — no Saturn/Cassini particle
    // ring, no black gimbal toruses, no metal connectors. Only the Jupiter
    // particle globe remains.

    const moduleMeshes: {
      meshGroup: THREE.Group;
      data: ModuleNode;
      initialPos: THREE.Vector3;
      explodedPos: THREE.Vector3;
    }[] = [];

    MODULES_DATA.forEach((mod) => {
      const nodeGroup = new THREE.Group();

      const baseBlock = new THREE.Mesh(
        new THREE.BoxGeometry(0.38, 0.38, 0.18),
        new THREE.MeshStandardMaterial({ color: 0x0f131a, metalness: 0.9, roughness: 0.25 })
      );
      nodeGroup.add(baseBlock);

      const glyphPlate = new THREE.Mesh(
        new THREE.BoxGeometry(0.24, 0.24, 0.2),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color(mod.color),
          emissive: new THREE.Color(mod.color),
          emissiveIntensity: 0.8,
          metalness: 0.3,
          roughness: 0.1,
        })
      );
      nodeGroup.add(glyphPlate);

      const halo = new THREE.Mesh(
        new THREE.SphereGeometry(0.32, 16, 16),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(mod.color),
          transparent: true,
          opacity: 0.2,
          wireframe: true,
        })
      );
      nodeGroup.add(halo);

      const initX = Math.cos(mod.angle) * mod.radius;
      const initZ = Math.sin(mod.angle) * mod.radius;
      const initY = mod.height;
      nodeGroup.position.set(initX, initY, initZ);

      const initialPos = new THREE.Vector3(initX, initY, initZ);
      const explodedPos = new THREE.Vector3(
        mod.explodedOffset[0],
        mod.explodedOffset[1],
        mod.explodedOffset[2]
      );

      coreRoot.add(nodeGroup);
      moduleMeshes.push({
        meshGroup: nodeGroup,
        data: mod,
        initialPos,
        explodedPos,
      });
    });

    const ribbonPointsCount = 120;
    const ribbonGeo = new THREE.BufferGeometry();
    const ribbonPos = new Float32Array(ribbonPointsCount * 3);
    const ribbonColors = new Float32Array(ribbonPointsCount * 3);

    for (let i = 0; i < ribbonPointsCount; i++) {
      const u = (i / (ribbonPointsCount - 1)) * Math.PI * 2;
      const r = 1.48;
      ribbonPos[i * 3] = Math.cos(u) * r;
      ribbonPos[i * 3 + 1] = Math.sin(u * 5) * 0.12;
      ribbonPos[i * 3 + 2] = Math.sin(u) * r;

      ribbonColors[i * 3] = 0.18;
      ribbonColors[i * 3 + 1] = 0.88;
      ribbonColors[i * 3 + 2] = 0.78;
    }
    ribbonGeo.setAttribute("position", new THREE.BufferAttribute(ribbonPos, 3));
    ribbonGeo.setAttribute("color", new THREE.BufferAttribute(ribbonColors, 3));

    const ribbonLine = new THREE.LineLoop(
      ribbonGeo,
      new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.85 })
    );
    coreRoot.add(ribbonLine);

    const conduitGroup = new THREE.Group();
    coreRoot.add(conduitGroup);

    const conduitLines: THREE.Line[] = [];
    moduleMeshes.forEach((m) => {
      const p1 = new THREE.Vector3(0, 0, 0);
      const p2 = m.initialPos.clone();
      const geom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
      const mat = new THREE.LineBasicMaterial({
        color: new THREE.Color(m.data.color),
        transparent: true,
        opacity: 0.35,
      });
      const line = new THREE.Line(geom, mat);
      conduitGroup.add(line);
      conduitLines.push(line);
    });

    const ambientLight = new THREE.AmbientLight(0x0c121e, 2.5);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x2fe0c8, 3.5);
    keyLight.position.set(5, 8, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x8b5cf6, 2.8);
    rimLight.position.set(-6, -4, -6);
    scene.add(rimLight);

    let clock = new THREE.Clock();

    const animate = () => {
      if (isDestroyed) return;
      animationFrameId = requestAnimationFrame(animate);

      if (document.hidden) return;

      const elapsed = clock.getElapsedTime();
      const p = (window as any).__scrollProgress || 0;

      let explodeFactor = 0;
      if (p >= 0.30 && p <= 0.60) {
        const localT = (p - 0.30) / 0.30;
        explodeFactor = Math.sin(localT * Math.PI);
      }

      coreRoot.rotation.y = elapsed * 0.2 + p * Math.PI * 1.5;
      coreRoot.rotation.x = Math.sin(elapsed * 0.3) * 0.08 + (p > 0.3 && p < 0.6 ? 0.2 : 0);

      spherePoints.rotation.y = elapsed * 0.08;

      const posAttr = ribbonGeo.attributes.position as THREE.BufferAttribute;
      const waveFreq = p > 0.15 ? 12 : 5;
      const waveAmp = p > 0.15 ? 0.22 : 0.08;
      for (let i = 0; i < ribbonPointsCount; i++) {
        const u = (i / (ribbonPointsCount - 1)) * Math.PI * 2;
        const r = 1.48 + Math.sin(u * waveFreq + elapsed * 6) * 0.04;
        posAttr.setXYZ(
          i,
          Math.cos(u) * r,
          Math.sin(u * waveFreq + elapsed * 5) * waveAmp,
          Math.sin(u) * r
        );
      }
      posAttr.needsUpdate = true;

      moduleMeshes.forEach((m, idx) => {
        const targetPos = new THREE.Vector3().lerpVectors(
          m.initialPos,
          m.explodedPos,
          explodeFactor
        );
        m.meshGroup.position.lerp(targetPos, 0.1);
        m.meshGroup.lookAt(coreRoot.position);

        const lineGeom = conduitLines[idx].geometry;
        lineGeom.setFromPoints([new THREE.Vector3(0, 0, 0), m.meshGroup.position]);
        lineGeom.attributes.position.needsUpdate = true;
      });

      camera.position.z = 11 - p * 2.5;
      camera.position.y = (p - 0.5) * 1.2;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!canvas) return;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      ribbonGeo.dispose();
    };
  }, []);

  useEffect(() => {
    (window as any).__scrollProgress = scrollProgress;
  }, [scrollProgress]);

  const handleExecuteCommand = (index: number) => {
    setSelectedCommandIndex(index);
    setIsExecuting(true);
    setTokensPerSec(312);

    setTimeout(() => {
      setIsExecuting(false);
      setTokensPerSec(154);
    }, 850);
  };

  const activeCmd = DEMO_COMMANDS[selectedCommandIndex];
  const targetModule = MODULES_DATA.find((m) => m.id === activeCmd.targetModuleId) || MODULES_DATA[0];

  return (
    <div ref={containerRef} className="relative w-full bg-[#05070B] text-white">
      {/* ── STICKY 3D COMMAND CORE CANVAS VIEWPORT ─────────────────── */}
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(47,224,200,0.14) 0%, rgba(139,92,246,0.08) 50%, transparent 80%)",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(to right, #2FE0C8 1px, transparent 1px), linear-gradient(to bottom, #2FE0C8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <canvas
          ref={canvasRef}
          className="relative z-10 block h-full w-full object-contain"
        />

        {/* Live HUD Telemetry Header Bar */}
        <div className="pointer-events-none absolute top-20 inset-x-0 z-20 mx-auto flex max-w-[1240px] items-center justify-between px-6 font-mono text-[11px] text-[var(--text-tertiary)]">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 items-center justify-center">
              <span className="h-2 w-2 animate-ping rounded-full bg-[#2FE0C8] opacity-75" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#2FE0C8]" />
            </span>
            <span className="text-[var(--text-secondary)] font-semibold">
              COMMAND CORE v2.4 PRO
            </span>
            <span className="hidden sm:inline-block text-[#2FE0C8]/60">· 500+ Skills Online</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-block">ROUTER: DUAL-HYBRID</span>
            <span className="text-[#2FE0C8] font-bold">TOKENS: {tokensPerSec} T/S</span>
            <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-white/80">
              LOCAL SANDBOX
            </span>
          </div>
        </div>

        {/* Vertical Scroll Progress */}
        <div className="pointer-events-none absolute bottom-8 left-8 z-20 hidden lg:flex flex-col items-center gap-2">
          <div className="h-24 w-[2px] bg-white/10 relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 w-full bg-[#2FE0C8] transition-all duration-150"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          <span className="font-mono text-[9px] text-[#2FE0C8] tracking-widest uppercase">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>
      </div>

      {/* ── SCROLL SECTIONS CONTENT OVERLAY ───────────────────────── */}
      <div className="relative z-10">
        {/* ── SECTION 1: HERO (0.0 - 0.15) ───────────────────────── */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-[960px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(47,224,200,0.35)] bg-[rgba(47,224,200,0.08)] px-4 py-1 font-mono text-[11px] text-[#2FE0C8] shadow-[0_0_25px_rgba(47,224,200,0.2)]">
              <span className="h-2 w-2 rounded-full bg-[#2FE0C8] animate-pulse" />
              LIVE — VOICE-POWERED BUSINESS OS
            </div>

            <h1 className="mt-6 font-display text-[44px] font-extrabold leading-[1.04] tracking-[-0.04em] text-white sm:text-[68px] md:text-[84px]">
              Control Your Business{" "}
              <span className="bg-gradient-to-r from-[#2FE0C8] via-[#38BDF8] to-[#8B5CF6] bg-clip-text text-transparent">
                With AI.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-[720px] font-body text-[17px] leading-[1.8] text-[var(--text-secondary)] md:text-[20px]">
              One voice command. Run operations hands-free. A precision-engineered AI operating system
              that plans, codes, executes and delivers real work on your computer.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/pricing">
                <CyanButton icon={<ArrowRight size={17} />}>
                  Download for Windows (v2.4 LTS)
                </CyanButton>
              </Link>
              <Link to="/features">
                <GhostButton icon={<Play size={15} />}>
                  Watch 60s Product Tour
                </GhostButton>
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[11px] text-[var(--text-tertiary)]">
              <span>Windows 10 / 11 Native</span>
              <span>·</span>
              <span className="text-white/40">macOS & Linux (Coming Soon)</span>
            </div>

            {/* Live Stat Row */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-6 border-y border-white/10 py-4 font-mono text-[12px] text-[var(--text-secondary)]">
              <span className="text-white font-semibold">500+ AI Skills</span>
              <span className="text-white/20">/</span>
              <span className="text-white font-semibold">150+ Mixed Tools</span>
              <span className="text-white/20">/</span>
              <span className="text-white font-semibold">40+ MCP Servers</span>
              <span className="text-white/20">/</span>
              <span className="text-[#2FE0C8] font-bold">Zero Telemetry</span>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: THE ONE COMMAND (0.15 - 0.32) ───────────── */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-[840px] rounded-[24px] border border-white/15 bg-[#05070B]/85 p-8 md:p-12 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.9)]">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2FE0C8]">
              Autonomous Routing Engine
            </span>
            <h2 className="mt-4 font-display text-[32px] font-bold leading-[1.12] text-white sm:text-[48px]">
              You speak once. The Core routes it.
            </h2>
            <p className="mt-5 font-body text-[16px] leading-[1.85] text-[var(--text-secondary)] md:text-[18px]">
              To the right model, the right tool, the right specialist agent — and the work happens
              on your own machine. No juggling tabs. No manual copy-pasting.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2FE0C8]/15 border border-[#2FE0C8]/40">
                <Volume2 size={18} className="text-[#2FE0C8] animate-pulse" />
              </div>
              <div className="font-mono text-[13px] text-[#2FE0C8]">
                [VOICE_IN] "Audit today's closed deals and sync with marketing calendar"
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: EXPLODED VIEW (0.32 - 0.58) ─────────────── */}
        <section className="min-h-[140vh] px-6 py-20">
          <div className="mx-auto max-w-[1240px]">
            <div className="text-center mb-12">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B5CF6]">
                3D Component Architecture
              </span>
              <h2 className="mt-3 font-display text-[32px] font-bold text-white md:text-[48px]">
                Exploded Architecture. 9 Integrated Modules.
              </h2>
              <p className="mx-auto mt-3 max-w-[620px] font-body text-[15px] text-[var(--text-secondary)]">
                Scroll to watch the Command Core disassemble into its precision components. Hover over
                any module to inspect its real-time specification.
              </p>
            </div>

            {/* Zigzag reveal — modules alternate right / left / right / left as
                you scroll down, each one's text aligned to its own side. */}
            <div className="flex flex-col gap-6 md:gap-8">
              {MODULES_DATA.map((mod, i) => {
                const Icon = mod.icon;
                const isHovered = hoveredModule === mod.id;
                const onLeft = i % 2 === 0;
                return (
                  <div
                    key={mod.id}
                    onMouseEnter={() => setHoveredModule(mod.id)}
                    onMouseLeave={() => setHoveredModule(null)}
                    className={`w-full md:w-[56%] transition-transform duration-200 hover:-translate-y-1 ${
                      onLeft ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <GlassCard
                      glowColor={mod.color}
                      className={`h-full p-6 md:p-7 transition-all duration-300 ${
                        isHovered ? "border-white/40 bg-white/10" : ""
                      } ${onLeft ? "md:text-left" : "md:text-right"}`}
                    >
                      <div className={`flex items-center justify-between ${onLeft ? "" : "md:flex-row-reverse"}`}>
                        <div
                          className="flex h-10 w-10 items-center justify-center rounded-xl border"
                          style={{
                            borderColor: `${mod.color}50`,
                            background: `${mod.color}15`,
                          }}
                        >
                          <Icon size={20} style={{ color: mod.color }} />
                        </div>
                        <span
                          className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border"
                          style={{
                            borderColor: `${mod.color}40`,
                            color: mod.color,
                            background: `${mod.color}10`,
                          }}
                        >
                          {mod.category}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-[20px] font-bold text-white md:text-[22px]">
                        {mod.name}
                      </h3>
                      <p className={`mt-2 font-body text-[13.5px] leading-[1.65] text-[var(--text-secondary)] ${onLeft ? "" : "md:ml-auto"}`}>
                        {mod.spec}
                      </p>
                    </GlassCard>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SECTION 4: ONE BATTLE STATION (0.58 - 0.72) ────────── */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-[860px] rounded-[24px] border border-white/15 bg-[#05070B]/85 p-8 md:p-12 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.9)]">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#10B981]">
              Unified Execution Environment
            </span>
            <h2 className="mt-4 font-display text-[34px] font-extrabold leading-[1.1] text-white sm:text-[52px]">
              Eight weapons. One battle station.
            </h2>
            <p className="mt-6 font-body text-[16px] leading-[1.85] text-[var(--text-secondary)] md:text-[19px]">
              Everything runs in a single OS on your desktop — private, offline-capable, always in
              memory. When your tools share one unified brain, business throughput multiplies.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[12px] text-white/80">
                ✓ One Memory Context
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[12px] text-white/80">
                ✓ One Lifetime Licence
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[12px] text-white/80">
                ✓ Zero Cloud Leaks
              </span>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: RUNS WHILE YOU TALK (0.72 - 0.85) ──────── */}
        <section className="min-h-screen flex flex-col justify-center px-6 py-20">
          <div className="mx-auto max-w-[1140px] w-full">
            <div className="text-center mb-10">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2FE0C8]">
                Multitasking Intelligence
              </span>
              <h2 className="mt-3 font-display text-[32px] font-bold text-white md:text-[46px]">
                The workspace that works while you talk.
              </h2>
              <p className="mx-auto mt-2 max-w-[600px] font-body text-[15px] text-[var(--text-secondary)]">
                Screen sharing, camera, memory, skills, multi-agents and tools executing together in
                parallel.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center">
              <div className="overflow-hidden rounded-[18px] border border-white/15 bg-[#080B11] p-5 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[11px] text-[var(--text-tertiary)]">
                  <span className="flex items-center gap-2 text-[#2FE0C8]">
                    <Mic size={14} /> LIVE VOICE STREAM
                  </span>
                  <span>LATENCY: 180ms</span>
                </div>
                <div className="mt-4 space-y-3 font-mono text-[12.5px]">
                  <p className="text-white/50">
                    <span className="text-[#2FE0C8] font-bold">[YOU]:</span> "Pull top leads from
                    yesterday's campaign, draft custom proposals, and prepare a WhatsApp summary."
                  </p>
                  <p className="text-[#2FE0C8]">
                    <span className="text-white/70 font-bold">[CORE]:</span> "Dispatching Digi CRM
                    lead extractor & Digi Docs drafting agent. 14 contracts ready in sandbox."
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { title: "Digi CRM", desc: "Filtered 14 high-value leads (£32,000 potential)" },
                  { title: "Digi Docs", desc: "Compiled 14 custom proposal PDFs with legal terms" },
                  { title: "WhatsApp Agent", desc: "Queued personalized follow-ups for dispatch" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div>
                      <h4 className="font-display text-[15px] font-bold text-white">{item.title}</h4>
                      <p className="text-[12.5px] text-[var(--text-secondary)]">{item.desc}</p>
                    </div>
                    <CheckCircle2 size={18} className="text-[#2FE0C8]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 6: ENGINEERING STORY (0.85 - 0.92) ────────── */}
        <section className="min-h-screen flex flex-col justify-center px-6 py-20 text-center">
          <div className="mx-auto max-w-[900px]">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#EAB308]">
              Engineered For Power & Privacy
            </span>
            <h2 className="mt-4 font-display text-[32px] font-bold text-white md:text-[50px]">
              Turn a single sentence into finished business work.
            </h2>
            <p className="mt-5 font-body text-[16px] leading-[1.85] text-[var(--text-secondary)] md:text-[18px]">
              The goal was simple to describe and hard to build: turn a single human instruction into
              verified, finished work — privately, on hardware you already own.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <GlassCard glowColor="#2FE0C8" className="p-6">
                <p className="font-display text-[36px] font-black text-[#2FE0C8]">500+</p>
                <p className="mt-1 font-display text-[15px] font-bold text-white">AI Skills</p>
                <p className="mt-1 font-body text-[12px] text-[var(--text-tertiary)]">
                  Switchable live during execution
                </p>
              </GlassCard>

              <GlassCard glowColor="#8B5CF6" className="p-6">
                <p className="font-display text-[36px] font-black text-[#8B5CF6]">150+</p>
                <p className="mt-1 font-display text-[15px] font-bold text-white">Mixed Tools</p>
                <p className="mt-1 font-body text-[12px] text-[var(--text-tertiary)]">
                  Plus 40+ MCP servers ready
                </p>
              </GlassCard>

              <GlassCard glowColor="#10B981" className="p-6">
                <p className="font-display text-[36px] font-black text-[#10B981]">100%</p>
                <p className="mt-1 font-display text-[15px] font-bold text-white">Local Privacy</p>
                <p className="mt-1 font-body text-[12px] text-[var(--text-tertiary)]">
                  Zero cloud telemetry leaks
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* ── SECTION 7: INTERACTIVE FINALE ("Say it. Done.") ───── */}
        <section className="min-h-screen px-6 py-24 flex flex-col justify-center">
          <div className="mx-auto max-w-[1180px] w-full">
            <div className="text-center mb-10">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2FE0C8]">
                Interactive Battle Station
              </span>
              <h2 className="mt-3 font-display text-[36px] font-extrabold text-white md:text-[56px]">
                Say it. Done. Delivered.
              </h2>
              <p className="mx-auto mt-2 max-w-[620px] font-body text-[16px] text-[var(--text-secondary)]">
                Take the controls. Select or speak a real business task below and watch the Command
                Core route energy, trigger the module, and deliver the result in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
              {/* Left Control Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#080B11] p-3 font-mono text-[12px]">
                  <span className="text-[var(--text-tertiary)]">AI BRAIN PERSONA:</span>
                  <div className="flex gap-2">
                    {(["Nova-7", "Titan-Prime"] as const).map((persona) => (
                      <button
                        key={persona}
                        onClick={() => setVoicePersona(persona)}
                        className={`rounded-lg px-3 py-1 text-[11px] font-semibold transition ${
                          voicePersona === persona
                            ? "bg-[#2FE0C8] text-[#05070B]"
                            : "bg-white/5 text-white/60 hover:text-white"
                        }`}
                      >
                        {persona}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <p className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider">
                    Pick a Command to Execute:
                  </p>
                  {DEMO_COMMANDS.map((cmd, idx) => {
                    const isSelected = selectedCommandIndex === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleExecuteCommand(idx)}
                        className={`w-full text-left rounded-xl border p-4 transition-all duration-200 ${
                          isSelected
                            ? "border-[#2FE0C8] bg-[#2FE0C8]/10 shadow-[0_0_20px_rgba(47,224,200,0.15)]"
                            : "border-white/10 bg-white/5 hover:border-white/25"
                        }`}
                      >
                        <div className="flex items-center justify-between font-display text-[14px] font-bold text-white">
                          <span>{cmd.label}</span>
                          <span
                            className="font-mono text-[10px] px-2 py-0.5 rounded border"
                            style={{
                              borderColor: `${targetModule.color}40`,
                              color: targetModule.color,
                            }}
                          >
                            {targetModule.name}
                          </span>
                        </div>
                        <p className="mt-1.5 font-mono text-[12px] text-[var(--text-secondary)] italic">
                          {cmd.command}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Output Column */}
              <div className="lg:col-span-7">
                <GlassCard
                  glowColor={targetModule.color}
                  className="p-6 md:p-8 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{
                          background: `${targetModule.color}20`,
                          borderColor: `${targetModule.color}50`,
                        }}
                      >
                        <Zap size={20} style={{ color: targetModule.color }} />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase text-[var(--text-tertiary)]">
                          TARGET MODULE
                        </span>
                        <h4 className="font-display text-[16px] font-bold text-white">
                          {targetModule.name}
                        </h4>
                      </div>
                    </div>

                    <span
                      className="font-mono text-[11px] font-semibold px-3 py-1 rounded-full border"
                      style={{
                        borderColor: isExecuting ? "#F59E0B" : "#10B981",
                        color: isExecuting ? "#F59E0B" : "#10B981",
                        background: isExecuting ? "rgba(245,158,11,0.1)" : "rgba(16,185,129,0.1)",
                      }}
                    >
                      {isExecuting ? "ROUTING & EXECUTING..." : "TASK DELIVERED ✓"}
                    </span>
                  </div>

                  <div className="mt-6">
                    <span className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase">
                      Holographic Delivered Output:
                    </span>
                    <h3 className="mt-1 font-display text-[22px] font-extrabold text-white">
                      {activeCmd.outputTitle}
                    </h3>

                    <div className="mt-4 space-y-2.5 rounded-xl bg-black/40 border border-white/10 p-4 font-body text-[13.5px]">
                      {activeCmd.outputDetails.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-[var(--text-secondary)]">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0"
                            style={{ color: targetModule.color }}
                          />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[11px] text-[var(--text-tertiary)]">
                      <span>{activeCmd.metricTag}</span>
                      <span>EXECUTION TIME: 0.38s</span>
                    </div>
                  </div>
                </GlassCard>

                {/* Final Download CTA Bar */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#2FE0C8]/30 bg-[#2FE0C8]/5 p-6 backdrop-blur-md">
                  <div>
                    <h4 className="font-display text-[18px] font-bold text-white">
                      Ready to operate your business hands-free?
                    </h4>
                    <p className="text-[13px] text-[var(--text-secondary)]">
                      Get full lifetime access to DIGI BIZ OS.
                    </p>
                  </div>
                  <Link to="/pricing">
                    <CyanButton icon={<Download size={16} />}>
                      Download for Windows
                    </CyanButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
