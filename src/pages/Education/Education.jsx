import './Education.css'

const Education = ({ t }) => {
  return (
    <div className="education">
      <div className="container">
        <h2 className="section-title">{t.education.title}</h2>
        <div className="education-list">
          {t.education.items.map((item) => (
            <article key={item.title} className="education-item animate-fadeIn">
              <span className="education-date">{item.date}</span>
              <h3>{item.title}</h3>
              <h4>{item.school}</h4>
              {item.details.map((detail) => (
                <p key={detail}>{detail}</p>
              ))}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
