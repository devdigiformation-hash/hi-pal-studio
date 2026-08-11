import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, MessageCircle, Mail, XCircle } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import EyebrowLabel from "@/components/EyebrowLabel";
import MonoBadge from "@/components/MonoBadge";
import CyanButton from "@/components/CyanButton";
import { getOrderStatus } from "@/lib/orders.functions";
import { WHATSAPP_NUMBER, SUPPORT_EMAIL, formatAmount } from "@/lib/payment-config";

type OrderRow = {
  order_ref: string;
  plan_name: string;
  amount: number;
  currency: string;
  payment_method: string;
  status: string;
  created_at: string;
};

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

  useEffect(() => {
    let alive = true;
    getOrderStatus({ data: { orderRef } })
      .then((res) => {
        if (!alive) return;
        if (res.found) setOrder(res.order as OrderRow);
        else setMissing(true);
      })
      .catch(() => alive && setMissing(true))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
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
                <span className="font-code text-[var(--cyan)]">{orderRef}</span>. Check the link
                or contact us and we&apos;ll track it down.
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
                Thanks — we&apos;re verifying your payment.
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
                  ["Method", order.payment_method],
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

              <p className="mt-7 font-body text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                Send your payment screenshot on WhatsApp with the reference above. Once verified,
                your licence is activated on the email you provided — usually within a few hours.
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
        </GlassCard>
      </div>
    </motion.main>
  );
}