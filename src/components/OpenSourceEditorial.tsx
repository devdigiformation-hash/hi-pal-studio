import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, AudioLines, FileText, Grid2X2, MessageCircle, Presentation, Search, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import leadDashboard from "@/assets/digi-lead-hunter-dashboard.png";
import labsLogo from "@/assets/digi-labs-logo.png";
import whatsappBanner from "@/assets/digi-whatsapp-agent-banner.png";
import "./OpenSourceEditorial.css";

const capabilities = [
  "Find new opportunities",
  "Create with AI voice",
  "Make conversations count",
  "Work across your documents",
  "Explore community tools",
];

function SoundVisual() {
  return (
    <div className="os-labs-art" aria-label="DIGI Labs voice studio illustration">
      <div className="os-labs-orbit os-labs-orbit-one" />
      <div className="os-labs-orbit os-labs-orbit-two" />
      <div className="os-labs-logo-wrap"><img src={labsLogo} alt="DIGI Labs logo" /></div>
      <div className="os-labs-wave" aria-hidden="true">
        {Array.from({ length: 45 }, (_, i) => <span key={i} style={{ height: `${14 + ((i * 37) % 72)}%`, animationDelay: `${i * -0.047}s` }} />)}
      </div>
      <div className="os-visual-caption"><AudioLines size={16} /> A voice for every idea</div>
    </div>
  );
}

function OfficeVisual() {
  return (
    <div className="os-office-art" role="img" aria-label="Illustration of documents, spreadsheets and presentations in DIGI Office Suite">
      <div className="os-office-window">
        <div className="os-office-window-top"><span /><span /><span /><b>DIGI OFFICE</b></div>
        <div className="os-office-window-body">
          <div className="os-office-sidebar"><i /><i /><i /><i /></div>
          <div className="os-office-sheet">
            <small>YOUR WORKSPACE</small><strong>Everything in one place.</strong>
            <div className="os-office-tiles">
              <span><FileText /> Docs</span><span><Grid2X2 /> Sheets</span><span><Presentation /> Slides</span>
            </div>
            <div className="os-office-lines"><i /><i /><i /></div>
          </div>
        </div>
      </div>
      <span className="os-office-float os-office-float-a"><FileText size={22} /></span>
      <span className="os-office-float os-office-float-b"><Grid2X2 size={22} /></span>
    </div>
  );
}

interface OpenSourceEditorialProps {
  onDownloadLabs: () => void;
  onLabsGuide: () => void;
}

