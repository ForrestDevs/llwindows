import type { Page } from '@/payload-types'

export type TestimonialBlockProps = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: 'testimonials' }
>
