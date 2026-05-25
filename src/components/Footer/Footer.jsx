import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa'
import { profile } from '../../data/profile'

const Footer = ({ t }) => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: t.common.github, icon: <FaGithub />, url: profile.github },
    { label: t.common.linkedin, icon: <FaLinkedin />, url: profile.linkedin },
    { label: t.common.email, icon: <FaEnvelope />, url: `mailto:${profile.email}` },
    { label: t.common.downloadCv, icon: <FaFileDownload />, url: profile.cv, download: true }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url} 
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="social-icon"
                aria-label={link.label}
                title={link.label}
                download={link.download}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <a className="footer-link" href="/impressum.html">{t.footer.legal}</a>
          <p className="copyright">
            &copy; {currentYear} {profile.name}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
