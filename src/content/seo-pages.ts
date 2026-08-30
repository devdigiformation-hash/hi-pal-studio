import osMain from "@/assets/os-main-dashboard.png";
import osAiHub from "@/assets/os-digi-ai-hub.png";
import osCrm from "@/assets/os-digi-crm.png";
import osIntel from "@/assets/os-digi-intelligence.png";
import osMkt from "@/assets/os-digi-marketing.png";
import osWa from "@/assets/os-digi-whatsapp.png";
import osCode from "@/assets/os-digi-code.png";
import osDocs from "@/assets/os-digi-docs.png";
import osTools from "@/assets/os-digi-tools.png";
import osCli from "@/assets/os-digi-cli.png";
import osMcp from "@/assets/os-digi-mcp.png";
import osSkills from "@/assets/os-skills.png";
import osDesktopTools from "@/assets/os-desktop-tools.png";
import osGraph from "@/assets/os-graph-full.png";
import osTranscript from "@/assets/os-transcript.png";
import osLiveTracking from "@/assets/os-live-tracking.png";
import osShell from "@/assets/os-shell.png";
import osSidebar from "@/assets/os-sidebar.png";
import osRuntime from "@/assets/os-runtime.png";
import jarvisRobot from "@/assets/jarvis-robot.png";

export interface SeoImage {
  src: string;
  alt: string;
  caption: string;
}

export interface SeoSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface SeoPage {
  path: string;
  group: "feature" | "intent" | "compare";
  eyebrow: string;
  h1: string;
  h1Gradient: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  answers: { q: string; a: string }[];
  capabilities: { title: string; body: string }[];
  sections: SeoSection[];
  faq: { q: string; a: string }[];
  links: { label: string; to: string }[];
  image?: SeoImage;
  accent?: string;
}

const img = (a: string | { url: string }, alt: string, caption: string): SeoImage => ({
  src: typeof a === "string" ? a : a.url,
  alt,
  caption,
});

const CTA_CORE = [
  { label: "All DIGI BIZ OS features", to: "/features" },
  { label: "Pricing & lifetime licence", to: "/pricing" },
];

