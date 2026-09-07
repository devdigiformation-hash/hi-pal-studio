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
    intl: { gbp: 50, pkr: 18000, usd: 63, compareGbp: 69, comparePkr: 25000, compareUsd: 88 },
    pk: { gbp: 30, pkr: 10800, usd: 38, compareGbp: 50, comparePkr: 18000, compareUsd: 63 },
  },
  // Setup and Source Code are the same price in every region — only Lifetime
  // carries the Pakistan discount.
  custom_build: {
    intl: { gbp: 50, pkr: 18000, usd: 63, compareGbp: 79, comparePkr: 28000, compareUsd: 99 },
    pk: { gbp: 50, pkr: 18000, usd: 63, compareGbp: 79, comparePkr: 28000, compareUsd: 99 },
  },
  source_code: {
    intl: { gbp: 200, pkr: 72000, usd: 250, compareGbp: 279, comparePkr: 100000, compareUsd: 349 },
    pk: { gbp: 150, pkr: 54000, usd: 188, compareGbp: 200, comparePkr: 72000, compareUsd: 250 },
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
