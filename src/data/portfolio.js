export const links = {
  github: "https://github.com/omidrahimirad",
  linkedin: "https://www.linkedin.com/in/0midrahimi/",
  email: "mailto:omid.rahimirad@gmail.com",
  cv: {
    en: "/files/Omid_Rahimi_CV_EN.pdf",
    de: "/files/Omid_Rahimi_Lebenslauf_DE.pdf",
  },
};

export const projects = [
  {
    code: "RF-01",
    featured: true,
    href: "https://github.com/omidrahimirad/drive-test-rf-coverage-analyzer",
    tags: ["LTE / 5G", "RSRP / SINR", "Folium", "Python"],
    en: {
      title: "Drive-test RF coverage analyzer",
      summary:
        "Turns synthetic LTE/5G GPS and KPI traces into weak-coverage detection, interactive maps, and engineering-ready reports.",
      problem:
        "Coverage issues are difficult to isolate when location, RSRP, SINR, and other KPI traces are reviewed separately.",
      method:
        "Processes synthetic LTE/5G drive-test data in Python and evaluates geographic and radio-performance relationships.",
      output:
        "Weak-coverage identification, interactive Folium maps, and structured reports for engineering review.",
    },
    de: {
      title: "Drive-Test RF Coverage Analyzer",
      summary:
        "Verwandelt synthetische LTE/5G-GPS- und KPI-Daten in Schwachstellen-Erkennung, interaktive Karten und Engineering-Berichte.",
      problem:
        "Versorgungsprobleme sind schwer einzugrenzen, wenn Standort-, RSRP-, SINR- und weitere KPI-Daten getrennt betrachtet werden.",
      method:
        "Verarbeitet synthetische LTE/5G-Drive-Test-Daten in Python und bewertet geografische Zusammenhänge mit der Funkperformance.",
      output:
        "Erkennung schwacher Versorgung, interaktive Folium-Karten und strukturierte Berichte für die technische Auswertung.",
    },
  },
  {
    code: "SA-02",
    href: "https://github.com/omidrahimirad/open5gs-ueransim-5g-sa-lab",
    tags: ["5G SA", "Open5GS", "UERANSIM", "Docker"],
    en: {
      title: "Open5GS + UERANSIM 5G SA lab",
      summary:
        "A reproducible standalone 5G lab with Docker Compose, subscriber configuration, log collection, and attach/PDU analysis.",
      problem:
        "5G SA attach and session behavior needs a controlled environment that can be reproduced for analysis.",
      method:
        "Uses Docker Compose, Open5GS, UERANSIM, subscriber configuration, and structured log collection.",
      output:
        "A repeatable lab workflow for attach and PDU-session inspection with collected technical evidence.",
    },
    de: {
      title: "Open5GS + UERANSIM 5G-SA-Labor",
      summary:
        "Ein reproduzierbares 5G-SA-Labor mit Docker Compose, Teilnehmerkonfiguration, Log-Erfassung und Attach/PDU-Analyse.",
      problem:
        "5G-SA-Attach- und Session-Verhalten benötigt eine kontrollierte, reproduzierbare Umgebung für die Analyse.",
      method:
        "Nutzt Docker Compose, Open5GS, UERANSIM, Teilnehmerkonfiguration und strukturierte Log-Erfassung.",
      output:
        "Ein wiederholbarer Laborablauf zur Untersuchung von Attach- und PDU-Sessions mit gesammelter technischer Evidenz.",
    },
  },
  {
    code: "RCA-03",
    href: "https://github.com/omidrahimirad/ran-alarm-correlation-incident-timeline",
    tags: ["RAN", "KPI", "RCA", "pandas"],
    en: {
      title: "RAN incident timeline",
      summary:
        "Correlates alarms, KPI drops, and change events into one explainable incident timeline for faster root-cause analysis.",
      problem:
        "Alarms, KPI degradation, and change events arrive as separate evidence streams during network incidents.",
      method:
        "Correlates the event sources in pandas and orders them into a shared incident chronology.",
      output:
        "An explainable timeline that supports structured and faster root-cause analysis.",
    },
    de: {
      title: "RAN Incident Timeline",
      summary:
        "Korreliert Alarme, KPI-Einbrüche und Change Events zu einer erklärbaren Incident-Timeline für schnellere Ursachenanalyse.",
      problem:
        "Alarme, KPI-Verschlechterungen und Change Events liegen bei Netzstörungen als getrennte Evidenzströme vor.",
      method:
        "Korreliert die Ereignisquellen mit pandas und ordnet sie in einer gemeinsamen Incident-Chronologie.",
      output:
        "Eine nachvollziehbare Timeline für eine strukturierte und schnellere Ursachenanalyse.",
    },
  },
  {
    code: "VAL-04",
    href: "https://github.com/omidrahimirad/config-change-validation-tool",
    tags: ["Validation", "CLI", "Automation", "Python"],
    en: {
      title: "Configuration change validator",
      summary:
        "A rule-driven CLI that checks network-style configuration changes and produces transparent validation evidence.",
      problem:
        "Network-style configuration changes need consistent checks before controlled implementation.",
      method:
        "Applies explicit validation rules through a transparent command-line workflow.",
      output:
        "Traceable validation evidence for each checked configuration change.",
    },
    de: {
      title: "Konfigurations-Change-Validator",
      summary:
        "Eine regelbasierte CLI zur Prüfung netzwerkartiger Konfigurationsänderungen mit nachvollziehbaren Validierungsnachweisen.",
      problem:
        "Netzwerkartige Konfigurationsänderungen benötigen konsistente Prüfungen vor der kontrollierten Umsetzung.",
      method:
        "Wendet explizite Validierungsregeln in einem transparenten Kommandozeilen-Workflow an.",
      output:
        "Nachvollziehbare Validierungsevidenz für jede geprüfte Konfigurationsänderung.",
    },
  },
  {
    code: "LOG-05",
    href: "https://github.com/omidrahimirad/telecom-protocol-log-analyzer",
    tags: ["RRC / NAS", "NGAP", "Wireshark", "Testing"],
    en: {
      title: "Telecom protocol log analyzer",
      summary:
        "Procedure-aware troubleshooting for decoded 4G/5G control-plane traces across RRC, NAS, and NGAP events.",
      problem:
        "Decoded control-plane traces are difficult to review consistently across complete procedures and protocol layers.",
      method:
        "Examines ordered RRC, NAS, and NGAP events with procedure-aware troubleshooting logic.",
      output:
        "Structured evidence for investigating 4G/5G control-plane behavior.",
    },
    de: {
      title: "Telecom Protocol Log Analyzer",
      summary:
        "Ablaufbezogene Fehlersuche in dekodierten 4G/5G-Control-Plane-Traces über RRC-, NAS- und NGAP-Events.",
      problem:
        "Dekodierte Control-Plane-Traces sind über vollständige Abläufe und Protokollschichten hinweg schwer konsistent auszuwerten.",
      method:
        "Untersucht geordnete RRC-, NAS- und NGAP-Ereignisse mit ablaufbezogener Troubleshooting-Logik.",
      output:
        "Strukturierte Evidenz zur Untersuchung des 4G/5G-Control-Plane-Verhaltens.",
    },
  },
];

