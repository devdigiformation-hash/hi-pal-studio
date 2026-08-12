import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { SITE_URL } from "./seo";
import type { runCrawl } from "./seo-monitor.server";

type Crawl = Awaited<ReturnType<typeof runCrawl>>;

export async function isAdmin(userId: string) {
  const { data } = await supabaseAdmin
    .from("user_roles")
    .select("role")
    .eq("user_id", userId)
    .eq("role", "admin")
    .maybeSingle();
  return Boolean(data);
}

export async function assertAdmin(userId: string) {
  if (!(await isAdmin(userId))) throw new Error("Forbidden: admin access required");
}

/** Grants admin to the first account that claims it. No-op once an admin exists. */
export async function bootstrapAdmin(userId: string) {
  if (await isAdmin(userId)) return { admin: true as const, granted: false };

  const { count } = await supabaseAdmin
    .from("user_roles")
    .select("id", { count: "exact", head: true })
    .eq("role", "admin");

  if ((count ?? 0) > 0) return { admin: false as const, granted: false };

  const { error } = await supabaseAdmin.from("user_roles").insert({ user_id: userId, role: "admin" });
  if (error) {
    console.error("[seo-monitor] admin bootstrap failed", error.message);
    return { admin: false as const, granted: false };
  }
  return { admin: true as const, granted: true };
}

export async function persistScan(crawl: Crawl) {
  const startedAt = new Date().toISOString();
  const { data: scan, error } = await supabaseAdmin
    .from("seo_scans")
    .insert({
      started_at: startedAt,
      finished_at: new Date().toISOString(),
      base_url: SITE_URL,
      sitemap_url_count: crawl.sitemapUrlCount,
      pages_checked: crawl.results.length,
      ok_count: crawl.okCount,
      warn_count: crawl.warnCount,
      error_count: crawl.errorCount,
      avg_score: crawl.avgScore,
      robots_ok: crawl.robotsOk,
      sitemap_ok: crawl.sitemapOk,
    })
    .select("id")
    .single();

  if (error || !scan) {
    console.error("[seo-monitor] scan insert failed", error?.message);
    throw new Error("Could not save the scan results.");
  }

  const rows = crawl.results.map((r) => ({ ...r, scan_id: scan.id }));
  const { error: pagesError } = await supabaseAdmin.from("seo_page_checks").insert(rows);
  if (pagesError) console.error("[seo-monitor] page insert failed", pagesError.message);

  return { scanId: scan.id };
}

export async function readOverview() {
  const { data: scans, error } = await supabaseAdmin
    .from("seo_scans")
    .select(
      "id, started_at, finished_at, sitemap_url_count, pages_checked, ok_count, warn_count, error_count, avg_score, robots_ok, sitemap_ok",
    )
    .order("started_at", { ascending: false })
    .limit(30);

  if (error) {
    console.error("[seo-monitor] overview failed", error.message);
    throw new Error("Could not load scan history.");
  }

  const latest = scans?.[0] ?? null;
  const pages = latest ? await readScanPages(latest.id) : [];
  return { scans: (scans ?? []).reverse(), latest, pages };
}

export async function readScanPages(scanId: string) {
  const { data, error } = await supabaseAdmin
    .from("seo_page_checks")
    .select("url, status_code, title, title_length, description_length, h1_count, canonical, has_og, has_jsonld, word_count, issues, score")
    .eq("scan_id", scanId)
    .order("score", { ascending: true });

  if (error) {
    console.error("[seo-monitor] pages failed", error.message);
    throw new Error("Could not load page results.");
  }
  return data ?? [];
}
