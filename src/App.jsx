import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Download,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { Header } from "./components/Header";
import { SectionHeading } from "./components/SectionHeading";
import { HeroSpectrum, ProjectSchematic } from "./components/TechnicalVisuals";
import { content, experience, links, projects } from "./data/portfolio";

/*
THESIS: Verified operating scope leads; the page refuses startup promotion and dashboard theater.
OWN-WORLD: Mineral surfaces, technical ink, one forest-green signal, ruled divisions, and square evidence plates.
STORY: Identify Omid's engineering fit, verify scale and work, then download a CV or make contact.
FIRST VIEWPORT: Compact navigation, precise role and opportunity statement, direct actions, portrait, and profile record.
FORM: Field Engineering Dossier, staged as an acceptance report with recruiter-first reading order.
*/

const getInitialLanguage = () => {
  const stored = localStorage.getItem("language");
  return stored === "de" ? "de" : "en";
};

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const [theme, setTheme] = useState(getInitialTheme);
  const [activeSection, setActiveSection] = useState("");
  const t = content[language];
  const roles = experience[language];

  const localizedProjects = useMemo(
    () => projects.map((project) => ({ ...project, ...project[language] })),
    [language],
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.documentTitle;
    localStorage.setItem("language", language);
  }, [language, t.documentTitle]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);

    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute("content", theme === "dark" ? "#07141d" : "#f2f6f7");
  }, [theme]);

  useEffect(() => {
    const sectionIds = ["experience", "work", "capabilities", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>

      <Header
        activeSection={activeSection}
        content={t}
        cvHref={links.cv[language]}
        language={language}
        onLanguageChange={setLanguage}
        onThemeChange={setTheme}
        theme={theme}
      />

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <HeroSpectrum />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <MapPin size={16} aria-hidden="true" />
                {t.availability}
              </p>
              <h1 id="hero-title">{t.role}</h1>
              <p className="hero-statement">{t.heroTitle}</p>
              <p className="hero-intro">{t.heroIntro}</p>
              <p className="opportunity-line">{t.heroOpportunity}</p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={links.cv[language]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Download size={18} aria-hidden="true" />
                  {t.downloadCv}
                </a>
                <a className="button button-secondary" href={links.email}>
                  <Mail size={18} aria-hidden="true" />
                  {t.contactCta}
                </a>
              </div>
            </div>

            <aside className="hero-record" aria-label={t.profileLabel}>
              <figure className="portrait">
                <img
                  src="/avatar.webp"
                  width="900"
                  height="900"
                  alt="Omid Rahimi"
                  fetchPriority="high"
                />
                <figcaption className="sr-only">{t.profileLabel}</figcaption>
              </figure>
              <dl className="profile-ledger">
                {t.profileRows.map(([label, value]) => (
                  <div className="profile-row" key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section className="proof-band" aria-labelledby="proof-title">
          <div className="shell">
            <h2 className="sr-only" id="proof-title">{t.proofLabel}</h2>
            <dl className="proof-ledger">
              {t.proof.map(([value, label]) => (
                <div className="proof-item" key={label}>
                  <dd>{value}</dd>
                  <dt>{label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section shell" id="experience">
          <SectionHeading
            label={t.experienceLabel}
            title={t.experienceTitle}
            intro={t.experienceIntro}
          />

          <ol className="experience-list">
            {roles.map((item) => (
              <li key={item.date}>
                <article className="experience-entry">
                  <time className="experience-period">{item.date}</time>
                  <div className="experience-content">
                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.organization}</p>
                    <p>{item.scope}</p>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>
                          <Check size={16} aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            ))}
          </ol>

          <aside className="development-note">
            <p className="development-label">{t.developmentLabel}</p>
            <div>
              <h3>{t.developmentTitle}</h3>
              <p className="development-meta">{t.developmentMeta}</p>
              <p>{t.developmentText}</p>
            </div>
          </aside>
        </section>

        <section className="section shell" id="work">
          <SectionHeading label={t.workLabel} title={t.workTitle} intro={t.workIntro} />

          <div className="project-list">
            {localizedProjects.map((project) => (
              <article
                className={project.featured ? "project-entry is-featured" : "project-entry"}
                key={project.code}
              >
                <div className="project-marker">
                  <p className="project-index">{project.code}</p>
                  <ProjectSchematic code={project.code} />
                </div>
                <div>
                  <header>
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-summary">{project.summary}</p>
                    </div>
                  </header>

                  <dl className="project-evidence">
                    {[project.problem, project.method, project.output].map((value, index) => (
                      <div key={t.fieldLabels[index]}>
                        <dt>{t.fieldLabels[index]}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>

                  <footer className="project-footer">
                    <ul
                      className="tag-list"
                      aria-label={`${project.title}: ${t.technologiesLabel}`}
                    >
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <a
                      className="text-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.repoLabel}: ${project.title}`}
                    >
                      {t.repoLabel}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="capabilities">
          <SectionHeading
            label={t.capabilitiesLabel}
            title={t.capabilitiesTitle}
            intro={t.capabilitiesIntro}
          />

          <div className="capability-index">
            {t.capabilityGroups.map(([name, items], index) => (
              <article className="capability-group" key={name}>
                <p className="capability-label">0{index + 1}</p>
                <h3>{name}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <section className="education-block" aria-labelledby="education-title">
            <h3 id="education-title">{t.educationTitle}</h3>
            <div className="education-list">
              {t.educationItems.map(([title, meta, detail]) => (
                <article className="education-entry" key={title}>
                  <h4>{title}</h4>
                  <p className="education-period">{meta}</p>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </section>
        </section>

        <section className="section contact-section" id="contact">
          <div className="shell contact-grid">
          <div className="contact-copy">
            <p className="section-label">{t.contactLabel}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactIntro}</p>

            <ul className="contact-methods">
              <li>
                <a className="contact-method" href={links.email}>
                  <Mail size={18} aria-hidden="true" />
                  <strong>omid.rahimirad@gmail.com</strong>
                </a>
              </li>
              <li>
                <span className="contact-method">
                  <MapPin size={18} aria-hidden="true" />
                  <strong>{t.location}</strong>
                </span>
              </li>
              <li>
                <a className="contact-method" href={links.linkedin} target="_blank" rel="noreferrer">
                  <strong>{t.linkedinLabel}</strong>
                </a>
              </li>
              <li>
                <a className="contact-method" href={links.github} target="_blank" rel="noreferrer">
                  <strong>{t.githubLabel}</strong>
                </a>
              </li>
            </ul>
          </div>

          <form
            className="contact-form"
            name="contact"
            method="POST"
            action="/thank-you.html"
            data-netlify="true"
            aria-describedby="form-requirements"
          >
            <input type="hidden" name="form-name" value="contact" />
            <header>
              <h3>{t.formTitle}</h3>
              <p id="form-requirements">{t.requiredNote}</p>
            </header>

            <div className="form-grid">
            {["name", "email", "subject"].map((field) => (
              <label className="field" key={field} htmlFor={`contact-${field}`}>
                <span className="field-label">
                  {t.fields[field][0]}
                  <span className="required-marker" aria-hidden="true">
                    *
                  </span>
                  <span className="sr-only"> — {t.required}</span>
                </span>
                <input
                  id={`contact-${field}`}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={t.fields[field][1]}
                  autoComplete={field === "name" ? "name" : field === "email" ? "email" : undefined}
                  required
                  aria-required="true"
                />
              </label>
            ))}

            <label className="field field-message" htmlFor="contact-message">
              <span className="field-label">
                {t.fields.message[0]}
                <span className="required-marker" aria-hidden="true">
                  *
                </span>
                <span className="sr-only"> — {t.required}</span>
              </span>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder={t.fields.message[1]}
                required
                aria-required="true"
              />
            </label>
            </div>

            <button className="button button-primary" type="submit">
              {t.send}
              <Send size={17} aria-hidden="true" />
            </button>
          </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <a className="footer-brand" href="#top">
            <span aria-hidden="true">OR</span>
            <strong>{t.brand}</strong>
          </a>
          <p>{t.footer}</p>
          <nav className="footer-nav" aria-label={t.footerNavLabel}>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="/impressum.html">{t.legal}</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
