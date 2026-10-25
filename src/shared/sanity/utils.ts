import {
  createImageUrlBuilder,
  type SanityImageSource,
} from '@sanity/image-url'
import { sanityClient } from 'sanity:client'

const imageBuilder = createImageUrlBuilder(sanityClient)

export const urlFor = (source: SanityImageSource) =>
  imageBuilder.image(source).auto('format')

const projectDateFormatter = new Intl.DateTimeFormat('es-ES', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

// Formats an ISO date ("2023-10-01") as "Octubre 2023".
export const formatProjectDate = (date: string) => {
  const label = projectDateFormatter.format(new Date(date)).replace(' de ', ' ')

  return label.charAt(0).toUpperCase() + label.slice(1)
}
