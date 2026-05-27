import './Home.css'
import avatar from '/avatar.PNG'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { getCvUrl, profile } from '../../data/profile'

const Home = ({ t, language }) => {
  const [headlineName, headlineRole] = t.hero.headline.split(/\s[–-]\s/)

  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="animate-fadeIn">
              {headlineName} – <span className="highlight">{headlineRole}</span>
            </h1>
            <h2 className="animate-fadeIn delay-1">
              {t.hero.subheadline}
            </h2>
            <p className="animate-fadeIn delay-2">
              {t.hero.summary}
            </p>
            <p className="target-roles animate-fadeIn delay-2">
              <strong>{t.hero.targetLabel}</strong> {t.hero.targetRoles.join(' · ')}
            </p>
            <div className="home-actions animate-fadeIn delay-3">
              <a href={getCvUrl(language)} className="btn btn-primary" download>
                <FaDownload /> {t.common.downloadCv}
              </a>
              <a href={profile.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <FaGithub /> {t.common.github}
              </a>
              <a href={profile.linkedin} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> {t.common.linkedin}
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-outline">
                <FaEnvelope /> {t.common.email}
              </a>
            </div>
          </div>
          <div className="home-image">
            <div className="image-wrapper animate-fadeIn delay-1">
              <img src={avatar} alt={t.hero.portraitAlt} className="profile-image animate-float" />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
