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
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => (
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ))
  const [activeSection, setActiveSection] = useState('home')

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
      />
      
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
