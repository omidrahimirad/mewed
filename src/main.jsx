import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-600.css";
import "@fontsource/manrope/latin-700.css";
import "@fontsource/manrope/latin-800.css";
import "@fontsource/dm-mono/latin-400.css";
import "@fontsource/dm-mono/latin-500.css";
import {
  ArrowDownRight, ArrowUpRight, Check, ChevronRight, Download,
  Mail, MapPin, Menu, Moon, Radio, Send, Sun, X,
} from "lucide-react";
import "./styles.css";

const links = {
  github: "https://github.com/omidrahimirad",
  linkedin: "https://www.linkedin.com/in/0midrahimi/",
  email: "mailto:omid.rahimirad@gmail.com",
  cv: { en: "/files/Omid_Rahimi_CV_EN.pdf", de: "/files/Omid_Rahimi_Lebenslauf_DE.pdf" },
};

const projects = [
  {
    code: "RF-01",
    title: "Drive-test RF coverage analyzer",
    titleDe: "Drive-Test RF Coverage Analyzer",
    description: "Turns synthetic LTE/5G GPS and KPI traces into weak-coverage detection, interactive maps, and engineering-ready reports.",
    descriptionDe: "Verwandelt synthetische LTE/5G-GPS- und KPI-Daten in Schwachstellen-Erkennung, interaktive Karten und Engineering-Berichte.",
    tags: ["LTE / 5G", "RSRP / SINR", "Folium", "Python"],
    href: "https://github.com/omidrahimirad/drive-test-rf-coverage-analyzer",
    featured: true,
  },
  {
    code: "SA-02",
    title: "Open5GS + UERANSIM 5G SA lab",
    titleDe: "Open5GS + UERANSIM 5G-SA-Labor",
    description: "A reproducible standalone 5G lab with Docker Compose, subscriber configuration, log collection, and attach/PDU analysis.",
    descriptionDe: "Ein reproduzierbares 5G-SA-Labor mit Docker Compose, Teilnehmerkonfiguration, Log-Erfassung und Attach/PDU-Analyse.",
    tags: ["5G SA", "Open5GS", "UERANSIM", "Docker"],
    href: "https://github.com/omidrahimirad/open5gs-ueransim-5g-sa-lab",
  },
  {
    code: "RCA-03",
    title: "RAN incident timeline",
    titleDe: "RAN Incident Timeline",
    description: "Correlates alarms, KPI drops, and change events into one explainable incident timeline for faster root-cause analysis.",
    descriptionDe: "Korreliert Alarme, KPI-Einbrüche und Change Events zu einer erklärbaren Incident-Timeline für schnellere Ursachenanalyse.",
    tags: ["RAN", "KPI", "RCA", "Pandas"],
    href: "https://github.com/omidrahimirad/ran-alarm-correlation-incident-timeline",
  },
  {
    code: "VAL-04",
    title: "Configuration change validator",
    titleDe: "Konfigurations-Change-Validator",
    description: "A rule-driven CLI that checks network-style configuration changes and produces transparent validation evidence.",
    descriptionDe: "Eine regelbasierte CLI zur Prüfung netzwerkartiger Konfigurationsänderungen mit nachvollziehbaren Validierungsnachweisen.",
    tags: ["Validation", "CLI", "Automation", "Python"],
    href: "https://github.com/omidrahimirad/config-change-validation-tool",
  },
  {
    code: "LOG-05",
    title: "Telecom protocol log analyzer",
    titleDe: "Telecom Protocol Log Analyzer",
    description: "Procedure-aware troubleshooting for decoded 4G/5G control-plane traces across RRC, NAS, and NGAP events.",
    descriptionDe: "Ablaufbezogene Fehlersuche in dekodierten 4G/5G-Control-Plane-Traces über RRC-, NAS- und NGAP-Events.",
    tags: ["RRC / NAS", "NGAP", "Wireshark", "Testing"],
    href: "https://github.com/omidrahimirad/telecom-protocol-log-analyzer",
  },
];

