export type Experience = {
  company: string
  role: string
  location: string
  period: string
  highlights: string[]
  stack: string[]
  current?: boolean
}

export const experiences: Experience[] = [
  {
    company: 'Bank Albilad',
    role: 'Full Stack Developer',
    location: 'Riyadh, Saudi Arabia · Remote',
    period: 'Jul 2026 — Present',
    current: true,
    highlights: [
      'Rejoined the digital banking team, building Spring Boot microservices and React.js modules that integrate core banking with enterprise services.',
    ],
    stack: ['Java 17', 'Spring Boot', 'Kafka', 'React.js', 'Keycloak', 'OAuth2'],
  },
  {
    company: 'Flightright',
    role: 'Full Stack Developer',
    location: 'Berlin, Germany · Remote',
    period: 'Mar 2025 — Jul 2026',
    highlights: [
      'Developed and maintained customer-facing legal-tech and claim-management platforms with Next.js and Spring Boot.',
      'Designed RESTful APIs and microservices in Java 17 and Spring Boot 3, improving reliability, maintainability, and integration.',
      'Automated claim processing with Camunda BPM workflows, reducing manual operational effort.',
      'Built responsive Next.js interfaces, improving performance, SEO, and user experience.',
      'Ran services on Linux in Docker containers across environments, handling deployment, log analysis, and shell-level debugging.',
      'Collaborated with product, design, and QA in an Agile environment.',
    ],
    stack: ['Java 17', 'Next.js', 'Spring Boot', 'Camunda BPM', 'REST APIs', 'Linux', 'Docker'],
  },
  {
    company: 'Bank Albilad',
    role: 'Full Stack Developer',
    location: 'Riyadh, Saudi Arabia · Remote',
    period: 'Jul 2024 — Mar 2025',
    highlights: [
      'Built microservices-based backend systems in Spring Boot integrating core banking apps with external enterprise services.',
      'Implemented Kafka-based messaging for asynchronous transaction processing, improving reliability by 20%.',
      'Customised full-stack banking modules across Spring Boot REST APIs and React.js dashboards.',
      'Tuned pooled HTTP clients for outbound enterprise integrations — max connections per route, keep-alive, and read/connect timeouts — keeping third-party core-banking calls stable under load.',
      'Worked test-first (TDD) with JUnit and Mockito, reaching 95% test coverage across unit and integration suites and improving production stability.',
      'Secured banking integrations with Spring Security and OAuth2 / Keycloak.',
    ],
    stack: ['Java 17', 'Spring Boot', 'Kafka', 'React.js', 'Keycloak', 'OAuth2', 'HTTP Connection Pooling'],
  },
  {
    company: 'XSonardive',
    role: 'Senior Backend Developer',
    location: 'Berlin, Germany · Remote',
    period: 'Sep 2023 — Dec 2023',
    highlights: [
      'Hardened a cyber-security backend platform with Spring Boot and Spring Security, mitigating vulnerabilities by 30%.',
      'Built interactive analytics dashboards in React.js wired to Spring Boot REST APIs, improving UX by 25%.',
    ],
    stack: ['Spring Boot', 'Spring Security', 'React.js'],
  },
  {
    company: 'Flairstech (Cubic)',
    role: 'Backend Developer',
    location: 'Townsville, Australia · Remote',
    period: 'Aug 2022 — Apr 2024',
    highlights: [
      'Supported the backend of an enterprise mass-transportation system with Spring Boot and Kafka, boosting real-time data processing efficiency by 20%.',
      'Built modular monolithic and microservice apps with Spring Boot, Java, and Hibernate.',
      'Practised TDD, writing JUnit, Mockito, and Spring Boot Test suites ahead of implementation.',
    ],
    stack: ['Spring Boot', 'Kafka', 'Hibernate', 'JUnit', 'TDD'],
  },
  {
    company: 'MedadSoft',
    role: 'Full Stack Developer',
    location: 'Cairo, Egypt',
    period: 'Mar 2021 — Aug 2022',
    highlights: [
      'Supported 10+ web applications and built full-stack software from scratch with Spring Boot and React.js, lifting client satisfaction by 40%.',
      'Developed e-commerce, accounting, and ERP solutions, streamlining operations by 35%.',
      'Implemented secure digital-banking API integrations with Spring Boot, OAuth2, and Keycloak.',
    ],
    stack: ['Spring Boot', 'React.js', 'OAuth2', 'Keycloak'],
  },
  {
    company: 'AlRand Company',
    role: 'Full Stack Developer',
    location: 'Cairo, Egypt',
    period: 'Sep 2020 — Jan 2021',
    highlights: [
      'Built a complete internal accounting system with a Spring Boot backend and custom React.js reporting tables, reducing processing errors by 50%.',
    ],
    stack: ['Spring Boot', 'React.js'],
  },
  {
    company: 'Nandbox Software Solutions',
    role: 'Software Developer',
    location: 'Cairo, Egypt',
    period: 'May 2020 — Sep 2020',
    highlights: [
      'Built a body & face camera Android app with OpenCV, reaching 90% image-processing accuracy.',
      'Developed high-concurrency Java / Spring Boot backend for a mobile chat app, cutting data-retrieval time by 40%.',
    ],
    stack: ['Java', 'Spring Boot', 'OpenCV', 'Android'],
  },
]
