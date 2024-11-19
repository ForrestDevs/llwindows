import type { Page } from '@/payload-types'
import { TEAM_BLOCK_SLUG } from '@/payload/blocks/constants'

export type TeamBlockProps = Extract<Page['layout'][0], { blockType: typeof TEAM_BLOCK_SLUG }>