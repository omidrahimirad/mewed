export const profile = {
  name: 'Omid Rahimi',
  email: 'omid.rahimirad@gmail.com',
  phone: '+49 176 48994467',
  cv: {
    en: '/files/Omid_Rahimi_CV_EN.pdf',
    de: '/files/Omid_Rahimi_Lebenslauf_DE.pdf'
  },
  linkedin: 'https://www.linkedin.com/in/0midrahimi/',
  github: 'https://github.com/omidrahimirad'
}

export const getCvUrl = (language) => profile.cv[language] || profile.cv.en
