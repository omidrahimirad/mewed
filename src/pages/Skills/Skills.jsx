import './Skills.css'
import { skillGroups } from '../../data/profile'

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group animate-fadeIn">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
