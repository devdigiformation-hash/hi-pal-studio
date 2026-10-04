import { useCallback } from "react";
import { trackDownloadClick } from "./download-clicks.functions";
import { trackEvent } from "./analytics";

/** Fire-and-forget click tracking for download CTAs. Never blocks navigation. */
export function useTrackDownload() {
  return useCallback((source: string, platform = "windows") => {
    try {
      trackEvent("download_click", {
        source,
        platform,
        page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
      });
      void trackDownloadClick({
        data: {
          source,
          platform,
          pagePath: typeof window !== "undefined" ? window.location.pathname : undefined,
        },
      }).catch(() => {});
    } catch {
      /* tracking must never break the UI */
    }
  }, []);
}
