import type { Metadata } from 'next'
import type { Page, Post, Gallery } from '@/payload-types'
import { mergeOpenGraph } from './mergeOpenGraph'
import { generateMetadata } from '@/app/(frontend)/layout'

export const generateMeta = async (args: {
  doc: Page | Post | Gallery | null
  collectionSlug: string
}): Promise<Metadata> => {
  const { doc, collectionSlug } = args || {}

  const defaultMetaData = await generateMetadata()

  const ogImage =
    doc?.meta?.image &&
    typeof doc.meta.image === 'object' &&
    doc.meta.image !== null &&
    'url' in doc.meta.image &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}${doc.meta.image.url}`

  const title = doc?.meta?.title
    ? doc?.meta?.title
    : defaultMetaData.title
      ? defaultMetaData.title
      : 'L&L Window Cleaning Inc.'

  const url = `${process.env.NEXT_PUBLIC_PUBLIC_URL}/${collectionSlug}/${doc?.id}`

  return {
    title,
    description: doc?.meta?.description || defaultMetaData.description,
    openGraph: mergeOpenGraph({
      title,
      description: doc?.meta?.description ?? 'L&L Window Cleaning Inc.',
      url,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
    }),
  }
}
