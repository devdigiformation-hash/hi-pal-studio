import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import type { Region, PlanId, PriceSet } from "./payment-config";

// Resolve the visitor's pricing region from the edge country header. Cloudflare
// sets `cf-ipcountry`; we treat Pakistan as the "pk" region and everyone else as
// "intl". Read this server-side so the price can't be spoofed by the client.
export function regionFromCountry(country: string | null | undefined): Region {
  return (country || "").toUpperCase() === "PK" ? "pk" : "intl";
}

function countryFromRequest(): string | null {
  return (
    getRequestHeader("cf-ipcountry") ||
    getRequestHeader("x-vercel-ip-country") ||
    getRequestHeader("x-country") ||
    null
  );
}

export const getGeoRegion = createServerFn({ method: "GET" }).handler(async () => {
  const country = countryFromRequest();
  return { region: regionFromCountry(country), country: country || null };
});

// Returns ONLY the visitor's own region's prices. The Pakistan price set is read
// from the server-only pricing module and is sent to the browser exclusively when
// the visitor is in Pakistan — non-PK visitors never receive it.
export const getPricing = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ region: Region; plans: Record<PlanId, PriceSet> }> => {
    const region = regionFromCountry(countryFromRequest());
    const { pricingForRegion } = await import("./pricing.server");
    return { region, plans: pricingForRegion(region) };
  },
);
