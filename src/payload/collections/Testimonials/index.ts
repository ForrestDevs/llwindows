import type { CollectionConfig } from 'payload'
import { authenticated } from '@/payload/access/authenticated'
import { TESTIMONIALS_SLUG } from '@/payload/collections/constants'

const Testimonials: CollectionConfig = {
  slug: TESTIMONIALS_SLUG,
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'author',
    group: 'Reviews',
  },
  fields: [
    {
      label: 'Content',
      name: 'content',
      type: 'textarea',
      required: true,
    },
    {
      label: 'Author',
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      label: 'Rating',
      name: 'rating',
      type: 'number',
      required: true,
      defaultValue: 5,
    },
  ],
} as const

export default Testimonials
