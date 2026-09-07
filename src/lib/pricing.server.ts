// SERVER-ONLY pricing table. The Pakistan price set lives here and is NEVER
// bundled into client code — the server hands each visitor only their own
// region's numbers (see getPricing in geo.functions.ts). This is what keeps the
// Pakistan prices hidden from everyone outside Pakistan, VPN or not: a non-PK
// browser never receives them at all.
//
// `.server.ts` is externalised from the client bundle by the build, so importing
// this from a route/component would fail — only import it inside server handlers.
import type { PlanId, Region, Currency, PriceSet } from "./payment-config";

const REGIONAL_PRICES: Record<PlanId, Record<Region, PriceSet>> = {
  lifetime: {
    intl: { gbp: 49, pkr: 17640, usd: 61, compareGbp: 69, comparePkr: 25000, compareUsd: 88 },
    pk: { gbp: 34, pkr: 12240, usd: 43, compareGbp: 49, comparePkr: 18000, compareUsd: 61 },
  },
  // Pakistan carries a discount on every plan; international keeps the higher price.
  custom_build: {
    intl: { gbp: 79, pkr: 28440, usd: 99, compareGbp: 119, comparePkr: 42000, compareUsd: 149 },
    pk: { gbp: 49, pkr: 17640, usd: 61, compareGbp: 79, comparePkr: 28000, compareUsd: 99 },
  },
  source_code: {
    intl: { gbp: 199, pkr: 71640, usd: 249, compareGbp: 279, comparePkr: 100000, compareUsd: 349 },
    pk: { gbp: 149, pkr: 53640, usd: 186, compareGbp: 199, comparePkr: 72000, compareUsd: 249 },
  },
};

/** The full price set for every plan, for one region only. */
export function pricingForRegion(region: Region): Record<PlanId, PriceSet> {
  return {
    lifetime: REGIONAL_PRICES.lifetime[region],
    custom_build: REGIONAL_PRICES.custom_build[region],
    source_code: REGIONAL_PRICES.source_code[region],
  };
}

/** Authoritative amount for an order, resolved server-side. */
export function resolveAmount(planId: PlanId, region: Region, currency: Currency): number {
  const p = REGIONAL_PRICES[planId][region];
  return currency === "PKR" ? p.pkr : currency === "GBP" ? p.gbp : p.usd;
}