const copy = {
  en: {
    nav: [["work", "Work"], ["experience", "Experience"], ["capabilities", "Capabilities"], ["contact", "Contact"]],
    availability: "Available in Germany · open to relocation",
    kicker: "WIRELESS / RF SYSTEMS ENGINEER",
    hero: <>I make wireless systems <em>measurable, stable,</em> and ready to scale.</>,
    intro: "Nine years in live mobile networks taught me that reliable systems come from disciplined validation, readable evidence, and calm troubleshooting under pressure.",
    proof: "Field experience, turned into repeatable engineering.",
    ctaWork: "Explore selected work",
    ctaCv: "Download CV",
    metrics: [["9+", "years in wireless"], ["400+", "changes validated"], ["900+", "nodes integrated"], ["50+", "live upgrades"]],
    workEyebrow: "SELECTED SYSTEMS WORK",
    workTitle: "Evidence over adjectives.",
    workIntro: "Projects built around the work I do best: measure, correlate, validate, and explain complex wireless-system behavior.",
    viewRepo: "View repository",
    experienceEyebrow: "OPERATING HISTORY",
    experienceTitle: "Live networks. Real constraints.",
    experienceIntro: "From NOC monitoring to nationwide modernization and RAN operations, my work has stayed close to production impact.",
    capabilitiesEyebrow: "ENGINEERING RANGE",
    capabilitiesTitle: "Across radio, systems, and software.",
    capabilitiesIntro: "I connect protocol behavior, performance data, and operational context—then automate the parts that should not stay manual.",
    capabilityGroups: [
      ["Wireless systems", ["LTE & 5G NR architecture", "RRC, NAS, MAC & PHY analysis", "RAN integration and OSS/NMS monitoring", "RSRP, SINR, BLER and mobility KPIs"]],
      ["Validation & troubleshooting", ["End-to-end and post-change validation", "Cross-layer root-cause analysis", "Performance and load testing", "Incident evidence and technical reporting"]],
      ["Software & platforms", ["Python, pandas and scikit-learn", "Linux, Git, Docker and Kubernetes", "SQL, Power BI and Jupyter", "Open5GS, UERANSIM and O-RAN exposure"]],
    ],
    education: "Education & recognition",
    educationItems: [
      ["M.Sc. Electrical Engineering & IT", "Deggendorf Institute of Technology · 2023–2026", "RF/microwave material characterization through experimental measurement and AI-based prediction."],
      ["B.Sc. Electrical Engineering", "Ferdowsi University of Mashhad · 2008–2012", "Electronics, communication systems, signal processing, and CDMA interference reduction."],
      ["Selected recognition", "Huawei · 2020–2022", "Technical Star, Bright Star, and Outstanding Engineer / Network Safety Team awards."],
    ],
    contactEyebrow: "LET’S CONNECT",
    contactTitle: "Need an engineer who can see the system—not just the symptom?",
    contactIntro: "I’m open to Wireless/RF, system integration, validation, RAN operations, and technical application roles across Germany.",
    form: ["Name", "Email", "Subject", "Message", "Send message"],
    placeholders: ["Your name", "you@company.com", "Role or project", "Tell me what you are working on…"],
    footer: "Designed around clarity, evidence, and signal.",
    legal: "Impressum",
  },
  de: {
    nav: [["work", "Projekte"], ["experience", "Erfahrung"], ["capabilities", "Kompetenzen"], ["contact", "Kontakt"]],
    availability: "In Deutschland verfügbar · umzugsbereit",
    kicker: "WIRELESS / RF SYSTEMS ENGINEER",
    hero: <>Ich mache Funksysteme <em>messbar, stabil</em> und skalierbar.</>,
    intro: "Neun Jahre in produktiven Mobilfunknetzen haben mir gezeigt: Zuverlässige Systeme entstehen durch disziplinierte Validierung, nachvollziehbare Evidenz und ruhige Fehlersuche unter Druck.",
    proof: "Felderfahrung, übersetzt in reproduzierbares Engineering.",
    ctaWork: "Ausgewählte Projekte",
    ctaCv: "Lebenslauf herunterladen",
    metrics: [["9+", "Jahre Wireless"], ["400+", "Changes validiert"], ["900+", "Knoten integriert"], ["50+", "Live-Upgrades"]],
    workEyebrow: "AUSGEWÄHLTE SYSTEMPROJEKTE",
    workTitle: "Belege statt Behauptungen.",
    workIntro: "Projekte rund um meine stärkste Arbeit: komplexes Verhalten von Funksystemen messen, korrelieren, validieren und verständlich erklären.",
    viewRepo: "Repository ansehen",
    experienceEyebrow: "BERUFLICHE PRAXIS",
    experienceTitle: "Produktivnetze. Reale Randbedingungen.",
    experienceIntro: "Vom NOC-Monitoring über landesweite Modernisierung bis zum RAN-Betrieb war meine Arbeit immer nah an der produktiven Auswirkung.",
    capabilitiesEyebrow: "ENGINEERING-SPEKTRUM",
    capabilitiesTitle: "Funk, Systeme und Software verbunden.",
    capabilitiesIntro: "Ich verbinde Protokollverhalten, Performance-Daten und Betriebskontext—und automatisiere die Teile, die nicht manuell bleiben sollten.",
    capabilityGroups: [
      ["Funksysteme", ["LTE- und 5G-NR-Architektur", "RRC-, NAS-, MAC- und PHY-Analyse", "RAN-Integration und OSS/NMS-Monitoring", "RSRP, SINR, BLER und Mobility-KPIs"]],
      ["Validierung & Fehlersuche", ["End-to-End- und Post-Change-Validierung", "Schichtübergreifende Ursachenanalyse", "Performance- und Lasttests", "Incident-Evidenz und technische Berichte"]],
      ["Software & Plattformen", ["Python, pandas und scikit-learn", "Linux, Git, Docker und Kubernetes", "SQL, Power BI und Jupyter", "Open5GS, UERANSIM und O-RAN-Erfahrung"]],
    ],
    education: "Ausbildung & Auszeichnungen",
    educationItems: [
      ["M.Sc. Elektrotechnik und Informationstechnik", "Technische Hochschule Deggendorf · 2023–2026", "HF-/Mikrowellen-Materialcharakterisierung durch experimentelle Messung und KI-basierte Vorhersage."],
      ["B.Sc. Elektrotechnik", "Ferdowsi University of Mashhad · 2008–2012", "Elektronik, Kommunikationssysteme, Signalverarbeitung und CDMA-Interferenzreduktion."],
      ["Ausgewählte Auszeichnungen", "Huawei · 2020–2022", "Technical Star, Bright Star sowie Outstanding Engineer / Network Safety Team Awards."],
    ],
    contactEyebrow: "KONTAKT",
    contactTitle: "Sie suchen einen Ingenieur, der das System sieht—nicht nur das Symptom?",
    contactIntro: "Ich bin offen für Positionen in Wireless/RF, Systemintegration, Validierung, RAN-Betrieb und Technical Applications in ganz Deutschland.",
    form: ["Name", "E-Mail", "Betreff", "Nachricht", "Nachricht senden"],
    placeholders: ["Ihr Name", "sie@unternehmen.de", "Position oder Projekt", "Woran arbeiten Sie?"],
    footer: "Entwickelt für Klarheit, Evidenz und Signal.",
    legal: "Impressum",
  },
};

