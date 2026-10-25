import { defineArrayMember, defineField, defineType } from 'sanity'

const TECH_OPTIONS = [
  { title: 'HTML', value: 'catppuccin:html' },
  { title: 'CSS', value: 'catppuccin:css3' },
  { title: 'JavaScript', value: 'catppuccin:javascript' },
  { title: 'TypeScript', value: 'catppuccin:typescript' },
  { title: 'React', value: 'catppuccin:javascript-react' },
  { title: 'Next.js', value: 'catppuccin:next' },
  { title: 'Astro', value: 'catppuccin:astro' },
  { title: 'Vite', value: 'catppuccin:vite' },
  { title: 'Biome', value: 'catppuccin:biome' },
  { title: 'Figma', value: 'catppuccin:figma' },
  { title: 'Redux', value: 'catppuccin:folder-redux' },
]

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Description',
      type: 'string',
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: { dateFormat: 'MMMM YYYY' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'url',
      title: 'Site URL',
      type: 'url',
    }),
    defineField({
      name: 'feedbackUrl',
      title: 'Feedback URL',
      type: 'url',
    }),
    defineField({
      name: 'techs',
      title: 'Technologies',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: { list: TECH_OPTIONS, layout: 'grid' },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      description: 'Card position in the section (1 = first).',
      type: 'number',
      validation: (rule) => rule.required().integer().min(1),
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'subtitle', media: 'image' },
  },
})
