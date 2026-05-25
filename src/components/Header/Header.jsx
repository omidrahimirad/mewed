import { useEffect, useState } from 'react'
import './Header.css'
import { FaMoon, FaSun, FaBars, FaTimes, FaFileDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { profile } from '../../data/profile'

const Header = ({ darkMode, toggleTheme, activeSection, handleNavigation }) => {
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
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ]

  const ctaLinks = [
    { label: 'Download CV', href: profile.cv, icon: <FaFileDownload />, download: true },
    { label: 'GitHub', href: profile.github, icon: <FaGithub /> },
    { label: 'LinkedIn', href: profile.linkedin, icon: <FaLinkedin /> },
    { label: 'Email', href: `mailto:${profile.email}`, icon: <FaEnvelope /> }
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
          <div className="header-cta" aria-label="Profile links">
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
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
            {darkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
          </button>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
