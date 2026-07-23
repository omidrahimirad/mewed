import { useEffect, useRef, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";

export function Header({
  activeSection,
  content,
  cvHref,
  language,
  onLanguageChange,
  onThemeChange,
  theme,
}) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.toggle("nav-open", open);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("nav-open");
    };
  }, [open]);

  useEffect(() => {
    const navigationBreakpoint = window.matchMedia("(max-width: 70rem)");
    const closeAtDesktop = (event) => {
      if (!event.matches) setOpen(false);
    };

    navigationBreakpoint.addEventListener("change", closeAtDesktop);
    return () => navigationBreakpoint.removeEventListener("change", closeAtDesktop);
  }, []);

  const selectLanguage = (nextLanguage) => {
    onLanguageChange(nextLanguage);
    setOpen(false);
  };

  const renderNavigation = (className = "nav-list") => (
    <ul className={className}>
      {content.nav.map(([id, label]) => (
        <li key={id}>
          <a
            className="nav-link"
            href={`#${id}`}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  const actions = (
    <div className="header-actions">
      <div className="language-switch" role="group" aria-label={content.languageLabel}>
        <button
          className="language-button"
          type="button"
          aria-pressed={language === "en"}
          onClick={() => selectLanguage("en")}
        >
          EN
        </button>
        <button
          className="language-button"
          type="button"
          aria-pressed={language === "de"}
          onClick={() => selectLanguage("de")}
        >
          DE
        </button>
      </div>

      <button
        className="header-icon-button"
        type="button"
        onClick={() => onThemeChange(theme === "dark" ? "light" : "dark")}
        aria-label={theme === "dark" ? content.themeToLight : content.themeToDark}
        title={theme === "dark" ? content.themeToLight : content.themeToDark}
      >
        {theme === "dark" ? (
          <Sun size={18} aria-hidden="true" />
        ) : (
          <Moon size={18} aria-hidden="true" />
        )}
      </button>

      <a className="header-cv" href={cvHref} target="_blank" rel="noreferrer">
        {content.headerCv}
        <Download size={15} aria-hidden="true" />
      </a>
    </div>
  );

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label={content.homeLabel}>
          <span className="brand-mark" aria-hidden="true">
            OR
          </span>
          {content.brand}
        </a>

        <div className="desktop-navigation">
          <nav aria-label={content.navLabel}>{renderNavigation()}</nav>
          {actions}
        </div>

        <button
          className="menu-button"
          type="button"
          ref={menuButtonRef}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? content.menuClose : content.menuOpen}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      <nav
        className="mobile-navigation"
        id="mobile-navigation"
        aria-label={content.navLabel}
        data-open={open}
      >
        {renderNavigation("nav-list mobile-nav-list")}
        {actions}
      </nav>
    </header>
  );
}
