export type Project = {
	id: number
	date: string
	title: string
	subtitle: string
	description: string
	url?: string
	imageUrl?: string
	imageAlt?: string
	technologies?: string[]
}

export type ExperienceItem = {
	info: string
	period: string
	company: string
	companyUrl?: string
	location?: string
}

export const PROJECTS: Project[] = [
	{
		id: 1,
		date: 'October 2023',
		title: 'E-Commerce Redesign',
		subtitle: 'Modernized storefront with Next.js',
		description:
			'A premium commerce experience focused on performance, conversion, and reusable UI systems.',
	},
	{
		id: 2,
		date: 'March 2024',
		title: 'Analytics Platform',
		subtitle: 'Interactive product intelligence',
		description:
			'Built dashboard surfaces, data flows, and interface patterns for executive decision-making.',
	},
	{
		id: 3,
		date: 'June 2024',
		title: 'SaaS Design System',
		subtitle: 'Scalable component architecture',
		description:
			'Created a tokenized UI foundation with accessible components and consistent delivery patterns.',
	},
	{
		id: 4,
		date: 'May-July 2017',
		title: 'Developing Bike App',
		subtitle: 'Frontend service',
		description:
			'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
	},
	{
		id: 5,
		date: 'May-July 2017',
		title: 'Developing Subscription App',
		subtitle: 'Frontend service',
		description:
			'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
	},
	{
		id: 6,
		date: 'May-July 2017',
		title: 'Developing Finance App',
		subtitle: 'Frontend service',
		description:
			'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
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
