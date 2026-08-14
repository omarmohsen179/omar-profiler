export type SkillGroup = {
  title: string
  accent: string // tailwind text color class for the group icon dot
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    accent: 'text-teal-300',
    skills: [
      'Java',
      'Spring Boot',
      'Spring Cloud',
      'Spring Security',
      'Spring Data',
      'Spring MVC',
      'REST APIs',
      'Microservices',
      'Hibernate',
      'C# / .NET Core',
      'ASP.NET MVC',
      'Entity Framework',
      'Python',
      'FastAPI',
      'Flask',
    ],
  },
  {
    title: 'Messaging & Events',
    accent: 'text-indigo-300',
    skills: [
      'Apache Kafka',
      'RabbitMQ',
      'Event-Driven Architecture',
      'Async Transaction Processing',
      'SOAP / API Integration',
    ],
  },
  {
    title: 'Workflow & Reporting',
    accent: 'text-violet-300',
    skills: [
      'Camunda BPM',
      'BPMN 2.0',
      'Workflow Orchestration',
      'JasperReports',
      'Jaspersoft Studio',
      'PDF / Document Generation',
    ],
  },
  {
    title: 'Identity & Security',
    accent: 'text-amber-300',
    skills: ['Keycloak', 'OAuth2 / OIDC', 'SSO / IAM', 'Spring Security'],
  },
  {
    title: 'Frontend',
    accent: 'text-sky-300',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Angular', 'Tailwind CSS'],
  },
  {
    title: 'Mobile',
    accent: 'text-fuchsia-300',
    skills: [
      'React Native',
      'Expo',
      'Expo Router',
      'EAS Build',
      'iOS / App Store Connect',
      'Push Notifications',
      'Android (OpenCV)',
    ],
  },
  {
    title: 'DevOps & Cloud',
    accent: 'text-rose-300',
    skills: ['Docker', 'Jenkins', 'CI/CD', 'AWS', 'Git', 'GitHub', 'GitLab', 'Bitbucket'],
  },
  {
    title: 'Databases',
    accent: 'text-emerald-300',
    skills: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Testing & Practices',
    accent: 'text-lime-300',
    skills: [
      'JUnit',
      'Mockito',
      'Spring Boot Test',
      'Unit & Integration Testing',
      'TDD',
      'Agile / Scrum',
      'Code Review',
    ],
  },
]
