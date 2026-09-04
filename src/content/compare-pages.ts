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
      "Both products sit in the same emerging category: AI assistants that live on your desktop rather than in a browser tab. We have kept this comparison to what is publicly stated by each product, and to the areas where our own scope is clearly defined — check Stonic AI's own site for their current feature list before deciding.",
    summary: {
      forDigiBiz: [
        "You want a broad business operating system, not only an assistant.",
        "You need multi-agent runs, workflows and automated tasks.",
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
      {
        aspect: "Category",
        digibiz: "AI agentic business operating system for Windows",
        other: "AI desktop assistant",
      },
      {
        aspect: "Scope",
        digibiz: "500+ skills, 200+ mixed tools, agents, documents, coding, automation",
        other: "See their site for the current capability list",
      },
      {
        aspect: "Agents",
        digibiz: "Multi-agent delegation with live run tracking",
        other: "Varies by release",
      },
      {
        aspect: "Automation",
        digibiz: "Workflows plus trigger-based event automation",
        other: "Varies by release",
      },
      {
        aspect: "Licensing",
        digibiz: "One-time lifetime licence; source code and custom build available",
        other: "See their current pricing page",
      },
      {
        aspect: "Customisation",
        digibiz: "Custom skills, agents, memories and full source code option",
        other: "Varies by release",
      },
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
      {
        q: "Is this comparison independent?",
        a: "No — it is published by DIGI BIZ OS. We have limited the claims to our own scope and encourage you to check Stonic AI's site directly for their current features and pricing.",
      },
      {
        q: "Can I try both?",
        a: "Yes, and we recommend it. Run the same real task through each product before committing.",
      },
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
      "These two products solve different halves of the same problem. ChatGPT is an outstanding general assistant you talk to in a browser or app. DIGI BIZ OS is a Windows application that carries out work on your own machine — files, documents, terminal, browser, automated workflows and multi-agent runs. Many people use both.",
    summary: {
      forDigiBiz: [
        "You want work executed on your PC, not described to you.",
        "You need automated workflows, tasks and repeatable operations.",
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
      {
        aspect: "Primary purpose",
        digibiz: "Run business and desktop work end to end",
        other: "Conversational assistance and content generation",
      },
      {
        aspect: "Where it runs",
        digibiz: "Installed Windows application on your machine",
        other: "Web, mobile and desktop clients backed by the cloud",
      },
      {
        aspect: "Voice",
        digibiz: "Voice-first control with live transcript and execution",
        other: "Voice conversation",
      },
      {
        aspect: "Desktop control",
        digibiz: "Applications, files, clipboard and system actions",
        other: "Not a native desktop controller",
      },
      {
        aspect: "Agents",
        digibiz: "Multi-agent runs with delegation and live tracking",
        other: "Assistant-style tasks and tooling",
      },
      {
        aspect: "Scheduling",
        digibiz: "Cron-style jobs and recurring workflows built in",
        other: "Limited scheduling",
      },
      {
        aspect: "Pricing model",
        digibiz: "One-time lifetime licence from £50",
        other: "Free tier plus monthly subscription plans",
      },
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
      {
        q: "Does DIGI BIZ OS replace ChatGPT?",
        a: "Not necessarily. It replaces the manual work that follows a conversation. Many users keep both.",
      },
      {
        q: "Which is cheaper long term?",
        a: "DIGI BIZ OS is a one-time licence, so cost does not grow monthly. Subscription products cost less on day one and more over years.",
      },
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
      {
        aspect: "Ecosystem",
        digibiz: "Vendor-neutral; works alongside whatever you use",
        other: "Strongest inside Microsoft 365",
      },
      {
        aspect: "Customisation",
        digibiz: "Custom skills, agents, tools, memories and workflows",
        other: "Configuration within Microsoft's framework",
      },
      {
        aspect: "Automation",
        digibiz: "Workflows, cron jobs and task queues in the app",
        other: "Automation via connected Microsoft services",
      },
      {
        aspect: "Coding",
        digibiz: "Coding workspace, terminal and repository work",
        other: "Separate developer products",
      },
      {
        aspect: "Licensing",
        digibiz: "One-time licence; source code licence available",
        other: "Per-user subscription",
      },
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
      {
        q: "Can they run side by side?",
        a: "Yes. They are separate applications and do not conflict.",
      },
      {
        q: "Does DIGI BIZ OS need Microsoft 365?",
        a: "No. It runs independently on Windows 10 and 11.",
      },
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
      {
        aspect: "Category",
        digibiz: "AI business operating system",
        other: "Conversational model assistant",
      },
      {
        aspect: "Model strategy",
        digibiz: "Multiple models with routing per task",
        other: "One model family",
      },
      {
        aspect: "Memory",
        digibiz: "Custom, reusable business memories",
        other: "Conversation and project context",
      },
      {
        aspect: "Execution",
        digibiz: "Files, apps, terminal, browser, documents, jobs",
        other: "Text output plus limited tooling",
      },
      {
        aspect: "Interface",
        digibiz: "Voice-first desktop app with live run tracking",
        other: "Chat interface",
      },
    ],
    sections: [
      {
        heading: "Model quality is not the whole product",
        body: "Once a model is good enough for your task, the differentiator becomes what happens next: how work is planned, which tool runs, where the output lands and whether it repeats reliably. That surrounding system is what DIGI BIZ OS provides.",
      },
    ],
    faq: [
      {
        q: "Which model does DIGI BIZ OS use?",
        a: "It supports multiple models and routes work to a suitable one for the task. Model choice is configurable in the app.",
      },
      {
        q: "Is Claude better at writing?",
        a: "For pure long-form reasoning and drafting, a dedicated model assistant is excellent. DIGI BIZ OS focuses on getting operational work completed.",
      },
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
      {
        aspect: "Interface",
        digibiz: "Voice, chat and a full workspace UI",
        other: "Command line driven",
      },
      {
        aspect: "Scope",
        digibiz: "Coding plus documents, tools, agents and automation",
        other: "Primarily code execution",
      },
      {
        aspect: "Setup",
        digibiz: "Install and activate",
        other: "Manual environment configuration",
      },
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
      {
        q: "Is DIGI BIZ OS open source?",
        a: "It is a commercial product. A separate source code licence is available for customers who want to own and modify the codebase.",
      },
      {
        q: "Can it run code?",
        a: "Yes — a coding workspace, terminal access and project work are part of the product.",
      },
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
      "Most JARVIS-style apps map a phrase to a shortcut. Compare that approach with DIGI BIZ OS: planning, agents, 500+ skills, 200+ tools, documents and scheduled automation.",
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
      {
        aspect: "Command model",
        digibiz: "Natural instruction, planned into steps",
        other: "Fixed phrase to fixed action",
      },
      {
        aspect: "Capability depth",
        digibiz: "500+ skills, 200+ mixed tools, agents",
        other: "A short list of shortcuts",
      },
      {
        aspect: "Work produced",
        digibiz: "Documents, reports, code, files, automations",
        other: "App launches and simple actions",
      },
      {
        aspect: "Extensibility",
        digibiz: "Custom skills, tools, memories, agents, workflows",
        other: "Scripted additions if supported",
      },
      {
        aspect: "Visibility",
        digibiz: "Live tracking of every step and result",
        other: "Usually none",
      },
    ],
    sections: [
      {
        heading: "Why phrase-mapping hits a ceiling",
        body: "A shortcut launcher cannot handle 'process this month's invoices, file them by client and send me a summary'. That request needs interpretation, planning, several tools and a place for the output to land. That is the gap DIGI BIZ OS is designed to fill.",
      },
    ],
    faq: [
      {
        q: "Is DIGI BIZ OS a JARVIS clone?",
        a: "No. It is JARVIS-inspired rather than a copy of the fictional system, and it is not affiliated with Marvel.",
      },
      {
        q: "Do I still get simple voice commands?",
        a: "Yes. Quick commands work exactly as you would expect; the difference is that longer requests are also handled.",
      },
    ],
    links: [
      { label: "Voice AI Control", to: "/voice-ai" },
      { label: "All features", to: "/features" },
      ...CORE_LINKS,
    ],
  },
  {
    slug: "opencut-vs-capcut",
    competitor: "CapCut",
    eyebrow: "Video Editing Comparison",
    h1: "OpenCut vs CapCut —",
    h1Gradient: "Free Offline vs Cloud Video Editing.",
    metaTitle: "OpenCut vs CapCut — Free Open-Source PC Video Editor Compared | DIGI BIZ OS",
    metaDescription:
      "Compare OpenCut and CapCut: 9:16 vertical presets, export watermarks, privacy, cloud locks, and desktop workflows for content creators.",
    intro:
      "A direct, factual comparison between OpenCut (free open-source video editor) and CapCut (commercial mobile/desktop editor). Discover differences in licensing, export watermarks, local privacy, and integration with DIGI BIZ OS marketing workflows.",
    summary: {
      forDigiBiz: [
        "100% free with MIT open-source license and zero watermark export restrictions.",
        "Complete offline privacy — no forced account logins or telemetry tracking.",
        "Native 9:16 vertical reels presets with magnetic snapping timeline.",
        "Directly integrated with DIGI BIZ OS for automated video script production.",
      ],
      forOther: [
        "Large built-in library of cloud trending templates and music tracks.",
        "Automatic cloud synchronization between mobile phones and desktop.",
        "Proprietary cloud background removal and AI effects.",
      ],
    },
    rows: [
      {
        aspect: "Pricing & Licence",
        digibiz: "100% Free (MIT Open Source) • Zero Subscription",
        other: "Freemium with paid Pro Subscription ($9.99+/mo)",
      },
      {
        aspect: "Watermark Policy",
        digibiz: "Zero watermarks on any video resolution or export",
        other: "May require Pro subscription or ending card for some assets",
      },
      {
        aspect: "Data Privacy",
        digibiz: "100% Local processing on your PC drive • Air-gapped",
        other: "Cloud-connected with user data uploaded to servers",
      },
      {
        aspect: "Aspect Ratio Support",
        digibiz: "Instant 9:16 (Shorts/Reels), 1:1, 16:9, and 4:5 presets",
        other: "Full aspect ratio support",
      },
      {
        aspect: "Ecosystem Fit",
        digibiz: "Pairs with Digi Marketing for instant AI script generation",
        other: "Standalone consumer application",
      },
    ],
    sections: [
      {
        heading: "Why creators switch to open-source editors",
        body: "Commercial editors increasingly lock basic features like custom fonts, high-framerate exports, and 4K renders behind recurring monthly subscriptions. OpenCut provides clean, unrestricted video cutting without licensing traps or cloud dependency.",
      },
    ],
    faq: [
      {
        q: "Is OpenCut completely free for commercial use?",
        a: "Yes. Released under the MIT open-source license, you can edit and monetize client videos, ads, and YouTube content with zero royalties.",
      },
      {
        q: "Can I download OpenCut directly for Windows?",
        a: "Yes. You can download the OpenCut installer directly from the DIGI BIZ OS open-source suite.",
      },
    ],
    links: [
      { label: "Download OpenCut Studio", to: "/open-source/opencut" },
      { label: "Digi Marketing Suite", to: "/modules/marketing" },
      ...CORE_LINKS,
    ],
  },
  {
    slug: "open-seo-spider-vs-screaming-frog",
    competitor: "Screaming Frog",
    eyebrow: "Technical SEO Comparison",
    h1: "Open SEO Spider vs Screaming Frog —",
    h1Gradient: "Unlimited Free vs Paid SEO Crawler.",
    metaTitle: "Open SEO Spider vs Screaming Frog — Free Technical Website Crawler | DIGI BIZ OS",
    metaDescription:
      "Compare Open SEO Spider and Screaming Frog: crawl limits, Google Sitelinks schema validation, Core Web Vitals, and pricing for SEO agencies.",
    intro:
      "Compare Open SEO Spider and Screaming Frog SEO Spider. Evaluate crawl depth limits, Schema.org JSON-LD validation, Core Web Vitals audit capabilities, and how Open SEO Spider integrates with DIGI BIZ OS automation.",
    summary: {
      forDigiBiz: [
        "Unlimited free crawl depth with zero 500-URL artificial limits.",
        "Built-in Google Sitelinks (6-pack) and SiteNavigationElement schema validator.",
        "100% offline local crawl database with zero recurring licence renewal.",
        "Pairs with Digi Flow for automated scheduled website health audits.",
      ],
      forOther: [
        "Industry standard legacy desktop crawler with 10+ years of active development.",
        "Direct Google Search Console and Google Analytics 4 API connectors.",
        "Advanced custom JavaScript rendering options with Chromium integration.",
      ],
    },
    rows: [
      {
        aspect: "Pricing & Licence",
        digibiz: "100% Free & Open-Source • No Annual Licence Fee",
        other: "Free up to 500 URLs • £199/year per licence",
      },
      {
        aspect: "Crawl Limit",
        digibiz: "Unlimited URLs (constrained only by PC RAM / storage)",
        other: "500 URLs on free version; unlimited on paid",
      },
      {
        aspect: "Schema Validation",
        digibiz: "Built-in Google Sitelinks & JSON-LD Entity Graph tester",
        other: "Schema validation via Google Rich Results API",
      },
      {
        aspect: "Automation",
        digibiz: "Triggered via JARVIS voice commands and cron schedules",
        other: "Command-line automation in paid version",
      },
    ],
    sections: [
      {
        heading: "Eliminating artificial crawl limits for growing websites",
        body: "Most small business websites exceed 500 URLs once blog posts, products, and categories are indexed. Open SEO Spider removes the £199/year paywall, giving developers and agencies deep audit power without budget constraints.",
      },
    ],
    faq: [
      {
        q: "Does Open SEO Spider find broken 404 links and redirect chains?",
        a: "Yes. It audits response codes (200, 301, 302, 404, 500), canonical tags, missing meta tags, and internal link distributions.",
      },
      {
        q: "Where does Open SEO Spider store crawl data?",
        a: "All crawl databases and audit logs are saved locally on your Windows machine in private SQLite files.",
      },
    ],
    links: [
      { label: "Download Open SEO Spider", to: "/open-source/seo-spider" },
      { label: "Digi Tools Suite", to: "/modules/tools" },
      ...CORE_LINKS,
    ],
  },
  {
    slug: "kdenlive-vs-premiere-pro",
    competitor: "Adobe Premiere Pro",
    eyebrow: "Professional Video Comparison",
    h1: "Kdenlive vs Adobe Premiere Pro —",
    h1Gradient: "Open Source vs Creative Cloud.",
    metaTitle: "Kdenlive vs Adobe Premiere Pro — Free Video Editor Comparison | DIGI BIZ OS",
    metaDescription:
      "A complete comparison of Kdenlive and Adobe Premiere Pro: multi-track editing, color grading, system resource usage, and $0 vs $239/year pricing.",
    intro:
      "A side-by-side analysis of Kdenlive (the premier open-source video editor) and Adobe Premiere Pro. Compare multi-track timelines, proxy workflows, rendering stability, and the financial impact of perpetual ownership vs Creative Cloud subscriptions.",
    summary: {
      forDigiBiz: [
        "100% Free & Open-Source (GPL-3.0) with zero subscription or cancellation fees.",
        "Lightweight system footprint that runs smoothly on standard Windows laptops.",
        "Full multi-track timeline, keyframe animations, and proxy editing.",
        "Included in the DIGI BIZ OS open-source media suite with direct offline installer.",
      ],
      forOther: [
        "Industry standard in Hollywood and major broadcast media production.",
        "Seamless roundtrip integration with After Effects and Photoshop.",
        "Proprietary Adobe Sensei generative AI features and auto-reframe.",
      ],
    },
    rows: [
      {
        aspect: "Pricing & Licence",
        digibiz: "Free Forever (GPL-3.0) • $0",
        other: "$22.99/mo or $239.88/year recurring Creative Cloud",
      },
      {
        aspect: "Offline Execution",
        digibiz: "100% Offline • Never requires online licence check-in",
        other: "Requires periodic Adobe cloud account verification",
      },
      {
        aspect: "System Overhead",
        digibiz: "Fast startup • Low RAM and background CPU usage",
        other: "Heavy background services (Creative Cloud daemon)",
      },
    ],
    sections: [
      {
        heading: "True software ownership for video creators",
        body: "Adobe's subscription model means losing access to your project files the moment you stop paying. Kdenlive ensures your editing workstation remains perpetually functional with zero lock-in.",
      },
    ],
    faq: [
      {
        q: "Does Kdenlive support 4K video rendering?",
        a: "Yes. Kdenlive supports 4K, ProRes, MP4, WebM, and hardware-accelerated NVENC GPU exports.",
      },
    ],
    links: [
      { label: "Download Kdenlive for Windows", to: "/open-source/kdenlive" },
      { label: "Open-Source Media Suite", to: "/open-source" },
      ...CORE_LINKS,
    ],
  },
  {
    slug: "pocketbase-vs-supabase",
    competitor: "Supabase",
    eyebrow: "Backend Architecture Comparison",
    h1: "PocketBase vs Supabase —",
    h1Gradient: "Single Binary vs Cloud Infrastructure.",
    metaTitle: "PocketBase vs Supabase — Self-Hosted Backend Comparison | DIGI BIZ OS",
    metaDescription:
      "Compare PocketBase and Supabase: 1-file SQLite simplicity, real-time subscriptions, auth, system resources, and self-hosted developer workflows.",
    intro:
      "A technical comparison of PocketBase (single-file Go/SQLite backend) and Supabase (PostgreSQL cloud platform). Discover when a lightweight local backend outperforms complex cloud clusters for desktop and business software.",
    summary: {
      forDigiBiz: [
        "Packaged in a single self-contained binary under 40 MB.",
        "Instant zero-config setup with embedded SQLite and real-time event subscriptions.",
        "Runs directly on Windows desktop without requiring Docker or Kubernetes.",
        "Zero cloud hosting bills or ingress/egress bandwidth charges.",
      ],
      forOther: [
        "Full enterprise PostgreSQL with Row-Level Security (RLS) and pgvector.",
        "Managed global edge infrastructure and serverless cloud functions.",
        "Native multi-region failover and enterprise clustering.",
      ],
    },
    rows: [
      {
        aspect: "Architecture",
        digibiz: "1 Single Executable (Go + SQLite)",
        other: "Multi-container PostgreSQL cluster",
      },
      {
        aspect: "Setup Complexity",
        digibiz: "Instant (Download & Double-Click)",
        other: "Requires Docker or Cloud Account Provisioning",
      },
      {
        aspect: "RAM Footprint",
        digibiz: "~15-30 MB RAM idle",
        other: "~500 MB - 1 GB+ RAM for full stack",
      },
    ],
    sections: [
      {
        heading: "The power of embedded databases for desktop business tools",
        body: "Not every business application requires a multi-node PostgreSQL cluster. PocketBase gives DIGI BIZ OS lightning-fast local querying, instant backup by copying a single file, and complete data privacy.",
      },
    ],
    faq: [
      {
        q: "Can PocketBase handle thousands of concurrent queries?",
        a: "Yes. Powered by SQLite in WAL mode and Go, PocketBase comfortably handles 10,000+ requests per second on standard PC hardware.",
      },
    ],
    links: [
      { label: "Download PocketBase Backend", to: "/open-source/pocketbase" },
      { label: "Digi Code Workspace", to: "/modules/code" },
      ...CORE_LINKS,
    ],
  },
];

export const COMPARE_BY_SLUG: Record<string, ComparePage> = Object.fromEntries(
  COMPARE_PAGES.map((p) => [p.slug, p]),
);
