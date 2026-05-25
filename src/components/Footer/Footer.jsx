import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa'
import { profile } from '../../data/profile'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: 'GitHub', icon: <FaGithub />, url: profile.github },
    { label: 'LinkedIn', icon: <FaLinkedin />, url: profile.linkedin },
    { label: 'Email', icon: <FaEnvelope />, url: `mailto:${profile.email}` },
    { label: 'Download CV', icon: <FaFileDownload />, url: profile.cv, download: true }
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
          <a className="footer-link" href="/impressum.html">Impressum / Legal Notice</a>
          <p className="copyright">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
