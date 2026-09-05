import { SEO_PAGES } from "../src/content/seo-pages";
import { BLOG_POSTS } from "../src/content/blog-posts";
import { MODULES_LIST } from "../src/content/modules-data";
import { MODELS_LIST } from "../src/content/models-data";

interface AuditEntry {
  path: string;
  type: "static" | "module" | "model" | "feature" | "intent" | "blog" | "compare";
  title: string;
  description: string;
  hasDirectAnswer?: boolean;
}

const BASE_URL = "https://digibizos.co.uk";

const STATIC_ENTRIES: { path: string; title: string; description: string }[] = [
  { path: "/", title: "JARVIS AI for PC — Autonomous Multi-Agent Desktop OS | DIGI BIZ OS", description: "The JARVIS AI for PC and business you've been searching for. DIGI BIZ OS turns Windows into a cinematic, voice-controlled sci-fi desktop — multi-agent automation, extensive skills library, local privacy, $0 subscription." },
  { path: "/features", title: "All Features — DIGI BIZ OS AI Business Operating System", description: "Explore the full capabilities of DIGI BIZ OS: voice control, multi-agent runs, coding, documents, workflows, desktop automation and private local models." },
  { path: "/voice-ai", title: "Voice AI Control — Offline Whisper Speech Recognition | DIGI BIZ OS", description: "Control your entire PC and business operations with offline voice commands, real-time waveform visualization, and instant transcription with zero cloud latency." },
  { path: "/desktop-os", title: "AI Desktop OS for Windows — Autonomous Workstation | DIGI BIZ OS", description: "Transform Windows 10 & 11 into an autonomous business workstation. Run local models, control desktop apps, execute CLI scripts, and manage files hands-free." },
  { path: "/agents", title: "Multi-Agent Platform — Specialist AI Workers | DIGI BIZ OS", description: "Deploy autonomous AI agents that collaborate to execute complex business tasks: coding, research, financial analysis, document drafting, and workflow automation." },
  { path: "/integrations", title: "Integrations & Tools Hub — MCP & Universal Connectors | DIGI BIZ OS", description: "Connect DIGI BIZ OS to the platforms your business already runs on with multi-MCP connectivity, local runners and native agent-accessible tools." },
  { path: "/pricing", title: "One-Time Lifetime Pricing — No Subscriptions | DIGI BIZ OS", description: "Own your AI business operating system forever for £50. Includes complete PC setup, 5 custom business workflows, lifetime updates, and zero recurring seat fees." },
  { path: "/blog", title: "Blog & Enterprise AI Guides — DIGI BIZ OS", description: "In-depth guides, architecture teardowns, and software comparisons for business automation, local AI models, CRM optimization, and voice productivity." },
  { path: "/download", title: "Download DIGI BIZ OS for Windows 10 & 11 | Instant Setup", description: "Download DIGI BIZ OS desktop installer for Windows. Start automating your business with local AI models, offline CRM, voice control, and multi-agent workflows." },
  { path: "/open-source", title: "Open Source Software Suite — 12 Free Tools | DIGI BIZ OS", description: "Explore 12 world-class open-source software tools pre-configured to run alongside DIGI BIZ OS with zero cloud dependencies and zero subscription fees." },
  { path: "/open-source/openhands", title: "OpenHands Autonomous AI Software Engineer | Free Devin Alternative", description: "Open-source autonomous AI software developer for Windows. Solves GitHub issues, builds full-stack apps, and writes unit tests inside Docker containers." },
  { path: "/open-source/openclaw", title: "OpenClaw Autonomous AI Agent | Free Claude Computer-Use Alternative", description: "Open-source autonomous desktop agent for Windows. Automates browsers, terminal tasks, and file operations with zero telemetry and zero cloud API lock-in." },
  { path: "/open-source/hermes-agent", title: "Hermes Autonomous Reasoning & Tool Agent | Free Local Agent", description: "Open-source multi-step reasoning agent with function calling, structured thinking, and offline tool execution on Windows and macOS." },
  { path: "/open-source/jan-ai", title: "Jan AI — Free Offline AI Platform for Windows | Local LLM Runner", description: "Run DeepSeek, Llama, and Mistral locally on your PC. 100% offline, privacy-first alternative to ChatGPT with OpenAI-compatible local API server." },
  { path: "/open-source/anythingllm", title: "AnythingLLM — Chat with Documents & PDFs | Private Knowledge Base", description: "Private desktop document intelligence. Ingest PDFs, spreadsheets, and URLs into a local vector database for instant citation-backed answers with zero cloud leakage." },
  { path: "/open-source/tuttle", title: "Tuttle Time Tracker — Billable Hours & Productivity | Free Windows App", description: "Lightweight, privacy-first desktop time tracker. Monitor billable hours, generate invoice timesheets, and export CSV reports with zero background tracking." },
  { path: "/open-source/pocketbase", title: "PocketBase — Embedded SQLite Realtime Backend | Single 32MB File", description: "Download PocketBase free: instant high-speed database, built-in user auth, OAuth, real-time APIs and file storage in a single 32 MB executable for Windows." },
  { path: "/open-source/upscayl", title: "Upscayl AI Image Enhancer — 4x Free Offline Upscaler | Windows & Mac", description: "Enhance and upscale low-resolution images up to 8x using offline deep learning models (REAL-ESRGAN). 100% free, batch processing, zero cloud uploads." },
  { path: "/open-source/kdenlive", title: "Kdenlive Video Editor — Free Open-Source Premiere Alternative", description: "Professional multi-track timeline video editor for Windows. 4K editing, keyframe animations, audio mixing, color correction, and zero subscription fees." },
  { path: "/open-source/facefusion", title: "FaceFusion AI Face Swap Studio — High-Fidelity Deepfake & Video", description: "Next-generation face swapping and enhancement suite. High-resolution face replacement, lip syncing, and frame restoration powered by local GPU acceleration." },
  { path: "/open-source/deep-live-cam", title: "Deep-Live-Cam — Real-Time Live Webcam Face Swapper | Free Windows App", description: "Real-time face swapping for live video streams and webcams. Instant 1-click avatar transformation for streaming, OBS, and private video calls." },
  { path: "/open-source/shotcut", title: "Shotcut 4K Video Editor — Free Open-Source Filmora Alternative", description: "Free, cross-platform open-source video editor. Native timeline editing, 4K ProRes support, GPU effects, multi-format export, and zero watermarks." },
  { path: "/open-source/audacity", title: "Audacity Audio Studio — Free Multi-Track Audio Workstation", description: "Industry-standard open-source audio recording and editing software. Multi-track mixing, noise reduction, podcast mastering, and spectral frequency editing." },
  { path: "/open-source/opencut", title: "OpenCut Social Video Editor — Free Vertical Video & Reels Studio", description: "Free open-source video editor optimized for TikTok, Instagram Reels, and YouTube Shorts. Auto-captions, vertical canvas, and trending split-screen templates." },
  { path: "/open-source/seo-spider", title: "Open SEO Spider & Technical Audit Suite — Free Crawler & Schema", description: "Free desktop website crawler and technical SEO auditor. Find broken links, audit canonical tags, validate JSON-LD schema, and generate XML sitemaps." },
  { path: "/about", title: "About Digiformation Ltd & The Vision Behind DIGI BIZ OS", description: "Learn about Digiformation Ltd, the engineering team behind DIGI BIZ OS. Building sovereign, local-first AI software that empowers businesses without subscriptions." },
  { path: "/contact", title: "Contact DIGI BIZ OS — Sales, Engineering & Support", description: "Get in touch with the DIGI BIZ OS team. Request a custom deployment consultation, ask technical questions, or inquire about enterprise partner licenses." },
  { path: "/faq", title: "Frequently Asked Questions (FAQ) — DIGI BIZ OS", description: "Answers to common questions about DIGI BIZ OS: system requirements, licensing, offline operation, WhatsApp integration, API keys, and workflow customization." },
  { path: "/sitemap", title: "Site Map — All DIGI BIZ OS Pages | Full Directory", description: "Browse every DIGI BIZ OS page: product features, voice AI, desktop automation, agents, integrations, pricing, download, comparisons, guides and support." },
  { path: "/terms", title: "Terms & Conditions — DIGI BIZ OS Software License", description: "Terms and conditions for purchasing and using DIGI BIZ OS software, licenses, updates, and custom workflow development services." },
  { path: "/privacy", title: "Privacy Policy — DIGI BIZ OS Sovereign Data Commitment", description: "Our strict privacy pledge: DIGI BIZ OS operates locally on your machine with zero telemetry, zero data harvesting, and 100% private local execution." },
  { path: "/refund", title: "Refund Policy — DIGI BIZ OS 14-Day Money-Back Guarantee", description: "Details on the DIGI BIZ OS 14-day money-back guarantee, refund eligibility criteria, and simple request process for desktop software purchases." },
  { path: "/delivery", title: "Delivery Policy — Instant Digital License & Onboarding", description: "Information on instant digital download delivery, license key activation, setup scheduling, and support delivery for DIGI BIZ OS." },
  { path: "/modules", title: "Enterprise Business Modules — DIGI BIZ OS Architecture", description: "Explore the 12 core operational modules of DIGI BIZ OS: CRM, Studio, AI Brain, Code, CLI, MCP switchboard, Connectors, Models, and Operations Center." },
  { path: "/models", title: "AI Models Universe — Local & Cloud Neural Engines | DIGI BIZ OS", description: "Discover the neural models supported by DIGI BIZ OS: DeepSeek R1, Qwen 2.5 Coder, Llama 3.3, Claude 3.7, GPT-4o, and private offline GGUF weights." },
  { path: "/compare", title: "Software Comparisons & Alternatives — DIGI BIZ OS", description: "In-depth, balanced architectural comparisons between DIGI BIZ OS and traditional SaaS platforms, cloud CRMs, automation tools, and AI assistants." },
];

