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

import { Star, Leaf, Users, CheckCircle } from 'lucide-react'

import { BsEmojiHeartEyesFill } from 'react-icons/bs'
import { LiaWaveSquareSolid } from 'react-icons/lia'
import { Media } from '@/payload/components/Media'
import { CMSLink } from '@/payload/components/Link'
import { cn } from '@/lib/utilities/cn'

export const CardBlock: React.FC<
  CardBlockProps & {
    id?: string
    index?: number
  }
> = async (props) => {
  const { type, title, description, icon, media, links, index } = props

  let Icon: React.JSX.Element

  const iconClassName = 'w-12 h-12 mx-auto mb-4 text-blue-500'

  switch (icon) {
    case 'check-mark':
      Icon = <CheckCircle className={cn(iconClassName, 'text-green-500')} />
      break
    case 'star':
      Icon = <Star className={iconClassName} />
      break
    case 'leaf':
      Icon = <Leaf className={iconClassName} />
      break
    case 'users':
      Icon = <Users className={iconClassName} />
      break
    case 'moon':
      Icon = <FaMoon className={iconClassName} />
      break
    case 'heart-eyes':
      Icon = <BsEmojiHeartEyesFill className={iconClassName} />
      break
    case 'swimming':
      Icon = <FaSwimmer className={iconClassName} />
      break
    case 'walking':
      Icon = <FaWalking className={iconClassName} />
      break
    case 'wave':
      Icon = <LiaWaveSquareSolid className={iconClassName} />
      break
    case 'theater-masks':
      Icon = <FaTheaterMasks className={iconClassName} />
      break
    case 'heart':
      Icon = <FaHeartbeat className={iconClassName} />
      break
    case 'sleeping':
      Icon = <FaBed className={iconClassName} />
      break
    case 'stress':
      Icon = <FaHeadSideVirus className={iconClassName} />
      break
    case 'aches':
      Icon = <FaUserInjured className={iconClassName} />
      break
    case 'sick':
      Icon = <FaHeadSideCough className={iconClassName} />
      break
    default:
      Icon = <></>
  }

  const isService = type === 'service'
  const serviceTitleClassName = 'text-left mt-6'
  const serviceDescriptionClassName = 'text-left'

  return (
    <Card className="h-full">
      <CardContent className="p-6 text-center h-full flex flex-col">
        {media && <Media resource={media} imgClassName="w-full h-48 object-cover" />}
        {type === 'icon' && Icon}
        {type === 'step' && (
          <div className="text-4xl font-bold text-blue-500 mb-4">{index ?? 0}</div>
        )}
        {title && (
          <CardTitle className={cn(isService && serviceTitleClassName, 'text-xl font-bold mb-2')}>
            {title}
          </CardTitle>
        )}
        {description && (
          <CardDescription className={cn(isService && serviceDescriptionClassName, 'flex-grow')}>
            {description}
          </CardDescription>
        )}
        {links && Array.isArray(links) && links.length > 0 && (
          <CardFooter className="mt-4 p-0">
            {links.map((link) => (
              <CMSLink key={link.id} {...link.link} />
            ))}
          </CardFooter>
        )}
      </CardContent>
    </Card>
  )
}
