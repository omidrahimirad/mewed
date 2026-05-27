import { useEffect, useState } from 'react'
import './Header.css'
import { FaMoon, FaSun, FaBars, FaTimes, FaFileDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { getCvUrl, profile } from '../../data/profile'
import { languageOptions } from '../../data/translations'

const Header = ({ darkMode, toggleTheme, activeSection, handleNavigation, language, setLanguage, t }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'certifications', label: t.nav.certifications },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact }
  ]

  const ctaLinks = [
    { label: t.common.downloadCv, href: getCvUrl(language), icon: <FaFileDownload />, download: true },
    { label: t.common.github, href: profile.github, icon: <FaGithub /> },
    { label: t.common.linkedin, href: profile.linkedin, icon: <FaLinkedin /> },
    { label: t.common.email, href: `mailto:${profile.email}`, icon: <FaEnvelope /> }
  ]

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo animate-fadeIn">
          <button className="logo-button" onClick={() => handleNavigation('home')}>
            <span className="logo-text">{profile.name}</span>
          </button>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => {
                    handleNavigation(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="language-switcher" role="group" aria-label={t.header.languageLabel}>
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                className={`language-button ${language === option.code ? 'active' : ''}`}
                onClick={() => setLanguage(option.code)}
                aria-pressed={language === option.code}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="header-cta" aria-label={t.header.profileLinks}>
            {ctaLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="header-cta-link"
                download={link.download}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                title={link.label}
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
          <button className="theme-toggle" onClick={toggleTheme} aria-label={t.header.themeToggle}>
            {darkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
          </button>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label={t.header.menuToggle}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
