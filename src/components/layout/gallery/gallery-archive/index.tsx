'use client'

import React from 'react'
import type { Gallery } from '@/payload-types'
import { ImageCard } from '@/components/layout/gallery/image-card'
import { OptimizedLink } from '@/components/ui/optimized-link'
import { cn } from '@/lib/utilities/cn'
import { buttonVariants } from '@/components/ui/button'
import { parseAsString, useQueryStates } from 'nuqs'

export function GalleryArchive({ collections }: { collections: Gallery[] }) {
  
  const [currentCollection] = useQueryStates({
    collection: parseAsString.withDefault(collections[0]?.slug || '').withOptions({
      clearOnDefault: false,
    }),
  })

  const collection = collections.find(
    (collection) => collection.slug === currentCollection.collection,
  )

  return (
    <section className="container flex flex-col justify-center gap-10 py-10">
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-4">
        {collection?.images?.slice(0, 9).map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <div className="col-span-4" key={index}>
                <ImageCard image={result} />
              </div>
            )
          }
          return null
        })}
      </div>
      <OptimizedLink
        href={`/gallery/${collection?.slug}`}
        className={cn(
          buttonVariants({ variant: 'default' }),
          'rounded-none p-8 w-fit mx-auto text-xl',
        )}
      >
        View More
      </OptimizedLink>
    </section>
  )
}
