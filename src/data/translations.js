export const languageOptions = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' }
]

export const translations = {
  en: {
    meta: {
      lang: 'en',
      title: 'Omid Rahimi - Systems Integration, Test & RF Performance Portfolio',
      description: 'Portfolio of Omid Rahimi, an engineer with 9+ years of experience in systems integration, testing, RF performance analysis, KPI-driven diagnostics, configuration validation, and Linux/Python automation across 4G/5G RAN and cloud-native 5G test environments.'
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
      headline: 'Omid Rahimi – Systems Integration, Test & RF Performance Engineer',
      subheadline: '4G/5G RAN · Cloud-Native Test Environments · KPI-Driven Diagnostics',
      summary: 'Engineer with 9+ years of experience in systems integration, testing, and RF performance analysis across 4G/5G RAN and cloud-native 5G test environments. Strong background in KPI-driven diagnostics, reproducible test workflows, configuration validation, and automation using Linux/Python. Based in Germany with full-time work authorization, available at short notice, and open to relocation within Germany.',
      targetLabel: 'Professional focus:',
      targetRoles: [
        'Systems Integration & Validation',
        'Test & Validation',
        'RF Performance Analysis',
        'RAN Operations & Optimization'
      ],
      portraitAlt: 'Omid Rahimi profile portrait'
    },
    experience: {
      title: 'Experience',
      items: [
        {
          title: 'Wireless (RAN) Engineer - RAN Operations & Optimization',
          company: 'Contracted via FPR Co. / Delta Ertebatat Iranian for Huawei RAN projects, Tehran, Iran',
          date: 'July 2016 - March 2023',
          bullets: [
            'Supported deployment, configuration, optimization, and troubleshooting of large-scale LTE and early 5G RAN infrastructure in live mobile network environments.',
            'Performed KPI-based fault analysis using RSRP, SINR, BLER, throughput, latency, handover success rate, accessibility, and retainability.',
            'Conducted cross-layer root cause analysis across RRC, NAS, MAC, and PHY to link protocol behavior with RAN performance degradation.',
            'Executed 50+ live software upgrades and license activations, including change-window support, post-upgrade validation, and service-continuity checks.',
            'Verified and validated 400+ RAN configuration changes against design parameters and operational requirements to reduce production misconfiguration risk.'
          ]
        },
        {
          title: 'Wireless Network Modernization Engineer - ZTE Parsian Modernization Project',
          company: 'Employed by Iran Ofogh Industrial Development Co.; assigned to ZTE Parsian, Tehran, Iran',
          date: 'May 2015 - July 2016',
          bullets: [
            'Integrated 900+ BTS/network nodes during large-scale mobile network modernization projects, ensuring compatibility with existing infrastructure and stable post-rollout operation.',
            'Performed radio configuration, parameter tuning, and frequency-planning support during network expansion and modernization activities.',
            'Validated system behavior after configuration and parameter updates using monitoring data, alarms, and performance indicators.',
            'Supported migration from legacy network environments toward 4G infrastructure while maintaining operational stability during rollout phases.'
          ]
        },
        {
          title: 'RAN Front Office Engineer - Huawei Technologies Service Project',
          company: 'Employed by SGS Iran for Huawei RAN projects, Tehran, Iran',
          date: 'March 2013 - March 2015',
          bullets: [
            'Monitored RAN system health, availability, alarms, and traffic behavior in a NOC-style operational environment.',
            'Produced daily and weekly KPI reports and performed first-level troubleshooting for access, mobility, capacity, and service-quality issues.',
            'Maintained shift logs, incident records, and operational procedures to support consistent escalation and troubleshooting workflows.'
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
          objective: 'Support KPI-driven optimization by estimating capacity and throughput behavior from telecom performance data.',
          methods: 'Used Python-based KPI analysis, throughput modelling, feature analysis, SHAP, and machine-learning workflows for telecom data.',
          results: 'Built an analysis approach that helps connect network KPIs with capacity drivers and performance degradation patterns.',
          link: 'https://github.com/omidrahimirad'
        },
        {
          title: '5G Test System - Cloud-Native Simulation Environment',
          year: '2024',
          objective: 'Evaluate 5G test environments at system level using reproducible cloud-native test workflows.',
          methods: 'Built and analyzed Kubernetes/O-RAN-based 5G test scenarios, including multi-user performance evaluation.',
          results: 'Analyzed throughput and latency behavior using KPI-based evaluation in Linux-based test environments.',
          link: 'https://github.com/omidrahimirad'
        },
        {
          title: 'RF Material Characterization Using Machine Learning',
          year: '2025',
          objective: 'Characterize permittivity for RF and microwave applications using experimental measurement and AI-based prediction.',
          methods: 'Worked with RF measurement analysis, AI-based material characterization, and machine-learning workflows.',
          results: 'Connected experimental RF measurement data with AI-based prediction methods for material characterization.',
          link: null
        }
      ]
    },
    skills: {
      title: 'Skills',
      groups: [
        {
          title: 'Systems Integration & Validation',
          items: [
            'End-to-end validation',
            'Configuration verification and post-change validation',
            'Performance testing and load testing',
            'Root cause analysis',
            'RAN configuration validation across live network environments'
          ]
        },
        {
          title: 'Telecom & 3GPP Systems',
          items: [
            'LTE, 5G NR, and RAN architecture',
            'RRC, NAS, MAC, and PHY layer analysis',
            'RAN integration and OSS/NMS monitoring',
            'KPI-based troubleshooting with RSRP, SINR, BLER, throughput, latency, accessibility, and retainability'
          ]
        },
        {
          title: 'Software, Data & Automation',
          items: [
            'Python (pandas, scikit-learn, NumPy)',
            'SQL',
            'Power BI',
            'Git and Linux',
            'Jupyter',
            'Python-based KPI analysis'
          ]
        },
        {
          title: 'Automation & PLC Fundamentals',
          items: [
            'PLC basics',
            'Siemens TIA Portal',
            'Control logic and timers',
            'Sensor/actuator concepts',
            'Automation coursework'
          ]
        },
        {
          title: 'Cloud-Native & Test Platforms',
          items: [
            'Kubernetes, Docker, Linux',
            'O-RAN components',
            'Linux-based test environments',
            'Reproducible test workflows'
          ]
        },
        {
          title: 'AI/ML for Telecom',
          items: [
            'Capacity prediction',
            'Throughput modelling',
            'SHAP and feature analysis',
            'KPI-driven optimization support'
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
          date: 'March 2023 - 2026',
          details: [
            'Master thesis: Permittivity Characterization for RF and Microwave Applications: Experimental Measurement and AI-Based Prediction.',
            'Academic and research work includes RF measurement analysis, AI-based material characterization, and system-level evaluation of 5G test environments.',
            'Built and analyzed Kubernetes/O-RAN-based 5G test scenarios, including multi-user performance evaluation and KPI-based throughput/latency analysis.'
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
      title: 'Omid Rahimi - Systemintegration, Test & HF-Performance',
      description: 'Portfolio von Omid Rahimi, Ingenieur mit über 9 Jahren Erfahrung in Systemintegration, Test, HF-/Performance-Analyse, KPI-basierter Diagnostik, Konfigurationsvalidierung und Automatisierung mit Linux/Python in 4G/5G-RAN- und cloud-nativen 5G-Testumgebungen.'
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
      headline: 'Omid Rahimi – Systemintegration, Test & HF-Performance',
      subheadline: '4G/5G-RAN · Cloud-native Testumgebungen · KPI-basierte Diagnostik',
      summary: 'Ingenieur mit über 9 Jahren Erfahrung in Systemintegration, Test und HF-/Performance-Analyse in 4G/5G-RAN- und cloud-nativen 5G-Testumgebungen. Fundierte Erfahrung in KPI-basierter Diagnostik, reproduzierbaren Testabläufen, Konfigurationsvalidierung und Automatisierung mit Linux/Python. Wohnhaft in Deutschland, Vollzeit arbeitserlaubt, kurzfristig verfügbar und umzugsbereit innerhalb Deutschlands.',
      targetLabel: 'Fachlicher Fokus:',
      targetRoles: [
        'Systemintegration & Validierung',
        'Test & Validierung',
        'HF-/Performance-Analyse',
        'RAN-Betrieb & Optimierung'
      ],
      portraitAlt: 'Profilfoto von Omid Rahimi'
    },
    experience: {
      title: 'Berufserfahrung',
      items: [
        {
          title: 'Wireless-RAN-Ingenieur - RAN-Betrieb und -Optimierung',
          company: 'Beauftragt über FPR Co. / Delta Ertebatat Iranian für Huawei RAN-Projekte, Teheran, Iran',
          date: 'Juli 2016 - März 2023',
          bullets: [
            'Unterstützte Bereitstellung, Konfiguration, Optimierung und Fehlerbehebung großflächiger LTE- und früher 5G-RAN-Infrastrukturen in produktiven Mobilfunknetzen.',
            'Führte KPI-basierte Fehleranalysen anhand von RSRP, SINR, BLER, Durchsatz, Latenz, Handover-Erfolgsrate, Accessibility und Retainability durch.',
            'Analysierte Ursachen von Performance-Degradationen schichtübergreifend über RRC, NAS, MAC und PHY.',
            'Führte mehr als 50 Live-Software-Upgrades und Lizenzaktivierungen durch, inklusive Change-Window-Unterstützung, Post-Upgrade-Validierung und Service-Continuity-Checks.',
            'Verifizierte und validierte über 400 RAN-Konfigurationsänderungen anhand von Designparametern und Betriebsanforderungen, um Fehlkonfigurationen im Produktivnetz zu reduzieren.'
          ]
        },
        {
          title: 'Ingenieur für die Modernisierung drahtloser Netzwerke - ZTE Parsian Modernisierungsprojekt',
          company: 'Angestellt bei Iran Ofogh Industrial Development Co.; eingesetzt bei ZTE Parsian, Teheran, Iran',
          date: 'Mai 2015 - Juli 2016',
          bullets: [
            'Integrierte über 900 BTS-/Netzwerkknoten im Rahmen großflächiger Mobilfunknetz-Modernisierungsprojekte.',
            'Sicherte die Kompatibilität mit bestehender Infrastruktur und einen stabilen Betrieb nach dem Rollout.',
            'Unterstützte Funkkonfiguration, Parameteroptimierung und Frequenzplanung während Netzwerk-Erweiterungs- und Modernisierungsmaßnahmen.',
            'Validierte das Systemverhalten nach Konfigurations- und Parameteränderungen anhand von Monitoring-Daten, Alarmen und Performance-Indikatoren.',
            'Unterstützte die Migration von Legacy-Netzwerkumgebungen in Richtung 4G-Infrastruktur bei gleichzeitiger Aufrechterhaltung der Betriebsstabilität.'
          ]
        },
        {
          title: 'RAN Front Office Engineer - Huawei Technologies Serviceprojekt',
          company: 'Angestellt bei SGS Iran für Huawei RAN-Projekte, Teheran, Iran',
          date: 'März 2013 - März 2015',
          bullets: [
            'Überwachte RAN-Systemzustand, Verfügbarkeit, Alarme und Verkehrsverhalten in einer NOC-ähnlichen Betriebsumgebung.',
            'Erstellte tägliche und wöchentliche KPI-Berichte und führte First-Level-Troubleshooting für Access-, Mobility-, Capacity- und Service-Quality-Probleme durch.',
            'Pflegte Schichtprotokolle, Incident Records und Betriebsabläufe zur Unterstützung einheitlicher Eskalations- und Troubleshooting-Prozesse.'
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
          objective: 'Unterstützung KPI-gestützter Optimierung durch Kapazitätsprognose und Durchsatzmodellierung anhand von Telekommunikationsdaten.',
          methods: 'Python-basierte KPI-Analyse, Durchsatzmodellierung, Merkmalsanalyse, SHAP und Machine-Learning-Workflows für Telekommunikationsdaten.',
          results: 'Entwicklung eines Analyseansatzes, der Netzwerk-KPIs mit Kapazitätstreibern und Performance-Degradationen verknüpft.',
          link: 'https://github.com/omidrahimirad'
        },
        {
          title: '5G-Testsystem - Cloud-native Simulationsumgebung',
          year: '2024',
          objective: 'Systembewertung von 5G-Testumgebungen mit reproduzierbaren cloud-nativen Testabläufen.',
          methods: 'Entwicklung und Analyse Kubernetes-/O-RAN-basierter 5G-Testszenarien, einschließlich Multi-User-Performance-Bewertung.',
          results: 'KPI-basierte Durchsatz- und Latenzanalyse in Linux-basierten Testumgebungen.',
          link: 'https://github.com/omidrahimirad'
        },
        {
          title: 'HF-Materialcharakterisierung mit Machine Learning',
          year: '2025',
          objective: 'Charakterisierung der Permittivität für HF- und Mikrowellenanwendungen durch experimentelle Messung und KI-basierte Vorhersage.',
          methods: 'HF-Messanalyse, KI-basierte Materialcharakterisierung und Machine-Learning-Workflows.',
          results: 'Verknüpfung experimenteller HF-Messdaten mit KI-basierten Vorhersagemethoden für die Materialcharakterisierung.',
          link: null
        }
      ]
    },
    skills: {
      title: 'Kenntnisse',
      groups: [
        {
          title: 'Systemintegration & Validierung',
          items: [
            'End-to-End-Validierung',
            'Konfigurationsprüfung und Post-Change-Validierung',
            'Performance-Tests und Lasttests',
            'Ursachenanalyse',
            'RAN-Konfigurationsvalidierung in produktiven Netzumgebungen'
          ]
        },
        {
          title: 'Telekommunikation & 3GPP-Systeme',
          items: [
            'LTE, 5G NR und RAN-Architektur',
            'Analyse der Protokollebenen RRC, NAS, MAC und PHY',
            'RAN-Integration und OSS/NMS-Monitoring',
            'KPI-basierte Fehleranalyse mit RSRP, SINR, BLER, Durchsatz, Latenz, Accessibility und Retainability'
          ]
        },
        {
          title: 'Software, Daten & Automatisierung',
          items: [
            'Python (pandas, scikit-learn, NumPy)',
            'SQL',
            'Power BI',
            'Git und Linux',
            'Jupyter',
            'Python-basierte KPI-Analyse'
          ]
        },
        {
          title: 'Automatisierung & SPS-Grundlagen',
          items: [
            'SPS-Grundlagen',
            'Siemens TIA Portal',
            'Steuerungslogik und Timer',
            'Sensor-/Aktor-Konzepte',
            'Automatisierung im Masterstudium'
          ]
        },
        {
          title: 'Cloud-native Testplattformen',
          items: [
            'Kubernetes, Docker, Linux',
            'O-RAN-Komponenten',
            'Linux-basierte Testumgebungen',
            'Reproduzierbare Test-Workflows'
          ]
        },
        {
          title: 'KI/ML für Telekommunikation',
          items: [
            'Kapazitätsprognose',
            'Durchsatzmodellierung',
            'SHAP und Merkmalsanalyse',
            'KPI-gestützte Optimierung'
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
          school: 'Hochschule Deggendorf (THD), Deutschland',
          date: 'März 2023 - 2026',
          details: [
            'Masterarbeit: Charakterisierung der Permittivität für HF- und Mikrowellenanwendungen: experimentelle Messung und KI-basierte Vorhersage.',
            'Akademische Forschungsarbeit mit Fokus auf HF-Messanalyse, KI-basierte Materialcharakterisierung und Systembewertung von 5G-Testumgebungen.',
            'Entwicklung und Analyse Kubernetes-/O-RAN-basierter 5G-Testszenarien, einschließlich Multi-User-Performance-Bewertung sowie KPI-basierter Durchsatz- und Latenzanalyse.'
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
