import type { CollectionConfig } from 'payload'
import { anyone } from '@/payload/access/anyone'
import { authenticated } from '@/payload/access/authenticated'
import { GALLERIES_SLUG, MEDIA_SLUG } from '../constants'
import { hero } from '@/payload/heros/config'
import { slugField } from '@/payload/fields/slug'
import { OverviewField } from '@payloadcms/plugin-seo/fields'
import { MetaTitleField } from '@payloadcms/plugin-seo/fields'
import { MetaImageField } from '@payloadcms/plugin-seo/fields'
import { MetaDescriptionField } from '@payloadcms/plugin-seo/fields'
import { PreviewField } from '@payloadcms/plugin-seo/fields'

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
        {
          label: 'SEO',
          name: 'meta',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,
              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
  ],
} as const

export default Galleries
