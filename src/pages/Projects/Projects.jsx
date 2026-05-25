import './Projects.css'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../../data/profile'

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={project.title} className={`project-card animate-fadeIn delay-${index + 1}`}>
              <div className="project-heading">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p><strong>Objective:</strong> {project.objective}</p>
              <p><strong>Methods:</strong> {project.methods}</p>
              <p><strong>Results:</strong> {project.results}</p>
              {project.link && (
                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                  View related work <FaExternalLinkAlt />
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
