/**
 * ssrf.ts — URL safety gate for the audit engine.
 *
 * Every outbound fetch the scanner makes passes through assertPublicUrl(). It
 * blocks non-http(s) schemes, credentials in the URL, and hostnames that resolve
 * to loopback, private, link-local or cloud-metadata ranges — the classic SSRF
 * targets. It is a best-effort string/IP check (Workers cannot always resolve
 * DNS), so it is paired with size caps and timeouts at the fetch site.
 */

const BLOCKED_HOST = /^(localhost|.*\.local|.*\.internal|metadata\.google\.internal)$/i;

function ipv4Blocked(host: string): boolean {
  const m = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(host);
  if (!m) return false;
  const [a, b] = [Number(m[1]), Number(m[2])];
  if (a === 10) return true; // 10.0.0.0/8
  if (a === 127) return true; // loopback
  if (a === 0) return true;
  if (a === 169 && b === 254) return true; // link-local + AWS/GCP metadata 169.254.169.254
  if (a === 172 && b >= 16 && b <= 31) return true; // 172.16/12
  if (a === 192 && b === 168) return true; // 192.168/16
  if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT 100.64/10
  if (a >= 224) return true; // multicast / reserved
  return false;
}

function ipv6Blocked(host: string): boolean {
  const h = host.replace(/^\[|\]$/g, "").toLowerCase();
  return h === "::1" || h === "::" || h.startsWith("fc") || h.startsWith("fd") || h.startsWith("fe80") || h.startsWith("::ffff:127.") || h.startsWith("::ffff:10.") || h.startsWith("::ffff:192.168.");
}

export interface SafeUrl { url: URL; }

/** Throws with a user-safe message if the URL is not a public http(s) target. */
export function assertPublicUrl(raw: string): URL {
  let url: URL;
  try {
    url = new URL(String(raw || "").trim());
  } catch {
    throw new Error("That is not a valid URL. Use https://example.com/page.");
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") throw new Error("Only http and https URLs are supported.");
  if (url.username || url.password) throw new Error("URLs with embedded credentials are not allowed.");
  const host = url.hostname.toLowerCase();
  if (!host || BLOCKED_HOST.test(host)) throw new Error("That host is not allowed.");
  if (ipv4Blocked(host) || ipv6Blocked(host)) throw new Error("Private, loopback and metadata addresses are blocked.");
  return url;
}

/** A guarded fetch: SSRF gate, timeout, size cap, HTML/text only. Returns text. */
export async function safeFetchText(
  raw: string,
  opts: { timeoutMs?: number; maxBytes?: number; accept?: string } = {},
): Promise<{ url: string; status: number; html: string; headers: Headers; finalUrl: string }> {
  const url = assertPublicUrl(raw);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), opts.timeoutMs ?? 12000);
  try {
    const res = await fetch(url.toString(), {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; DigiWebIntelligence/1.0; +https://www.digibizos.co.uk/tools/ai-seo-checker)",
        Accept: opts.accept ?? "text/html,application/xhtml+xml,text/plain,application/xml",
      },
    });
    // Re-check the final URL after redirects (redirect-to-internal SSRF).
    try { assertPublicUrl(res.url || url.toString()); } catch { throw new Error("The URL redirected to a blocked address."); }
    const ctype = res.headers.get("content-type") || "";
    const MAX = opts.maxBytes ?? 3 * 1024 * 1024;
    let html = "";
    const reader = res.body?.getReader();
    if (reader) {
      const dec = new TextDecoder();
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        html += dec.decode(value, { stream: true });
        if (html.length > MAX) break;
      }
    } else {
      html = (await res.text()).slice(0, MAX);
    }
    void ctype;
    return { url: url.toString(), status: res.status, html, headers: res.headers, finalUrl: res.url || url.toString() };
  } finally {
    clearTimeout(timer);
  }
}
