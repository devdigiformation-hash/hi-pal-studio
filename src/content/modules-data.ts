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
    name: "Digi CRM & Lead Pipeline",
    eyebrow: "Enterprise Business Intelligence",
    h1: "Digi CRM — Local AI Customer &",
    h1Gradient: "Deal Pipeline Management",
    metaTitle: "Digi CRM — Offline AI Customer Relationship Management | DIGI BIZ OS",
    metaDescription:
      "Deploy Digi CRM on Windows: self-hosted client database, automatic lead qualification, AI pipeline tracking, and zero monthly SaaS fees.",
    accentColor: "#10B981",
    directAnswer:
      "Digi CRM is a native, local-first customer relationship management system integrated into DIGI BIZ OS. It automates contact management, deal stages, client interaction logging, and sales pipelines entirely on your local machine with zero monthly recurring cloud fees.",
    problemSolved: [
      "Eliminates expensive monthly per-seat SaaS subscription fees (e.g. Salesforce or HubSpot).",
      "Protects sensitive client data and financial records by storing everything in local SQLite/PostgreSQL databases.",
      "Prevents deal leakage by deploying autonomous AI agents to qualify incoming inquiries and update stage status.",
      "Integrates directly with WhatsApp and Email channels without complex webhook bridges.",
    ],
    targetAudience: [
      "Small and Medium Business Owners wanting complete client data sovereignty.",
      "Sales Teams and Agencies managing multiple client pipelines concurrently.",
      "Freelancers and Consultants needing fast quotation, invoice, and relationship tracking.",
    ],
    coreCapabilities: [
      {
        title: "Autonomous Lead Scoring & Qualification",
        description: "AI agents evaluate lead intent, budget, and readiness to buy based on conversational transcripts.",
      },
      {
        title: "Local Database Sovereignty",
        description: "Zero external cloud telemetry. All client profiles, notes, and revenue logs remain encrypted on your Windows drive.",
      },
      {
        title: "Visual Kanban Deal Pipelines",
        description: "Drag-and-drop deal progression across Prospect, Qualified, Proposal, Negotiation, and Closed-Won stages.",
      },
      {
        title: "Voice-Triggered CRM Updates",
        description: "Speak to JARVIS to update deal stages, log meeting notes, or retrieve client history hands-free.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Inquiry Capture",
        description: "Incoming messages from WhatsApp, Email, or Web are automatically converted into CRM contact records.",
      },
      {
        step: "02",
        title: "AI Intent Analysis",
        description: "The CRM intelligence agent analyzes customer sentiment, extracts requirements, and assigns a lead score.",
      },
      {
        step: "03",
        title: "Automated Follow-Up & Stage Update",
        description: "The system schedules personalized follow-up reminders and advances the deal in your visual pipeline.",
      },
    ],
    faq: [
      {
        q: "Does Digi CRM require an ongoing monthly subscription?",
        a: "No. Digi CRM is included in your one-time DIGI BIZ OS lifetime licence with lifetime updates and zero monthly seat fees.",
      },
      {
        q: "Can I import existing contacts from CSV or Excel?",
        a: "Yes. Digi CRM provides instant 1-click CSV import and export with automatic column mapping.",
      },
      {
        q: "Is my customer data shared with third-party servers?",
        a: "Never. All database records reside locally on your PC in high-performance SQLite/PostgreSQL instances.",
      },
    ],
    relatedModules: [
      { name: "Digi WhatsApp Agent", slug: "whatsapp", description: "Automate 24/7 customer chat and sales inquiries." },
      { name: "Digi Flow Workflows", slug: "workflows", description: "Trigger automated follow-up sequences on cron schedules." },
      { name: "Digi Intelligence", slug: "intelligence", description: "Enrich client profiles with automated market data." },
    ],
    openSourceSynergy:
      "Digi CRM can be linked to PocketBase for high-speed embedded database storage or Jan AI for private local NLP analysis.",
  },
  {
    slug: "whatsapp",
    name: "Digi WhatsApp AI Sales Agent",
    eyebrow: "Conversational Commerce Engine",
    h1: "Digi WhatsApp — 24/7 AI Customer Support &",
    h1Gradient: "Autonomous Sales Bot",
    metaTitle: "Digi WhatsApp AI Sales Agent — 24/7 Support & Order Automation | DIGI BIZ OS",
    metaDescription:
      "Turn WhatsApp into an autonomous sales machine: 24/7 AI customer replies, product catalog sharing, order taking, and CRM integration on Windows.",
    accentColor: "#25D366",
    directAnswer:
      "Digi WhatsApp is an autonomous AI sales and customer service agent that runs directly on your Windows desktop. It handles incoming customer inquiries, shares product catalogs, answers complex pricing questions, and registers orders directly into your local database 24/7.",
    problemSolved: [
      "Stops missed sales opportunities during off-hours, weekends, and holidays.",
      "Eliminates repetitive manual customer support tasks and FAQ answering.",
      "Provides multi-language instant responses in English, Urdu, Arabic, Spanish, and 40+ languages.",
      "Syncs customer conversation transcripts directly with Digi CRM.",
    ],
    targetAudience: [
      "E-commerce stores and Retailers taking orders via WhatsApp.",
      "Service businesses (Agencies, Clinics, Real Estate) scheduling client appointments.",
      "Global sellers requiring 24/7 instant multilingual response times.",
    ],
    coreCapabilities: [
      {
        title: "Conversational Catalog & Ordering",
        description: "Allows customers to browse products, select variations, and confirm orders directly in the chat thread.",
      },
      {
        title: "Multi-Language Intelligent Routing",
        description: "Detects customer language automatically and responds with natural, high-converting native phrasing.",
      },
      {
        title: "Human Escalation Protocol",
        description: "Seamlessly flags complex queries or VIP clients for manual human intervention with live sound alerts.",
      },
      {
        title: "Desktop Native Runner",
        description: "Runs stably on Windows with automatic session keep-alive and zero third-party per-message API markup.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Message Reception",
        description: "Customer sends an inquiry regarding pricing, product specifications, or service availability.",
      },
      {
        step: "02",
        title: "Contextual RAG Retrieval",
        description: "The AI agent consults your local product documents and FAQ knowledge base to craft an accurate answer.",
      },
      {
        step: "03",
        title: "Conversion & CRM Sync",
        description: "The agent secures the customer's contact/order details and automatically updates your Digi CRM pipeline.",
      },
    ],
    faq: [
      {
        q: "Do I need official WhatsApp Business Cloud API or can I connect standard accounts?",
        a: "Digi WhatsApp supports multiple connection adapters, including local Web session runners and standard API webhooks.",
      },
      {
        q: "Can the AI understand audio voice notes sent by customers?",
        a: "Yes. Integrated with offline Whisper speech recognition, it transcribes customer voice messages and replies contextually.",
      },
      {
        q: "Can I customize the agent's tone and business knowledge?",
        a: "Yes. You can provide system prompts, product spreadsheets, FAQs, and custom response guidelines in the settings.",
      },
    ],
    relatedModules: [
      { name: "Digi CRM", slug: "crm", description: "Store client profiles and order records automatically." },
      { name: "Digi Marketing", slug: "marketing", description: "Generate high-converting sales copywriting scripts." },
      { name: "Digi Intelligence", slug: "intelligence", description: "Scrape high-intent prospective buyers to initiate outreach." },
    ],
    openSourceSynergy:
      "Combines with open-source AnythingLLM for deep PDF knowledge base lookups and local Whisper for instant audio transcription.",
  },
  {
    slug: "marketing",
    name: "Digi Marketing & Campaign Suite",
    eyebrow: "Autonomous Growth Architecture",
    h1: "Digi Marketing — Multi-Channel AI Ad Copy &",
    h1Gradient: "Campaign Automation Engine",
    metaTitle: "Digi Marketing — AI Copywriting, Ad Creatives & Campaign Suite | DIGI BIZ OS",
    metaDescription:
      "Automate high-converting marketing campaigns: AI ad copy, social reels scripts, SEO content generation, and email sequences on Windows.",
    accentColor: "#EC4899",
    directAnswer:
      "Digi Marketing is a dedicated business growth engine inside DIGI BIZ OS. It produces high-converting advertising copy, social media video scripts, email nurture sequences, and marketing calendars utilizing specialized marketing intelligence personas.",
    problemSolved: [
      "Eliminates expensive monthly copywriting and marketing agency retainers.",
      "Prevents creative fatigue by generating dozens of high-performing headline and hook angles in seconds.",
      "Ensures consistent brand voice across Facebook, Google Ads, TikTok, Email, and LinkedIn.",
      "Prepares ready-to-use 9:16 video scripts designed for vertical social formats.",
    ],
    targetAudience: [
      "Digital Marketing Agencies managing dozens of client ad accounts.",
      "E-commerce brands running performance marketing on Meta, Google, and TikTok.",
      "Solo entrepreneurs scaling multi-channel organic and paid customer acquisition.",
    ],
    coreCapabilities: [
      {
        title: "Direct-Response Copywriting Frameworks",
        description: "Generates copy structured on proven frameworks (AIDA, PAS, BAB, StoryBrand) for maximum conversion.",
      },
      {
        title: "Shorts & Reels Script Generator",
        description: "Creates 15-60 second high-retention video scripts with visual cue descriptions and viral hooks.",
      },
      {
        title: "Multi-Tier Email Sequences",
        description: "Drafts automated welcome series, abandoned cart recovery, and product launch email funnels.",
      },
      {
        title: "Competitor Angle Analysis",
        description: "Identifies messaging gaps in competitor ads and creates differentiated value propositions.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Product Profiling",
        description: "Input your product URL or description and select your target customer avatar.",
      },
      {
        step: "02",
        title: "Multi-Channel Asset Generation",
        description: "The AI agent generates ad variations, email copy, and social video hooks in seconds.",
      },
      {
        step: "03",
        title: "Execution & Scheduling",
        description: "Export copy directly into OpenCut for video editing or Digi Flow for automated publishing.",
      },
    ],
    faq: [
      {
        q: "Can I train the marketing agent on my existing successful ads?",
        a: "Yes. You can paste your best-performing past copy to calibrate the agent's tone, vocabulary, and rhythm.",
      },
      {
        q: "Does it support image and video creative production?",
        a: "Digi Marketing writes the exact storyboard, voiceover, and script, which you can edit in OpenCut or Kdenlive directly.",
      },
    ],
    relatedModules: [
      { name: "Digi WhatsApp Agent", slug: "whatsapp", description: "Deploy marketing scripts into live chat funnels." },
      { name: "Digi Intelligence", slug: "intelligence", description: "Discover high-margin trending products to market." },
      { name: "Digi Code", slug: "code", description: "Build automated landing pages and tracking scripts." },
    ],
    openSourceSynergy:
      "Integrates with OpenCut for instant vertical reel editing and Open SEO Spider for technical landing page optimization.",
  },
  {
    slug: "intelligence",
    name: "Digi Intelligence & Companies House Verification",
    eyebrow: "Market Surveillance & Registry Intelligence",
    h1: "Digi Intelligence — UK Companies House &",
    h1Gradient: "B2B Market Intelligence Suite",
    metaTitle: "Digi Intelligence — UK Companies House Search & B2B Intelligence | DIGI BIZ OS",
    metaDescription:
      "Search UK Companies House live, verify directors and SIC codes, monitor competitor prices, and mine verified B2B leads on Windows.",
    accentColor: "#3B82F6",
    directAnswer:
      "Digi Intelligence is an advanced corporate research, registry lookup, and market intelligence suite inside DIGI BIZ OS. It features live UK Companies House director and filing verification, Standard Industrial Classification (SIC) industry code searches, automated competitor price monitoring, and B2B lead generation directly on your Windows desktop.",
    problemSolved: [
      "Eliminates third-party paid subscriptions for company credit checks and director verification.",
      "Instantly verifies official UK corporate status, filing history, active officers, and registered offices.",
      "Identifies market opportunities by filtering businesses across 700+ SIC trade classifications.",
      "Monitors competitor website price changes and inventory fluctuations automatically.",
    ],
    targetAudience: [
      "B2B Sales Teams and Agencies performing corporate due diligence and prospect discovery.",
      "Accountants, Legal Advisors, and Compliance Officers auditing UK business filings.",
      "E-commerce brands and Market Researchers tracking competitor pricing and supplier intelligence.",
    ],
    coreCapabilities: [
      {
        title: "Live UK Companies House Lookup",
        description: "Searches official UK corporate registry data: active status, incorporation date, directors, PSCs, and accounts due.",
      },
      {
        title: "Standard Industrial Classification (SIC) Search",
        description: "Filters and categorizes thousands of businesses by exact 5-digit industry trade codes.",
      },
      {
        title: "Competitor Price & Product Surveillance",
        description: "Tracks rival websites on schedules and alerts you when prices or stock availability change.",
      },
      {
        title: "B2B Lead Enrichment Engine",
        description: "Enriches corporate records with verified decision-maker names, phone numbers, and direct contacts.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Query Definition",
        description: "Define target niche, marketplace, price floor, minimum monthly revenue, or industry criteria.",
      },
      {
        step: "02",
        title: "Autonomous Web Mining",
        description: "Intelligence agents traverse public listings, enrich structured data, and calculate profit margins.",
      },
      {
        step: "03",
        title: "Export to CRM",
        description: "Directly import discovered leads and product suppliers into your Digi CRM pipeline for outreach.",
      },
    ],
    faq: [
      {
        q: "Does Digi Intelligence require proxy servers or paid API keys?",
        a: "It includes built-in browser automation tools, but also supports custom proxy integration for large-scale crawling.",
      },
      {
        q: "Can I schedule intelligence scans to run automatically overnight?",
        a: "Yes. Combined with Digi Flow, you can set recurring cron jobs to harvest fresh leads and market data every night.",
      },
    ],
    relatedModules: [
      { name: "Digi CRM", slug: "crm", description: "Directly convert discovered leads into active sales deals." },
      { name: "Digi Marketing", slug: "marketing", description: "Craft personalized outreach campaigns for leads." },
      { name: "Digi Flow Workflows", slug: "workflows", description: "Schedule automatic scraping routines via cron." },
    ],
    openSourceSynergy:
      "Pairs with Open SEO Spider for deep website structure crawling and PocketBase for rapid structured data querying.",
  },
  {
    slug: "workflows",
    name: "Digi Flow & Scheduled Cron Automation",
    eyebrow: "Autonomous Execution Layer",
    h1: "Digi Flow — Visual Business Workflows &",
    h1Gradient: "Scheduled Background Tasks",
    metaTitle: "Digi Flow — Visual Business Workflow & Scheduled Cron Automation | DIGI BIZ OS",
    metaDescription:
      "Build visual AI business workflows on Windows: scheduled cron jobs, multi-agent task chains, automated file processing, and zero cloud lock-in.",
    accentColor: "#F59E0B",
    directAnswer:
      "Digi Flow is the central workflow orchestration and background task automation engine of DIGI BIZ OS. It lets you construct multi-step business logic visually, chain autonomous sub-agents, and execute tasks on precise recurring cron schedules on your local PC.",
    problemSolved: [
      "Replaces recurring monthly Zapier / Make costs with 100% free local execution.",
      "Chains multiple AI models and scripts together (e.g. Scrape -> Analyze -> Generate PDF -> Email).",
      "Executes scheduled tasks reliably in the background without keeping browser tabs open.",
      "Provides full local audit logs and automatic retry mechanisms for failed steps.",
    ],
    targetAudience: [
      "Operations Managers automating daily repetitive data entry and reporting.",
      "Developers needing an offline visual orchestrator for local Python/Node scripts.",
      "Business Owners wanting autonomous overnight reports, backups, and customer follow-ups.",
    ],
    coreCapabilities: [
      {
        title: "Visual Node-Based Canvas",
        description: "Drag, connect, and configure triggers, agent reasoning steps, file operations, and API webhooks.",
      },
      {
        title: "Precision Cron Scheduler",
        description: "Run jobs every hour, daily at 9:00 AM, weekly, or upon specific desktop system file events.",
      },
      {
        title: "Multi-Agent Sub-Delegation",
        description: "Spawn parallel sub-agents to divide complex multi-hour research tasks into fast concurrent runs.",
      },
      {
        title: "Zero Cloud API Markup",
        description: "Execute directly on your own machine hardware with local models or direct API keys.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Trigger Selection",
        description: "Choose a trigger: time schedule (Cron), new file detected, inbound WhatsApp message, or voice command.",
      },
      {
        step: "02",
        title: "Action Chaining",
        description: "Connect agent execution nodes: research, data formatting, document creation, and database logging.",
      },
      {
        step: "03",
        title: "Autonomous Execution",
        description: "Digi Flow runs silently in the background, logging full execution transcripts and notifying you upon completion.",
      },
    ],
    faq: [
      {
        q: "What happens if my PC goes to sleep or restarts?",
        a: "Digi Flow maintains persistent state. Upon wake/boot, scheduled tasks resume automatically from where they left off.",
      },
      {
        q: "Can Digi Flow execute custom Python or Bash scripts?",
        a: "Yes. Digi Flow includes native terminal execution blocks to run Python, Node.js, PowerShell, and shell binaries.",
      },
    ],
    relatedModules: [
      { name: "Digi CRM", slug: "crm", description: "Trigger workflows based on client stage changes." },
      { name: "Digi Docs", slug: "docs", description: "Automate bulk document processing and conversion." },
      { name: "Digi Tools", slug: "tools", description: "Use 100+ offline utilities inside workflow steps." },
    ],
    openSourceSynergy:
      "Seamlessly controls Hermes Agent, OpenHands, and Tuttle time tracking within unified automated pipelines.",
  },
  {
    slug: "docs",
    name: "Digi Docs Offline Document Engine",
    eyebrow: "100% Private Local Document Suite",
    h1: "Digi Docs — Offline Document Suite,",
    h1Gradient: "OCR, Redaction & Cryptography",
    metaTitle: "Digi Docs — Private Offline Document Processing & OCR Suite | DIGI BIZ OS",
    metaDescription:
      "Process sensitive business documents 100% offline: merge, split, OCR, redact, sign, timestamp, and convert PDFs on Windows with zero cloud leaks.",
    accentColor: "#EF4444",
    directAnswer:
      "Digi Docs is an enterprise-grade offline document processing suite inside DIGI BIZ OS. It allows you to merge, split, OCR, redact, cryptographically sign, timestamp, and batch-convert PDF, DOCX, and image files directly on your Windows PC without uploading files to third-party web servers.",
    problemSolved: [
      "Eliminates severe privacy risks associated with uploading confidential client contracts to random online PDF websites.",
      "Enables high-accuracy offline OCR (Optical Character Recognition) on scanned receipts and legal documents.",
      "Performs permanent cryptographic redaction of social security numbers, bank details, and personal data.",
      "Batch processes thousands of documents in seconds without per-document cloud conversion fees.",
    ],
    targetAudience: [
      "Law firms, Accountants, and Financial Advisors handling strictly confidential client paperwork.",
      "Healthcare practitioners requiring strict compliance and zero unauthorized data transmission.",
      "Enterprises processing high-volume invoices, archives, and contracts locally.",
    ],
    coreCapabilities: [
      {
        title: "100% Air-Gapped Processing",
        description: "Zero external network requests. All document rendering, parsing, and text extraction occurs in local RAM.",
      },
      {
        title: "Offline AI OCR & Text Extraction",
        description: "Converts non-searchable scanned images and multi-page PDFs into editable, searchable text instantly.",
      },
      {
        title: "Permanent Data Redaction",
        description: "Sanitizes sensitive words, addresses, and ID numbers irrevocably before document distribution.",
      },
      {
        title: "Cryptographic Timestamping & Signing",
        description: "Applies verifiable digital signatures and SHA-256 integrity timestamps to guarantee document authenticity.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Document Ingestion",
        description: "Drag and drop single files or entire folders of PDF, Word, or image documents into the workspace.",
      },
      {
        step: "02",
        title: "Operation Selection",
        description: "Choose your action: OCR extraction, multi-file merge, PII redaction, watermarking, or conversion.",
      },
      {
        step: "03",
        title: "Instant Offline Export",
        description: "The engine processes files in milliseconds and saves sanitized, signed outputs directly to your local drive.",
      },
    ],
    faq: [
      {
        q: "Is there a limit on PDF file size or number of pages?",
        a: "No. Digi Docs uses stream processing and can handle multi-gigabyte files and thousands of pages with no artificial limits.",
      },
      {
        q: "Does it preserve original layout and formatting when converting?",
        a: "Yes. Advanced vector layout preservation engines ensure typography, tables, and images retain pixel-perfect alignment.",
      },
    ],
    relatedModules: [
      { name: "Digi Tools", slug: "tools", description: "Complement document workflows with hash verification and encoding." },
      { name: "Digi CRM", slug: "crm", description: "Attach sanitized contracts directly to client records." },
      { name: "Digi Flow Workflows", slug: "workflows", description: "Automate incoming invoice sorting and OCR on a schedule." },
    ],
    openSourceSynergy:
      "Integrates with AnythingLLM for document vector indexing and Tuttle for tracking document review billable hours.",
  },
  {
    slug: "code",
    name: "Digi Code AI Developer Workspace",
    eyebrow: "Autonomous Software Engineering",
    h1: "Digi Code — Autonomous Coding Agent &",
    h1Gradient: "Repository Intelligence Workspace",
    metaTitle: "Digi Code — AI Coding Agent & Repository Workspace | DIGI BIZ OS",
    metaDescription:
      "Deploy an autonomous AI software engineer on your Windows PC: multi-file repository reasoning, automated bug fixing, terminal runners, and Git automation.",
    accentColor: "#8B5CF6",
    directAnswer:
      "Digi Code is an autonomous software engineering environment built into DIGI BIZ OS. It deeply indexes your entire local codebase, executes terminal commands, performs multi-file refactoring, creates new features, and automates Git workflows with full project session memory.",
    problemSolved: [
      "Stops context-switching between chat windows and code editors by living directly inside your local project folders.",
      "Eliminates manual boilerplate writing and repetitive debugging cycles.",
      "Understands multi-repo architectures, framework conventions, and cross-file dependencies.",
      "Runs automated unit tests and linter checks locally to verify code before committing.",
    ],
    targetAudience: [
      "Software Engineers and Full-Stack Developers building web, desktop, and mobile applications.",
      "Founders and Solo Developers shipping complete products without large engineering teams.",
      "Data Scientists and DevOps Engineers automating script pipelines and infrastructure.",
    ],
    coreCapabilities: [
      {
        title: "Full Repository AST Reasoning",
        description: "Indexes functions, classes, and file dependencies across TypeScript, Python, Go, Rust, C#, and PHP codebases.",
      },
      {
        title: "Terminal Execution & Self-Correction",
        description: "Executes build commands, reads compiler output, and automatically fixes errors until tests pass.",
      },
      {
        title: "Sub-Agent Task Parallelization",
        description: "Spawns dedicated sub-agents to research documentation, analyze schema, and write implementation plans concurrently.",
      },
      {
        title: "Automated Git & PR Workflows",
        description: "Generates semantic commit messages, creates branches, and pushes clean pull requests automatically.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Project Selection",
        description: "Select your project folder. Digi Code scans your dependencies, route trees, and architecture.",
      },
      {
        step: "02",
        title: "Prompt Instruction",
        description: "Describe the feature, bug fix, or refactor needed using natural language or voice commands.",
      },
      {
        step: "03",
        title: "Autonomous Delivery",
        description: "The agent writes code, runs tests, verifies functionality, and presents an exact diff walkthrough.",
      },
    ],
    faq: [
      {
        q: "Which AI models can I use with Digi Code?",
        a: "You can route between Claude 3.5 Sonnet, GPT-4o, DeepSeek-Coder, Gemini 1.5 Pro, or fully offline local Ollama models.",
      },
      {
        q: "Does Digi Code upload my proprietary source code to a remote database?",
        a: "No. Your code is sent only to the specific model API endpoint you configure, with zero telemetry storage.",
      },
    ],
    relatedModules: [
      { name: "Digi Tools", slug: "tools", description: "Use 100+ developer utilities for hashing, encoding, and regex testing." },
      { name: "Digi Flow Workflows", slug: "workflows", description: "Trigger automated builds and tests on cron schedules." },
      { name: "Digi Intelligence", slug: "intelligence", description: "Scrape API documentation and research code libraries." },
    ],
    openSourceSynergy:
      "Native synergy with OpenHands and Hermes Agent for advanced autonomous terminal engineering and test execution.",
  },
  {
    slug: "tools",
    name: "Digi Tools 100+ Offline Utilities",
    eyebrow: "Swiss Army Knife for PC",
    h1: "Digi Tools — 100+ Offline Developer &",
    h1Gradient: "IT Productivity Utilities",
    metaTitle: "Digi Tools — 100+ Offline Developer, Crypto & IT Utilities | DIGI BIZ OS",
    metaDescription:
      "Instant offline IT utilities on Windows: JWT decoders, SHA-256 hashers, Base64 converters, JSON formatters, regex testers, and zero cloud leaks.",
    accentColor: "#F472B6",
    directAnswer:
      "Digi Tools is a high-speed offline utility suite built into DIGI BIZ OS. It features over 100 essential developer, cryptographic, formatting, and networking utilities that run entirely inside local memory with instant keyboard search and zero network latency.",
    problemSolved: [
      "Eliminates security risks of pasting sensitive API keys, JWT tokens, or passwords into online utility websites.",
      "Provides instant offline access to essential tools even when disconnected from the internet.",
      "Eliminates browser clutter and ad-heavy utility websites with a unified, distraction-free interface.",
      "Saves favorite tools for rapid 1-click access.",
    ],
    targetAudience: [
      "Web Developers, DevOps Engineers, and System Administrators.",
      "Security Analysts and Cryptography Practitioners.",
      "Technical Business Owners handling JSON, CSV, and formatted data daily.",
    ],
    coreCapabilities: [
      {
        title: "Cryptographic Hashing & Encoding",
        description: "Instant SHA-256, SHA-512, MD5, Base64, Hex, URL-encoding, and bcrypt hashing without internet.",
      },
      {
        title: "Data Formatting & Validation",
        description: "Format, validate, minify, and diff JSON, XML, YAML, SQL, and CSV structures in real time.",
      },
      {
        title: "Token & Key Inspection",
        description: "Decode and inspect JWT payloads, expiry dates, SSL certificates, and regex patterns safely offline.",
      },
      {
        title: "Fuzzy Command Palette Search",
        description: "Find and open any tool in milliseconds with keyboard shortcut navigation.",
      },
    ],
    workflows: [
      {
        step: "01",
        title: "Instant Launch",
        description: "Press your shortcut or speak to JARVIS to open Digi Tools instantly.",
      },
      {
        step: "02",
        title: "Input & Transform",
        description: "Paste your payload or string; the tool updates formatted outputs in real-time as you type.",
      },
      {
        step: "03",
        title: "1-Click Copy",
        description: "Copy transformed data to your clipboard with automatic clipboard sanitization.",
      },
    ],
    faq: [
      {
        q: "Are any pasted strings ever logged or sent to an external server?",
        a: "Never. Digi Tools is 100% air-gapped and executes exclusively in your local machine's memory.",
      },
      {
        q: "Can I use Digi Tools without an internet connection?",
        a: "Yes. All 100+ utilities are compiled directly into the DIGI BIZ OS Windows binary and operate fully offline.",
      },
    ],
    relatedModules: [
      { name: "Digi Code", slug: "code", description: "Use utilities alongside active coding and debugging sessions." },
      { name: "Digi Docs", slug: "docs", description: "Cryptographically verify and hash processed document files." },
      { name: "Digi Flow Workflows", slug: "workflows", description: "Incorporate cryptographic and formatting steps into automated pipelines." },
    ],
    openSourceSynergy:
      "Pairs seamlessly with PocketBase for local data verification and Open SEO Spider for technical tag validation.",
  },
];

export const MODULES_BY_SLUG: Record<string, ModuleData> = Object.fromEntries(
  MODULES_LIST.map((m) => [m.slug, m]),
);
