import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Search, Sparkles, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import leadBanner from "@/assets/digi-lead-hunter-banner.png";
import officeBanner from "@/assets/digioffice-banner.png";
import labsBanner from "@/assets/digi-labs-banner.png";
import whatsappBanner from "@/assets/digi-whatsapp-agent-banner.png";
import leadDashboard from "@/assets/digi-lead-hunter-dashboard.png";
import officeScreenshot from "@/assets/digioffice-dashboard.png";
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
  const [activeToolIndex, setActiveToolIndex] = useState(0);

  const heroTools = [
    {
      id: "digi-lead-hunter",
      num: "01",
      shortName: "Lead Hunter",
      fullName: "DIGI Lead Hunter",
      category: "AUTONOMOUS B2B ENGINE",
      headline: "Autonomous B2B Lead & Blueprint Engine",
      tagline: "Stops manual Google Maps hunting. Scans businesses, validates WhatsApp, and builds website blueprints.",
      barTitle: "LEAD HUNTER / WORKSPACE",
      image: leadBanner,
      route: "/open-source/digi-lead-hunter",
      accent: "#2FE0C8",
      onDownload: () => onDownloadLeadHunter(),
      downloadLabel: "Download setup ↓",
      tags: ["LEAD DISCOVERY", "OPPORTUNITY PLANS", "WHATSAPP READY"],
    },
    {
      id: "digi-labs",
      num: "02",
      shortName: "DIGI Labs",
      fullName: "DIGI Labs",
      category: "STUDIO VOICE & PROMPT AI",
      headline: "Broadcast-Grade Human TTS & Media Studio",
      tagline: "100% powered by Google Gemini 2.5 Flash Studio Voice with nuanced delivery & video-to-prompt engine.",
      barTitle: "DIGI LABS / VOICE & PROMPT STUDIO",
      image: labsBanner,
      route: "/open-source/digi-labs",
      accent: "#A855F7",
      onDownload: () => onDownloadLabs(),
      downloadLabel: "Download setup ↓",
      tags: ["TEXT TO SPEECH", "CREATIVE WORKFLOWS", "GEMINI 2.5 FLASH"],
    },
    {
      id: "digi-whatsapp-agent",
      num: "03",
      shortName: "WhatsApp Agent",
      fullName: "DIGI WhatsApp Agent",
      category: "24/7 AUTONOMOUS SALES",
      headline: "Autonomous 24/7 AI Sales Representative",
      tagline: "Multi-account QR pairing, local SQLite memory, Whisper audio voice notes & 7-tier resilient free AI cascade.",
      barTitle: "WHATSAPP AGENT / SALES SUITE",
      image: whatsappBanner,
      route: "/open-source/digi-whatsapp-agent",
      accent: "#10B981",
      onDownload: () => onDownloadWhatsApp(),
      downloadLabel: "Download setup ↓",
      tags: ["QR PAIRING", "7-TIER AI CASCADE", "WHISPER STT"],
    },
    {
      id: "digi-office-suite",
      num: "04",
      shortName: "Office Suite",
      fullName: "DIGI Office Suite",
      category: "SOVEREIGN AI PRODUCTIVITY",
      headline: "Universal Sovereign AI Desktop Office Suite",
      tagline: "Docs, Sheets with embedded Rust calculation engine, Slides & PDF. Windows 7 to 11 with Sheesha UI.",
      barTitle: "DIGI OFFICE SUITE / SHEESHA UI",
      image: officeBanner,
      route: "/open-source/digioffice",
      accent: "#3B82F6",
      onDownload: () => onDownloadOffice("64"),
      downloadLabel: "Download 64-Bit ↓",
      tags: ["DOCS & SHEETS", "RUST ENGINE", "SHEESHA UI"],
    },
  ];

  const currentTool = heroTools[activeToolIndex];

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

          <div className="os-hero-art" aria-label="Showcase of all 4 DIGI in-house open source software products">
            <div className="os-hero-grid" />

            {/* 4-Product Switcher Tabs */}
            <div className="os-hero-tabs" role="tablist">
              {heroTools.map((tool, idx) => {
                const isActive = idx === activeToolIndex;
                return (
                  <button
                    key={tool.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveToolIndex(idx)}
                    className={`os-hero-tab ${isActive ? "os-hero-tab-active" : ""}`}
                    style={isActive ? { borderColor: tool.accent, color: "#fff" } : undefined}
                  >
                    <span className="os-hero-tab-num">{tool.num}</span>
                    <span className="os-hero-tab-name">{tool.shortName}</span>
                  </button>
                );
              })}
            </div>

            {/* Main Stage Screen Visual */}
            <div className="os-hero-main-stage">
              <div className="os-hero-stage-card">
                <div className="os-screen-bar">
                  <span /><span /><span />
                  <b>{currentTool.barTitle}</b>
                </div>
                <div className="os-hero-stage-image-wrap">
                  <img
                    src={currentTool.image}
                    alt={`${currentTool.fullName} Official Banner`}
                    className="os-hero-stage-img"
                  />
                  <div className="os-hero-stage-overlay">
                    <div className="os-hero-stage-info">
                      <span className="os-hero-stage-badge" style={{ borderColor: currentTool.accent, color: currentTool.accent }}>
                        {currentTool.category}
                      </span>
                      <h4 className="os-hero-stage-title">{currentTool.fullName}</h4>
                      <p className="os-hero-stage-desc">{currentTool.tagline}</p>
                    </div>
                    <div className="os-hero-stage-actions">
                      <button
                        type="button"
                        onClick={currentTool.onDownload}
                        className="os-stage-btn-download cursor-pointer"
                        style={{ backgroundColor: currentTool.accent }}
                      >
                        <Download size={13} />
                        <span>{currentTool.downloadLabel}</span>
                      </button>
                      <Link
                        to={currentTool.route}
                        className="os-stage-btn-learn"
                      >
                        <span>Learn More &amp; Guide</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Thumbnails Deck of Other Tools */}
              <div className="os-hero-mini-deck">
                {heroTools.map((tool, idx) => {
                  if (idx === activeToolIndex) return null;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => setActiveToolIndex(idx)}
                      className="os-hero-mini-thumb cursor-pointer"
                      title={`View ${tool.fullName}`}
                    >
                      <img src={tool.image} alt={tool.fullName} />
                      <div className="os-hero-mini-thumb-label">
                        <span>{tool.num}</span> {tool.shortName}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="os-hero-stamp"><Sparkles size={19} /><span>4 TOOLS<br />1 SUITE</span></div>
            <span className="os-hero-art-label">01 — OFFICIAL DIGIFORMATION COLLECTION</span>
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
