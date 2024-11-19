import type { Block } from 'payload'
import { QUOTE_FORM_BLOCK_SLUG } from '../constants'

export const QuoteForm: Block = {
  slug: QUOTE_FORM_BLOCK_SLUG,
  labels: {
    singular: 'Quote Form',
    plural: 'Quote Forms',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
  ],
}

export default QuoteForm
