import React from 'react'
import type { TypographyBlockProps } from './types'
import RichText from '@/payload/components/RichText'
import { CMSLink } from '@/payload/components/Link'
import { cn } from '@/lib/utilities/cn'

export const TypographyBlock: React.FC<
  TypographyBlockProps & {
    id?: string
  }
> = async (props) => {
  const { type, subTitle, title, body, align, links } = props

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  if (!body) {
    return null
  }

  let content

  switch (type) {
    case 'sub-title-body':
      content = (
        <div>
          <h3
            className={cn(
              'text-sm font-light tracking-widest mb-2 uppercase',
              align && alignClasses[align],
            )}
          >
            {subTitle}
          </h3>
          <h2 className={cn('text-3xl lg:text-4xl font-bold mb-4', align && alignClasses[align])}>
            {title}
          </h2>
          <RichText
            content={body}
            enableGutter={false}
            enableProse
            className={cn('mb-4', align && alignClasses[align])}
          />
        </div>
      )
      break
    case 'title-body':
      content = (
        <div>
          <h2 className={cn('text-3xl lg:text-4xl font-bold mb-4', align && alignClasses[align])}>
            {title}
          </h2>
          <RichText
            content={body}
            enableGutter={false}
            enableProse
            className={cn('mb-4', align && alignClasses[align])}
          />
        </div>
      )
      break
    case 'title':
      content = (
        <h2 className={cn('text-3xl lg:text-4xl font-bold mb-4', align && alignClasses[align])}>
          {title}
        </h2>
      )
      break
    case 'subtitle':
      content = (
        <h3
          className={cn(
            'text-sm font-light tracking-widest mb-2 uppercase',
            align && alignClasses[align],
          )}
        >
          {subTitle}
        </h3>
      )
      break
    case 'body':
      content = (
        <RichText
          content={body}
          enableGutter={false}
          enableProse
          className={cn('mb-4', align && alignClasses[align])}
        />
      )
      break
  }

  return (
    <>
      {content}
      {links && links.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4">
          {links.map((link, i) => (
            <CMSLink key={i} {...link.link} className="rounded-none" size="lg" />
          ))}
        </div>
      )}
    </>
  )
}
