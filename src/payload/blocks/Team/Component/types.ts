import type { Page } from '@/payload-types'
import { TEAM_BLOCK_SLUG } from '@/payload/blocks/constants'

export type TeamBlockProps = Extract<
  NonNullable<Page['layout']>[number],
  { blockType: typeof TEAM_BLOCK_SLUG }
>
