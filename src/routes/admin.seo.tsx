import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { claimAdmin, getSeoOverview, runSeoScan } from "@/lib/seo-monitor.functions";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import EyebrowLabel from "@/components/EyebrowLabel";
import CyanButton from "@/components/CyanButton";
import GhostButton from "@/components/GhostButton";

export const Route = createFileRoute("/admin/seo")({
  head: () => ({
    meta: [
      { title: "SEO Monitor — DIGI BIZ OS Admin" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Private SEO monitoring dashboard." },
    ],
  }),
  component: SeoMonitorPage,
});

function useSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      setReady(true);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  return { session, ready };
}

function SeoMonitorPage() {
  const { session, ready } = useSession();

  if (!ready) {
    return <Shell><p className="text-sm text-white/60">Checking your session…</p></Shell>;
  }
  if (!session) return <Shell><SignInCard /></Shell>;
  return <Shell><Dashboard /></Shell>;
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-40">
      <EyebrowLabel text="Private · Admin only" reveal={false} />
      <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
        <GradientText from="var(--cyan)" to="var(--violet)">SEO Monitor</GradientText>
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-white/60">
        Sitemap coverage and on-page health for digibizos.co.uk, tracked over time.
      </p>
      <div className="mt-8">{children}</div>
    </main>
  );
}

function SignInCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin/seo` },
        });
        if (error) throw error;
        toast.success("Account created. Check your email to confirm, then sign in.");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <GlassCard className="mx-auto max-w-md">
      <h2 className="text-lg font-semibold">{mode === "signin" ? "Admin sign in" : "Create admin account"}</h2>
      <form onSubmit={submit} className="mt-5 space-y-3">
        <input
          type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@digiformation.co.uk"
          className="w-full rounded-xl border border-[var(--border-glass)] bg-white/5 px-4 py-3 text-sm outline-none focus:border-[var(--cyan)]"
        />
        <input
          type="password" required minLength={8} value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-xl border border-[var(--border-glass)] bg-white/5 px-4 py-3 text-sm outline-none focus:border-[var(--cyan)]"
        />
        <CyanButton type="submit" className="w-full" disabled={busy}>
          {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Sign up"}
        </CyanButton>
      </form>
      <button
        type="button"
        onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
        className="mt-4 text-xs text-white/50 underline underline-offset-4 hover:text-white/80"
      >
        {mode === "signin" ? "No account yet? Create one" : "Already have an account? Sign in"}
      </button>
    </GlassCard>
  );
}

function Dashboard() {
  const qc = useQueryClient();
  const overviewFn = useServerFn(getSeoOverview);
  const claimFn = useServerFn(claimAdmin);
  const scanFn = useServerFn(runSeoScan);
  const [claimed, setClaimed] = useState(false);

  const overview = useQuery({
    queryKey: ["seo-overview", claimed],
    queryFn: () => overviewFn({ data: undefined }),
    retry: false,
  });

  const scan = useMutation({
    mutationFn: () => scanFn({ data: undefined }),
    onSuccess: () => {
      toast.success("Scan complete");
      qc.invalidateQueries({ queryKey: ["seo-overview"] });
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Scan failed"),
  });

  const forbidden = overview.isError && /admin access required|Forbidden/i.test(String(overview.error));

  if (overview.isLoading) return <p className="text-sm text-white/60">Loading dashboard…</p>;

  if (forbidden) {
    return (
      <GlassCard className="mx-auto max-w-md text-sm">
        <h2 className="text-lg font-semibold">Admin access required</h2>
        <p className="mt-2 text-white/60">
          This account has no admin role. If you are the first person setting this up, claim admin access now.
        </p>
        <div className="mt-5 flex gap-3">
          <CyanButton
            onClick={async () => {
              const res = await claimFn({ data: undefined });
              if (res.admin) {
                toast.success("Admin access granted");
                setClaimed(true);
              } else {
                toast.error("An admin already exists for this workspace.");
              }
            }}
          >
            Claim admin access
          </CyanButton>
          <GhostButton onClick={() => supabase.auth.signOut()}>Sign out</GhostButton>
        </div>
      </GlassCard>
    );
  }

  if (overview.isError) {
    return <p className="text-sm text-[var(--gold)]">{String((overview.error as Error).message)}</p>;
  }

  const data = overview.data!;
  const latest = data.latest;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <CyanButton onClick={() => scan.mutate()} disabled={scan.isPending}>
          {scan.isPending ? "Scanning site…" : "Run scan now"}
        </CyanButton>
        <GhostButton onClick={() => supabase.auth.signOut()}>Sign out</GhostButton>
        {latest && (
          <span className="font-mono text-xs text-white/45">
            Last run {new Date(latest.started_at).toLocaleString("en-GB")}
          </span>
        )}
      </div>

      {!latest ? (
        <GlassCard>
          <p className="text-sm text-white/60">No scans yet. Run your first scan to start tracking coverage over time.</p>
        </GlassCard>
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Sitemap URLs" value={latest.sitemap_url_count} hint={latest.sitemap_ok ? "sitemap.xml OK" : "sitemap unreachable"} tone={latest.sitemap_ok ? "cyan" : "gold"} />
            <Stat label="Pages checked" value={latest.pages_checked} hint={latest.robots_ok ? "robots.txt OK" : "robots.txt issue"} tone={latest.robots_ok ? "cyan" : "gold"} />
            <Stat label="Clean pages" value={latest.ok_count} hint={`${latest.warn_count} with warnings`} tone="violet" />
            <Stat label="Health score" value={`${Math.round(Number(latest.avg_score))}%`} hint={`${latest.error_count} broken`} tone={latest.error_count ? "gold" : "cyan"} />
          </div>

          <TrendCharts scans={data.scans} />
          <IssueBreakdown pages={data.pages} />
          <PageTable pages={data.pages} />
        </>
      )}
    </div>
  );
}

function Stat({ label, value, hint, tone }: { label: string; value: number | string; hint: string; tone: "cyan" | "violet" | "gold" }) {
  const colour = tone === "cyan" ? "var(--cyan)" : tone === "violet" ? "var(--violet)" : "var(--gold)";
  return (
    <GlassCard glowColor={colour} className="p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-white/45">{label}</p>
      <p className="mt-2 font-mono text-3xl font-bold" style={{ color: colour }}>{value}</p>
      <p className="mt-1 text-xs text-white/45">{hint}</p>
    </GlassCard>
  );
}

interface ScanRow {
  id: string;
  started_at: string;
  sitemap_url_count: number;
  pages_checked: number;
  ok_count: number;
  warn_count: number;
  error_count: number;
  avg_score: number | string;
}

function TrendCharts({ scans }: { scans: ScanRow[] }) {
  const series = scans.map((s) => ({
    date: new Date(s.started_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }),
    score: Math.round(Number(s.avg_score)),
    coverage: s.sitemap_url_count ? Math.round((s.pages_checked / s.sitemap_url_count) * 100) : 0,
    clean: s.ok_count,
    warnings: s.warn_count,
    errors: s.error_count,
  }));

  const axis = { stroke: "rgba(255,255,255,0.35)", fontSize: 11 };

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <GlassCard className="p-5">
        <h2 className="text-sm font-semibold text-white/80">Health score & sitemap coverage</h2>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={series}>
              <defs>
                <linearGradient id="scoreFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--cyan)" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="var(--cyan)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="date" tick={axis} tickLine={false} axisLine={false} />
              <YAxis domain={[0, 100]} tick={axis} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="score" stroke="var(--cyan)" fill="url(#scoreFill)" strokeWidth={2} name="Health %" />
              <Line type="monotone" dataKey="coverage" stroke="var(--violet)" strokeWidth={2} dot={false} name="Coverage %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      <GlassCard glowColor="var(--violet)" className="p-5">
        <h2 className="text-sm font-semibold text-white/80">Clean / warning / broken pages</h2>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={series}>
              <CartesianGrid stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="date" tick={axis} tickLine={false} axisLine={false} />
              <YAxis allowDecimals={false} tick={axis} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Line type="monotone" dataKey="clean" stroke="var(--cyan)" strokeWidth={2} dot={false} name="Clean" />
              <Line type="monotone" dataKey="warnings" stroke="var(--gold)" strokeWidth={2} dot={false} name="Warnings" />
              <Line type="monotone" dataKey="errors" stroke="#F45B69" strokeWidth={2} dot={false} name="Broken" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
    </div>
  );
}

const tooltipStyle = {
  background: "rgba(10,12,16,0.95)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 12,
  fontSize: 12,
} as const;

interface PageRow {
  url: string;
  status_code: number | null;
  title: string | null;
  title_length: number;
  description_length: number;
  h1_count: number;
  canonical: string | null;
  has_og: boolean;
  has_jsonld: boolean;
  word_count: number;
  issues: string[];
  score: number;
}

function IssueBreakdown({ pages }: { pages: PageRow[] }) {
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const p of pages) for (const i of p.issues) map.set(i, (map.get(i) ?? 0) + 1);
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [pages]);

  if (!counts.length) {
    return (
      <GlassCard className="p-5">
        <p className="text-sm text-[var(--cyan)]">No on-page issues found in the latest scan.</p>
      </GlassCard>
    );
  }

  return (
    <GlassCard glowColor="var(--gold)" className="p-5">
      <h2 className="text-sm font-semibold text-white/80">Issues by type (latest scan)</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {counts.map(([issue, n]) => (
          <li key={issue} className="flex items-center justify-between rounded-xl border border-[var(--border-glass)] bg-white/[0.03] px-4 py-2 text-sm">
            <span className="text-white/70">{issue}</span>
            <span className="font-mono text-[var(--gold)]">{n}</span>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

function PageTable({ pages }: { pages: PageRow[] }) {
  return (
    <GlassCard className="p-5">
      <h2 className="text-sm font-semibold text-white/80">Page-level checks</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[860px] text-left text-xs">
          <thead className="text-white/45">
            <tr className="border-b border-[var(--border-glass)]">
              <th className="py-2 pr-3 font-medium">URL</th>
              <th className="py-2 pr-3 font-medium">Status</th>
              <th className="py-2 pr-3 font-medium">Title</th>
              <th className="py-2 pr-3 font-medium">Desc</th>
              <th className="py-2 pr-3 font-medium">H1</th>
              <th className="py-2 pr-3 font-medium">Canon</th>
              <th className="py-2 pr-3 font-medium">OG</th>
              <th className="py-2 pr-3 font-medium">JSON-LD</th>
              <th className="py-2 pr-3 font-medium">Words</th>
              <th className="py-2 pr-3 font-medium">Score</th>
            </tr>
          </thead>
          <tbody className="font-mono">
            {pages.map((p) => (
              <tr key={p.url} className="border-b border-white/5 align-top">
                <td className="max-w-[260px] truncate py-2 pr-3 text-white/70" title={`${p.url}\n${p.issues.join(" · ")}`}>
                  {p.url.replace(/^https?:\/\/[^/]+/, "") || "/"}
                </td>
                <td className={`py-2 pr-3 ${p.status_code === 200 ? "text-[var(--cyan)]" : "text-[#F45B69]"}`}>{p.status_code ?? "—"}</td>
                <td className="py-2 pr-3 text-white/60">{p.title_length}</td>
                <td className="py-2 pr-3 text-white/60">{p.description_length}</td>
                <td className="py-2 pr-3 text-white/60">{p.h1_count}</td>
                <td className="py-2 pr-3">{p.canonical ? "✓" : "✗"}</td>
                <td className="py-2 pr-3">{p.has_og ? "✓" : "✗"}</td>
                <td className="py-2 pr-3">{p.has_jsonld ? "✓" : "✗"}</td>
                <td className="py-2 pr-3 text-white/60">{p.word_count}</td>
                <td className="py-2 pr-3" style={{ color: p.score >= 80 ? "var(--cyan)" : p.score >= 50 ? "var(--gold)" : "#F45B69" }}>{p.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}
