import React, { Suspense } from 'react'
import getPayload from '@/lib/utilities/getPayload'
import { RenderHero } from '@/payload/heros/RenderHero'
import { RenderBlocks } from '@/payload/blocks/RenderBlocks'
import { queryPageBySlug } from '@/lib/utilities/queryPageBySlug'
import GalleryFilters from '@/components/layout/gallery/filter'
import { GalleryArchive } from '@/components/layout/gallery/gallery-archive'

export default async function GalleryHome() {
  const payload = await getPayload()
  const page = await queryPageBySlug({ slug: 'gallery' })
  const { docs } = await payload.find({
    collection: 'galleries',
    depth: 1,
  })

  return (
    <div className="flex flex-col min-h-screen space-y-10">
      <RenderHero {...page.hero} />
      <section className="container">
        <RenderBlocks blocks={page.layout ?? []} />
      </section>
      {docs.length > 0 ? (
        <div className="flex flex-col gap-10">
          <Suspense fallback={<div>Loading...</div>}>
            <GalleryFilters collections={docs} />
            <GalleryArchive collections={docs} />
          </Suspense>
        </div>
      ) : (
        <div className="container text-center py-12">
          <p className="text-lg text-gray-600">
            No galleries present. Please add some galleries in the admin panel.
          </p>
        </div>
      )}
    </div>
  )
}
