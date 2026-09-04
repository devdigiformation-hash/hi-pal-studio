export interface SaasReplacementItem {
  id: string;
  category: "Creative & Media" | "CRM & Business Ops" | "Marketing & Sales" | "Workflows & Automation" | "Code & Intelligence";
  saasTool: string;
  saasVendor: string;
  monthlyCost: number;
  annualCost: number;
  costLabel: string;
  digiFeature: string;
  digiModule: string;
  digiCost: "100% Free (Included)";
  highlights: string[];
}

export const SAAS_COMPARISONS: SaasReplacementItem[] = [
  {
    id: "video-editor",
    category: "Creative & Media",
    saasTool: "CapCut Pro & Adobe Premiere Pro",
    saasVendor: "ByteDance / Adobe",
    monthlyCost: 20,
    annualCost: 240,
    costLabel: "$20/mo ($240/yr)",
    digiFeature: "Timeline Video Editor (Reels, Shorts, 4K Cuts)",
    digiModule: "Digi Studio",
    digiCost: "100% Free (Included)",
    highlights: [
      "Hardware-accelerated multi-track timeline",
      "Instant 9:16 vertical crop for TikTok and Reels",
      "No recurring subscription or watermark",
    ],
  },
  {
    id: "voice-tts",
    category: "Creative & Media",
    saasTool: "ElevenLabs Pro & Murf AI",
    saasVendor: "ElevenLabs / Murf",
    monthlyCost: 22,
    annualCost: 264,
    costLabel: "$22/mo ($264/yr)",
    digiFeature: "Multilingual Voice TTS & Audiobook Factory",
    digiModule: "Digi Studio",
    digiCost: "100% Free (Included)",
    highlights: [
      "Studio-grade natural voices in 50+ languages",
      "Long-form audiobook batch generation",
      "Zero per-character charges or monthly token limits",
    ],
  },
  {
    id: "ai-avatar",
    category: "Creative & Media",
    saasTool: "HeyGen & Synthesia",
    saasVendor: "HeyGen / Synthesia",
    monthlyCost: 29,
    annualCost: 348,
    costLabel: "$29/mo ($348/yr)",
    digiFeature: "AI Avatar Studio & Presenter Synthesis",
    digiModule: "Digi Studio",
    digiCost: "100% Free (Included)",
    highlights: [
      "Photorealistic talking digital presenters",
      "Lip-sync synchronization from voice tracks",
      "Unlimited video renders without per-minute cloud bills",
    ],
  },
  {
    id: "speech-to-text",
    category: "Creative & Media",
    saasTool: "Descript Pro & Otter.ai",
    saasVendor: "Descript / Otter.ai",
    monthlyCost: 12,
    annualCost: 144,
    costLabel: "$12/mo ($144/yr)",
    digiFeature: "Offline Speech-to-Text & Subtitle Generator",
    digiModule: "Digi Studio",
    digiCost: "100% Free (Included)",
    highlights: [
      "100% offline audio transcription for air-gapped privacy",
      "Automatic timestamped SRT subtitle export",
      "Handles heavy accents and ambient office background noise",
    ],
  },
  {
    id: "photo-upscaler",
    category: "Creative & Media",
    saasTool: "Topaz Gigapixel & Photoroom Pro",
    saasVendor: "Topaz Labs / Photoroom",
    monthlyCost: 13,
    annualCost: 156,
    costLabel: "$13/mo ($156/yr)",
    digiFeature: "AI Photo Studio & 4K/8K Image Upscaler",
    digiModule: "Digi Studio",
    digiCost: "100% Free (Included)",
    highlights: [
      "One-click AI background removal and product framing",
      "High-resolution 4K/8K image upscaling",
      "Local processing with zero image compression loss",
    ],
  },
  {
    id: "crm-operations",
    category: "CRM & Business Ops",
    saasTool: "HubSpot Sales Hub & Salesforce Starter",
    saasVendor: "HubSpot / Salesforce",
    monthlyCost: 50,
    annualCost: 600,
    costLabel: "$50/mo ($600/yr)",
    digiFeature: "20-Module Business Operating CRM & Accounts P&L",
    digiModule: "Digi CRM",
    digiCost: "100% Free (Included)",
    highlights: [
      "Unified Business Knowledge Base as single source of truth",
      "20 integrated sub-modules: Leads, Deals, Invoices, Accounts",
      "1-second live dashboard with instant 1-click action triggers",
    ],
  },
  {
    id: "whatsapp-automation",
    category: "Marketing & Sales",
    saasTool: "WATI, ManyChat & AiSensy",
    saasVendor: "WATI / ManyChat",
    monthlyCost: 35,
    annualCost: 420,
    costLabel: "$35/mo ($420/yr)",
    digiFeature: "Autonomous 24/7 WhatsApp AI Sales Agent",
    digiModule: "Digi WhatsApp",
    digiCost: "100% Free (Included)",
    highlights: [
      "Instant mobile QR code pairing with your business number",
      "Understands customer voice notes and answers automatically",
      "Direct order logging into CRM with $0 per-message cloud markup",
    ],
  },
  {
    id: "workflow-automation",
    category: "Workflows & Automation",
    saasTool: "Zapier Pro & Make.com",
    saasVendor: "Zapier / Make",
    monthlyCost: 30,
    annualCost: 360,
    costLabel: "$30/mo ($360/yr)",
    digiFeature: "Always-On Workflow Engine & Visual Builder",
    digiModule: "Digi Flow",
    digiCost: "100% Free (Included)",
    highlights: [
      "Always-on background monitors for stock, invoices, and alerts",
      "Multi-agent task delegation and scheduled cron triggers",
      "Zero monthly task quota caps or execution throttling",
    ],
  },
  {
    id: "coding-assistant",
    category: "Code & Intelligence",
    saasTool: "Cursor Pro & GitHub Copilot Business",
    saasVendor: "Anysphere / Microsoft",
    monthlyCost: 20,
    annualCost: 240,
    costLabel: "$20/mo ($240/yr)",
    digiFeature: "AI Coding Workspace & Repository Architecture",
    digiModule: "Digi Code",
    digiCost: "100% Free (Included)",
    highlights: [
      "Full repository intelligence and multi-file architecture editing",
      "Automated terminal pair programming and error debugging",
      "Local code sovereignty without telemetry leakage",
    ],
  },
  {
    id: "model-subscriptions",
    category: "Code & Intelligence",
    saasTool: "ChatGPT Team & Claude Pro Plans",
    saasVendor: "OpenAI / Anthropic",
    monthlyCost: 45,
    annualCost: 540,
    costLabel: "$45/mo ($540/yr)",
    digiFeature: "Multi-Model Router & 50+ Local/Cloud AI Engines",
    digiModule: "Digi AI",
    digiCost: "100% Free (Included)",
    highlights: [
      "Task-aware automatic routing to the optimal AI model",
      "Run 50+ open-weights models 100% offline with zero cloud fees",
      "BYOK direct API connectivity with zero middleman fee markup",
    ],
  },
  {
    id: "seo-audit-spider",
    category: "Marketing & Sales",
    saasTool: "Screaming Frog SEO Spider & Sitebulb",
    saasVendor: "Screaming Frog / Sitebulb",
    monthlyCost: 22,
    annualCost: 259,
    costLabel: "~$22/mo ($259/yr)",
    digiFeature: "Technical SEO Audit Spider & Schema Engine",
    digiModule: "Digi Intelligence",
    digiCost: "100% Free (Included)",
    highlights: [
      "Full site crawlability, broken links, and redirect audits",
      "Multi-tier JSON-LD schema inspection (Breadcrumbs, Sitelinks)",
      "Instant Core Web Vitals and orphan page discovery",
    ],
  },
  {
    id: "api-integrations",
    category: "Workflows & Automation",
    saasTool: "Postman Enterprise & Tray.io",
    saasVendor: "Postman / Tray.io",
    monthlyCost: 40,
    annualCost: 480,
    costLabel: "$40/mo ($480/yr)",
    digiFeature: "Universal stdio MCP Client & API Connectors Hub",
    digiModule: "Digi MCP & Connectors",
    digiCost: "100% Free (Included)",
    highlights: [
      "Official stdio JSON-RPC 2.0 MCP server integration",
      "Hardware-backed local key vault for secure credentials",
      "Webhooks, payment processor sync, and database connectors",
    ],
  },
  {
    id: "desktop-voice-ai",
    category: "Code & Intelligence",
    saasTool: "Proprietary AI Hardware & Voice Assistants",
    saasVendor: "Various SaaS / Hardware",
    monthlyCost: 25,
    annualCost: 300,
    costLabel: "$25/mo ($300/yr)",
    digiFeature: "JARVIS Voice Assistant & Computer Control",
    digiModule: "JARVIS Core",
    digiCost: "100% Free (Included)",
    highlights: [
      "Voice-first desktop controller for Windows 10 and 11",
      "Real-time screen awareness and application automation",
      "Hands-free keyboard, mouse, and terminal execution",
    ],
  },
  {
    id: "telemetry-apm",
    category: "Workflows & Automation",
    saasTool: "Datadog APM & Cloud Telemetry Logs",
    saasVendor: "Datadog / New Relic",
    monthlyCost: 60,
    annualCost: 720,
    costLabel: "$60/mo ($720/yr)",
    digiFeature: "Operations Center: 30-Event Real-Time Audit Stream",
    digiModule: "Operations Center",
    digiCost: "100% Free (Included)",
    highlights: [
      "Granular real-time telemetry across 30 distinct event types",
      "Interactive modal inspector with input/output payload traces",
      "Instant kill-switch stop controls and searchable local logs",
    ],
  },
];

export const TOTAL_ANNUAL_SAAS_COST = SAAS_COMPARISONS.reduce(
  (acc, item) => acc + item.annualCost,
  0
);

export const TOTAL_MONTHLY_SAAS_COST = SAAS_COMPARISONS.reduce(
  (acc, item) => acc + item.monthlyCost,
  0
);
