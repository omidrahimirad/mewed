import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Education from './pages/Education/Education'
import Certifications from './pages/Certifications/Certifications'
import Contact from './pages/Contact/Contact'
import { translations } from './data/translations'
import './App.css'

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('language')
  return savedLanguage && translations[savedLanguage] ? savedLanguage : 'en'
}

function App() {
  const [darkMode, setDarkMode] = useState(() => (
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ))
  const [activeSection, setActiveSection] = useState('home')
  const [language, setLanguage] = useState(getInitialLanguage)
  const t = translations[language]

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = t.meta.lang
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [language, t])

  useEffect(() => {
    const sectionIds = ['home', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.6]
      }
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const handleNavigation = (section) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection}
        handleNavigation={handleNavigation}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      
      <main>
        <section id="home">
          <Home t={t} language={language} />
        </section>
        <section id="experience">
          <Experience t={t} />
        </section>
        <section id="projects">
          <Projects t={t} />
        </section>
        <section id="skills">
          <Skills t={t} />
        </section>
        <section id="certifications">
          <Certifications t={t} />
        </section>
        <section id="education">
          <Education t={t} />
        </section>
        <section id="contact">
          <Contact t={t} language={language} />
        </section>
      </main>
      
      <Footer t={t} language={language} />
    </div>
  )
}

export default App
