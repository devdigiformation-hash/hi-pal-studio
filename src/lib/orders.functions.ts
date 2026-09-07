import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const createOrderSchema = z.object({
  planId: z.enum(["lifetime", "custom_build", "source_code"]),
  method: z.enum(["jazzcash", "easypaisa", "sadapay", "nayapay", "ubl", "gbp", "usd"]),
  customerName: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  whatsapp: z.string().trim().max(32).optional().or(z.literal("")),
  txnReference: z.string().trim().max(160).optional().or(z.literal("")),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

function makeRef() {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  let out = "";
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  for (const b of bytes) out += chars[b % chars.length];
  return `DBOS-${out}`;
}

// A licence key that is issued only on approval, e.g. DBOS-A1B2-C3D4-E5F6-G7H8.
function makeLicenseKey() {
  const chars = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const group = () => {
    const bytes = crypto.getRandomValues(new Uint8Array(4));
    let s = "";
    for (const b of bytes) s += chars[b % chars.length];
    return s;
  };
  return `DBOS-${group()}-${group()}-${group()}-${group()}`;
}

// The desktop app's licences live in the Cloudflare licensing worker (the same one
// the app's own admin panel writes to). Registering the key there is what makes it
// actually activate inside the client app — the worker stores only the key's hash.
const LICENSE_WORKER_URL = (
  process.env.LICENSE_WORKER_URL || "https://digi-biz-license-api.digi-ede.workers.dev"
).replace(/\/$/, "");

// max_devices per plan; expires_at null = lifetime.
function planEntitlement(planId: string) {
  if (planId === "source_code") return { edition: "SOURCE", maxDevices: 5 };
  if (planId === "custom_build") return { edition: "PRO", maxDevices: 3 };
  return { edition: "PRO", maxDevices: 3 };
}

async function registerLicenseWithWorker(input: {
  licenseKey: string;
  customerId: string;
  planId: string;
}): Promise<{ registered: boolean; reason?: string }> {
  const adminKey = process.env.LICENSE_ADMIN_API_KEY;
  // Not configured yet → issue the key locally but flag it as not yet registered,
  // so the owner knows to set LICENSE_ADMIN_API_KEY before it will activate.
  if (!adminKey) return { registered: false, reason: "LICENSE_ADMIN_API_KEY not set" };

  const { edition, maxDevices } = planEntitlement(input.planId);
  try {
    const res = await fetch(`${LICENSE_WORKER_URL}/admin/licenses`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Admin-API-Key": adminKey },
      body: JSON.stringify({
        license_key: input.licenseKey,
        customer_id: input.customerId,
        product: "Digi Biz OS",
        edition,
        max_devices: maxDevices,
        expires_at: null, // lifetime
      }),
    });
    if (res.ok) return { registered: true };
    const text = await res.text().catch(() => "");
    // Re-approving the same order → the key is already registered, which is fine.
    if (res.status === 400 && /LICENSE_EXISTS/i.test(text)) return { registered: true };
    return { registered: false, reason: `worker ${res.status}: ${text.slice(0, 160)}` };
  } catch (e) {
    return { registered: false, reason: e instanceof Error ? e.message : "network error" };
  }
}

export const createOrder = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => createOrderSchema.parse(data))
  .handler(async ({ data }) => {
    const { PLANS, PAYMENT_METHODS, amountForMethod } = await import("./payment-config");
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const plan = PLANS[data.planId];
    const method = PAYMENT_METHODS.find((m) => m.id === data.method)!;
    // Amount and currency are resolved server-side, never trusted from the client.
    const amount = amountForMethod(plan, method);

    const orderRef = makeRef();

    const { error } = await supabaseAdmin.from("orders").insert({
      order_ref: orderRef,
      customer_name: data.customerName,
      email: data.email,
      whatsapp: data.whatsapp || null,
      plan_id: plan.id,
      plan_name: plan.name,
      amount,
      currency: method.currency,
      payment_method: method.id,
      txn_reference: data.txnReference || null,
      notes: data.notes || null,
      status: "pending",
    });

    if (error) {
      console.error("[orders] insert failed", error.message);
      throw new Error("Could not record your order. Please try again.");
    }

    return {
      orderRef,
      amount,
      currency: method.currency,
      planName: plan.name,
      methodLabel: method.label,
    };
  });

