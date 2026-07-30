import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";

const FAQS = [
  {
    q: "What operating systems does DIGI BIZ OS support?",
    a: "Windows 10/11 and macOS 12+. Linux support is currently in beta.",
  },
  {
    q: "Do I need my own AI API keys?",
    a: "Yes — connect your own AI provider key. Local models work fully offline with no API key.",
  },
  {
    q: "Is my desktop data private?",
    a: "Yes. All desktop automation runs locally. Your API keys are encrypted. We never collect desktop activity.",
  },
  {
    q: "What is the voice latency?",
    a: "Our live voice engine achieves <200ms round-trip streaming.",
  },
  {
    q: "Can it control any application on my desktop?",
    a: "Yes. Desktop Control provides native OS-level control of any visible UI element across all desktop applications.",
  },
  {
    q: "What is Agent Town?",
    a: "27 specialized sub-agents running concurrently, each with defined capabilities and tool access.",
  },
  {
    q: "Is DIGI BIZ OS an online web app?",
    a: "No. It is a native desktop application that runs fully on your local machine.",
  },
  {
    q: "Can developers extend it with custom skills?",
    a: "Yes — via the Hermes skill engine and MCP servers.",
  },
];

export default function FAQSection() {
  return (
    <SectionWrapper id="faq" className="bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-[860px]">
        <div className="text-center">
          <EyebrowLabel text="Frequently Asked" color="var(--purple)" />
          <h2 className="reveal-item delay-1 mt-4 font-display text-[32px] font-bold tracking-[-0.03em] text-[var(--text-primary)] md:text-[46px]">
            Everything You Need to Know.
          </h2>
        </div>

        <Accordion.Root type="single" collapsible className="reveal-item delay-2 mt-12 space-y-4">
          {FAQS.map((item, i) => (
            <Accordion.Item
              key={item.q}
              value={`item-${i}`}
              className="overflow-hidden rounded-[var(--r-lg)] border border-[var(--border-glass)] backdrop-blur-xl transition-colors duration-300 data-[state=open]:border-[var(--cyan-border)]"
              style={{ background: "var(--bg-glass)" }}
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-display text-[15px] font-semibold text-[var(--text-primary)] md:text-[16px]">
                    {item.q}
                  </span>
                  <Plus
                    size={18}
                    className="shrink-0 text-[var(--cyan)] transition-transform duration-300 group-data-[state=open]:rotate-45"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <p className="px-6 pb-6 font-body text-[14px] leading-[1.85] text-[var(--text-secondary)]">
                  {item.a}
                </p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </SectionWrapper>
  );
}
