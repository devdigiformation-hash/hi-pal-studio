// Client-safe checkout catalogue: plans + manual payment rails.

export type PlanId = "lifetime" | "custom_build" | "source_code";

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
    name: "Digi Biz OS — Lifetime Access",
    badge: "Desktop App · Gen 2",
    blurb: "Pay once. Own Digi Biz OS for life. No monthly software subscription.",
    pricePkr: 28000,
    priceUsd: 100,
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
  custom_build: {
    id: "custom_build",
    name: "Customised Software + Your Branding",
    badge: "White Label · Automation",
    blurb:
      "Your logo, your name, your workflows. A fully branded build of Digi Biz OS with 400+ automation workflows configured for your business.",
    pricePkr: 112000,
    priceUsd: 400,
    billingNote: "One-time payment · Custom build",
    includes: [
      "Everything in Lifetime Access",
      "Full white-label branding — logo, name, colours, installer",
      "400+ automation workflows configured for you",
      "Custom agent personas for your business",
      "WhatsApp, Email and Discord automation setup",
      "Your own AI provider keys wired in",
      "Onboarding and handover session",
      "Priority support for 6 months",
    ],
    bestFor: ["Agencies", "SMEs", "Consultants"],
  },
  source_code: {
    id: "source_code",
    name: "Full Source Code Licence",
    badge: "Developer · Full Ownership",
    blurb:
      "The complete Digi Biz OS codebase, yours to modify, rebrand and ship. Total ownership, no lock-in.",
    pricePkr: 196000,
    priceUsd: 700,
    billingNote: "One-time payment · Source code licence",
    includes: [
      "Everything in the Customised package",
      "Complete source code (desktop app + agent engine)",
      "Private repository access",
      "Build, sign and distribute your own installers",
      "Architecture and developer documentation",
      "Resale / commercial usage rights",
      "Technical walkthrough with our engineers",
      "12 months of update pulls",
    ],
    bestFor: ["Software Houses", "Dev Teams", "Resellers"],
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