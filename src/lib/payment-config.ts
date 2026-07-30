// Client-safe checkout catalogue: plans + manual payment rails.

export type PlanId = "lifetime" | "pro_monthly" | "pro_annual";

export interface Plan {
  id: PlanId;
  name: string;
  badge: string;
  blurb: string;
  pricePkr: number;
  priceUsd: number;
  comparePkr?: number;
  compareUsd?: number;
  billingNote: string;
  includes: string[];
  bestFor: string[];
}

export const PLANS: Record<PlanId, Plan> = {
  lifetime: {
    id: "lifetime",
    name: "Digi Biz OS — Lifetime Licence",
    badge: "Desktop App · Gen 2",
    blurb: "Pay once. Own Digi Biz OS for life. No monthly software subscription.",
    pricePkr: 15700,
    priceUsd: 56,
    comparePkr: 22000,
    compareUsd: 79,
    billingNote: "One-time payment · Lifetime access",
    includes: [
      "One-time payment — no monthly subscription",
      "Lifetime access to Digi Biz OS Gen 2",
      "All Gen 2 updates included",
      "Activate on up to 3 PCs",
      "Connect your own AI API key or ChatGPT account",
      "Voice intelligence + Agent Town",
      "Windows 10 & 11 support",
    ],
    bestFor: ["Individual Users", "Solo Operators", "Tech Enthusiasts"],
  },
  pro_monthly: {
    id: "pro_monthly",
    name: "Digi Biz OS Pro — Monthly",
    badge: "Subscription · Pro",
    blurb: "Full Pro workspace, billed monthly. Cancel any time.",
    pricePkr: 8200,
    priceUsd: 29,
    billingNote: "Billed monthly",
    includes: [
      "All 104+ IPC handlers unlocked",
      "Agent Town — 27 concurrent agents",
      "Gemini Live 2-way voice streaming",
      "WhatsApp, Email and Discord automation",
      "Priority model routing",
      "Email support within 24 hours",
    ],
    bestFor: ["Freelancers", "Small Teams"],
  },
  pro_annual: {
    id: "pro_annual",
    name: "Digi Biz OS Pro — Annual",
    badge: "Subscription · Pro",
    blurb: "Full Pro workspace, billed annually. Save 20%.",
    pricePkr: 78000,
    priceUsd: 276,
    comparePkr: 98400,
    compareUsd: 348,
    billingNote: "Billed annually · Save 20%",
    includes: [
      "Everything in Pro Monthly",
      "Two months free vs monthly billing",
      "Priority onboarding session",
      "Locked-in renewal pricing",
    ],
    bestFor: ["Agencies", "Growing Teams"],
  },
};

export const PLAN_IDS = Object.keys(PLANS) as PlanId[];

export type MethodId = "jazzcash" | "bank" | "usdt" | "binance" | "redotpay";

export interface PaymentMethod {
  id: MethodId;
  label: string;
  currency: "PKR" | "USD";
  region: string;
  fields: { label: string; value: string; copy?: boolean }[];
  steps: string[];
}

export const WHATSAPP_NUMBER = "923164467464";
export const SUPPORT_EMAIL = "info@digiformation.co.uk";

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "jazzcash",
    label: "JazzCash",
    currency: "PKR",
    region: "Pakistan",
    fields: [
      { label: "Account Title", value: "Digiformation Ltd" },
      { label: "Mobile Number", value: "0316 4467464", copy: true },
    ],
    steps: [
      "Open your JazzCash app",
      "Send to Mobile Account 0316 4467464",
      "Transfer the exact amount shown",
      "Take a screenshot of the receipt",
      "Submit this form, then confirm on WhatsApp",
    ],
  },
  {
    id: "bank",
    label: "Bank Transfer",
    currency: "PKR",
    region: "Pakistan",
    fields: [
      { label: "Account Title", value: "Digiformation Ltd" },
      { label: "Bank", value: "Meezan Bank" },
      { label: "IBAN", value: "PK36MEZN0000123456789012", copy: true },
    ],
    steps: [
      "Open your banking app or visit a branch",
      "Transfer to the IBAN above",
      "Use your order reference as the payment note",
      "Keep the transfer receipt",
      "Submit this form, then confirm on WhatsApp",
    ],
  },
  {
    id: "usdt",
    label: "Crypto (USDT)",
    currency: "USD",
    region: "International",
    fields: [
      { label: "Network", value: "TRC-20 (Tron)" },
      { label: "Wallet Address", value: "TSc7Xk9QDigiBizOSWalletExample1234", copy: true },
    ],
    steps: [
      "Open your crypto wallet or exchange",
      "Select USDT on the TRC-20 network",
      "Send the exact USD amount shown",
      "Copy the transaction hash (TXID)",
      "Paste the TXID below and submit",
    ],
  },
  {
    id: "binance",
    label: "Binance Pay",
    currency: "USD",
    region: "International",
    fields: [
      { label: "Binance Pay ID", value: "418772930", copy: true },
      { label: "Account Name", value: "Digiformation Ltd" },
    ],
    steps: [
      "Open Binance → Pay → Send",
      "Enter Pay ID 418772930",
      "Send the exact USD amount shown",
      "Copy the Binance order ID",
      "Paste the order ID below and submit",
    ],
  },
  {
    id: "redotpay",
    label: "Redot Pay",
    currency: "USD",
    region: "International",
    fields: [
      { label: "Redot Pay ID", value: "1099254771", copy: true },
      { label: "Account Name", value: "Digiformation Ltd" },
    ],
    steps: [
      "Open Redot Pay → Transfer",
      "Enter Redot ID 1099254771",
      "Send the exact USD amount shown",
      "Copy the transfer reference",
      "Paste the reference below and submit",
    ],
  },
];

export function amountForMethod(plan: Plan, method: PaymentMethod) {
  return method.currency === "PKR" ? plan.pricePkr : plan.priceUsd;
}

export function formatAmount(amount: number, currency: "PKR" | "USD") {
  return currency === "PKR"
    ? `Rs ${amount.toLocaleString("en-US")}`
    : `$${amount.toLocaleString("en-US")}`;
}