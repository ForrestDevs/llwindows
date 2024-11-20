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

import {
  Star,
  Leaf,
  Users,
  CheckCircle,
  Briefcase,
  User,
  Building,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'

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
  const {
    type,
    title,
    description,
    icon,
    media,
    links,
    index,
    divisionLead,
    serviceArea,
    serviceAreaImage,
    officeLocation,
    phoneNumber,
    email,
    services,
  } = props

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
      {type === 'division' ? (
        <>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {serviceAreaImage && (
                <Media
                  resource={serviceAreaImage}
                  imgClassName="w-full h-[300px] object-fill rounded-lg"
                  className="w-full rounded-lg"
                />
              )}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
                      Service Areas
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{serviceArea}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Building className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
                      Office Location
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{officeLocation}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <Briefcase className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-900 dark:text-gray-100">
                      Services Offered
                    </h3>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 list-disc list-inside">
                      {services?.map((service, index) => <li key={index}>{service.service}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                      Lead Operator
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{divisionLead}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">{phoneNumber}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </>
      ) : (
        <CardContent className="p-6 text-center h-full flex flex-col">
          {media && <Media resource={media} imgClassName="w-full object-fit" />}
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
      )}
    </Card>
  )
}
