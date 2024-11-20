import React from 'react'
import BlogFilters from '@/components/layout/blog/filter'
import FilteredPagination from '@/components/layout/blog/pagination'
import getPayload from '@/lib/utilities/getPayload'
import { blogFiltersCache } from '@/components/layout/blog/searchParams'
import { PayloadRedirects } from '@/payload/components/PayloadRedirects'
import { RenderHero } from '@/payload/heros/RenderHero'
import { queryPageBySlug } from '@/lib/utilities/queryPageBySlug'
import { RenderBlocks } from '@/payload/blocks/RenderBlocks'
import { Metadata } from 'next/types'
import { generateMeta } from '@/lib/utilities/generateMeta'

// export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  searchParams: Promise<{
    [key: string]: string | undefined
  }>
}

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug = 'blog' } = await paramsPromise
  const page = await queryPageBySlug({
    slug,
  })

  return generateMeta({ doc: page, collectionSlug: 'pages' })
}

export default async function Page({ searchParams }: Args) {
  const searchParams_ = await searchParams

  const { category, page } = blogFiltersCache.parse(searchParams_)

  const [blogLayout, payload, categories] = await Promise.all([
    queryPageBySlug({ slug: 'blog' }),
    getPayload(),
    (await getPayload()).find({
      collection: 'blog-categories',
      depth: 0,
      where: {
        showInFilter: {
          equals: true,
        },
      },
      select: {
        id: true,
        title: true,
        slug: true,
      },
    }),
  ])

  const categoryId = categories.docs?.find((result) => result.slug === category)?.id

  return (
    <div className="flex flex-col min-h-screen space-y-10 pb-20">
      <RenderHero {...blogLayout.hero} />
      <RenderBlocks blocks={blogLayout.layout ?? []} />
      <BlogFilters categories={categories.docs} />
      <FilteredPagination category={categoryId} page={page} />
    </div>
  )
}
