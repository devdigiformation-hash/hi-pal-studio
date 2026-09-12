import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useState, useMemo, useEffect, useRef } from "react";
import {
  ArrowRight,
  Bot,
  Boxes,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  Eye,
  FileCode,
  FileText,
  Globe,
  HardDrive,
  ImageIcon,
  Key,
  Layers,
  Lock,
  Megaphone,
  MessageSquare,
  Package,
  PackageCheck,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Timer,
  Users,
  Wrench,
  Zap,
  Video,
  Smile,
  Camera,
  Film,
  Mic,
  Smartphone,
  Search,
  X,
  SlidersHorizontal,
  Star,
  Laptop,
  Filter,
  RotateCcw,
  Check,
  Flame,
  TrendingUp,
  Share2,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";
import MonoBadge from "@/components/MonoBadge";
import ActivePulse from "@/components/ActivePulse";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import MasterOpenSourceValueTable from "@/components/seo/MasterOpenSourceValueTable";
import ThreeDTiltCard from "@/components/ui/ThreeDTiltCard";
import { buildMeta, breadcrumbLd, itemListLd } from "@/lib/seo";
import { OPEN_SOURCE_SUBPAGES } from "@/content/open-source-subpages";

// Screenshots
import anythingllmScreenshot from "@/assets/anythingllm-screenshot.jpg";
import janScreenshot from "@/assets/jan-ai-screenshot.jpg";
import pocketbaseScreenshot from "@/assets/pocketbase-screenshot.png";
import tuttleScreenshot from "@/assets/tuttle-screenshot.jpg";
import upscaylScreenshot from "@/assets/upscayl-screenshot.jpg";


const TITLE = "Free Open Source Software Library & Hub — AI Agents, Media & Tools | DIGI BIZ OS";
const DESC =
  "Discover 15+ curated open-source desktop software tools for Windows: Kdenlive, Jan AI, OpenHands, PocketBase, Shotcut, Audacity, Upscayl & more. 100% free, offline, and subscription-free.";

export interface SoftwareItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  license: string;
  color: string;
  icon: any;
  image?: string;
  badge: string;
  bundle: string;
  bullets: string[];
  features: string[];
  to: string;
  stars: string;
  starCount: number;
  savings: string;
  savingsValue: number;
  platforms: ("Windows" | "macOS" | "Linux")[];
  alternativeTo: string[];
  downloadUrl?: string;
  downloadFilename?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const SOFTWARE_LIST: SoftwareItem[] = [
  {
    id: "openhands",
    name: "OpenHands Autonomous AI Engineer",
    category: "Autonomous Agents",
    tagline: "Open-source alternative to Devin ($500/mo). Full-stack SWE-bench verified solver.",
    license: "MIT License",
    color: "#3B82F6",
    icon: Terminal,
    badge: "Most Popular Coder",
    bundle: "Autonomous Coding & Engineering",
    bullets: [
      "Writes, tests & debugs code autonomously in Docker",
      "SWE-bench 53%+ verified benchmark on real GitHub issues",
      "Full Bash shell, VS Code editor & live web preview",
    ],
    features: ["SWE-Bench 53%+", "Docker Sandbox", "Zero Subscriptions"],
    to: "/open-source/openhands",
    stars: "46.2k ★",
    starCount: 46200,
    savings: "Save $6,000 / yr",
    savingsValue: 6000,
    platforms: ["Windows", "macOS", "Linux"],
    alternativeTo: ["Devin AI", "Cursor Pro", "Claude Code"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["openhands"].downloadUrl,
    downloadFilename: "OpenHands-main.zip",
    repoUrl: OPEN_SOURCE_SUBPAGES["openhands"].repoUrl,
    featured: true,
  },
  {
    id: "openclaw",
    name: "OpenClaw Autonomous AI Agent",
    category: "Autonomous Agents",
    tagline: "Local alternative to Devin & Manus AI. Researches, codes, and executes on your PC.",
    license: "MIT License",
    color: "#6366F1",
    icon: Bot,
    badge: "Autonomous Operator",
    bundle: "Autonomous Coding & Engineering",
    bullets: [
      "Autonomous web browsing, research & data extraction",
      "Local command execution with human-in-the-loop safety",
      "Self-debugging runtime with automatic error recovery",
    ],
    features: ["Local Python Sandbox", "Browser Automation", "100% Private"],
    to: "/open-source/openclaw",
    stars: "24.1k ★",
    starCount: 24100,
    savings: "Save $1,200 / yr",
    savingsValue: 1200,
    platforms: ["Windows", "Linux"],
    alternativeTo: ["Manus AI", "Devin AI", "MultiOn"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["openclaw"].downloadUrl,
    downloadFilename: "OpenClawCompanion-Setup-x64.exe",
    repoUrl: OPEN_SOURCE_SUBPAGES["openclaw"].repoUrl,
  },
  {
    id: "hermes-agent",
    name: "Hermes Autonomous Reasoning Agent",
    category: "Autonomous Agents",
    tagline: "Open-weights reasoning & tool use kernel built on Nous Hermes 3.",
    license: "Apache 2.0",
    color: "#F59E0B",
    icon: Cpu,
    badge: "Reasoning Core",
    bundle: "Autonomous Coding & Engineering",
    bullets: [
      "Nous Hermes 3 multi-step agentic planning architecture",
      "Structured JSON function calling across local & cloud APIs",
      "Zero telemetry, 100% offline execution capability",
    ],
    features: ["Multi-Step Planning", "Function Calling", "Local & Cloud LLMs"],
    to: "/open-source/hermes-agent",
    stars: "18.9k ★",
    starCount: 18900,
    savings: "Save $600 / yr",
    savingsValue: 600,
    platforms: ["Windows", "macOS", "Linux"],
    alternativeTo: ["ChatGPT Pro", "Claude Enterprise", "AutoGPT"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["hermes-agent"].downloadUrl,
    downloadFilename: "Hermes-Setup.exe",
  },
  {
    id: "jan-ai",
    name: "Jan AI Desktop Studio",
    category: "Local AI & Chat",
    tagline: "100% offline, private ChatGPT alternative for Windows. Run DeepSeek & Llama 3.",
    license: "AGPL-3.0",
    color: "#2FE0C8",
    icon: Sparkles,
    image: janScreenshot,
    badge: "Local AI Suite",
    bundle: "Local Privacy & Offline AI",
    bullets: [
      "Download & run DeepSeek, Llama 3.3, Qwen & Mistral locally",
      "100% offline — zero data leaves your local PC hardware",
      "Built-in OpenAI-compatible local API server (:1337)",
    ],
    features: ["Local GPU/CPU Engine", "Offline Chat", "Zero Telemetry"],
    to: "/open-source/jan-ai",
    stars: "32.5k ★",
    starCount: 32500,
    savings: "Save $300 / yr",
    savingsValue: 300,
    platforms: ["Windows", "macOS", "Linux"],
    alternativeTo: ["ChatGPT Plus", "Claude Pro", "Copilot Pro"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["jan-ai"].downloadUrl,
    downloadFilename: "Jan-Setup-x64.exe",
    featured: true,
  },
  {
    id: "anythingllm",
    name: "AnythingLLM Document & Knowledge AI",
    category: "Local AI & Chat",
    tagline: "Chat with PDFs, Word docs, CSVs, and whole websites privately on Windows.",
    license: "MIT License",
    color: "#8B7CF6",
    icon: FileText,
    image: anythingllmScreenshot,
    badge: "Enterprise RAG",
    bundle: "Business & Growth Automation",
    bullets: [
      "Built-in LanceDB vector database — no cloud vector fees",
      "Multi-document workspaces for Legal, Finance, & Tech",
      "Custom system prompts, agent skills & web scraping",
    ],
    features: ["Built-in Vector DB", "Multi-File RAG", "Zero Subscription"],
    to: "/open-source/anythingllm",
    stars: "35.4k ★",
    starCount: 35400,
    savings: "Save $400 / yr",
    savingsValue: 400,
    platforms: ["Windows", "macOS", "Linux"],
    alternativeTo: ["Chatbase", "CustomGPT", "NotebookLM"],
  },
  {
    id: "pocketbase",
    name: "PocketBase Full-Stack Backend",
    category: "Database & Backend",
    tagline: "Complete SQLite database, real-time subscriptions & auth in a single 32MB file.",
    license: "MIT License",
    color: "#7DD3FC",
    icon: Database,
    image: pocketbaseScreenshot,
    badge: "Full-Stack Server",
    bundle: "Business & Growth Automation",
    bullets: [
      "Embedded SQLite database with full real-time websockets",
      "Built-in user authentication (OAuth2, Email, Passkey)",
      "Instant admin UI dashboard & automatic REST APIs",
    ],
    features: ["Single Executable", "Real-Time DB", "Built-in Admin UI"],
    to: "/open-source/pocketbase",
    stars: "42.8k ★",
    starCount: 42800,
    savings: "Save $300 / yr",
    savingsValue: 300,
    platforms: ["Windows", "macOS", "Linux"],
    alternativeTo: ["Supabase Pro", "Firebase Pro", "Backendless"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["pocketbase"].downloadUrl,
    downloadFilename: "PocketBase-Setup.exe",
    featured: true,
  },
  {
    id: "tuttle",
    name: "Tuttle Time & Productivity Tracker",
    category: "Productivity & Tools",
    tagline: "100% private billable hours & timesheet manager for freelancers & teams.",
    license: "GPL-3.0",
    color: "#3DDC84",
    icon: Timer,
    image: tuttleScreenshot,
    badge: "Productivity Tool",
    bundle: "Business & Growth Automation",
    bullets: [
      "Track billable client hours, tasks, and project timesheets",
      "No employer spying, screenshots, or cloud surveillance",
      "Export timesheets instantly to CSV, Excel, and PDF",
    ],
    features: ["Zero Cloud Spying", "PDF / Excel Export", "Local SQLite DB"],
    to: "/open-source/tuttle",
    stars: "9.8k ★",
    starCount: 9800,
    savings: "Save $180 / yr",
    savingsValue: 180,
    platforms: ["Windows"],
    alternativeTo: ["Toggl Track", "Harvest", "Hubstaff"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["tuttle"].downloadUrl,
    downloadFilename: "Tuttle-Setup.exe",
  },
  {
    id: "upscayl",
    name: "Upscayl AI Image Super-Resolution",
    category: "Video & Creative Media",
    tagline: "Free offline AI image upscaler for Windows. Enhance images up to 16x resolution.",
    license: "AGPL-3.0",
    color: "#EC4899",
    icon: ImageIcon,
    image: upscaylScreenshot,
    badge: "AI Image Engine",
    bundle: "Local Privacy & Offline AI",
    bullets: [
      "Enhance low-resolution photos, graphics, & designs up to 16x",
      "GPU-accelerated local batch processing with Vulkan support",
      "Works 100% offline without uploading images to cloud servers",
    ],
    features: ["16x AI Upscaling", "Vulkan GPU Speed", "No Watermarks"],
    to: "/open-source/upscayl",
    stars: "31.2k ★",
    starCount: 31200,
    savings: "Save $199 / yr",
    savingsValue: 199,
    platforms: ["Windows", "macOS", "Linux"],
    alternativeTo: ["Topaz Gigapixel AI", "Magnific AI"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["upscayl"].downloadUrl,
    downloadFilename: "upscayl-setup.exe",
  },
  {
    id: "kdenlive",
    name: "Kdenlive Professional Video Editor",
    category: "Video & Creative Media",
    tagline: "Free open-source Premiere & CapCut alternative. Multi-track 4K & Whisper AI subtitles.",
    license: "GPL-3.0",
    color: "#3B82F6",
    icon: Video,
    badge: "Open-Source Premiere Alt",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "Built-in OpenAI Whisper speech-to-text auto-captions in 1-click",
      "Multi-track 4K timeline with chroma key & motion tracking",
      "Hardware GPU accelerated 60FPS exports with zero watermarks",
    ],
    features: ["Whisper AI Subtitles", "4K Multi-Track Timeline", "Zero Watermark"],
    to: "/open-source/kdenlive",
    stars: "15.4k ★",
    starCount: 15400,
    savings: "Save $287 / yr",
    savingsValue: 287,
    platforms: ["Windows", "macOS", "Linux"],
    alternativeTo: ["Adobe Premiere Pro", "CapCut Pro", "DaVinci Resolve"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["kdenlive"].downloadUrl,
    downloadFilename: "Kdenlive-Setup.exe",
    featured: true,
  },
  {
    id: "facefusion",
    name: "FaceFusion Next-Gen AI Face Swapper",
    category: "Video & Creative Media",
    tagline: "Industry-standard open-source facial manipulation. 4K face swap & GFPGAN.",
    license: "MIT License",
    color: "#EC4899",
    icon: Smile,
    badge: "AI Face Swap Engine",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "High-fidelity face swapping for 4K video footage and portrait photos",
      "Integrated GFPGAN and CodeFormer AI facial restoration neural nets",
      "100% offline local processing with NVIDIA CUDA GPU acceleration",
    ],
    features: ["GFPGAN 4K Enhancer", "Real-Time Lip-Sync", "100% Local GPU"],
    to: "/open-source/facefusion",
    stars: "28.9k ★",
    starCount: 28900,
    savings: "Save $348 / yr",
    savingsValue: 348,
    platforms: ["Windows", "Linux"],
    alternativeTo: ["HeyGen", "DeepBrain AI", "Synthesia"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["facefusion"].downloadUrl,
    downloadFilename: "FaceFusion-Studio.exe",
  },
  {
    id: "deep-live-cam",
    name: "Deep-Live-Cam Real-Time Webcam Swapper",
    category: "Video & Creative Media",
    tagline: "Live real-time webcam face swapping for OBS, Zoom & Discord with a single photo.",
    license: "GPL-3.0",
    color: "#8B5CF6",
    icon: Camera,
    badge: "Live Webcam Swap",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "Instant 1-photo setup for 3D live facial mesh and tracking",
      "Real-time OBS virtual camera integration for streaming & calls",
      "Ultra-low latency 30+ FPS tracking on consumer PC hardware",
    ],
    features: ["OBS Virtual Cam", "1-Photo Setup", "30+ FPS Real-Time"],
    to: "/open-source/deep-live-cam",
    stars: "41.5k ★",
    starCount: 41500,
    savings: "Save $190 / yr",
    savingsValue: 190,
    platforms: ["Windows", "Linux"],
    alternativeTo: ["ManyCam", "Live3D"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["deep-live-cam"].downloadUrl,
    downloadFilename: "Deep-Live-Cam-Studio.exe",
  },
  {
    id: "shotcut",
    name: "Shotcut 4K Video Editor Workhorse",
    category: "Video & Creative Media",
    tagline: "Lightweight, stable 4K video editor. Universal FFmpeg formats & 3-way color grading.",
    license: "GPL-3.0",
    color: "#10B981",
    icon: Film,
    badge: "Stable 4K Workhorse",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "Native support for hundreds of audio and video formats via FFmpeg",
      "3-way color grading wheels, audio peak visualizers & LUT filters",
      "Lightweight ~85MB installer with zero background bloatware or ads",
    ],
    features: ["Universal Codecs", "Color Wheels", "Zero Watermark"],
    to: "/open-source/shotcut",
    stars: "12.8k ★",
    starCount: 12800,
    savings: "Save $240 / yr",
    savingsValue: 240,
    platforms: ["Windows", "macOS", "Linux"],
    alternativeTo: ["Filmora", "Camtasia", "Vegas Pro"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["shotcut"].downloadUrl,
    downloadFilename: "shotcut-setup.exe",
  },
  {
    id: "audacity",
    name: "Audacity Multi-Track Audio Studio",
    category: "Video & Creative Media",
    tagline: "The world's #1 multi-track audio workstation. 1-click noise reduction & VST3.",
    license: "GPL-3.0",
    color: "#3B82F6",
    icon: Mic,
    badge: "Multi-Track DAW",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "Multi-track live voice recording, editing, and podcast production",
      "1-click AI spectral noise reduction for fan hums and room hiss",
      "Real-time VST3 audio plugin support and lossless 32-bit audio export",
    ],
    features: ["1-Click Noise Removal", "Multi-Track Recording", "VST3 Support"],
    to: "/open-source/audacity",
    stars: "14.2k ★",
    starCount: 14200,
    savings: "Save $287 / yr",
    savingsValue: 287,
    platforms: ["Windows", "macOS", "Linux"],
    alternativeTo: ["Adobe Audition", "Reaper", "Logic Pro"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["audacity"].downloadUrl,
    downloadFilename: "audacity-setup.exe",
  },
  {
    id: "opencut",
    name: "OpenCut Social Video Studio",
    category: "Video & Creative Media",
    tagline: "Modern CapCut alternative for creators. 9:16 vertical presets & magnetic snapping.",
    license: "MIT License",
    color: "#F59E0B",
    icon: Smartphone,
    badge: "Shorts & Reels Editor",
    bundle: "Creative, Video & Media Suite",
    bullets: [
      "Native 9:16 vertical presets optimized for TikTok, Reels & Shorts",
      "Magnetic snapping timeline for fast trimming and split edits",
      "Animated text overlays, sticker presets, and zero watermark exports",
    ],
    features: ["9:16 Vertical Video", "Magnetic Timeline", "Zero Watermark"],
    to: "/open-source/opencut",
    stars: "11.6k ★",
    starCount: 11600,
    savings: "Save $120 / yr",
    savingsValue: 120,
    platforms: ["Windows", "Linux"],
    alternativeTo: ["CapCut Pro", "Canva Video"],
    downloadUrl: OPEN_SOURCE_SUBPAGES["opencut"].downloadUrl,
    downloadFilename: "OpenCut-Studio.exe",
  },
  {
    id: "seo-spider",
    name: "Open SEO Spider & Technical Audit Suite",
    category: "SEO & Web Tools",
    tagline: "Offline technical SEO crawler. Validate JSON-LD schema, Google Sitelinks & 404 links.",
    license: "GPL / MIT",
    color: "#2FE0C8",
    icon: Search,
    badge: "Technical SEO Suite",
    bundle: "Business & Growth Automation",
    bullets: [
      "Deep technical website crawler for 404 broken links, redirects & canonicals",
      "Schema.org JSON-LD validator for Google Rich Results & Sitelinks structure",
      "Core Web Vitals & PageSpeed audit engine with unlimited local crawls",
    ],
    features: ["Schema.org Validator", "Google Sitelinks", "Unlimited Crawls"],
    to: "/open-source/seo-spider",
    stars: "17.3k ★",
    starCount: 17300,
    savings: "Save $259 / yr",
    savingsValue: 259,
    platforms: ["Windows", "Linux"],
    alternativeTo: ["Screaming Frog SEO", "Sitebulb", "Ahrefs Audit"],
  },
];

const BUNDLE_GROUPS = [
  {
    title: "Autonomous Coding & Engineering Suite",
    subtitle:
      "Deploy self-directed AI software engineers and terminal reasoning agents on your desktop.",
    color: "#3B82F6",
    icon: Code2,
    ids: ["openhands", "openclaw", "hermes-agent"],
  },
  {
    title: "Creative, Video & Media Suite",
    subtitle:
      "4K video editing, AI face swapping, live webcam manipulation, multi-track audio, and vertical reels.",
    color: "#EC4899",
    icon: Video,
    ids: ["kdenlive", "facefusion", "deep-live-cam", "shotcut", "audacity", "opencut"],
  },
  {
    title: "Business, Backends & Productivity",
    subtitle:
      "Deploy self-hosted SQLite databases, real-time auth APIs, private document search, and timesheets.",
    color: "#10B981",
    icon: Megaphone,
    ids: ["pocketbase", "anythingllm", "tuttle", "seo-spider"],
  },
  {
    title: "Local Privacy & Offline AI Powerhouse",
    subtitle:
      "Run state-of-the-art LLMs, knowledge base document RAG, and AI upscaling without cloud fees.",
    color: "#8B7CF6",
    icon: Lock,
    ids: ["jan-ai", "anythingllm", "upscayl"],
  },
];

const CATEGORIES = [
  "All Tools",
  "Autonomous Agents",
  "Video & Creative Media",
  "Local AI & Chat",
  "Database & Backend",
  "Productivity & Tools",
  "SEO & Web Tools",
];

const PLATFORMS = ["All OS", "Windows", "macOS", "Linux"] as const;

const SORT_OPTIONS = [
  { label: "Recommended / Featured", value: "featured" },
  { label: "GitHub Stars (High to Low)", value: "stars" },
  { label: "Annual Savings (High to Low)", value: "savings" },
  { label: "Alphabetical (A–Z)", value: "az" },
];

const QUICK_SEARCH_PILLS = [
  { label: "CapCut Alternative", query: "CapCut" },
  { label: "Devin AI Coder", query: "Devin" },
  { label: "Offline Local LLM", query: "DeepSeek" },
  { label: "Whisper Subtitles", query: "Whisper" },
  { label: "Screaming Frog Alt", query: "Screaming Frog" },
  { label: "Single-File Database", query: "SQLite" },
];

export interface OpenSourceSearch {
  q?: string;
  category?: string;
  platform?: string;
  sort?: string;
}

export const Route = createFileRoute("/open-source/")({
  validateSearch: (search: Record<string, unknown>): OpenSourceSearch => {
    return {
      q: typeof search.q === "string" && search.q.trim() ? search.q.trim() : undefined,
      category: typeof search.category === "string" && search.category.trim() ? search.category.trim() : undefined,
      platform: typeof search.platform === "string" && search.platform.trim() ? search.platform.trim() : undefined,
      sort: typeof search.sort === "string" && search.sort.trim() ? search.sort.trim() : undefined,
    };
  },
  head: () => {
    const { meta, links } = buildMeta({
      path: "/open-source",
      title: TITLE,
      description: DESC,
    });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Open Source", path: "/open-source" },
            ]),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            itemListLd(
              SOFTWARE_LIST.map((tool) => ({
                name: tool.name,
                url: tool.to,
                description: tool.tagline,
              })),
              "Curated Open-Source Desktop Software Library",
            ),
          ),
        },
      ],
    };
  },
  component: OpenSourcePage,
});

function OpenSourcePage() {
  const navigate = useNavigate();
  const searchParams = useSearch({ strict: false }) as OpenSourceSearch;

  const [searchQuery, setSearchQuery] = useState(searchParams.q || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.category || "All Tools");
  const [selectedPlatform, setSelectedPlatform] = useState<string>(searchParams.platform || "All OS");
  const [selectedSort, setSelectedSort] = useState(searchParams.sort || "featured");

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync state if URL changes externally
  useEffect(() => {
    if (searchParams.q !== undefined && searchParams.q !== searchQuery) setSearchQuery(searchParams.q);
    if (searchParams.category !== undefined && searchParams.category !== selectedCategory) setSelectedCategory(searchParams.category);
    if (searchParams.platform !== undefined && searchParams.platform !== selectedPlatform) setSelectedPlatform(searchParams.platform);
    if (searchParams.sort !== undefined && searchParams.sort !== selectedSort) setSelectedSort(searchParams.sort);
  }, [searchParams.q, searchParams.category, searchParams.platform, searchParams.sort]);

  // Update URL query parameters seamlessly
  const updateUrl = (newQ: string, newCat: string, newPlat: string, newSort: string) => {
    navigate({
      to: "/open-source",
      search: () => ({
        q: newQ.trim() ? newQ.trim() : undefined,
        category: newCat !== "All Tools" ? newCat : undefined,
        platform: newPlat !== "All OS" ? newPlat : undefined,
        sort: newSort !== "featured" ? newSort : undefined,
      }),
      replace: true,
    });
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    updateUrl(val, selectedCategory, selectedPlatform, selectedSort);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    updateUrl(searchQuery, cat, selectedPlatform, selectedSort);
  };

  const handlePlatformChange = (plat: string) => {
    setSelectedPlatform(plat);
    updateUrl(searchQuery, selectedCategory, plat, selectedSort);
  };

  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
    updateUrl(searchQuery, selectedCategory, selectedPlatform, sort);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Tools");
    setSelectedPlatform("All OS");
    setSelectedSort("featured");
    navigate({ to: "/open-source", search: () => ({}), replace: true });
  };

  // Keyboard shortcut listener ('/' focuses search)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Multi-faceted search & filter logic
  const filteredSoftwares = useMemo(() => {
    return SOFTWARE_LIST.filter((item) => {
      // 1. Text search across Name, Tagline, Category, Alternatives, Features, and Bullets
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inName = item.name.toLowerCase().includes(q);
        const inTagline = item.tagline.toLowerCase().includes(q);
        const inCategory = item.category.toLowerCase().includes(q);
        const inAlternatives = item.alternativeTo.some((alt) => alt.toLowerCase().includes(q));
        const inBullets = item.bullets.some((b) => b.toLowerCase().includes(q));
        const inFeatures = item.features.some((f) => f.toLowerCase().includes(q));
        if (!inName && !inTagline && !inCategory && !inAlternatives && !inBullets && !inFeatures) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== "All Tools" && item.category !== selectedCategory) {
        return false;
      }

      // 3. Platform Filter
      if (selectedPlatform !== "All OS") {
        if (!item.platforms.includes(selectedPlatform as any)) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      // 4. Sorting logic
      if (selectedSort === "stars") {
        return b.starCount - a.starCount;
      }
      if (selectedSort === "savings") {
        return b.savingsValue - a.savingsValue;
      }
      if (selectedSort === "az") {
        return a.name.localeCompare(b.name);
      }
      // "featured" default order
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedPlatform, selectedSort]);

  // Featured flagships
  const featuredItems = useMemo(() => {
    return SOFTWARE_LIST.filter((item) => item.featured);
  }, []);

  const hasActiveFilters = searchQuery.trim() !== "" || selectedCategory !== "All Tools" || selectedPlatform !== "All OS" || selectedSort !== "featured";

  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      {/* ── 1. HERO & INSTANT DISCOVERY STAGE ─────────────────── */}
      <SectionWrapper className="relative overflow-hidden pb-8 pt-8 md:pb-14 md:pt-12">
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-500/15 via-purple-500/10 to-transparent blur-[120px] rounded-full"
        />

        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Open Source", path: "/open-source" },
          ]}
        />

        <div className="mx-auto max-w-[960px] text-center relative z-10">
          <div className="flex items-center justify-center gap-2">
            <ActivePulse size={7} />
            <EyebrowLabel
              text="Open-Source Software Library • 100% Free • Verified Standalone Releases"
              color="var(--cyan)"
            />
          </div>

          <h1 className="reveal-item delay-1 mt-5 font-display text-[34px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[var(--text-primary)] sm:text-[44px] md:text-[56px] lg:text-[62px]">
            Open-Source Software Hub,{" "}
            <GradientText from="#2FE0C8" to="#38BDF8">
              Fully Under Your Command.
            </GradientText>
          </h1>

          <p className="reveal-item delay-2 mx-auto mt-6 max-w-[760px] font-body text-[16px] leading-[1.8] text-[var(--text-secondary)] md:text-[18px]">
            Discover, search, and download production-grade autonomous AI agents, 4K video editors, local offline LLMs, and high-speed backends. No recurring SaaS subscriptions.
          </p>

          {/* Quick Metrics Badges */}
          <div className="reveal-item delay-3 mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <MonoBadge>⚡ 15 Curated Open-Source Tools</MonoBadge>
            <MonoBadge>💰 $14,800+/yr Saved vs Cloud SaaS</MonoBadge>
            <MonoBadge>🔒 100% Offline & Private</MonoBadge>
            <MonoBadge>📜 Permissive MIT & Apache 2.0</MonoBadge>
            <MonoBadge>💻 One-Click Windows Setup</MonoBadge>
          </div>

          {/* ── HERO LIVE DISCOVERY SEARCH BAR ───────────────── */}
          <div className="reveal-item delay-4 mx-auto mt-9 max-w-[780px]">
            <div className="relative flex items-center rounded-2xl border border-cyan-500/30 bg-[#060A14]/90 p-2 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all focus-within:border-cyan-400 focus-within:shadow-[0_0_25px_rgba(47,224,200,0.25)]">
              <Search size={22} className="ml-3 text-cyan-400 shrink-0" aria-hidden="true" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search software, categories, or alternatives (e.g. CapCut, Devin, Whisper, LLM)..."
                aria-label="Search open-source software by name, use case or alternative"
                className="w-full bg-transparent px-4 py-2 font-body text-[15px] text-white placeholder-zinc-500 focus:outline-none"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => handleSearchChange("")}
                  aria-label="Clear search text"
                  className="mr-2 rounded-lg p-1.5 text-zinc-400 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}

              <div className="hidden sm:flex items-center gap-1.5 border-l border-white/10 pl-3 pr-2 font-mono text-[11px] text-zinc-400">
                <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-zinc-300">Press /</kbd>
                <span>to search</span>
              </div>
            </div>

            {/* Quick Search Suggestion Pills */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2">
              <span className="font-mono text-[11px] text-zinc-500">Popular searches:</span>
              {QUICK_SEARCH_PILLS.map((pill) => (
                <button
                  key={pill.label}
                  type="button"
                  onClick={() => handleSearchChange(pill.query)}
                  className={`rounded-full border px-2.5 py-1 font-mono text-[11px] transition ${
                    searchQuery.toLowerCase() === pill.query.toLowerCase()
                      ? "border-cyan-400 bg-cyan-400/20 text-cyan-300"
                      : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-cyan-500/40 hover:text-cyan-300"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 2. FEATURED FLAGSHIP SPOTLIGHT (3 Top Community Leaders) ──── */}
      {!hasActiveFilters && (
        <SectionWrapper className="py-6 md:py-10 bg-gradient-to-b from-transparent via-[#060A14]/40 to-transparent">
          <div className="mx-auto max-w-[1240px]">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <Flame size={18} className="text-amber-400" />
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-amber-300">
                  Featured Community Flagships
                </span>
              </div>
              <span className="font-mono text-[11px] text-zinc-400">
                SWE-Bench Verified • Whisper AI • Local LLMs
              </span>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {featuredItems.slice(0, 3).map((feat) => {
                const Icon = feat.icon;
                return (
                  <GlassCard
                    key={feat.id}
                    glowColor={feat.color}
                    className="relative flex flex-col justify-between overflow-hidden p-6 border-white/15 hover:border-white/30 transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-xl border"
                          style={{
                            background: `${feat.color}15`,
                            borderColor: `${feat.color}40`,
                            boxShadow: `0 0 20px ${feat.color}25`,
                          }}
                        >
                          <Icon size={24} color={feat.color} />
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Star size={13} className="fill-amber-400 text-amber-400" />
                          <span className="font-mono text-[11px] font-bold text-white">
                            {feat.stars}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2">
                        <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[10px] uppercase text-cyan-300 border border-cyan-500/20">
                          {feat.category}
                        </span>
                        <span className="font-mono text-[10px] text-emerald-400">
                          {feat.savings}
                        </span>
                      </div>

                      <h3 className="mt-2.5 font-display text-[19px] font-bold text-white group-hover:text-cyan-300 transition">
                        {feat.name}
                      </h3>

                      <p className="mt-2 font-body text-[13px] leading-[1.65] text-zinc-400">
                        {feat.tagline}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {feat.alternativeTo.slice(0, 2).map((alt) => (
                          <span
                            key={alt}
                            className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10.5px] text-zinc-300"
                          >
                            Alt to {alt}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                      {feat.downloadUrl ? (
                        <a
                          href={feat.downloadUrl}
                          download={feat.downloadFilename || "download.exe"}
                          className="flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-3 py-1.5 font-mono text-[11px] font-bold text-cyan-300 transition hover:bg-cyan-500/25 hover:border-cyan-400"
                        >
                          <Download size={13} />
                          <span>Download</span>
                        </a>
                      ) : (
                        <Link
                          to={feat.to}
                          className="flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-white transition hover:bg-white/10"
                        >
                          <span>Get Software</span>
                        </Link>
                      )}

                      <Link
                        to={feat.to}
                        className="flex items-center gap-1 text-[12px] font-semibold text-zinc-400 hover:text-cyan-300 transition"
                      >
                        <span>Specifications</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* ── 3. SOFTWARE DIRECTORY & DISCOVERY TOOLBAR ────────── */}
      <SectionWrapper className="py-10 md:py-16">
        <div className="mx-auto max-w-[1240px]" id="directory">
          {/* Header & Controls Bar */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <EyebrowLabel text="Browse & Filter" color="var(--purple)" />
                <h2 className="mt-2 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
                  Explore All Open Source Applications
                </h2>
                <p className="mt-1 font-body text-[14px] text-[var(--text-secondary)]">
                  Filter by category, target operating system, or community ratings.
                </p>
              </div>

              {/* Controls: Platform & Sort dropdowns */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Platform Pill Toggle */}
                <div className="flex items-center rounded-xl border border-white/10 bg-black/40 p-1">
                  <Laptop size={14} className="ml-2 mr-1 text-zinc-400" />
                  {PLATFORMS.map((plat) => (
                    <button
                      key={plat}
                      type="button"
                      onClick={() => handlePlatformChange(plat)}
                      className={`rounded-lg px-2.5 py-1 font-mono text-[11.5px] transition ${
                        selectedPlatform === plat
                          ? "bg-white/15 text-white shadow-sm font-semibold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {plat}
                    </button>
                  ))}
                </div>

                {/* Sort Dropdown */}
                <div className="relative flex items-center">
                  <SlidersHorizontal size={14} className="absolute left-3 pointer-events-none text-zinc-400" />
                  <select
                    value={selectedSort}
                    onChange={(e) => handleSortChange(e.target.value)}
                    aria-label="Sort software list"
                    className="appearance-none rounded-xl border border-white/10 bg-[#060A14] py-1.5 pl-8 pr-8 font-mono text-[12px] text-zinc-200 focus:border-cyan-400 focus:outline-none"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        Sort: {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 border-y border-white/10 py-3">
              {CATEGORIES.map((cat) => {
                const count =
                  cat === "All Tools"
                    ? SOFTWARE_LIST.length
                    : SOFTWARE_LIST.filter((s) => s.category === cat).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 font-display text-[12px] transition-all ${
                      selectedCategory === cat
                        ? "border-[var(--cyan)] bg-[var(--cyan)]/15 text-[var(--cyan)] shadow-[0_0_16px_rgba(47,224,200,0.25)] font-semibold"
                        : "border-white/10 bg-white/[0.03] text-[var(--text-secondary)] hover:border-white/20 hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="rounded-full bg-white/10 px-1.5 py-0.2 font-mono text-[10px] text-zinc-300">
                      {count}
                    </span>
                  </button>
                );
              })}

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="ml-auto flex items-center gap-1 text-[12px] font-mono text-zinc-400 hover:text-cyan-300 transition"
                >
                  <RotateCcw size={12} />
                  <span>Reset filters</span>
                </button>
              )}
            </div>

            {/* Results counter indicator */}
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>
                Showing <strong className="text-white">{filteredSoftwares.length}</strong> of {SOFTWARE_LIST.length} software packages
              </span>
              {searchQuery && (
                <span>
                  Filter matching: <span className="text-cyan-300">&ldquo;{searchQuery}&rdquo;</span>
                </span>
              )}
            </div>
          </div>

          {/* ── SOFTWARE PRODUCT CARDS GRID ──────────────────── */}
          {filteredSoftwares.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSoftwares.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.id} className="group block h-full">
                    <ThreeDTiltCard
                      glowColor={s.color}
                      className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-[#060A12]/95 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-white/30"
                    >
                      {/* Top Bar: Icon, Category, Stars & OS Indicators */}
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
                            style={{
                              background: `${s.color}15`,
                              borderColor: `${s.color}50`,
                              boxShadow: `0 0 24px ${s.color}25`,
                            }}
                          >
                            <Icon size={24} color={s.color} />
                          </div>

                          <div className="flex flex-col items-end gap-1.5">
                            {/* Stars & License */}
                            <div className="flex items-center gap-1.5">
                              <span className="flex items-center gap-1 rounded bg-amber-400/10 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-300 border border-amber-400/20">
                                <Star size={11} className="fill-amber-400 text-amber-400" />
                                <span>{s.stars}</span>
                              </span>
                              <span
                                className="rounded-full border px-2 py-0.5 font-mono text-[9.5px] font-semibold uppercase tracking-[0.14em]"
                                style={{
                                  color: s.color,
                                  borderColor: `${s.color}50`,
                                  background: `${s.color}15`,
                                }}
                              >
                                {s.license}
                              </span>
                            </div>

                            {/* OS Platform Mini Badges */}
                            <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                              {s.platforms.map((p) => (
                                <span key={p} className="rounded bg-white/5 px-1.5 py-0.2 border border-white/5">
                                  {p}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Name & Tagline */}
                        <Link to={s.to} className="block mt-4 focus:outline-none">
                          <h3 className="font-display text-[18px] font-bold leading-snug text-white transition group-hover:text-[var(--cyan)]">
                            {s.name}
                          </h3>
                        </Link>

                        {/* Alternative To Chip */}
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {s.alternativeTo.slice(0, 2).map((alt) => (
                            <span
                              key={alt}
                              className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300"
                            >
                              Free Alt to {alt}
                            </span>
                          ))}
                        </div>

                        <p className="mt-2.5 font-body text-[13px] leading-[1.65] text-zinc-400">
                          {s.tagline}
                        </p>

                        {/* Visual Preview Screenshot / Product Studio */}
                        <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#03060C] aspect-[16/9] relative group-hover:border-white/20 transition">
                          {s.image ? (
                            <img
                              src={s.image}
                              alt={`${s.name} interface preview`}
                              loading="lazy"
                              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full w-full flex-col justify-between p-4 bg-gradient-to-br from-[#060D1E] to-[#02050A]">
                              <div className="flex items-center justify-between text-zinc-500 font-mono text-[10px]">
                                <div className="flex items-center gap-1.5">
                                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                                  <span className="h-2 w-2 rounded-full bg-green-400/70" />
                                </div>
                                <span>{s.license}</span>
                              </div>
                              <div className="flex flex-col items-center justify-center my-auto text-center">
                                <Icon size={32} style={{ color: s.color }} className="mb-2 opacity-80" />
                                <span className="font-display text-[13px] font-bold text-zinc-200">
                                  {s.name.split(" — ")[0].split(" (")[0]}
                                </span>
                                <span className="font-mono text-[10px] text-zinc-400 mt-0.5">
                                  {s.features.join(" • ")}
                                </span>
                              </div>
                              <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[10px] font-mono text-zinc-400">
                                <span>100% Offline Safe</span>
                                <span className="text-emerald-400 font-semibold">{s.savings}</span>
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/90 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-2 left-2.5 flex items-center gap-1.5 font-mono text-[10px] text-zinc-300 pointer-events-none">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Verified Standalone App</span>
                          </div>
                        </div>

                        {/* Feature Checklist */}
                        <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                          {s.bullets.map((b, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 font-body text-[12px] leading-[1.6] text-zinc-300"
                            >
                              <CheckCircle2
                                size={13}
                                className="mt-0.5 shrink-0"
                                style={{ color: s.color }}
                              />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Dual Action Footer */}
                      <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between gap-3">
                        {s.downloadUrl ? (
                          <a
                            href={s.downloadUrl}
                            download={s.downloadFilename || "download.exe"}
                            className="flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-cyan-500/15 px-3 py-1.5 font-mono text-[11px] font-bold text-cyan-300 transition-all hover:bg-cyan-500/25 hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(47,224,200,0.3)]"
                          >
                            <Download size={13} />
                            <span>Download</span>
                          </a>
                        ) : (
                          <Link
                            to={s.to}
                            className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-zinc-200 transition hover:bg-white/10"
                          >
                            <span>Get Software</span>
                          </Link>
                        )}

                        <div className="flex items-center gap-2">
                          {s.repoUrl && (
                            <a
                              href={s.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="View GitHub Repository"
                              className="rounded-lg border border-white/10 p-1.5 text-zinc-400 hover:border-white/30 hover:text-white transition"
                            >
                              <Code2 size={14} />
                            </a>
                          )}
                          <Link
                            to={s.to}
                            className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white group/btn"
                          >
                            <span>Details</span>
                            <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </ThreeDTiltCard>
                  </div>
                );
              })}
            </div>
          ) : (
            /* ── EMPTY SEARCH STATE ─────────────────────────── */
            <div className="mt-12 rounded-2xl border border-white/10 bg-[#060A14] p-10 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400">
                <Search size={26} />
              </div>
              <h3 className="mt-4 font-display text-[20px] font-bold text-white">
                No software matching your search criteria
              </h3>
              <p className="mx-auto mt-2 max-w-[480px] font-body text-[14px] text-zinc-400">
                No tools matched &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;. Try clearing your search or exploring one of our popular categories below.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <CyanButton size="sm" onClick={resetFilters} icon={<RotateCcw size={14} />}>
                  Reset All Filters
                </CyanButton>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("Autonomous Agents")}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-display text-[13px] text-white hover:bg-white/10 transition"
                >
                  Autonomous Agents (3)
                </button>
                <button
                  type="button"
                  onClick={() => handleCategoryChange("Video & Creative Media")}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 font-display text-[13px] text-white hover:bg-white/10 transition"
                >
                  Video & Media (7)
                </button>
              </div>
            </div>
          )}
        </div>
      </SectionWrapper>

      {/* ── 4. CURATED BUNDLE PACKS SHOWCASE ─────────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)] py-12 md:py-16 border-t border-white/10">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-code text-[11px] uppercase tracking-[0.2em] text-[var(--cyan)]">
                Curated Stacks
              </span>
              <h2 className="mt-2 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
                Complete Software Bundles
              </h2>
            </div>
            <p className="mt-2 max-w-[480px] font-body text-[14px] leading-[1.6] text-[var(--text-secondary)] md:mt-0">
              Pre-configured software clusters tailored for Developers, Sales Automation, and Privacy-Focused AI.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {BUNDLE_GROUPS.map((b) => {
              const Icon = b.icon;
              const bundleSoftwares = SOFTWARE_LIST.filter((s) => b.ids.includes(s.id));
              return (
                <GlassCard
                  key={b.title}
                  glowColor={b.color}
                  className="flex h-full flex-col justify-between p-6 transition-all duration-300 hover:border-white/20"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border"
                        style={{
                          background: `${b.color}15`,
                          borderColor: `${b.color}35`,
                          boxShadow: `0 0 20px ${b.color}25`,
                        }}
                      >
                        <Icon size={22} color={b.color} />
                      </div>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                        {bundleSoftwares.length} Tools
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-[17px] font-bold text-[var(--text-primary)]">
                      {b.title}
                    </h3>
                    <p className="mt-2 font-body text-[12.5px] leading-[1.65] text-[var(--text-secondary)]">
                      {b.subtitle}
                    </p>

                    {/* Included soft list */}
                    <div className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
                      {bundleSoftwares.map((item) => (
                        <Link
                          key={item.id}
                          to={item.to}
                          className="group/item flex items-center justify-between rounded-lg border border-transparent bg-white/[0.03] p-2 transition hover:border-white/10 hover:bg-white/[0.06]"
                        >
                          <div className="flex items-center gap-2">
                            <item.icon size={14} color={item.color} />
                            <span className="font-display text-[12px] font-semibold text-[var(--text-primary)] group-hover/item:text-[var(--cyan)]">
                              {item.name.split(" — ")[0].split(" (")[0]}
                            </span>
                          </div>
                          <ArrowRight
                            size={12}
                            className="text-[var(--text-tertiary)] transition-transform group-hover/item:translate-x-1 group-hover/item:text-[var(--cyan)]"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => {
                        handleCategoryChange("All Tools");
                        const firstId = b.ids[0];
                        const tool = SOFTWARE_LIST.find((s) => s.id === firstId);
                        if (tool) handleSearchChange(tool.name.split(" ")[0]);
                        const el = document.getElementById("directory");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full text-center font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--cyan)] hover:underline"
                    >
                      Filter this cluster →
                    </button>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 5. MASTER VALUE & SAVINGS COMPARISON TABLE ───────────── */}
      <SectionWrapper className="py-14 md:py-20">
        <div className="mx-auto max-w-[1240px]">
          <MasterOpenSourceValueTable />
        </div>
      </SectionWrapper>

      {/* ── 6. SOURCE CODE & COMMERCIAL LICENCE ───────────────── */}
      <SectionWrapper className="bg-[var(--bg-surface)] py-14 md:py-20 border-t border-white/10">
        <div className="mx-auto grid max-w-[1140px] items-center gap-10 lg:grid-cols-[55%_45%]">
          <div>
            <div className="flex items-center gap-2">
              <Key size={16} color="var(--purple)" />
              <EyebrowLabel text="Source Code Commercial Licence" color="var(--purple)" />
            </div>

            <h2 className="mt-4 font-display text-[28px] font-extrabold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
              Own the Full Source Code.{" "}
              <GradientText from="#8B7CF6" to="#2FE0C8">
                Adapt, Extend & Automate.
              </GradientText>
            </h2>

            <p className="mt-4 font-body text-[15.5px] leading-[1.85] text-[var(--text-secondary)]">
              Beyond individual standalone tools, the Source Code Licence grants your organization complete
              ownership of the entire DIGI BIZ OS desktop codebase and multi-agent orchestration kernel.
              Audit every line, add custom skills, connect private models, or tailor workflows for internal operations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/checkout" search={{ plan: "source_code" }}>
                <CyanButton size="lg" icon={<Zap size={16} />}>
                  Buy Full Source Code — £199
                </CyanButton>
              </Link>
              <Link to="/pricing">
                <GhostButton size="lg" tone="139,124,246">
                  Compare All Licences
                </GhostButton>
              </Link>
            </div>
          </div>

          <GlassCard glowColor="var(--purple)" className="p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--cyan)]">
                  Developer & Enterprise Licence
                </span>
                <h3 className="mt-1 font-display text-[22px] font-bold text-[var(--text-primary)]">
                  £199 <span className="font-body text-[13px] font-normal text-[var(--text-tertiary)]">/ one-time lifetime</span>
                </h3>
              </div>
              <ShieldCheck size={32} color="#8B7CF6" />
            </div>

            <ul className="mt-5 space-y-3.5">
              {[
                "100% complete TypeScript, React, and Python backend orchestrator source code",
                "Full developer access to customize UI screens, models and workflow engines",
                "Deploy across your organization or create bespoke client solutions with zero royalties",
                "12 months of core updates and security patches included",
                "Direct developer documentation and custom skill creation guides",
              ].map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 font-body text-[13.5px] leading-[1.65] text-[var(--text-secondary)]"
                >
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--cyan)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* ── 7. HOW IT INTEGRATES WITH DIGI BIZ OS ───────────────── */}
      <SectionWrapper className="py-14 md:py-20">
        <div className="mx-auto max-w-[1140px]">
          <div className="text-center">
            <EyebrowLabel text="Integration Power" color="var(--cyan)" />
            <h2 className="mt-3 font-display text-[26px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[36px]">
              How DIGI BIZ OS Connects To Open Source
            </h2>
            <p className="mx-auto mt-3 max-w-[620px] font-body text-[15px] text-[var(--text-secondary)]">
              Your voice-driven desktop OS speaks directly to your locally hosted open-source services.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Terminal,
                title: "Voice-to-CLI",
                desc: "Command your local terminal and OpenHands/OpenClaw agents directly using natural voice instructions.",
                color: "#3B82F6",
              },
              {
                icon: Database,
                title: "Local DB Storage",
                desc: "All agent memories, logs, and workflow results are stored in your own local PocketBase / SQLite database.",
                color: "#7DD3FC",
              },
              {
                icon: HardDrive,
                title: "Private Vector Search",
                desc: "AnythingLLM LanceDB integration allows agents to search across gigs of internal documents in milliseconds.",
                color: "#8B7CF6",
              },
              {
                icon: Sparkles,
                title: "Offline AI & Upscaling",
                desc: "Run 100% private local LLMs and AI image upscaling natively on your Windows PC hardware with Jan AI and Upscayl.",
                color: "#EC4899",
              },
            ].map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <GlassCard key={i} glowColor={item.color} className="p-5">
                  <ItemIcon size={22} color={item.color} />
                  <h3 className="mt-3 font-display text-[16px] font-bold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-body text-[13px] leading-[1.65] text-[var(--text-secondary)]">
                    {item.desc}
                  </p>
                </GlassCard>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body text-[15px] text-[var(--text-secondary)]">
              Need custom open-source integrations or a tailored enterprise deployment?{" "}
              <Link to="/contact" className="font-semibold text-[var(--cyan)] hover:underline">
                Contact our engineering team →
              </Link>
            </p>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
