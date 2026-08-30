import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  const ref = useRef<HTMLElement | null>(null);
  useScrollReveal(ref);

  return (
    <section
      id={id}
      ref={ref}
      className={cn("relative px-6 py-[60px] md:px-12 lg:px-20 lg:py-[120px]", className)}
    >
      {children}
    </section>
  );
}
