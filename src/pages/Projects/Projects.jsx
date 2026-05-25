import './Projects.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Projects = ({ t }) => {
  return (
    <div className="projects">
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="projects-grid">
          {t.projects.items.map((project, index) => (
            <article key={project.title} className={`project-card animate-fadeIn delay-${index + 1}`}>
              <div className="project-heading">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p><strong>{t.projects.labels.objective}</strong> {project.objective}</p>
              <p><strong>{t.projects.labels.methods}</strong> {project.methods}</p>
              <p><strong>{t.projects.labels.results}</strong> {project.results}</p>
              {project.link && (
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  {t.projects.labels.relatedWork} <FaExternalLinkAlt />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
