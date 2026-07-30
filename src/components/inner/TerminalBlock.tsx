import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TerminalLine {
  text: string;
  color?: string;
}

interface TerminalBlockProps {
  lines: TerminalLine[];
  className?: string;
  speed?: number;
  loop?: boolean;
}

/** Types out mono lines sequentially once the block scrolls into view. */
export default function TerminalBlock({
  lines,
  className,
  speed = 18,
  loop = true,
}: TerminalBlockProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [started, setStarted] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    if (lineIndex >= lines.length) {
      if (!loop) return;
      const reset = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, 4200);
      return () => clearTimeout(reset);
    }
    const current = lines[lineIndex].text;
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, 320);
    return () => clearTimeout(t);
  }, [started, lineIndex, charIndex, lines, speed, loop]);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded-[var(--r-lg)] border border-[var(--border-glass)] p-5 font-code text-[12px] leading-[1.9] md:text-[13px]",
        className,
      )}
      style={{ background: "#0A0D14", boxShadow: "var(--shadow-glass)" }}
    >
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--error)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--warning)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[var(--success)]" />
      </div>
      <div className="min-h-[168px] space-y-1">
        {lines.map((line, i) => {
          if (i > lineIndex) return null;
          const shown = i === lineIndex ? line.text.slice(0, charIndex) : line.text;
          return (
            <div
              key={`${line.text}-${i}`}
              className="whitespace-pre-wrap break-words"
              style={{ color: line.color ?? "var(--text-secondary)" }}
            >
              {shown}
              {i === lineIndex ? (
                <span className="animate-caret ml-0.5 inline-block text-[var(--cyan)]">▌</span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}