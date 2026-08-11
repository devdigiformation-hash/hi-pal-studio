import { motion } from "framer-motion";
import { MessageSquare, Mail, MessageCircle, Cpu } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GlassCard from "@/components/GlassCard";
import MonoBadge from "@/components/MonoBadge";
import MiniHero from "@/components/inner/MiniHero";
import TerminalBlock from "@/components/inner/TerminalBlock";
import TickList from "@/components/inner/TickList";
import PageCTA from "@/components/inner/PageCTA";

const CHANNELS = [
  {
    icon: MessageSquare,
    color: "#25D366",
    title: "WhatsApp Automation",
    body: "Secure login, send and receive messages, automated customer notifications, bulk messaging and media support — driven by voice or workflow.",
    badge: "WhatsApp Channel",
    status: "QR Scan → Connected",
  },
  {
    icon: Mail,
    color: "var(--cyan)",
    title: "Email Intelligence",
    body: "IMAP inbox monitoring, SMTP sending, AI-powered email drafting, automated reply workflows, and inbox summarization by voice command.",
    badge: "IMAP/SMTP Universal",
    status: "Inbox Sync Active",
  },
  {
    icon: MessageCircle,
    color: "var(--purple)",
    title: "Discord Bot Control",
    body: "Send alerts, manage channels, automate community notifications and monitor servers via voice commands.",
    badge: "Discord Channel",
    status: "Bot Online",
  },
];

export default function IntegrationsPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen pt-[60px] md:pt-[72px]"
    >
      <MiniHero
        eyebrow="Connected Intelligence"
        title="Connect Everything."
        gradientTitle="Control Anything."
        subtitle="WhatsApp, Email, Discord, local CLI runners and 40+ MCP servers — all voice-controlled."
      />

      <SectionWrapper id="channels">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <EyebrowLabel text="Messaging Hub" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
              One Platform. All Your Channels.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {CHANNELS.map((c, i) => (
              <GlassCard
                key={c.title}
                glowColor={c.color}
                className={`reveal-item delay-${i + 1}`}
              >
                <c.icon size={30} color={c.color} strokeWidth={1.6} />
                <h3 className="mt-5 font-display text-[20px] font-bold text-[var(--text-primary)]">
                  {c.title}
                </h3>
                <p className="mt-3 font-body text-[14px] leading-[1.8] text-[var(--text-secondary)]">
                  {c.body}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <MonoBadge color={c.color}>{c.badge}</MonoBadge>
                </div>
                <div className="mt-3 font-code text-[12px] text-[var(--success)]">{c.status}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-[var(--bg-surface)]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
          <div>
            <EyebrowLabel text="Research & Documents" color="var(--amber)" />
            <h2 className="reveal-item delay-1 mt-4 font-display text-[30px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[42px]">
              Research & Documents. By Voice.
            </h2>
            <h3 className="reveal-item delay-2 mt-6 font-display text-[18px] font-semibold text-[var(--text-primary)]">
              Web research, retrieval and the offline document suite
            </h3>
            <p className="reveal-item delay-2 mt-3 max-w-[540px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              Research the web, pull sources, parse PDFs, run OCR and turn the findings into a
              report-ready document — without leaving DIGI BIZ OS and without your files leaving
              your machine.
            </p>
            <TickList
              className="reveal-item delay-3 mt-7"
              items={[
                "Live web research and retrieval",
                "PDF parsing, OCR and text extraction",
                "Merge, split, compare and convert documents",
                "Redact, sign, timestamp and watermark",
                "Everything processed offline on your machine",
              ]}
            />
          </div>

          <GlassCard className="reveal-item delay-2" glowColor="var(--amber)">
            <TerminalBlock
              speed={14}
              lines={[
                { text: 'Voice: "Research this market and build me a brief"', color: "var(--text-primary)" },
                { text: "[Research] 12 sources retrieved", color: "var(--cyan)" },
                { text: "[Docs] 4 PDFs parsed · OCR complete", color: "var(--text-secondary)" },
                { text: "[Skills] summarise → compare → format", color: "var(--text-secondary)" },
                { text: "Output: market-brief.pdf · signed & watermarked", color: "var(--success)" },
                { text: "Processed locally — nothing left the machine", color: "var(--text-secondary)" },
              ]}
            />
          </GlassCard>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-[1100px]">
          <GlassCard className="reveal-item p-8 md:p-12" glowColor="var(--amber)">
            <Cpu size={32} color="var(--amber)" strokeWidth={1.6} />
            <h2 className="mt-5 font-display text-[28px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[38px]">
              MCP Server Compatibility
            </h2>
            <p className="mt-4 max-w-[720px] font-body text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              Connect any MCP-compatible server to extend DIGI BIZ OS with custom tools, data
              sources, and workflows. The MCP Panel provides a live server connector and tools
              discovery inspector.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <MonoBadge color="var(--amber)">MCP Compatible</MonoBadge>
              <MonoBadge>Tools Discovery</MonoBadge>
              <MonoBadge color="var(--purple)">Custom Integration</MonoBadge>
              <MonoBadge color="var(--pink)">Extensible Architecture</MonoBadge>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      <PageCTA
        title="Every Channel. One Voice."
        badges={["WhatsApp", "IMAP/SMTP", "Discord", "Business Data"]}
        cta="Connect Your Stack"
      />
    </motion.main>
  );
}