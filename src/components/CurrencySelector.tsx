import { CURRENCIES, useCurrency } from "@/lib/currency";

export default function CurrencySelector({ className = "" }: { className?: string }) {
  const { code, setCurrency } = useCurrency();

  return (
    <label
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--border-glass)] px-3 py-1.5 backdrop-blur-xl ${className}`}
      style={{ background: "var(--bg-glass)" }}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
        Currency
      </span>
      <select
        aria-label="Select currency"
        value={code}
        onChange={(e) => setCurrency(e.target.value)}
        className="cursor-pointer bg-transparent font-mono text-[12px] text-[var(--text-primary)] outline-none"
      >
        {CURRENCIES.map((c) => (
          <option key={c.code} value={c.code} className="bg-[var(--bg-surface)] text-[var(--text-primary)]">
            {c.flag} {c.code}
          </option>
        ))}
      </select>
    </label>
  );
}
