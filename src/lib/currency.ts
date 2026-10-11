import { useEffect, useState } from "react";

export interface CurrencyDef {
  code: string;
  symbol: string;
  perGbp: number;
  flag: string;
  round: number;
}

export const CURRENCIES: CurrencyDef[] = [
  { code: "GBP", symbol: "£", perGbp: 1, flag: "🇬🇧", round: 1 },
  { code: "PKR", symbol: "Rs ", perGbp: 360, flag: "🇵🇰", round: 100 },
];

export function getCurrency(code: string): CurrencyDef {
  return CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[0]!;
}

export function convertFromGbp(gbp: number, code: string) {
  const c = getCurrency(code);
  const raw = gbp * c.perGbp;
  return Math.round(raw / c.round) * c.round;
}

export function formatPrice(gbp: number, code: string, pkrOverride?: number) {
  if (code === "PKR" && typeof pkrOverride === "number") {
    return `Rs ${pkrOverride.toLocaleString("en-US")}`;
  }
  const c = getCurrency(code);
  return `${c.symbol}${convertFromGbp(gbp, code).toLocaleString("en-US")}`;
}

const KEY = "dbos-currency";
const listeners = new Set<(c: string) => void>();
let current = "GBP";

export function useCurrency() {
  const [code, setCode] = useState(current);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(KEY) : null;
    if (stored && (stored === "GBP" || stored === "PKR")) {
      current = stored;
      setCode(stored);
    } else {
      current = "GBP";
      setCode("GBP");
    }
    listeners.add(setCode);
    return () => {
      listeners.delete(setCode);
    };
  }, []);

  const change = (next: string) => {
    current = next;
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      /* ignore */
    }
    listeners.forEach((l) => l(next));
  };

  return { code, setCurrency: change };
}