export const experience = {
  en: [
    {
      date: "07/2016—03/2023",
      role: "Mobile RAN Engineer",
      scope: "Network Operations and Optimization",
      organization:
        "FPR Co. / Delta Ertebatat Iranian · Huawei RAN projects · Tehran, Iran",
      bullets: [
        "Managed operation, configuration, optimization, and troubleshooting for a nationwide Huawei RAN with more than 13,000 network elements across 2G, 3G, 4G, and early 5G.",
        "Performed more than 50 live software upgrades and validated over 400 configuration changes with technical risk assessment and service-continuity safeguards.",
        "Conducted KPI- and protocol-based root-cause analysis across RRC, NAS, MAC, and PHY using RSRP, SINR, BLER, throughput, latency, and handover performance.",
        "Acted as technical interface between customer teams, engineering units, and Huawei R&D during incidents, escalations, and feature deployments.",
      ],
    },
    {
      date: "05/2015—07/2016",
      role: "RAN Modernization and Integration Engineer",
      scope: "ZTE Parsian modernization project",
      organization:
        "Iran Ofogh Industrial Development Co. · Assigned to ZTE Parsian · Tehran, Iran",
      bullets: [
        "Integrated more than 900 BTS sites and additional network nodes during a large-scale modernization rollout while maintaining compatibility and stable operation.",
        "Coordinated site integration, radio configuration, and parameter implementation with field-service and planning teams during expansion and LTE migration.",
        "Validated post-change performance through alarms and KPIs, then analyzed and resolved integration and configuration issues in live networks.",
      ],
    },
    {
      date: "03/2013—03/2015",
      role: "RAN Operations Engineer",
      scope: "Huawei Technologies service project",
      organization: "SGS Iran · Huawei RAN projects · Tehran, Iran",
      bullets: [
        "Monitored network status, availability, alarms, and traffic trends continuously in a shift-based live RAN environment.",
        "Analyzed accessibility, retainability, mobility, and capacity KPIs and performed structured first-level troubleshooting.",
        "Documented and escalated incidents with coordinated handover to specialist teams under defined procedures and SLAs.",
        "Prepared and quality-assured daily and weekly KPI reports while supporting consistent operational reporting.",
      ],
    },
  ],
  de: [
    {
      date: "07/2016—03/2023",
      role: "Mobilfunk-RAN-Ingenieur",
      scope: "Netzbetrieb und -optimierung",
      organization:
        "FPR Co. / Delta Ertebatat Iranian · Huawei RAN-Projekte · Teheran, Iran",
      bullets: [
        "Verantwortung für Betrieb, Konfiguration, Optimierung und Fehlerbehebung eines landesweiten Huawei RAN mit über 13.000 Netzelementen für 2G, 3G, 4G und erste 5G-Dienste.",
        "Durchführung von mehr als 50 Live-Software-Upgrades und Validierung von über 400 Konfigurationsänderungen inklusive Risikobewertung und Sicherung der Servicekontinuität.",
        "KPI- und protokollbasierte Ursachenanalyse auf RRC-, NAS-, MAC- und PHY-Ebene anhand von RSRP, SINR, BLER, Durchsatz, Latenz und Handover-Performance.",
        "Technische Schnittstelle zwischen Kundenteams, Engineering-Einheiten und Huawei R&D bei Störungen, Eskalationen und Feature-Einführungen.",
      ],
    },
    {
      date: "05/2015—07/2016",
      role: "RAN Modernization and Integration Engineer",
      scope: "ZTE Parsian Modernisierungsprojekt",
      organization:
        "Iran Ofogh Industrial Development Co. · Eingesetzt bei ZTE Parsian · Teheran, Iran",
      bullets: [
        "Integration von über 900 BTS und weiteren Netzknoten in einem groß angelegten Modernisierungs-Rollout bei stabilem Netzbetrieb.",
        "Koordination von Standortintegration, Funkkonfiguration und Parametrierung mit Field-Service- und Planungsteams bei Netzerweiterungen und LTE-Migration.",
        "Validierung der Netzperformance anhand von Alarmen und KPIs sowie Analyse und Behebung von Integrations- und Konfigurationsfehlern in Live-Netzen.",
      ],
    },
    {
      date: "03/2013—03/2015",
      role: "RAN Operations Engineer",
      scope: "Huawei Technologies Serviceprojekt",
      organization: "SGS Iran · Huawei RAN-Projekte · Teheran, Iran",
      bullets: [
        "Kontinuierliche Überwachung von Netzstatus, Verfügbarkeit, Alarmen und Verkehrsentwicklung im Schichtbetrieb eines produktiven RAN.",
        "Analyse von Accessibility-, Retainability-, Mobility- und Kapazitäts-KPIs sowie strukturierte Erstdiagnose und First-Level-Troubleshooting.",
        "Dokumentation und Eskalation von Incidents mit koordinierter Übergabe an Spezialistenteams gemäß Betriebsprozessen und SLAs.",
        "Erstellung und Qualitätssicherung täglicher und wöchentlicher KPI-Berichte sowie Unterstützung einer konsistenten Betriebsberichterstattung.",
      ],
    },
  ],
};

