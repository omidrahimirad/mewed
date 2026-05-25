import './Contact.css'
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'
import { useState } from 'react'
import { profile } from '../../data/profile'

const Contact = () => {
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
      window.location.href = '/thank-you'
    } catch (err) {
      console.error(err)
      setStatus('error')
      alert('Submission failed. Please try again.')
    }
  }

  return (
    <div className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item animate-fadeIn">
              <div className="contact-icon"><FaEnvelope /></div>
              <div className="contact-text">
                <h3>Email</h3>
                <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
              </div>
            </div>
            <div className="contact-item animate-fadeIn delay-1">
              <div className="contact-icon"><FaPhone /></div>
              <div className="contact-text">
                <h3>Phone</h3>
                <p><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></p>
              </div>
            </div>
            <div className="contact-item animate-fadeIn delay-2">
              <div className="contact-icon"><FaMapMarkerAlt /></div>
              <div className="contact-text">
                <h3>Location</h3>
                <p>{profile.location}</p>
              </div>
            </div>
            <div className="contact-links animate-fadeIn delay-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
              <a href={profile.cv} download><FaFileDownload /> Download CV</a>
            </div>
          </div>

          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="contact-form animate-fadeIn delay-4"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: 'none' }}>
              <label>Don’t fill this out: <input name="bot-field" /></label>
            </p>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" placeholder="your.email@company.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" name="subject" placeholder="Role, collaboration, or project question" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="How can I help?" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
              <FaPaperPlane /> {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
