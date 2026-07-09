export type Project = {
  date: string
  title: string
  subtitle: string
  imageAlt?: string
}

export type ExperienceItem = {
  info: string
  period: string
  company: string
}

export const PROJECTS: Project[] = [
  {
    date: 'October 2023',
    title: 'E-Commerce Redesign',
    subtitle: 'Modernized storefront with Next.js',
  },
  {
    date: 'March 2024',
    title: 'Analytics Platform',
    subtitle: 'Interactive product intelligence',
  },
  {
    date: 'June 2024',
    title: 'SaaS Design System',
    subtitle: 'Scalable component architecture',
  },
]

export const EXPERIENCE_WORK_LIST: ExperienceItem[] = [
  {
    info: 'Led frontend architecture, performance initiatives, and delivery standards for modern web platforms.',
    period: '2020 - Present',
    company: 'Senior Developer at TechCorp',
  },
  {
    info: 'Developed robust API integrations and interactive React dashboards for enterprise clients.',
    period: '2017 - 2020',
    company: 'Full-Stack Engineer at WebSolutions',
  },
  {
    info: 'Built production interfaces and internal tooling with a focus on reliability and maintainability.',
    period: '2015 - 2017',
    company: 'Frontend Developer',
  },
]

export const EXPERIENCE_EDUCATION_LIST: ExperienceItem[] = [
  {
    info: 'Specialized in distributed systems, software architecture, and scalable product foundations.',
    period: '2015 - 2017',
    company: 'MSc Computer Science',
  },
  {
    info: 'Graduated with honors while building a strong base in engineering fundamentals and product delivery.',
    period: '2011 - 2015',
    company: 'BSc Software Engineering',
  },
  {
    info: 'Continuous learning across frontend performance, accessibility, architecture, and developer experience.',
    period: 'Ongoing',
    company: 'Professional Development',
  },
]
