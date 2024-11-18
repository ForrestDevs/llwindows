import React from 'react'
import { CardBlockProps } from './types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
} from '@/components/ui/card'

import {
  FaMoon,
  FaSwimmer,
  FaWalking,
  FaTheaterMasks,
  FaHeartbeat,
  FaBed,
  FaHeadSideVirus,
  FaHeadSideCough,
  FaUserInjured,
} from 'react-icons/fa'
import { BsEmojiHeartEyesFill } from 'react-icons/bs'
import { LiaWaveSquareSolid } from 'react-icons/lia'
import { Media } from '@/payload/components/Media'
import { CMSLink } from '@/payload/components/Link'

export const CardBlock: React.FC<
  CardBlockProps & {
    id?: string
  }
> = async (props) => {
  const { type, title, description, icon, media, links } = props

  let Icon: React.ReactNode

  switch (icon) {
    case 'moon':
      Icon = <FaMoon />
      break
    case 'heart-eyes':
      Icon = <BsEmojiHeartEyesFill />
      break
    case 'swimming':
      Icon = <FaSwimmer />
      break
    case 'walking':
      Icon = <FaWalking />
      break
    case 'wave':
      Icon = <LiaWaveSquareSolid />
      break
    case 'theater-masks':
      Icon = <FaTheaterMasks />
      break
    case 'heart':
      Icon = <FaHeartbeat />
      break
    case 'sleeping':
      Icon = <FaBed />
      break
    case 'stress':
      Icon = <FaHeadSideVirus />
      break
    case 'aches':
      Icon = <FaUserInjured />
      break
    case 'sick':
      Icon = <FaHeadSideCough />
      break
    default:
      Icon = null
  }

  return (
    <Card>
      <CardContent className="p-6">
        {media && <Media resource={media} imgClassName="w-full h-48 object-cover" />}
        {type === 'icon' && Icon}
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
        {links && Array.isArray(links) && links.length > 0 && (
          <CardFooter>
            {links.map((link) => (
              <CMSLink key={link.id} {...link.link} />
            ))}
          </CardFooter>
        )}
      </CardContent>
    </Card>
  )
}
