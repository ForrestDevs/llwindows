import React from 'react'
import BlogFilters from '@/components/layout/blog/filter'
import FilteredPagination from '@/components/layout/blog/pagination'
import getPayload from '@/lib/utilities/getPayload'
import { blogFiltersCache } from '@/components/layout/blog/searchParams'

// export const dynamic = 'force-static'
export const revalidate = 600

type Args = {
  searchParams: Promise<{
    [key: string]: string | undefined
  }>
}

export default async function Page({ searchParams }: Args) {
  const searchParams_ = await searchParams
  const { category, page } = blogFiltersCache.parse(searchParams_)
  const payload = await getPayload()

  const categories = await payload.find({
    collection: 'blog-categories',
    depth: 0,
    where: {
      showInFilter: {
        equals: true,
      },
    },
  })

  const categoryId = categories.docs?.find((result) => result.slug === category)?.id

  return (
    <div className="flex flex-col min-h-screen space-y-16">
      <HeroSmall />
      <BlogIntro />
      <BlogFilters categories={categories.docs} />
      <FilteredPagination category={categoryId} page={page} />
    </div>
  )
}

function BlogIntro() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-lg font-light uppercase tracking-wider mb-3">
            Dive into Our World
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore the Latest in Hot Tub Lifestyle
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Welcome to our blog, where we share expert insights, maintenance tips, and inspiring
            stories about the joys of hot tub ownership. Whether you&apos;re a seasoned enthusiast
            or just starting your journey, there&apos;s something here for everyone.
          </p>
        </div>
      </div>
    </section>
  )
}

function HeroSmall() {
  return (
    <section
      className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Avera.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg md:text-xl font-light uppercase tracking-widest">
          Latest news and insights
        </p>
      </div>
    </section>
  )
}
