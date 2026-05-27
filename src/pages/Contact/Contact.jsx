import './Contact.css'
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import { useState } from 'react'
import { getCvUrl, profile } from '../../data/profile'

const Contact = ({ t, language }) => {
  const [status, setStatus] = useState('idle')

  // helper to encode data like a classic form POST
  const encode = (data) =>
    new URLSearchParams(data).toString()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = {
      'form-name': form.getAttribute('name'),
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
      'bot-field': form['bot-field']?.value || ''
    }

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(formData)
      })
      window.location.href = '/thank-you.html'
    } catch (err) {
      console.error(err)
      setStatus('error')
      alert(t.contact.form.error)
    }
  }

  return (
    <div className="contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item animate-fadeIn">
              <div className="contact-icon"><FaEnvelope /></div>
              <div className="contact-text">
                <h3>{t.contact.email}</h3>
                <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
              </div>
            </div>
            <div className="contact-item animate-fadeIn delay-1">
              <div className="contact-icon"><FaPhone /></div>
              <div className="contact-text">
                <h3>{t.contact.phone}</h3>
                <p><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></p>
              </div>
            </div>
            <div className="contact-item animate-fadeIn delay-2">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div className="contact-text">
                <h3>{t.contact.location}</h3>
                <p>{t.contact.locationValue}</p>
              </div>
            </div>
            <div className="contact-links animate-fadeIn delay-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> {t.common.linkedin}</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"><FaGithub /> {t.common.github}</a>
              <a href={getCvUrl(language)} download><FaFileDownload /> {t.common.downloadCv}</a>
            </div>
          </div>

          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form animate-fadeIn delay-4"
            onSubmit={handleSubmit}
            data-language={language}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: 'none' }}>
              <label>{t.contact.form.botField} <input name="bot-field" /></label>
            </p>

            <div className="form-group">
              <label htmlFor="name">{t.contact.form.name}</label>
              <input id="name" type="text" name="name" placeholder={t.contact.form.namePlaceholder} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.contact.form.email}</label>
              <input id="email" type="email" name="email" placeholder={t.contact.form.emailPlaceholder} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t.contact.form.subject}</label>
              <input id="subject" type="text" name="subject" placeholder={t.contact.form.subjectPlaceholder} />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t.contact.form.message}</label>
              <textarea id="message" name="message" placeholder={t.contact.form.messagePlaceholder} rows="5" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
              <FaPaperPlane /> {status === 'submitting' ? t.contact.form.sending : t.contact.form.send}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