export const content = {
  en: {
    documentTitle: "Omid Rahimi — Wireless / RAN / Systems Engineer",
    skip: "Skip to content",
    brand: "Omid Rahimi",
    brandDescriptor: "Field engineering dossier",
    homeLabel: "Omid Rahimi — home",
    navLabel: "Primary navigation",
    nav: [
      ["work", "Projects"],
      ["experience", "Experience"],
      ["capabilities", "Capabilities"],
      ["contact", "Contact"],
    ],
    languageLabel: "Select language",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
    headerCv: "CV",
    availability: "Based in Deggendorf, Germany · Available for engineering roles",
    role: "Wireless / RAN / Systems Engineer",
    heroTitle: "Nine years across live mobile networks.",
    heroIntro:
      "Telecommunications engineer experienced in operating, integrating, modernizing, and validating large-scale 2G, 3G, 4G, and early 5G infrastructure.",
    heroOpportunity:
      "Seeking professional roles in Germany and across Europe across wireless/RF, RAN, communication systems, infrastructure, and technical automation.",
    downloadCv: "Download English CV",
    contactCta: "Discuss an engineering role",
    profileLabel: "Engineering profile",
    profileRows: [
      ["Base", "Deggendorf, Germany"],
      ["Education", "M.Sc. studies, Electrical Engineering & IT · THD"],
      ["Languages", "Persian · English · German B2 / C1 course"],
      ["Focus", "RAN operations · Integration · Validation · Automation"],
    ],
    proofLabel: "Verified operating scale",
    proof: [
      ["~9 years", "Telecommunications experience"],
      ["13,000+", "RAN network elements"],
      ["50+", "Live software upgrades"],
      ["400+", "Configuration changes validated"],
      ["900+", "BTS sites and nodes integrated"],
    ],
    workLabel: "Selected engineering work",
    workTitle: "Projects built around measurable technical evidence.",
    workIntro:
      "Five practical systems for RF analysis, 5G labs, incident correlation, change validation, and protocol troubleshooting.",
    fieldLabels: ["Problem", "Method", "Output"],
    technologiesLabel: "Technologies",
    repoLabel: "Open repository",
    experienceLabel: "Engineering experience",
    experienceTitle: "Production networks, controlled change, operational continuity.",
    experienceIntro:
      "A progression from shift-based RAN monitoring to large-scale modernization and nationwide network operations.",
    developmentLabel: "Current professional development",
    developmentTitle: "Career Coaching — High Profiling®",
    developmentMeta: "Since 04/2026 · INQUA-Institute · Berlin, Germany",
    developmentText:
      "Professional career development and positioning for the German job market.",
    capabilitiesLabel: "Engineering capability index",
    capabilitiesTitle: "Radio, systems, validation, and software in one operating context.",
    capabilitiesIntro:
      "Technical depth organized for fast review rather than reduced to ratings or percentages.",
    capabilityGroups: [
      [
        "Wireless systems",
        [
          "2G, 3G, LTE, and 5G NR architecture",
          "RRC, NAS, MAC, and PHY analysis",
          "RAN integration and OSS/NMS monitoring",
          "RSRP, SINR, BLER, throughput, latency, and mobility KPIs",
        ],
      ],
      [
        "Integration & validation",
        [
          "System integration and configuration management",
          "Software upgrades, modernization, and migration planning",
          "Post-change validation and technical risk assessment",
          "Incident, escalation, root-cause, and technical reporting",
        ],
      ],
      [
        "Software & platforms",
        [
          "Python, pandas, NumPy, and scikit-learn",
          "Linux, Git, Docker, and Kubernetes",
          "SQL, Power BI, and Jupyter",
          "Open5GS and UERANSIM",
        ],
      ],
    ],
    educationTitle: "Education & recognition",
    educationItems: [
      [
        "M.Sc. Electrical Engineering & Information Technology (in progress)",
        "Deggendorf Institute of Technology · 2023—2026",
        "RF and microwave material characterization through experimental measurement and AI-based prediction.",
      ],
      [
        "B.Sc. Electrical Engineering (Electronics)",
        "Ferdowsi University of Mashhad · 2008—2012",
        "Bachelor’s thesis: Analysis of CDMA codes — Maximal, Gold, and Kasami sequences.",
      ],
      [
        "Selected recognition",
        "Huawei · 2020—2022",
        "Technical Star, Bright Star, and Outstanding Engineer / Network Safety Team awards.",
      ],
    ],
    contactLabel: "Contact",
    contactTitle: "Engineering roles with real systems responsibility.",
    contactIntro:
      "For opportunities in wireless/RF, RAN, system integration, validation, infrastructure, or technical automation, contact me directly or use the form.",
    location: "Deggendorf, Germany",
    githubLabel: "GitHub profile",
    linkedinLabel: "LinkedIn profile",
    formTitle: "Send a message",
    requiredNote: "All fields are required.",
    fields: {
      name: ["Name", "Your name"],
      email: ["Email", "you@company.com"],
      subject: ["Subject", "Role or project"],
      message: ["Message", "Tell me about the engineering role or project."],
    },
    required: "Required",
    send: "Send message",
    footer:
      "Wireless / RF · RAN · Communication systems · Integration · Automation",
    legal: "Impressum",
    footerNavLabel: "Footer navigation",
  },
  de: {
    documentTitle: "Omid Rahimi — Wireless / RAN / Systems Engineer",
    skip: "Zum Inhalt springen",
    brand: "Omid Rahimi",
    brandDescriptor: "Field Engineering Dossier",
    homeLabel: "Omid Rahimi — Startseite",
    navLabel: "Hauptnavigation",
    nav: [
      ["work", "Projekte"],
      ["experience", "Erfahrung"],
      ["capabilities", "Kompetenzen"],
      ["contact", "Kontakt"],
    ],
    languageLabel: "Sprache auswählen",
    themeToLight: "Zum hellen Modus wechseln",
    themeToDark: "Zum dunklen Modus wechseln",
    menuOpen: "Navigation öffnen",
    menuClose: "Navigation schließen",
    headerCv: "CV",
    availability:
      "Standort Deggendorf · Verfügbar für professionelle Engineering-Positionen",
    role: "Wireless / RAN / Systems Engineer",
    heroTitle: "Neun Jahre in produktiven Mobilfunknetzen.",
    heroIntro:
      "Telekommunikationsingenieur mit Erfahrung in Betrieb, Integration, Modernisierung und Validierung großflächiger 2G-, 3G-, 4G- und erster 5G-Infrastrukturen.",
    heroOpportunity:
      "Offen für Positionen in Deutschland und Europa in Wireless/RF, RAN, Kommunikationssystemen, Infrastruktur und technischer Automatisierung.",
    downloadCv: "Deutschen Lebenslauf herunterladen",
    contactCta: "Engineering-Position besprechen",
    profileLabel: "Engineering-Profil",
    profileRows: [
      ["Standort", "Deggendorf, Deutschland"],
      ["Ausbildung", "M.Sc.-Studium Elektrotechnik & IT · THD"],
      ["Sprachen", "Persisch · Englisch · Deutsch B2 / C1-Kurs"],
      ["Fokus", "RAN-Betrieb · Integration · Validierung · Automatisierung"],
    ],
    proofLabel: "Verifizierter operativer Umfang",
    proof: [
      ["~9 Jahre", "Telekommunikationserfahrung"],
      ["13.000+", "RAN-Netzelemente"],
      ["50+", "Live-Software-Upgrades"],
      ["400+", "Validierte Konfigurationsänderungen"],
      ["900+", "Integrierte BTS und Netzknoten"],
    ],
    workLabel: "Ausgewählte Engineering-Projekte",
    workTitle: "Projekte auf Basis nachvollziehbarer technischer Evidenz.",
    workIntro:
      "Fünf praktische Systeme für RF-Analyse, 5G-Labore, Incident-Korrelation, Change-Validierung und Protokoll-Troubleshooting.",
    fieldLabels: ["Problem", "Methode", "Ergebnis"],
    technologiesLabel: "Technologien",
    repoLabel: "Repository öffnen",
    experienceLabel: "Engineering-Erfahrung",
    experienceTitle:
      "Produktivnetze, kontrollierte Änderungen und Betriebskontinuität.",
    experienceIntro:
      "Von schichtbasierter RAN-Überwachung über großflächige Modernisierung bis zum landesweiten Netzbetrieb.",
    developmentLabel: "Aktuelle berufliche Weiterentwicklung",
    developmentTitle: "Karriere-Coaching High Profiling®",
    developmentMeta: "Seit 04/2026 · INQUA-Institut · Berlin, Deutschland",
    developmentText:
      "Berufliche Entwicklung und Positionierung auf dem deutschen Arbeitsmarkt.",
    capabilitiesLabel: "Engineering-Kompetenzindex",
    capabilitiesTitle:
      "Funk, Systeme, Validierung und Software in einem Betriebskontext.",
    capabilitiesIntro:
      "Technische Tiefe für eine schnelle Prüfung strukturiert — ohne Ratings oder Prozentangaben.",
    capabilityGroups: [
      [
        "Funksysteme",
        [
          "2G, 3G, LTE und 5G-NR-Architektur",
          "RRC-, NAS-, MAC- und PHY-Analyse",
          "RAN-Integration und OSS/NMS-Monitoring",
          "RSRP, SINR, BLER, Durchsatz, Latenz und Mobility-KPIs",
        ],
      ],
      [
        "Integration & Validierung",
        [
          "Systemintegration und Konfigurationsmanagement",
          "Software-Upgrades, Modernisierung und Migrationsplanung",
          "Post-Change-Validierung und technische Risikobewertung",
          "Incident-, Eskalations-, Ursachenanalyse und Reporting",
        ],
      ],
      [
        "Software & Plattformen",
        [
          "Python, pandas, NumPy und scikit-learn",
          "Linux, Git, Docker und Kubernetes",
          "SQL, Power BI und Jupyter",
          "Open5GS und UERANSIM",
        ],
      ],
    ],
    educationTitle: "Ausbildung & Auszeichnungen",
    educationItems: [
      [
        "M.Sc. Elektrotechnik und Informationstechnologie (laufend)",
        "Technische Hochschule Deggendorf · 2023—2026",
        "HF-/Mikrowellen-Materialcharakterisierung durch experimentelle Messung und KI-basierte Vorhersage.",
      ],
      [
        "B.Sc. Elektrotechnik (Elektronik)",
        "Ferdowsi-Universität Maschhad · 2008—2012",
        "Bachelorarbeit: Analyse von CDMA-Codes — Maximal-, Gold- und Kasami-Sequenzen.",
      ],
      [
        "Ausgewählte Auszeichnungen",
        "Huawei · 2020—2022",
        "Technical Star, Bright Star sowie Outstanding Engineer / Network Safety Team Awards.",
      ],
    ],
    contactLabel: "Kontakt",
    contactTitle: "Engineering-Positionen mit echter Systemverantwortung.",
    contactIntro:
      "Für Positionen in Wireless/RF, RAN, Systemintegration, Validierung, Infrastruktur oder technischer Automatisierung kontaktieren Sie mich direkt oder über das Formular.",
    location: "Deggendorf, Deutschland",
    githubLabel: "GitHub-Profil",
    linkedinLabel: "LinkedIn-Profil",
    formTitle: "Nachricht senden",
    requiredNote: "Alle Felder sind erforderlich.",
    fields: {
      name: ["Name", "Ihr Name"],
      email: ["E-Mail", "sie@unternehmen.de"],
      subject: ["Betreff", "Position oder Projekt"],
      message: ["Nachricht", "Beschreiben Sie die Engineering-Position oder das Projekt."],
    },
    required: "Erforderlich",
    send: "Nachricht senden",
    footer:
      "Wireless / RF · RAN · Kommunikationssysteme · Integration · Automatisierung",
    legal: "Impressum",
    footerNavLabel: "Navigation im Footer",
  },
};
