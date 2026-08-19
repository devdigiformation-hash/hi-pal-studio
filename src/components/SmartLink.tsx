import { Link } from "@tanstack/react-router";
import type { ComponentType, ReactNode } from "react";

const STATIC_TOP = new Set([
  "/",
  "/agents",
  "/blog",
  "/checkout",
  "/delivery",
  "/desktop-os",
  "/features",
  "/integrations",
  "/open-source",
  "/pricing",
  "/privacy",
  "/refund",
  "/terms",
  "/voice-ai",
]);

/**
 * Router-aware link that resolves generated SEO paths (which live behind
 * dynamic `$slug` routes) to the correct typed route + params.
 */
export default function SmartLink({
  to,
  className,
  children,
  ariaLabel,
  onClick,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
}) {
  const segments = to.split("/").filter(Boolean);
  let props: Record<string, unknown> = { to };

  if (!STATIC_TOP.has(to)) {
    if (segments.length === 1) {
      props = { to: "/$slug", params: { slug: segments[0] } };
    } else if (segments.length === 2 && segments[0] === "features") {
      props = { to: "/features/$slug", params: { slug: segments[1] } };
    } else if (segments.length === 2 && segments[0] === "blog") {
      props = { to: "/blog/$slug", params: { slug: segments[1] } };
    }
  }

  const AnyLink = Link as unknown as ComponentType<Record<string, unknown>>;
  return (
    <AnyLink {...props} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </AnyLink>
  );
}
