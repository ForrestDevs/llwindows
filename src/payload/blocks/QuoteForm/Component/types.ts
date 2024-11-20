import type { Page } from '@/payload-types'
import { QUOTE_FORM_BLOCK_SLUG } from '@/payload/blocks/constants'

export type QuoteFormBlockProps = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: typeof QUOTE_FORM_BLOCK_SLUG }
>