const experience = {
  en: [
    ["2016—2023", "Wireless (RAN) Engineer", "Huawei RAN projects · Tehran, Iran", ["Operated, configured, optimized, and troubleshot large-scale LTE and early 5G RAN infrastructure.", "Ran KPI-based and cross-layer fault analysis across RRC, NAS, MAC, and PHY.", "Delivered 50+ live upgrades and validated 400+ production configuration changes."]],
    ["2015—2016", "Wireless Network Modernization Engineer", "ZTE Parsian modernization · Tehran, Iran", ["Integrated 900+ BTS and network nodes during a large-scale modernization program.", "Supported radio configuration, parameter tuning, frequency planning, and migration toward 4G.", "Validated system stability after configuration and parameter changes."]],
    ["2013—2015", "RAN Front Office Engineer", "Huawei service project · Tehran, Iran", ["Monitored RAN health, alarms, traffic, and availability in a NOC environment.", "Produced KPI reports and first-level analysis for access, mobility, capacity, and service issues.", "Maintained incident evidence and consistent escalation workflows."]],
  ],
  de: [
    ["2016—2023", "Wireless (RAN) Engineer", "Huawei RAN-Projekte · Teheran, Iran", ["Betrieb, Konfiguration, Optimierung und Fehlerbehebung großflächiger LTE- und früher 5G-RAN-Infrastrukturen.", "KPI-basierte und schichtübergreifende Analyse über RRC, NAS, MAC und PHY.", "Mehr als 50 Live-Upgrades und Validierung von über 400 produktiven Konfigurationsänderungen."]],
    ["2015—2016", "Wireless Network Modernization Engineer", "ZTE Parsian Modernisierung · Teheran, Iran", ["Integration von über 900 BTS und Netzwerkknoten in einem großflächigen Modernisierungsprogramm.", "Unterstützung bei Funkkonfiguration, Parameteroptimierung, Frequenzplanung und Migration zu 4G.", "Validierung der Systemstabilität nach Konfigurations- und Parameteränderungen."]],
    ["2013—2015", "RAN Front Office Engineer", "Huawei Serviceprojekt · Teheran, Iran", ["Überwachung von RAN-Zustand, Alarmen, Verkehr und Verfügbarkeit in einer NOC-Umgebung.", "KPI-Berichte und First-Level-Analyse für Access-, Mobility-, Kapazitäts- und Serviceprobleme.", "Pflege von Incident-Nachweisen und konsistenten Eskalationsabläufen."]],
  ],
};

