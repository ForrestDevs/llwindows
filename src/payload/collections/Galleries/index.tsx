import type { CollectionConfig } from 'payload'
import { anyone } from '@/payload/access/anyone'
import { authenticated } from '@/payload/access/authenticated'
import { GALLERIES_SLUG, MEDIA_SLUG } from '../constants'
import { hero } from '@/payload/heros/config'
import { slugField } from '@/payload/fields/slug'

const Galleries: CollectionConfig = {
  slug: GALLERIES_SLUG,
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'updatedAt'],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'subtitle',
              type: 'text',
            },
            {
              name: 'description',
              type: 'textarea',
            },
            ...slugField(),
          ],
          label: 'Intro',
        },
        {
          fields: [
            {
              name: 'images',
              type: 'upload',
              relationTo: MEDIA_SLUG,
              hasMany: true,
            },
            {
              name: 'showCaptions',
              type: 'checkbox',
            },
          ],
          label: 'Images',
        },
      ],
    },
  ],
} as const

export default Galleries
