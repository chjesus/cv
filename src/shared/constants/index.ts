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
		date: 'May-July 2017',
		title: 'Developing Car App',
		subtitle: 'Frontend service',
		description:
			'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
	},
	{
		id: 2,
		date: 'May-July 2017',
		title: 'Developing Shoe App',
		subtitle: 'Frontend service',
		description:
			'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
	},
	{
		id: 3,
		date: 'May-July 2017',
		title: 'Developing Bike App',
		subtitle: 'Frontend service',
		description:
			'Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a.',
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
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		period: '2020 - 2021',
		company: 'Lorem, ipsum.',
	},
	{
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		period: '2020 - 2021',
		company: 'Lorem, ipsum.',
	},
	{
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		period: '2020 - 2021',
		company: 'Lorem, ipsum.',
	},
]

export const EXPERIENCE_EDUCATION_LIST: ExperienceItem[] = [
	{
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		period: '2020 - 2021',
		company: 'Lorem, ipsum.',
	},
	{
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		period: '2020 - 2021',
		company: 'Lorem, ipsum.',
	},
	{
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		period: '2020 - 2021',
		company: 'Lorem, ipsum.',
	},
]
