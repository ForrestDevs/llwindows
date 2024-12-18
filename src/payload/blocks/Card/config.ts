import type { Block } from 'payload'
import { CARD_BLOCK_SLUG } from '../constants'
import { linkGroup } from '@/payload/fields/linkGroup'

export const iconOptions = [
  {
    label: 'Check Mark',
    value: 'check-mark',
  },
  {
    label: 'Aches',
    value: 'aches',
  },
  {
    label: 'Leaf',
    value: 'leaf',
  },
  {
    label: 'Users',
    value: 'users',
  },
  {
    label: 'Moon',
    value: 'moon',
  },
  {
    label: 'Heart Eyes',
    value: 'heart-eyes',
  },
  {
    label: 'Heart',
    value: 'heart',
  },
  {
    label: 'Star',
    value: 'star',
  },
  {
    label: 'Sleeping',
    value: 'sleeping',
  },
  {
    label: 'Stress',
    value: 'stress',
  },
  {
    label: 'Swimming',
    value: 'swimming',
  },
  {
    label: 'Sick',
    value: 'sick',
  },
  {
    label: 'Walking',
    value: 'walking',
  },
  {
    label: 'Wave',
    value: 'wave',
  },
  {
    label: 'Theater Masks',
    value: 'theater-masks',
  },
]

export const Card: Block = {
  slug: CARD_BLOCK_SLUG,
  interfaceName: 'CardBlock',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'text',
      options: [
        {
          label: 'Text',
          value: 'text',
        },
        {
          label: 'Icon',
          value: 'icon',
        },
        {
          label: 'Service',
          value: 'service',
        },
        {
          label: 'Division',
          value: 'division',
        },
        {
          label: 'Step',
          value: 'step',
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        condition: (_, { type }) => type !== 'division',
      },
    },
    {
      name: 'divisionLead',
      type: 'text',
      admin: {
        condition: (_, { type }) => type === 'division',
      },
    },
    {
      name: 'officeLocation',
      type: 'text',
      admin: {
        condition: (_, { type }) => type === 'division',
      },
    },
    {
      name: 'services',
      type: 'array',
      fields: [
        {
          name: 'service',
          type: 'text',
        },
      ],
      admin: {
        condition: (_, { type }) => type === 'division',
      },
    },
    {
      name: 'serviceArea',
      type: 'text',
      admin: {
        condition: (_, { type }) => type === 'division',
      },
    },
    {
      name: 'serviceAreaImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, { type }) => type === 'division',
      },
    },
    {
      name: 'phoneNumber',
      type: 'text',
      admin: {
        condition: (_, { type }) => type === 'division',
      },
    },
    {
      name: 'email',
      type: 'email',
      admin: {
        condition: (_, { type }) => type === 'division',
      },
    },
    {
      name: 'icon',
      type: 'select',
      options: iconOptions,
      admin: {
        condition: (_, { type }) => type === 'icon',
      },
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, { type }) => type === 'service',
      },
    },
    linkGroup({
      overrides: {
        maxRows: 2,
        admin: {
          condition: (_, { type }) => type === 'service',
        },
      },
    }),
  ],
}
