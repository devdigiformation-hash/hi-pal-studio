import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { supabase } from "@/integrations/supabase/client";
import { getDownloadStats } from "@/lib/download-clicks.functions";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import EyebrowLabel from "@/components/EyebrowLabel";

export const Route = createFileRoute("/admin/downloads")({
  head: () => ({
    meta: [
      { title: "Download Clicks — DIGI BIZ OS Admin" },
      { name: "robots", content: "noindex, nofollow" },
      { name: "description", content: "Private download click analytics dashboard." },
    ],
  }),
  component: DownloadsPage,
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

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-24 pt-40">
      <EyebrowLabel text="Private · Admin only" reveal={false} />
      <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
        <GradientText from="var(--cyan)" to="var(--violet)">Download Clicks</GradientText>
      </h1>
      <p className="mt-2 max-w-2xl text-sm text-white/60">
        How many people click “Download for Windows” across the site.
      </p>
      <div className="mt-8">{children}</div>
    </main>
  );
}

function DownloadsPage() {
  const { session, ready } = useSession();
  if (!ready) return <Shell><p className="text-sm text-white/60">Checking your session…</p></Shell>;
  if (!session)
    return (
      <Shell>
        <GlassCard className="p-6">
          <p className="text-sm text-white/70">Sign in with your admin account to view this dashboard.</p>
        </GlassCard>
      </Shell>
    );
  return <Shell><Dashboard /></Shell>;
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <GlassCard className="p-5">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">{label}</p>
      <p className="mt-2 font-display text-3xl font-bold text-white">{value}</p>
    </GlassCard>
  );
}

function Dashboard() {
  const fetchStats = useServerFn(getDownloadStats);
  const { data, isLoading, error } = useQuery({
    queryKey: ["download-stats"],
    queryFn: () => fetchStats(),
    refetchInterval: 60_000,
  });

  if (isLoading) return <p className="text-sm text-white/60">Loading click data…</p>;
  if (error) return <p className="text-sm text-red-400">{(error as Error).message}</p>;
  if (!data) return null;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Today" value={data.today} />
        <Stat label="Last 7 days" value={data.last7} />
        <Stat label="Last 30 days" value={data.last30} />
        <Stat label="Total (90d)" value={data.total} />
      </div>

      <GlassCard className="p-5">
        <p className="mb-4 font-display text-sm font-semibold text-white/80">Clicks per day (last 30 days)</p>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.daily}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="date" tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 10 }} tickFormatter={(v: string) => v.slice(5)} />
              <YAxis allowDecimals={false} tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 10 }} />
              <Tooltip contentStyle={{ background: "#0A0C10", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 12 }} />
              <Bar dataKey="clicks" fill="var(--cyan)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>

      <div className="grid gap-4 lg:grid-cols-2">
        <GlassCard className="p-5">
          <p className="mb-3 font-display text-sm font-semibold text-white/80">By button</p>
          {data.bySource.length === 0 ? (
            <p className="text-sm text-white/50">No clicks recorded yet.</p>
          ) : (
            <ul className="space-y-2">
              {data.bySource.map((s) => (
                <li key={s.source} className="flex items-center justify-between text-sm">
                  <span className="font-mono text-white/70">{s.source}</span>
                  <span className="font-semibold text-white">{s.clicks}</span>
                </li>
              ))}
            </ul>
          )}
        </GlassCard>

        <GlassCard className="p-5">
          <p className="mb-3 font-display text-sm font-semibold text-white/80">Recent clicks</p>
          {data.recent.length === 0 ? (
            <p className="text-sm text-white/50">No clicks recorded yet.</p>
          ) : (
            <ul className="space-y-2">
              {data.recent.map((r, i) => (
                <li key={i} className="flex items-center justify-between gap-3 text-xs">
                  <span className="font-mono text-white/60">{r.source}</span>
                  <span className="text-white/40">{new Date(r.createdAt).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          )}
        </GlassCard>
      </div>
    </div>
  );
}
