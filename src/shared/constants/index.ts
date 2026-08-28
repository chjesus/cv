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
  certificateUrl?: string
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
    info: 'Formación orientada a construir una base sólida en fundamentos de ingeniería, arquitectura de software y buenas prácticas, complementada con aprendizaje autodidacta en desarrollo frontend y tecnologías modernas.',
    period: '2012 - 2025 | Universidad Nacional Experimental del Táchira',
    company: 'Ingeniería en Informática',
  },
  {
    info: 'Fundamentos de JavaScript.',
    period: '16 de noviembre 2022 | Platzi',
    company: 'JavaScript',
    certificateUrl:
      'https://platzi.com/p/chjesus/curso/3271-course/diploma/detalle/',
  },
  {
    info: 'Fundamentos en el desarrollo frontend para estructurar, estilizar y perfeccionar una interfaz de usuario efectiva.',
    period: '15 de noviembre 2022 | Platzi',
    company: 'Frontend Developer',
    certificateUrl:
      'https://platzi.com/p/chjesus/curso/2477-course/diploma/detalle/',
  },
  {
    info: 'Fundamentos de gestión de paquetes y dependencias para optimizar flujos de desarrollo con NPM.',
    period: '12 de septiembre | Platzi',
    company: 'Gestión de Dependencias y Paquetes con NPM',
    certificateUrl:
      'https://platzi.com/p/chjesus/curso/1763-course/diploma/detalle/',
  },
  {
    info: 'Fundamentos de pruebas unitarias en React para validar componentes, asegurar comportamientos y mejorar la calidad del código.',
    period: '5 de marzo 2022 | Platzi',
    company: 'Unit Testing con Jest en React',
    certificateUrl:
      'https://platzi.com/p/chjesus/curso/1788-course/diploma/detalle/',
  },
  {
    info: 'Fundamentos de Vue.js para construir interfaces reactivas, organizar componentes y gestionar la interacción del usuario.',
    period: '7 de enero 2020 | Platzi',
    company: 'Fundamentos de Vue.js',
    certificateUrl:
      'https://platzi.com/p/chjesus/curso/1752-course/diploma/detalle/',
  },
  {
    info: 'Gestión de navegación, estado global y flujos de interfaz en aplicaciones React usando React Router y Redux.',
    period: '31 de diciembre 2019 | Platzi',
    company: 'React Router 5 y Redux',
    certificateUrl:
      'https://platzi.com/p/chjesus/curso/1652-course/diploma/detalle/',
  },
  {
    info: 'Fundamentos de React JS para construir interfaces basadas en componentes, gestionar estado y crear experiencias interactivas.',
    period: '1 de diciembre 2019 | Platzi',
    company: 'React JS',
    certificateUrl:
      'https://platzi.com/p/chjesus/curso/1651-course/diploma/detalle/',
  },
  {
    info: 'Profundización en JavaScript moderno para escribir código más sólido, modular y mantenible en aplicaciones web.',
    period: '21 de octubre 2019 | Platzi',
    company: 'Profesional de JavaScript',
    certificateUrl:
      'https://platzi.com/p/chjesus/curso/1642-course/diploma/detalle/',
  },
  {
    info: 'Bases esenciales de JavaScript para comprender la lógica del lenguaje, manipular datos y construir interacciones web.',
    period: '23 de mayo 2019',
    company: 'Fundamentos de JavaScript',
    certificateUrl:
      'https://platzi.com/p/chjesus/curso/1339-course/diploma/detalle/',
  },
  {
    info: 'Fundamentos de CSS Grid Layout para crear estructuras web flexibles, responsivas y bien organizadas.',
    period: '10 de mayo 2019',
    company: 'CSS Grid Layout',
    certificateUrl:
      'https://platzi.com/p/chjesus/curso/1229-course/diploma/detalle/',
  },
]
