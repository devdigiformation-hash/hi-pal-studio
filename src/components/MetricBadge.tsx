import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MetricBadgeProps {
  value: string;
  label: string;
  color?: string;
  className?: string;
}

export default function MetricBadge({
  value,
  label,
  color = "var(--cyan)",
  className,
}: MetricBadgeProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setEntered(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ background: "var(--bg-glass-light)", borderRadius: "var(--r-md)" }}
      className={cn(
        "border border-[var(--border-glass)] px-5 py-4 backdrop-blur-xl transition-colors duration-300 hover:border-[var(--border-hover)]",
        className,
      )}
    >
      <div
        style={{ color, perspective: "600px" }}
        className={cn("font-code text-2xl font-medium", entered && "animate-counter-roll")}
      >
        {value}
      </div>
      <div className="mt-1 font-body text-[13px] text-[var(--text-muted)]">{label}</div>
    </div>
  );
}
