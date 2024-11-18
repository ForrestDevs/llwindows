import React from 'react'
import { Grid, Col, Cols } from '@/components/ui/grid'
import { GridBlockProps } from './types'
import { CardBlock } from '@/payload/blocks/Card/Component'

export const GridBlock: React.FC<
  GridBlockProps & {
    id?: string
  }
> = async (props) => {
  const { columns, gap, content } = props

  return (
    <Grid cols={columns as Cols} className={gap ? `gap-${gap}` : ''}>
      {content?.map((column, index) => (
        <Col key={index}>
          {column && <CardBlock {...column} id={column.id || undefined} blockType="card" />}
        </Col>
      ))}
    </Grid>
  )
}
