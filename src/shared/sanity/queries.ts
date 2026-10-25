import type { SanityImageSource } from '@sanity/image-url'

export type SanityProject = {
  _id: string
  title: string
  subtitle: string
  date: string
  image: (SanityImageSource & { alt?: string | null }) | null
  url: string | null
  feedbackUrl: string | null
  techs: string[] | null
}

export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  subtitle,
  date,
  image,
  url,
  feedbackUrl,
  techs
}`