function runFullAudit() {
  const allEntries: AuditEntry[] = [];
  const issues: string[] = [];
  const paths = new Set<string>();
  const titles = new Set<string>();

  const check = (entry: AuditEntry) => {
    if (paths.has(entry.path)) {
      issues.push(`Duplicate path detected: ${entry.path}`);
    }
    paths.add(entry.path);

    if (titles.has(entry.title)) {
      issues.push(`Duplicate title detected on ${entry.path}: "${entry.title}"`);
    }
    titles.add(entry.title);

    if (!entry.title || entry.title.length < 20) {
      issues.push(`Title too short on ${entry.path} (${entry.title.length} chars)`);
    }
    if (!entry.description || entry.description.length < 50) {
      issues.push(`Description too short on ${entry.path} (${entry.description?.length} chars)`);
    }

    allEntries.push(entry);
  };

  // Static
  STATIC_ENTRIES.forEach((s) => check({ ...s, type: "static" }));

  // Modules
  MODULES_LIST.forEach((m) => {
    check({
      path: `/modules/${m.slug}`,
      type: "module",
      title: m.metaTitle,
      description: m.metaDescription,
      hasDirectAnswer: Boolean(m.directAnswer),
    });
  });

  // Models
  MODELS_LIST.forEach((m) => {
    check({
      path: `/models/${m.slug}`,
      type: "model",
      title: m.metaTitle,
      description: m.metaDescription,
      hasDirectAnswer: Boolean(m.description),
    });
  });

  // SEO Pages (Features + Intents)
  SEO_PAGES.forEach((p) => {
    check({
      path: p.path,
      type: p.group === "features" ? "feature" : "intent",
      title: p.metaTitle,
      description: p.metaDescription,
      hasDirectAnswer: Boolean(p.intro),
    });
  });

  // Blogs & Comparisons
  BLOG_POSTS.forEach((b) => {
    check({
      path: `/blog/${b.slug}`,
      type: b.slug.includes("-vs-") ? "compare" : "blog",
      title: b.metaTitle,
      description: b.description,
      hasDirectAnswer: Boolean(b.description),
    });
  });

  return { allEntries, issues };
}

