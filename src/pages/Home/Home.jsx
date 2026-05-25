import './Home.css'
import avatar from '/avatar.PNG'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../../data/profile'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="animate-fadeIn">
              {profile.name} - <span className="highlight">{profile.headline}</span>
            </h1>
            <h2 className="animate-fadeIn delay-1">
              {profile.role}
            </h2>
            <p className="animate-fadeIn delay-2">
              With over nine years in systems integration, testing, and RF performance analysis across
              4G/5G RAN and cloud-native 5G testbeds, I specialize in KPI-driven diagnostics,
              reproducible validation workflows, and automation with Linux and Python. My recent work
              at Deggendorf University of Applied Sciences focuses on Kubernetes-based 5G test
              environments, O-RAN components, and RF material characterization using machine learning.
            </p>
            <p className="target-roles animate-fadeIn delay-2">
              <strong>Looking for roles:</strong> {profile.targetRoles.join(' · ')}
            </p>
            <div className="home-actions animate-fadeIn delay-3">
              <a href={profile.cv} className="btn btn-primary" download>
                <FaDownload /> Download CV
              </a>
              <a href={profile.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href={profile.linkedin} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-outline">
                <FaEnvelope /> Email
              </a>
            </div>
          </div>
          <div className="home-image">
            <div className="image-wrapper animate-fadeIn delay-1">
              <img src={avatar} alt="Omid Rahimi profile portrait" className="profile-image animate-float" />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
