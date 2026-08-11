import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

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

    const { data: row, error } = await supabaseAdmin
      .from("orders")
      .select("order_ref, plan_name, amount, currency, payment_method, status, created_at")
      .eq("order_ref", data.orderRef.toUpperCase())
      .maybeSingle();

    if (error) {
      console.error("[orders] lookup failed", error.message);
      throw new Error("Could not look up that order right now.");
    }
    if (!row) return { found: false as const };

    return { found: true as const, order: row };
  });