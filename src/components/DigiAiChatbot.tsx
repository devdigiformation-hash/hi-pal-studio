import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  ExternalLink,
  MessageCircle,
  Key,
  ShieldCheck,
  Zap,
  Download,
  HelpCircle,
  RefreshCw,
  Phone,
  Layers,
  ChevronDown,
} from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  links?: { label: string; url: string }[];
  pills?: string[];
}

export function cleanAiText(raw: string): string {
  if (!raw) return "";
  let text = raw;

  // 1. Remove markdown links [Label](url) -> Label
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // 2. Remove all asterisks and stars (* or **)
  text = text.replace(/\*+/g, "");

  // 3. Remove hashtags (#)
  text = text.replace(/#+/g, "");

  // 4. Remove bullet dots and square/diamond bullets
  text = text.replace(/[•●▪▫■□◆◇]/g, "");

  // 5. Remove bullet dashes/hyphens at the beginning of lines
  text = text.replace(/^[ \t]*[-–—]\s*/gm, "");

  // 6. Remove backticks
  text = text.replace(/`+/g, "");

  // 7. Strip leading emoji symbols from headlines
  text = text.replace(/^[💻🔑💰🎙️🎯💳📞🌐🛡️🤖👋💡⚠️❌]\s*/gm, "");

  // 8. Clean redundant spacing and empty lines
  text = text.replace(/[ \t]+/g, " ");
  text = text.replace(/\n{3,}/g, "\n\n");

  return text.trim();
}

const KNOWLEDGE_BASE = [
  {
    triggers: [
      "gemini",
      "api key",
      "key kaise",
      "get api key",
      "api key step",
      "google ai studio",
      "aistudio",
      "key step",
      "key free",
      "studio voice key",
    ],
    answer: `How to Get Your Free Gemini API Key in 3 Simple Steps:

Step 1: Open Google AI Studio at aistudio.google.com/app/apikey and sign in with any standard Google or Gmail account. It is 100% free with no credit card or billing ever required.

Step 2: In the top right corner, click Create API key and choose Create key in new project. Your key string starting with AIzaSy will be generated immediately. Click Copy.

Step 3: Launch DIGI LABS on your PC, open Settings, paste your key into Gemini API Key, and click Save.

Tip on 9-Key Auto-Rotation: You can create multiple keys across different Google projects and add them into DIGI LABS slots from key 1 to key 9. When one key reaches its daily request limit, DIGI LABS automatically switches to the next key so your generation never stops.`,
    links: [
      { label: "Get Free Gemini API Key (Google AI Studio)", url: "https://aistudio.google.com/app/apikey" },
      { label: "DIGI LABS Overview & Download", url: "/open-source/digi-labs" },
    ],
    pills: ["What is DIGI LABS?", "Is Gemini API really free?", "DIGI BIZ OS Pricing"],
  },
  {
    triggers: [
      "price",
      "pricing",
      "cost",
      "kitne ka",
      "kitni price",
      "lifetime",
      "payment",
      "how much",
      "khareed",
      "buy",
      "fee",
      "subscription",
    ],
    answer: `DIGI BIZ OS Official Pricing and Lifetime License:

One-Time Lifetime Price: 29 Pounds Worldwide (or PKR 10,400 in Pakistan).
Zero Monthly Fees: You own the software perpetually. There are no recurring monthly subscription fees or renewals.
Includes 12 Local Engines: CRM, Invoicing, Social Media Auto-Syndication, Private Offline Whisper, Local LLM Orchestrator, JARVIS Voice Navigation, and WhatsApp Business Automation.

Supported Payment Methods:
Pakistan: JazzCash, EasyPaisa, and UBL Bank Limited.
International: USA and UK Corporate Bank Transfer, Direct Wire or Card.
Important Note: SadaPay and NayaPay are not supported.`,
    links: [
      { label: "View Lifetime Pricing Page", url: "/pricing" },
      { label: "Chat on WhatsApp (0316 4467464)", url: "https://wa.me/923164467464" },
    ],
    pills: ["Payment Methods", "What are the 12 Engines?", "Download Windows Setup"],
  },
  {
    triggers: [
      "digi labs",
      "elevenlabs",
      "voice",
      "tts",
      "text to speech",
      "audiobook",
      "video to prompt",
      "human voice",
      "edge tts",
      "video prompt",
    ],
    answer: `DIGI LABS Sovereign Free Voice and Media Workstation:

DIGI LABS is the 100% free ElevenLabs alternative developed by DIGIFORMATION LTD.

Dual Voice Engines:
1. Studio Voice (Gemini 2.5 Flash): Realistic emotional human voice with breathing and natural inflection at zero cost.
2. Free Voice (Edge-TTS): Unlimited long-form audiobook narrations with zero API keys and no limits.

Video to Prompt and Course Engine: Paste any YouTube or MP4 video link to reverse-engineer visual styles, cinematic prompts, structured courses, and study notes.

Multilingual: English, Urdu with Nastaliq support, Hindi, Arabic, and international dialects.

Standalone Windows Installer: Download DIGI-LABS-Setup-1.0.0.exe (253MB) directly from our website.

Strict No-Resale Rule: 100% free for your personal use and client agency work. Reselling or cloud re-hosting is strictly prohibited.`,
    links: [
      { label: "Download DIGI LABS (.exe 253MB)", url: "/open-source/digi-labs" },
      { label: "DIGI LABS GitHub Repository", url: "https://github.com/digiformationltd-creator/DIGI-LABS-FREE-TTS-TRANSCRIPT-" },
    ],
    pills: ["How to get Gemini API key?", "Download Windows Setup", "Can I resell DIGI LABS?"],
  },
  {
    triggers: [
      "lead hunter",
      "digi lead hunter",
      "leads",
      "google maps",
      "b2b",
      "whatsapp verify",
      "scraper",
      "finding leads",
      "opportunity pack",
    ],
    answer: `DIGI LEAD HUNTER Autonomous B2B Opportunity Engine:

DIGI LEAD HUNTER finds local businesses and extracts qualified agency clients in seconds.

Autonomous Scanning: Scans Google Maps locally without third-party scraping charges.
Direct WhatsApp Verification: Validates mobile numbers using Baileys microservice and carrier line detection.
3-Tier Qualification: Automatically sorts leads into Tier 1 (Build-Ready), Tier 2 (Consultation), and Tier 3 (Modernization).
Automated Opportunity Packs: Generates pre-audited client blueprints and proposal ZIP packs ready for outreach.
Free and Open Source: Complete source code is available on GitHub and as a Source ZIP on our website.`,
    links: [
      { label: "DIGI LEAD HUNTER Portal", url: "/open-source/digi-lead-hunter" },
      { label: "DIGI LEAD HUNTER GitHub", url: "https://github.com/digiformationltd-creator/DIGI-LEAD-HUNTER" },
    ],
    pills: ["What is DIGI BIZ OS?", "How to get Gemini API key?", "Official WhatsApp Support"],
  },
  {
    triggers: [
      "payment method",
      "jazzcash",
      "easypaisa",
      "ubl",
      "sadapay",
      "nayapay",
      "bank",
      "how to pay",
      "account number",
      "kaise pay karein",
    ],
    answer: `Official Accepted Payment Methods:

We accept the following verified payment channels for DIGI BIZ OS (29 Pounds or PKR 10,400):
1. JazzCash (Direct Mobile Account)
2. EasyPaisa (Direct Mobile Account)
3. UBL Bank Limited (Pakistan Bank Transfer)
4. USA and UK Corporate Bank Accounts (Direct Wire)

Important: SadaPay and NayaPay are NOT accepted. To receive official account details and invoice verification, please message our official WhatsApp hotline at +92 316 4467464 (03164467464).`,
    links: [
      { label: "Chat on WhatsApp for Payment Details", url: "https://wa.me/923164467464" },
      { label: "View Pricing Page", url: "/pricing" },
    ],
    pills: ["DIGI BIZ OS Pricing", "Official WhatsApp Support", "What is DIGI BIZ OS?"],
  },
  {
    triggers: [
      "whatsapp",
      "contact",
      "phone",
      "number",
      "rabta",
      "email",
      "support",
      "call",
      "helpline",
      "0316",
    ],
    answer: `Official DIGIFORMATION and DIGI BIZ OS Support Channels:

WhatsApp Hotline: +92 316 4467464 (0316 4467464)
Official Emails: info@digiformation.co.uk and info@digibizos.co.uk
Company Registry: Registered in England and Wales (Company Number 16994903)
Headquarters: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
YouTube Channels: Digi Biz Os (@digibizos) and Digiformation Ltd (@Digiformationltd)`,
    links: [
      { label: "Open WhatsApp Chat Now (0316 4467464)", url: "https://wa.me/923164467464" },
      { label: "Digiformation Corporate Website", url: "https://www.digiformation.co.uk/" },
    ],
    pills: ["DIGI BIZ OS Pricing", "How to get Gemini API key?", "Download DIGI LABS"],
  },
  {
    triggers: [
      "open source",
      "tools",
      "github",
      "free software",
      "suite",
      "open hands",
      "open claw",
      "jan ai",
      "anythingllm",
      "upscayl",
      "facefusion",
    ],
    answer: `DIGIFORMATION Open-Source Software Suite:

We curate and maintain 18+ sovereign, local-first open source workstations:
1. DIGI LABS: Unlimited Free Human TTS and Video to Prompt Studio.
2. DIGI LEAD HUNTER: Autonomous B2B Google Maps lead finder and WhatsApp validator.
3. OpenHands: Autonomous software engineering agent.
4. OpenClaw: Autonomous computer desktop and web research operator.
5. Jan AI: Offline private LLM desktop workstation for Llama 3 and Mistral.
6. AnythingLLM: Private enterprise document RAG knowledge base.
7. Upscayl: AI image upscaler for 2x, 4x, and 8x resolutions.
8. FaceFusion and Deep-Live-Cam: Sovereign real-time visual media processors.
9. Audacity, Shotcut, Kdenlive, OpenCut: Sovereign media creation suites.

All tools are 100% free with verified source code on GitHub and standalone Windows companion installers.`,
    links: [
      { label: "Explore Full Open-Source Suite", url: "/open-source" },
      { label: "DIGI LABS", url: "/open-source/digi-labs" },
      { label: "DIGI LEAD HUNTER", url: "/open-source/digi-lead-hunter" },
    ],
    pills: ["Download DIGI LABS", "How to get Gemini API key?", "DIGI BIZ OS Pricing"],
  },
  {
    triggers: [
      "resell",
      "license",
      "commercial",
      "terms",
      "bech sakte hain",
      "white label",
      "saas",
    ],
    answer: `License and Resale Terms:

Personal and Agency Usage: 100% free forever. You can use DIGI LABS and DIGI LEAD HUNTER on your local computers to create unlimited voiceovers, audiobooks, client websites, and commercial content. You keep 100% of your earnings.

Strict Resale Prohibition: You are strictly NOT allowed to resell our software binaries, white-label them, or host them as a paid cloud subscription SaaS. Our tools are source-available for local sovereign operation only.`,
    links: [
      { label: "Read License on GitHub", url: "https://github.com/digiformationltd-creator/DIGI-LABS-FREE-TTS-TRANSCRIPT-#readme" },
    ],
    pills: ["What is DIGI LABS?", "DIGI BIZ OS Pricing", "Official WhatsApp Support"],
  },
  {
    triggers: [
      "install",
      "download",
      "setup",
      "requirements",
      "chalana kaise hai",
      "system requirement",
      "windows 11",
      "windows 10",
      "exe",
    ],
    answer: `Installation and System Requirements:

OS Support: Windows 10 and Windows 11 (64-bit native).
Hardware: 8GB RAM minimum (16GB recommended for heavy local AI), Intel Core i5 or AMD Ryzen 5 or higher, 10GB SSD storage.

Fast Install Steps:
1. DIGI LABS: Download DIGI-LABS-Setup-1.0.0.exe (253MB) from our portal, run installer, go to Settings, paste your free Gemini API key, and click Save.
2. DIGI BIZ OS: One-time 29 Pounds setup with automated desktop deployment and JARVIS voice intelligence.`,
    links: [
      { label: "Download DIGI LABS (.exe 253MB)", url: "/open-source/digi-labs" },
      { label: "Download DIGI BIZ OS", url: "/download" },
    ],
    pills: ["How to get Gemini API key?", "DIGI BIZ OS Pricing", "What is DIGI LEAD HUNTER?"],
  },
];

function findBestAnswer(query: string): {
  text: string;
  links?: { label: string; url: string }[];
  pills?: string[];
} {
  const lower = query.toLowerCase().trim();

  // Search through knowledge base triggers
  let bestMatch = null;
  let maxScore = 0;

  for (const item of KNOWLEDGE_BASE) {
    let score = 0;
    for (const trigger of item.triggers) {
      if (lower.includes(trigger)) {
        score += trigger.length;
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = item;
    }
  }

  if (bestMatch && maxScore > 0) {
    return {
      text: cleanAiText(bestMatch.answer),
      links: bestMatch.links,
      pills: bestMatch.pills,
    };
  }

  // Friendly conversational fallbacks
  if (lower.includes("hi") || lower.includes("hello") || lower.includes("salam") || lower.includes("hey")) {
    return {
      text: cleanAiText(`Hello! Welcome to DIGI BIZ OS and DIGIFORMATION LTD.

I am DIGI AI, your 24/7 intelligent platform advisor. How can I assist you today?

You can ask me about:
1. How to get your Free Gemini API Key
2. DIGI LABS (ElevenLabs alternative)
3. DIGI LEAD HUNTER (Google Maps lead generator)
4. DIGI BIZ OS (29 Pounds lifetime license)

Choose a topic below or type your question.`),
      pills: [
        "How to get free Gemini API key?",
        "DIGI BIZ OS Pricing (£29)",
        "What is DIGI LABS?",
        "What is DIGI LEAD HUNTER?",
      ],
    };
  }

  return {
    text: cleanAiText(`DIGI AI Intelligence Response:

Regarding your query:

DIGI BIZ OS is our complete autonomous Windows desktop operating system featuring 12 local engines (CRM, invoicing, social syndication, private Whisper, local LLMs) for a one-time 29 Pounds or PKR 10,400 lifetime license with zero subscriptions.

DIGI LABS is our sovereign free ElevenLabs alternative powered by Gemini 2.5 Flash Voice and Edge-TTS audiobooks with video-to-prompt extraction.

DIGI LEAD HUNTER autonomously extracts and verifies local B2B leads from Google Maps.

Would you like specific details on pricing, setup steps, or contacting our team?`),
    links: [
      { label: "Chat with Human Support on WhatsApp", url: "https://wa.me/923164467464" },
      { label: "Explore Open Source Tools", url: "/open-source" },
    ],
    pills: [
      "How to get free Gemini API key?",
      "DIGI BIZ OS Pricing",
      "Download DIGI LABS",
      "Official WhatsApp Support",
    ],
  };
}

export default function DigiAiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: cleanAiText(`Welcome to DIGI AI Assistant.

I am equipped with complete knowledge of DIGI BIZ OS (29 Pounds lifetime), DIGI LABS (Free ElevenLabs alternative), DIGI LEAD HUNTER, and our entire 18+ open-source suite.

Ask me anything about setup steps, free Gemini API keys, pricing, or payment methods.`),
      timestamp: "Just now",
      pills: [
        "How to get free Gemini API key?",
        "DIGI BIZ OS Pricing (£29)",
        "What is DIGI LABS?",
        "What is DIGI LEAD HUNTER?",
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: "u-" + Date.now(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    // Fast, responsive simulated thinking delay (280ms)
    setTimeout(() => {
      const response = findBestAnswer(query);
      const botMsg: Message = {
        id: "b-" + Date.now(),
        sender: "bot",
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        links: response.links,
        pills: response.pills,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 280);
  };

  return (
    <>
      {/* ── FLOATING LAUNCHER BUTTON (SLIGHTLY ABOVE WHATSAPP) ── */}
      <div className="fixed bottom-[84px] right-5 z-40 flex items-center gap-3">
        {/* Tooltip Label */}
        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-[#0B0D13]/95 px-3.5 py-2 text-xs font-mono font-semibold text-cyan-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Ask DIGI AI</span>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open DIGI AI Chatbot"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#0F172A] via-[#1E1B4B] to-[#7C3AED] border border-cyan-400/50 text-white shadow-[0_0_30px_rgba(47,224,200,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] active:scale-95 cursor-pointer"
        >
          {/* Pulsing Glow */}
          <span className="absolute -inset-1 rounded-full bg-cyan-400/25 blur-sm animate-pulse" />

          {/* Online Dot */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-400 border-2 border-[#0B0D13]" />
          </span>

          {isOpen ? (
            <X size={24} className="relative z-10 text-cyan-300 transition-transform group-hover:rotate-90" />
          ) : (
            <Sparkles size={24} className="relative z-10 text-cyan-300 transition-transform group-hover:scale-110" />
          )}
        </button>
      </div>

      {/* ── EXPANDABLE CHATBOT WINDOW ── */}
      {isOpen && (
        <aside
          aria-label="DIGI AI Assistant Window"
          className="fixed bottom-24 right-4 sm:right-6 z-50 flex h-[580px] max-h-[85vh] w-[92vw] sm:w-[430px] flex-col overflow-hidden rounded-3xl border border-cyan-500/40 bg-[#0B0914]/98 shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_50px_rgba(47,224,200,0.25)] backdrop-blur-2xl animate-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-purple-950/60 via-slate-900/60 to-black/80 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-purple-600/30 border border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(47,224,200,0.3)]">
                <Bot size={22} />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-sm font-bold text-white tracking-wide">DIGI AI Assistant</h3>
                  <span className="rounded-full bg-cyan-500/20 border border-cyan-500/40 px-2 py-0.2 text-[9px] font-mono font-bold text-cyan-300">
                    KNOWLEDGE ENGINE
                  </span>
                </div>
                <p className="text-[11px] font-mono text-zinc-400">
                  Full Website Knowledge • 24/7 Instant Answers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <a
                href="https://wa.me/923164467464"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-xl text-emerald-400 hover:bg-emerald-500/20 transition"
              >
                <Phone size={15} />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-xl text-zinc-400 hover:bg-white/10 hover:text-white transition"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="flex items-center justify-between bg-cyan-950/30 border-b border-cyan-500/20 px-3.5 py-1.5 text-[11px] font-mono text-cyan-300">
            <span>✨ Know-it-all: Pricing, API Keys, DIGI LABS &amp; GitHub</span>
            <a
              href="https://wa.me/923164467464"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-1 text-emerald-400"
            >
              <span>0316 4467464</span>
            </a>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-body text-xs sm:text-[13px] leading-relaxed">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl p-3.5 shadow-md ${
                    m.sender === "user"
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-br-none border border-purple-400/30"
                      : "bg-[#141026] text-zinc-200 rounded-bl-none border border-white/10"
                  }`}
                >
                  <div className="whitespace-pre-wrap space-y-2">
                    {cleanAiText(m.text).split("\n\n").map((para, idx) => (
                      <p key={idx} className="leading-[1.65]">
                        {cleanAiText(para)}
                      </p>
                    ))}
                  </div>

                  {/* Links attached to answer */}
                  {m.links && m.links.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-col gap-1.5">
                      {m.links.map((link, i) => (
                        <a
                          key={i}
                          href={link.url}
                          target={link.url.startsWith("http") ? "_blank" : undefined}
                          rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-cyan-300 hover:text-cyan-200 hover:underline"
                        >
                          <ExternalLink size={12} className="shrink-0" />
                          <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <span className="mt-1 px-1 font-mono text-[10px] text-zinc-500">
                  {m.timestamp}
                </span>

                {/* Clickable suggestion pills */}
                {m.pills && m.pills.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[95%]">
                    {m.pills.map((pill, pi) => (
                      <button
                        key={pi}
                        type="button"
                        onClick={() => handleSend(pill)}
                        className="rounded-full border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-[11px] font-mono text-purple-300 hover:bg-purple-500/25 hover:border-purple-400 hover:text-white transition cursor-pointer"
                      >
                        {pill}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 rounded-2xl bg-[#141026] border border-white/10 p-3 max-w-[120px]">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" />
                <span className="h-2 w-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="border-t border-white/10 bg-[#07050F]/90 p-3"
          >
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-black/60 px-3 py-1.5 focus-within:border-cyan-400/60 focus-within:ring-1 focus-within:ring-cyan-400/40">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Gemini key, Pricing, DIGI LABS..."
                className="w-full bg-transparent py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send query"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-slate-950 font-bold transition hover:brightness-110 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send size={14} />
              </button>
            </div>
            <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-zinc-500 px-1">
              <span>WhatsApp: 0316 4467464</span>
              <span>DIGIFORMATION LTD</span>
            </div>
          </form>
        </aside>
      )}
    </>
  );
}
