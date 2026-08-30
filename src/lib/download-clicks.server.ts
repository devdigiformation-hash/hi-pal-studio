import { supabaseAdmin } from "@/integrations/supabase/client.server";

export async function recordDownloadClick(input: {
  source: string;
  platform: string;
  pagePath?: string | null;
  referrer?: string | null;
  userAgent?: string | null;
}) {
  const { error } = await supabaseAdmin.from("download_clicks").insert({
    source: input.source.slice(0, 80),
    platform: input.platform.slice(0, 40),
    page_path: input.pagePath?.slice(0, 300) ?? null,
    referrer: input.referrer?.slice(0, 300) ?? null,
    user_agent: input.userAgent?.slice(0, 400) ?? null,
  });
  if (error) console.error("[download-clicks] insert failed", error.message);
  return { ok: !error };
}

export async function readDownloadStats() {
  const since = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString();
  const { data, error } = await supabaseAdmin
    .from("download_clicks")
    .select("source, platform, page_path, created_at")
    .gte("created_at", since)
    .order("created_at", { ascending: false })
    .limit(5000);

  if (error) throw new Error(error.message);
  const rows = data ?? [];

  const now = Date.now();
  const within = (days: number) =>
    rows.filter((r) => now - new Date(r.created_at as string).getTime() <= days * 86400000).length;

  const bySource = new Map<string, number>();
  const byPlatform = new Map<string, number>();
  for (const r of rows) {
    bySource.set(r.source as string, (bySource.get(r.source as string) ?? 0) + 1);
    byPlatform.set(r.platform as string, (byPlatform.get(r.platform as string) ?? 0) + 1);
  }

  const daily: { date: string; clicks: number }[] = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now - i * 86400000);
    const key = d.toISOString().slice(0, 10);
    daily.push({
      date: key,
      clicks: rows.filter((r) => (r.created_at as string).slice(0, 10) === key).length,
    });
  }

  return {
    total: rows.length,
    today: within(1),
    last7: within(7),
    last30: within(30),
    bySource: [...bySource.entries()]
      .map(([source, clicks]) => ({ source, clicks }))
      .sort((a, b) => b.clicks - a.clicks),
    byPlatform: [...byPlatform.entries()]
      .map(([platform, clicks]) => ({ platform, clicks }))
      .sort((a, b) => b.clicks - a.clicks),
    daily,
    recent: rows.slice(0, 25).map((r) => ({
      source: r.source as string,
      platform: r.platform as string,
      pagePath: (r.page_path as string) ?? "",
      createdAt: r.created_at as string,
    })),
  };
}
