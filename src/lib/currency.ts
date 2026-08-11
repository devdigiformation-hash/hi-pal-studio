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
  { code: "USD", symbol: "$", perGbp: 1.28, flag: "🇺🇸", round: 1 },
  { code: "PKR", symbol: "Rs ", perGbp: 360, flag: "🇵🇰", round: 100 },
  { code: "EUR", symbol: "€", perGbp: 1.17, flag: "🇪🇺", round: 1 },
  { code: "AED", symbol: "AED ", perGbp: 4.7, flag: "🇦🇪", round: 1 },
  { code: "SAR", symbol: "SAR ", perGbp: 4.8, flag: "🇸🇦", round: 1 },
  { code: "INR", symbol: "₹", perGbp: 107, flag: "🇮🇳", round: 10 },
  { code: "CAD", symbol: "C$", perGbp: 1.74, flag: "🇨🇦", round: 1 },
  { code: "AUD", symbol: "A$", perGbp: 1.93, flag: "🇦🇺", round: 1 },
];

export function getCurrency(code: string): CurrencyDef {
  return CURRENCIES.find((c) => c.code === code) ?? CURRENCIES[0]!;
}

export function convertFromGbp(gbp: number, code: string) {
  const c = getCurrency(code);
  const raw = gbp * c.perGbp;
  return Math.round(raw / c.round) * c.round;
}

export function formatPrice(gbp: number, code: string) {
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
    if (stored && stored !== current) {
      current = stored;
      setCode(stored);
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
