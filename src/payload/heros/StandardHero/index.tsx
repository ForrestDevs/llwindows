import React from 'react'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/payload/components/Link'
import { Media } from '@/payload/components/Media'
import RichText from '@/payload/components/RichText'

export const StandardHero: React.FC<Page['hero']> = ({
  links,
  media,
  richText,
  title,
  description,
}) => {
  return (
    <div className="relative flex items-center text-white">
      <div className="absolute inset-0 bg-primary/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          {title && (
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{title}</h1>
          )}
          {description && <p className="mt-4 text-xl">{description}</p>}

          <div className="mt-8 flex justify-center gap-4">
            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex gap-4">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="min-h-[50vh] select-none">
        {media && typeof media === 'object' && (
          <React.Fragment>
            <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
            {/* <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" /> */}
          </React.Fragment>
        )}
      </div>
    </div>
  )
}
