import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Download, Copy, Check, Gift, ArrowRight } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import CyanButton from "@/components/CyanButton";
import EyebrowLabel from "@/components/EyebrowLabel";
import MonoBadge from "@/components/MonoBadge";
import { createTrial } from "@/lib/orders.functions";

const YT = "https://www.youtube.com/@Digiformationltd";

type Step = "cta" | "form" | "subscribe" | "done";

export default function TrialSection() {
  const trialFn = useServerFn(createTrial);
  const [step, setStep] = useState<Step>("cta");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [opened, setOpened] = useState(false); // did they open the channel?
  const [confirmed, setConfirmed] = useState(false); // did they tick "I subscribed"?
  const [copied, setCopied] = useState(false);

  const m = useMutation({
    mutationFn: (vars: { customerName: string; email: string; whatsapp: string; subscribed: true }) =>
      trialFn({ data: vars }),
    onSuccess: () => setStep("done"),
  });

  const result = m.data;

  const validForm = name.trim().length >= 2 && /\S+@\S+\.\S+/.test(email);

  const startTrial = () => {
    m.mutate({ customerName: name.trim(), email: email.trim(), whatsapp: whatsapp.trim(), subscribed: true });
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

          {/* STEP 1 — signup form */}
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
                  <MonoBadge color="var(--text-secondary)">Step 1 of 2</MonoBadge>
                </div>
                <h3 className="font-display text-[20px] font-bold text-[var(--text-primary)]">
                  Claim Your 48-Hour Free Trial
                </h3>
                <p className="mt-1 font-body text-[13.5px] text-[var(--text-secondary)]">
                  Enter your details below to generate your trial activation key.
                </p>
              </div>

              <Field label="Your name">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Ali Khan" className={inputCls} />
              </Field>
              <Field label="Email">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@example.com" className={inputCls} />
              </Field>
              <Field label="WhatsApp (optional)">
                <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="+92 3xx xxxxxxx" className={inputCls} />
              </Field>
              <CyanButton
                size="lg"
                tone="52,211,153"
                className="mt-2 w-full disabled:opacity-40"
                onClick={() => validForm && setStep("subscribe")}
                disabled={!validForm}
              >
                Continue to License <ArrowRight size={16} className="ml-1 inline" />
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

        {/* STEP 2 — subscribe gate */}
        {step === "subscribe" && (
          <motion.div
            key="subscribe"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid gap-5"
          >
            <div className="rounded-[var(--r-lg)] border border-[var(--border-glass)] bg-[var(--bg-glass)] p-5">
              <div className="flex items-center gap-3">
                <Youtube size={26} className="shrink-0 text-[#FF0033]" />
                <div>
                  <p className="font-display text-[15px] font-semibold text-[var(--text-primary)]">
                    Subscribe to unlock your trial
                  </p>
                  <p className="font-body text-[12.5px] text-[var(--text-secondary)]">
                    One tap — it keeps the free trial free for everyone.
                  </p>
                </div>
              </div>
              <a
                href={YT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpened(true)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-[var(--r-md)] bg-[#FF0033] px-4 py-3 font-display text-[14px] font-bold text-white transition hover:brightness-110"
              >
                <Youtube size={18} /> Subscribe on YouTube
              </a>
              <label className="mt-4 flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-[3px] h-4 w-4 accent-[var(--success)]"
                />
                <span className="font-body text-[13px] text-[var(--text-secondary)]">
                  I have subscribed to the DIGIFORMATION LTD channel.
                </span>
              </label>
              {!opened && confirmed && (
                <p className="mt-2 font-body text-[11.5px] text-[var(--amber)]">
                  Tip: tap “Subscribe on YouTube” above first.
                </p>
              )}
            </div>

            {m.isError && (
              <p className="font-body text-[12.5px] text-[var(--danger,#f87171)]">
                {(m.error as Error)?.message || "Something went wrong. Please try again."}
              </p>
            )}

            <CyanButton
              size="lg"
              tone="52,211,153"
              className="w-full disabled:opacity-40"
              onClick={startTrial}
              disabled={!confirmed || m.isPending}
            >
              {m.isPending ? "Generating your key…" : "Get my 48-hour trial key"}
            </CyanButton>
            <button
              type="button"
              onClick={() => setStep("form")}
              className="mx-auto font-body text-[12.5px] text-[var(--text-muted)] underline-offset-2 hover:underline"
            >
              ← Back
            </button>
          </motion.div>
        )}

        {/* STEP 3 — key + download */}
        {step === "done" && result && (
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
              <p className="font-display text-[20px] font-bold text-[var(--text-primary)]">
                {result.reused ? "Welcome back — here’s your key" : "Your trial is ready!"}
              </p>
              <p className="mt-1 font-body text-[13px] text-[var(--text-secondary)]">
                Valid for {result.expiresInHours} hours on one device. Install the app, then paste this key.
              </p>
            </div>

            <div className="mx-auto flex w-full max-w-[420px] items-center gap-2 rounded-[var(--r-md)] border border-[var(--success-border,rgba(52,211,153,0.4))] bg-[var(--bg-glass)] px-4 py-3">
              <code className="flex-1 truncate font-mono text-[15px] tracking-wide text-[var(--success)]">
                {result.licenseKey}
              </code>
              <button onClick={copyKey} className="shrink-0 rounded-md p-1.5 text-[var(--text-secondary)] transition hover:text-[var(--success)]">
                {copied ? <Check size={16} className="text-[var(--success)]" /> : <Copy size={16} />}
              </button>
            </div>

            <a href={result.downloadUrl} className="mx-auto w-full max-w-[420px]">
              <CyanButton size="lg" tone="52,211,153" className="w-full">
                <Download size={16} className="mr-1 inline" /> Download DIGI BIZ OS
              </CyanButton>
            </a>

            <p className="mx-auto max-w-[460px] font-body text-[12px] leading-[1.7] text-[var(--text-muted)]">
              First launch sets up its engines automatically — leave it running; Settings shows the
              progress. Need help? WhatsApp us at{" "}
              <span className="font-mono text-[var(--text-secondary)]">+92 316 4467464</span>.
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
