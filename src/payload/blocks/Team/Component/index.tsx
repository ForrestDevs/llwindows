import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/payload/components/Media'
import RichText from '@/payload/components/RichText'
import type { TeamBlockProps } from './types'

export const TeamBlock: React.FC<TeamBlockProps & { id?: string }> = (props) => {
  const { title, members } = props

  return (
    <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">{title}</h2>

        {members?.map((member, index) => (
          <TeamMemberCard key={member.id} {...member} imageOnLeft={index % 2 === 0} />
        ))}
      </div>
    </section>
  )
}

type TeamMemberCardProps = NonNullable<TeamBlockProps['members']>[number]

const TeamMemberCard: React.FC<TeamMemberCardProps & { imageOnLeft?: boolean }> = (props) => {
  const { name, image, role, bio, imageOnLeft = true } = props

  return (
    <div className="w-full p-4 sm:p-6">
      <div
        className={`flex flex-col ${imageOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-4 sm:gap-6 lg:gap-8`}
      >
        <div className="w-full lg:w-1/3 flex-shrink-0">
          {image && (
            <Media resource={image} />
          )}
        </div>
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{name}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-3 sm:mb-4">{role}</p>
          <div className="prose max-w-none sm:prose-lg dark:prose-invert">
            {bio && <RichText content={bio} enableGutter={false} />}
          </div>
        </div>
      </div>
    </div>
  )
}
