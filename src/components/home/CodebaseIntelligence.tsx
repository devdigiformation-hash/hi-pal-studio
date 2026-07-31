import { motion } from "framer-motion";
import {
  FolderGit2,
  Brain,
  Wrench,
  FileSearch,
  ShieldCheck,
  GitBranch,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import MonoBadge from "@/components/MonoBadge";

const CARDS: { icon: LucideIcon; color: string; title: string; body: string; tags: string[] }[] = [
  {
    icon: FolderGit2,
    color: "var(--cyan)",
    title: "Point It at Any Folder",
    body: "Give DIGI BIZ OS a project folder on your computer and it reads the whole thing — files, structure, dependencies and history — then works inside it like a senior engineer who already knows the codebase.",
    tags: ["Local Folder Access", "Full Project Context", "Works Offline"],
  },
  {
    icon: GitBranch,
    color: "var(--purple)",
    title: "Drop In a GitHub Repository",
    body: "Paste a repository link and it clones, maps and understands the project end to end — architecture, modules, data flow — before writing a single line.",
    tags: ["Repo Import", "Architecture Map", "Multi-File Edits"],
  },
  {
    icon: Brain,
    color: "var(--amber)",
    title: "Deep Reasoning Over Your Code",
    body: "It doesn't pattern-match. It reasons: traces logic across files, explains why something breaks, weighs trade-offs and proposes a plan before it acts.",
    tags: ["Chain-of-Task Planning", "Root-Cause Analysis", "Trade-off Review"],
  },
  {
    icon: FileSearch,
    color: "#F472B6",
    title: "Reverse Engineering",
    body: "Inherited an undocumented system? DIGI BIZ OS reconstructs how it works, documents every module, and rebuilds or modernises it piece by piece.",
    tags: ["Legacy Systems", "Auto Documentation", "Rebuild & Modernise"],
  },
  {
    icon: Wrench,
    color: "var(--cyan)",
    title: "It Actually Does the Work",
    body: "Refactor, migrate, add features, fix failing builds, write tests, clean up dead code — executed directly on your machine, file by file, until the job is finished.",
    tags: ["Refactor", "Migrate", "Test", "Ship"],
  },
  {
    icon: ShieldCheck,
    color: "var(--purple)",
    title: "Your Code Never Leaves",
    body: "Everything runs on your own machine with your own folders. No uploads, no third-party code hosting, no silent syncing — your source stays yours.",
    tags: ["Local-First", "Private by Default", "You Own the Files"],
  },
];

export default function CodebaseIntelligence() {
  return (
    <SectionWrapper id="codebase-intelligence">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="Codebase Intelligence" color="var(--purple)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Give It a Folder. <GradientText>It Ships the Work.</GradientText>
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-5 max-w-[760px] font-body text-[16px] leading-[1.8] text-[var(--text-secondary)] md:text-[17px]">
            Hand DIGI BIZ OS a project folder or a repository and it takes full ownership —
            reading, reasoning, reverse engineering and building, right on your computer.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard glowColor={c.color} className="h-full p-7">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border"
                    style={{ borderColor: `${c.color}44`, background: `${c.color}14` }}
                  >
                    <Icon size={20} color={c.color} strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 font-display text-[19px] font-bold text-[var(--text-primary)]">
                    {c.title}
                  </h3>
                  <p className="mt-3 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                    {c.body}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <MonoBadge key={t} color={c.color}>
                        {t}
                      </MonoBadge>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
