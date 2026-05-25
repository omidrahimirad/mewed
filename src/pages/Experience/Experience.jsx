import './Experience.css'

const Experience = ({ t }) => {
  return (
    <div className="experience">
      <div className="container">
        <h2 className="section-title">{t.experience.title}</h2>
        <div className="experience-list">
          {t.experience.items.map((item, index) => (
            <article key={item.title} className={`experience-item animate-fadeIn delay-${index + 1}`}>
              <div className="experience-meta">
                <span>{item.date}</span>
              </div>
              <div className="experience-body">
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
