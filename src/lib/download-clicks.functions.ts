import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getRequestHeader } from "@tanstack/react-start/server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

export const trackDownloadClick = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z
      .object({
        source: z.string().min(1).max(80),
        platform: z.string().min(1).max(40).default("windows"),
        pagePath: z.string().max(300).optional(),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const { recordDownloadClick } = await import("./download-clicks.server");
    return recordDownloadClick({
      source: data.source,
      platform: data.platform,
      pagePath: data.pagePath ?? null,
      referrer: getRequestHeader("referer") ?? null,
      userAgent: getRequestHeader("user-agent") ?? null,
    });
  });

export const getDownloadStats = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { assertAdmin } = await import("./seo-monitor.db.server");
    await assertAdmin(context.userId);
    const { readDownloadStats } = await import("./download-clicks.server");
    return readDownloadStats();
  });
