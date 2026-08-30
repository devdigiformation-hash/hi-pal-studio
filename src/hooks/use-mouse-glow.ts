import { useCallback, useRef } from "react";

/** Tracks cursor position over an element and exposes it as --mouse-x/--mouse-y. */
export function useMouseGlow<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  const onMouseMove = useCallback((event: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mouse-x", `${x}%`);
    el.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mouse-x", "50%");
    el.style.setProperty("--mouse-y", "-20%");
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
