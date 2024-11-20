import React from 'react'
import { Media as MediaType } from '@/payload-types'
import { Media as MediaComponent } from '@/payload/components/Media'

type Args = {
  image: MediaType
}

export function ImageCard({ image }: Args) {
  return (
    <div className="aspect-square w-full h-full">
      <MediaComponent
        resource={image}
        size="360px"
        className="h-full w-full"
        imgClassName="object-cover w-full h-full"
      />
    </div>
  )
}
