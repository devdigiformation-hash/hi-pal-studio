import {
  FileSpreadsheet,
  Globe2,
  ScanEye,
  FolderSearch,
  Download,
  BellRing,
  NotebookPen,
  type LucideIcon,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import GradientText from "@/components/GradientText";
import MonoBadge from "@/components/MonoBadge";

interface Capability {
  icon: LucideIcon;
  color: string;
  title: string;
  badge: string;
  body: string;
  tags: string[];
}

const CAPABILITIES: Capability[] = [
  {
    icon: FileSpreadsheet,
    color: "var(--green)",
    title: "Spreadsheets & Reporting",
    badge: "Excel · CSV · Word · Slides",
    body: "Build and update spreadsheets, append rows, edit cells, export data and generate finished reports and documents — spoken, not clicked.",
    tags: ["Excel write & update", "CSV export", "Auto-generated reports"],
  },
  {
    icon: Globe2,
    color: "var(--cyan)",
    title: "Web Research & Browsing",
    badge: "Research Desk",
    body: "Open sites, find and switch tabs, gather sources and summarise findings into a clean brief you can act on.",
    tags: ["Live web search", "Tab control", "Source summaries"],
  },
  {
    icon: ScanEye,
    color: "var(--amber)",
    title: "Screen Vision & OCR",
    badge: "Sees Your Screen",
    body: "Reads what is on screen, pulls text out of images, scans and screenshots, and understands documents you point it at.",
    tags: ["Screenshot understanding", "Image-to-text", "Scanned PDF reading"],
  },
  {
    icon: FolderSearch,
    color: "#F472B6",
    title: "Folder & Document Processing",
    badge: "Bulk Operations",
    body: "Analyse an entire folder, process document batches, rename and reorganise files, and turn raw material into structured output.",
    tags: ["Folder analysis", "Batch processing", "Bulk rename & sort"],
  },
  {
    icon: NotebookPen,
    color: "var(--cyan)",
    title: "Notes, Memory & Personas",
    badge: "Remembers You",
    body: "Save custom memories, keep persistent context across sessions and generate structured notes from meetings, lectures or long documents.",
    tags: ["Custom memory", "Lecture & meeting notes", "Personal assistant tone"],
  },
  {
    icon: Download,
    color: "var(--green)",
    title: "Media & Downloads",
    badge: "Grab Anything",
    body: "Download media, save assets to the right folder and convert or compress what you capture — hands free.",
    tags: ["Media download", "Auto-filing", "Convert & compress"],
  },
  {
    icon: BellRing,
    color: "var(--amber)",
    title: "Machine & Power Control",
    badge: "Full Desktop Command",
    body: "Launch apps, manage windows, control clipboard and brightness, schedule shutdowns and keep the workspace exactly how you like it.",
    tags: ["App & window control", "Clipboard", "Power scheduling"],
  },
];

export default function CapabilityVault() {
  return (
    <SectionWrapper id="capabilities">
      <div className="mx-auto max-w-[1280px]">
        <div className="text-center">
          <EyebrowLabel text="What It Actually Does For You" color="var(--amber)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Say It. <GradientText from="#8B7CF6" to="#F5A623">Done. Delivered.</GradientText>
          </h2>
          <p className="reveal-item delay-2 mx-auto mt-5 max-w-[700px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)] md:text-[16px]">
            Not demos — the day-to-day tasks businesses actually pay people to do, handled on your
            own machine, on command.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className={`reveal-item delay-${(i % 4) + 1}`}>
                <GlassCard glowColor={c.color} className="h-full p-7">
                  <Icon size={32} color={c.color} strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-[18px] font-bold text-[var(--text-primary)]">
                    {c.title}
                  </h3>
                  <div className="mt-3">
                    <MonoBadge color={c.color}>{c.badge}</MonoBadge>
                  </div>
                  <p className="mt-4 font-body text-[13.5px] leading-[1.75] text-[var(--text-secondary)]">
                    {c.body}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {c.tags.map((t) => (
                      <li
                        key={t}
                        className="flex gap-2 font-body text-[12.5px] text-[var(--text-muted)]"
                      >
                        <span style={{ color: c.color }}>✓</span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