const audit = runFullAudit();
console.log("=================================================================");
console.log("       DIGI BIZ OS 2026 MAXIMUM SEO & INDEXABILITY AUDIT         ");
console.log("=================================================================");
console.log(`Total URLs Audited: ${audit.allEntries.length}`);
console.log(`- Core Static & Pillar URLs: ${audit.allEntries.filter((e) => e.type === "static").length}`);
console.log(`- Enterprise Modules (/modules/*): ${audit.allEntries.filter((e) => e.type === "module").length}`);
console.log(`- AI Models Universe (/models/*): ${audit.allEntries.filter((e) => e.type === "model").length}`);
console.log(`- Feature Landing Pages (/features/*): ${audit.allEntries.filter((e) => e.type === "feature").length}`);
console.log(`- High-Intent Solution Pages: ${audit.allEntries.filter((e) => e.type === "intent").length}`);
console.log(`- Strategic Comparisons & Guides (/blog/*): ${audit.allEntries.filter((e) => e.type === "blog" || e.type === "compare").length}`);
console.log("-----------------------------------------------------------------");
console.log(`Defects / Duplications / Broken Metadata: ${audit.issues.length}`);
if (audit.issues.length > 0) {
  audit.issues.forEach((i) => console.error("  ❌ " + i));
} else {
  console.log("  ✅ 100% Clean Audit: Zero duplicates, zero missing metadata, zero defects.");
}
console.log("=================================================================");
