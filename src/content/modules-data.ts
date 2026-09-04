export interface ModuleFeature {
  title: string;
  description: string;
}

export interface ModuleWorkflow {
  step: string;
  title: string;
  description: string;
}

export interface ModuleData {
  slug: string;
  name: string;
  eyebrow: string;
  h1: string;
  h1Gradient: string;
  metaTitle: string;
  metaDescription: string;
  accentColor: string;
  directAnswer: string;
  problemSolved: string[];
  targetAudience: string[];
  coreCapabilities: ModuleFeature[];
  workflows: ModuleWorkflow[];
  faq: { q: string; a: string }[];
  relatedModules: { name: string; slug: string; description: string }[];
  openSourceSynergy: string;
}

export const MODULES_LIST: ModuleData[] = [
  {
    slug: "crm",
    name: "Digi CRM & Business Command",
    eyebrow: "Enterprise Operations & Revenue Engine",
    h1: "Digi CRM — Autonomous Business Operations,",
    h1Gradient: "Knowledge Base & Revenue Management",
    metaTitle: "Digi CRM — Offline Business Operating System & CRM | DIGI BIZ OS",
    metaDescription:
      "Enterprise offline CRM for Windows: single Knowledge Base setup, 1-second live dashboard, 1-click trigger buttons, multi-currency ledger, and zero monthly fees.",
    accentColor: "#34D399",
    directAnswer:
      "Digi CRM is a native, local-first enterprise customer relationship management and business operating suite built into DIGI BIZ OS. It centralizes your business profile, customer databases, deal pipelines, 1-click order fulfillment, multi-currency accounting, and e-commerce intelligence entirely on your Windows PC with zero monthly per-seat SaaS subscriptions.",
    problemSolved: [
      "Eliminates expensive monthly per-seat SaaS subscription fees (e.g. Salesforce, HubSpot, or Zoho).",
      "Stops repetitive data entry via a centralized Business Knowledge Base that auto-configures every template, invoice, auto-reply, and agent action.",
      "Protects sensitive client data and financial transaction records by storing everything strictly on your local PC in high-performance encrypted SQLite databases.",
      "Prevents deal leakage and fulfillment delays with 1-click trigger buttons that advance statuses, generate invoices, and send customer updates instantly.",
    ],
    targetAudience: [
      "Small and Medium Business Owners wanting complete operational sovereignty and zero monthly software overhead.",
      "E-Commerce Brands & Multi-Channel Sellers managing orders, inventory, customer inquiries, and supplier research in one view.",
      "Agencies, Consultancies & Service Providers needing unified quotation, contract tracking, invoicing, and client communication.",
    ],
    coreCapabilities: [
      {
        title: "Single Knowledge Base Configuration",
        description:
          "Provide your business profile once (company details, contact info, brand tone, services, and FAQs). The entire CRM, invoice templates, and AI agents instantly personalize to your brand with zero manual setup.",
      },
      {
        title: "1-Second Live Executive Dashboard",
        description:
          "Real-time command center refreshed every second. Displays today and month revenue, new orders, open tickets, tasks due, pipeline value, net profit, and instant 1-click Daily Briefing reports.",
      },
      {
        title: "1-Click Trigger Action Buttons",
        description:
          "Fulfill orders and manage clients with zero typing. Click Order Received, Complete, Send Invoice, Payment Reminder, or Overdue Notice to instantly generate tokenized communications and update statuses.",
      },
      {
        title: "Accounts & Multi-Currency Ledger",
        description:
          "Full financial command with live P&L, 6-month income vs. expense analytics, tax collected, receivables tracking, and 1-click downloadable All-in-One business audit reports (Word, PDF, Excel).",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Onboarding & Knowledge Base Setup",
        description: "Upload your business profile or enter your company details once to automatically establish your master operational context.",
      },
      {
        step: "02",
        title: "Pipeline & Order Management",
        description: "Capture leads from WhatsApp, email, or web forms, score their buying intent, and progress deals through visual Kanban stages.",
      },
      {
        step: "03",
        title: "Automated Fulfillment & Ledger Logging",
        description: "Execute 1-click trigger actions to deliver invoices, update order statuses, and automatically log revenues into your local ledger.",
      },
    ],
    faq: [
      {
        q: "Does Digi CRM require recurring monthly subscription fees?",
        a: "No. Digi CRM is included in your one-time DIGI BIZ OS lifetime licence with lifetime updates and zero per-seat fees.",
      },
      {
        q: "How does the Business Setup / Knowledge Base work?",
        a: "You enter your company name, contact information, services, brand color, and tone once. That information automatically populates all outgoing emails, WhatsApp replies, invoice headers, and AI agent responses.",
      },
      {
        q: "Can I export financial reports to Excel, Word, or PDF?",
        a: "Yes. The All-in-One Report generator creates complete financial reports covering sales, categorized expenses, profit margins, and receivables in Word, PDF, or Excel format in one click.",
      },
    ],
    relatedModules: [
      { name: "Digi Studio", slug: "studio", description: "Create professional video ads, audiobooks, and product photography." },
      { name: "Digi WhatsApp Agent", slug: "whatsapp", description: "Pair WhatsApp via QR for 24/7 autonomous customer support and order taking." },
      { name: "Digi Flow Workflows", slug: "workflows", description: "Schedule always-on business automations and recurring task pipelines." },
    ],
    openSourceSynergy:
      "Seamlessly links with local SQLite database engines for maximum data throughput and Jan AI or local LLMs for private local intelligence.",
  },
  {
    slug: "studio",
    name: "Digi Studio & Creative Media Suite",
    eyebrow: "Offline Creative Intelligence",
    h1: "Digi Studio — Offline Video Editor, Talking Avatars,",
    h1Gradient: "Multilingual Voice TTS & Photo Studio",
    metaTitle: "Digi Studio — Offline Video Editor, Avatar AI & Multilingual Voice TTS | DIGI BIZ OS",
    metaDescription:
      "Complete offline media studio on Windows: local FFmpeg video editor (CapCut alternative), talking avatar AI, studio-grade multilingual voice TTS, and photo factory.",
    accentColor: "#F472B6",
    directAnswer:
      "Digi Studio is a comprehensive offline creative and media production suite built into DIGI BIZ OS. Powered by high-performance local media engines, it provides a full video editor (CapCut alternative for vertical Reels/Shorts), photo-to-talking-avatar video synthesis, studio-grade multilingual text-to-speech with audiobook generation, an AI photo factory with background removal and upscaling, and Whisper audio transcription—all 100% offline with zero cloud rendering fees.",
    problemSolved: [
      "Eliminates expensive monthly subscriptions for online video editors, voiceover tools, and AI avatar platforms (e.g. CapCut Pro, ElevenLabs, HeyGen).",
      "Protects proprietary media, unreleased product footage, and confidential voiceovers by processing all video and audio locally on your PC.",
      "Solves vertical video production bottlenecks with 1-click 9:16 aspect ratio framing, speed ramping, subtitles, and background audio mixing.",
      "Turns long business manuals, textbooks, and PDF documents into studio-quality audiobooks automatically.",
    ],
    targetAudience: [
      "Content Creators, YouTubers, and Social Media Marketers scaling daily Reels, Shorts, and TikTok video content.",
      "E-Commerce Sellers needing clean white-background product photos, batch background removal, and video demonstrations.",
      "Educators, Coaches, and Course Creators generating audiobooks, video presentations, and study transcripts.",
    ],
    coreCapabilities: [
      {
        title: "Offline Video Editor (CapCut Alternative)",
        description:
          "Full timeline video editor powered by local FFmpeg. Trim, crop, resize for vertical 9:16 formats, adjust speed, add text overlays, mix background music, and convert video formats with zero cloud rendering lag.",
      },
      {
        title: "Avatar Intelligence (Photo to Talking Presenter)",
        description:
          "Transform still face portraits and voice recordings into natural talking AI presenter videos with accurate facial motion and lip-syncing, processed entirely on your Windows desktop.",
      },
      {
        title: "Multilingual Voice Intelligence & Audiobooks",
        description:
          "Generate human-quality voiceovers in English, Urdu, Hindi, Arabic, Persian, French, and 40+ languages. Convert entire PDF documents and long articles into multi-chapter audiobooks with one click.",
      },
      {
        title: "Image Studio & Photo Factory",
        description:
          "Automated batch image enhancement: instant AI background removal, white-background product prep, edge sharpening, denoising, and 2x/4x AI upscaling for e-commerce listings.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Media Ingestion & Creation",
        description: "Upload your raw footage, paste text for voiceover narration, or drop product photos into the offline studio canvas.",
      },
      {
        step: "02",
        title: "Editing & Enhancement",
        description: "Apply aspect ratio formatting for vertical social reels, add background audio tracks, or run batch AI background removal.",
      },
      {
        step: "03",
        title: "Instant Local Export",
        description: "Render high-definition MP4 videos, MP3 audiobooks, or lossless PNG product assets directly to your local drive in seconds.",
      },
    ],
    faq: [
      {
        q: "Does Digi Studio require internet access or cloud rendering credits?",
        a: "No. Digi Studio utilizes local system processing engines (including FFmpeg and local neural models), meaning video rendering and audio synthesis run 100% offline on your PC with zero per-minute rendering fees.",
      },
      {
        q: "Can I generate full audiobooks from PDF documents?",
        a: "Yes. Simply load any PDF, DOCX, or text file into Voice Intelligence, select your preferred multilingual speaker, and Digi Studio converts the content into structured audio chapters.",
      },
      {
        q: "What video formats and aspect ratios are supported in the Video Editor?",
        a: "It supports MP4, MKV, MOV, WEBM, and AVI formats, with instant presets for vertical 9:16 (Shorts/Reels/TikTok), widescreen 16:9 (YouTube), and square 1:1 formats.",
      },
    ],
    relatedModules: [
      { name: "Digi Marketing", slug: "marketing", description: "Distribute created videos, flyers, and ad creatives across 8 social platforms." },
      { name: "Digi AI", slug: "ai", description: "Generate ad scripts, video outlines, and photorealistic concept art." },
      { name: "Digi CRM", slug: "crm", description: "Attach product media and promotional videos directly to sales proposals." },
    ],
    openSourceSynergy:
      "Synergizes natively with FFmpeg, Whisper.cpp, and SoX for studio-grade offline audio and video manipulation.",
  },
  {
    slug: "ai",
    name: "Digi AI Studio & Dual-Mode Reasoning",
    eyebrow: "Private Desktop Intelligence",
    h1: "Digi AI — Multi-Model Conversational Chat &",
    h1Gradient: "Photorealistic Image Generation Studio",
    metaTitle: "Digi AI — Private Chat & Photorealistic Image Studio | DIGI BIZ OS",
    metaDescription:
      "Enterprise AI on Windows: chat with file attachments, photorealistic image studio, prompt controls, persistent local history, and 100% data privacy.",
    accentColor: "#2FE0C8",
    directAnswer:
      "Digi AI is the central conversational reasoning and visual synthesis workspace of DIGI BIZ OS. Designed with a clean Google AI Studio layout, it provides advanced multi-model chat with in-chat file attachments, markdown-clean formatting, persistent offline conversation history, and a dedicated photorealistic Image Generation Studio with aspect ratio controls and negative prompt tuning.",
    problemSolved: [
      "Eliminates monthly subscriptions for cloud chat tools (e.g. ChatGPT Plus) by routing through built-in free tiers and private models.",
      "Guarantees corporate privacy by ensuring conversation histories and attached confidential files remain strictly on your local PC.",
      "Stops messy AI markdown outputs by delivering clean, readable prose and perfectly formatted code blocks.",
      "Generates marketing visuals and product graphics directly inside your operating system without switching between multiple web tools.",
    ],
    targetAudience: [
      "Business Executives and Entrepreneurs drafting strategic proposals, analyzing reports, and making decisions.",
      "Marketers and Designers generating high-converting advertising creatives, social graphics, and product concepts.",
      "Knowledge Workers requiring an always-on private AI companion that understands complex local files.",
    ],
    coreCapabilities: [
      {
        title: "Dual Core Operating Modes",
        description:
          "Seamlessly toggle between conversational Chat Mode for strategic reasoning, copywriting, and file analysis, and Image Studio Mode for high-definition visual synthesis.",
      },
      {
        title: "In-Chat File Attachments",
        description:
          "Attach spreadsheets, documents, images, and text files directly into the conversation thread for instant synthesis, data extraction, and executive summaries.",
      },
      {
        title: "Studio-Grade Image Controls",
        description:
          "Fine-tune visual generation with custom aspect ratios (16:9, 9:16, 1:1), artistic style presets, negative prompt parameters, seed controls, and an offline local gallery.",
      },
      {
        title: "Persistent Offline Memory",
        description:
          "Conversations are saved locally on your Windows storage with search, instant renaming, and zero cloud telemetry.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Prompt Instruction & File Attachment",
        description: "Type your query, select an example prompt, or attach a reference document to provide immediate context.",
      },
      {
        step: "02",
        title: "Autonomous Intelligence Processing",
        description: "The engine reasons across the prompt and attached data, delivering clean, structured recommendations or code.",
      },
      {
        step: "03",
        title: "Export & Downstream Action",
        description: "Copy clean outputs in one click or send generated visuals directly to Digi Marketing or Digi Studio.",
      },
    ],
    faq: [
      {
        q: "Are my chat conversations or uploaded files sent to public training databases?",
        a: "Never. All conversation sessions, file attachments, and image galleries are stored locally on your hard drive. Your data is never used to train public models.",
      },
      {
        q: "Do I need to pay for an API key to use Digi AI?",
        a: "No. Digi AI is integrated with a built-in free model fallback stack that handles daily conversational tasks and image generation without requiring paid API keys.",
      },
      {
        q: "Can I use external premium models if I already have my own API key?",
        a: "Yes. You can optionally connect your own API keys in Digi Models to route queries to Claude 3.5 Sonnet, GPT-4o, or Google Gemini whenever you desire.",
      },
    ],
    relatedModules: [
      { name: "Digi Studio", slug: "studio", description: "Enhance generated images with AI upscaling and background removal." },
      { name: "Digi Marketing", slug: "marketing", description: "Deploy generated ad copy directly into scheduled social campaigns." },
      { name: "Digi Code", slug: "code", description: "Turn conversational software specifications into active codebases." },
    ],
    openSourceSynergy:
      "Pairs with local open-source LLM runners like Jan AI and AnythingLLM for fully air-gapped offline conversational computing.",
  },
  {
    slug: "whatsapp",
    name: "Digi WhatsApp Autonomous Sales Agent",
    eyebrow: "Conversational Commerce Engine",
    h1: "Digi WhatsApp — 24/7 AI Customer Support &",
    h1Gradient: "Autonomous Sales Assistant",
    metaTitle: "Digi WhatsApp AI Sales Agent — 24/7 Support & Order Taking | DIGI BIZ OS",
    metaDescription:
      "Turn WhatsApp into an autonomous sales machine: 24/7 QR pairing, voice note transcription, product catalog sharing, order taking, and automatic CRM sync.",
    accentColor: "#25D366",
    directAnswer:
      "Digi WhatsApp is an autonomous sales and customer service agent running directly on your Windows PC. Featuring instant mobile QR code pairing with standard or business phone numbers, it answers customer inquiries 24/7, transcribes incoming voice notes with Whisper, shares product catalogs, captures customer details, and creates orders directly inside Digi CRM with zero per-message cloud markup.",
    problemSolved: [
      "Stops missed sales opportunities during off-hours, weekends, and holidays by replying in seconds 24/7.",
      "Eliminates expensive monthly third-party WhatsApp automation platforms (e.g. Wati or ManyChat) and per-conversation charges.",
      "Understands incoming customer voice audio notes automatically via integrated offline Whisper speech recognition.",
      "Syncs customer conversation transcripts and contact details directly with your local Digi CRM database.",
    ],
    targetAudience: [
      "E-Commerce Stores and Retailers receiving high volumes of WhatsApp orders and product inquiries.",
      "Agencies, Real Estate Brokers, and Clinics scheduling appointments and answering repetitive customer questions.",
      "International Businesses requiring instantaneous, native multilingual replies in English, Urdu, Arabic, Spanish, and 40+ languages.",
    ],
    coreCapabilities: [
      {
        title: "Instant QR Pairing (Standard & Business)",
        description:
          "Scan the QR code directly from your mobile phone. Works with standard WhatsApp numbers or WhatsApp Business with zero Meta developer approval required.",
      },
      {
        title: "Voice Note Speech Recognition",
        description:
          "When customers send audio voice messages, the agent transcribes them locally via Whisper and contextually formulates an accurate answer.",
      },
      {
        title: "Autonomous Catalog & Order Intake",
        description:
          "Shares product variations, answers pricing questions, captures customer shipping addresses, and logs confirmed orders into Digi CRM.",
      },
      {
        title: "Human Takeover & Sound Alerts",
        description:
          "Allows human operators to jump in at any time from the unified CRM Inbox with real-time sound cues for priority VIP inquiries.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "QR Code Scan",
        description: "Open the module, scan the QR code with your smartphone, and activate the autonomous listener.",
      },
      {
        step: "02",
        title: "Conversational Consultation",
        description: "The AI agent consults your Business Knowledge Base to answer inquiries, quote prices, and share product details.",
      },
      {
        step: "03",
        title: "Order Generation & CRM Sync",
        description: "The agent captures customer contact details, registers the order in Digi CRM, and triggers fulfillment notifications.",
      },
    ],
    faq: [
      {
        q: "Do I need a verified Meta Business API account or pay per message?",
        a: "No. The built-in QR pairing adapter connects directly to your normal or business phone with zero per-message charges. An optional Cloud API adapter is also available if you already have one.",
      },
      {
        q: "Can the AI agent understand voice notes sent by customers?",
        a: "Yes. Digi WhatsApp uses local speech recognition to transcribe customer voice audio in real time and craft contextually appropriate text replies.",
      },
      {
        q: "Can I prevent the bot from messaging personal friends or family?",
        a: "Yes. Digi WhatsApp includes a customizable do-not-reply blocklist so designated numbers never receive automated bot responses.",
      },
    ],
    relatedModules: [
      { name: "Digi CRM", slug: "crm", description: "Track captured leads, orders, and customer conversation histories." },
      { name: "Digi Marketing", slug: "marketing", description: "Craft automated broadcast messages and promotional scripts." },
      { name: "Digi Flow Workflows", slug: "workflows", description: "Trigger automated follow-up sequences based on customer response stages." },
    ],
    openSourceSynergy:
      "Combines with Whisper.cpp for offline audio transcription and SQLite for zero-latency local conversation archiving.",
  },
  {
    slug: "marketing",
    name: "Digi Marketing & Campaign Suite",
    eyebrow: "Multi-Platform Publishing Engine",
    h1: "Digi Marketing — Multi-Channel Social Publishing,",
    h1Gradient: "AI Copywriting & Campaign Automation",
    metaTitle: "Digi Marketing — AI Copywriting & Multi-Platform Social Suite | DIGI BIZ OS",
    metaDescription:
      "Automate social media marketing on Windows: multi-channel composer (Facebook, LinkedIn, X, Telegram, Instagram, YouTube), AI ad copywriter, and visual flyer studio.",
    accentColor: "#F59E0B",
    directAnswer:
      "Digi Marketing is a multi-channel social media publishing and campaign automation suite inside DIGI BIZ OS. It allows you to compose once and publish or schedule across 8 platforms (Facebook Pages, LinkedIn, X/Twitter, Telegram, Instagram, YouTube, Bluesky, and Mastodon), generate high-converting ad copy with proven copywriting frameworks, attach promotional flyers, and manage scheduled queues from one dashboard.",
    problemSolved: [
      "Replaces recurring monthly subscriptions for social scheduling tools (e.g. Buffer, Hootsuite, or Later).",
      "Stops creative burnout by generating dozens of high-performing ad hooks, viral headlines, and promotional scripts in seconds.",
      "Eliminates manual copy-pasting across separate social platform tabs with unified single-click multi-channel publishing.",
      "Applies attention-grabbing typography styling (such as mathematical bold/italic headers) that renders cleanly on all mobile feeds.",
    ],
    targetAudience: [
      "Digital Marketing Agencies managing social accounts and advertising campaigns for multiple corporate clients.",
      "E-Commerce Brands launching new products, discount promotions, and seasonal marketing pushes.",
      "Solo Entrepreneurs and Creators scaling an organic social media presence across multiple platforms simultaneously.",
    ],
    coreCapabilities: [
      {
        title: "8-Platform Social Switchboard",
        description:
          "Connect Facebook Pages, LinkedIn profiles/pages, X (Twitter), Telegram channels, Instagram Business, YouTube, Bluesky, and Mastodon with secure local credential storage.",
      },
      {
        title: "Direct-Response AI Copy Engine",
        description:
          "Generate compelling promotional copy structured on proven advertising frameworks (AIDA, PAS, BAB, StoryBrand) calibrated to your business profile.",
      },
      {
        title: "Visual Flyer & Media Attachments",
        description:
          "Attach promotional banners, product images from Digi Studio, or video files with automatic media validation for each destination channel.",
      },
      {
        title: "Automated Calendar & Queue",
        description:
          "Schedule posts days or weeks in advance with an interactive publishing timeline and automatic retry handling for network dropouts.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Campaign Drafting & AI Hook Generation",
        description: "Select your target topic, generate high-converting ad copy angles with the AI engine, and attach your visual flyer.",
      },
      {
        step: "02",
        title: "Channel Selection",
        description: "Select which connected social platforms to target (e.g. Facebook, LinkedIn, X, and Telegram) with a single click.",
      },
      {
        step: "03",
        title: "Instant Send or Scheduled Queue",
        description: "Publish immediately to all selected networks or assign a future date and time in the automated scheduling queue.",
      },
    ],
    faq: [
      {
        q: "Do I need monthly third-party scheduling service subscriptions?",
        a: "No. Digi Marketing connects directly to official platform APIs or bot protocols from your PC with zero intermediary SaaS fees.",
      },
      {
        q: "Can I attach images and videos to scheduled posts?",
        a: "Yes. You can attach images created in Image Studio or videos edited in Digi Studio, and the publisher distributes them according to platform requirements.",
      },
      {
        q: "Are free social channels supported?",
        a: "Yes. Channels like Telegram, Bluesky, and Mastodon can be configured completely free in seconds with bot tokens or app passwords.",
      },
    ],
    relatedModules: [
      { name: "Digi Studio", slug: "studio", description: "Create vertical reels and edited product videos to attach to your social campaigns." },
      { name: "Digi CRM", slug: "crm", description: "Track customer leads originating from your social marketing funnels." },
      { name: "Digi Flow Workflows", slug: "workflows", description: "Automate recurring marketing audits and publishing routines on cron schedules." },
    ],
    openSourceSynergy:
      "Integrates with ImageMagick and pngquant for automated image compression and formatting before multi-platform dispatch.",
  },
  {
    slug: "workflows",
    name: "Digi Flow & Always-On Automations",
    eyebrow: "Autonomous Business Execution",
    h1: "Digi Flow — Always-On Business Automations &",
    h1Gradient: "Visual Multi-Step Task Pipelines",
    metaTitle: "Digi Flow — Business Automation & Always-On Workflows | DIGI BIZ OS",
    metaDescription:
      "Autonomous workflow automation on Windows: always-on business rules (overdue invoice chasers, low-stock alerts), visual flow builder, and scheduled cron jobs.",
    accentColor: "#22D3EE",
    directAnswer:
      "Digi Flow is the central workflow automation and background task execution engine of DIGI BIZ OS. It features always-on business rules that automatically monitor operations—such as chasing overdue invoices, triggering low-stock reorders, sending stalled deal reminders, and escalating customer tickets—alongside a visual multi-step flow runner for custom business routines with zero monthly Zapier or Make subscription fees.",
    problemSolved: [
      "Replaces recurring monthly Zapier or Make costs with 100% free, unlimited local workflow execution.",
      "Eliminates operational forgetfulness by automatically checking for overdue invoices, stalled deals, and low inventory 24/7.",
      "Ensures business reliability: if any step in a multi-stage flow encounters an error, execution stops safely and alerts you immediately.",
      "Executes scheduled tasks reliably on your Windows machine without requiring browser windows to stay open.",
    ],
    targetAudience: [
      "Operations Managers automating daily operational monitoring, data consolidation, and follow-ups.",
      "Business Owners wanting automated overnight revenue reports, inventory safety checks, and customer alerts.",
      "Developers needing an offline visual task orchestrator for local scripts, APIs, and background processes.",
    ],
    coreCapabilities: [
      {
        title: "Always-On Business Automations",
        description:
          "Pre-configured background monitors: Overdue Invoice Chaser, Low-Stock Reorder Alert, Stalled Deal Follow-Up, New Lead Welcomer, and Support Ticket Escalation that automatically raise actionable CRM tasks.",
      },
      {
        title: "Step-by-Step Flow Builder",
        description:
          "Construct multi-stage operational flows with clear task instructions. Each step runs sequentially with full transparent output logging.",
      },
      {
        title: "Fail-Safe Execution Guarantee",
        description:
          "Unlike brittle web automation tools that continue running on bad data, Digi Flow stops immediately upon a step failure and details exactly what occurred.",
      },
      {
        title: "Ready-Made Workflow Templates",
        description:
          "Import and run pre-built templates for e-commerce stock audits, customer retention check-ins, and daily executive briefing compilation.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Select Automation Rules",
        description: "Toggle the always-on business monitors you want active (e.g. Overdue Invoices and Low Stock Alerts).",
      },
      {
        step: "02",
        title: "Define Custom Flows",
        description: "Chain multi-step business actions (e.g. scan marketplace -> format data -> update CRM pipeline -> draft summary report).",
      },
      {
        step: "03",
        title: "Autonomous Background Execution",
        description: "Digi Flow runs silently on your machine, logging all execution results and alerting you only when action is required.",
      },
    ],
    faq: [
      {
        q: "Do always-on automations message customers without my knowledge?",
        a: "No. By default, always-on automations raise high-priority tasks and alerts inside your Digi CRM dashboard so you maintain ultimate human oversight.",
      },
      {
        q: "Can I run automations manually on demand?",
        a: "Yes. Every always-on rule and custom flow includes a 'Run Now' button allowing you to perform an instant operational sweep at any moment.",
      },
      {
        q: "What happens if a workflow step encounters an error?",
        a: "Digi Flow immediately pauses the workflow, highlights the exact failed step, and preserves the error transcript so no corrupted actions occur downstream.",
      },
    ],
    relatedModules: [
      { name: "Digi CRM", slug: "crm", description: "Receive automated tasks, invoice alerts, and pipeline updates generated by Digi Flow." },
      { name: "Digi Intelligence", slug: "intelligence", description: "Trigger automated market scans and supplier price checks on schedules." },
      { name: "Digi Marketing", slug: "marketing", description: "Schedule social media publishing workflows across multi-channel queues." },
    ],
    openSourceSynergy:
      "Integrates with Graphviz for workflow topology visualization and SQLite for permanent execution transcript auditing.",
  },
  {
    slug: "code",
    name: "Digi Code Autonomous Software Engineering",
    eyebrow: "Embedded Developer Workspace",
    h1: "Digi Code — Autonomous Coding Agent &",
    h1Gradient: "Full-Screen Repository Workspace",
    metaTitle: "Digi Code — AI Coding Agent & Repository Workspace | DIGI BIZ OS",
    metaDescription:
      "Full-screen AI software engineer on Windows: AST codebase reasoning, multi-file refactoring, terminal execution, self-correcting bug fixes, and Git automation.",
    accentColor: "#7DD3FC",
    directAnswer:
      "Digi Code is an autonomous software engineering environment rendered full-screen inside DIGI BIZ OS. It eliminates the friction of narrow side panels and external windows by deeply indexing your local project directories, reasoning across multi-file codebases, executing terminal build commands, self-correcting errors, and automating Git commits and pull requests from one unified desktop view.",
    problemSolved: [
      "Eliminates clumsy context-switching between chat windows and separate IDEs by living directly inside your project directories.",
      "Stops narrow side-panel frustration by rendering a full-screen, focused engineering workspace tailored to large projects.",
      "Self-corrects compiler and test errors by running build commands in the background and reading terminal outputs directly.",
      "Automates tedious boilerplate writing, documentation updates, and Git version control tasks with clean semantic diffs.",
    ],
    targetAudience: [
      "Software Engineers, Web Developers, and Full-Stack Builders shipping modern desktop, mobile, and web applications.",
      "Solo Founders and Tech Leads shipping complete applications without requiring large engineering departments.",
      "DevOps Engineers and Script Writers automating local system utilities, Docker configurations, and API bridges.",
    ],
    coreCapabilities: [
      {
        title: "Full-Screen Native Integration",
        description:
          "Fills your workspace with dedicated styling that matches DIGI BIZ OS, avoiding external taskbar clutter while giving your code full breathing room.",
      },
      {
        title: "Full Repository AST Reasoning",
        description:
          "Scans project trees, package dependencies, route structures, and file imports across TypeScript, Python, Rust, Go, C#, and PHP.",
      },
      {
        title: "Terminal Execution & Auto-Repair",
        description:
          "Executes test and build commands, analyzes compiler failures, and iteratively edits source code until tests pass cleanly.",
      },
      {
        title: "Automated Git & Version Control",
        description:
          "Stages changes, drafts descriptive semantic commit messages, creates branches, and pushes verified pull requests automatically.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Select Local Project",
        description: "Point Digi Code at any local folder or Git repository to automatically map dependencies and file architecture.",
      },
      {
        step: "02",
        title: "Prompt Feature or Bug Fix",
        description: "Describe the desired capability, bug fix, or refactor using natural language or voice commands.",
      },
      {
        step: "03",
        title: "Autonomous Refactor & Verification",
        description: "The agent writes code, runs terminal checks, verifies the build, and presents a complete diff walkthrough.",
      },
    ],
    faq: [
      {
        q: "Does Digi Code upload my proprietary source code to third-party databases?",
        a: "No. Your source code resides on your local machine and is sent only to the specific AI endpoint you configure with zero external telemetry.",
      },
      {
        q: "Which programming languages and frameworks are supported?",
        a: "It supports all major languages including TypeScript, JavaScript, Python, Go, Rust, C#, PHP, HTML/CSS, React, Vue, Svelte, and Node.js.",
      },
      {
        q: "Can Digi Code run terminal commands safely?",
        a: "Yes. Commands are executed inside your local project environment with visible terminal outputs and immediate cancellation controls.",
      },
    ],
    relatedModules: [
      { name: "Digi CLI", slug: "cli", description: "Execute custom shell commands and access built-in utility engines." },
      { name: "Digi MCP", slug: "mcp", description: "Extend developer capabilities with external Model Context Protocol tool servers." },
      { name: "Digi Flow Workflows", slug: "workflows", description: "Trigger automated test suites and repository backups on cron schedules." },
    ],
    openSourceSynergy:
      "Native synergy with Git, OpenHands, and terminal compilers for high-performance offline software engineering.",
  },
  {
    slug: "mcp",
    name: "Digi MCP Universal Protocol Switchboard",
    eyebrow: "Extensible Tool Connectivity",
    h1: "Digi MCP — Universal Model Context Protocol",
    h1Gradient: "Stdio Client & Live Tool Switchboard",
    metaTitle: "Digi MCP — Universal Model Context Protocol (MCP) Client | DIGI BIZ OS",
    metaDescription:
      "Universal Model Context Protocol (MCP) client on Windows: stdio JSON-RPC 2.0 runner, automatic tool discovery, zero-config server management, and instant agent powers.",
    accentColor: "#E879F9",
    directAnswer:
      "Digi MCP is an authentic Model Context Protocol (MCP) client built into DIGI BIZ OS. Operating over standard stdio using JSON-RPC 2.0, it allows you to connect any local executable or npm/npx MCP server (e.g. filesystem, database, web search, browser automation), automatically discover all available tools, and execute them safely from the UI and voice assistant with zero manual config file editing.",
    problemSolved: [
      "Eliminates the complexity of hand-editing fragile JSON configuration files in hidden application directories.",
      "Provides universal compatibility with the entire open-source Model Context Protocol ecosystem.",
      "Discovers server capabilities dynamically via official JSON-RPC 2.0 handshakes rather than relying on hardcoded static tool lists.",
      "Persists connected servers across reboots with 1-click toggling and immediate connection testing.",
    ],
    targetAudience: [
      "Developers and AI Practitioners integrating specialized local databases, APIs, and microservices into their AI agents.",
      "Enterprises wanting custom internal tools connected to their AI assistant with clear trust boundaries.",
      "Power Users expanding their desktop automation capabilities with community-built MCP servers.",
    ],
    coreCapabilities: [
      {
        title: "Standard Stdio JSON-RPC 2.0 Transport",
        description:
          "Communicates over standard input/output using the official Model Context Protocol specifications with complete platform compatibility.",
      },
      {
        title: "Live Automatic Tool Discovery",
        description:
          "Connects to any server, performs the initialize handshake, lists all exposed tools dynamically, and maps argument schemas automatically.",
      },
      {
        title: "1-Click UI Server Management",
        description:
          "Add new servers by typing their command (e.g. npx -y @modelcontextprotocol/server-filesystem), test connectivity in real time, and toggle servers on or off instantly.",
      },
      {
        title: "Persistent Server Registry",
        description:
          "Server definitions, environment variables, and enabled states are stored safely in local configuration storage surviving all OS restarts.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Add Server Command",
        description: "Enter your server name, command (e.g. npx or local binary), and optional arguments or environment variables in the UI.",
      },
      {
        step: "02",
        title: "Test Connection & Discover Tools",
        description: "Click Test to initiate the stdio handshake. The system displays server info and lists every discovered tool with its parameters.",
      },
      {
        step: "03",
        title: "Autonomous Agent Tool Invocation",
        description: "Your voice assistant and autonomous agents can now call these discovered tools during live business workflows.",
      },
    ],
    faq: [
      {
        q: "Does Digi MCP require manual editing of JSON configuration files?",
        a: "No. You can add, edit, test, and toggle MCP servers directly from the visual interface, with changes automatically saved to local storage.",
      },
      {
        q: "Can I connect custom in-house MCP servers written in Python or Node.js?",
        a: "Yes. Any executable that communicates over standard input/output (stdio) using JSON-RPC 2.0 can be connected instantly.",
      },
      {
        q: "How does Digi MCP handle Windows execution for npm/npx packages?",
        a: "It includes native Windows process wrapping so npx and .cmd launchers spawn reliably without shell injection vulnerabilities.",
      },
    ],
    relatedModules: [
      { name: "Digi CLI", slug: "cli", description: "Run custom CLI commands and access local engine binaries directly." },
      { name: "Digi Code", slug: "code", description: "Use MCP developer tools to inspect repositories and run compilers." },
      { name: "Digi Connectors", slug: "connectors", description: "Manage messaging and platform communication channels." },
    ],
    openSourceSynergy:
      "Fully compliant with the Anthropic Model Context Protocol standard, enabling seamless compatibility with all community MCP servers.",
  },
  {
    slug: "cli",
    name: "Digi CLI Custom Command & Engine Runner",
    eyebrow: "System Command Architecture",
    h1: "Digi CLI — Custom Command Execution &",
    h1Gradient: "Offline Shared Engine Layer",
    metaTitle: "Digi CLI — Custom Command Runner & Offline Engines | DIGI BIZ OS",
    metaDescription:
      "Custom CLI runner on Windows: add and run your own shell commands via UI, live streaming stdout/stderr, and pre-integrated engines (FFmpeg, Whisper, DuckDB, Typst).",
    accentColor: "#FBBF24",
    directAnswer:
      "Digi CLI is a custom command runner and shared engine management system in DIGI BIZ OS. It allows users to define custom commands in the UI, persist them, and execute them on demand with live streaming terminal outputs—completely without opening external command prompts. It connects natively with the app's managed engine bin containing essential open-source tools (FFmpeg, Whisper.cpp, yt-dlp, Typst, Pandoc, DuckDB, Tesseract OCR, and ImageMagick).",
    problemSolved: [
      "Eliminates command-line anxiety by providing a clean visual UI to run and monitor system commands.",
      "Prevents shell injection vulnerabilities by passing arguments as strict arrays rather than raw shell strings.",
      "Provides pre-configured access to powerful media, document, and data engines without manual PATH configuration.",
      "Retains command execution histories, exit codes, and timestamps so you know exactly when and how each script ran.",
    ],
    targetAudience: [
      "Power Users and System Administrators executing regular data transformation and file management routines.",
      "Content Creators running batch media conversions and video downloads via yt-dlp and FFmpeg.",
      "Data Analysts running high-speed local SQL analytics over CSV files via embedded DuckDB.",
    ],
    coreCapabilities: [
      {
        title: "Visual Command Definition",
        description:
          "Define custom commands with friendly names, program binaries, and default arguments in a clean visual form.",
      },
      {
        title: "Live Streaming Output Console",
        description:
          "Watch stdout and stderr stream in real time with exit code reporting, execution duration, and one-click copy.",
      },
      {
        title: "Managed Engine Layer",
        description:
          "Directly leverages pre-bundled and auto-installed engines: FFmpeg (video), Whisper.cpp (speech), yt-dlp (download), Typst (typesetting), DuckDB (SQL), and Tesseract (OCR).",
      },
      {
        title: "No-Shell Security Protocol",
        description:
          "Programs are executed with shell: false and strict argument arrays to ensure zero vulnerability to terminal injection exploits.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Define Custom Command",
        description: "Specify the program name and arguments (e.g. ffmpeg -i input.mp4 output.webm) and save it to your dashboard.",
      },
      {
        step: "02",
        title: "One-Click Execution",
        description: "Click Run to execute the command instantly, or pass dynamic runtime arguments as needed.",
      },
      {
        step: "03",
        title: "Monitor Real-Time Output",
        description: "Review streaming logs in the console, verify the exit code, and view generated output files on your disk.",
      },
    ],
    faq: [
      {
        q: "Do I need to know command line syntax to use Digi CLI?",
        a: "No. You can save your most common commands once, and run them with a single click whenever needed.",
      },
      {
        q: "Where are engine binaries stored?",
        a: "Digi Biz OS manages an internal engine bin directory inside your local data folder, ensuring engines run without modifying your Windows system PATH.",
      },
      {
        q: "Can I run Python scripts through Digi CLI?",
        a: "Yes. Digi CLI can invoke your local Python environment to run custom automation and data processing scripts.",
      },
    ],
    relatedModules: [
      { name: "Digi MCP", slug: "mcp", description: "Connect protocol-based tool servers for dynamic agent execution." },
      { name: "Digi Code", slug: "code", description: "Develop and test custom scripts before adding them to Digi CLI." },
      { name: "Digi Studio", slug: "studio", description: "Leverage media engines for advanced video, audio, and image manipulation." },
    ],
    openSourceSynergy:
      "Native runner for DuckDB, Typst, Pandoc, SoX, and ripgrep, providing high-speed offline desktop computing power.",
  },
  {
    slug: "models",
    name: "Digi Models & Dual-Tier AI Router",
    eyebrow: "Cost-Optimized Model Infrastructure",
    h1: "Digi Models — Dual-Tier Free Fallback Stack &",
    h1Gradient: "BYOK Multi-Provider AI Routing",
    metaTitle: "Digi Models — Free AI Fallback Stack & Model Router | DIGI BIZ OS",
    metaDescription:
      "Intelligent AI model routing on Windows: free built-in fallback stack for daily tasks, plus BYOK multi-key rotation for Gemini, OpenRouter, Groq, and Mistral.",
    accentColor: "#94A3B8",
    directAnswer:
      "Digi Models is the intelligent model routing and API key management layer of DIGI BIZ OS. It operates on a dual-tier architecture: Tier 1 provides a built-in free model fallback stack that handles daily conversational, copywriting, and research tasks at zero cost; Tier 2 allows you to connect your own API keys (BYOK) with multi-key rotation for Google Gemini, OpenRouter, Groq, Mistral, Together AI, SambaNova, Cloudflare Workers AI, and optional OpenAI or Claude models.",
    problemSolved: [
      "Drastically lowers monthly AI operating costs by utilizing robust free model fallbacks for routine business tasks.",
      "Eliminates quota exhaustion through multi-key rotation slots (e.g. rotating across multiple Google Gemini keys automatically).",
      "Protects privacy and control: you own your API keys, store them encrypted locally, and avoid middleman markups.",
      "Maintains continuous uptime: if one provider experiences an outage, the router fails over to the next healthy provider seamlessly.",
    ],
    targetAudience: [
      "Cost-Conscious Businesses wanting extensive AI assistance without ballooning monthly API subscription bills.",
      "Power Users and Developers running hundreds of daily automated research, copywriting, and coding tasks.",
      "Enterprises with strict security guidelines needing to bring their own corporate API keys directly to desktop software.",
    ],
    coreCapabilities: [
      {
        title: "Tier 1: Built-In Free Model Stack",
        description:
          "Zero-configuration free model routing for everyday chat, document summarization, and copywriting tasks without requiring credit cards or API keys.",
      },
      {
        title: "Tier 2: BYOK Multi-Key Rotation",
        description:
          "Add your own API keys for Google Gemini (5 rotation slots), OpenRouter, Groq, Mistral, Together AI, and Cloudflare Workers AI with automatic failover.",
      },
      {
        title: "Dedicated Per-Module Routing",
        description:
          "Assign specialized keys for E-Commerce Intelligence, Lead Intelligence, and WhatsApp Agents to isolate quotas and billing.",
      },
      {
        title: "Encrypted Local Key Storage",
        description:
          "API keys are stored exclusively in your local configuration storage, never logged, and never transmitted to third-party tracking servers.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Zero-Setup Free Operation",
        description: "Start using DIGI BIZ OS immediately on the built-in free model stack with zero initial setup.",
      },
      {
        step: "02",
        title: "Connect Optional API Keys",
        description: "Paste your preferred provider keys in Digi Models; click the direct official link to generate keys in seconds.",
      },
      {
        step: "03",
        title: "Autonomous Failover & Balancing",
        description: "The router intelligently dispatches tasks to the fastest, most cost-effective model, rotating keys when daily limits are reached.",
      },
    ],
    faq: [
      {
        q: "Do I have to pay for AI API keys to use the software?",
        a: "No. Many common business operations, chat interactions, and marketing drafts run on the built-in free tier. Connecting your own keys is entirely optional for heavy enterprise workloads.",
      },
      {
        q: "How does the multi-key rotation work for Google Gemini?",
        a: "You can enter a primary key plus up to four rotation keys. When the primary key reaches its free daily quota limit, the system automatically shifts requests to the next key.",
      },
      {
        q: "Are OpenAI and Claude (Anthropic) supported?",
        a: "Yes. You can optionally add OpenAI and Anthropic API keys for premium tasks whenever you require their specific capabilities.",
      },
    ],
    relatedModules: [
      { name: "Digi AI", slug: "ai", description: "Utilize routed models for private chat and visual generation." },
      { name: "Digi Code", slug: "code", description: "Route coding and repository refactoring tasks through high-capacity models." },
      { name: "Digi Marketing", slug: "marketing", description: "Power high-converting ad copy generation with fast inference providers." },
    ],
    openSourceSynergy:
      "Compatible with Groq, Cerebras, and SambaNova for ultra-low latency token generation, plus local Ollama endpoints.",
  },
  {
    slug: "connectors",
    name: "Digi Connectors Communication Switchboard",
    eyebrow: "Channel & Platform Integration",
    h1: "Digi Connectors — Multi-Channel Business Switchboard,",
    h1Gradient: "Messaging & Service Integrations",
    metaTitle: "Digi Connectors — Business Channels, Email & Messaging | DIGI BIZ OS",
    metaDescription:
      "Connect all business channels on Windows: incoming email (IMAP), outgoing email (SMTP), WhatsApp QR/Cloud, Telegram, Slack, Discord, GitHub, and E-commerce.",
    accentColor: "#2FE0C8",
    directAnswer:
      "Digi Connectors is the unified communications and channel integration hub of DIGI BIZ OS. It brings all your business channels together in one clear interface—allowing you to connect and test incoming email (IMAP), outgoing email (SMTP), WhatsApp (free QR agent or Cloud API), Telegram bots, Slack workspaces, Discord servers, GitHub repositories, and major e-commerce platforms without editing code or server files.",
    problemSolved: [
      "Stops scattered communication across dozens of browser tabs by unifying incoming and outgoing channels.",
      "Eliminates complex webhook configuration by providing visual testable credential fields for every supported platform.",
      "Enables the AI assistant to read incoming emails, classify leads, and dispatch notifications across your team's chat tools.",
      "Stores all channel credentials encrypted locally on your machine with zero third-party cloud routing.",
    ],
    targetAudience: [
      "Business Owners wanting their business communication unified and responsive 24/7.",
      "Customer Support Leads centralizing multi-channel customer inquiries from email, WhatsApp, and social bots.",
      "E-Commerce Managers monitoring store activity, order confirmations, and stock alerts across Slack and Telegram.",
    ],
    coreCapabilities: [
      {
        title: "Full Email Integration (IMAP & SMTP)",
        description:
          "Configure incoming IMAP email so your assistant reads, classifies, and surfaces leads, and outgoing SMTP for sending invoices and campaigns.",
      },
      {
        title: "Dual WhatsApp Adapters",
        description:
          "Connect via free mobile QR pairing for normal and business numbers, or link official Meta WhatsApp Cloud API credentials.",
      },
      {
        title: "Team & Community Messaging",
        description:
          "Link Telegram bots, Slack incoming webhooks, and Discord server bots to receive real-time operational notifications.",
      },
      {
        title: "Instant Connection Verification",
        description:
          "Test each connection with a single click to confirm credentials before deploying live automated business workflows.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Select Channel to Connect",
        description: "Choose from Email (IMAP/SMTP), WhatsApp, Telegram, Slack, Discord, or GitHub.",
      },
      {
        step: "02",
        title: "Enter Credentials & Test",
        description: "Input your host details, bot token, or app password and click 'Test Connection' to verify live connectivity.",
      },
      {
        step: "03",
        title: "Activate Autonomous Routing",
        description: "Your assistant and automated workflows now listen and dispatch across your connected channels automatically.",
      },
    ],
    faq: [
      {
        q: "Can I connect Gmail or Google Workspace accounts?",
        a: "Yes. Simply generate a standard Google App Password and enter your IMAP/SMTP credentials in Digi Connectors.",
      },
      {
        q: "Is Telegram bot connectivity free?",
        a: "Yes. Creating a Telegram bot via @BotFather is 100% free and connects in seconds by pasting your bot token.",
      },
      {
        q: "Are my passwords and API tokens safe?",
        a: "Yes. All credentials are stored locally in your encrypted configuration files and are never uploaded to any cloud database.",
      },
    ],
    relatedModules: [
      { name: "Digi CRM", slug: "crm", description: "Receive inbound customer messages and dispatch automated follow-ups." },
      { name: "Digi WhatsApp Agent", slug: "whatsapp", description: "Deploy 24/7 autonomous sales agents across connected WhatsApp numbers." },
      { name: "Digi Marketing", slug: "marketing", description: "Publish campaigns across connected social and messaging networks." },
    ],
    openSourceSynergy:
      "Integrates with standard IMAP/SMTP protocols and cURL for reliable, open-standard business communication.",
  },
  {
    slug: "intelligence",
    name: "Digi Intelligence & Market Surveillance",
    eyebrow: "Market Surveillance & Registry Intelligence",
    h1: "Digi Intelligence — E-Commerce Product Hunting &",
    h1Gradient: "Corporate Registry Surveillance Suite",
    metaTitle: "Digi Intelligence — E-Commerce Hunting & B2B Surveillance | DIGI BIZ OS",
    metaDescription:
      "E-commerce & corporate intelligence on Windows: 20-stage product hunting across Amazon, eBay, Etsy, Walmart, TikTok, Shopify, plus UK Companies House director audits.",
    accentColor: "#3B82F6",
    directAnswer:
      "Digi Intelligence is an advanced market research, e-commerce product hunting, and corporate registry surveillance suite inside DIGI BIZ OS. It conducts automated 20-stage deep market analysis across major marketplaces (Amazon, eBay, Etsy, Walmart, TikTok, and Shopify) and verifies official UK Companies House filings, director appointments, and SIC industry trade codes directly on your Windows desktop.",
    problemSolved: [
      "Eliminates expensive monthly subscriptions for e-commerce research software (e.g. Helium 10 or Jungle Scout) and B2B credit check tools.",
      "Automates deep 20-stage product vetting to identify high-demand, low-competition, high-margin inventory opportunities.",
      "Instantly verifies official corporate registration status, active directors, PSC filings, and accounts due dates.",
      "Exports complete, downloadable product and business audit reports directly into your local CRM pipeline.",
    ],
    targetAudience: [
      "E-Commerce Brands and Amazon/Shopify Sellers searching for profitable, trending products and reliable supplier margins.",
      "B2B Sales Teams and Agencies performing corporate due diligence, director verification, and prospect qualification.",
      "Accountants, Legal Advisors, and Compliance Officers auditing corporate records and filing histories.",
    ],
    coreCapabilities: [
      {
        title: "Multi-Marketplace E-Commerce Hunter",
        description:
          "Conducts 20-stage algorithmic analysis across Amazon, eBay, Etsy, Walmart, TikTok Shop, and Shopify to uncover winning products with verified profit margins.",
      },
      {
        title: "Live UK Companies House Auditing",
        description:
          "Directly queries official UK registry records for active status, incorporation date, directors, PSCs, filing history, and accounts due dates.",
      },
      {
        title: "Standard Industrial Classification (SIC) Search",
        description:
          "Filters and analyzes businesses across 700+ SIC trade codes to uncover specialized B2B partnership and service opportunities.",
      },
      {
        title: "Downloadable Product & Company Audit Reports",
        description:
          "Generates comprehensive, multi-page analytical audit documents in Word, PDF, or HTML format in one click.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Define Target Market or Company Query",
        description: "Enter a product niche, competitor keyword, or company registration name/number.",
      },
      {
        step: "02",
        title: "Autonomous Deep Analysis",
        description: "The engine runs multi-stage data gathering, evaluates competitive intensity, checks filings, and computes profit metrics.",
      },
      {
        step: "03",
        title: "One-Click Export to CRM",
        description: "Save verified companies, prospects, or vetted product opportunities directly into your Digi CRM pipeline.",
      },
    ],
    faq: [
      {
        q: "Does Digi Intelligence require third-party subscription accounts to search Companies House?",
        a: "No. Digi Intelligence connects directly to official public registry APIs with zero third-party subscription charges.",
      },
      {
        q: "Which e-commerce platforms can I analyze with Product Hunter?",
        a: "You can research products across Amazon, eBay, Etsy, Walmart, TikTok Shop, and Shopify stores.",
      },
      {
        q: "Can I schedule intelligence searches to run overnight?",
        a: "Yes. Combined with Digi Flow, you can schedule recurring intelligence scans to monitor competitor pricing and discover new leads automatically.",
      },
    ],
    relatedModules: [
      { name: "Digi CRM", slug: "crm", description: "Convert discovered leads and product suppliers directly into active pipeline deals." },
      { name: "Digi Studio", slug: "studio", description: "Produce marketing visuals and video demonstrations for discovered products." },
      { name: "Digi Marketing", slug: "marketing", description: "Deploy promotional campaigns for newly launched product offerings." },
    ],
    openSourceSynergy:
      "Pairs with DuckDB for high-speed analytical querying over large product datasets and Open SEO Spider for technical store auditing.",
  },
];

export const MODULES_BY_SLUG: Record<string, ModuleData> = Object.fromEntries(
  MODULES_LIST.map((m) => [m.slug, m]),
);
