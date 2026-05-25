export const languageOptions = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' }
]

export const translations = {
  en: {
    meta: {
      lang: 'en',
      title: 'Omid Rahimi - Systems Integration & Wireless Engineer Portfolio',
      description: 'Portfolio of Omid Rahimi, a systems integration and wireless engineer with 9+ years of experience integrating, validating, and optimizing 4G/5G/O-RAN networks, deploying cloud-native 5G testbeds, and applying machine learning to RF systems.'
    },
    common: {
      downloadCv: 'Download CV',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'Email'
    },
    nav: {
      home: 'Home',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      certifications: 'Certifications',
      education: 'Education',
      contact: 'Contact'
    },
    header: {
      profileLinks: 'Profile links',
      languageLabel: 'Select language',
      themeToggle: 'Toggle color theme',
      menuToggle: 'Toggle navigation menu'
    },
    hero: {
      headline: 'Omid Rahimi – Systems Integration & Wireless Engineer',
      subheadline: 'Systems Integration, Test & RF Performance Engineer',
      summary: 'With over nine years integrating and validating 4G/5G/O-RAN networks for Huawei and ZTE, I specialise in end-to-end system integration, KPI-driven performance analysis and cloud-native testbed deployment. I recently designed and operated a 5G test environment using Kubernetes and O-RAN components as part of my master’s studies at Deggendorf University of Applied Sciences, and my thesis applies machine learning to RF material characterization.',
      targetLabel: 'Looking for roles:',
      targetRoles: [
        'Systems Integration & Test Engineer',
        'Network Infrastructure Engineer',
        'RF Measurement & Validation Engineer'
      ],
      portraitAlt: 'Omid Rahimi profile portrait'
    },
    experience: {
      title: 'Experience',
      items: [
        {
          title: 'Research Engineer - 5G Systems & RF Technology',
          company: 'Deggendorf University of Applied Sciences (THD), Germany',
          date: 'December 2024 - March 2026',
          bullets: [
            'Designed and operated a cloud-native 5G test environment using Kubernetes and O-RAN components for system-level performance evaluation.',
            'Simulated multi-user scenarios with 100+ users to analyze throughput, latency, and system behavior under load.',
            'Performed end-to-end system validation by correlating RF measurements with network KPIs to understand cross-layer effects.',
            'Structured automated test workflows and logs for reproducible system testing and analysis.'
          ]
        },
        {
          title: 'Wireless Systems Engineer - RAN Integration & Optimisation',
          company: 'Contracted via FPR Co. / Delta Ertebatat Iranian, Tehran, Iran (Huawei RAN Project)',
          date: 'July 2016 - March 2023',
          bullets: [
            'Validated and integrated large-scale distributed RAN systems across network components and interfaces.',
            'Performed root-cause analysis of system-level issues across RRC, NAS, MAC, and PHY layers.',
            'Executed 50+ live system upgrades and configuration changes while maintaining service continuity.',
            'Verified 400+ configuration changes against design parameters to prevent production misconfigurations.',
            'Analyzed throughput, latency, reliability, and other KPIs to identify bottlenecks and improve stability.'
          ]
        },
        {
          title: 'BSC/RNC Technical Engineer - Nationwide Network Modernisation',
          company: 'Iran Ofogh Industrial Development Co. / ZTE Parsian, Tehran, Iran',
          date: 'May 2015 - July 2016',
          bullets: [
            'Integrated 900+ network nodes into existing infrastructure while maintaining system compatibility and stable operation.',
            'Performed configuration and parameter tuning during large-scale modernization work.',
            'Supported infrastructure transition from legacy systems to 4G environments.'
          ]
        },
        {
          title: 'Network Operations Engineer - System Monitoring & Incident Support',
          company: 'SGS Iran (Huawei Technologies Service Project), Tehran, Iran',
          date: 'March 2013 - March 2015',
          bullets: [
            'Monitored system health and performance using alarms and KPI trends to identify early-stage issues.',
            'Supported incident handling workflows and operational procedures for sustained system stability.'
          ]
        }
      ]
    },
    projects: {
      title: 'Projects',
      labels: {
        objective: 'Objective:',
        methods: 'Methods:',
        results: 'Results:',
        relatedWork: 'View related work'
      },
      items: [
        {
          title: 'ML-Based Link Capacity Estimation in 4G/5G Networks',
          year: '2024',
          objective: 'Estimate system throughput from real KPI data and identify the strongest capacity drivers across wireless deployments.',
          methods: 'Built XGBoost and Random Forest models, performed feature analysis, and used SHAP to interpret throughput behavior.',
          results: 'Produced a data-driven workflow for network optimization and clearer prioritization of performance bottlenecks.',
          link: 'https://github.com/omidrahimirad'
        },
        {
          title: '5G Test System - Cloud-Native Simulation Environment',
          year: '2024',
          objective: 'Create a reproducible 5G system test environment for cloud-native RAN/core validation.',
          methods: 'Deployed a complete simulation stack using Kubernetes, Docker, Linux, and O-RAN components.',
          results: 'Automated scenario execution and analyzed stability, throughput, and latency profiles under varying loads.',
          link: 'https://github.com/omidrahimirad'
        },
        {
          title: 'RF Material Characterization Using Machine Learning',
          year: '2025',
          objective: 'Predict dielectric properties for RF and microwave applications from experimental measurement data.',
          methods: 'Prepared impedance spectroscopy data and developed machine-learning and symbolic-regression workflows.',
          results: 'Supported faster RF material evaluation by connecting measurement features with permittivity prediction.',
          link: null
        }
      ]
    },
    skills: {
      title: 'Skills',
      groups: [
        {
          title: 'Wireless & Systems',
          items: [
            '4G/5G RAN integration & optimization',
            'O-RAN architecture and cloud-native 5G testbeds',
            'RF measurement & signal analysis',
            'KPI analysis and root-cause troubleshooting across RRC/NAS/MAC/PHY',
            'System integration, interface verification, and configuration validation'
          ]
        },
        {
          title: 'Programming & Data',
          items: [
            'Python (pandas, scikit-learn, NumPy)',
            'SQL',
            'Power BI',
            'Jupyter',
            'SHAP-based feature analysis'
          ]
        },
        {
          title: 'DevOps & Tools',
          items: [
            'Kubernetes, Docker, Linux',
            'Git',
            'Automated test workflows',
            'OSS/NMS alarm diagnostics'
          ]
        },
        {
          title: 'Certifications',
          items: [
            'Huawei Certified Network Professional (HCNP - LTE)',
            'Huawei Certified 5G Associate',
            'Python for Machine Learning (scikit-learn)',
            'Power BI and SQL'
          ]
        },
        {
          title: 'Languages',
          items: [
            'Persian (native)',
            'English (C2)',
            'German (B2/C1)'
          ]
        }
      ]
    },
    certifications: {
      title: 'Certifications & Awards',
      items: [
        'Huawei Certified Network Professional (HCNP - LTE)',
        'Huawei Certified 5G Associate',
        'Python for Machine Learning (scikit-learn)',
        'Power BI | SQL',
        'Technical Star Award - Huawei (2022)',
        'Outstanding Engineer & Network Safety Team Award (2021)',
        'Individual Engineer Star & Bright Star Award - Huawei (2020)',
        'Ranked in top 1% of Iranian National University Entrance Exam (2007)'
      ]
    },
    education: {
      title: 'Education',
      items: [
        {
          title: 'M.Sc. Electrical Engineering & Information Technology (Automation)',
          school: 'Deggendorf University of Applied Sciences (THD), Germany',
          date: 'March 2023 - March 2026',
          details: [
            'Master thesis: Permittivity Characterization for RF and Microwave Applications: Experimental Measurement and AI-Based Prediction.',
            'Relevant focus areas: control systems, embedded signal processing, data science for engineers, cloud-native 5G systems, and RF measurement.'
          ]
        },
        {
          title: 'B.Sc. Electrical Engineering (Electronics)',
          school: 'Ferdowsi University of Mashhad, Iran',
          date: 'September 2008 - September 2012',
          details: [
            'Bachelor thesis: Analysis of CDMA Codes: Maximal, Gold, and Kasami Sequences.',
            'Relevant focus areas: electronics, communications systems, signal processing, and interference reduction.'
          ]
        }
      ]
    },
    contact: {
      title: 'Get In Touch',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationValue: 'Deggendorf, Germany',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your.email@company.com',
        subject: 'Subject',
        subjectPlaceholder: 'Role, collaboration, or project question',
        message: 'Message',
        messagePlaceholder: 'How can I help?',
        botField: 'Don’t fill this out:',
        send: 'Send Message',
        sending: 'Sending...',
        error: 'Submission failed. Please try again.'
      }
    },
    footer: {
      legal: 'Impressum / Legal Notice',
      copyright: 'All rights reserved.'
    }
  },
  de: {
    meta: {
      lang: 'de',
      title: 'Omid Rahimi - Ingenieur für Systemintegration & Wireless-Technologien',
      description: 'Portfolio von Omid Rahimi, Ingenieur für Systemintegration und Wireless-Technologien mit über neun Jahren Erfahrung in der Integration, Validierung und Optimierung von 4G/5G- und O-RAN-Systemen, cloud-nativen 5G-Testumgebungen und KI-gestützter HF-Materialcharakterisierung.'
    },
    common: {
      downloadCv: 'Lebenslauf herunterladen',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      email: 'E-Mail'
    },
    nav: {
      home: 'Start',
      experience: 'Berufserfahrung',
      projects: 'Projekte',
      skills: 'Kenntnisse',
      certifications: 'Zertifikate',
      education: 'Ausbildung',
      contact: 'Kontakt'
    },
    header: {
      profileLinks: 'Profil-Links',
      languageLabel: 'Sprache auswählen',
      themeToggle: 'Farbschema wechseln',
      menuToggle: 'Navigationsmenü öffnen oder schließen'
    },
    hero: {
      headline: 'Omid Rahimi – Ingenieur für Systemintegration & Wireless-Technologien',
      subheadline: 'Systemintegration, Test & HF-Performance',
      summary: 'Ich bringe über neun Jahre Erfahrung in der Integration, Validierung und Optimierung von 4G/5G- und O-RAN-Systemen aus Projekten mit Huawei und ZTE mit. Mein Schwerpunkt liegt auf End-to-End-Systemintegration, KPI-basierter Performance-Analyse und cloud-nativen 5G-Testumgebungen. Im Rahmen meines Masterstudiums an der Technischen Hochschule Deggendorf habe ich eine 5G-Testumgebung mit Kubernetes und O-RAN-Komponenten aufgebaut und betrieben. Meine Masterarbeit beschäftigt sich mit KI-gestützter HF-Materialcharakterisierung.',
      targetLabel: 'Zielpositionen:',
      targetRoles: [
        'Ingenieur für Systemintegration & Test',
        'Ingenieur für Netzwerkinfrastruktur',
        'Ingenieur für HF-Messtechnik & Validierung'
      ],
      portraitAlt: 'Profilfoto von Omid Rahimi'
    },
    experience: {
      title: 'Berufserfahrung',
      items: [
        {
          title: 'Research Engineer - 5G-Systeme & HF-Technologie',
          company: 'Technische Hochschule Deggendorf (THD), Deutschland',
          date: 'Dezember 2024 - März 2026',
          bullets: [
            'Aufbau und Betrieb einer cloud-nativen 5G-Testumgebung mit Kubernetes und O-RAN-Komponenten für systemnahe Performance-Bewertungen.',
            'Simulation von Mehrbenutzer-Szenarien mit über 100 Nutzern zur Analyse von Durchsatz, Latenz und Systemverhalten unter Last.',
            'End-to-End-Systemvalidierung durch Korrelation von HF-Messungen mit Netzwerk-KPIs zur Bewertung von Wechselwirkungen über mehrere Systemebenen.',
            'Strukturierung automatisierter Testabläufe und Logs für reproduzierbare Systemtests und Analysen.'
          ]
        },
        {
          title: 'Wireless Systems Engineer - RAN-Integration & Optimierung',
          company: 'Beauftragt über FPR Co. / Delta Ertebatat Iranian, Teheran, Iran (Huawei RAN Project)',
          date: 'Juli 2016 - März 2023',
          bullets: [
            'Validierung und Integration großer verteilter RAN-Systeme über Netzwerkkomponenten und Schnittstellen hinweg.',
            'Fehler- und Ursachenanalyse systemweiter Probleme über die Protokollebenen RRC, NAS, MAC und PHY.',
            'Durchführung von mehr als 50 Live-Systemupgrades und Konfigurationsänderungen bei laufendem Betrieb.',
            'Prüfung von mehr als 400 Konfigurationsänderungen gegen Designvorgaben zur Vermeidung von Fehlkonfigurationen in Produktionssystemen.',
            'Analyse von Durchsatz, Latenz, Zuverlässigkeit und weiteren KPIs zur Identifikation von Engpässen und Stabilitätsverbesserungen.'
          ]
        },
        {
          title: 'BSC/RNC Technical Engineer - Landesweite Netzmodernisierung',
          company: 'Iran Ofogh Industrial Development Co. / ZTE Parsian, Teheran, Iran',
          date: 'Mai 2015 - Juli 2016',
          bullets: [
            'Integration von mehr als 900 Netzwerkknoten in bestehende Infrastrukturen unter Berücksichtigung von Systemkompatibilität und stabilem Betrieb.',
            'Durchführung von Konfigurations- und Parametereinstellungen im Rahmen groß angelegter Modernisierungsmaßnahmen.',
            'Unterstützung der Infrastrukturumstellung von Legacy-Systemen auf 4G-Umgebungen.'
          ]
        },
        {
          title: 'Network Operations Engineer - Systemüberwachung & Incident Support',
          company: 'SGS Iran (Huawei Technologies Service Project), Teheran, Iran',
          date: 'März 2013 - März 2015',
          bullets: [
            'Überwachung von Systemzustand und Performance anhand von Alarmen und KPI-Trends zur frühzeitigen Erkennung von Problemen.',
            'Unterstützung von Incident-Handling-Prozessen und betrieblichen Abläufen zur Sicherstellung der Systemstabilität.'
          ]
        }
      ]
    },
    projects: {
      title: 'Projekte',
      labels: {
        objective: 'Ziel:',
        methods: 'Methoden:',
        results: 'Ergebnisse:',
        relatedWork: 'Weitere Informationen'
      },
      items: [
        {
          title: 'ML-basierte Link-Kapazitätsschätzung in 4G/5G-Netzen',
          year: '2024',
          objective: 'Schätzung des Systemdurchsatzes anhand realer KPI-Daten und Identifikation wichtiger Einflussfaktoren auf die Kapazität in Wireless-Netzen.',
          methods: 'Entwicklung von XGBoost- und Random-Forest-Modellen, Feature-Analyse und Einsatz von SHAP zur Interpretation des Durchsatzverhaltens.',
          results: 'Erstellung eines datenbasierten Workflows für Netzwerkoptimierung und nachvollziehbare Priorisierung von Performance-Engpässen.',
          link: 'https://github.com/omidrahimirad'
        },
        {
          title: '5G-Testsystem - Cloud-native Simulationsumgebung',
          year: '2024',
          objective: 'Aufbau einer reproduzierbaren 5G-Systemtestumgebung für die Validierung von cloud-nativen RAN- und Core-Komponenten.',
          methods: 'Bereitstellung eines vollständigen Simulations-Stacks mit Kubernetes, Docker, Linux und O-RAN-Komponenten.',
          results: 'Automatisierte Ausführung von Testszenarien sowie Analyse von Stabilität, Durchsatz und Latenzprofilen unter unterschiedlichen Lastbedingungen.',
          link: 'https://github.com/omidrahimirad'
        },
        {
          title: 'HF-Materialcharakterisierung mit Machine Learning',
          year: '2025',
          objective: 'Vorhersage dielektrischer Eigenschaften für RF/HF- und Mikrowellenanwendungen anhand experimenteller Messdaten.',
          methods: 'Aufbereitung von Impedanzspektroskopie-Daten und Entwicklung von Machine-Learning- sowie Symbolic-Regression-Workflows.',
          results: 'Unterstützung einer schnelleren HF-Materialbewertung durch Verknüpfung von Messmerkmalen mit Permittivitätsvorhersagen.',
          link: null
        }
      ]
    },
    skills: {
      title: 'Kenntnisse',
      groups: [
        {
          title: 'Wireless & Systeme',
          items: [
            '4G/5G-RAN-Integration & Optimierung',
            'O-RAN-Architektur und cloud-native 5G-Testumgebungen',
            'RF/HF-Messtechnik & Signalanalyse',
            'KPI-basierte Analyse und Ursachenanalyse über RRC/NAS/MAC/PHY',
            'Systemintegration, Schnittstellenprüfung und Konfigurationsvalidierung'
          ]
        },
        {
          title: 'Programmierung & Datenanalyse',
          items: [
            'Python (pandas, scikit-learn, NumPy)',
            'SQL',
            'Power BI',
            'Jupyter',
            'SHAP-basierte Feature-Analyse'
          ]
        },
        {
          title: 'DevOps & Tools',
          items: [
            'Kubernetes, Docker, Linux',
            'Git',
            'Automatisierte Testabläufe',
            'OSS/NMS-Alarmdiagnose'
          ]
        },
        {
          title: 'Zertifikate',
          items: [
            'Huawei Certified Network Professional (HCNP - LTE)',
            'Huawei Certified 5G Associate',
            'Python for Machine Learning (scikit-learn)',
            'Power BI und SQL'
          ]
        },
        {
          title: 'Sprachen',
          items: [
            'Persisch (Muttersprache)',
            'Englisch (C2)',
            'Deutsch (B2/C1)'
          ]
        }
      ]
    },
    certifications: {
      title: 'Zertifikate & Auszeichnungen',
      items: [
        'Huawei Certified Network Professional (HCNP - LTE)',
        'Huawei Certified 5G Associate',
        'Python for Machine Learning (scikit-learn)',
        'Power BI | SQL',
        'Technical Star Award - Huawei (2022)',
        'Outstanding Engineer & Network Safety Team Award (2021)',
        'Individual Engineer Star & Bright Star Award - Huawei (2020)',
        'Top 1 % der iranischen nationalen Hochschulaufnahmeprüfung (2007)'
      ]
    },
    education: {
      title: 'Ausbildung',
      items: [
        {
          title: 'M.Sc. Elektrotechnik & Informationstechnik (Automatisierungstechnik)',
          school: 'Technische Hochschule Deggendorf (THD), Deutschland',
          date: 'März 2023 - März 2026',
          details: [
            'Masterarbeit: Permittivitätscharakterisierung für RF/HF- und Mikrowellenanwendungen: experimentelle Messung und KI-basierte Vorhersage.',
            'Schwerpunkte: Regelungstechnik, eingebettete Signalverarbeitung, Data Science für Ingenieure, cloud-native 5G-Systeme und HF-Messtechnik.'
          ]
        },
        {
          title: 'B.Sc. Elektrotechnik (Elektronik)',
          school: 'Ferdowsi University of Mashhad, Iran',
          date: 'September 2008 - September 2012',
          details: [
            'Bachelorarbeit: Analyse von CDMA-Codes: Maximal-, Gold- und Kasami-Sequenzen.',
            'Schwerpunkte: Elektronik, Kommunikationssysteme, Signalverarbeitung und Interferenzreduktion.'
          ]
        }
      ]
    },
    contact: {
      title: 'Kontakt aufnehmen',
      email: 'E-Mail',
      phone: 'Telefon',
      location: 'Standort',
      locationValue: 'Deggendorf, Deutschland',
      form: {
        name: 'Name',
        namePlaceholder: 'Ihr Name',
        email: 'E-Mail',
        emailPlaceholder: 'ihre.email@unternehmen.de',
        subject: 'Betreff',
        subjectPlaceholder: 'Position, Zusammenarbeit oder Projektanfrage',
        message: 'Nachricht',
        messagePlaceholder: 'Wie kann ich helfen?',
        botField: 'Dieses Feld bitte nicht ausfüllen:',
        send: 'Nachricht senden',
        sending: 'Wird gesendet...',
        error: 'Das Senden ist fehlgeschlagen. Bitte versuchen Sie es erneut.'
      }
    },
    footer: {
      legal: 'Impressum',
      copyright: 'Alle Rechte vorbehalten.'
    }
  }
}
