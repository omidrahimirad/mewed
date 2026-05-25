export const profile = {
  name: 'Omid Rahimi',
  role: 'Systems Integration, Test & RF Performance Engineer',
  headline: 'Systems Integration & Wireless Engineer',
  email: 'omid.rahimirad@gmail.com',
  phone: '+49 176 48994467',
  location: 'Deggendorf, Germany',
  cv: '/files/Omid_Rahimi_CV_EE.pdf',
  linkedin: 'https://www.linkedin.com/in/0midrahimi/',
  github: 'https://github.com/omidrahimirad',
  targetRoles: [
    'Systems Integration & Test Engineer',
    'Network Infrastructure Engineer',
    'RF Measurement & Validation'
  ]
}

export const experience = [
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

export const projects = [
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

export const skillGroups = [
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

export const education = [
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

export const certifications = [
  'Huawei Certified Network Professional (HCNP - LTE)',
  'Huawei Certified 5G Associate',
  'Python for Machine Learning (scikit-learn)',
  'Power BI | SQL',
  'Technical Star Award - Huawei (2022)',
  'Outstanding Engineer & Network Safety Team Award (2021)',
  'Individual Engineer Star & Bright Star Award - Huawei (2020)',
  'Ranked in top 1% of Iranian National University Entrance Exam (2007)'
]
