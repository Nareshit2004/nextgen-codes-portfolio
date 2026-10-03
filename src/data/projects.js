export const projects = [
  {
    id: 'neuroai',
    title: 'NeuroAI – AI‑Based Brain Tumor Detection & Healthcare Recommendation System',
    category: ['AI', 'Healthcare', 'Web Application'],
    description: 'An AI‑powered platform that analyses MRI brain scans to detect and classify tumors, then suggests healthcare providers and doctors.',
    problem: 'Provide an accessible digital tool for early brain‑tumor detection and related medical recommendations.',
    technologies: ['Python', 'Flask', 'PyTorch', 'OpenCV', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'MRI image upload & preprocessing',
      'Tumor detection & classification',
      'Segmentation visualization',
      'Healthcare, hospital and doctor recommendation engine',
      'Responsive patient‑focused UI'
    ],
    image: '/images/neuroai.jpg',
    link: null
  },
  {
    id: 'smart-equipment',
    title: 'Smart AI Equipment Management System',
    category: ['AI', 'Industrial', 'IoT', 'Predictive Analytics'],
    description: 'An AI-powered industrial equipment monitoring platform that processes sensor and historical data to detect abnormal equipment behavior, analyze machine conditions, and provide intelligent maintenance insights.',
    problem: 'Detect abnormal patterns in continuous equipment sensor streams and provide predictive maintenance insights.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Plotly', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Sensor data ingestion',
      'Missing‑value handling & noise filtering',
      'Outlier detection & normalization',
      'Time‑series windowing',
      'AI‑driven condition prediction',
      'Interactive dashboards'
    ],
    image: '/images/smart-equipment.jpg',
    link: null
  },
  {
    id: 'ev-charging',
    title: 'EV Charging Station Management & Route Optimisation System',
    category: ['Web Application', 'EV', 'API Integration'],
    description: 'Web platform for discovering charging stations, planning routes and managing station bookings.',
    problem: 'Simplify EV charging‑station discovery and improve travel planning.',
    technologies: ['Python', 'Flask', 'FastAPI', 'MySQL', 'SQLite', 'Google Maps API', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Charging‑station search & map view',
      'Route optimisation with charging stops',
      'Station availability & slot booking',
      'User authentication and monitoring dashboard'
    ],
    image: '/images/ev-charging.jpg',
    link: null
  },
  {
    id: 'churn-analytics',
    title: 'Customer Churn Analytics Dashboard',
    category: ['Data Analytics', 'Business Intelligence'],
    description: 'Analytics dashboard that visualises churn patterns and provides actionable business insights.',
    problem: 'Help businesses understand why customers leave and how to retain them.',
    technologies: ['Python', 'Pandas', 'Power BI', 'Excel', 'Plotly'],
    features: [
      'Data preprocessing',
      'KPI analysis',
      'Interactive visualisations',
      'Filtering & drill‑down reports'
    ],
    image: '/images/churn-analytics.jpg',
    link: null
  },
  {
    id: 'smart-rfid',
    title: 'Smart RFID‑Based Door Security System',
    category: ['IoT', 'Embedded Systems'],
    description: 'Embedded security solution that uses RFID cards for controlled access and logs entry events.',
    problem: 'Provide a low‑cost, reliable access‑control system for small facilities.',
    technologies: ['ESP32', 'RFID', 'Arduino', 'C'],
    features: [
      'RFID authentication',
      'Automated door actuation',
      'Access‑log storage'
    ],
    image: '/images/smart-rfid.jpg',
    link: null
  }
];

export default projects;
