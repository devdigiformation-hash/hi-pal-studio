import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Download, Copy, Check, Gift, ArrowRight, MessageCircle, X } from "lucide-react";
import CyanButton from "@/components/CyanButton";
import EyebrowLabel from "@/components/EyebrowLabel";
import MonoBadge from "@/components/MonoBadge";
import { createTrial } from "@/lib/orders.functions";

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialModal({ isOpen, onClose }: TrialModalProps) {
  const trialFn = useServerFn(createTrial);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);
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
    mutationFn: (vars: { customerName: string; email: string; whatsapp: string; subscribed: true }) =>
      trialFn({ data: vars }),
    onSuccess: () => setSubmitted(true),
  });

  const result = m.data;

  // WhatsApp is strictly mandatory (must have at least 7 digits)
  const validPhone = whatsapp.trim().replace(/\D/g, "").length >= 7;
  const validForm = name.trim().length >= 2 && /\S+@\S+\.\S+/.test(email) && validPhone;

  // Prepare prefilled WhatsApp message to our number 0316 4467464 (+923164467464)
  const waMessage = `Hi DIGIFORMATION team! I want to use your free trial.\n\n👤 Name: ${name.trim()}\n📧 Email: ${email.trim()}\n📱 WhatsApp: ${whatsapp.trim()}\n\nPlease issue my 48-hour free trial key.`;
  const waUrl = `https://wa.me/923164467464?text=${encodeURIComponent(waMessage)}`;

  const handleSubmitLead = () => {
    if (!validForm) return;

    // Immediately open WhatsApp so the lead and message arrives directly to our chat
    try {
      window.open(waUrl, "_blank");
    } catch {
      // fallback in case of popup blockers
    }

    // Record lead into database and generate license key
    m.mutate({
      customerName: name.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-3xl border border-emerald-500/40 bg-[#0B0914] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_50px_rgba(52,211,153,0.2)]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 hover:bg-white/10 hover:text-white transition cursor-pointer"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div className="grid gap-4">
            <div className="text-left">
              <div className="mb-2.5 flex flex-wrap items-center gap-2">
                <MonoBadge color="var(--success)">
                  <Gift size={12} className="mr-1 inline" /> Free · 48 Hours
                </MonoBadge>
                <MonoBadge color="var(--text-secondary)">Instant Activation</MonoBadge>
              </div>
              <h3 className="font-display text-[22px] font-bold text-[var(--text-primary)]">
                Claim Your 48-Hour Free Trial
              </h3>
              <p className="mt-1 font-body text-[13.5px] text-[var(--text-secondary)]">
                Enter your details to receive your trial license key directly on WhatsApp.
              </p>
            </div>

            <Field label="Your name">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Ali Khan"
                className={inputCls}
              />
            </Field>

            <Field label="Email">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="you@example.com"
                className={inputCls}
              />
            </Field>

            <Field label="WhatsApp number">
              <input
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="e.g. 0316 4467464 or +92 316 4467464"
                className={inputCls}
              />
              {!validPhone && whatsapp.length > 0 && (
                <p className="mt-1.5 font-mono text-[11.5px] text-[var(--amber)]">
                  Please enter a valid WhatsApp number (minimum 7 digits).
                </p>
              )}
            </Field>

            {m.isError && (
              <p className="font-body text-[12.5px] text-[var(--danger,#f87171)]">
                {(m.error as Error)?.message || "Something went wrong. Please try again."}
              </p>
            )}

            <CyanButton
              size="lg"
              tone="34,197,94"
              className="mt-2 w-full font-bold disabled:opacity-40"
              onClick={handleSubmitLead}
              disabled={!validForm || m.isPending}
            >
              {m.isPending ? (
                "Connecting to WhatsApp…"
              ) : (
                <>
                  <MessageCircle size={18} className="mr-2 inline" /> Get Free Trial on WhatsApp
                </>
              )}
            </CyanButton>

            <p className="text-center font-mono text-[11px] text-[var(--text-muted)]">
              No credit card required · Instant WhatsApp verification
            </p>
          </div>
        ) : (
          <div className="grid gap-5 text-center py-2">
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
                <CyanButton size="lg" tone="34,197,94" className="w-full">
                  <MessageCircle size={18} className="mr-2 inline" /> Chat on WhatsApp (0316 4467464)
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
                  Your Instant 48-Hour Trial Key:
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
                  <CyanButton size="md" tone="52,211,153" className="w-full text-[13px]">
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
