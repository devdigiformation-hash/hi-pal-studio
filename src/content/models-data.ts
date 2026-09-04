export interface ModelEntity {
  slug: string;
  name: string;
  creator: string;
  category: "Open-Weights Reasoning" | "Open-Source LLM" | "Local Speech-to-Text" | "Code Specialist" | "Frontier Multimodal";
  license: string;
  localSupport: boolean;
  contextWindow: string;
  hardwareRequirement: string;
  accentColor: string;
  eyebrow: string;
  h1: string;
  h1Gradient: string;
  metaTitle: string;
  metaDescription: string;
  directAnswer: string;
  overview: string;
  keyCapabilities: { title: string; desc: string }[];
  digiSynergy: string;
  alternatives: { name: string; slug: string }[];
  faq: { q: string; a: string }[];
}

export const MODELS_LIST: ModelEntity[] = [
  {
    slug: "deepseek-r1",
    name: "DeepSeek R1",
    creator: "DeepSeek AI",
    category: "Open-Weights Reasoning",
    license: "MIT Open Source License",
    localSupport: true,
    contextWindow: "128,000 tokens",
    hardwareRequirement: "8GB VRAM (Q4 7B-14B distills) to 64GB+ (full MoE / quantized 70B)",
    accentColor: "#3B82F6",
    eyebrow: "Open-Weights Reasoning Model",
    h1: "DeepSeek R1 —",
    h1Gradient: "Open-Source Frontier Reasoning on Windows.",
    metaTitle: "DeepSeek R1 — Free Local & API Reasoning Model on Windows | DIGI BIZ OS",
    metaDescription:
      "Run DeepSeek R1 locally on Windows or via API in DIGI BIZ OS. Complete guide to DeepSeek R1 reasoning benchmarks, MIT license, local Ollama execution, and CRM automation.",
    directAnswer:
      "DeepSeek R1 is a state-of-the-art open-weights reasoning model developed by DeepSeek AI and released under the permissive MIT license. It utilizes reinforcement learning without supervised fine-tuning warm-up to achieve mathematics, coding, and logical reasoning benchmarks comparable to OpenAI o1. Inside DIGI BIZ OS, DeepSeek R1 can be executed 100% offline via local Ollama/Jan AI or connected via API for autonomous CRM workflows and business intelligence.",
    overview:
      "DeepSeek R1 revolutionized open-source AI by proving that pure reinforcement learning (RL) can generate human-like chain-of-thought reasoning capabilities. With fully open weights and permissive MIT licensing, businesses can deploy DeepSeek R1 locally on Windows workstations for air-gapped data privacy or connect via API for high-speed cloud reasoning.",
    keyCapabilities: [
      {
        title: "Chain-of-Thought Deep Reasoning",
        desc: "Generates step-by-step verifiable logical proofs, mathematical solutions, and multi-file code refactors.",
      },
      {
        title: "100% Offline Air-Gapped Inference",
        desc: "Distilled variants (7B, 14B, 32B) run locally on modern consumer GPUs with zero cloud communication.",
      },
      {
        title: "Permissive MIT License",
        desc: "Freely usable for commercial business software, proprietary workflows, and client-facing automation.",
      },
      {
        title: "128K Extended Context Window",
        desc: "Ingests entire legal agreements, complex codebases, and comprehensive financial balance sheets in a single prompt.",
      },
    ],
    digiSynergy:
      "In DIGI BIZ OS, DeepSeek R1 powers complex reasoning inside Digi Intelligence for competitive market scraping, Digi Code for automated test creation, and Digi CRM for customer sentiment and deal probability scoring.",
    alternatives: [
      { name: "Llama 3.3 70B", slug: "llama-3-3" },
      { name: "Qwen 2.5 72B", slug: "qwen-2-5" },
      { name: "Phi-4 14B", slug: "phi-4" },
    ],
    faq: [
      {
        q: "Is DeepSeek R1 free for commercial business use?",
        a: "Yes. DeepSeek R1 is released under the MIT open-source license, allowing unrestricted commercial use, fine-tuning, and offline redistribution.",
      },
      {
        q: "Can I run DeepSeek R1 locally on my Windows PC?",
        a: "Yes. Using DIGI BIZ OS with integrated Ollama or Jan AI, you can run DeepSeek-R1 distilled models (7B, 8B, 14B, 32B) on standard NVIDIA/AMD GPUs or CPU.",
      },
      {
        q: "How does DeepSeek R1 compare to OpenAI o1?",
        a: "DeepSeek R1 matches or exceeds OpenAI o1 on major reasoning benchmarks like AIME 2024 (79.8% pass@1) and MATH-500 while offering full open-weights transparency.",
      },
    ],
  },
  {
    slug: "llama-3-3",
    name: "Llama 3.3 70B",
    creator: "Meta AI",
    category: "Open-Source LLM",
    license: "Llama 3.3 Community License (Permissive Commercial)",
    localSupport: true,
    contextWindow: "128,000 tokens",
    hardwareRequirement: "24GB-48GB VRAM (4-bit quantized) / 64GB System RAM",
    accentColor: "#0668E1",
    eyebrow: "Flagship Open-Weights LLM",
    h1: "Llama 3.3 70B —",
    h1Gradient: "Meta's Flagship Open Intelligence for PC.",
    metaTitle: "Llama 3.3 70B — Open-Weights Business AI Model on Windows | DIGI BIZ OS",
    metaDescription:
      "Deploy Meta Llama 3.3 70B on Windows with DIGI BIZ OS. Explore 128K context, multilingual capabilities, enterprise CRM automation, and local offline deployment.",
    directAnswer:
      "Meta Llama 3.3 70B is an advanced open-weights large language model offering intelligence comparable to previous 405B flagship models at a fraction of the compute cost. Featuring a 128K context window, rich multilingual fluency, and tool-calling precision, Llama 3.3 runs locally on high-end desktop hardware or cloud endpoints inside DIGI BIZ OS.",
    overview:
      "Llama 3.3 delivers industry-leading general knowledge, instruction following, and multilingual support across European and Asian languages. It serves as an enterprise-ready foundation model for business operating systems.",
    keyCapabilities: [
      {
        title: "405B-Class Intelligence at 70B Efficiency",
        desc: "Trained using synthetic data knowledge distillation to match 400B+ frontier models with low latency.",
      },
      {
        title: "Function & Tool Calling",
        desc: "Natively generates structured JSON outputs to trigger Windows desktop scripts, APIs, and database actions.",
      },
      {
        title: "Multilingual Fluency",
        desc: "Covers English, Spanish, French, German, Portuguese, Italian, Arabic, Hindi, and more with natural nuance.",
      },
      {
        title: "Local Quantization Support",
        desc: "Runs smoothly via GGUF and EXL2 formats inside DIGI BIZ OS local runtime environments.",
      },
    ],
    digiSynergy:
      "Llama 3.3 70B serves as the default heavy reasoning engine in DIGI BIZ OS for drafting multi-page commercial proposals in Digi Docs, managing complex conversational pipelines in Digi WhatsApp, and orchestrating multi-step cron tasks in Digi Flow.",
    alternatives: [
      { name: "DeepSeek R1", slug: "deepseek-r1" },
      { name: "Qwen 2.5 72B", slug: "qwen-2-5" },
      { name: "Mistral Large", slug: "mistral-large" },
    ],
    faq: [
      {
        q: "What are the hardware requirements to run Llama 3.3 70B locally?",
        a: "A 4-bit quantized version (Q4_K_M) requires approximately 40 GB of VRAM/RAM, making it runnable on dual RTX 3090/4090 GPUs or unified memory Apple Silicon/high-RAM PCs.",
      },
      {
        q: "Can Llama 3.3 be used without local GPUs?",
        a: "Yes. DIGI BIZ OS supports seamless cloud API routing to fast endpoints like Groq, Together, DeepInfra, and OpenRouter for sub-second responses.",
      },
    ],
  },
  {
    slug: "qwen-2-5",
    name: "Qwen 2.5 72B & Coder",
    creator: "Alibaba Cloud / Qwen Team",
    category: "Code Specialist",
    license: "Apache 2.0 Open Source",
    localSupport: true,
    contextWindow: "128,000 tokens",
    hardwareRequirement: "16GB VRAM (Qwen 2.5 Coder 32B) / 48GB VRAM (72B)",
    accentColor: "#6366F1",
    eyebrow: "High-Performance Coding & Reasoning",
    h1: "Qwen 2.5 72B & Coder —",
    h1Gradient: "Apache 2.0 Open Coding Intelligence.",
    metaTitle: "Qwen 2.5 72B & Coder — Open-Source Coding & Math Model | DIGI BIZ OS",
    metaDescription:
      "Explore Qwen 2.5 72B and Qwen 2.5 Coder 32B in DIGI BIZ OS. Apache 2.0 license, 128K context, local offline coding assistant, and full Windows terminal integration.",
    directAnswer:
      "Qwen 2.5 is Alibaba Cloud's flagship open-weights model family, licensed under the truly open Apache 2.0 license. In particular, Qwen 2.5 Coder 32B rivals GPT-4o on programming benchmarks (HumanEval, MultiPL-E) while offering 100% offline local inference on a single 24GB GPU or high-RAM PC.",
    overview:
      "Qwen 2.5 represents the pinnacle of open coding and mathematical reasoning. With Apache 2.0 licensing, businesses gain absolute freedom to build commercial software, generate complex SQL queries, and execute system commands with zero licensing fees.",
    keyCapabilities: [
      {
        title: "Top-Tier Coding Benchmarks",
        desc: "Outperforms many proprietary models on Python, TypeScript, C++, Rust, and SQL generation.",
      },
      {
        title: "Apache 2.0 Open Source",
        desc: "Completely permissive open-source license with zero enterprise revenue restrictions.",
      },
      {
        title: "Native Structured JSON & Code Repair",
        desc: "Specialized in auto-fixing syntax bugs, generating unit tests, and parsing malformed data.",
      },
      {
        title: "Extended 128K Codebase Context",
        desc: "Ingests entire software projects for repository-wide refactoring and dependency audits.",
      },
    ],
    digiSynergy:
      "In DIGI BIZ OS, Qwen 2.5 Coder powers the Digi Code module, assisting developers with autonomous terminal debugging, TypeScript route building, and SQLite database schema migrations.",
    alternatives: [
      { name: "DeepSeek R1", slug: "deepseek-r1" },
      { name: "Llama 3.3 70B", slug: "llama-3-3" },
      { name: "Phi-4 14B", slug: "phi-4" },
    ],
    faq: [
      {
        q: "What makes Qwen 2.5 Coder ideal for desktop development?",
        a: "Its 32B variant achieves coding performance equal to closed frontier models while running comfortably on a single RTX 4090 (24GB VRAM) or Apple M-series Mac.",
      },
      {
        q: "Is Qwen 2.5 safe for proprietary company code?",
        a: "Yes. When running locally via Ollama or Jan AI inside DIGI BIZ OS, your code files never leave your PC's local hard drive.",
      },
    ],
  },
  {
    slug: "phi-4",
    name: "Microsoft Phi-4 14B",
    creator: "Microsoft Research",
    category: "Open-Weights Reasoning",
    license: "MIT Open Source License",
    localSupport: true,
    contextWindow: "16,000 tokens",
    hardwareRequirement: "8GB - 12GB VRAM / 16GB System RAM (Runs on standard laptops)",
    accentColor: "#00A4EF",
    eyebrow: "Compact High-Density Reasoning",
    h1: "Microsoft Phi-4 14B —",
    h1Gradient: "Small Footprint, Frontier Reasoning Power.",
    metaTitle: "Microsoft Phi-4 14B — Local Small Language Model for PC | DIGI BIZ OS",
    metaDescription:
      "Microsoft Phi-4 14B reasoning model on Windows. 100% offline local inference on standard laptops, MIT license, math and logic intelligence with DIGI BIZ OS.",
    directAnswer:
      "Microsoft Phi-4 is a 14-billion parameter state-of-the-art reasoning model trained on synthetic textbooks and high-quality educational data. Despite its lightweight footprint that runs on standard 8GB-12GB consumer laptops, Phi-4 achieves complex mathematical and logical reasoning scores that outperform previous 70B models.",
    overview:
      "Microsoft's 'Textbooks Are All You Need' methodology reaches new heights in Phi-4. Designed specifically for edge computing and desktop efficiency, Phi-4 delivers instant sub-second responses on everyday Windows machines.",
    keyCapabilities: [
      {
        title: "Runs on Standard Laptops",
        desc: "Requires only 8GB-12GB VRAM or 16GB CPU RAM, allowing fast local inference without costly workstations.",
      },
      {
        title: "Exceptional Math & Science Reasoning",
        desc: "Outperforms larger legacy models on MATH, GSM8K, and STEM logic problems.",
      },
      {
        title: "Permissive MIT License",
        desc: "Full commercial freedom for enterprise deployments and air-gapped installations.",
      },
      {
        title: "Low Latency Edge Processing",
        desc: "Provides instant conversational feedback with low energy and thermal consumption.",
      },
    ],
    digiSynergy:
      "Phi-4 acts as the ultra-fast local subagent inside DIGI BIZ OS for real-time document OCR extraction in Digi Docs, customer query classification in Digi CRM, and instant utility operations in Digi Tools.",
    alternatives: [
      { name: "Gemma 2 9B", slug: "gemma-2" },
      { name: "DeepSeek R1", slug: "deepseek-r1" },
      { name: "Qwen 2.5 72B", slug: "qwen-2-5" },
    ],
    faq: [
      {
        q: "Can Microsoft Phi-4 run without a dedicated GPU?",
        a: "Yes. Using CPU quantized GGUF builds in Ollama or Jan AI, Phi-4 generates 15-25 tokens per second on modern Intel/AMD processors.",
      },
      {
        q: "What is the primary use case for Phi-4?",
        a: "Fast, accurate classification, structured data extraction, mathematical logic, and automated business report summaries.",
      },
    ],
  },
  {
    slug: "whisper",
    name: "OpenAI Whisper (Local Speech-to-Text)",
    creator: "OpenAI",
    category: "Local Speech-to-Text",
    license: "MIT Open Source License",
    localSupport: true,
    contextWindow: "Continuous Audio Stream",
    hardwareRequirement: "2GB - 4GB VRAM / CPU-only mode supported",
    accentColor: "#10A37F",
    eyebrow: "Offline Voice Transcription Engine",
    h1: "OpenAI Whisper —",
    h1Gradient: "100% Offline Local Speech Recognition.",
    metaTitle: "OpenAI Whisper Local Voice Engine — Speech-to-Text on Windows | DIGI BIZ OS",
    metaDescription:
      "OpenAI Whisper on Windows with DIGI BIZ OS. Offline local speech-to-text, 99+ language transcription, sub-200ms latency, and hands-free JARVIS voice control.",
    directAnswer:
      "OpenAI Whisper is an open-source neural net speech recognition model trained on 680,000 hours of multilingual audio. Released under the MIT license, Whisper runs 100% locally on Windows PCs inside DIGI BIZ OS, converting spoken voice commands and audio notes into accurate text without sending audio recordings over the internet.",
    overview:
      "Whisper powers the hands-free voice foundation of DIGI BIZ OS. It handles accents, background noise, and technical jargon with human-level transcription accuracy while preserving total user privacy.",
    keyCapabilities: [
      {
        title: "100% Air-Gapped Audio Privacy",
        desc: "Audio signals are processed in local RAM and never uploaded to cloud servers or third-party APIs.",
      },
      {
        title: "99+ Languages & Dialects",
        desc: "Accurately transcribes English, Urdu, Arabic, Spanish, French, German, Hindi, and regional dialects.",
      },
      {
        title: "Sub-200ms Local Latency",
        desc: "Optimized with native desktop acceleration for instant push-to-talk voice interactions.",
      },
      {
        title: "Robust to Noise & Accents",
        desc: "Filters out keyboard typing, air conditioning, and ambient office chatter automatically.",
      },
    ],
    digiSynergy:
      "This voice intelligence forms the listening ear of the JARVIS Voice Assistant (/voice-ai) in DIGI BIZ OS. It automatically transcribes WhatsApp voice notes in Digi WhatsApp and translates spoken instructions into CRM pipeline updates.",
    alternatives: [
      { name: "Hermes 3", slug: "hermes-3" },
      { name: "Phi-4 14B", slug: "phi-4" },
    ],
    faq: [
      {
        q: "Does local speech-to-text require an active internet connection?",
        a: "No. Speech recognition is executed entirely on your local Windows PC using native hardware-accelerated processing.",
      },
      {
        q: "Which speech recognition models are available?",
        a: "Multiple model profiles are supported (Fast, Balanced, High-Accuracy, and Large Turbo), letting you balance speed and accuracy.",
      },
    ],
  },
  {
    slug: "mistral-large",
    name: "Mistral Large & NeMo",
    creator: "Mistral AI",
    category: "Open-Source LLM",
    license: "Apache 2.0 (NeMo) / Mistral Commercial",
    localSupport: true,
    contextWindow: "128,000 tokens",
    hardwareRequirement: "12GB VRAM (NeMo 12B) to 64GB+ (Large)",
    accentColor: "#F97316",
    eyebrow: "European Open & Frontier AI",
    h1: "Mistral Large & NeMo —",
    h1Gradient: "Precision Reasoning & Multilingual Power.",
    metaTitle: "Mistral Large & NeMo — Open AI Models on Windows | DIGI BIZ OS",
    metaDescription:
      "Deploy Mistral Large and Mistral NeMo 12B in DIGI BIZ OS. 128K context, high-speed European multilingual fluency, and native tool-calling on PC.",
    directAnswer:
      "Mistral Large and Mistral NeMo (12B) are high-efficiency language models engineered by European AI lab Mistral AI. Featuring advanced function calling, strict JSON output constraints, and 128K context windows, Mistral models excel at enterprise business analysis and document processing.",
    overview:
      "Mistral models provide unmatched efficiency and reasoning per parameter. Mistral NeMo 12B (co-developed with NVIDIA) runs effortlessly on modern Windows gaming and workstation GPUs.",
    keyCapabilities: [
      {
        title: "Enterprise JSON & Function Calling",
        desc: "Designed specifically for deterministic API orchestration and autonomous tool triggering.",
      },
      {
        title: "High-Speed Inference",
        desc: "Optimized token generation rates with low memory bandwidth requirements.",
      },
      {
        title: "Multilingual Business Fluency",
        desc: "Strong proficiency in European commerce, GDPR legal compliance, and international contracts.",
      },
    ],
    digiSynergy:
      "Mistral powers automated email drafting and campaign personalization in Digi Marketing, as well as deterministic legal document redaction in Digi Docs.",
    alternatives: [
      { name: "Llama 3.3 70B", slug: "llama-3-3" },
      { name: "Qwen 2.5 72B", slug: "qwen-2-5" },
    ],
    faq: [
      {
        q: "Can I run Mistral NeMo 12B offline?",
        a: "Yes. Mistral NeMo 12B is released under the Apache 2.0 license and runs locally on any 12GB+ GPU via Ollama or Jan AI.",
      },
    ],
  },
  {
    slug: "gemma-2",
    name: "Google Gemma 2 (9B & 27B)",
    creator: "Google DeepMind",
    category: "Open-Weights Reasoning",
    license: "Gemma Terms of Use (Commercial Permissive)",
    localSupport: true,
    contextWindow: "8,192 tokens",
    hardwareRequirement: "8GB VRAM (9B) / 24GB VRAM (27B)",
    accentColor: "#4285F4",
    eyebrow: "Google Open Research Architecture",
    h1: "Google Gemma 2 —",
    h1Gradient: "Lightweight High-Efficiency Desktop AI.",
    metaTitle: "Google Gemma 2 (9B & 27B) — Open Weights on Windows | DIGI BIZ OS",
    metaDescription:
      "Run Google Gemma 2 9B and 27B locally on Windows in DIGI BIZ OS. Fast inference, low memory footprint, and Google DeepMind architecture for desktop business use.",
    directAnswer:
      "Google Gemma 2 is a family of lightweight, state-of-the-art open-weights models built from the same research and technology used to create Gemini models. Featuring a redesigned sliding window attention architecture, Gemma 2 9B punches far above its weight class in conversational benchmarks and desktop utility.",
    overview:
      "Gemma 2 offers exceptional performance for resource-constrained desktop environments, allowing businesses to run intelligent conversational agents without demanding expensive enterprise server clusters.",
    keyCapabilities: [
      {
        title: "DeepMind Architectural Enhancements",
        desc: "Incorporates interleaved sliding window attention and logit capping for stable long-session chats.",
      },
      {
        title: "Fast 9B Laptop Execution",
        desc: "Runs smoothly on modest hardware with rapid response generation and low power draw.",
      },
    ],
    digiSynergy:
      "Gemma 2 handles rapid classification in Digi Intelligence and powers lightweight background agents in Digi Flow.",
    alternatives: [
      { name: "Phi-4 14B", slug: "phi-4" },
      { name: "Qwen 2.5 72B", slug: "qwen-2-5" },
    ],
    faq: [
      {
        q: "Is Gemma 2 free for commercial use?",
        a: "Yes. Google permits commercial use of Gemma 2 under the Gemma Terms of Use for organizations with under 700M monthly active users.",
      },
    ],
  },
  {
    slug: "hermes-3",
    name: "Nous Hermes 3 (Llama 3.1 8B/70B)",
    creator: "Nous Research",
    category: "Open-Weights Reasoning",
    license: "Llama 3.1 Community License / Apache 2.0",
    localSupport: true,
    contextWindow: "128,000 tokens",
    hardwareRequirement: "8GB VRAM (8B) / 40GB VRAM (70B)",
    accentColor: "#A855F7",
    eyebrow: "Autonomous Agent & Tool Execution",
    h1: "Nous Hermes 3 —",
    h1Gradient: "The Flagship Open-Source Agent Model.",
    metaTitle: "Nous Hermes 3 — Autonomous Agent & Function-Calling AI | DIGI BIZ OS",
    metaDescription:
      "Explore Nous Hermes 3 on Windows with DIGI BIZ OS. Advanced autonomous multi-step reasoning, tool use, structured JSON outputs, and local offline deployment.",
    directAnswer:
      "Nous Hermes 3 is the flagship generalist open-weights model fine-tuned by Nous Research for long-context reasoning, complex tool calling, agentic autonomy, and creative roleplay. Built on Llama 3.1 architecture, Hermes 3 is purpose-built to act as an autonomous digital worker on your desktop.",
    overview:
      "Hermes 3 is tailored specifically for agentic execution. It excels at parsing ambiguous instructions into deterministic multi-tool workflows, making it a natural core for autonomous AI operating systems.",
    keyCapabilities: [
      {
        title: "Unmatched Tool & Function Calling",
        desc: "Trained on massive synthetic tool execution datasets for zero-shot API integration.",
      },
      {
        title: "Multi-Agent System Orchestration",
        desc: "Coordinates subagents, resolves conflicting outputs, and maintains structured shared memory.",
      },
    ],
    digiSynergy:
      "Hermes 3 integrates directly with the Open Source Hermes Agent (/open-source/hermes-agent) and controls background task scheduling in Digi Flow.",
    alternatives: [
      { name: "DeepSeek R1", slug: "deepseek-r1" },
      { name: "Llama 3.3 70B", slug: "llama-3-3" },
    ],
    faq: [
      {
        q: "Why choose Hermes 3 over standard Llama 3.1?",
        a: "Hermes 3 offers superior uncensored tool-calling fidelity, advanced XML prompt parsing, and robust agentic planning capabilities.",
      },
    ],
  },
];

export const MODELS_BY_SLUG: Record<string, ModelEntity> = Object.fromEntries(
  MODELS_LIST.map((m) => [m.slug, m]),
);
