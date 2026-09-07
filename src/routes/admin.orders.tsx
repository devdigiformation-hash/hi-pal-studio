import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { CheckCircle2, Clock, Copy, Check, ExternalLink, XCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { claimAdmin } from "@/lib/seo-monitor.functions";
import { listOrders, approveOrder, rejectOrder, type OrderAdminRow } from "@/lib/orders.functions";
import { PAYMENT_METHODS, formatAmount } from "@/lib/payment-config";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import EyebrowLabel from "@/components/EyebrowLabel";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";

export const Route = createFileRoute("/admin/orders")({
  head: () => ({
    meta: [
      { title: "Orders & Payments — DIGI BIZ OS Admin" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Private manual-payment approval dashboard." },
    ],
  }),
  component: OrdersAdminPage,
});

const DL_KEY = "dbos_admin_last_download_url";

function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  return { session, ready };
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-40">
      <EyebrowLabel text="Private · Admin only" reveal={false} />
      <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
        <GradientText from="var(--cyan)" to="var(--violet)">
          Orders &amp; Payments
        </GradientText>
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-white/60">
        Approve an order only after the transfer has actually landed in your bank. Approving issues
        the licence key and releases the download on the customer&apos;s order page.
      </p>
      <div className="mt-8">{children}</div>
    </main>
  );
}

function OrdersAdminPage() {
  const { session, ready } = useSession();
  if (!ready)
    return (
      <Shell>
        <p className="text-sm text-white/60">Checking your session…</p>
      </Shell>
    );
  if (!session)
    return (
      <Shell>
        <SignInCard />
      </Shell>
    );
  return (
    <Shell>
      <Dashboard />
    </Shell>
  );
}

function SignInCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin/orders` },
        });
        if (error) throw error;
        toast.success("Account created. Check your email to confirm, then sign in.");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <GlassCard className="mx-auto max-w-md">
      <h2 className="text-lg font-semibold">
        {mode === "signin" ? "Admin sign in" : "Create admin account"}
      </h2>
      <form onSubmit={submit} className="mt-5 space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@digiformation.co.uk"
          className="w-full rounded-xl border border-[var(--border-glass)] bg-white/5 px-4 py-3 text-sm outline-none focus:border-[var(--cyan)]"
        />
        <input
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-xl border border-[var(--border-glass)] bg-white/5 px-4 py-3 text-sm outline-none focus:border-[var(--cyan)]"
        />
        <CyanButton type="submit" className="w-full" disabled={busy}>
          {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Sign up"}
        </CyanButton>
      </form>
      <button
        type="button"
        onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
        className="mt-4 text-xs text-white/50 underline underline-offset-4 hover:text-white/80"
      >
        {mode === "signin" ? "No account yet? Create one" : "Already have an account? Sign in"}
      </button>
    </GlassCard>
  );
}

const STATUS_TONE: Record<string, { color: string; icon: typeof Clock; label: string }> = {
  pending: { color: "var(--gold,#F5A623)", icon: Clock, label: "Awaiting payment" },
  verified: { color: "var(--cyan)", icon: CheckCircle2, label: "Verified · released" },
  rejected: { color: "#F45B69", icon: XCircle, label: "Rejected" },
};

function Dashboard() {
  const qc = useQueryClient();
  const listFn = useServerFn(listOrders);
  const claimFn = useServerFn(claimAdmin);
  const [filter, setFilter] = useState<"all" | "pending" | "verified" | "rejected">("pending");

  const q = useQuery({
    queryKey: ["admin-orders", filter],
    queryFn: () => listFn({ data: { status: filter } }),
    retry: false,
    refetchInterval: 30000,
  });

  const forbidden = q.isError && /admin access required|Forbidden/i.test(String(q.error));

  if (q.isLoading) return <p className="text-sm text-white/60">Loading orders…</p>;

  if (forbidden) {
    return (
      <GlassCard className="mx-auto max-w-md text-sm">
        <h2 className="text-lg font-semibold">Admin access required</h2>
        <p className="mt-2 text-white/60">
          This account has no admin role. If you are the first person setting this up, claim admin
          access now.
        </p>
        <div className="mt-5 flex gap-3">
          <CyanButton
            onClick={async () => {
              const res = await claimFn({ data: undefined });
              if (res.admin) {
                toast.success("Admin access granted");
                qc.invalidateQueries({ queryKey: ["admin-orders"] });
              } else {
                toast.error("An admin already exists for this workspace.");
              }
            }}
          >
            Claim admin access
          </CyanButton>
          <GhostButton onClick={() => supabase.auth.signOut()}>Sign out</GhostButton>
        </div>
      </GlassCard>
    );
  }

  if (q.isError)
    return <p className="text-sm text-[var(--gold)]">{String((q.error as Error).message)}</p>;

  const orders = q.data?.orders ?? [];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        {(["pending", "verified", "rejected", "all"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-[13px] font-semibold capitalize transition-colors ${
              filter === f
                ? "border-[var(--cyan-border)] text-[var(--cyan)]"
                : "border-[var(--border-glass)] text-white/60 hover:text-white/90"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto" />
        <GhostButton onClick={() => supabase.auth.signOut()}>Sign out</GhostButton>
      </div>

      {orders.length === 0 ? (
        <GlassCard className="p-6">
          <p className="text-sm text-white/60">No {filter === "all" ? "" : filter} orders.</p>
        </GlassCard>
      ) : (
        <div className="space-y-4">
          {orders.map((o) => (
            <OrderCard key={o.order_ref} order={o} />
          ))}
        </div>
      )}
    </div>
  );
}

function CopyChip({ value }: { value: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(value);
        setDone(true);
        setTimeout(() => setDone(false), 1500);
      }}
      className="inline-flex items-center gap-1 rounded-full border border-[var(--border-glass)] px-2.5 py-0.5 font-code text-[11px] text-[var(--cyan)] hover:border-[var(--cyan-border)]"
    >
      {done ? <Check size={11} /> : <Copy size={11} />}
      {done ? "Copied" : "Copy"}
    </button>
  );
}

function OrderCard({ order }: { order: OrderAdminRow }) {
  const qc = useQueryClient();
  const approveFn = useServerFn(approveOrder);
  const rejectFn = useServerFn(rejectOrder);
  const [downloadUrl, setDownloadUrl] = useState(() => {
    if (order.download_url) return order.download_url;
    try {
      return localStorage.getItem(DL_KEY) || "";
    } catch {
      return "";
    }
  });

  const tone = STATUS_TONE[order.status] ?? STATUS_TONE.pending;
  const Icon = tone.icon;
  const methodLabel =
    PAYMENT_METHODS.find((m) => m.id === order.payment_method)?.label ?? order.payment_method;

  const approve = useMutation({
    mutationFn: () => {
      const url = downloadUrl.trim();
      if (!/^https?:\/\//i.test(url)) throw new Error("Enter a valid download URL first.");
      try {
        localStorage.setItem(DL_KEY, url);
      } catch {
        /* ignore */
      }
      return approveFn({ data: { orderRef: order.order_ref, downloadUrl: url } });
    },
    onSuccess: (res) => {
      if (res.registered) {
        toast.success(`Approved & licence registered — ${res.licenseKey}`);
      } else {
        toast.warning(
          `Approved, but the licence was NOT registered in the app (${res.registerReason || "worker unreachable"}). Set LICENSE_ADMIN_API_KEY and re-approve, or the key won't activate.`,
          { duration: 9000 },
        );
      }
      qc.invalidateQueries({ queryKey: ["admin-orders"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Approve failed"),
  });

  const reject = useMutation({
    mutationFn: () => rejectFn({ data: { orderRef: order.order_ref } }),
    onSuccess: () => {
      toast.success("Order marked rejected");
      qc.invalidateQueries({ queryKey: ["admin-orders"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Reject failed"),
  });

  const detail = useMemo(
    () => [
      ["Customer", order.customer_name],
      ["Email", order.email],
      ["WhatsApp", order.whatsapp || "—"],
      ["Plan", order.plan_name],
      ["Amount", formatAmount(Number(order.amount), order.currency as "PKR" | "GBP" | "USD")],
      ["Method", methodLabel],
      ["Txn ref", order.txn_reference || "—"],
      ["Placed", new Date(order.created_at).toLocaleString("en-GB")],
    ],
    [order, methodLabel],
  );

  return (
    <GlassCard glowColor={tone.color} className="p-5">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-code text-[15px] font-bold text-white">{order.order_ref}</span>
        <span
          className="inline-flex items-center gap-1.5 text-[12px] font-semibold"
          style={{ color: tone.color }}
        >
          <Icon size={14} /> {tone.label}
        </span>
      </div>

      <dl className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
        {detail.map(([k, v]) => (
          <div key={k}>
            <dt className="text-[10.5px] uppercase tracking-[0.14em] text-white/40">{k}</dt>
            <dd className="mt-0.5 break-words font-code text-[12.5px] text-white/85">{v}</dd>
          </div>
        ))}
      </dl>

      {order.notes ? (
        <p className="mt-3 rounded-lg border border-[var(--border-glass)] bg-white/[0.03] px-3 py-2 text-[12.5px] text-white/60">
          <span className="text-white/40">Note from customer: </span>
          {order.notes}
        </p>
      ) : null}

      {order.status === "verified" ? (
        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-lg border border-[var(--cyan-border)] bg-white/[0.03] px-3 py-2.5">
          <span className="text-[11px] uppercase tracking-[0.14em] text-white/40">Licence</span>
          <span className="font-code text-[13px] font-bold text-[var(--cyan)]">
            {order.license_key}
          </span>
          {order.license_key ? <CopyChip value={order.license_key} /> : null}
          {order.download_url ? (
            <a
              href={order.download_url}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-1.5 text-[12px] text-white/60 hover:text-[var(--cyan)]"
            >
              <ExternalLink size={13} /> Download link
            </a>
          ) : null}
        </div>
      ) : (
        <div className="mt-4 border-t border-[var(--border-glass)] pt-4">
          <label className="text-[11px] uppercase tracking-[0.14em] text-white/40">
            Download URL to release (installer link)
          </label>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <input
              value={downloadUrl}
              onChange={(e) => setDownloadUrl(e.target.value)}
              placeholder="https://…/DigiBizOS-Setup.exe"
              className="w-full rounded-xl border border-[var(--border-glass)] bg-white/5 px-4 py-2.5 font-code text-[12.5px] outline-none focus:border-[var(--cyan)]"
            />
            <div className="flex shrink-0 gap-2">
              <CyanButton
                size="sm"
                disabled={approve.isPending}
                onClick={() => approve.mutate()}
              >
                {approve.isPending ? "Approving…" : "Approve & release"}
              </CyanButton>
              <GhostButton disabled={reject.isPending} onClick={() => reject.mutate()}>
                Reject
              </GhostButton>
            </div>
          </div>
          <p className="mt-2 text-[11.5px] text-white/40">
            Only approve once the money is confirmed in your bank. The link is remembered for the
            next order.
          </p>
        </div>
      )}
    </GlassCard>
  );
}
