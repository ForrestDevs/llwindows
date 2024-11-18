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
      type: 'collapsible',
      label: 'Grid Settings',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'columns',
              type: 'number',
              label: 'Number of Columns',
              required: true,
              min: 1,
              max: 12,
              defaultValue: 3,
              admin: {
                description: 'Number of columns to display (1-12)',
              },
            },
            {
              name: 'gap',
              type: 'number',
              label: 'Gap',
              defaultValue: 3,
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