function SignalVisual() {
  return <div className="signal-visual" aria-hidden="true">
    <div className="signal-grid" />
    <div className="portrait-shell"><img src="/avatar.webp" alt="Omid Rahimi" width="900" height="900" /></div>
    <div className="signal-status"><span />LIVE SYSTEMS<br/><strong>LTE · 5G · RF</strong></div>
    <svg className="signal-line" viewBox="0 0 600 180" preserveAspectRatio="none">
      <path d="M0 100 C55 100,55 40,110 40 S165 145,220 145 S275 72,330 72 S385 110,440 110 S495 28,550 28 S580 90,600 90" />
    </svg>
  </div>;
}

function GitHubIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.39-5.28 5.68.42.36.79 1.06.79 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg>;
}

function LinkedInIcon({ size = 18 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.3 7.7H1.7V22h3.6V7.7ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22.3 13.8c0-4.3-2.3-6.3-5.4-6.3-2.5 0-3.6 1.4-4.2 2.3V7.7H9.1V22h3.6v-7.1c0-1.9.36-3.75 2.72-3.75 2.33 0 2.36 2.18 2.36 3.87V22h3.6l.9-8.2Z"/></svg>;
}

function Header({ lang, setLang, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="Omid Rahimi — home"><span>OR</span><b>RF SYSTEMS</b></a>
    <nav className={open ? "nav open" : "nav"} aria-label="Main navigation">
      {t.nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
    <div className="header-actions">
      <div className="lang-switch" aria-label="Select language">
        <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
        <button className={lang === "de" ? "active" : ""} onClick={() => setLang("de")} aria-pressed={lang === "de"}>DE</button>
      </div>
      <button className="icon-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">
        {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}</button>
      <button className="icon-button menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
    </div>
  </header>;
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("language") || "en");
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
  const t = copy[lang];
  const jobs = experience[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);
  }, [lang]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    const onScroll = () => document.documentElement.style.setProperty("--scroll", `${scrollY / (document.documentElement.scrollHeight - innerHeight) * 100}%`);
    onScroll(); addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  const visibleProjects = useMemo(() => projects.map(p => ({...p, title: lang === "de" ? p.titleDe : p.title, description: lang === "de" ? p.descriptionDe : p.description})), [lang]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="progress" />
    <Header {...{lang, setLang, theme, setTheme}} />
    <main id="main">
      <section className="hero section" id="top">
        <div className="hero-copy">
          <div className="availability"><span />{t.availability}</div>
          <p className="eyebrow">{t.kicker}</p>
          <h1>{t.hero}</h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">{t.ctaWork}<ArrowDownRight size={18}/></a>
            <a className="button secondary" href={links.cv[lang]} target="_blank">{t.ctaCv}<Download size={17}/></a>
          </div>
          <div className="hero-socials">
            <span>{t.proof}</span>
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={links.email} aria-label="Email"><Mail size={18}/></a>
          </div>
        </div>
        <SignalVisual />
      </section>

      <section className="metrics" aria-label="Career metrics">
        {t.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="section work" id="work">
        <div className="section-heading"><div><p className="eyebrow">{t.workEyebrow}</p><h2>{t.workTitle}</h2></div><p>{t.workIntro}</p></div>
        <div className="project-grid">
          {visibleProjects.map((p, i) => <article className={`project-card ${p.featured ? "featured" : ""}`} key={p.code}>
            <div className="project-top"><span>{p.code}</span><Radio size={18}/></div>
            {p.featured && <div className="rf-map" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>}
            <h3>{p.title}</h3><p>{p.description}</p>
            <div className="tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            <a href={p.href} target="_blank" rel="noreferrer">{t.viewRepo}<ArrowUpRight size={16}/></a>
            <span className="card-index">0{i + 1}</span>
          </article>)}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="section-heading"><div><p className="eyebrow">{t.experienceEyebrow}</p><h2>{t.experienceTitle}</h2></div><p>{t.experienceIntro}</p></div>
        <div className="timeline">
          {jobs.map(([date, role, org, bullets], i) => <article className="timeline-item" key={date}>
            <div className="timeline-date"><span>0{i + 1}</span>{date}</div>
            <div className="timeline-body"><h3>{role}</h3><p className="org">{org}</p><ul>{bullets.map(b => <li key={b}><ChevronRight size={16}/>{b}</li>)}</ul></div>
          </article>)}
        </div>
      </section>

      <section className="section capabilities" id="capabilities">
        <div className="section-heading"><div><p className="eyebrow">{t.capabilitiesEyebrow}</p><h2>{t.capabilitiesTitle}</h2></div><p>{t.capabilitiesIntro}</p></div>
        <div className="capability-grid">
          {t.capabilityGroups.map(([name, items], i) => <article key={name}><span className="cap-number">0{i + 1}</span><h3>{name}</h3><ul>{items.map(x => <li key={x}><Check size={15}/>{x}</li>)}</ul></article>)}
        </div>
        <div className="education-block">
          <h3>{t.education}</h3>
          <div>{t.educationItems.map(([title, meta, detail]) => <article key={title}><h4>{title}</h4><p className="meta">{meta}</p><p>{detail}</p></article>)}</div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-copy"><p className="eyebrow">{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><p>{t.contactIntro}</p>
          <div className="contact-links"><a href={links.email}><Mail size={18}/>omid.rahimirad@gmail.com</a><span><MapPin size={18}/>Deggendorf, Germany</span></div>
        </div>
        <form className="contact-form" name="contact" method="POST" action="/thank-you.html" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label>{t.form[0]}<input name="name" placeholder={t.placeholders[0]} required autoComplete="name" /></label>
          <label>{t.form[1]}<input name="email" type="email" placeholder={t.placeholders[1]} required autoComplete="email" /></label>
          <label className="full">{t.form[2]}<input name="subject" placeholder={t.placeholders[2]} required /></label>
          <label className="full">{t.form[3]}<textarea name="message" rows="5" placeholder={t.placeholders[3]} required /></label>
          <button className="button primary" type="submit">{t.form[4]}<Send size={16}/></button>
        </form>
      </section>
    </main>
    <footer><a className="brand" href="#top"><span>OR</span><b>RF SYSTEMS</b></a><p>{t.footer}</p><div><a href={links.github}>GitHub</a><a href={links.linkedin}>LinkedIn</a><a href="/impressum.html">{t.legal}</a></div></footer>
  </>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
