import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'
import { ArchiveBlock } from '@/payload/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/payload/blocks/CallToAction/Component'
import { ContentBlock } from '@/payload/blocks/Content/Component'
// import { FormBlock } from '@/payload/blocks/Form/Component'
import { MediaBlock } from '@/payload/blocks/MediaBlock/Component'
import { GridBlock } from './Grid/Component'
import { TypographyBlock } from './Typography/Component'
import { CardBlock } from './Card/Component'
import { TestimonialBlock } from './Testimonials/Component'
import { TeamBlock } from './Team/Component'
import { QuoteFormBlock } from './QuoteForm/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  // formBlock: FormBlock,
  mediaBlock: MediaBlock,
  grid: GridBlock,
  typography: TypographyBlock,
  card: CardBlock,
  testimonials: TestimonialBlock,
  team: TeamBlock,
  'quote-form': QuoteFormBlock,
} as const

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error */}
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
