import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const claimAdmin = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { bootstrapAdmin } = await import("./seo-monitor.db.server");
    return bootstrapAdmin(context.userId);
  });

export const getSeoOverview = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { assertAdmin, readOverview } = await import("./seo-monitor.db.server");
    await assertAdmin(context.userId);
    return readOverview();
  });

export const getScanPages = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((data: unknown) => z.object({ scanId: z.string().uuid() }).parse(data))
  .handler(async ({ context, data }) => {
    const { assertAdmin, readScanPages } = await import("./seo-monitor.db.server");
    await assertAdmin(context.userId);
    return readScanPages(data.scanId);
  });

export const runSeoScan = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { assertAdmin, persistScan } = await import("./seo-monitor.db.server");
    await assertAdmin(context.userId);
    const { runCrawl } = await import("./seo-monitor.server");
    const crawl = await runCrawl();
    return persistScan(crawl);
  });
