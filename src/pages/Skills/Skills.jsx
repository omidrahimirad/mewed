import './Skills.css'

const Skills = ({ t }) => {
  return (
    <div className="skills">
      <div className="container">
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skill-groups">
          {t.skills.groups.map((group) => (
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
