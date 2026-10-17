import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  Download,
  Copy,
  Check,
  Gift,
  MessageCircle,
  X,
  Youtube,
  Lock,
  CheckCircle2,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import CyanButton from "@/components/CyanButton";
import MonoBadge from "@/components/MonoBadge";
import { createTrial } from "@/lib/orders.functions";

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SourceOption {
  id: string;
  label: string;
  category: "ai" | "search" | "social" | "direct";
  emoji: string;
}

const SOURCE_GROUPS = [
  { key: "ai", label: "AI Platforms" },
  { key: "search", label: "Search Engines" },
  { key: "social", label: "Social Media" },
  { key: "direct", label: "Direct / Referral" },
] as const;

const SOURCE_OPTIONS: SourceOption[] = [
  // AI
  { id: "chatgpt", label: "ChatGPT", category: "ai", emoji: "🤖" },
  { id: "gemini", label: "Gemini", category: "ai", emoji: "✨" },
  { id: "claude", label: "Claude", category: "ai", emoji: "🧠" },
  { id: "perplexity", label: "Perplexity", category: "ai", emoji: "🔎" },
  { id: "grok", label: "Grok", category: "ai", emoji: "⚡" },
  { id: "deepseek", label: "DeepSeek", category: "ai", emoji: "🌊" },
  { id: "copilot", label: "Microsoft Copilot", category: "ai", emoji: "🧭" },
  { id: "google_ai_overview", label: "Google AI / AI Overview", category: "ai", emoji: "🧬" },
  { id: "other_ai", label: "Other AI", category: "ai", emoji: "🤖" },
  // Search
  { id: "google", label: "Google Search", category: "search", emoji: "🔍" },
  { id: "google_ads", label: "Google Ads", category: "search", emoji: "🅖" },
  { id: "bing", label: "Bing Search", category: "search", emoji: "🔍" },
  { id: "yahoo", label: "Yahoo Search", category: "search", emoji: "🔍" },
  { id: "other_search", label: "Other Search", category: "search", emoji: "🔍" },
  // Social
  { id: "facebook", label: "Facebook", category: "social", emoji: "📘" },
  { id: "instagram", label: "Instagram", category: "social", emoji: "📷" },
  { id: "tiktok", label: "TikTok", category: "social", emoji: "🎵" },
  { id: "youtube", label: "YouTube", category: "social", emoji: "▶️" },
  { id: "linkedin", label: "LinkedIn", category: "social", emoji: "💼" },
  { id: "twitter", label: "X (Twitter)", category: "social", emoji: "𝕏" },
  // Direct
  { id: "whatsapp", label: "WhatsApp", category: "direct", emoji: "💬" },
  { id: "referral", label: "Referral / Friend", category: "direct", emoji: "👥" },
  { id: "existing_client", label: "Existing Client", category: "direct", emoji: "⭐" },
  { id: "direct", label: "Direct Visit", category: "direct", emoji: "🌐" },
  { id: "other", label: "Other", category: "direct", emoji: "•" },
];

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@Digiformationltd";
const YOUTUBE_SUBSCRIBE_URL = "https://www.youtube.com/@Digiformationltd?sub_confirmation=1";
const WHATSAPP_NUMBER = "923164467464";

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const trialFn = useServerFn(createTrial);
  const [step, setStep] = useState<"form" | "subscribe" | "success">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whereFound, setWhereFound] = useState("");
  const [otherWhereFound, setOtherWhereFound] = useState("");
  const [hasVisitedChannel, setHasVisitedChannel] = useState(false);
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const m = useMutation({
    mutationFn: (vars: {
      customerName: string;
      email: string;
      whereFound: string;
      subscribed: true;
    }) => trialFn({ data: vars }),
    onSuccess: () => {
      setStep("success");
    },
  });

  const result = m.data;

  // Compulsory validation: Name >= 2 chars, valid email, and Where Did You Find Us selected!
  const validSource =
    whereFound !== "" && (whereFound !== "other" || otherWhereFound.trim().length > 0);
  const validForm = name.trim().length >= 2 && /\S+@\S+\.\S+/.test(email) && validSource;

  const resolvedSource =
    whereFound === "other"
      ? otherWhereFound.trim()
        ? `Other: ${otherWhereFound.trim()}`
        : "Other"
      : SOURCE_OPTIONS.find((o) => o.id === whereFound)?.label || whereFound;

  // Prepare prefilled WhatsApp message to our number 0316 4467464 (+923164467464)
  const waMessage = `Hi DIGIFORMATION team! I want to use your free trial.\n\n👤 Name: ${name.trim()}\n📧 Email: ${email.trim()}\n🌐 Where did you find us?: ${resolvedSource}\n\nPlease issue my 3-day free trial key.`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  const handleSubscribeClick = () => {
    window.open(YOUTUBE_SUBSCRIBE_URL, "_blank", "noopener,noreferrer");
    setHasVisitedChannel(true);
  };

  const handleProceedToWhatsApp = () => {
    if (!validForm) return;

    // Open WhatsApp directly with prefilled message
    try {
      window.open(waUrl, "_blank");
    } catch {
      // fallback in case of popup blockers
    }

    // Record lead in database & generate trial license key
    m.mutate({
      customerName: name.trim(),
      email: email.trim(),
      whereFound: resolvedSource,
      subscribed: true,
    });
  };

  const copyKey = () => {
    if (!result?.licenseKey) return;
    void navigator.clipboard.writeText(result.licenseKey).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-[500px] max-h-[92vh] overflow-y-auto rounded-3xl border border-emerald-500/40 bg-[#0B0914] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(52,211,153,0.2)]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* ──────── STEP 1: FORM (Name, Email, Where did you find us) ──────── */}
        {step === "form" && (
          <div className="grid gap-3.5">
            <div className="text-left">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <MonoBadge color="var(--success)">
                  <Gift size={12} className="mr-1 inline" /> Free · 3 Days
                </MonoBadge>
                <MonoBadge color="var(--text-secondary)">Instant Activation</MonoBadge>
              </div>
              <h3 className="font-display text-[22px] font-bold text-[var(--text-primary)]">
                Claim Your 3-Day Free Trial
              </h3>
              <p className="mt-1 font-body text-[13px] text-[var(--text-secondary)]">
                Fill in your details below. You will receive your 72-hour trial key directly on WhatsApp.
              </p>
            </div>

            <Field label="Your name *">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ali Khan"
                className={inputCls}
              />
            </Field>

            <Field label="Email *">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="you@example.com"
                className={inputCls}
              />
            </Field>

            <Field label="Where did you find us? *">
              <select
                value={whereFound}
                onChange={(e) => setWhereFound(e.target.value)}
                className={`${inputCls} bg-[#141026] text-white cursor-pointer`}
              >
                <option value="" disabled className="text-zinc-500">
                  Select where you found us… (Required)
                </option>
                {SOURCE_GROUPS.map((g) => {
                  const items = SOURCE_OPTIONS.filter((o) => o.category === g.key);
                  return (
                    <optgroup
                      key={g.key}
                      label={g.label}
                      className="bg-[#1a1438] text-emerald-400 font-semibold py-1"
                    >
                      {items.map((opt) => (
                        <option
                          key={opt.id}
                          value={opt.id}
                          className="bg-[#0B0914] text-white py-1.5"
                        >
                          {opt.emoji} {opt.label}
                        </option>
                      ))}
                    </optgroup>
                  );
                })}
              </select>
              {whereFound === "other" && (
                <input
                  type="text"
                  value={otherWhereFound}
                  onChange={(e) => setOtherWhereFound(e.target.value)}
                  placeholder="Please specify where you found us…"
                  className={`${inputCls} mt-2`}
                  autoFocus
                />
              )}
            </Field>

            <CyanButton
              size="lg"
              tone="34,197,94"
              className="mt-3 w-full font-bold disabled:opacity-40"
              onClick={() => {
                if (validForm) setStep("subscribe");
              }}
              disabled={!validForm}
            >
              Continue to Unlock 3-Day Trial <ArrowRight size={17} className="ml-1.5 inline" />
            </CyanButton>

            <p className="text-center font-mono text-[11px] text-[var(--text-muted)]">
              No credit card required · 100% Free 3-Day License
            </p>
          </div>
        )}

        {/* ──────── STEP 2: YOUTUBE SUBSCRIBE GATE ──────── */}
        {step === "subscribe" && (
          <div className="grid gap-4 text-center animate-in fade-in duration-200">
            {/* YouTube Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/10 border border-red-500/30 text-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              <Youtube size={32} />
            </div>

            <div>
              <h3 className="font-display text-[22px] font-bold text-white">
                Subscribe to Unlock 3-Day Trial
              </h3>
              <p className="mt-1.5 font-body text-[13px] leading-relaxed text-zinc-300">
                To support our open-source software and claim your 72-hour trial key on WhatsApp, please subscribe to <strong className="text-white">Digiformation Ltd</strong> on YouTube.
              </p>
            </div>

            {/* 2-Step Progress Box */}
            <div className="mt-2 space-y-2.5 text-left">
              {/* Step 1: Subscribe on YouTube */}
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                    1
                  </span>
                  <div>
                    <p className="font-display text-xs font-bold text-white">Subscribe on YouTube</p>
                    <p className="text-[11px] text-zinc-400">Digiformation Ltd (@Digiformationltd)</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSubscribeClick}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-red-600 px-3.5 py-1.5 font-mono text-xs font-bold text-white shadow-md hover:bg-red-500 transition cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ExternalLink size={12} />
                </button>
              </div>

              {/* Step 2: Unlock WhatsApp Chat */}
              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white transition ${
                      hasVisitedChannel ? "bg-emerald-600" : "bg-zinc-700"
                    }`}
                  >
                    2
                  </span>
                  <div>
                    <p className="font-display text-xs font-bold text-white">Unlock WhatsApp Trial Key</p>
                    <p className="text-[11px] text-zinc-400">+92 316 4467464 (Instant Support)</p>
                  </div>
                </div>
                {hasVisitedChannel ? (
                  <span className="flex items-center gap-1 font-mono text-xs font-bold text-emerald-400">
                    <CheckCircle2 size={14} /> Unlocked
                  </span>
                ) : (
                  <Lock size={15} className="text-zinc-500" />
                )}
              </div>
            </div>

            {m.isError && (
              <p className="font-body text-[12.5px] text-[var(--danger,#f87171)]">
                {(m.error as Error)?.message || "Something went wrong. Please try again."}
              </p>
            )}

            {/* Action Button */}
            <div className="mt-2 space-y-2">
              {!hasVisitedChannel ? (
                <button
                  type="button"
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 font-mono text-sm font-bold bg-white/10 text-zinc-500 cursor-not-allowed border border-white/5"
                >
                  <Lock size={16} />
                  <span>Subscribe Above First to Unlock</span>
                </button>
              ) : (
                <CyanButton
                  size="lg"
                  tone="34,197,94"
                  className="w-full font-bold shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                  onClick={handleProceedToWhatsApp}
                  disabled={m.isPending}
                >
                  {m.isPending ? (
                    "Connecting to WhatsApp…"
                  ) : (
                    <>
                      <MessageCircle size={18} className="mr-2 inline" /> I Subscribed — Continue to WhatsApp
                    </>
                  )}
                </CyanButton>
              )}

              <button
                type="button"
                onClick={() => setStep("form")}
                className="inline-flex items-center gap-1 text-[12px] font-mono text-zinc-400 hover:text-white transition cursor-pointer pt-1"
              >
                <ArrowLeft size={13} /> Edit My Details
              </button>
            </div>
          </div>
        )}

        {/* ──────── STEP 3: SUCCESS & INSTANT KEY ──────── */}
        {step === "success" && (
          <div className="grid gap-5 text-center py-2 animate-in fade-in duration-200">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--success)]/15">
              <Check size={28} className="text-[var(--success)]" />
            </div>
            <div>
              <p className="font-display text-[22px] font-bold text-[var(--text-primary)]">
                {result?.reused ? "Welcome Back!" : "Trial Request Submitted!"}
              </p>
              <p className="mt-1 font-body text-[13.5px] text-[var(--text-secondary)]">
                We've forwarded your details to our official WhatsApp team (+92 316 4467464).
              </p>
            </div>

            <div className="mx-auto w-full">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <CyanButton size="lg" tone="34,197,94" className="w-full font-bold">
                  <MessageCircle size={18} className="mr-2 inline" /> Open WhatsApp Chat (+92 316 4467464)
                </CyanButton>
              </a>
              <p className="mt-2 text-[11px] font-mono text-[var(--text-muted)]">
                Pre-filled message: "I want to use your free trial."
              </p>
            </div>

            {/* Instant Key Display */}
            {result?.licenseKey && (
              <div className="mx-auto w-full rounded-[var(--r-lg)] border border-[var(--border-glass)] bg-black/40 p-4 text-left">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  Your Instant 3-Day Trial Key:
                </p>
                <div className="flex items-center gap-2 rounded-[var(--r-md)] border border-[var(--success-border,rgba(52,211,153,0.4))] bg-black/60 px-3.5 py-2.5">
                  <code className="flex-1 truncate font-mono text-[14px] text-[var(--success)]">
                    {result.licenseKey}
                  </code>
                  <button
                    onClick={copyKey}
                    title="Copy Key"
                    className="shrink-0 rounded p-1 text-[var(--text-secondary)] transition hover:text-[var(--success)] cursor-pointer"
                  >
                    {copied ? <Check size={16} className="text-[var(--success)]" /> : <Copy size={16} />}
                  </button>
                </div>

                <a href={result.downloadUrl} className="mt-3 block">
                  <CyanButton size="md" tone="52,211,153" className="w-full text-[13px] font-bold">
                    <Download size={15} className="mr-1.5 inline" /> Download DIGI BIZ OS (.exe)
                  </CyanButton>
                </a>
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              className="mx-auto font-body text-[12.5px] text-[var(--text-muted)] underline-offset-2 hover:underline cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-[var(--r-md)] border border-[var(--border-glass)] bg-[var(--bg-glass)] px-4 py-3 font-body text-[14px] text-[var(--text-primary)] outline-none transition focus:border-[var(--success-border,rgba(52,211,153,0.5))]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-left">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
        {label}
      </span>
      {children}
    </label>
  );
}
