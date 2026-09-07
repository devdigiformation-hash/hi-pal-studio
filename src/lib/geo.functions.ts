import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import type { Region } from "./payment-config";

// Resolve the visitor's pricing region from the edge country header. Cloudflare
// sets `cf-ipcountry`; we treat Pakistan as the "pk" region and everyone else as
// "intl". Read this server-side so the price can't be spoofed by the client.
export function regionFromCountry(country: string | null | undefined): Region {
  return (country || "").toUpperCase() === "PK" ? "pk" : "intl";
}

export const getGeoRegion = createServerFn({ method: "GET" }).handler(async () => {
  const country =
    getRequestHeader("cf-ipcountry") ||
    getRequestHeader("x-vercel-ip-country") ||
    getRequestHeader("x-country") ||
    null;
  return { region: regionFromCountry(country), country: country || null };
});
