import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Copy, Check, Gift, ArrowRight, MessageCircle } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import CyanButton from "@/components/CyanButton";
import EyebrowLabel from "@/components/EyebrowLabel";
import MonoBadge from "@/components/MonoBadge";
import { createTrial } from "@/lib/orders.functions";

type Step = "cta" | "form" | "done";

export default function TrialSection() {
  const trialFn = useServerFn(createTrial);
  const [step, setStep] = useState<Step>("cta");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [copied, setCopied] = useState(false);

  const m = useMutation({
    mutationFn: (vars: { customerName: string; email: string; whatsapp: string; subscribed: true }) =>
      trialFn({ data: vars }),
    onSuccess: () => setStep("done"),
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

  return (
    <section id="free-trial" className="mx-auto max-w-[1000px] px-5">
      <div className="text-center">
        <EyebrowLabel text="Start Free" color="var(--success)" />
        <h2 className="reveal-item delay-1 mt-3 font-display text-[28px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
          48-Hour Free Trial
        </h2>
        <p className="reveal-item delay-2 mx-auto mt-3 max-w-[560px] font-body text-[14.5px] leading-[1.7] text-[var(--text-secondary)]">
          Try the full DIGI BIZ OS free for 48 hours — every module, no payment.
        </p>
      </div>

      <GlassCard className="reveal-item delay-2 mt-8 p-7 md:p-9" glowColor="var(--success)">
        <AnimatePresence mode="wait">
          {/* STEP 0 — CTA Button */}
          {step === "cta" && (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col items-center justify-center py-4 text-center"
            >
              <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
                <MonoBadge color="var(--success)">
                  <Gift size={12} className="mr-1 inline" /> Free · 48 Hours
                </MonoBadge>
                <MonoBadge color="var(--text-secondary)">One trial per device</MonoBadge>
                <MonoBadge color="var(--text-secondary)">No card required</MonoBadge>
              </div>

              <p className="mb-7 max-w-[520px] font-body text-[14.5px] leading-[1.7] text-[var(--text-secondary)]">
                Experience voice intelligence, automated business tools, lead generation, and client workflow modules risk-free on your PC.
              </p>

              <CyanButton
                size="lg"
                tone="52,211,153"
                className="px-9 py-4 font-display text-[15px] font-bold shadow-lg shadow-emerald-500/20 sm:text-[16px]"
                onClick={() => setStep("form")}
              >
                <Gift size={18} className="mr-2 inline" /> Get 48 Hours Free Trial
              </CyanButton>
            </motion.div>
          )}

          {/* STEP 1 — signup form with mandatory WhatsApp */}
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid gap-4"
            >
              <div className="mb-2 text-left">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <MonoBadge color="var(--success)">
                    <Gift size={12} className="mr-1 inline" /> Free · 48 Hours
                  </MonoBadge>
                  <MonoBadge color="var(--text-secondary)">Instant WhatsApp Connect</MonoBadge>
                </div>
                <h3 className="font-display text-[20px] font-bold text-[var(--text-primary)]">
                  Claim Your 48-Hour Free Trial
                </h3>
                <p className="mt-1 font-body text-[13.5px] text-[var(--text-secondary)]">
                  Enter your details below to receive your 48-hour trial license key directly on WhatsApp.
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
                className="mt-2 w-full disabled:opacity-40"
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

              <button
                type="button"
                onClick={() => setStep("cta")}
                className="mx-auto mt-1 font-body text-[12.5px] text-[var(--text-muted)] underline-offset-2 hover:underline"
              >
                ← Back
              </button>
            </motion.div>
          )}

          {/* STEP 2 — lead received, WhatsApp direct connection & instant key */}
          {step === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid gap-5 text-center"
            >
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

              {/* Direct WhatsApp button in case popup was blocked */}
              <div className="mx-auto w-full max-w-[420px]">
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

              {/* Instant License Key Box */}
              {result?.licenseKey && (
                <div className="mx-auto w-full max-w-[420px] rounded-[var(--r-lg)] border border-[var(--border-glass)] bg-[var(--bg-glass)] p-4 text-left">
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                    Your Instant 48-Hour Trial Key:
                  </p>
                  <div className="flex items-center gap-2 rounded-[var(--r-md)] border border-[var(--success-border,rgba(52,211,153,0.4))] bg-black/40 px-3.5 py-2.5">
                    <code className="flex-1 truncate font-mono text-[14px] text-[var(--success)]">
                      {result.licenseKey}
                    </code>
                    <button
                      onClick={copyKey}
                      title="Copy Key"
                      className="shrink-0 rounded p-1 text-[var(--text-secondary)] transition hover:text-[var(--success)]"
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

              <p className="mx-auto max-w-[460px] font-body text-[12px] leading-[1.7] text-[var(--text-muted)]">
                Our support team at WhatsApp +92 316 4467464 will also assist you with setup, modules, and any questions during your 48-hour evaluation.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </section>
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
