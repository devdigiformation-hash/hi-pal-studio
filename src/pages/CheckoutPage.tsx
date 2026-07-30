import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearch, useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Check,
  Copy,
  Loader2,
  Lock,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import CyanButton from "@/components/CyanButton";
import EyebrowLabel from "@/components/EyebrowLabel";
import MonoBadge from "@/components/MonoBadge";
import {
  PLANS,
  PAYMENT_METHODS,
  amountForMethod,
  formatAmount,
  WHATSAPP_NUMBER,
  type MethodId,
  type PlanId,
} from "@/lib/payment-config";
import { createOrder } from "@/lib/orders.functions";

function CopyValue({ value }: { value: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(value);
        setDone(true);
        setTimeout(() => setDone(false), 1600);
      }}
      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border-glass)] px-3 py-1 font-code text-[11px] text-[var(--cyan)] transition-colors hover:border-[var(--cyan-border)]"
    >
      {done ? <Check size={12} /> : <Copy size={12} />}
      {done ? "Copied" : "Copy"}
    </button>
  );
}

const inputClass =
  "w-full rounded-[var(--r-md,12px)] border border-[var(--border-glass)] bg-[var(--bg-glass-light)] px-4 py-3 font-body text-[14px] text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--cyan-border)]";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const search = useSearch({ strict: false }) as { plan?: string };
  const planId: PlanId = (["lifetime", "pro_monthly", "pro_annual"] as PlanId[]).includes(
    search.plan as PlanId,
  )
    ? (search.plan as PlanId)
    : "lifetime";
  const plan = PLANS[planId];

  const [methodId, setMethodId] = useState<MethodId>("jazzcash");
  const method = useMemo(
    () => PAYMENT_METHODS.find((m) => m.id === methodId)!,
    [methodId],
  );
  const amount = amountForMethod(plan, method);

  const [form, setForm] = useState({
    customerName: "",
    email: "",
    whatsapp: "",
    txnReference: "",
    notes: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!agreed) {
      setError("Please agree to the terms and refund policy first.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await createOrder({
        data: { planId, method: methodId, ...form },
      });
      navigate({ to: "/order/$ref", params: { ref: res.orderRef } });
    } catch (err) {
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Something went wrong. Please check your details and try again.",
      );
      setSubmitting(false);
    }
  }

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Digiformation — I want to buy ${plan.name} via ${method.label} (${formatAmount(amount, method.currency)}).`,
  )}`;

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen px-6 pb-24 pt-[110px] md:px-12 lg:px-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(47,224,200,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1160px]">
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2 font-body text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--cyan)]"
        >
          <ArrowLeft size={14} /> Return to pricing
        </Link>

        <div className="mt-6">
          <EyebrowLabel reveal={false} text="Secure Checkout" />
          <h1 className="mt-3 font-display text-[38px] font-extrabold leading-[1.05] text-[var(--text-primary)] md:text-[52px]">
            Payment Method
          </h1>
          <p className="mt-3 max-w-[560px] font-body text-[15px] text-[var(--text-secondary)]">
            Complete your transaction. Pick a rail, send the exact amount, then submit your
            details — we verify and activate your licence.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[380px_1fr]">
          {/* Order summary */}
          <GlassCard className="h-fit p-7">
            <EyebrowLabel reveal={false} text="Selected Plan" color="var(--text-secondary)" />
            <div className="mt-4 font-display text-[20px] font-bold text-[var(--text-primary)]">
              {plan.name}
            </div>
            <div className="mt-1 font-body text-[13px] text-[var(--text-muted)]">{plan.badge}</div>

            <div className="mt-6 flex items-end gap-3">
              <span className="font-display text-[42px] font-extrabold leading-none text-[var(--text-primary)]">
                {formatAmount(amount, method.currency)}
              </span>
              {plan.comparePkr && plan.compareUsd ? (
                <span className="pb-1.5 font-body text-[15px] text-[var(--text-muted)] line-through">
                  {formatAmount(
                    method.currency === "PKR" ? plan.comparePkr : plan.compareUsd,
                    method.currency,
                  )}
                </span>
              ) : null}
            </div>
            <div className="mt-3">
              <MonoBadge>{plan.billingNote}</MonoBadge>
            </div>

            <p className="mt-5 font-body text-[13.5px] leading-[1.7] text-[var(--text-secondary)]">
              {plan.blurb}
            </p>

            <div className="mt-6 border-t border-[var(--border-glass)] pt-5">
              <EyebrowLabel reveal={false} text="What you get" color="var(--text-secondary)" />
              <ul className="mt-4 space-y-2.5">
                {plan.includes.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={14} color="var(--cyan)" strokeWidth={2.4} className="mt-1 shrink-0" />
                    <span className="font-body text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {plan.bestFor.map((b) => (
                <MonoBadge key={b} color="var(--text-secondary)">
                  {b}
                </MonoBadge>
              ))}
            </div>
          </GlassCard>

          {/* Payment panel */}
          <GlassCard className="p-7">
            <div className="flex flex-wrap gap-2">
              {PAYMENT_METHODS.map((m) => {
                const active = m.id === methodId;
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMethodId(m.id)}
                    style={{ borderRadius: "var(--r-pill)" }}
                    className={`border px-4 py-2 font-display text-[13px] font-semibold transition-all duration-300 ${
                      active
                        ? "border-[var(--cyan-border)] text-[var(--cyan)] shadow-[var(--glow-cyan)]"
                        : "border-[var(--border-glass)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-7"
              >
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-[18px] font-bold text-[var(--text-primary)]">
                    {method.label}
                  </h2>
                  <MonoBadge color="var(--text-secondary)">{method.region}</MonoBadge>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div
                    className="rounded-[14px] border border-[var(--cyan-border)] p-4"
                    style={{ background: "var(--bg-glass-light)" }}
                  >
                    <div className="font-body text-[11.5px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      Amount to send
                    </div>
                    <div className="mt-1.5 font-code text-[20px] font-bold text-[var(--cyan)]">
                      {formatAmount(amount, method.currency)}
                    </div>
                  </div>
                  {method.fields.map((f) => (
                    <div
                      key={f.label}
                      className="rounded-[14px] border border-[var(--border-glass)] p-4"
                      style={{ background: "var(--bg-glass-light)" }}
                    >
                      <div className="font-body text-[11.5px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                        {f.label}
                      </div>
                      <div className="mt-1.5 flex items-center justify-between gap-3">
                        <span className="break-all font-code text-[13.5px] text-[var(--text-primary)]">
                          {f.value}
                        </span>
                        {f.copy ? <CopyValue value={f.value} /> : null}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <EyebrowLabel reveal={false} text="Instructions" color="var(--text-secondary)" />
                  <ol className="mt-4 space-y-2.5">
                    {method.steps.map((s, i) => (
                      <li key={s} className="flex items-start gap-3">
                        <span className="mt-[1px] font-code text-[12px] font-bold text-[var(--cyan)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-body text-[13.5px] leading-[1.6] text-[var(--text-secondary)]">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            </AnimatePresence>

            <form onSubmit={onSubmit} className="mt-8 border-t border-[var(--border-glass)] pt-7">
              <EyebrowLabel reveal={false} text="Your details" color="var(--text-secondary)" />
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <input
                  required
                  className={inputClass}
                  placeholder="Full name"
                  value={form.customerName}
                  onChange={set("customerName")}
                />
                <input
                  required
                  type="email"
                  className={inputClass}
                  placeholder="Email for licence activation"
                  value={form.email}
                  onChange={set("email")}
                />
                <input
                  className={inputClass}
                  placeholder="WhatsApp number (optional)"
                  value={form.whatsapp}
                  onChange={set("whatsapp")}
                />
                <input
                  className={inputClass}
                  placeholder="Transaction ID / reference (optional)"
                  value={form.txnReference}
                  onChange={set("txnReference")}
                />
              </div>
              <textarea
                rows={3}
                className={`${inputClass} mt-3 resize-none`}
                placeholder="Anything we should know? (optional)"
                value={form.notes}
                onChange={set("notes")}
              />

              <label className="mt-5 flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-[3px] h-4 w-4 shrink-0 accent-[var(--cyan)]"
                />
                <span className="font-body text-[13px] leading-[1.6] text-[var(--text-secondary)]">
                  I agree to the{" "}
                  <Link to="/terms" className="text-[var(--cyan)] hover:underline">
                    terms &amp; conditions
                  </Link>{" "}
                  and the{" "}
                  <Link to="/refund" className="text-[var(--cyan)] hover:underline">
                    refund policy
                  </Link>
                  . Digital licences are delivered immediately and are non-refundable.
                </span>
              </label>

              {error ? (
                <p className="mt-4 font-body text-[13px] text-[var(--danger,#FF6B6B)]">{error}</p>
              ) : null}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CyanButton
                  size="lg"
                  type="submit"
                  disabled={submitting}
                  className="disabled:opacity-70"
                  icon={submitting ? <Loader2 size={16} className="animate-spin" /> : undefined}
                >
                  {submitting ? "Placing order…" : "Place Order"}
                </CyanButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  style={{ borderRadius: "var(--r-pill)" }}
                  className="inline-flex items-center gap-2 border border-[var(--border-glass)] px-6 py-3.5 font-display text-[14px] font-semibold text-[var(--text-secondary)] transition-colors hover:border-[var(--cyan-border)] hover:text-[var(--cyan)]"
                >
                  <MessageCircle size={15} /> Confirm on WhatsApp
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 font-body text-[12px] text-[var(--text-muted)]">
                <span className="inline-flex items-center gap-1.5">
                  <Lock size={13} /> SSL Secure
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck size={13} /> Manually verified by Digiformation Ltd
                </span>
              </div>
            </form>
          </GlassCard>
        </div>
      </div>
    </motion.main>
  );
}