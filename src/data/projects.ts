export type Project = {
  title: string
  description: string
  metric: string
  tags: string[]
  link?: string
  linkLabel?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Nadwa: Conversation Games',
    description:
      'Social conversation game for 2–12 players who join by code or link with no account. Two game modes, 17+ curated question decks, and answers as text, voice notes, photos or polls — fully bilingual in English and Arabic.',
    metric: 'Live on the App Store',
    tags: ['React Native', 'Expo', 'iOS', 'Realtime', 'i18n'],
    link: 'https://apps.apple.com/eg/app/nadwa-conversation-games/id6785268475',
    linkLabel: 'App Store',
    featured: true,
  },
  {
    title: 'Return Me Back',
    description:
      'Goal-focus companion that sends gentle nudges through the day to pull attention back to what matters. Configurable intervals, focus timers that keep running in the background, quiet hours, and weekly-to-quarterly history.',
    metric: 'Live on the App Store',
    tags: ['React Native', 'Expo', 'iOS', 'Notifications', 'Background Tasks'],
    link: 'https://apps.apple.com/eg/app/return-me-back/id6779903585',
    linkLabel: 'App Store',
    featured: true,
  },
  {
    title: 'Almedad Platform',
    description:
      'E-commerce web app for software services with a full admin dashboard for catalogue, orders, and content management.',
    metric: 'Sales +25%',
    tags: ['.NET Core', 'Angular', 'E-commerce'],
  },
  {
    title: 'Khaled Elewa — Legal Consultation',
    description:
      'Law-office portal where clients track case status and session data while lawyers manage client records through an admin dashboard.',
    metric: 'Workflow +30%',
    tags: ['Spring Boot', 'React.js', 'Legal-tech'],
    link: 'https://khalidelewa.com',
    linkLabel: 'live site',
  },
  {
    title: 'Riyadhpack Factory Website',
    description:
      'Product showcase for a Saudi packaging factory with specifications, interactive 3D models, an admin panel, and a contact form.',
    metric: 'Inquiries +20%',
    tags: ['Web', '3D Models', 'Admin Panel'],
    link: 'https://riyadhpack.com/#/home',
    linkLabel: 'live site',
  },
  {
    title: 'Internal Accounting & ERP Platforms',
    description:
      'Accounting, invoicing, and stock modules on Spring Boot with React reporting front-ends, delivered for multiple SME clients.',
    metric: 'Multiple SME clients',
    tags: ['Spring Boot', 'React.js', 'ERP', 'Reporting'],
  },
  {
    title: 'Ostora Production Management',
    description:
      'Cloth-factory system for managing stores, production lines, and designs, with rich reporting and charting.',
    metric: 'Delays −15%',
    tags: ['Spring Boot', 'Reporting', 'ERP'],
  },
  {
    title: 'International Federation Portal',
    description:
      'Multi-language content platform with articles, posts, and an admin dashboard for editorial teams.',
    metric: 'Engagement +40%',
    tags: ['Multi-language', 'CMS', 'Admin Panel'],
  },
  {
    title: 'COVID-19 CT-Scan Detection',
    description:
      'Deep-learning model that detects COVID-19 from CT-scan imagery, accelerating radiology triage.',
    metric: '98% accuracy',
    tags: ['AI / ML', 'Computer Vision', 'Python'],
  },
  {
    title: 'Event Organizing App',
    description:
      'Attendance-management app with an admin panel, multi-language support, and barcode generation for attendees.',
    metric: 'Efficiency +35%',
    tags: ['Mobile', 'Barcode', 'Multi-language'],
  },
]
