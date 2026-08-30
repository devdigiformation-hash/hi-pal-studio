import { useEffect } from "react";
import type { RefObject } from "react";

/**
 * Observes every `.reveal-item` in scope and adds `revealed` when it enters view.
 */
export function useScrollReveal(root?: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const scope: ParentNode = root?.current ?? document;
    const items = Array.from(scope.querySelectorAll<HTMLElement>(".reveal-item"));
    if (items.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      items.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [root]);
}
