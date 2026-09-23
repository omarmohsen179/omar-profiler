export const profile = {
  name: 'Omar Mohsen',
  role: 'Senior Software Engineer',
  subRole: 'Backend & Full-Stack',
  location: 'Cairo, Egypt',
  availability: 'Open to relocation — EU & Asia · remote & freelance',
  tagline: 'I build scalable APIs, microservices, and event-driven systems.',
  summary:
    'Software engineer with 6 years’ experience building backend systems in Java (8, 17, 21) and Spring Boot, with a focus on microservices, event-driven architecture and enterprise system integration, developed test-first and run on Linux. I have shipped production software in regulated environments — digital banking at Bank Albilad, legal-tech claim processing at Flightright, cyber-security tooling at XSonardive — where correctness, auditability and secure integration matter more than speed alone. I work comfortably across the stack, pairing Spring Boot services with React and Next.js front-ends, and I ship mobile products end-to-end with React Native and Expo.',
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Fluent' },
  ],
  // bump ?v= whenever the PDF changes so browsers/cPanel don't serve a cached copy
  cvUrl: '/omar-mohsen-cv.pdf?v=2026-08-21b',
  cvLabel: 'Download CV',
  // filename the browser saves as — without this the name is derived from the URL
  cvFileName: 'Omar-Mohsen-CV.pdf',
  avatar: '/omar-mohsen.jpg',
  avatarWebp: '/omar-mohsen.webp',
} as const

export const stats = [
  { value: 6, suffix: '', label: 'Years of experience' },
  { value: 17, suffix: '+', label: 'Projects delivered' },
  { value: 2, suffix: '', label: 'Apps on the App Store' },
  { value: 95, suffix: '%', label: 'Peak test coverage' },
] as const