export const getOrderStatus = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z.object({ orderRef: z.string().trim().min(6).max(24) }).parse(data),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row, error } = await (supabaseAdmin.from("orders") as any)
      .select(
        "order_ref, plan_name, amount, currency, payment_method, status, created_at, verified_at, license_key, download_url",
      )
      .eq("order_ref", data.orderRef.toUpperCase())
      .maybeSingle();

    if (error) {
      console.error("[orders] lookup failed", error.message);
      throw new Error("Could not look up that order right now.");
    }
    if (!row) return { found: false as const };

    // The licence key and download link are released to the customer ONLY once the
    // owner has verified the payment. Before that they are withheld from the page.
    const released = row.status === "verified";
    return {
      found: true as const,
      order: {
        order_ref: row.order_ref,
        plan_name: row.plan_name,
        amount: row.amount,
        currency: row.currency,
        payment_method: row.payment_method,
        status: row.status,
        created_at: row.created_at,
        verified_at: released ? row.verified_at : null,
        license_key: released ? row.license_key : null,
        download_url: released ? row.download_url : null,
      },
    };
  });

// ───────────────────────── Owner / admin side ─────────────────────────
// The owner signs in (Supabase auth), waits until the money has actually landed
// in the Pakistani bank, then approves — which issues the licence + download.

export const listOrders = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z
      .object({
        status: z.enum(["all", "pending", "verified", "rejected"]).default("all"),
      })
      .parse(data ?? {}),
  )
  .handler(async ({ context, data }) => {
    const { assertAdmin } = await import("./seo-monitor.db.server");
    await assertAdmin(context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    let q = (supabaseAdmin.from("orders") as any)
      .select(
        "order_ref, customer_name, email, whatsapp, plan_id, plan_name, amount, currency, payment_method, txn_reference, notes, status, created_at, verified_at, license_key, download_url, admin_note",
      )
      .order("created_at", { ascending: false })
      .limit(500);
    if (data.status !== "all") q = q.eq("status", data.status);

    const { data: rows, error } = await q;
    if (error) {
      console.error("[orders] list failed", error.message);
      throw new Error("Could not load orders.");
    }
    return { orders: (rows ?? []) as OrderAdminRow[] };
  });

export type OrderAdminRow = {
  order_ref: string;
  customer_name: string;
  email: string;
  whatsapp: string | null;
  plan_id: string;
  plan_name: string;
  amount: number;
  currency: string;
  payment_method: string;
  txn_reference: string | null;
  notes: string | null;
  status: string;
  created_at: string;
  verified_at: string | null;
  license_key: string | null;
  download_url: string | null;
  admin_note: string | null;
};

export const approveOrder = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z
      .object({
        orderRef: z.string().trim().min(6).max(24),
        downloadUrl: z.string().trim().url().max(600),
        licenseKey: z.string().trim().max(64).optional().or(z.literal("")),
        note: z.string().trim().max(500).optional().or(z.literal("")),
      })
      .parse(data),
  )
  .handler(async ({ context, data }) => {
    const { assertAdmin } = await import("./seo-monitor.db.server");
    await assertAdmin(context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const ref = data.orderRef.toUpperCase();

    // Reuse an already-issued key if the order was approved before; else mint one.
    const { data: existing } = await (supabaseAdmin.from("orders") as any)
      .select("license_key, email, plan_id")
      .eq("order_ref", ref)
      .maybeSingle();

    if (!existing) throw new Error("Order not found.");

    const licenseKey =
      (data.licenseKey && data.licenseKey.trim()) || existing.license_key || makeLicenseKey();

    // Register the key in the desktop app's licensing worker so it actually
    // activates on the customer's machine (idempotent for re-approvals).
    const reg = await registerLicenseWithWorker({
      licenseKey,
      customerId: existing.email || ref,
      planId: existing.plan_id || "lifetime",
    });

    const { data: updated, error } = await (supabaseAdmin.from("orders") as any)
      .update({
        status: "verified",
        verified_at: new Date().toISOString(),
        download_url: data.downloadUrl,
        license_key: licenseKey,
        admin_note: data.note || null,
      })
      .eq("order_ref", ref)
      .select("order_ref")
      .maybeSingle();

    if (error) {
      console.error("[orders] approve failed", error.message);
      throw new Error("Could not approve this order.");
    }
    if (!updated) throw new Error("Order not found.");
    return { ok: true as const, orderRef: ref, licenseKey, registered: reg.registered, registerReason: reg.reason };
  });

export const rejectOrder = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) =>
    z
      .object({
        orderRef: z.string().trim().min(6).max(24),
        note: z.string().trim().max(500).optional().or(z.literal("")),
      })
      .parse(data),
  )
  .handler(async ({ context, data }) => {
    const { assertAdmin } = await import("./seo-monitor.db.server");
    await assertAdmin(context.userId);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: updated, error } = await (supabaseAdmin.from("orders") as any)
      .update({ status: "rejected", admin_note: data.note || null })
      .eq("order_ref", data.orderRef.toUpperCase())
      .select("order_ref")
      .maybeSingle();

    if (error) {
      console.error("[orders] reject failed", error.message);
      throw new Error("Could not update this order.");
    }
    if (!updated) throw new Error("Order not found.");
    return { ok: true as const };
  });
