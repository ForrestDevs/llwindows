import clsx from 'clsx'
import React from 'react'
import RichText from '@/payload/components/RichText'

import type { Post } from '@/payload-types'

import { Card } from '@/payload/components/Card'

export type RelatedPostsProps = {
  className?: string
  docs?: Post[]
  introContent?: any
}

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { className, docs, introContent } = props

  return (
    <div className={clsx('container', className)}>
      <h2 className="text-2xl font-bold mb-4">Related Posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 items-stretch">
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          return <Card key={index} doc={doc} relationTo="blog" showCategories />
        })}
      </div>
    </div>
  )
}