export const SEO_PAGES: SeoPage[] = [
  /* ------------------------------------------------------------------ */
  /* FLAGSHIP INTENT PAGES                                              */
  /* ------------------------------------------------------------------ */
  {
    path: "/jarvis-ai",
    group: "intent",
    eyebrow: "JARVIS-Style AI",
    h1: "Your Own JARVIS AI",
    h1Gradient: "For Your PC and Your Business.",
    metaTitle: "JARVIS AI for PC — A JARVIS-Style AI Assistant That Works | DIGI BIZ OS",
    metaDescription:
      "DIGI BIZ OS is a JARVIS-style AI assistant for Windows: talk to it, and it plans, uses agents, skills and tools, controls your desktop and runs real business work.",
    intro:
      "Most people who search for a JARVIS AI want the same thing: an assistant they can talk to that actually does the work instead of writing about it. DIGI BIZ OS is built for exactly that — a voice-first AI business operating system that listens, understands, plans, picks the right agent, skill or tool, executes on your computer and reports back.",
    answers: [
      {
        q: "What is a JARVIS-style AI assistant?",
        a: "A JARVIS-style AI assistant is a voice-driven assistant that can understand natural instructions, plan multi-step work and then execute it using tools on your computer — rather than only answering questions in a chat window.",
      },
      {
        q: "Is DIGI BIZ OS a real JARVIS?",
        a: "DIGI BIZ OS is JARVIS-inspired, not the fictional Marvel system. It delivers the practical part of the idea: voice interaction, planning, multi-agent execution, 500+ skills, 150+ mixed tools, desktop control, coding, documents and business automation in one app for Windows.",
      },
      {
        q: "What can it actually do?",
        a: "Speak a request and it can run workflows, schedule jobs, complete tasks, open and use applications, work with files and documents, write and run code, use the terminal and browser, and hand work to specialist AI agents.",
      },
    ],
    capabilities: [
      {
        title: "It listens",
        body: "Voice-first control with live transcription, so you can brief it while you work.",
      },
      {
        title: "It understands",
        body: "Your instruction is turned into an intent with context from memory and your workspace.",
      },
      {
        title: "It plans",
        body: "Multi-step plans are built before execution, so complex requests do not collapse into one answer.",
      },
      {
        title: "It uses tools",
        body: "150+ mixed tools cover files, documents, system utilities, browser and connected services.",
      },
      {
        title: "It uses agents",
        body: "Specialist agents take ownership of coding, research, documents or operations work.",
      },
      {
        title: "It reports back",
        body: "Live tracking shows every step, tool call and result while the work is running.",
      },
    ],
    sections: [
      {
        heading: "From voice to finished work",
        body: "The pipeline is the difference between a chatbot and a JARVIS-style assistant. DIGI BIZ OS follows a full execution loop every time you speak.",
        bullets: [
          "Voice — speak naturally; the live transcript shows exactly what was heard.",
          "Understand — the request is interpreted against your memories, personas and current workspace.",
          "Plan — the work is broken into steps with the right agent, skill and tool selected per step.",
          "Execute — steps run on your machine: files, apps, terminal, browser, documents, code.",
          "Report — you see the outcome, the artefacts produced and the full run history.",
        ],
      },
      {
        heading: "Why a JARVIS needs a body, not just a brain",
        body: "A language model alone cannot rename a folder, sign a PDF, run a build, schedule a nightly job or send a report. DIGI BIZ OS gives the model hands: a skill system, a tool layer, a terminal, a browser, a document workspace and a scheduler — all on your own machine.",
      },
      {
        heading: "Built for business, not novelty",
        body: "The assistant is designed around real operating work: recurring jobs, document processing, research, reporting, coding and admin. That is why it is an AI business operating system rather than a desk toy.",
      },
    ],
    faq: [
      {
        q: "Does it work on Windows?",
        a: "Yes. DIGI BIZ OS runs on Windows 10 and Windows 11. macOS, Linux and mobile versions are marked coming soon.",
      },
      {
        q: "Do I need to code?",
        a: "No. Voice and chat are the primary interfaces. Coding tools exist for people who want them.",
      },
      {
        q: "Is it a subscription?",
        a: "No. The core licence is a one-time lifetime payment. Source code and custom build licences are also available.",
      },
      {
        q: "Can I add my own skills?",
        a: "Yes. Custom skills, memories, tools, agents, workflows and scheduled jobs are all created inside the app.",
      },
    ],
    links: [
      { label: "AI Business Operating System", to: "/ai-business-operating-system" },
      { label: "AI Desktop Assistant", to: "/ai-desktop-assistant" },
      { label: "Voice AI control", to: "/voice-ai" },
      { label: "Multi-agent AI", to: "/multi-agent-ai" },
      { label: "AI skills", to: "/features/ai-skills" },
      { label: "AI tools", to: "/features/ai-tools" },
      ...CTA_CORE,
    ],
    image: img(
      { url: jarvisRobot },
      "Futuristic humanoid AI robot in profile, representing the JARVIS-style assistant",
      "JARVIS-style intelligence: an assistant built to listen, plan and execute.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/ai-business-operating-system",
    group: "intent",
    eyebrow: "AI Business OS",
    h1: "An AI Business Operating System",
    h1Gradient: "That Can Actually Execute.",
    metaTitle: "AI Business Operating System — Agents, Workflows & Automation | DIGI BIZ OS",
    metaDescription:
      "DIGI BIZ OS is an AI business operating system: voice control, AI agents, 500+ skills, 150+ tools, workflows, scheduled jobs and desktop automation in one Windows app.",
    intro:
      "An AI business operating system is the layer where your models, agents, tools, data and business processes live together. Instead of ten disconnected AI tabs, DIGI BIZ OS gives your business one environment that can hold context, run workflows, schedule jobs and complete work on your own machine.",
    answers: [
      {
        q: "What is an AI business operating system?",
        a: "It is a single environment that combines AI models, agents, skills, tools, memory, workflows and scheduling so a business can delegate real operational work to AI instead of only chatting with it.",
      },
      {
        q: "How is it different from a chatbot?",
        a: "A chatbot returns text. An AI business OS selects agents, calls tools, touches files and applications, runs scheduled jobs and produces finished output.",
      },
      {
        q: "Who is it for?",
        a: "Founders, agencies, developers, consultants and small operations teams who want AI to carry recurring work rather than advise on it.",
      },
    ],
    capabilities: [
      {
        title: "Intelligence layer",
        body: "Multiple AI models, a model router, memories and personas keep context consistent.",
      },
      { title: "Agent layer", body: "Multi-agent execution with delegation between specialists." },
      {
        title: "Skill layer",
        body: "500+ AI skills plus custom skills you create and reuse forever.",
      },
      {
        title: "Tool layer",
        body: "150+ mixed tools spanning documents, files, system utilities and connected services.",
      },
      {
        title: "Automation layer",
        body: "Workflows, scheduled jobs and background tasks that run without you.",
      },
      {
        title: "Computer layer",
        body: "Desktop control, terminal, browser and document workspace on your own PC.",
      },
    ],
    sections: [
      {
        heading: "The DIGI BIZ OS module map",
        body: "Every module is a named part of the ecosystem so you always know where work happens.",
        bullets: [
          "Digi AI — chat, personas, providers and the intelligence hub.",
          "DigiCode — coding workspace, repository intelligence and project automation.",
          "DigiDocs — PDF and document processing, conversion and OCR.",
          "DigiTools — 150+ mixed and offline utilities available to you and to agents.",
          "DigiCLI — terminal and command execution.",
          "DigiMCP — connected services and local runners.",
          "DigiFlow, DigiJobs, DigiTasks — workflows, scheduled jobs and task execution.",
        ],
      },
      {
        heading: "Operations you can hand over",
        body: "Because the OS can execute, the unit of delegation becomes a process, not a prompt. Typical handovers include document intake and conversion, recurring reporting, research digests, repository maintenance, file organisation, admin batches and scheduled business checks.",
      },
      {
        heading: "One licence, no per-seat AI sprawl",
        body: "The OS is licensed once for lifetime access, with optional source code and fully customised build licences for businesses that want their own branded internal AI OS.",
      },
    ],
    faq: [
      {
        q: "Does it replace my existing software?",
        a: "No. It sits on top of your desktop and works with the applications, files and services you already use.",
      },
      {
        q: "Can it run unattended?",
        a: "Yes — workflows and scheduled jobs run hourly, daily or weekly without supervision.",
      },
      {
        q: "Can we brand it for our company?",
        a: "Yes. The custom build licence covers your branding and business-specific automation.",
      },
    ],
    links: [
      { label: "AI business assistant", to: "/ai-business-assistant" },
      { label: "AI workflow automation", to: "/ai-workflow-automation" },
      { label: "AI agents platform", to: "/agents" },
      { label: "DigiJobs — scheduled jobs", to: "/features/digijobs" },
      { label: "DigiTasks — task automation", to: "/features/digitasks" },
      { label: "JARVIS-style assistant", to: "/jarvis-ai" },
      ...CTA_CORE,
    ],
    image: img(
      osGraph,
      "DIGI BIZ OS execution graph showing agents, skills and tools working together",
      "Live execution graph: the OS routing a request through agents, skills and tools.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/ai-business-assistant",
    group: "intent",
    eyebrow: "For Business Owners",
    h1: "An AI Business Assistant",
    h1Gradient: "That Finishes the Job.",
    metaTitle: "AI Business Assistant for Founders, Agencies & Teams | DIGI BIZ OS",
    metaDescription:
      "An AI business assistant that executes: voice briefs, agents, skills, tools, documents, reporting and scheduled jobs — running on your own Windows machine.",
    intro:
      "Most AI assistants stop at advice. A business assistant has to produce output — the report, the converted document, the organised folder, the scheduled check, the drafted response. DIGI BIZ OS is built around that expectation.",
    answers: [
      {
        q: "What does an AI business assistant do?",
        a: "It takes a spoken or written brief, plans the work, uses the right skills and tools, executes it on your computer and returns the finished result.",
      },
      {
        q: "Who benefits most?",
        a: "Founders, agencies, consultants, developers and small operations teams handling repetitive admin, documents, research and reporting.",
      },
    ],
    capabilities: [
      { title: "Voice briefs", body: "Describe the task out loud while you carry on working." },
      {
        title: "Document work",
        body: "PDF conversion, OCR, compression, signing and redaction through DigiDocs.",
      },
      {
        title: "Research",
        body: "Browser-based research agents that collect and summarise findings.",
      },
      { title: "Reporting", body: "Recurring reports produced on a schedule with DigiJobs." },
      {
        title: "Admin batches",
        body: "File renaming, sorting, extraction and clean-up across folders.",
      },
      {
        title: "Team memory",
        body: "Custom memories hold the rules, facts and preferences it must never forget.",
      },
    ],
    sections: [
      {
        heading: "Delegate a process, not a prompt",
        body: "Write the process once as a workflow or skill, then trigger it by voice or let it run on a schedule. The assistant keeps the standard consistent every time, which is where most manual admin loses money.",
      },
      {
        heading: "Roles it can cover",
        body: "The same OS can behave as several assistants depending on the persona and agent you select.",
        bullets: [
          "Operations assistant — recurring checks, reporting and follow-ups.",
          "Document assistant — intake, conversion, OCR and packaging.",
          "Research assistant — browser research and structured summaries.",
          "Technical assistant — code, terminal and repository work.",
        ],
      },
    ],
    faq: [
      {
        q: "Is my data sent anywhere?",
        a: "The OS runs locally on your machine and works with your local files; you control which providers and connected services are enabled.",
      },
      {
        q: "How long does setup take?",
        a: "Install on Windows, sign in and start speaking. Custom skills and workflows can be added later.",
      },
    ],
    links: [
      { label: "AI business operating system", to: "/ai-business-operating-system" },
      { label: "AI business automation", to: "/ai-business-automation" },
      { label: "AI workflow automation", to: "/ai-workflow-automation" },
      { label: "DigiDocs document workspace", to: "/features/digidocs" },
      ...CTA_CORE,
    ],
    image: img(
      osSidebar,
      "DIGI BIZ OS sidebar showing modules for AI, code, documents, tools and automation",
      "One sidebar, one OS: every business module in a single workspace.",
    ),
    accent: "var(--amber)",
  },
  {
    path: "/ai-desktop-assistant",
    group: "intent",
    eyebrow: "Desktop AI",
    h1: "The AI Desktop Assistant",
    h1Gradient: "For Windows 10 and 11.",
    metaTitle: "AI Desktop Assistant for Windows 10 & 11 | DIGI BIZ OS",
    metaDescription:
      "An AI desktop assistant for Windows that controls applications, files, terminal and browser by voice — with agents, 500+ skills and 150+ tools built in.",
    intro:
      "An AI desktop assistant should be able to touch the desktop. DIGI BIZ OS installs on Windows 10 and 11 and works with your real applications, folders, documents and terminal instead of living inside a browser tab.",
    answers: [
      {
        q: "What is an AI desktop assistant?",
        a: "Software installed on your computer that can understand instructions and then operate the machine — opening applications, handling files, running commands and completing tasks.",
      },
      {
        q: "Which operating systems are supported?",
        a: "Windows 10 and Windows 11 today. macOS, Linux and mobile builds are listed as coming soon.",
      },
    ],
    capabilities: [
      { title: "Application control", body: "Work with the desktop applications you already use." },
      {
        title: "File operations",
        body: "Find, rename, sort, extract and move files across local folders.",
      },
      {
        title: "Terminal access",
        body: "Run commands through DigiCLI when a task needs the shell.",
      },
      { title: "Browser work", body: "Research and web tasks handled by a browser agent." },
      {
        title: "Screen and camera",
        body: "Screen sharing and camera support for context-aware help.",
      },
      { title: "Always-on voice", body: "Speak instead of switching windows to type." },
    ],
    sections: [
      {
        heading: "Local-first by design",
        body: "Your work happens on your own machine, against your own files. That matters for speed and for businesses that cannot upload client material to third-party tools by default.",
      },
      {
        heading: "Desktop automation without scripting",
        body: "Recurring desktop routines become workflows and scheduled jobs. Anything you repeat weekly can be handed over once and then simply monitored.",
      },
    ],
    faq: [
      { q: "Is it a browser extension?", a: "No. It is a desktop application for Windows." },
      {
        q: "Can it run offline utilities?",
        a: "Yes. Many of the 150+ mixed tools are offline utilities.",
      },
    ],
    links: [
      { label: "Computer-use AI", to: "/computer-use-ai" },
      { label: "AI desktop automation", to: "/ai-desktop-automation" },
      { label: "Voice assistant for PC", to: "/voice-assistant-for-pc" },
      { label: "Desktop OS overview", to: "/desktop-os" },
      ...CTA_CORE,
    ],
    image: img(
      osDesktopTools,
      "DIGI BIZ OS mixed desktop tools panel with system and file utilities",
      "The mixed tools panel: system, file and productivity utilities available to you and your agents.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/ai-assistant-for-windows",
    group: "intent",
    eyebrow: "Windows",
    h1: "AI Assistant for Windows",
    h1Gradient: "Voice In, Work Out.",
    metaTitle: "AI Assistant for Windows PC — Voice, Agents & Automation | DIGI BIZ OS",
    metaDescription:
      "Install a full AI assistant on your Windows PC: voice control, multi-agent execution, 500+ skills, 150+ tools, coding, documents and scheduled automation.",
    intro:
      "DIGI BIZ OS is a native Windows install, not a web app. Once it is running you can speak to your PC and get finished work back — documents processed, code written, folders organised, jobs scheduled.",
    answers: [
      { q: "Which Windows versions are supported?", a: "Windows 10 and Windows 11." },
      {
        q: "What makes it different from built-in assistants?",
        a: "It executes multi-step work using agents, skills and tools, and it can be extended with your own automations.",
      },
    ],
    capabilities: [
      {
        title: "One-time licence",
        body: "Lifetime access from a single payment — no monthly seat fees.",
      },
      {
        title: "Voice-first",
        body: "Speak your request; the live transcript keeps you in control.",
      },
      {
        title: "Agents included",
        body: "Multi-agent execution for coding, documents, research and operations.",
      },
      { title: "500+ skills", body: "Reusable capabilities you can trigger by voice." },
      {
        title: "150+ mixed tools",
        body: "Utilities that work with files, systems and connected services.",
      },
      { title: "Scheduling", body: "Hourly, daily or weekly jobs that run in the background." },
    ],
    sections: [
      {
        heading: "Install, speak, delegate",
        body: "Setup is a normal Windows install. After that, most people start with one recurring task — a weekly report, a document batch, a folder clean-up — and expand from there.",
      },
    ],
    faq: [
      { q: "Is there a Mac version?", a: "macOS is coming soon, along with Linux and mobile." },
      {
        q: "Do I get updates?",
        a: "Yes, the lifetime licence includes ongoing access to the product.",
      },
    ],
    links: [
      { label: "AI desktop assistant", to: "/ai-desktop-assistant" },
      { label: "AI assistant for PC", to: "/ai-assistant-for-pc" },
      { label: "Voice AI", to: "/voice-ai" },
      ...CTA_CORE,
    ],
    image: img(
      osMain,
      "AI assistant for Windows running the DIGI BIZ OS dashboard",
      "DIGI BIZ OS running on Windows with live voice transcription.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/ai-assistant-for-pc",
    group: "intent",
    eyebrow: "For Your PC",
    h1: "An AI Assistant for Your PC",
    h1Gradient: "That Can Use It.",
    metaTitle: "AI Assistant for PC — Control Your Computer With Voice | DIGI BIZ OS",
    metaDescription:
      "A PC AI assistant that opens applications, handles files, runs the terminal, researches in the browser and automates business tasks — controlled by voice.",
    intro:
      "The point of a PC assistant is leverage: fewer clicks, fewer repeated routines, fewer context switches. DIGI BIZ OS turns spoken instructions into executed work on your own computer.",
    answers: [
      {
        q: "Can an AI assistant control my PC?",
        a: "DIGI BIZ OS can operate supported desktop actions — applications, files, terminal, browser and documents — under your instruction.",
      },
      { q: "Is it hard to learn?", a: "No. You describe the outcome; the OS handles the steps." },
    ],
    capabilities: [
      { title: "Talk to your PC", body: "Voice-first interaction with live transcript." },
      { title: "Files and folders", body: "Bulk operations across local directories." },
      { title: "Documents", body: "PDF and document processing built in." },
      { title: "Terminal", body: "Command execution when a task needs it." },
      { title: "Browser", body: "Web research handled by an agent." },
      { title: "Automation", body: "Workflows and scheduled jobs for anything recurring." },
    ],
    sections: [
      {
        heading: "What people automate first",
        body: "Weekly reporting, document conversion batches, downloads folder clean-ups, research digests, repository chores and repeated admin sequences are the most common starting points.",
      },
    ],
    faq: [
      { q: "Does it need a powerful PC?", a: "It runs on standard Windows 10 and 11 machines." },
      {
        q: "Can it work with my existing files?",
        a: "Yes, it works with your local folders and documents.",
      },
    ],
    links: [
      { label: "AI assistant for Windows", to: "/ai-assistant-for-windows" },
      { label: "Computer-use AI", to: "/computer-use-ai" },
      { label: "AI productivity assistant", to: "/ai-productivity-assistant" },
      ...CTA_CORE,
    ],
    image: img(
      osShell,
      "DIGI BIZ OS shell running commands on a Windows PC",
      "DigiCLI executing a command as part of a larger plan.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/voice-ai-assistant",
    group: "intent",
    eyebrow: "Voice AI",
    h1: "A Voice AI Assistant",
    h1Gradient: "That Executes, Not Just Answers.",
    metaTitle: "Voice AI Assistant for Business & PC — Speak and It Runs | DIGI BIZ OS",
    metaDescription:
      "A voice AI assistant for business: speak a request and DIGI BIZ OS plans it, selects agents, skills and tools, and executes it on your Windows desktop.",
    intro:
      "Voice is the fastest input a human has. DIGI BIZ OS treats it as the primary interface: you speak, the OS transcribes live, interprets, plans and then runs the work.",
    answers: [
      {
        q: "What is a voice AI assistant?",
        a: "An assistant you operate by speaking. In DIGI BIZ OS the voice layer is connected to execution, so speech triggers real actions rather than only replies.",
      },
      {
        q: "Does it show what it heard?",
        a: "Yes — a live transcript panel shows the recognised speech and the resulting plan.",
      },
    ],
    capabilities: [
      { title: "Live transcription", body: "See the request as it is understood." },
      { title: "Hands-free operation", body: "Brief the OS while you keep working." },
      { title: "Voice-triggered skills", body: "Launch any of the 500+ skills by speaking." },
      {
        title: "Voice-triggered workflows",
        body: "Start multi-step automations with one sentence.",
      },
      { title: "Interruptible", body: "Stop or redirect a run at any point." },
      { title: "Context aware", body: "Memories and personas shape how requests are handled." },
    ],
    sections: [
      {
        heading: "Voice → Understand → Plan → Execute → Report",
        body: "This loop is what separates a voice assistant from a voice interface. Every spoken instruction is turned into a tracked run you can inspect.",
      },
    ],
    faq: [
      { q: "Can I still type?", a: "Yes. Voice and chat both drive the same execution engine." },
      { q: "Is voice required?", a: "No — it is the fastest option, not a requirement." },
    ],
    links: [
      { label: "Voice AI overview", to: "/voice-ai" },
      { label: "Voice assistant for PC", to: "/voice-assistant-for-pc" },
      { label: "JARVIS-style AI", to: "/jarvis-ai" },
      ...CTA_CORE,
    ],
    image: img(
      osTranscript,
      "Live voice transcript panel inside DIGI BIZ OS",
      "Live transcript: what the OS heard, and what it decided to do about it.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/voice-assistant-for-pc",
    group: "intent",
    eyebrow: "Voice Control",
    h1: "Voice Assistant for PC",
    h1Gradient: "Control Your Computer by Speaking.",
    metaTitle: "Voice Assistant for PC — Voice-Controlled Computer Assistant | DIGI BIZ OS",
    metaDescription:
      "Control your Windows computer with your voice: open apps, handle files, run commands, process documents and start automations — all hands-free.",
    intro:
      "Voice-controlled computing only becomes useful when the assistant can act. DIGI BIZ OS connects speech directly to desktop execution on Windows.",
    answers: [
      {
        q: "Can I control my PC with voice?",
        a: "Yes. DIGI BIZ OS accepts spoken instructions and executes supported desktop actions such as file operations, application work, terminal commands and document processing.",
      },
    ],
    capabilities: [
      { title: "Hands-free control", body: "Speak instead of navigating menus." },
      { title: "Desktop actions", body: "Applications, files and folders." },
      { title: "Command execution", body: "Terminal work when required." },
      { title: "Document handling", body: "PDF and OCR operations by voice." },
      { title: "Scheduling by voice", body: "Set up recurring jobs verbally." },
      { title: "Live feedback", body: "Track each step as it runs." },
    ],
    sections: [
      {
        heading: "Accessibility and speed",
        body: "Voice control reduces repetitive navigation for everyone and makes long routines far quicker to launch.",
      },
    ],
    faq: [
      {
        q: "Does it need internet?",
        a: "Some capabilities are offline utilities; connected models and services require a connection.",
      },
    ],
    links: [
      { label: "Voice AI assistant", to: "/voice-ai-assistant" },
      { label: "AI desktop assistant", to: "/ai-desktop-assistant" },
      ...CTA_CORE,
    ],
    image: img(
      osTranscript,
      "Voice controlled PC assistant transcript in DIGI BIZ OS",
      "Speaking a task and watching the OS act on it.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/computer-use-ai",
    group: "intent",
    eyebrow: "Computer Use",
    h1: "Computer-Use AI",
    h1Gradient: "An Agent That Operates the Machine.",
    metaTitle: "Computer-Use AI — An AI Agent That Operates Your Computer | DIGI BIZ OS",
    metaDescription:
      "Computer-use AI on Windows: an agent that works with applications, files, terminal and browser to complete real tasks on your desktop under your control.",
    intro:
      "Computer-use AI describes agents that operate a computer the way a person does. DIGI BIZ OS applies that idea to business work on Windows, with visible tracking of every action.",
    answers: [
      {
        q: "What is computer-use AI?",
        a: "AI that performs actions on a computer — using applications, files, the terminal and the browser — instead of only producing text.",
      },
      {
        q: "Is it safe?",
        a: "You stay in control: runs are visible step by step and can be stopped at any time.",
      },
    ],
    capabilities: [
      { title: "Application work", body: "Operate the desktop apps in your workflow." },
      { title: "File system", body: "Search, move, rename and transform files." },
      { title: "Terminal", body: "Execute commands as part of a plan." },
      { title: "Browser", body: "Navigate and gather information from the web." },
      { title: "Screen context", body: "Screen sharing gives the assistant visual context." },
      { title: "Run tracking", body: "Every tool call is logged live." },
    ],
    sections: [
      {
        heading: "Why tracking matters",
        body: "Autonomy without visibility is unusable in a business. The live tracking view shows the plan, the current step, the tool being used and the result — so you can intervene early.",
      },
    ],
    faq: [{ q: "Can I stop a run?", a: "Yes, runs can be stopped mid-execution." }],
    links: [
      { label: "AI desktop automation", to: "/ai-desktop-automation" },
      { label: "AI browser agent", to: "/ai-browser-agent" },
      { label: "Multi-agent AI", to: "/multi-agent-ai" },
      ...CTA_CORE,
    ],
    image: img(
      osLiveTracking,
      "Live tracking of an AI computer-use run in DIGI BIZ OS",
      "Live tracking: plan, current step, tool calls and results.",
    ),
    accent: "var(--amber)",
  },
  {
    path: "/ai-desktop-automation",
    group: "intent",
    eyebrow: "Automation",
    h1: "AI Desktop Automation",
    h1Gradient: "Repeat Nothing Twice.",
    metaTitle: "AI Desktop Automation for Windows — Workflows & Scheduled Jobs | DIGI BIZ OS",
    metaDescription:
      "Automate desktop work with AI: build workflows, schedule jobs hourly, daily or weekly, and let agents handle files, documents and reporting on your PC.",
    intro:
      "Desktop automation used to mean brittle scripts. DIGI BIZ OS lets you describe the routine once, save it as a workflow or skill, and then run it by voice or on a schedule.",
    answers: [
      {
        q: "What is AI desktop automation?",
        a: "Using AI agents and tools to perform repeated computer routines automatically, including on a schedule, without writing scripts.",
      },
    ],
    capabilities: [
      { title: "Workflow builder", body: "Chain steps into a reusable automation." },
      { title: "Cron scheduling", body: "Hourly, daily or weekly execution." },
      { title: "Background jobs", body: "Work continues while you do something else." },
      { title: "File pipelines", body: "Batch operations across folders." },
      { title: "Document pipelines", body: "Convert, OCR, compress and package." },
      { title: "Notifications", body: "Results reported back when a run completes." },
    ],
    sections: [
      {
        heading: "Start with one routine",
        body: "Pick the routine you repeat most often this month. Record it as a workflow, schedule it, and measure the hours it returns before automating the next one.",
      },
    ],
    faq: [{ q: "Do I need to write scripts?", a: "No. Workflows are created inside the app." }],
    links: [
      { label: "AI workflow automation", to: "/ai-workflow-automation" },
      { label: "DigiJobs", to: "/features/digijobs" },
      { label: "DigiTasks", to: "/features/digitasks" },
      ...CTA_CORE,
    ],
    image: img(
      osLiveTracking,
      "Scheduled AI automation running inside DIGI BIZ OS",
      "Automations running in the background with full run history.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/ai-workflow-automation",
    group: "intent",
    eyebrow: "Workflows",
    h1: "AI Workflow Automation",
    h1Gradient: "Triggers, Agents, Tools, Results.",
    metaTitle: "AI Workflow Automation — Build & Run AI Workflows | DIGI BIZ OS",
    metaDescription:
      "Build AI workflows that combine triggers, agents, skills and tools, then run them by voice or on a schedule. Business workflow automation on your own desktop.",
    intro:
      "A workflow is a business process the OS can repeat perfectly. In DIGI BIZ OS a workflow chains steps together and each step can call an agent, a skill or a tool.",
    answers: [
      {
        q: "What is AI workflow automation?",
        a: "Automating a multi-step business process where AI decides and executes each step using tools, rather than following a rigid script.",
      },
      {
        q: "How are workflows triggered?",
        a: "By voice, manually, or on a schedule using cron-style jobs.",
      },
    ],
    capabilities: [
      { title: "Triggers", body: "Voice, manual or scheduled starts." },
      { title: "Steps", body: "Each step selects an agent, skill or tool." },
      { title: "Branching work", body: "Different paths depending on results." },
      { title: "Job scheduling", body: "Recurring execution without supervision." },
      { title: "Task tracking", body: "Every task and its output is recorded." },
      { title: "Reuse", body: "Save a workflow once and run it forever." },
    ],
    sections: [
      {
        heading: "Common business workflows",
        body: "These are the patterns businesses build first.",
        bullets: [
          "Document intake: collect, OCR, rename, convert, file.",
          "Weekly reporting: gather, summarise, format, deliver.",
          "Research digest: browse sources, extract, summarise.",
          "Repository maintenance: review, refactor, document.",
          "Admin batch: bulk file and record operations.",
        ],
      },
    ],
    faq: [
      {
        q: "Can workflows call other workflows?",
        a: "Workflows are composed of steps that can use agents, skills and tools; complex processes are built by chaining them.",
      },
    ],
    links: [
      { label: "DigiFlow", to: "/features/digiflow" },
      { label: "AI business automation", to: "/ai-business-automation" },
      { label: "AI agents", to: "/agents" },
      ...CTA_CORE,
    ],
    image: img(
      osGraph,
      "AI workflow graph in DIGI BIZ OS showing chained steps",
      "A workflow graph: steps, agents and tools chained into one automation.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/ai-business-automation",
    group: "intent",
    eyebrow: "Business Automation",
    h1: "AI Business Automation",
    h1Gradient: "Processes, Not Prompts.",
    metaTitle: "AI Business Automation Software for Small Business | DIGI BIZ OS",
    metaDescription:
      "AI business automation for founders and small teams: automate documents, reporting, research, admin and recurring operations with agents, skills and scheduled jobs.",
    intro:
      "Business automation pays off where work is repeated, rule-based and time-consuming. DIGI BIZ OS targets exactly those processes with AI that can execute them end to end.",
    answers: [
      {
        q: "What can AI automate in a small business?",
        a: "Document processing, recurring reporting, research, file and record admin, follow-up preparation, technical maintenance and any repeatable multi-step routine.",
      },
    ],
    capabilities: [
      { title: "Document automation", body: "Convert, OCR, compress, sign and redact at volume." },
      { title: "Reporting automation", body: "Scheduled summaries produced without prompting." },
      { title: "Research automation", body: "Browser agents that gather and structure findings." },
      { title: "Admin automation", body: "Bulk file and record operations." },
      { title: "Technical automation", body: "Code, terminal and repository routines." },
      { title: "Custom automation", body: "Your own skills, tools, agents and workflows." },
    ],
    sections: [
      {
        heading: "Measure it like a hire",
        body: "Track hours returned per automated process. Most teams find the first three automations cover the cost of the licence quickly, because the licence is one-time rather than per seat.",
      },
    ],
    faq: [
      {
        q: "Can it be customised to our business?",
        a: "Yes — the custom build licence covers branding and business-specific automation.",
      },
    ],
    links: [
      { label: "AI business operating system", to: "/ai-business-operating-system" },
      { label: "AI workflow automation", to: "/ai-workflow-automation" },
      { label: "AI business assistant", to: "/ai-business-assistant" },
      ...CTA_CORE,
    ],
    image: img(
      osSidebar,
      "DIGI BIZ OS business automation modules",
      "Automation modules sitting alongside intelligence, documents and tools.",
    ),
    accent: "var(--amber)",
  },
  {
    path: "/ai-agent-platform",
    group: "intent",
    eyebrow: "Agent Platform",
    h1: "An AI Agent Platform",
    h1Gradient: "Build, Run and Manage Agents.",
    metaTitle: "AI Agent Platform — Build, Run & Manage AI Agents | DIGI BIZ OS",
    metaDescription:
      "An AI agent platform on your desktop: create custom agents, give them skills and tools, run multi-agent work and track every execution live.",
    intro:
      "DIGI BIZ OS ships with a multi-agent platform. You can start with the built-in specialists and then create as many custom agents as your business needs.",
    answers: [
      {
        q: "What is an AI agent platform?",
        a: "An environment for creating agents, giving them tools and skills, running them on real tasks and monitoring their execution.",
      },
      {
        q: "How do agents differ from chatbots?",
        a: "Agents plan and act using tools. Chatbots respond with text.",
      },
    ],
    capabilities: [
      { title: "Custom agents", body: "Create specialists for your own processes." },
      { title: "Agent skills", body: "Attach reusable skills to each agent." },
      { title: "Agent tools", body: "Give agents access to the mixed tool library." },
      { title: "Delegation", body: "Agents hand work to other agents." },
      { title: "Orchestration", body: "Multi-agent runs coordinated by the OS." },
      { title: "Observability", body: "Live tracking of every agent action." },
    ],
    sections: [
      {
        heading: "Agents earn their keep on long work",
        body: "Single answers do not need agents. Multi-step work — research, refactors, document pipelines, recurring operations — is where delegation and orchestration pay off.",
      },
    ],
    faq: [
      {
        q: "Is there a limit on agents?",
        a: "You can create as many specialist agents as your work requires.",
      },
    ],
    links: [
      { label: "Agents overview", to: "/agents" },
      { label: "Multi-agent AI", to: "/multi-agent-ai" },
      { label: "AI skills", to: "/features/ai-skills" },
      { label: "AI tools", to: "/features/ai-tools" },
      ...CTA_CORE,
    ],
    image: img(
      osGraph,
      "Multi-agent orchestration graph in DIGI BIZ OS",
      "Agents coordinating on a single objective.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/multi-agent-ai",
    group: "intent",
    eyebrow: "Multi-Agent",
    h1: "Multi-Agent AI",
    h1Gradient: "Specialists That Work Together.",
    metaTitle: "Multi-Agent AI — Coordinated AI Agents for Real Work | DIGI BIZ OS",
    metaDescription:
      "Multi-agent AI in one desktop OS: specialist agents for coding, documents, research and operations that delegate, coordinate and execute together.",
    intro:
      "One generalist agent struggles with long, mixed work. DIGI BIZ OS runs multiple specialists that can delegate between each other while the OS keeps the plan and the context.",
    answers: [
      {
        q: "What is multi-agent AI?",
        a: "An architecture where several AI agents with different specialisations collaborate on one objective, passing work between them.",
      },
    ],
    capabilities: [
      { title: "Specialisation", body: "Coding, documents, research and operations agents." },
      { title: "Delegation", body: "Work is passed to the best-suited agent." },
      { title: "Shared memory", body: "Context carries across the run." },
      { title: "Parallel work", body: "Independent steps progress together." },
      { title: "Supervision", body: "You see who is doing what, live." },
      { title: "Custom roster", body: "Add your own agents to the team." },
    ],
    sections: [
      {
        heading: "How coordination works",
        body: "The OS builds the plan, assigns steps to agents, gives each one the skills and tools it needs, and merges the results into a single tracked outcome.",
      },
    ],
    faq: [
      {
        q: "Do agents share memory?",
        a: "Context and memories are available across the run so agents do not repeat work.",
      },
    ],
    links: [
      { label: "AI agent platform", to: "/ai-agent-platform" },
      { label: "Agents overview", to: "/agents" },
      { label: "AI business operating system", to: "/ai-business-operating-system" },
      ...CTA_CORE,
    ],
    image: img(
      osGraph,
      "Multi-agent AI collaboration graph inside DIGI BIZ OS",
      "Multi-agent execution visualised as a live graph.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/ai-coding-agent",
    group: "intent",
    eyebrow: "Coding Agent",
    h1: "An AI Coding Agent",
    h1Gradient: "That Works Inside Your Project.",
    metaTitle: "AI Coding Agent for Python, Node.js & Real Projects | DIGI BIZ OS",
    metaDescription:
      "An AI coding agent that reads your repository, writes code, runs the terminal and completes project tasks on your Windows desktop — part of DIGI BIZ OS.",
    intro:
      "DigiCode is the development side of DIGI BIZ OS: a coding workspace where an agent can understand a repository, make changes, run commands and report what it did.",
    answers: [
      {
        q: "What is an AI coding agent?",
        a: "An agent that can work inside a codebase — reading files, writing changes and running commands — rather than only suggesting snippets.",
      },
      {
        q: "Which languages?",
        a: "It works with common project stacks including Python, Node.js and JavaScript projects.",
      },
    ],
    capabilities: [
      {
        title: "Repository intelligence",
        body: "Understands project structure before changing it.",
      },
      { title: "Code generation", body: "Writes and edits files in place." },
      { title: "Terminal execution", body: "Runs commands, installs and builds." },
      { title: "Task automation", body: "Repeatable project chores as workflows." },
      { title: "Documentation", body: "Generates and maintains project docs." },
      { title: "Review support", body: "Explains changes step by step." },
    ],
    sections: [
      {
        heading: "Coding as part of the business OS",
        body: "Because the coding agent lives in the same OS as documents, tools and scheduling, technical work can be part of a wider business workflow rather than a separate tool.",
      },
    ],
    faq: [
      {
        q: "Does it replace my IDE?",
        a: "No — it complements it, handling agentic project work and terminal execution.",
      },
    ],
    links: [
      { label: "DigiCode", to: "/features/digicode" },
      { label: "AI terminal assistant", to: "/ai-terminal-assistant" },
      { label: "AI browser agent", to: "/ai-browser-agent" },
      ...CTA_CORE,
    ],
    image: img(
      osCode,
      "DigiCode AI coding agent workspace inside DIGI BIZ OS",
      "DigiCode: repository-aware coding with terminal execution.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/ai-terminal-assistant",
    group: "intent",
    eyebrow: "Terminal",
    h1: "AI Terminal Assistant",
    h1Gradient: "Commands, Explained and Executed.",
    metaTitle: "AI Terminal Assistant — Run & Understand Commands | DIGI BIZ OS",
    metaDescription:
      "An AI terminal assistant that turns plain instructions into commands, runs them safely on your machine and explains the output — built into DIGI BIZ OS.",
    intro:
      "DigiCLI is the command layer of DIGI BIZ OS. Describe what you need and the assistant proposes, runs and explains the commands as part of a larger plan.",
    answers: [
      {
        q: "What is an AI terminal assistant?",
        a: "An assistant that converts natural language into shell commands, executes them and interprets the output.",
      },
    ],
    capabilities: [
      { title: "Natural language to command", body: "Describe the goal, not the syntax." },
      { title: "Execution", body: "Commands run on your own machine." },
      { title: "Output interpretation", body: "Errors and results explained clearly." },
      { title: "Part of workflows", body: "Terminal steps inside larger automations." },
      { title: "History", body: "Every run recorded for review." },
      { title: "Developer speed", body: "Fewer lookups, fewer mistakes." },
    ],
    sections: [
      {
        heading: "Safer than copy-paste",
        body: "Because commands are proposed with context and logged during execution, you get a reviewable trail instead of pasted snippets from the web.",
      },
    ],
    faq: [
      {
        q: "Can it run build and install commands?",
        a: "Yes, it can execute standard project commands as part of a task.",
      },
    ],
    links: [
      { label: "DigiCLI", to: "/features/digicli" },
      { label: "AI coding agent", to: "/ai-coding-agent" },
      ...CTA_CORE,
    ],
    image: img(
      osCli,
      "DigiCLI AI terminal assistant in DIGI BIZ OS",
      "DigiCLI translating an instruction into an executed command.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/ai-browser-agent",
    group: "intent",
    eyebrow: "Browser Agent",
    h1: "An AI Browser Agent",
    h1Gradient: "Research That Comes Back Finished.",
    metaTitle: "AI Browser Agent — Automated Web Research & Tasks | DIGI BIZ OS",
    metaDescription:
      "An AI browser agent that navigates the web, gathers information and returns structured findings, then feeds them into documents, reports and workflows.",
    intro:
      "Web research is a workflow, not a question. The browser agent in DIGI BIZ OS gathers sources, extracts what matters and hands the result to the next step — a document, a report or another agent.",
    answers: [
      {
        q: "What is an AI browser agent?",
        a: "An agent that operates a browser to find, read and extract information, and to complete supported web tasks.",
      },
    ],
    capabilities: [
      { title: "Multi-source research", body: "Collect information across pages." },
      { title: "Extraction", body: "Pull the specific data you asked for." },
      { title: "Summarisation", body: "Structured findings, not raw dumps." },
      { title: "Hand-off", body: "Results flow into documents and reports." },
      { title: "Scheduling", body: "Recurring research digests." },
      { title: "Tracking", body: "See which sources were used." },
    ],
    sections: [
      {
        heading: "Research inside the OS",
        body: "Because the browser agent sits next to DigiDocs and DigiFlow, a research run can end as a formatted document or a scheduled digest rather than a chat reply.",
      },
    ],
    faq: [
      { q: "Can it run on a schedule?", a: "Yes, research can be scheduled as a recurring job." },
    ],
    links: [
      { label: "Computer-use AI", to: "/computer-use-ai" },
      { label: "AI agents", to: "/agents" },
      { label: "DigiDocs", to: "/features/digidocs" },
      ...CTA_CORE,
    ],
    image: img(
      osRuntime,
      "AI browser research agent run inside DIGI BIZ OS",
      "A research run in progress with tracked sources and steps.",
    ),
    accent: "var(--amber)",
  },
  {
    path: "/ai-productivity-assistant",
    group: "intent",
    eyebrow: "Productivity",
    h1: "An AI Productivity Assistant",
    h1Gradient: "For People Who Ship.",
    metaTitle: "AI Productivity Assistant — All-in-One AI Workspace | DIGI BIZ OS",
    metaDescription:
      "An all-in-one AI productivity assistant: voice control, documents, files, coding, research, tools and scheduled automation in a single desktop workspace.",
    intro:
      "Productivity is lost between tools. DIGI BIZ OS collapses chat, documents, files, code, research, utilities and scheduling into one workspace with one context.",
    answers: [
      {
        q: "What is an all-in-one AI assistant?",
        a: "A single application that covers chat, documents, files, coding, research, utilities and automation rather than requiring a separate tool for each.",
      },
    ],
    capabilities: [
      { title: "One workspace", body: "Every module in one sidebar." },
      { title: "One context", body: "Memories and personas persist across modules." },
      { title: "One licence", body: "Lifetime access instead of stacked subscriptions." },
      { title: "Voice speed", body: "Start work without switching windows." },
      { title: "Reusable skills", body: "Your best routines saved as one-tap commands." },
      { title: "Background jobs", body: "Work that continues without you." },
    ],
    sections: [
      {
        heading: "Fewer tabs, more output",
        body: "Each context switch costs minutes. Keeping execution in one place is often a bigger productivity gain than a faster model.",
      },
    ],
    faq: [
      {
        q: "Is it suitable for individuals?",
        a: "Yes — solo founders and freelancers use the same OS as teams.",
      },
    ],
    links: [
      { label: "AI business assistant", to: "/ai-business-assistant" },
      { label: "Features hub", to: "/features" },
      ...CTA_CORE,
    ],
    image: img(
      osAiHub,
      "Digi AI hub with chat, agents, personas and coding in one workspace",
      "The Digi AI hub: chat, agents, personas, providers and coding in one place.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/ai-operating-system",
    group: "intent",
    eyebrow: "AI OS",
    h1: "An AI Operating System",
    h1Gradient: "For Your Work.",
    metaTitle: "AI Operating System — One Environment for Models, Agents & Tools | DIGI BIZ OS",
    metaDescription:
      "An AI operating system that unifies models, memory, agents, skills, tools, workflows and desktop control into a single Windows environment.",
    intro:
      "An operating system coordinates resources so applications can run. An AI operating system coordinates models, memory, agents, skills and tools so work can run. That is the design of DIGI BIZ OS.",
    answers: [
      {
        q: "What is an AI operating system?",
        a: "A layer that manages AI models, memory, agents, skills, tools and automation as shared resources, so any task can draw on them consistently.",
      },
    ],
    capabilities: [
      { title: "Model management", body: "Multiple models with a router that picks per task." },
      { title: "Memory", body: "Persistent facts, rules and preferences." },
      { title: "Process management", body: "Workflows, jobs and tasks." },
      { title: "Tool layer", body: "150+ mixed tools available to every agent." },
      { title: "Connectivity", body: "DigiMCP servers, integrations and local runners." },
      { title: "Desktop layer", body: "Files, applications, terminal and browser." },
    ],
    sections: [
      {
        heading: "Resources, not features",
        body: "Treating models, skills and tools as shared resources is what allows a new agent or workflow to be productive immediately — it inherits the whole environment.",
      },
    ],
    faq: [{ q: "Does it replace Windows?", a: "No. It runs on Windows as an AI layer above it." }],
    links: [
      { label: "AI business operating system", to: "/ai-business-operating-system" },
      { label: "AI models & router", to: "/features/ai-models" },
      { label: "Memory", to: "/features/memory" },
      ...CTA_CORE,
    ],
    image: img(
      osRuntime,
      "DIGI BIZ OS runtime managing models, agents and tools",
      "The runtime layer coordinating models, agents, skills and tools.",
    ),
    accent: "var(--purple)",
  },

  /* ------------------------------------------------------------------ */
  /* FEATURE PAGES                                                       */
  /* ------------------------------------------------------------------ */
  {
    path: "/features/digi-ai",
    group: "feature",
    eyebrow: "Digi AI",
    h1: "Digi AI —",
    h1Gradient: "The Intelligence Hub.",
    metaTitle: "Digi AI — Chat, Personas, Providers & Agents Hub | DIGI BIZ OS",
    metaDescription:
      "Digi AI is the intelligence hub of DIGI BIZ OS: chat, coding, personas, providers, agents and an app store in one JARVIS-style AI workspace.",
    intro:
      "Digi AI is where conversation, personas, providers and agents meet. It is the front door of the OS and the place most work starts.",
    answers: [
      {
        q: "What is Digi AI?",
        a: "The intelligence hub inside DIGI BIZ OS covering chat, coding, personas, model providers, agents and the app store.",
      },
    ],
    capabilities: [
      { title: "Chat", body: "Conversational control over the whole OS." },
      { title: "Personas", body: "Different behaviours for different work." },
      { title: "Providers", body: "Choose which AI providers to use." },
      { title: "Agents", body: "Launch specialists directly from the hub." },
      { title: "Coding", body: "Jump into DigiCode from the same surface." },
      { title: "App store", body: "Extend the hub with additional capability." },
    ],
    sections: [
      {
        heading: "One hub, every module",
        body: "From Digi AI you can reach coding, documents, tools, automation and agents without losing the thread of what you were doing.",
      },
    ],
    faq: [
      {
        q: "Can I switch models?",
        a: "Yes — providers and models are selectable, with a router for automatic selection.",
      },
    ],
    links: [
      { label: "AI models & router", to: "/features/ai-models" },
      { label: "Memory", to: "/features/memory" },
      { label: "JARVIS-style AI", to: "/jarvis-ai" },
      ...CTA_CORE,
    ],
    image: img(
      osAiHub,
      "Digi AI hub interface with agent, chat, coding, personas and providers cards",
      "Digi AI hub: agents, chat, coding, personas, providers and app store.",
    ),
    accent: "var(--cyan)",
  },
  {
      path: "/features/digi-crm",
      group: "feature",
      eyebrow: "Digi CRM",
      h1: "Digi CRM —",
      h1Gradient: "Business, Deals & Lead Pipelines.",
      metaTitle: "Digi CRM — Intelligent Business, Pipeline & Lead Management | DIGI BIZ OS",
      metaDescription:
        "Manage customer contacts, business companies, sales leads, deal pipelines, open tasks, and automated product research reports in Digi CRM.",
      intro:
        "Digi CRM consolidates your entire sales funnel, customer relationship history, business overview metrics, and e-commerce product pipelines into a unified command dashboard.",
      answers: [
        {
          q: "What is Digi CRM?",
          a: "A full-featured customer relationship and business overview dashboard built directly inside DIGI BIZ OS with automated lead tracking and deal pipeline analytics.",
        },
      ],
      capabilities: [
        { title: "Business overview", body: "Live metrics for contacts, companies, open deals and research." },
        { title: "Deal pipeline", body: "Visual tracking for open value vs won deal revenue." },
        { title: "Recent activity", body: "Chronological activity audit for automated lead and product hunts." },
        { title: "AI reports", body: "One-click automated intelligence summaries on demand." },
      ],
      sections: [
        {
          heading: "Complete Visibility Over Deals & Clients",
          body: "Stop wrestling with fragmented spreadsheets. Digi CRM automatically logs every lead hunt, contact creation, and pipeline stage inside your local desktop environment.",
        },
      ],
      faq: [
        {
          q: "Is my CRM data stored locally?",
          a: "Yes — all contacts, deals, and activity logs remain private on your machine.",
        },
      ],
      links: [
        { label: "Digi Intelligence", to: "/features/digi-intelligence" },
        { label: "Digi Marketing", to: "/features/digi-marketing" },
        ...CTA_CORE,
      ],
      image: img(
        osCrm,
        "Digi CRM dashboard showing business overview, contacts, companies, leads, pipeline and recent activity",
        "Digi CRM: Business overview, deals pipeline, contacts, and live activity tracking.",
      ),
      accent: "var(--cyan)",
    },
    {
      path: "/features/digi-intelligence",
      group: "feature",
      eyebrow: "Digi Intelligence",
      h1: "Digi Intelligence —",
      h1Gradient: "E-Commerce & Lead Engines.",
      metaTitle: "Digi Intelligence — E-Commerce Research & Lead Engines | DIGI BIZ OS",
      metaDescription:
        "Automate 20-stage product research across Amazon, eBay, Walmart, TikTok, and Shopify, plus automated B2B lead hunting pipelines.",
      intro:
        "Digi Intelligence is your autonomous market analysis engine. Enter a product niche or search query and the 20-stage research pipeline pulls market depth, pricing, and opportunity metrics automatically.",
      answers: [
        {
          q: "What is Digi Intelligence?",
          a: "An autonomous e-commerce and B2B lead generation engine supporting Amazon, eBay, Etsy, Walmart, TikTok, and Shopify marketplace research.",
        },
      ],
      capabilities: [
        { title: "20-stage pipeline", body: "Deep product research and market opportunity scoring." },
        { title: "Multi-marketplace", body: "Scrapes and evaluates Amazon, eBay, Walmart, TikTok & Shopify." },
        { title: "Lead intelligence", body: "Automated B2B prospective customer and contact discovery." },
        { title: "Research history", body: "Score cards and audit logs saved for fast reference." },
      ],
      sections: [
        {
          heading: "Autonomous Product Discovery & Analysis",
          body: "Launch comprehensive market hunts in seconds. The intelligence pipeline queries multiple sources simultaneously and compiles structured research reports.",
        },
      ],
      faq: [
        {
          q: "Can I research multiple marketplaces simultaneously?",
          a: "Yes — simply check the marketplaces you want to evaluate and start the hunt.",
        },
      ],
      links: [
        { label: "Digi CRM", to: "/features/digi-crm" },
        { label: "Digi Marketing", to: "/features/digi-marketing" },
        ...CTA_CORE,
      ],
      image: img(
        osIntel,
        "Digi Intelligence interface with e-commerce intelligence, marketplace selectors and research history",
        "Digi Intelligence: 20-stage product research across Amazon, eBay, Walmart, TikTok & Shopify.",
      ),
      accent: "var(--cyan)",
    },
    {
      path: "/features/digi-marketing",
      group: "feature",
      eyebrow: "Digi Marketing",
      h1: "Digi Marketing —",
      h1Gradient: "Content & Multi-Channel Campaigns.",
      metaTitle: "Digi Marketing — AI Content Studio & Campaign Scheduler | DIGI BIZ OS",
      metaDescription:
        "Compose posts with AI captions, manage connected social accounts, and schedule cross-channel marketing campaigns from one interface.",
      intro:
        "Digi Marketing streamlines your brand presence across digital platforms. Generate high-converting captions with AI, connect multiple accounts, and schedule publication timetables.",
      answers: [
        {
          q: "What is Digi Marketing?",
          a: "A dedicated marketing automation studio for composing AI-generated social posts, managing connected brand accounts, and scheduling future releases.",
        },
      ],
      capabilities: [
        { title: "AI caption generator", body: "Generate optimized copy for different social channels." },
        { title: "Multi-account hub", body: "Manage multiple connected profiles and channels in one tab." },
        { title: "Post scheduling", body: "Queue posts for scheduled future automated publishing." },
        { title: "Campaign history", body: "Audit published and scheduled broadcasts." },
      ],
      sections: [
        {
          heading: "Unified Social & Campaign Management",
          body: "Draft once, optimize with AI, and publish or schedule across all your brand channels without logging into separate web dashboards.",
        },
      ],
      faq: [
        {
          q: "Does it support scheduled posting?",
          a: "Yes — enable 'Schedule for later' to set date and time for automatic dispatch.",
        },
      ],
      links: [
        { label: "Digi WhatsApp", to: "/features/digi-whatsapp" },
        { label: "Digi CRM", to: "/features/digi-crm" },
        ...CTA_CORE,
      ],
      image: img(
        osMkt,
        "Digi Marketing compose post dashboard with AI caption generator and account scheduler",
        "Digi Marketing: AI caption studio, multi-account publisher, and campaign scheduler.",
      ),
      accent: "var(--cyan)",
    },
    {
      path: "/features/digi-whatsapp",
      group: "feature",
      eyebrow: "Digi WhatsApp",
      h1: "Digi WhatsApp —",
      h1Gradient: "24/7 AI Sales & Customer Support.",
      metaTitle: "Digi WhatsApp — Autonomous AI Sales Assistant & QR Pairing | DIGI BIZ OS",
      metaDescription:
        "Deploy a 24/7 autonomous WhatsApp sales engine with instant QR pairing, Whisper voice note transcription, local SQLite memory, and RAG knowledge bases.",
      intro:
        "Digi WhatsApp gives your business a 24/7 autonomous sales and customer support workforce. Pair your WhatsApp number in seconds via QR code, transcribe voice notes, and answer buyer inquiries automatically.",
      answers: [
        {
          q: "What is Digi WhatsApp?",
          a: "An autonomous WhatsApp sales and customer support assistant powered by Baileys Web QR pairing, voice transcription, and local SQLite memory.",
        },
      ],
      capabilities: [
        { title: "Instant QR pairing", body: "Pair any WhatsApp number in seconds without Meta API fees." },
        { title: "AI auto-reply agent", body: "Converts incoming customer chats into closed sales." },
        { title: "Voice note AI", body: "Transcribes and responds to customer audio messages." },
        { title: "Multi-slot accounts", body: "Connect multiple phone numbers for different brand lines." },
      ],
      sections: [
        {
          heading: "24/7 Customer Engagement on WhatsApp",
          body: "Never miss a customer inquiry. The autonomous agent listens to incoming texts and voice notes, queries your product knowledge base, and delivers instant, accurate replies.",
        },
      ],
      faq: [
        {
          q: "Are there per-message fees?",
          a: "No — it operates directly over WhatsApp Web protocol with zero per-conversation costs.",
        },
      ],
      links: [
        { label: "Open Source WhatsApp Agent", to: "/open-source/whatsapp-ai-sales-agent" },
        { label: "Digi CRM", to: "/features/digi-crm" },
        ...CTA_CORE,
      ],
      image: img(
        osWa,
        "Digi WhatsApp Agent dashboard with QR pairing, number slots, and AI auto-reply toggles",
        "Digi WhatsApp: Instant QR pairing, AI auto-replies, and multi-number slots.",
      ),
      accent: "var(--cyan)",
    },
  {
    path: "/features/digicode",
    group: "feature",
    eyebrow: "DigiCode",
    h1: "DigiCode —",
    h1Gradient: "AI Coding & Development.",
    metaTitle: "DigiCode — AI Coding Workspace & Repository Intelligence | DIGI BIZ OS",
    metaDescription:
      "DigiCode is the AI coding workspace in DIGI BIZ OS: repository intelligence, code generation, terminal execution and project automation for Python and Node.js.",
    intro:
      "DigiCode gives the OS a development brain: it can read a project, change it and run it.",
    answers: [
      {
        q: "What is DigiCode?",
        a: "The coding and development environment inside DIGI BIZ OS, combining repository understanding, code editing and terminal execution.",
      },
    ],
    capabilities: [
      { title: "Repository intelligence", body: "Project-wide understanding before edits." },
      { title: "Code generation", body: "Write and refactor real files." },
      { title: "Terminal", body: "Run, build and test." },
      { title: "Python & Node.js", body: "Common stacks supported." },
      { title: "Project automation", body: "Chores as repeatable workflows." },
      { title: "Docs", body: "Generate and maintain documentation." },
    ],
    sections: [
      {
        heading: "For developers and non-developers",
        body: "Developers get an agent that can carry chores. Non-developers get a way to have small technical jobs completed without hiring for them.",
      },
    ],
    faq: [
      {
        q: "Does it work offline?",
        a: "The workspace runs locally; model access depends on your provider setup.",
      },
    ],
    links: [
      { label: "AI coding agent", to: "/ai-coding-agent" },
      { label: "DigiCLI", to: "/features/digicli" },
      { label: "AI browser agent", to: "/ai-browser-agent" },
      ...CTA_CORE,
    ],
    image: img(
      osCode,
      "DigiCode AI coding workspace screenshot",
      "DigiCode working inside a real project.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/features/digidocs",
    group: "feature",
    eyebrow: "DigiDocs",
    h1: "DigiDocs —",
    h1Gradient: "AI Document Workspace.",
    metaTitle: "DigiDocs — AI Document & PDF Workspace with OCR | DIGI BIZ OS",
    metaDescription:
      "DigiDocs handles PDFs and documents inside DIGI BIZ OS: conversion, OCR, compression, signing, redaction and automated document workflows.",
    intro:
      "Documents are where most business admin time disappears. DigiDocs turns that work into repeatable, automatable pipelines.",
    answers: [
      {
        q: "What is DigiDocs?",
        a: "The document and PDF workspace in DIGI BIZ OS, covering conversion, OCR, compression, signing, redaction and document automation.",
      },
    ],
    capabilities: [
      { title: "PDF processing", body: "Merge, split, convert and compress." },
      { title: "OCR", body: "Extract text from scans and images." },
      { title: "Signing", body: "Sign documents inside the OS." },
      { title: "Redaction", body: "Remove sensitive content before sharing." },
      { title: "Batch pipelines", body: "Process folders, not files." },
      { title: "Workflow ready", body: "Document steps inside larger automations." },
    ],
    sections: [
      {
        heading: "Document intake as a workflow",
        body: "Collect, OCR, rename by content, convert, compress and file — one workflow that runs the same way every time and can be scheduled.",
      },
    ],
    faq: [{ q: "Does it work with scanned documents?", a: "Yes, OCR is built in." }],
    links: [
      { label: "AI business automation", to: "/ai-business-automation" },
      { label: "AI workflow automation", to: "/ai-workflow-automation" },
      { label: "DigiTools", to: "/features/digitools" },
      ...CTA_CORE,
    ],
    image: img(
      osDocs,
      "DigiDocs AI document and PDF workspace screenshot",
      "DigiDocs: PDF, OCR and document processing inside the OS.",
    ),
    accent: "var(--amber)",
  },
  {
    path: "/features/digitools",
    group: "feature",
    eyebrow: "DigiTools",
    h1: "DigiTools —",
    h1Gradient: "150+ Mixed Tools.",
    metaTitle: "DigiTools — 150+ AI & Offline Tools for Your Desktop | DIGI BIZ OS",
    metaDescription:
      "DigiTools gives DIGI BIZ OS a library of 150+ mixed tools — file, system, document and productivity utilities that both you and your AI agents can use.",
    intro:
      "Tools are what make an agent useful. DigiTools is the shared library every agent can draw on.",
    answers: [
      {
        q: "What are DigiTools?",
        a: "A library of 150+ mixed tools and offline utilities inside DIGI BIZ OS, available to users and to AI agents during execution.",
      },
    ],
    capabilities: [
      { title: "File utilities", body: "Search, convert, rename, extract." },
      { title: "System utilities", body: "Desktop and system helpers." },
      { title: "Document utilities", body: "Work alongside DigiDocs." },
      { title: "Productivity tools", body: "Everyday shortcuts in one place." },
      { title: "Offline tools", body: "Many utilities need no connection." },
      { title: "Agent accessible", body: "Agents call tools during runs." },
    ],
    sections: [
      {
        heading: "Why a shared tool layer matters",
        body: "A new agent or workflow inherits the whole library immediately, so capability compounds instead of being rebuilt per use case.",
      },
    ],
    faq: [
      {
        q: "Can I add my own tools?",
        a: "Yes, custom tools can be added on top of the built-in library.",
      },
    ],
    links: [
      { label: "AI tools", to: "/features/ai-tools" },
      { label: "AI skills", to: "/features/ai-skills" },
      { label: "Integrations", to: "/integrations" },
      ...CTA_CORE,
    ],
    image: img(
      osTools,
      "DigiTools library of mixed AI and offline utilities",
      "The DigiTools library available to you and your agents.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/features/digicli",
    group: "feature",
    eyebrow: "DigiCLI",
    h1: "DigiCLI —",
    h1Gradient: "Terminal, With Intelligence.",
    metaTitle: "DigiCLI — AI Terminal & Command Execution | DIGI BIZ OS",
    metaDescription:
      "DigiCLI is the terminal layer of DIGI BIZ OS: turn instructions into commands, execute them on your machine and get the output explained.",
    intro:
      "DigiCLI is the command execution layer used by you and by agents when a task needs the shell.",
    answers: [
      { q: "What is DigiCLI?", a: "The terminal and command execution module inside DIGI BIZ OS." },
    ],
    capabilities: [
      { title: "Command generation", body: "Plain language to shell." },
      { title: "Execution", body: "Runs on your own machine." },
      { title: "Explanations", body: "Output interpreted for you." },
      { title: "Agent access", body: "Agents use the terminal as a tool." },
      { title: "History", body: "Every command logged." },
      { title: "Workflow steps", body: "Terminal actions inside automations." },
    ],
    sections: [
      {
        heading: "The shell as a first-class tool",
        body: "Treating the terminal as a tool rather than a separate app is what allows technical steps to sit inside business workflows.",
      },
    ],
    faq: [{ q: "Is it Windows only?", a: "DIGI BIZ OS currently ships for Windows 10 and 11." }],
    links: [
      { label: "AI terminal assistant", to: "/ai-terminal-assistant" },
      { label: "DigiCode", to: "/features/digicode" },
      ...CTA_CORE,
    ],
    image: img(
      osCli,
      "DigiCLI terminal module inside DIGI BIZ OS",
      "DigiCLI executing commands with full history.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/features/digimcp",
    group: "feature",
    eyebrow: "DigiMCP",
    h1: "DigiMCP —",
    h1Gradient: "Connected Services.",
    metaTitle: "DigiMCP — Multi-MCP Ready Connectivity & Local Runners | DIGI BIZ OS",
    metaDescription:
      "DigiMCP connects DIGI BIZ OS to MCP servers, integrations and local runners so your agents can reach the platforms your business already uses.",
    intro:
      "DigiMCP is the connectivity layer: MCP servers, integrations and local runners that extend what agents can reach.",
    answers: [
      {
        q: "What is DigiMCP?",
        a: "The multi-MCP connectivity module in DIGI BIZ OS for connecting servers, integrations and local runners.",
      },
    ],
    capabilities: [
      { title: "Multi-MCP ready", body: "Connect multiple servers." },
      { title: "Integrations", body: "Reach the platforms you already run on." },
      { title: "Local runners", body: "Keep execution on your machine." },
      { title: "Agent access", body: "Connected services become agent tools." },
      { title: "No technical setup", body: "Configured inside the app." },
      { title: "Extensible", body: "Add new connections as you grow." },
    ],
    sections: [
      {
        heading: "Connectivity turns skills into operations",
        body: "A skill that can reach your actual systems is worth far more than one that only reasons about them.",
      },
    ],
    faq: [
      {
        q: "Which services can I connect?",
        a: "Connections are configured in-app; the module is multi-MCP ready and supports local runners.",
      },
    ],
    links: [
      { label: "Integrations", to: "/integrations" },
      { label: "DigiTools", to: "/features/digitools" },
      ...CTA_CORE,
    ],
    image: img(
      osMcp,
      "DigiMCP connected services and local runners panel",
      "DigiMCP managing connected services and local runners.",
    ),
    accent: "var(--amber)",
  },
  {
    path: "/features/digiflow",
    group: "feature",
    eyebrow: "DigiFlow",
    h1: "DigiFlow —",
    h1Gradient: "Workflows That Run Themselves.",
    metaTitle: "DigiFlow — AI Workflow Builder & Automation Engine | DIGI BIZ OS",
    metaDescription:
      "DigiFlow is the workflow engine of DIGI BIZ OS: chain agents, skills and tools into automations triggered by voice, manually or on a schedule.",
    intro: "DigiFlow is where a repeated process becomes a permanent asset.",
    answers: [
      {
        q: "What is DigiFlow?",
        a: "The workflow builder and automation engine inside DIGI BIZ OS.",
      },
    ],
    capabilities: [
      { title: "Step chaining", body: "Compose multi-step processes." },
      { title: "Agent steps", body: "Delegate a step to a specialist." },
      { title: "Tool steps", body: "Call any tool in the library." },
      { title: "Voice triggers", body: "Launch a flow by speaking." },
      { title: "Schedules", body: "Run on a cron-style timetable." },
      { title: "Run history", body: "Full record of every execution." },
    ],
    sections: [
      {
        heading: "Design once, run forever",
        body: "The value of a workflow is consistency. The same steps, the same standard, every time — whether you are there or not.",
      },
    ],
    faq: [{ q: "Can flows run unattended?", a: "Yes, scheduled flows run in the background." }],
    links: [
      { label: "AI workflow automation", to: "/ai-workflow-automation" },
      { label: "DigiJobs", to: "/features/digijobs" },
      { label: "DigiTasks", to: "/features/digitasks" },
      ...CTA_CORE,
    ],
    image: img(
      osGraph,
      "DigiFlow workflow graph inside DIGI BIZ OS",
      "A DigiFlow automation chaining agents and tools.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/features/digijobs",
    group: "feature",
    eyebrow: "DigiJobs",
    h1: "DigiJobs —",
    h1Gradient: "Scheduled AI Jobs.",
    metaTitle: "DigiJobs — Scheduled AI Jobs & Cron Automation | DIGI BIZ OS",
    metaDescription:
      "DigiJobs runs scheduled AI jobs hourly, daily or weekly inside DIGI BIZ OS — recurring reports, document batches, research digests and maintenance routines.",
    intro: "DigiJobs is the scheduler. It is what makes the OS work while you are not at the desk.",
    answers: [
      {
        q: "What is DigiJobs?",
        a: "The scheduling module in DIGI BIZ OS for recurring, unattended AI jobs.",
      },
    ],
    capabilities: [
      { title: "Cron scheduling", body: "Hourly, daily or weekly." },
      { title: "Unattended runs", body: "No supervision required." },
      { title: "Any workflow", body: "Schedule a flow, skill or agent task." },
      { title: "Monitoring", body: "See job status and history." },
      { title: "Reporting", body: "Results delivered when the job ends." },
      { title: "Retries", body: "Failed runs are visible and re-runnable." },
    ],
    sections: [
      {
        heading: "Recurring work is the best ROI",
        body: "Anything you do weekly is a candidate. A single scheduled reporting job usually returns more hours than a dozen one-off prompts.",
      },
    ],
    faq: [
      {
        q: "Do jobs need my PC on?",
        a: "Jobs run on your machine, so it must be running for scheduled execution.",
      },
    ],
    links: [
      { label: "DigiFlow", to: "/features/digiflow" },
      { label: "DigiTasks", to: "/features/digitasks" },
      { label: "AI desktop automation", to: "/ai-desktop-automation" },
      ...CTA_CORE,
    ],
    image: img(
      osLiveTracking,
      "DigiJobs scheduled job monitoring in DIGI BIZ OS",
      "Scheduled jobs with live status and history.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/features/digitasks",
    group: "feature",
    eyebrow: "DigiTasks",
    h1: "DigiTasks —",
    h1Gradient: "AI Task Execution.",
    metaTitle: "DigiTasks — AI Task Automation & Execution Tracking | DIGI BIZ OS",
    metaDescription:
      "DigiTasks tracks and executes AI tasks inside DIGI BIZ OS: background tasks, task queues, progress monitoring and results you can audit.",
    intro:
      "Tasks are the unit of work in the OS. DigiTasks is where they are queued, executed and audited.",
    answers: [
      { q: "What is DigiTasks?", a: "The task execution and tracking module in DIGI BIZ OS." },
    ],
    capabilities: [
      { title: "Task queue", body: "Work lined up and executed in order." },
      { title: "Background execution", body: "Tasks continue while you work." },
      { title: "Progress tracking", body: "Live status per task." },
      { title: "Results", body: "Outputs and artefacts stored." },
      { title: "Audit trail", body: "What ran, when and with which tools." },
      { title: "Agent assignment", body: "Tasks routed to the right specialist." },
    ],
    sections: [
      {
        heading: "Auditability is a business requirement",
        body: "Being able to show what the AI did, in what order and with which tools, is what makes delegation acceptable in a real company.",
      },
    ],
    faq: [
      { q: "Can I see past runs?", a: "Yes — task history and results are retained for review." },
    ],
    links: [
      { label: "DigiJobs", to: "/features/digijobs" },
      { label: "DigiFlow", to: "/features/digiflow" },
      { label: "Multi-agent AI", to: "/multi-agent-ai" },
      ...CTA_CORE,
    ],
    image: img(
      osLiveTracking,
      "DigiTasks task tracking view in DIGI BIZ OS",
      "Task tracking with live progress and stored results.",
    ),
    accent: "var(--amber)",
  },
  {
    path: "/features/ai-skills",
    group: "feature",
    eyebrow: "Skills",
    h1: "AI Skills —",
    h1Gradient: "500+ and Counting.",
    metaTitle: "AI Skills — 500+ Reusable Skills & Custom Skill Builder | DIGI BIZ OS",
    metaDescription:
      "DIGI BIZ OS ships 500+ AI skills and lets you create custom skills your agents can reuse forever — the reusable capability layer of the OS.",
    intro:
      "A skill is a capability the OS can reuse. Teach it once and it is available to every agent and workflow from then on.",
    answers: [
      {
        q: "What is an AI skill?",
        a: "A reusable capability an AI agent can invoke — a defined way of performing a specific job, available across agents and workflows.",
      },
      {
        q: "Can I create my own?",
        a: "Yes. Custom skills are created inside the app and reused forever.",
      },
    ],
    capabilities: [
      { title: "500+ built in", body: "Broad coverage from day one." },
      { title: "Custom skills", body: "Teach the OS your own way of working." },
      { title: "Agent skills", body: "Attach skills to specific agents." },
      { title: "Voice triggered", body: "Invoke a skill by speaking." },
      { title: "Composable", body: "Skills combine inside workflows." },
      { title: "Shared", body: "Available to the whole roster." },
    ],
    sections: [
      {
        heading: "Skills are institutional memory",
        body: "When your best process is stored as a skill, quality no longer depends on who is at the keyboard.",
      },
    ],
    faq: [{ q: "Do skills need coding?", a: "No, they are created inside the application." }],
    links: [
      { label: "AI tools", to: "/features/ai-tools" },
      { label: "AI agent platform", to: "/ai-agent-platform" },
      { label: "Memory", to: "/features/memory" },
      ...CTA_CORE,
    ],
    image: img(
      osSkills,
      "AI skills library inside DIGI BIZ OS",
      "The skills panel: hundreds of reusable capabilities.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/features/ai-tools",
    group: "feature",
    eyebrow: "Tools",
    h1: "AI Tools —",
    h1Gradient: "The Hands of the OS.",
    metaTitle: "AI Tools — 150+ Agent-Accessible Tools & Utilities | DIGI BIZ OS",
    metaDescription:
      "The AI tool layer of DIGI BIZ OS: 150+ mixed tools spanning files, documents, system utilities and connected services, callable by you or by agents.",
    intro:
      "Tools are how intelligence becomes action. Every agent in DIGI BIZ OS can call the same tool library.",
    answers: [
      {
        q: "What are AI agent tools?",
        a: "Functions an agent can call to affect the real world — reading files, converting documents, running commands, browsing or calling connected services.",
      },
    ],
    capabilities: [
      { title: "150+ mixed tools", body: "Wide coverage across daily work." },
      { title: "Offline utilities", body: "Many work without a connection." },
      { title: "Agent callable", body: "Used automatically during runs." },
      { title: "Manual use", body: "Run any tool yourself." },
      { title: "Workflow steps", body: "Tools as steps in automations." },
      { title: "Extensible", body: "Add your own tools." },
    ],
    sections: [
      {
        heading: "Tool quality beats model hype",
        body: "A capable tool layer often improves outcomes more than a bigger model, because most failures are execution failures, not reasoning failures.",
      },
    ],
    faq: [
      {
        q: "Are tools available to every agent?",
        a: "Yes, the library is shared across the roster.",
      },
    ],
    links: [
      { label: "DigiTools", to: "/features/digitools" },
      { label: "AI skills", to: "/features/ai-skills" },
      { label: "DigiMCP", to: "/features/digimcp" },
      ...CTA_CORE,
    ],
    image: img(
      osDesktopTools,
      "Mixed AI tools panel inside DIGI BIZ OS",
      "Mixed tools: files, system, documents and productivity utilities.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/features/ai-models",
    group: "feature",
    eyebrow: "Models",
    h1: "AI Models —",
    h1Gradient: "Choose, Route, Run.",
    metaTitle: "AI Models & Model Router — Multi-Model Intelligence | DIGI BIZ OS",
    metaDescription:
      "Use multiple AI models inside DIGI BIZ OS with a model router that selects the right engine per task, plus provider control and persistent memory.",
    intro:
      "Different work needs different engines. DIGI BIZ OS supports multiple models and routes tasks to the appropriate one.",
    answers: [
      {
        q: "What is a model router?",
        a: "A layer that chooses which AI model handles a given task, based on the type of work rather than a single fixed default.",
      },
    ],
    capabilities: [
      { title: "Multi-model", body: "More than one engine available." },
      { title: "Model router", body: "Automatic selection per task." },
      { title: "Provider control", body: "Decide which providers are enabled." },
      { title: "Personas", body: "Behaviour profiles on top of models." },
      { title: "Memory aware", body: "Context carries across models." },
      { title: "Cost aware", body: "Heavier engines only where needed." },
    ],
    sections: [
      {
        heading: "Routing is an operations decision",
        body: "Fast engines handle routine steps; stronger engines handle reasoning-heavy steps. Routing keeps quality high without paying premium cost on every action.",
      },
    ],
    faq: [{ q: "Can I force a specific model?", a: "Yes, providers and models are selectable." }],
    links: [
      { label: "Memory", to: "/features/memory" },
      { label: "Digi AI hub", to: "/features/digi-ai" },
      { label: "Offline AI", to: "/features/offline-ai" },
      ...CTA_CORE,
    ],
    image: img(
      osAiHub,
      "Model and provider selection inside the Digi AI hub",
      "Providers and models managed from the Digi AI hub.",
    ),
    accent: "var(--amber)",
  },
  {
    path: "/features/memory",
    group: "feature",
    eyebrow: "Memory",
    h1: "Memory —",
    h1Gradient: "Context That Persists.",
    metaTitle: "AI Memory — Custom Memories, Rules & Persistent Context | DIGI BIZ OS",
    metaDescription:
      "Custom memories in DIGI BIZ OS store the facts, rules and preferences your AI should never forget, so every agent and workflow works to your standard.",
    intro:
      "Memory is what stops you repeating yourself. Store the rules once and every agent respects them.",
    answers: [
      {
        q: "What are custom memories?",
        a: "Stored facts, rules and preferences that the OS applies automatically to future work.",
      },
    ],
    capabilities: [
      { title: "Business facts", body: "Names, terms, standards and formats." },
      { title: "Working rules", body: "How things must always be done." },
      { title: "Preferences", body: "Tone, structure and defaults." },
      { title: "Cross-agent", body: "Every specialist inherits them." },
      { title: "Editable", body: "Change a rule and it applies everywhere." },
      { title: "Persistent", body: "Survives sessions and restarts." },
    ],
    sections: [
      {
        heading: "Memory turns an assistant into a colleague",
        body: "The difference between a tool you re-brief daily and one that already knows your business is entirely memory.",
      },
    ],
    faq: [
      { q: "Can I remove a memory?", a: "Yes, memories can be edited or deleted at any time." },
    ],
    links: [
      { label: "AI models & router", to: "/features/ai-models" },
      { label: "AI skills", to: "/features/ai-skills" },
      ...CTA_CORE,
    ],
    image: img(
      osSidebar,
      "Memory and personas configuration inside DIGI BIZ OS",
      "Memories and personas shaping how the OS behaves.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/features/offline-ai",
    group: "feature",
    eyebrow: "Local & Private",
    h1: "Offline & Local —",
    h1Gradient: "Your Machine, Your Data.",
    metaTitle: "Offline AI Tools & Local-First Privacy | DIGI BIZ OS",
    metaDescription:
      "DIGI BIZ OS runs on your own Windows machine with local runners and offline utilities, so sensitive business work stays under your control.",
    intro:
      "For most businesses the blocker is not capability, it is where the data goes. DIGI BIZ OS is a local-first desktop install.",
    answers: [
      {
        q: "Does DIGI BIZ OS run locally?",
        a: "Yes. It is installed on your Windows machine, works with your local files, and includes offline utilities and local runners.",
      },
    ],
    capabilities: [
      { title: "Local install", body: "A desktop application, not a web tab." },
      { title: "Local files", body: "Works directly with your folders." },
      { title: "Offline utilities", body: "Many tools need no connection." },
      { title: "Local runners", body: "Execution stays on your machine." },
      { title: "Provider control", body: "You choose what is enabled." },
      { title: "Client-safe work", body: "Suited to confidential material." },
    ],
    sections: [
      {
        heading: "Privacy as an operating decision",
        body: "Keeping execution local means client documents and internal files do not have to leave the business by default.",
      },
    ],
    faq: [
      {
        q: "Is any connection required?",
        a: "Connected models and services need internet; offline utilities do not.",
      },
    ],
    links: [
      { label: "Desktop OS", to: "/desktop-os" },
      { label: "DigiMCP", to: "/features/digimcp" },
      ...CTA_CORE,
    ],
    image: img(
      osRuntime,
      "Local runtime execution inside DIGI BIZ OS",
      "Local runtime: execution on your own machine.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/features/computer-use",
    group: "feature",
    eyebrow: "Computer Control",
    h1: "Desktop Control —",
    h1Gradient: "Files, Apps, Screen, Camera.",
    metaTitle: "Desktop Control — AI Control of Files, Apps & Screen | DIGI BIZ OS",
    metaDescription:
      "DIGI BIZ OS can work with your desktop: applications, files, folders, screen sharing and camera support, all under voice control and full run tracking.",
    intro:
      "Desktop control is the capability that separates DIGI BIZ OS from browser-based assistants.",
    answers: [
      {
        q: "What desktop actions are supported?",
        a: "Working with applications, files and folders, terminal commands, browser tasks, document processing, plus screen sharing and camera support for context.",
      },
    ],
    capabilities: [
      { title: "Applications", body: "Operate the apps in your workflow." },
      { title: "Files & folders", body: "Bulk operations across directories." },
      { title: "Screen sharing", body: "Give the OS visual context." },
      { title: "Camera support", body: "Capture context when needed." },
      { title: "Keyboard & mouse", body: "Supported desktop interactions." },
      { title: "Tracked runs", body: "Every action visible live." },
    ],
    sections: [
      {
        heading: "Control with oversight",
        body: "Every desktop action is part of a tracked run you can stop, so autonomy never means losing visibility.",
      },
    ],
    faq: [
      {
        q: "Can I limit what it does?",
        a: "You direct each run and can stop execution at any point.",
      },
    ],
    links: [
      { label: "Computer-use AI", to: "/computer-use-ai" },
      { label: "AI desktop assistant", to: "/ai-desktop-assistant" },
      { label: "Desktop OS", to: "/desktop-os" },
      ...CTA_CORE,
    ],
    image: img(
      osDesktopTools,
      "Desktop control tools inside DIGI BIZ OS",
      "Desktop control surfaces for files, system and applications.",
    ),
    accent: "var(--amber)",
  },
  {
    path: "/features/voice-assistant",
    group: "feature",
    eyebrow: "Voice",
    h1: "Voice Assistant —",
    h1Gradient: "The Fastest Input You Have.",
    metaTitle: "Voice Assistant — Voice-First Control of Your AI OS | DIGI BIZ OS",
    metaDescription:
      "The voice layer of DIGI BIZ OS: live transcription, hands-free briefing and voice-triggered skills, workflows and agents on your Windows desktop.",
    intro: "Voice is the primary interface of the OS, wired directly into execution.",
    answers: [
      {
        q: "How does voice control work?",
        a: "You speak, the OS transcribes live, interprets the request against memory and context, plans the work and executes it with agents, skills and tools.",
      },
    ],
    capabilities: [
      { title: "Live transcript", body: "See exactly what was heard." },
      { title: "Hands-free", body: "Brief while you work." },
      { title: "Voice skills", body: "Trigger any skill by speaking." },
      { title: "Voice workflows", body: "Start automations verbally." },
      { title: "Interruptible", body: "Stop or redirect a run." },
      { title: "Chat fallback", body: "Type when speaking is not practical." },
    ],
    sections: [
      {
        heading: "Speech plus execution",
        body: "A voice interface that only answers is a novelty. A voice interface connected to agents, tools and scheduling is an operating system.",
      },
    ],
    faq: [
      {
        q: "Does it work in noisy rooms?",
        a: "The live transcript lets you confirm and correct what was recognised before work proceeds.",
      },
    ],
    links: [
      { label: "Voice AI", to: "/voice-ai" },
      { label: "Voice AI assistant", to: "/voice-ai-assistant" },
      { label: "JARVIS-style AI", to: "/jarvis-ai" },
      ...CTA_CORE,
    ],
    image: img(
      osTranscript,
      "Voice transcript panel inside DIGI BIZ OS",
      "Live voice transcription driving real execution.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/features/business-automation",
    group: "feature",
    eyebrow: "Business Ops",
    h1: "Business Automation —",
    h1Gradient: "Operations on Autopilot.",
    metaTitle: "Business Automation Module — AI Operations Automation | DIGI BIZ OS",
    metaDescription:
      "Automate business operations inside DIGI BIZ OS: document pipelines, recurring reporting, research digests, admin batches and maintenance jobs.",
    intro:
      "This is the module map for operational work: what to automate, and with which part of the OS.",
    answers: [
      {
        q: "What business processes can be automated?",
        a: "Document intake and processing, recurring reporting, research digests, file and record admin, technical maintenance and any repeatable multi-step routine.",
      },
    ],
    capabilities: [
      { title: "Document ops", body: "DigiDocs pipelines at volume." },
      { title: "Reporting ops", body: "DigiJobs scheduled summaries." },
      { title: "Research ops", body: "Browser agents on a timetable." },
      { title: "Admin ops", body: "Bulk file and record work." },
      { title: "Technical ops", body: "DigiCode and DigiCLI routines." },
      { title: "Custom ops", body: "Your own skills, agents and flows." },
    ],
    sections: [
      {
        heading: "Pick processes, not tools",
        body: "Start from the process that costs the most hours this month, then choose the module that owns it.",
      },
    ],
    faq: [
      {
        q: "Where should we start?",
        a: "Usually document processing or recurring reporting — both are high volume and rule-based.",
      },
    ],
    links: [
      { label: "AI business automation", to: "/ai-business-automation" },
      { label: "AI business operating system", to: "/ai-business-operating-system" },
      { label: "DigiFlow", to: "/features/digiflow" },
      ...CTA_CORE,
    ],
    image: img(
      osSidebar,
      "Business automation modules inside DIGI BIZ OS",
      "Operational modules inside a single OS.",
    ),
    accent: "var(--purple)",
  },
  /* ------------------------------------------------------------------ */
  /* JARVIS CLUSTER EXPANSION                                           */
  /* ------------------------------------------------------------------ */
  {
    path: "/jarvis-alternative",
    group: "intent",
    eyebrow: "JARVIS Alternative",
    h1: "The JARVIS Alternative",
    h1Gradient: "That Actually Finishes the Job.",
    metaTitle: "JARVIS Alternative for PC — Voice AI That Executes Work | DIGI BIZ OS",
    metaDescription:
      "Looking for a JARVIS alternative? DIGI BIZ OS is a voice-first AI assistant for Windows with agents, 500+ skills, 150+ mixed tools, desktop control and scheduled automation.",
    intro:
      "Most JARVIS-style downloads are voice launchers: a fixed phrase triggers a fixed shortcut. DIGI BIZ OS takes the same idea much further — you speak a real instruction, it plans the steps, chooses the right agent and tools, executes them on your machine and shows you the result.",
    answers: [
      {
        q: "What is the best JARVIS alternative for Windows?",
        a: "For voice-driven work that produces documents, files, code, reports and scheduled automation, DIGI BIZ OS is a practical alternative because it executes tasks rather than only launching apps.",
      },
      {
        q: "Is it free?",
        a: "No. It is a one-time lifetime licence rather than a subscription, with source code and custom build options available.",
      },
      {
        q: "Does it need internet?",
        a: "Model-driven reasoning uses online models, while many desktop, file and offline utilities run locally on your machine.",
      },
    ],
    capabilities: [
      {
        title: "Real instructions",
        body: "Speak naturally instead of memorising trigger phrases.",
      },
      { title: "Planned execution", body: "Multi-step work is planned before anything runs." },
      {
        title: "Agents",
        body: "Specialist agents own coding, research, documents and operations.",
      },
      { title: "Desktop reach", body: "Applications, files, clipboard and system actions." },
      { title: "Automation", body: "Workflows and cron-style jobs keep running without you." },
      { title: "Full visibility", body: "Live tracking of every step, tool call and output." },
    ],
    sections: [
      {
        heading: "How to judge a JARVIS alternative",
        body: "Use four questions before you download anything.",
        bullets: [
          "Can it handle an instruction it has never seen before?",
          "Can it produce work — a file, a document, a report, code — not just an app launch?",
          "Can it repeat that work on a schedule without you?",
          "Can you see what it did after the fact?",
        ],
      },
      {
        heading: "Where simpler tools still win",
        body: "If all you want is hands-free shortcuts for five commands, a lightweight voice launcher is smaller, free and perfectly adequate. DIGI BIZ OS is aimed at people whose voice requests turn into hours of real work.",
      },
    ],
    faq: [
      {
        q: "Is DIGI BIZ OS affiliated with Marvel?",
        a: "No. It is JARVIS-inspired in experience only and has no affiliation with Marvel or the fictional J.A.R.V.I.S. system.",
      },
      {
        q: "Can I keep my current assistant too?",
        a: "Yes. It runs as a normal Windows application alongside anything else you use.",
      },
    ],
    links: [
      { label: "JARVIS AI overview", to: "/jarvis-ai" },
      { label: "JARVIS for Windows", to: "/jarvis-for-windows" },
      { label: "Compare with typical JARVIS apps", to: "/compare/digi-biz-os-vs-jarvis-apps" },
      { label: "Voice assistant", to: "/features/voice-assistant" },
      ...CTA_CORE,
    ],
    image: img(
      osTranscript,
      "Voice transcript in DIGI BIZ OS showing a spoken instruction being executed",
      "Speak the request; the transcript and run view show what happens next.",
    ),
    accent: "var(--amber)",
  },
  {
    path: "/jarvis-for-windows",
    group: "intent",
    eyebrow: "JARVIS for Windows",
    h1: "JARVIS for Windows —",
    h1Gradient: "Installed, Not Imagined.",
    metaTitle: "JARVIS for Windows 10 & 11 — Voice AI Desktop Assistant | DIGI BIZ OS",
    metaDescription:
      "A JARVIS-style AI assistant you can install on Windows 10 and 11. Voice control, desktop actions, agents, coding, documents and scheduled automation in one application.",
    intro:
      "DIGI BIZ OS is a Windows application, not a browser tab. Install it on Windows 10 or 11, activate your licence and start giving spoken instructions that touch your real files, applications, terminal and documents.",
    answers: [
      {
        q: "Which Windows versions are supported?",
        a: "Windows 10 and Windows 11. macOS, Linux and a mobile companion are marked coming soon.",
      },
      {
        q: "How do I install it?",
        a: "Download the installer, run it, then activate with the licence key emailed after purchase. Setup usually takes a few minutes.",
      },
      {
        q: "Does it control the desktop?",
        a: "Yes — with your permission it can work with applications, files, folders, clipboard and system actions.",
      },
    ],
    capabilities: [
      { title: "Native install", body: "A real Windows application with a full workspace UI." },
      {
        title: "Voice control",
        body: "Push-to-talk or continuous listening with a live transcript.",
      },
      {
        title: "File access",
        body: "Local folders, batch renaming, sorting and document pipelines.",
      },
      {
        title: "Terminal",
        body: "Command execution and project work inside the coding workspace.",
      },
      { title: "Scheduling", body: "Jobs that run on your PC on a timetable." },
      { title: "Multi-model", body: "Route each task to a suitable model." },
    ],
    sections: [
      {
        heading: "What a desktop install unlocks",
        body: "Web assistants are sandboxed away from your machine. A native Windows app can open the folder, read the invoice, write the spreadsheet, run the script and save the output where you expect to find it — which is where most of the time saving actually comes from.",
      },
      {
        heading: "Requirements and expectations",
        body: "A modern Windows 10 or 11 PC with an internet connection for model access. Offline utilities and local file tools continue to work without network access.",
      },
    ],
    faq: [
      {
        q: "Is there a macOS version?",
        a: "Not yet — macOS is listed as coming soon on the home page.",
      },
      {
        q: "Can it run at startup?",
        a: "Yes, it can stay resident so scheduled jobs and voice control are always available.",
      },
    ],
    links: [
      { label: "JARVIS AI overview", to: "/jarvis-ai" },
      { label: "JARVIS alternative", to: "/jarvis-alternative" },
      { label: "AI assistant for Windows", to: "/ai-assistant-for-windows" },
      { label: "Desktop control", to: "/features/computer-use" },
      ...CTA_CORE,
    ],
    image: img(
      osShell,
      "DIGI BIZ OS running as a Windows desktop application",
      "DIGI BIZ OS installed and running on Windows.",
    ),
    accent: "var(--cyan)",
  },
  {
    path: "/ai-computer-control",
    group: "intent",
    eyebrow: "Computer Control",
    h1: "AI That Can",
    h1Gradient: "Actually Control Your Computer.",
    metaTitle: "AI That Controls Your Computer — Desktop Control AI | DIGI BIZ OS",
    metaDescription:
      "DIGI BIZ OS controls your Windows computer on request: opens applications, works with files and folders, uses the terminal and browser, and reports every action it takes.",
    intro:
      "Control is the part most AI tools skip. DIGI BIZ OS is built around it: you grant permission, speak the instruction, and the assistant operates the machine — applications, files, clipboard, terminal, browser — while you watch each step in the run view.",
    answers: [
      {
        q: "Can AI really control a computer?",
        a: "Yes. Computer-use assistants like DIGI BIZ OS act on the desktop through tools rather than only generating text, so they can open applications, move files and run commands.",
      },
      {
        q: "Is it safe?",
        a: "Actions run under your Windows account with your permission, and every step is logged in the run view so you can see exactly what happened.",
      },
      {
        q: "What are common uses?",
        a: "Sorting and renaming files, processing document batches, running scripts, gathering research, preparing reports and repeating any of these on a schedule.",
      },
    ],
    capabilities: [
      { title: "Applications", body: "Open, focus and drive the programs you already use." },
      { title: "Files and folders", body: "Find, move, rename, convert and organise at volume." },
      { title: "Terminal", body: "Run commands and scripts inside your projects." },
      { title: "Browser", body: "Research, collect and summarise from the web." },
      { title: "Clipboard and system", body: "Everyday system actions handled hands-free." },
      { title: "Audit trail", body: "A complete history of the actions taken." },
    ],
    sections: [
      {
        heading: "Permission first, always",
        body: "Nothing runs without you asking for it. The assistant stays idle until you give an instruction, and destructive operations are surfaced clearly before and after execution.",
      },
      {
        heading: "Why control beats suggestion",
        body: "A suggestion still leaves the work with you. Control removes the last mile: the files are actually renamed, the report is actually written and the job actually ran at 7am.",
      },
    ],
    faq: [
      {
        q: "Does it need admin rights?",
        a: "Ordinary tasks run under your normal user account. Only operations that genuinely require elevation would need it.",
      },
      {
        q: "Can I limit what it touches?",
        a: "Yes — you choose which folders and capabilities are in scope for a given task.",
      },
    ],
    links: [
      { label: "Computer-use AI", to: "/computer-use-ai" },
      { label: "Desktop control module", to: "/features/computer-use" },
      { label: "AI file management", to: "/features/ai-file-management" },
      { label: "Desktop AI agent", to: "/desktop-ai-agent" },
      ...CTA_CORE,
    ],
    image: img(
      osDesktopTools,
      "Desktop control tools in DIGI BIZ OS acting on files and applications",
      "Desktop and file tools available to the assistant.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/desktop-ai-agent",
    group: "intent",
    eyebrow: "Desktop Agent",
    h1: "A Desktop AI Agent",
    h1Gradient: "That Lives Where You Work.",
    metaTitle: "Desktop AI Agent for Windows — Autonomous Local Agent | DIGI BIZ OS",
    metaDescription:
      "Run autonomous AI agents on your own desktop. DIGI BIZ OS agents plan, use tools, work with local files and projects, and report every step in a live run view.",
    intro:
      "A desktop AI agent is an agent that runs where your work already lives: your machine, your folders, your projects. DIGI BIZ OS lets you create agents, give them scope, and let them carry out multi-step work locally instead of in an isolated cloud sandbox.",
    answers: [
      {
        q: "What is a desktop AI agent?",
        a: "It is an AI agent that executes on your own computer, using local files, applications and tools, rather than running only in a remote environment.",
      },
      {
        q: "How is it different from a cloud agent?",
        a: "Local context. A desktop agent can read the folder you just saved to, run your project's commands and put the output back on your disk.",
      },
      {
        q: "Can several agents work together?",
        a: "Yes. Work can be delegated between specialist agents, with progress visible for each one.",
      },
    ],
    capabilities: [
      {
        title: "Local context",
        body: "Your files, projects and documents are the working material.",
      },
      { title: "Custom agents", body: "Define role, scope, tools and persona per agent." },
      { title: "Delegation", body: "Agents hand subtasks to the right specialist." },
      { title: "Tooling", body: "150+ mixed tools available to every agent." },
      { title: "Persistence", body: "Memories keep context across sessions and projects." },
      { title: "Live tracking", body: "Watch each agent's steps and outputs as they run." },
    ],
    sections: [
      {
        heading: "Where desktop agents pay off",
        body: "Anything that mixes reasoning with local material: reviewing a folder of contracts, refactoring a project, preparing a weekly pack from files on disk, or keeping a research digest current.",
      },
      {
        heading: "Keeping agents accountable",
        body: "Every run is tracked step by step, so an agent's work can be reviewed, repeated or corrected — which is what makes autonomy usable in a business rather than a novelty.",
      },
    ],
    faq: [
      {
        q: "Do agents run without supervision?",
        a: "They can run scheduled and unattended, and every run is recorded so you can review afterwards.",
      },
      {
        q: "Can I build my own?",
        a: "Yes. Custom agents, skills, tools and memories are created inside the app.",
      },
    ],
    links: [
      { label: "Multi-agent AI", to: "/multi-agent-ai" },
      { label: "AI agent platform", to: "/ai-agent-platform" },
      { label: "Agents overview", to: "/agents" },
      { label: "AI computer control", to: "/ai-computer-control" },
      ...CTA_CORE,
    ],
    image: img(
      osLiveTracking,
      "Live tracking view of DIGI BIZ OS agents executing steps on a desktop",
      "Live tracking of agent runs, step by step.",
    ),
    accent: "var(--cyan)",
  },
  /* ------------------------------------------------------------------ */
  /* ADDITIONAL FEATURE MODULES                                         */
  /* ------------------------------------------------------------------ */
  {
    path: "/features/model-router",
    group: "feature",
    eyebrow: "Model Router",
    h1: "Model Router —",
    h1Gradient: "The Right Model per Task.",
    metaTitle: "Model Router — Automatic AI Model Selection | DIGI BIZ OS",
    metaDescription:
      "The DIGI BIZ OS model router sends each task to a suitable AI model, so reasoning, speed and cost are balanced automatically across 200+ available models.",
    intro:
      "Different jobs need different models. The router picks a suitable one per task — fast models for short operations, stronger models for planning and analysis — so you do not have to think about model names to get good results.",
    answers: [
      {
        q: "What is a model router?",
        a: "It is the component that decides which AI model handles a given task, based on the type of work, the required depth and your configuration.",
      },
      {
        q: "Can I override it?",
        a: "Yes. You can pin a preferred model for a task, agent or workspace.",
      },
    ],
    capabilities: [
      { title: "200+ models", body: "A broad catalogue available inside the app." },
      { title: "Task-aware", body: "Routing based on the kind of work requested." },
      { title: "Manual pinning", body: "Force a specific model when you need consistency." },
      { title: "Per-agent settings", body: "Each agent can prefer its own model." },
      { title: "Fallbacks", body: "Work continues if a provider is unavailable." },
      { title: "Cost awareness", body: "Cheap work stays on cheap models." },
    ],
    sections: [
      {
        heading: "Why routing matters more than any single model",
        body: "Sending every request to the largest model is slow and wasteful; sending everything to the smallest one produces poor plans. Routing gets the balance right automatically across a long working day.",
      },
    ],
    faq: [
      {
        q: "Does it lock me to one provider?",
        a: "No — model choice is configurable and multiple providers are supported.",
      },
    ],
    links: [
      { label: "AI models", to: "/features/ai-models" },
      { label: "Digi AI", to: "/features/digi-ai" },
      { label: "Memory", to: "/features/memory" },
      ...CTA_CORE,
    ],
    image: img(
      osRuntime,
      "Model selection and routing settings in DIGI BIZ OS",
      "Model routing and runtime configuration.",
    ),
    accent: "var(--purple)",
  },
  {
    path: "/features/ai-file-management",
    group: "feature",
    eyebrow: "File Management",
    h1: "AI File Management —",
    h1Gradient: "Order Without the Admin.",
    metaTitle: "AI File Management — Organise Folders and Documents by Voice | DIGI BIZ OS",
    metaDescription:
      "Let DIGI BIZ OS sort, rename, convert and file your documents. Describe the structure you want and the assistant applies it across local folders on Windows.",
    intro:
      "File admin is the work nobody schedules and everyone loses hours to. Describe the structure you want — by client, by date, by type — and the assistant applies it across your local folders, converting and renaming as it goes.",
    answers: [
      {
        q: "Can AI organise my files?",
        a: "Yes. DIGI BIZ OS can read, classify, rename, move and convert files in local folders based on rules you describe in plain language.",
      },
      {
        q: "Does it work in bulk?",
        a: "Yes — batches of documents are handled in one run, with a summary of what changed.",
      },
    ],
    capabilities: [
      { title: "Classification", body: "Sort by client, type, date or content." },
      { title: "Bulk renaming", body: "Consistent naming applied across a folder." },
      { title: "Conversion", body: "Move between common document and image formats." },
      { title: "Extraction", body: "Pull data out of documents into structured output." },
      { title: "Deduplication", body: "Spot and handle repeated files." },
      { title: "Scheduling", body: "Keep an inbox folder tidy automatically." },
    ],
    sections: [
      {
        heading: "A worked example",
        body: "Point it at a downloads folder full of invoices and ask for them filed by client and month with a consistent naming pattern and a summary spreadsheet. One run, one review, done — then schedule it weekly.",
      },
    ],
    faq: [
      {
        q: "Will it delete anything?",
        a: "Destructive actions are surfaced clearly and remain under your control.",
      },
      { q: "Which folders can it touch?", a: "Only the folders you put in scope for the task." },
    ],
    links: [
      { label: "DigiDocs", to: "/features/digidocs" },
      { label: "Desktop control", to: "/features/computer-use" },
      { label: "AI computer control", to: "/ai-computer-control" },
      ...CTA_CORE,
    ],
    image: img(
      osDocs,
      "Document and file tools inside DIGI BIZ OS",
      "Document and file operations in DigiDocs.",
    ),
    accent: "var(--amber)",
  },
];

export const SEO_PAGE_BY_PATH: Record<string, SeoPage> = Object.fromEntries(
  SEO_PAGES.map((p) => [p.path, p]),
);

export const FEATURE_PAGES = SEO_PAGES.filter((p) => p.group === "feature");
export const INTENT_PAGES = SEO_PAGES.filter((p) => p.group === "intent");
