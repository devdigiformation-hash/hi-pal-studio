import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  path: string;
}

export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto mb-6 max-w-[1180px] px-1">
      <ol className="flex flex-wrap items-center gap-1.5 font-body text-[12.5px] text-[var(--text-muted)]">
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-[var(--text-secondary)]">
                  {c.name}
                </span>
              ) : (
                <Link to={c.path} className="transition-colors hover:text-[var(--cyan)]">
                  {c.name}
                </Link>
              )}
              {last ? null : <ChevronRight size={12} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
