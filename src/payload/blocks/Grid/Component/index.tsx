import React from 'react'
import { Grid, Col, Cols } from '@/components/ui/grid'
import { GridBlockProps } from './types'
import { CardBlock } from '@/payload/blocks/Card/Component'

export const GridBlock: React.FC<
  GridBlockProps & {
    id?: string
  }
> = async (props) => {
  const { colsSm, colsMd, colsLg, gap, content, title } = props

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <Grid
          colsLg={colsLg as Cols}
          colsSm={colsSm as Cols}
          colsMd={colsMd as Cols}
          className={gap ? `gap-${gap}` : ''}
        >
          {content?.map((column, index) => (
            <Col key={index}>
              {column && (
                <CardBlock
                  {...column}
                  id={column.id || undefined}
                  index={index + 1}
                  blockType="card"
                />
              )}
            </Col>
          ))}
        </Grid>
      </div>
    </section>
  )
}
