import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TickList({
  items,
  color = "var(--cyan)",
  className,
}: {
  items: string[];
  color?: string;
  className?: string;
}) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check size={17} color={color} strokeWidth={2.4} className="mt-[3px] shrink-0" />
          <span className="font-body text-[14px] leading-[1.7] text-[var(--text-secondary)] md:text-[15px]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}