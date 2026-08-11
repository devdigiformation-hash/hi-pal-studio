// Client-safe checkout catalogue: plans + manual payment rails.

export type PlanId = "lifetime" | "custom_build" | "source_code";

export interface Plan {
  id: PlanId;
  name: string;
  badge: string;
  blurb: string;
  pricePkr: number;
  priceUsd: number;
  priceGbp: number;
  comparePkr?: number;
  compareUsd?: number;
  billingNote: string;
  includes: string[];
  bestFor: string[];
}

export const PLANS: Record<PlanId, Plan> = {
  lifetime: {
    id: "lifetime",
    name: "DIGI BIZ OS — Lifetime Access",
    badge: "Desktop App · Gen 2",
    blurb: "Pay once. Own DIGI BIZ OS for life. No monthly software subscription.",
    pricePkr: 18000,
    priceUsd: 64,
    priceGbp: 50,
    billingNote: "One-time payment · Lifetime access",
    includes: [
      "One-time payment — no monthly subscription",
      "Lifetime access to DIGI BIZ OS Gen 2",
      "All Gen 2 updates included",
      "Activate on up to 3 PCs",
      "Connect your own AI API key or ChatGPT account",
      "Voice intelligence + AI agents",
      "Windows 10 & 11 support",
    ],
    bestFor: ["Individual Users", "Solo Operators", "Tech Enthusiasts"],
  },
  source_code: {
    id: "source_code",
    name: "Full Source Code Licence",
    badge: "Developer · Full Ownership",
    blurb:
      "Buy the complete source code and rebuild DIGI BIZ OS around your business. Customise every screen, workflow and agent, then automate your operations A to Z — with full commercial rights.",
    pricePkr: 36000,
    priceUsd: 127,
    priceGbp: 99,
    billingNote: "One-time payment · Source code licence",
    includes: [
      "Everything in Lifetime Access",
      "Complete source code (desktop app + agent engine)",
      "Customise every feature for your business",
      "Build end-to-end business automation A to Z",
      "Private developer access and repository handover",
      "Build, sign and distribute your own installers",
      "Architecture and developer documentation",
      "Resale / commercial usage rights",
      "Technical walkthrough with our engineers",
      "12 months of update pulls",
    ],
    bestFor: ["Software Houses", "Dev Teams", "Resellers", "Enterprise Builders"],
  },
  custom_build: {
    id: "custom_build",
    name: "Customised Software + Your Branding",
    badge: "White Label · Automation",
    blurb:
      "Your logo, your name, your workflows. A fully branded build of DIGI BIZ OS with 400+ automation workflows configured for your business.",
    pricePkr: 72000,
    priceUsd: 255,
    priceGbp: 199,
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
};

export const PLAN_IDS = Object.keys(PLANS) as PlanId[];

export type MethodId =
  | "jazzcash"
  | "easypaisa"
  | "sadapay"
  | "nayapay"
  | "ubl"
  | "gbp"
  | "usd";

export type Currency = "PKR" | "GBP" | "USD";

export interface PaymentMethod {
  id: MethodId;
  label: string;
  currency: Currency;
  region: string;
  fields: { label: string; value: string; copy?: boolean }[];
  steps: string[];
}

export const WHATSAPP_NUMBER = "923164467464";
export const SUPPORT_EMAIL = "info@digiformation.co.uk";

const MOBILE_ACCOUNT = "0316 4467464";
const ACCOUNT_TITLE = "Muhammad Haroon";

function mobileWallet(id: MethodId, label: string): PaymentMethod {
  return {
    id,
    label,
    currency: "PKR",
    region: "Pakistan",
    fields: [
      { label: "Account Title", value: ACCOUNT_TITLE },
      { label: "Mobile Account", value: MOBILE_ACCOUNT, copy: true },
    ],
    steps: [
      `Open your ${label} app`,
      `Send to Mobile Account ${MOBILE_ACCOUNT}`,
      "Transfer the exact amount shown above",
      "Take a screenshot of the receipt",
      "Submit this form, then confirm on WhatsApp",
    ],
  };
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  mobileWallet("jazzcash", "JazzCash"),
  mobileWallet("easypaisa", "EasyPaisa"),
  mobileWallet("sadapay", "SadaPay"),
  mobileWallet("nayapay", "NayaPay"),
  {
    id: "ubl",
    label: "UBL Bank",
    currency: "PKR",
    region: "Pakistan",
    fields: [
      { label: "Account Title", value: ACCOUNT_TITLE },
      { label: "Bank", value: "United Bank Limited (UBL)" },
      { label: "Account Number", value: "1482314848734", copy: true },
      { label: "IBAN", value: "PK21UNIL0109000314848734", copy: true },
    ],
    steps: [
      "Open your banking app or visit a UBL branch",
      "Transfer to the UBL account / IBAN above",
      "Use your order reference as the payment note",
      "Keep the transfer receipt",
      "Submit this form, then confirm on WhatsApp",
    ],
  },
  {
    id: "gbp",
    label: "UK Bank (GBP)",
    currency: "GBP",
    region: "United Kingdom",
    fields: [
      { label: "Account Title", value: ACCOUNT_TITLE },
      { label: "Bank", value: "Clear Bank" },
      { label: "Account Number", value: "12863656", copy: true },
      { label: "Sort Code", value: "04-28-12", copy: true },
      { label: "IBAN", value: "GB20CLRB04281286365680", copy: true },
      { label: "SWIFT / BIC", value: "CLRBGB22XXX", copy: true },
    ],
    steps: [
      "Open your UK banking app",
      "Add the Clear Bank details above as a payee",
      "Send the exact GBP amount shown",
      "Use your order reference as the payment reference",
      "Submit this form, then confirm on WhatsApp",
    ],
  },
  {
    id: "usd",
    label: "US Bank (USD)",
    currency: "USD",
    region: "United States / International",
    fields: [
      { label: "Account Title", value: ACCOUNT_TITLE },
      { label: "Bank", value: "JP Morgan Chase" },
      { label: "Account Number", value: "30000002945251", copy: true },
      { label: "Routing (ACH)", value: "028000024", copy: true },
      { label: "Account Type", value: "Checking" },
    ],
    steps: [
      "Open your bank or transfer app (ACH / wire)",
      "Add the JP Morgan Chase details above",
      "Send the exact USD amount shown",
      "Use your order reference as the memo",
      "Submit this form, then confirm on WhatsApp",
    ],
  },
];

export const GBP_PER_USD = 0.8;

export function amountForMethod(plan: Plan, method: PaymentMethod) {
  if (method.currency === "PKR") return plan.pricePkr;
  if (method.currency === "GBP") return plan.priceGbp;
  return plan.priceUsd;
}

export function comparePriceFor(plan: Plan, currency: Currency) {
  if (currency === "PKR") return plan.comparePkr;
  if (!plan.compareUsd) return undefined;
  return currency === "GBP" ? Math.round(plan.compareUsd * GBP_PER_USD) : plan.compareUsd;
}

export function formatAmount(amount: number, currency: Currency) {
  const n = amount.toLocaleString("en-US");
  if (currency === "PKR") return `Rs ${n}`;
  if (currency === "GBP") return `£${n}`;
  return `$${n}`;
}