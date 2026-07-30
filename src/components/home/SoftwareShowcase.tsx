import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import EyebrowLabel from "@/components/EyebrowLabel";
import GradientText from "@/components/GradientText";
import screenshot from "@/assets/app-screenshot.jpg.asset.json";

export default function SoftwareShowcase() {
  return (
    <SectionWrapper id="software">
      <div className="mx-auto max-w-6xl text-center">
        <EyebrowLabel text="Inside the OS" />
        <h2 className="mt-4 font-display text-[32px] font-bold leading-[1.1] md:text-[52px]">
          The <GradientText>live workspace</GradientText>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60 md:text-[17px]">
          Voice, vision, agents and tools in one dark-glass console — exactly what you get on
          your desktop.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12"
        >
          <div
            className="pointer-events-none absolute -inset-10 -z-10 rounded-[48px] opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(47,224,200,0.22), transparent 70%)",
            }}
          />
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] p-1.5 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl md:rounded-[32px] md:p-2.5">
            <img
              src={screenshot.url}
              alt="DIGI BIZ OS desktop app showing live voice transcript, agent tools and neural graph"
              loading="lazy"
              className="block w-full rounded-[18px] md:rounded-[24px]"
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}