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
    date: 'Octubre 2023',
    title: 'Rediseño de E-Commerce',
    subtitle: 'Tienda modernizada con Next.js',
  },
  {
    date: 'Marzo 2024',
    title: 'Plataforma de Analítica',
    subtitle: 'Inteligencia interactiva de producto',
  },
  {
    date: 'Junio 2024',
    title: 'Sistema de Diseño SaaS',
    subtitle: 'Arquitectura de componentes escalable',
  },
]

export const EXPERIENCE_WORK_LIST: ExperienceItem[] = [
  {
    info: 'Lideré arquitectura frontend, iniciativas de rendimiento y estándares de entrega para plataformas web modernas.',
    period: '2020 - Presente',
    company: 'Desarrollador Senior en TechCorp',
  },
  {
    info: 'Desarrollé integraciones robustas con APIs y dashboards interactivos en React para clientes empresariales.',
    period: '2017 - 2020',
    company: 'Ingeniero Full-Stack en WebSolutions',
  },
  {
    info: 'Construí interfaces en producción y herramientas internas con foco en confiabilidad y mantenibilidad.',
    period: '2015 - 2017',
    company: 'Desarrollador Frontend',
  },
]

export const EXPERIENCE_EDUCATION_LIST: ExperienceItem[] = [
  {
    info: 'Especialización en sistemas distribuidos, arquitectura de software y bases escalables para productos.',
    period: '2015 - 2017',
    company: 'Maestría en Ciencias de la Computación',
  },
  {
    info: 'Graduado con honores, construyendo una base sólida en fundamentos de ingeniería y entrega de producto.',
    period: '2011 - 2015',
    company: 'Ingeniería de Software',
  },
  {
    info: 'Aprendizaje continuo en rendimiento frontend, accesibilidad, arquitectura y experiencia de desarrollo.',
    period: 'En curso',
    company: 'Desarrollo Profesional',
  },
]
