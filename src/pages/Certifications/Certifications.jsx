import './Certifications.css'

const Certifications = ({ t }) => {
  return (
    <div className="certifications">
      <div className="container">
        <h2 className="section-title">{t.certifications.title}</h2>
        <ul className="certification-list">
          {t.certifications.items.map((item) => (
            <li key={item} className="certification-item animate-fadeIn">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Certifications
