import { Block } from 'payload'
import { Card } from '../Card/config'

export const Grid: Block = {
  slug: 'grid',
  labels: {
    singular: 'Grid',
    plural: 'Grid Layouts',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      type: 'collapsible',
      label: 'Grid Settings',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'colsSm',
              type: 'number',
              label: 'Number of Columns (Small)',
              required: true,
              min: 1,
              max: 12,
              defaultValue: 1,
              admin: {
                description: 'Number of columns to display (1-12)',
              },
            },
            {
              name: 'colsMd',
              type: 'number',
              label: 'Number of Columns (Medium)',
              required: true,
              max: 12,
              defaultValue: 2,
              admin: {
                description: 'Number of columns to display (1-12)',
              },
            },
            {
              name: 'colsLg',
              type: 'number',
              label: 'Number of Columns (Large)',
              required: true,
              max: 12,
              defaultValue: 3,
              admin: {
                description: 'Number of columns to display (1-12)',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'gap',
              type: 'number',
              label: 'Column Gap',
              defaultValue: 8,
              admin: {
                description: 'Gap between columns',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [Card],
      admin: {
        description: 'Add content blocks to each grid cell',
      },
    },
  ],
}

export default Grid
