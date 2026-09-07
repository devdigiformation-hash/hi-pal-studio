import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, Copy, Check, Download, MessageCircle, Mail, XCircle } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import EyebrowLabel from "@/components/EyebrowLabel";
import MonoBadge from "@/components/MonoBadge";
import CyanButton from "@/components/CyanButton";
import { getOrderStatus } from "@/lib/orders.functions";
import {
  WHATSAPP_NUMBER,
  SUPPORT_EMAIL,
  formatAmount,
  PAYMENT_METHODS,
} from "@/lib/payment-config";

type OrderRow = {
  order_ref: string;
  plan_name: string;
  amount: number;
  currency: string;
  payment_method: string;
  status: string;
  created_at: string;
  verified_at?: string | null;
  license_key?: string | null;
  download_url?: string | null;
};

function CopyChip({ value }: { value: string }) {
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

const STATUS_META: Record<string, { label: string; color: string; icon: typeof Clock }> = {
  pending: { label: "Awaiting verification", color: "var(--amber,#F5A623)", icon: Clock },
  verified: { label: "Payment verified", color: "var(--success,#2FE0C8)", icon: CheckCircle2 },
  rejected: { label: "Not verified", color: "var(--danger,#FF6B6B)", icon: XCircle },
  cancelled: { label: "Cancelled", color: "var(--text-muted)", icon: XCircle },
};

export default function OrderStatusPage({ orderRef }: { orderRef: string }) {
  const [order, setOrder] = useState<OrderRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let alive = true;
    const load = () =>
      getOrderStatus({ data: { orderRef } })
        .then((res) => {
          if (!alive) return;
          if (res.found) {
            const row = res.order as OrderRow;
            setOrder(row);
            // Stop polling once the payment is verified (download released) or rejected.
            if (row.status !== "pending" && timer.current) {
              clearInterval(timer.current);
              timer.current = null;
            }
          } else {
            setMissing(true);
          }
        })
        .catch(() => alive && setMissing(true))
        .finally(() => alive && setLoading(false));

    load();
    // While awaiting verification, re-check every 20s so the download appears
    // automatically the moment the owner approves — no refresh needed.
    timer.current = setInterval(load, 20000);
    return () => {
      alive = false;
      if (timer.current) clearInterval(timer.current);
    };
  }, [orderRef]);

  const meta = STATUS_META[order?.status ?? "pending"] ?? STATUS_META.pending;
  const Icon = meta.icon;

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Digiformation — here is my payment proof for order ${orderRef}.`,
  )}`;

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen px-6 pb-24 pt-[120px] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-[720px]">
        <GlassCard className="p-8 md:p-10">
          <EyebrowLabel reveal={false} text="Order Received" />
          {loading ? (
            <p className="mt-6 font-body text-[15px] text-[var(--text-secondary)]">
              Loading your order…
            </p>
          ) : missing || !order ? (
            <>
              <h1 className="mt-3 font-display text-[30px] font-extrabold text-[var(--text-primary)]">
                Order not found
              </h1>
              <p className="mt-3 font-body text-[14.5px] text-[var(--text-secondary)]">
                We couldn&apos;t find reference{" "}
                <span className="font-code text-[var(--cyan)]">{orderRef}</span>. Check the link or
                contact us and we&apos;ll track it down.
              </p>
              <div className="mt-7">
                <Link to="/pricing">
                  <CyanButton size="md">Back to pricing</CyanButton>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1 className="mt-3 font-display text-[32px] font-extrabold leading-tight text-[var(--text-primary)] md:text-[40px]">
                {order.status === "verified"
                  ? "Payment verified — your download is ready."
                  : order.status === "rejected"
                    ? "We couldn't verify this payment yet."
                    : "Thanks — we're verifying your payment."}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <MonoBadge>{order.order_ref}</MonoBadge>
                <span
                  className="inline-flex items-center gap-2 font-body text-[13px]"
                  style={{ color: meta.color }}
                >
                  <Icon size={15} /> {meta.label}
                </span>
              </div>

              <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["Plan", order.plan_name],
                  [
                    "Amount",
                    formatAmount(Number(order.amount), order.currency as "PKR" | "GBP" | "USD"),
                  ],
                  [
                    "Method",
                    PAYMENT_METHODS.find((m) => m.id === order.payment_method)?.label ??
                      order.payment_method,
                  ],
                  ["Placed", new Date(order.created_at).toLocaleString()],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-[14px] border border-[var(--border-glass)] p-4"
                    style={{ background: "var(--bg-glass-light)" }}
                  >
                    <dt className="font-body text-[11.5px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      {k}
                    </dt>
                    <dd className="mt-1.5 font-code text-[13.5px] text-[var(--text-primary)]">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>

              {order.status === "verified" && order.download_url ? (
                <>
                  {/* Released download + licence key — shown ONLY after approval. */}
                  <div
                    className="mt-8 rounded-[16px] border border-[var(--cyan-border)] p-5"
                    style={{ background: "var(--bg-glass-light)" }}
                  >
                    <div className="font-body text-[11.5px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
                      Your licence key
                    </div>
                    <div className="mt-2 flex items-center justify-between gap-3">
                      <span className="break-all font-code text-[16px] font-bold text-[var(--cyan)]">
                        {order.license_key}
                      </span>
                      {order.license_key ? <CopyChip value={order.license_key} /> : null}
                    </div>
                    <p className="mt-3 font-body text-[13px] leading-[1.7] text-[var(--text-secondary)]">
                      Download the installer, run it on Windows 10 or 11, and enter this key to
                      activate. Keep it safe — it&apos;s tied to your order.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a href={order.download_url} target="_blank" rel="noreferrer">
                      <CyanButton size="lg" icon={<Download size={16} />}>
                        Download DIGI BIZ OS
                      </CyanButton>
                    </a>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}?subject=Order%20${order.order_ref}`}
                      style={{ borderRadius: "var(--r-pill)" }}
                      className="inline-flex items-center gap-2 border border-[var(--border-glass)] px-6 py-3 font-display text-[14px] font-semibold text-[var(--text-secondary)] transition-colors hover:border-[var(--cyan-border)] hover:text-[var(--cyan)]"
                    >
                      <Mail size={15} /> Need help?
                    </a>
                  </div>
                </>
              ) : order.status === "rejected" ? (
                <>
                  <p className="mt-7 font-body text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                    We couldn&apos;t confirm your payment against this reference. If you have already
                    paid, send your proof on WhatsApp with the reference above and we&apos;ll sort it
                    out.
                  </p>
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a href={waHref} target="_blank" rel="noreferrer">
                      <CyanButton size="md" icon={<MessageCircle size={15} />}>
                        Send proof on WhatsApp
                      </CyanButton>
                    </a>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}?subject=Order%20${order.order_ref}`}
                      style={{ borderRadius: "var(--r-pill)" }}
                      className="inline-flex items-center gap-2 border border-[var(--border-glass)] px-6 py-3 font-display text-[14px] font-semibold text-[var(--text-secondary)] transition-colors hover:border-[var(--cyan-border)] hover:text-[var(--cyan)]"
                    >
                      <Mail size={15} /> {SUPPORT_EMAIL}
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <p className="mt-7 font-body text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                    Send your payment screenshot on WhatsApp with the reference above. Once the
                    transfer lands and we verify it, your licence key and download link appear right
                    here on this page — it refreshes automatically, so you can leave it open.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a href={waHref} target="_blank" rel="noreferrer">
                      <CyanButton size="md" icon={<MessageCircle size={15} />}>
                        Send proof on WhatsApp
                      </CyanButton>
                    </a>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}?subject=Order%20${order.order_ref}`}
                      style={{ borderRadius: "var(--r-pill)" }}
                      className="inline-flex items-center gap-2 border border-[var(--border-glass)] px-6 py-3 font-display text-[14px] font-semibold text-[var(--text-secondary)] transition-colors hover:border-[var(--cyan-border)] hover:text-[var(--cyan)]"
                    >
                      <Mail size={15} /> {SUPPORT_EMAIL}
                    </a>
                  </div>
                </>
              )}
            </>
          )}
        </GlassCard>
      </div>
    </motion.main>
  );
}
