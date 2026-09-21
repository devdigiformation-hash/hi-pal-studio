import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { Search as SearchIcon, ArrowRight, BookOpen, Layers, Cpu, Wrench } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import EyebrowLabel from "@/components/EyebrowLabel";
import { buildMeta, breadcrumbLd } from "@/lib/seo";
import { MODULES_LIST } from "@/content/modules-data";
import { BLOG_POSTS } from "@/content/blog-posts";
import { MODELS_LIST } from "@/content/models-data";
import { OPEN_SOURCE_SUBPAGES, type SubpageToolData } from "@/content/open-source-subpages";

const TITLE = "Search DIGI BIZ OS — AI Modules, Tools, Guides & Features";
const DESC =
  "Search across DIGI BIZ OS business modules, AI models, open-source desktop software tools, and automation engineering guides.";

export const Route = createFileRoute("/search")({
  head: () => {
    const { meta, links } = buildMeta({ path: "/search", title: TITLE, description: DESC });
    return {
      meta,
      links,
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Search", path: "/search" },
            ]),
          ),
        },
      ],
    };
  },
  component: SearchPage,
});

interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: "Module" | "Blog" | "Model" | "Open Source";
  tag?: string;
}

function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("All");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("q");
      if (q) setQuery(q);
    }
  }, []);

  const allItems: SearchResult[] = useMemo(() => {
    const items: SearchResult[] = [];

    // Modules
    MODULES_LIST.forEach((m) => {
      items.push({
        title: m.name,
        description: m.metaDescription,
        url: `/modules/${m.slug}`,
        category: "Module",
        tag: m.eyebrow,
      });
    });

    // Blog posts
    BLOG_POSTS.forEach((b) => {
      items.push({
        title: b.title,
        description: b.description,
        url: `/blog/${b.slug}`,
        category: "Blog",
        tag: b.cluster,
      });
    });

    // Models
    MODELS_LIST.forEach((m) => {
      items.push({
        title: m.name,
        description: m.metaDescription,
        url: `/models/${m.slug}`,
        category: "Model",
        tag: m.category,
      });
    });

    // Open Source Tools
    (Object.values(OPEN_SOURCE_SUBPAGES) as SubpageToolData[]).forEach((t) => {
      items.push({
        title: t.name,
        description: t.tagline,
        url: t.route,
        category: "Open Source",
        tag: t.category,
      });
    });

    return items;
  }, []);

  const filtered = useMemo(() => {
    const qTrim = query.trim().toLowerCase();
    return allItems.filter((item) => {
      const matchCat = selectedCat === "All" || item.category === selectedCat;
      if (!matchCat) return false;
      if (!qTrim) return true;
      return (
        item.title.toLowerCase().includes(qTrim) ||
        item.description.toLowerCase().includes(qTrim) ||
        (Boolean(item.tag) && item.tag!.toLowerCase().includes(qTrim))
      );
    });
  }, [allItems, query, selectedCat]);

  const handleSearchChange = (val: string) => {
    setQuery(val);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (val) {
        url.searchParams.set("q", val);
      } else {
        url.searchParams.delete("q");
      }
      window.history.replaceState({}, "", url.toString());
    }
  };

  const categories = ["All", "Module", "Blog", "Open Source", "Model"];

  return (
    <main className="min-h-screen pt-[60px] md:pt-[72px]">
      <SectionWrapper>
        <div className="mx-auto max-w-4xl text-center">
          <EyebrowLabel text="Knowledge & System Discovery" />
          <h1 className="mt-4 font-display text-[32px] font-bold tracking-tight text-white md:text-[46px]">
            Search <GradientText>DIGI BIZ OS</GradientText>
          </h1>
          <p className="mt-3 font-body text-[15px] leading-relaxed text-zinc-400 md:text-[16px]">
            Instant access to all modules, open-source software, models, and practical automation guides.
          </p>

          {/* Search Input Bar */}
          <div className="relative mt-8 max-w-2xl mx-auto">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-zinc-400">
              <SearchIcon size={18} />
            </div>
            <input
              type="search"
              value={query}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search features, CRM, voice AI, models, open-source tools..."
              className="w-full rounded-full border border-white/15 bg-black/60 py-3.5 pl-11 pr-4 font-body text-[15px] text-white placeholder-zinc-500 shadow-[0_0_30px_rgba(47,224,200,0.08)] outline-none transition focus:border-[var(--cyan)] focus:ring-1 focus:ring-[var(--cyan)]"
              autoFocus
            />
          </div>

          {/* Filter Pills */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`rounded-full px-4 py-1.5 font-mono text-[12px] transition ${
                  selectedCat === cat
                    ? "bg-[var(--cyan)] text-black font-semibold shadow-[0_0_15px_rgba(47,224,200,0.4)]"
                    : "border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Stream */}
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-zinc-400">
            <span>
              Showing {filtered.length} {filtered.length === 1 ? "result" : "results"}
              {query.trim() ? ` for "${query.trim()}"` : ""}
            </span>
            {selectedCat !== "All" && <span>Category: {selectedCat}</span>}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-12 text-center py-12 rounded-2xl border border-dashed border-white/10">
              <p className="font-display text-[16px] text-zinc-300">No matching items found</p>
              <p className="mt-1 font-body text-[13px] text-zinc-500">
                Try searching for broader keywords like "CRM", "voice", "lead", "video", or "models".
              </p>
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((item, idx) => (
                <Link key={idx} to={item.url} className="group block">
                  <GlassCard className="h-full p-5 transition group-hover:border-[var(--cyan)]/40 group-hover:shadow-[0_0_20px_rgba(47,224,200,0.08)]">
                    <div className="flex items-center justify-between gap-2">
                      <span className="flex items-center gap-1.5 rounded bg-white/5 px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider text-[var(--cyan)] border border-white/10">
                        {item.category === "Module" && <Layers size={11} />}
                        {item.category === "Blog" && <BookOpen size={11} />}
                        {item.category === "Model" && <Cpu size={11} />}
                        {item.category === "Open Source" && <Wrench size={11} />}
                        {item.category}
                      </span>
                      {item.tag && (
                        <span className="truncate max-w-[140px] font-mono text-[10.5px] text-zinc-400">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 font-display text-[16px] font-semibold text-white group-hover:text-[var(--cyan)] transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowRight
                        size={14}
                        className="text-zinc-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--cyan)]"
                      />
                    </h3>

                    <p className="mt-2 line-clamp-2 font-body text-[13px] leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </GlassCard>
                </Link>
              ))}
            </div>
          )}
        </div>
      </SectionWrapper>
    </main>
  );
}