import type { Block } from 'payload'
import { TESTIMONIALS_BLOCK_SLUG } from '@/payload/blocks/constants'
import { link } from '@/payload/fields/link'

export const Testimonials: Block = {
  slug: TESTIMONIALS_BLOCK_SLUG,
  interfaceName: 'TestimonialsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    // {
    //   name: 'body',
    //   type: 'textarea',
    //   label: 'Body',
    // },
    // {
    //   name: 'showLink',
    //   type: 'checkbox',
    //   label: 'Show Link',
    //   defaultValue: false,
    // },
    // link({
    //   overrides: {
    //     admin: {
    //       condition: (_, siblingData) => siblingData.showLink,
    //     },
    //   },
    // }),
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      options: [
        {
          label: 'Collection',
          value: 'collection',
        },
        {
          label: 'Individual Selection',
          value: 'selection',
        },
      ],
    },
    {
      name: 'limit',
      type: 'number',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        step: 1,
      },
      defaultValue: 10,
      label: 'Limit',
    },
    {
      name: 'selectedDocs',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
      hasMany: true,
      label: 'Selection',
      relationTo: ['testimonials'],
    },
  ],
  labels: {
    plural: 'Testimonials',
    singular: 'Testimonial',
  },
}
