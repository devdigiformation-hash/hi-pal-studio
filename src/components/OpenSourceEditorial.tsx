import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Search, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import leadBanner from "@/assets/digi-lead-hunter-banner.png";
import officeBanner from "@/assets/digioffice-banner.png";
import labsBanner from "@/assets/digi-labs-banner.png";
import whatsappBanner from "@/assets/digi-whatsapp-agent-banner.png";
import "./OpenSourceEditorial.css";

const capabilities = [
  "Find new opportunities",
  "Create with AI voice",
  "Make conversations count",
  "Work across your documents",
  "Explore community tools",
];

interface OpenSourceEditorialProps {
  onDownloadLabs: () => void;
  onLabsGuide: () => void;
  onDownloadLeadHunter: () => void;
  onDownloadWhatsApp: () => void;
  onDownloadOffice: (version?: "64" | "32") => void;
}

export default function OpenSourceEditorial({
  onDownloadLabs,
  onLabsGuide,
  onDownloadLeadHunter,
  onDownloadWhatsApp,
  onDownloadOffice,
}: OpenSourceEditorialProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = root.querySelectorAll<HTMLElement>(".os-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("os-is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    root.classList.add("os-motion-ready");
    elements.forEach((element) => observer.observe(element));
    return () => { observer.disconnect(); root.classList.remove("os-motion-ready"); };
  }, []);

  return (
    <div className="os-editorial" ref={rootRef}>
      <section className="os-hero" aria-labelledby="os-hero-title">
        <div className="os-hero-grain" aria-hidden="true" />
        <div className="os-hero-inner">
          <div className="os-hero-copy">
            <div className="os-eyebrow"><span className="os-eyebrow-dot" /> THE DIGIFORMATION SOFTWARE COLLECTION</div>
            <h1 id="os-hero-title">Big ideas.<br /><em>Better tools.</em></h1>
            <p>Discover sovereign software for finding opportunities, creating, communicating and getting things done. Built by DIGIFORMATION LTD and curated from the open-source community.</p>
            <div className="os-hero-actions">
              <a className="os-button os-button-light" href="#our-tools">Explore our 4 tools <ArrowDown size={17} /></a>
              <a className="os-button os-button-outline" href="#directory">Browse the library <ArrowUpRight size={17} /></a>
            </div>
            <div className="os-hero-note"><span>✳</span> 100% Free &amp; Sovereign Tools. No subscription lock-in.</div>
          </div>

          {/* Cascading Tilted Hero Banners Artwork */}
          <div className="os-hero-art" aria-label="Official DIGI Software Collection Banners Showcase">
            <div className="os-hero-grid" />

            {/* Banner 1: DIGI Lead Hunter (Top-Left, tilted downward to the right) */}
            <Link
              to="/open-source/digi-lead-hunter"
              className="os-hero-banner-card os-hero-banner-lead"
              title="Explore DIGI Lead Hunter"
            >
              <div className="os-screen-bar">
                <span /><span /><span />
                <b>DIGI LEAD HUNTER / WORKSPACE</b>
              </div>
              <img src={leadBanner} alt="DIGI Lead Hunter official banner" />
            </Link>

            {/* Banner 2: DIGI Office Suite (Center-Right, slanting in opposite direction) */}
            <Link
              to="/open-source/digioffice"
              className="os-hero-banner-card os-hero-banner-office"
              title="Explore DIGI Office Suite"
            >
              <div className="os-screen-bar">
                <span /><span /><span />
                <b>DIGI OFFICE SUITE / SHEESHA UI</b>
              </div>
              <img src={officeBanner} alt="DIGI Office Suite official banner" />
            </Link>

            {/* Banner 3: DIGI Labs (Lower-Left, slanting downward) */}
            <Link
              to="/open-source/digi-labs"
              className="os-hero-banner-card os-hero-banner-labs"
              title="Explore DIGI Labs"
            >
              <div className="os-screen-bar">
                <span /><span /><span />
                <b>DIGI LABS / STUDIO VOICE AI</b>
              </div>
              <img src={labsBanner} alt="DIGI Labs Voice Studio banner" />
            </Link>

            {/* Banner 4: DIGI WhatsApp Agent (Lower-Right, overlapping tilted upward) */}
            <Link
              to="/open-source/digi-whatsapp-agent"
              className="os-hero-banner-card os-hero-banner-whatsapp"
              title="Explore DIGI WhatsApp Agent"
            >
              <div className="os-screen-bar">
                <span /><span /><span />
                <b>DIGI WHATSAPP AGENT / 24/7 SALES</b>
              </div>
              <img src={whatsappBanner} alt="DIGI WhatsApp Agent official banner" />
            </Link>

            <div className="os-hero-stamp">
              <Sparkles size={19} />
              <span>4 SUITE<br />TOOLS</span>
            </div>
            <span className="os-hero-art-label">01 — THE COLLECTION</span>
          </div>
        </div>
        <div className="os-hero-bottom"><span>INDEPENDENT TOOLS. ENDLESS POSSIBILITIES.</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <div className="os-marquee" aria-label="Find opportunities, create with AI voice, communicate and work with documents">
        <div className="os-marquee-track">
          {[0, 1].map((copy) => <div className="os-marquee-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {capabilities.map((capability) => <span key={capability}><i>✳</i>{capability}</span>)}
          </div>)}
        </div>
      </div>

      <section className="os-showcase" id="our-tools" aria-labelledby="os-showcase-title">
        <div className="os-showcase-intro os-reveal">
          <div className="os-section-index"><span>01 / OUR SOFTWARE</span><span>MADE BY DIGIFORMATION</span></div>
          <div className="os-intro-grid"><h2 id="os-showcase-title">Good ideas need<br /><em>great tools.</em></h2><p>Meet four sovereign tools made for the work you do every day. Each has its own dedicated subpage with complete A-to-Z setup instructions, guides, features, and capabilities.</p></div>
        </div>

        {/* 01 DIGI LEAD HUNTER */}
        <article className="os-feature os-reveal" id="digi-lead-hunter">
          <div className="os-feature-copy">
            <div className="os-feature-meta"><span>01 / FIND OPPORTUNITY</span><span>✳</span></div>
            <h3>DIGI<br />Lead Hunter<span>.</span></h3>
            <p>Find businesses, organise opportunities and turn research into a clearer next step for your agency. Autonomous local business prospecting with WhatsApp validation and website blueprint generation.</p>
            <div className="os-feature-tags">
              <span>LEAD DISCOVERY</span>
              <span>OPPORTUNITY PLANS</span>
              <span>WHATSAPP READY</span>
            </div>
            <div className="os-labs-actions">
              <button type="button" onClick={onDownloadLeadHunter}>Download setup ↓</button>
              <Link className="os-feature-link" to="/open-source/digi-lead-hunter">Learn More &amp; Full Guide <ArrowUpRight size={17} /></Link>
              <a href="https://github.com/digiformationltd-creator/DIGI-LEAD-HUNTER" target="_blank" rel="noopener noreferrer">GitHub Repo ↗</a>
            </div>
          </div>
          <div className="os-feature-visual os-visual-lead">
            <div className="os-feature-image-frame">
              <div className="os-screen-bar"><span /><span /><span /><b>DIGI LEAD HUNTER / OFFICIAL</b></div>
              <img src={leadBanner} alt="DIGI Lead Hunter official banner" loading="lazy" />
            </div>
            <span className="os-floating-label"><Search size={15} /> Find your next opportunity</span>
            <span className="os-image-number">01</span>
          </div>
        </article>

        {/* 02 DIGI LABS */}
        <article className="os-feature os-feature-reverse os-reveal" id="digi-labs">
          <div className="os-feature-copy">
            <div className="os-feature-meta"><span>02 / MAKE IT HEARD</span><span>✳</span></div>
            <h3>DIGI<br />Labs<span>.</span></h3>
            <p>Give your ideas a voice. Create broadcast-grade human speech powered 100% by Google Gemini 2.5 Flash and explore video-to-prompt tools in a desktop media studio.</p>
            <div className="os-feature-tags">
              <span>TEXT TO SPEECH</span>
              <span>CREATIVE WORKFLOWS</span>
              <span>GEMINI 2.5 FLASH</span>
            </div>
            <div className="os-labs-actions">
              <button type="button" onClick={onDownloadLabs}>Download setup ↓</button>
              <button type="button" onClick={onLabsGuide}>Setup guide ↗</button>
              <Link className="os-feature-link" to="/open-source/digi-labs">Learn More &amp; Full Guide <ArrowUpRight size={17} /></Link>
              <a href="https://github.com/digiformationltd-creator/digi-labs" target="_blank" rel="noopener noreferrer">GitHub Repo ↗</a>
            </div>
          </div>
          <div className="os-feature-visual os-visual-labs">
            <div className="os-feature-image-frame">
              <div className="os-screen-bar"><span /><span /><span /><b>DIGI LABS / VOICE &amp; PROMPT STUDIO</b></div>
              <img src={labsBanner} alt="DIGI Labs Voice Studio &amp; Video-to-Prompt Banner" loading="lazy" />
            </div>
            <span className="os-image-number">02</span>
          </div>
        </article>

        {/* 03 DIGI WHATSAPP AGENT */}
        <article className="os-feature os-reveal" id="digi-whatsapp-agent">
          <div className="os-feature-copy">
            <div className="os-feature-meta"><span>03 / 24/7 AUTONOMOUS SALES</span><span>✳</span></div>
            <h3>DIGI WhatsApp<br />Agent<span>.</span></h3>
            <p>24/7 autonomous AI sales representative with multi-account QR pairing, local SQLite memory, Whisper voice notes, and 7-tier resilient free AI cascading.</p>
            <div className="os-feature-tags">
              <span>QR PAIRING</span>
              <span>7-TIER AI CASCADE</span>
              <span>WHISPER STT</span>
              <span>LOCAL SQLITE</span>
            </div>
            <div className="os-labs-actions">
              <button type="button" onClick={onDownloadWhatsApp}>Download setup ↓</button>
              <Link className="os-feature-link" to="/open-source/digi-whatsapp-agent">Learn More &amp; Full Guide <ArrowUpRight size={17} /></Link>
              <a href="https://github.com/digiformationltd-creator/digi-whatsapp-agent" target="_blank" rel="noopener noreferrer">GitHub Repo ↗</a>
            </div>
          </div>
          <div className="os-feature-visual os-visual-whatsapp">
            <div className="os-whatsapp-banner">
              <img src={whatsappBanner} alt="DIGI WhatsApp Agent product artwork" loading="lazy" />
            </div>
            <div className="os-whatsapp-bubble os-whatsapp-bubble-one">Hello! How can I help? <span>✳</span></div>
            <div className="os-whatsapp-bubble os-whatsapp-bubble-two">Let's get started. <span>↗</span></div>
            <span className="os-image-number">03</span>
          </div>
        </article>

        {/* 04 DIGI OFFICE SUITE */}
        <article className="os-feature os-feature-reverse os-reveal" id="digi-office-suite">
          <div className="os-feature-copy">
            <div className="os-feature-meta"><span>04 / SOVEREIGN AI PRODUCTIVITY</span><span>✳</span></div>
            <h3>DIGI Office<br />Suite<span>.</span></h3>
            <p>Bring Word, Excel, PowerPoint, and PDF into one sovereign desktop suite. Runs on Windows 7 to 11 (32-Bit &amp; 64-Bit) with iPhone Morphous Glass (Sheesha UI) and embedded Rust calculation engine.</p>
            <div className="os-feature-tags">
              <span>DOCS &amp; SHEETS</span>
              <span>RUST ENGINE</span>
              <span>WIN 7 TO 11</span>
              <span>SHEESHA UI</span>
            </div>
            <div className="os-labs-actions">
              <button type="button" onClick={() => onDownloadOffice("64")}>Download 64-Bit ↓</button>
              <button type="button" onClick={() => onDownloadOffice("32")}>Download 32-Bit ↓</button>
              <Link className="os-feature-link" to="/open-source/digioffice">Learn More &amp; Full Guide <ArrowUpRight size={17} /></Link>
              <a href="https://github.com/digiformationltd-creator/DigiOffice-Suit" target="_blank" rel="noopener noreferrer">GitHub Repo ↗</a>
            </div>
          </div>
          <div className="os-feature-visual os-visual-office">
            <div className="os-feature-image-frame">
              <div className="os-screen-bar"><span /><span /><span /><b>DIGI OFFICE SUITE / SHEESHA UI</b></div>
              <img src={officeBanner} alt="DIGI Office Suite official banner" loading="lazy" />
            </div>
            <span className="os-image-number">04</span>
          </div>
        </article>

        <div className="os-library-callout os-reveal">
          <div>
            <span>02 / THE WIDER COLLECTION</span>
            <h2>There's more<br /><em>to explore.</em></h2>
            <p>Discover the community tools in our library, from creative software to AI and development.</p>
          </div>
          <a className="os-button os-button-dark" href="#directory">Browse all software <ArrowRight size={18} /></a>
          <div className="os-callout-spark" aria-hidden="true">✳</div>
        </div>
      </section>
    </div>
  );
}
