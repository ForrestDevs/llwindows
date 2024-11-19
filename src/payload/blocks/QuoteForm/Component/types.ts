import type { Page } from '@/payload-types'
import { QUOTE_FORM_BLOCK_SLUG } from '@/payload/blocks/constants'

export type QuoteFormBlockProps = Extract<
  Page['layout'][0],
  { blockType: typeof QUOTE_FORM_BLOCK_SLUG }
>
