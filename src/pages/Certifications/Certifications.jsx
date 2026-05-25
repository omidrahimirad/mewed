import './Certifications.css'
import { certifications } from '../../data/profile'

const Certifications = () => {
  return (
    <div className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications & Awards</h2>
        <ul className="certification-list">
          {certifications.map((item) => (
            <li key={item} className="certification-item animate-fadeIn">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Certifications
