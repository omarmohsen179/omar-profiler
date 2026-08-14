export type Experience = {
  company: string
  role: string
  location: string
  period: string
  highlights: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    company: 'Flightright',
    role: 'Full Stack Developer',
    location: 'Berlin, Germany · Remote',
    period: 'Mar 2025 — Jul 2026',
    highlights: [
      'Developed and maintained customer-facing legal-tech and claim-management platforms with Next.js and Spring Boot.',
      'Designed RESTful APIs and microservices in Spring Boot, improving reliability, maintainability, and integration.',
      'Automated claim processing with Camunda BPM workflows, reducing manual operational effort.',
      'Built responsive Next.js interfaces, improving performance, SEO, and user experience.',
      'Collaborated with product, design, and QA in an Agile environment.',
    ],
    stack: ['Next.js', 'Spring Boot', 'Camunda BPM', 'REST APIs'],
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
      'Achieved 95% test coverage with unit and integration testing, improving production stability.',
      'Secured banking integrations with Spring Security and OAuth2 / Keycloak.',
    ],
    stack: ['Spring Boot', 'Kafka', 'React.js', 'Keycloak', 'OAuth2'],
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
    location: 'Garbutt, Australia · Remote',
    period: 'Aug 2022 — Apr 2024',
    highlights: [
      'Supported the backend of an enterprise mass-transportation system with Spring Boot and Kafka, boosting real-time data processing efficiency by 20%.',
      'Built modular monolithic and microservice apps with Spring Boot, Java, and Hibernate.',
      'Ran extensive backend testing with JUnit, Mockito, and Spring Boot Test.',
    ],
    stack: ['Spring Boot', 'Kafka', 'Hibernate', 'JUnit'],
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
