import React, { Suspense } from 'react'
import { Pagination } from '@/components/layout/blog/pagination/pagination'
import { PostArchive } from '@/components/layout/blog/post-archive'
import { PageRange } from '@/components/layout/blog/pagination/page-range'
import getPayload from '@/lib/utilities/getPayload'

type Props = {
  category?: string
  page?: number
}

export default async function FilteredPagination({ category, page }: Props) {
  const payload = await getPayload()

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 9,
    ...(category && {
      where: {
        categories: {
          in: [category],
        },
      },
    }),
    ...(page && {
      page,
    }),
  })

  return (
    <div className="flex flex-col container">
      <Suspense fallback={<div>Loading...</div>}>
        <PageRange
          collection="posts"
          currentPage={posts.page}
          limit={9}
          totalDocs={posts.totalDocs}
          className="mb-6"
        />

        <PostArchive posts={posts.docs} />

        {posts.totalPages > 1 && <Pagination totalPages={posts.totalPages} />}
      </Suspense>
    </div>
  )
}