export default function OpenSourceEditorial({ onDownloadLabs, onLabsGuide }: OpenSourceEditorialProps) {
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
            <p>Discover software for finding opportunities, creating, communicating and getting things done. Built by us and curated from the open-source community.</p>
            <div className="os-hero-actions">
              <a className="os-button os-button-light" href="#our-tools">Explore our tools <ArrowDown size={17} /></a>
              <a className="os-button os-button-outline" href="#directory">Browse the library <ArrowUpRight size={17} /></a>
            </div>
            <div className="os-hero-note"><span>✳</span> Made for people who like to make things happen.</div>
          </div>
          <div className="os-hero-art" aria-label="A preview of DIGI Lead Hunter and DIGI WhatsApp Agent">
            <div className="os-hero-disc os-hero-disc-one" /><div className="os-hero-disc os-hero-disc-two" />
            <div className="os-hero-grid" />
            <div className="os-hero-main-screen"><div className="os-screen-bar"><span /><span /><span /><b>LEAD HUNTER / WORKSPACE</b></div><img src={leadDashboard} alt="DIGI Lead Hunter dashboard" /></div>
            <div className="os-hero-mini-screen"><img src={whatsappBanner} alt="DIGI WhatsApp Agent artwork" /></div>
            <div className="os-hero-stamp"><Sparkles size={19} /><span>MADE TO<br />DO MORE</span></div>
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
          <div className="os-intro-grid"><h2 id="os-showcase-title">Good ideas need<br /><em>great tools.</em></h2><p>Meet four tools made for the work you do every day. From your first lead to the final presentation, there's something here to help you go further.</p></div>
        </div>

        <article className="os-feature os-reveal" id="digi-lead-hunter">
          <div className="os-feature-copy"><div className="os-feature-meta"><span>01 / FIND OPPORTUNITY</span><span>✳</span></div><h3>DIGI<br />Lead Hunter<span>.</span></h3><p>Find businesses, organise opportunities and turn research into a clearer next step for your agency.</p><div className="os-feature-tags"><span>LEAD DISCOVERY</span><span>OPPORTUNITY PLANS</span></div><Link className="os-feature-link" to="/open-source/digi-lead-hunter">Explore Lead Hunter <ArrowUpRight size={17} /></Link></div>
          <div className="os-feature-visual os-visual-lead"><div className="os-feature-image-frame"><div className="os-screen-bar"><span /><span /><span /><b>DIGI LEAD HUNTER</b></div><img src={leadDashboard} alt="DIGI Lead Hunter control center" loading="lazy" /></div><span className="os-floating-label"><Search size={15} /> Find your next opportunity</span><span className="os-image-number">01</span></div>
        </article>

        <article className="os-feature os-feature-reverse os-reveal" id="digi-labs">
          <div className="os-feature-copy"><div className="os-feature-meta"><span>02 / MAKE IT HEARD</span><span>✳</span></div><h3>DIGI<br />Labs<span>.</span></h3><p>Give your ideas a voice. Create speech and explore video-to-prompt tools in a desktop media studio.</p><div className="os-feature-tags"><span>TEXT TO SPEECH</span><span>CREATIVE WORKFLOWS</span></div><Link className="os-feature-link" to="/open-source/digi-labs">Explore DIGI Labs <ArrowUpRight size={17} /></Link><div className="os-labs-actions"><button type="button" onClick={onDownloadLabs}>Download setup ↓</button><button type="button" onClick={onLabsGuide}>Setup guide ↗</button></div></div>
          <div className="os-feature-visual os-visual-labs"><SoundVisual /><span className="os-image-number">02</span></div>
        </article>

        <article className="os-feature os-reveal" id="digi-whatsapp-agent">
          <div className="os-feature-copy">
            <div className="os-feature-meta"><span>03 / 24/7 AUTONOMOUS SALES</span><span>✳</span></div>
            <h3>DIGI WhatsApp<br />Agent<span>.</span></h3>
            <p>24/7 autonomous AI sales representative with multi-account QR pairing, local SQLite memory, Whisper voice notes, and 7-tier resilient free AI cascading.</p>
            <div className="os-feature-tags"><span>QR PAIRING</span><span>7-TIER AI CASCADE</span><span>WHISPER STT</span><span>LOCAL SQLITE</span></div>
            <Link className="os-feature-link" to="/open-source/digi-whatsapp-agent">Explore WhatsApp Agent <ArrowUpRight size={17} /></Link>
            <div className="os-labs-actions">
              <a href="https://github.com/digiformationltd-creator/digi-whatsapp-agent/releases/download/v1.0.0/Digi.WhatsApp.Agent.Setup.1.0.0.exe" target="_blank" rel="noopener noreferrer">Download setup ↓</a>
              <a href="https://github.com/digiformationltd-creator/digi-whatsapp-agent" target="_blank" rel="noopener noreferrer">GitHub Repo ↗</a>
            </div>
          </div>
          <div className="os-feature-visual os-visual-whatsapp"><div className="os-whatsapp-banner"><img src={whatsappBanner} alt="DIGI WhatsApp Agent product artwork" loading="lazy" /></div><div className="os-whatsapp-bubble os-whatsapp-bubble-one">Hello! How can I help? <span>✳</span></div><div className="os-whatsapp-bubble os-whatsapp-bubble-two">Let's get started. <span>↗</span></div><span className="os-image-number">03</span></div>
        </article>

        <article className="os-feature os-feature-reverse os-reveal" id="digi-office-suite">
          <div className="os-feature-copy"><div className="os-feature-meta"><span>04 / MAKE ROOM FOR IDEAS</span><span>✳</span></div><h3>DIGI Office<br />Suite<span>.</span></h3><p>Bring documents, spreadsheets, presentations and more into one creative workspace.</p><div className="os-feature-tags"><span>DOCUMENTS</span><span>SPREADSHEETS</span><span>PRESENTATIONS</span></div><div className="os-feature-status"><FileText size={17} /> Product details coming soon</div></div>
          <div className="os-feature-visual os-visual-office"><OfficeVisual /><span className="os-image-number">04</span></div>
        </article>

        <div className="os-library-callout os-reveal"><div><span>02 / THE WIDER COLLECTION</span><h2>There's more<br /><em>to explore.</em></h2><p>Discover the community tools in our library, from creative software to AI and development.</p></div><a className="os-button os-button-dark" href="#directory">Browse all software <ArrowRight size={18} /></a><div className="os-callout-spark" aria-hidden="true">✳</div></div>
      </section>
    </div>
  );
}
