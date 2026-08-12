export interface CompareRow {
  aspect: string;
  digibiz: string;
  other: string;
}

export interface ComparePage {
  slug: string;
  competitor: string;
  eyebrow: string;
  h1: string;
  h1Gradient: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  summary: { forDigiBiz: string[]; forOther: string[] };
  rows: CompareRow[];
  sections: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
  links: { label: string; to: string }[];
}

const CORE_LINKS = [
  { label: "All features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
];

export const COMPARE_PAGES: ComparePage[] = [
  {
    slug: "digi-biz-os-vs-stonic-ai",
    competitor: "Stonic AI",
    eyebrow: "Comparison",
    h1: "DIGI BIZ OS vs Stonic AI —",
    h1Gradient: "Two AI Desktop Approaches.",
    metaTitle: "DIGI BIZ OS vs Stonic AI — AI Desktop Assistants Compared | DIGI BIZ OS",
    metaDescription:
      "A fair look at DIGI BIZ OS and Stonic AI: both are AI desktop assistants for Windows. Compare scope, agents, automation, licensing and who each one suits best.",
    intro:
      "Both products sit in the same emerging category: AI assistants that live on your desktop rather than in a browser tab. We have kept this comparison to what is publicly stated by each product, and to the areas where our own scope is clearly defined — check Stonic AI\'s own site for their current feature list before deciding.",
    summary: {
      forDigiBiz: [
        "You want a broad business operating system, not only an assistant.",
        "You need multi-agent runs, workflows and scheduled jobs.",
        "You want document, coding and desktop workspaces in one product.",
        "You want a one-time licence with source code and custom build options.",
      ],
      forOther: [
        "You prefer their specific interface and workflow after trying both.",
        "Their current feature set already covers everything you need.",
        "Their pricing or platform support fits your situation better.",
      ],
    },
    rows: [
      { aspect: "Category", digibiz: "AI agentic business operating system for Windows", other: "AI desktop assistant" },
      { aspect: "Scope", digibiz: "500+ skills, 150+ mixed tools, agents, documents, coding, automation", other: "See their site for the current capability list" },
      { aspect: "Agents", digibiz: "Multi-agent delegation with live run tracking", other: "Varies by release" },
      { aspect: "Automation", digibiz: "Workflows plus cron-style scheduled jobs", other: "Varies by release" },
      { aspect: "Licensing", digibiz: "One-time lifetime licence; source code and custom build available", other: "See their current pricing page" },
      { aspect: "Customisation", digibiz: "Custom skills, agents, memories and full source code option", other: "Varies by release" },
    ],
    sections: [
      {
        heading: "The category is the real story",
        body: "Both products exist because chat assistants cannot touch your machine. If you are choosing between them, you have already made the important decision — moving AI from a browser tab to the desktop, where your files, projects and applications actually live.",
      },
      {
        heading: "How we would evaluate them",
        body: "Install both if you can, then run the same real task through each: a multi-step job from your own week that ends in a file. Judge on completion, visibility of what happened, repeatability on a schedule, and total cost over two years rather than on day one.",
      },
      {
        heading: "Where DIGI BIZ OS is deliberately different",
        body: "The product is built as an operating layer for a business, not only a personal assistant: agents you can define, workflows you can schedule, document and coding workspaces, and a source code licence for teams who want to own and rebrand the software.",
      },
    ],
    faq: [
      { q: "Is this comparison independent?", a: "No — it is published by DIGI BIZ OS. We have limited the claims to our own scope and encourage you to check Stonic AI\'s site directly for their current features and pricing." },
      { q: "Can I try both?", a: "Yes, and we recommend it. Run the same real task through each product before committing." },
    ],
    links: [
      { label: "AI desktop assistant", to: "/ai-desktop-assistant" },
      { label: "AI business operating system", to: "/ai-business-operating-system" },
      ...CORE_LINKS,
    ],
  },
  {
    slug: "digi-biz-os-vs-chatgpt",
    competitor: "ChatGPT",
    eyebrow: "Comparison",
    h1: "DIGI BIZ OS vs ChatGPT —",
    h1Gradient: "Execution vs Conversation.",
    metaTitle: "DIGI BIZ OS vs ChatGPT — Desktop Execution vs Chat | DIGI BIZ OS",
    metaDescription:
      "An honest comparison of DIGI BIZ OS and ChatGPT: where a chat assistant is the better tool, and where a desktop AI that runs work on your PC wins.",
    intro:
      "These two products solve different halves of the same problem. ChatGPT is an outstanding general assistant you talk to in a browser or app. DIGI BIZ OS is a Windows application that carries out work on your own machine — files, documents, terminal, browser, scheduled jobs and multi-agent runs. Many people use both.",
    summary: {
      forDigiBiz: [
        "You want work executed on your PC, not described to you.",
        "You need scheduled jobs, workflows and repeatable operations.",
        "You want local desktop control, file handling and document pipelines.",
        "You prefer a one-time licence over a monthly subscription.",
      ],
      forOther: [
        "You mostly need writing, brainstorming and general Q&A.",
        "You work across many devices and want a browser/mobile-first assistant.",
        "You want the largest possible ecosystem of third-party plugins and community content.",
      ],
    },
    rows: [
      { aspect: "Primary purpose", digibiz: "Run business and desktop work end to end", other: "Conversational assistance and content generation" },
      { aspect: "Where it runs", digibiz: "Installed Windows application on your machine", other: "Web, mobile and desktop clients backed by the cloud" },
      { aspect: "Voice", digibiz: "Voice-first control with live transcript and execution", other: "Voice conversation" },
      { aspect: "Desktop control", digibiz: "Applications, files, clipboard and system actions", other: "Not a native desktop controller" },
      { aspect: "Agents", digibiz: "Multi-agent runs with delegation and live tracking", other: "Assistant-style tasks and tooling" },
      { aspect: "Scheduling", digibiz: "Cron-style jobs and recurring workflows built in", other: "Limited scheduling" },
      { aspect: "Pricing model", digibiz: "One-time lifetime licence from £50", other: "Free tier plus monthly subscription plans" },
    ],
    sections: [
      {
        heading: "The honest difference",
        body: "A chat assistant is judged on the quality of its answer. A desktop AI operating system is judged on whether the job is finished. If your bottleneck is thinking, a chat assistant may be all you need. If your bottleneck is repetitive operational work on a computer, an execution layer is what closes the gap.",
      },
      {
        heading: "Using them together",
        body: "Plenty of teams draft strategy or copy in a chat assistant and then hand execution to DIGI BIZ OS: process the documents, rename and file the outputs, run the report every Monday, keep the research digest current. The two roles do not overlap much in practice.",
      },
    ],
    faq: [
      { q: "Does DIGI BIZ OS replace ChatGPT?", a: "Not necessarily. It replaces the manual work that follows a conversation. Many users keep both." },
      { q: "Which is cheaper long term?", a: "DIGI BIZ OS is a one-time licence, so cost does not grow monthly. Subscription products cost less on day one and more over years." },
    ],
    links: [
      { label: "AI desktop assistant", to: "/ai-desktop-assistant" },
      { label: "Computer-use AI", to: "/computer-use-ai" },
      ...CORE_LINKS,
    ],
  },
  {
    slug: "digi-biz-os-vs-copilot",
    competitor: "Microsoft Copilot",
    eyebrow: "Comparison",
    h1: "DIGI BIZ OS vs Microsoft Copilot —",
    h1Gradient: "Open Automation vs Suite Assistance.",
    metaTitle: "DIGI BIZ OS vs Microsoft Copilot — Which AI Assistant for Windows | DIGI BIZ OS",
    metaDescription:
      "Compare DIGI BIZ OS and Microsoft Copilot for Windows: suite-integrated assistance versus a voice-first AI business operating system with agents, jobs and desktop control.",
    intro:
      "Microsoft Copilot is deeply integrated with Microsoft 365 and Windows features. DIGI BIZ OS is an independent AI business operating system that installs on Windows and focuses on executing multi-step work with agents, skills, tools, documents and schedules.",
    summary: {
      forDigiBiz: [
        "You want an assistant that is not limited to one vendor's suite.",
        "You need custom agents, custom skills and scheduled automation.",
        "You want a lifetime licence and optional source code.",
      ],
      forOther: [
        "Your work lives almost entirely inside Microsoft 365.",
        "You want tight in-document assistance in Word, Excel and Outlook.",
        "Your organisation already standardises on Microsoft licensing.",
      ],
    },
    rows: [
      { aspect: "Ecosystem", digibiz: "Vendor-neutral; works alongside whatever you use", other: "Strongest inside Microsoft 365" },
      { aspect: "Customisation", digibiz: "Custom skills, agents, tools, memories and workflows", other: "Configuration within Microsoft's framework" },
      { aspect: "Automation", digibiz: "Workflows, cron jobs and task queues in the app", other: "Automation via connected Microsoft services" },
      { aspect: "Coding", digibiz: "Coding workspace, terminal and repository work", other: "Separate developer products" },
      { aspect: "Licensing", digibiz: "One-time licence; source code licence available", other: "Per-user subscription" },
    ],
    sections: [
      {
        heading: "Where each one is genuinely stronger",
        body: "Copilot is hard to beat for in-place help inside Microsoft documents and mail. DIGI BIZ OS is stronger when the job crosses applications: read the documents, extract the data, write the file, run the script, publish the summary, then repeat it on a schedule.",
      },
      {
        heading: "Independence matters for small businesses",
        body: "A one-time licence with no per-seat subscription and an optional source code route suits agencies and small operators who want to own the tooling instead of renting it.",
      },
    ],
    faq: [
      { q: "Can they run side by side?", a: "Yes. They are separate applications and do not conflict." },
      { q: "Does DIGI BIZ OS need Microsoft 365?", a: "No. It runs independently on Windows 10 and 11." },
    ],
    links: [
      { label: "AI assistant for Windows", to: "/ai-assistant-for-windows" },
      { label: "AI workflow automation", to: "/ai-workflow-automation" },
      ...CORE_LINKS,
    ],
  },
  {
    slug: "digi-biz-os-vs-claude",
    competitor: "Claude",
    eyebrow: "Comparison",
    h1: "DIGI BIZ OS vs Claude —",
    h1Gradient: "An OS Around the Model.",
    metaTitle: "DIGI BIZ OS vs Claude — Model Assistant vs AI Operating System | DIGI BIZ OS",
    metaDescription:
      "Claude is a strong reasoning assistant. DIGI BIZ OS is the operating layer around models: voice, agents, skills, tools, documents, desktop control and scheduling on Windows.",
    intro:
      "Comparing DIGI BIZ OS with Claude is really comparing a product category with a model interface. Claude is used for reasoning, analysis and long-form work. DIGI BIZ OS is the environment that plans, routes and executes work on your machine — and it can call multiple models rather than being tied to one.",
    summary: {
      forDigiBiz: [
        "You need execution, scheduling and desktop actions, not just answers.",
        "You want model choice and routing instead of a single provider.",
        "You want memories, personas and agents that persist across projects.",
      ],
      forOther: [
        "Your work is mostly analysis, writing and reasoning in a chat window.",
        "You want the specific behaviour and style of one model family.",
      ],
    },
    rows: [
      { aspect: "Category", digibiz: "AI business operating system", other: "Conversational model assistant" },
      { aspect: "Model strategy", digibiz: "Multiple models with routing per task", other: "One model family" },
      { aspect: "Memory", digibiz: "Custom, reusable business memories", other: "Conversation and project context" },
      { aspect: "Execution", digibiz: "Files, apps, terminal, browser, documents, jobs", other: "Text output plus limited tooling" },
      { aspect: "Interface", digibiz: "Voice-first desktop app with live run tracking", other: "Chat interface" },
    ],
    sections: [
      {
        heading: "Model quality is not the whole product",
        body: "Once a model is good enough for your task, the differentiator becomes what happens next: how work is planned, which tool runs, where the output lands and whether it repeats reliably. That surrounding system is what DIGI BIZ OS provides.",
      },
    ],
    faq: [
      { q: "Which model does DIGI BIZ OS use?", a: "It supports multiple models and routes work to a suitable one for the task. Model choice is configurable in the app." },
      { q: "Is Claude better at writing?", a: "For pure long-form reasoning and drafting, a dedicated model assistant is excellent. DIGI BIZ OS focuses on getting operational work completed." },
    ],
    links: [
      { label: "AI models and routing", to: "/features/ai-models" },
      { label: "Memory", to: "/features/memory" },
      ...CORE_LINKS,
    ],
  },
  {
    slug: "digi-biz-os-vs-open-interpreter",
    competitor: "Open Interpreter",
    eyebrow: "Comparison",
    h1: "DIGI BIZ OS vs Open Interpreter —",
    h1Gradient: "Product vs Toolkit.",
    metaTitle: "DIGI BIZ OS vs Open Interpreter — Computer-Use AI Compared | DIGI BIZ OS",
    metaDescription:
      "Open Interpreter is a developer toolkit for letting AI run code on your machine. DIGI BIZ OS is a finished Windows product with voice, agents, documents, tools and scheduling.",
    intro:
      "Both belong to the computer-use category: AI that acts on your own machine instead of only chatting. The difference is packaging. Open Interpreter is an open developer toolkit you assemble yourself. DIGI BIZ OS is an installed product with a user interface, voice control, agent system, document workspace, tool library and scheduler.",
    summary: {
      forDigiBiz: [
        "You want a finished application rather than a build-it-yourself setup.",
        "Non-technical team members need to use it too.",
        "You need documents, workflows, jobs and tracking, not only code execution.",
      ],
      forOther: [
        "You are a developer who wants full control of the stack.",
        "You want to embed computer-use behaviour into your own tooling.",
      ],
    },
    rows: [
      { aspect: "Form", digibiz: "Installed Windows application", other: "Developer toolkit" },
      { aspect: "Audience", digibiz: "Business users and developers", other: "Developers" },
      { aspect: "Interface", digibiz: "Voice, chat and a full workspace UI", other: "Command line driven" },
      { aspect: "Scope", digibiz: "Coding plus documents, tools, agents and automation", other: "Primarily code execution" },
      { aspect: "Setup", digibiz: "Install and activate", other: "Manual environment configuration" },
    ],
    sections: [
      {
        heading: "Toolkits are powerful, products are usable",
        body: "If your team is technical and wants to own every layer, a toolkit is a reasonable choice. If the value comes from people across the business using it daily, a packaged product with a UI, permissions and run history wins on adoption.",
      },
      {
        heading: "If you want both",
        body: "DIGI BIZ OS offers a source code licence for teams that want to own and customise the software while still starting from a finished product.",
      },
    ],
    faq: [
      { q: "Is DIGI BIZ OS open source?", a: "It is a commercial product. A separate source code licence is available for customers who want to own and modify the codebase." },
      { q: "Can it run code?", a: "Yes — a coding workspace, terminal access and project work are part of the product." },
    ],
    links: [
      { label: "Computer-use AI", to: "/computer-use-ai" },
      { label: "AI coding agent", to: "/ai-coding-agent" },
      ...CORE_LINKS,
    ],
  },
  {
    slug: "digi-biz-os-vs-jarvis-apps",
    competitor: "Typical JARVIS apps",
    eyebrow: "Comparison",
    h1: "DIGI BIZ OS vs Typical JARVIS Apps —",
    h1Gradient: "Beyond Voice Commands.",
    metaTitle: "DIGI BIZ OS vs Typical JARVIS Apps — JARVIS Alternative Compared | DIGI BIZ OS",
    metaDescription:
      "Most JARVIS-style apps map a phrase to a shortcut. Compare that approach with DIGI BIZ OS: planning, agents, 500+ skills, 150+ tools, documents and scheduled automation.",
    intro:
      "Search for a JARVIS app and you mostly find voice launchers: say a phrase, trigger a shortcut. That is useful, but it is not an assistant that can carry out a multi-step business task. This page compares the two approaches so you can pick the right one.",
    summary: {
      forDigiBiz: [
        "You want the assistant to plan and complete work, not just launch it.",
        "You need business outputs: documents, reports, files, code, schedules.",
        "You want one system that grows with custom skills and agents.",
      ],
      forOther: [
        "You only want hands-free shortcuts for a handful of commands.",
        "You want something free and extremely lightweight.",
      ],
    },
    rows: [
      { aspect: "Command model", digibiz: "Natural instruction, planned into steps", other: "Fixed phrase to fixed action" },
      { aspect: "Capability depth", digibiz: "500+ skills, 150+ mixed tools, agents", other: "A short list of shortcuts" },
      { aspect: "Work produced", digibiz: "Documents, reports, code, files, automations", other: "App launches and simple actions" },
      { aspect: "Extensibility", digibiz: "Custom skills, tools, memories, agents, workflows", other: "Scripted additions if supported" },
      { aspect: "Visibility", digibiz: "Live tracking of every step and result", other: "Usually none" },
    ],
    sections: [
      {
        heading: "Why phrase-mapping hits a ceiling",
        body: "A shortcut launcher cannot handle 'process this month's invoices, file them by client and send me a summary'. That request needs interpretation, planning, several tools and a place for the output to land. That is the gap DIGI BIZ OS is designed to fill.",
      },
    ],
    faq: [
      { q: "Is DIGI BIZ OS a JARVIS clone?", a: "No. It is JARVIS-inspired rather than a copy of the fictional system, and it is not affiliated with Marvel." },
      { q: "Do I still get simple voice commands?", a: "Yes. Quick commands work exactly as you would expect; the difference is that longer requests are also handled." },
    ],
    links: [
      { label: "JARVIS AI", to: "/jarvis-ai" },
      { label: "JARVIS alternative", to: "/jarvis-alternative" },
      ...CORE_LINKS,
    ],
  },
];

export const COMPARE_BY_SLUG: Record<string, ComparePage> = Object.fromEntries(
  COMPARE_PAGES.map((p) => [p.slug, p]),
);
