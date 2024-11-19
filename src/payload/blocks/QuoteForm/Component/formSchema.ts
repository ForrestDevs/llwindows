import { z } from 'zod'
import { Option } from '@/components/ui/multiselect'

export const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  address: z.string().min(1),
  postalCode: z.string().min(1),
  preferredDates: z.string().min(1),
  services: z.array(z.string()).min(1),
  additionalInformation: z.string().min(1),
})

export const services: Option[] = [
  {
    label: 'Window Cleaning',
    value: 'window-cleaning',
  },
  {
    label: 'Gutter Cleaning',
    value: 'gutter-cleaning',
  },
  {
    label: 'Pressure Washing',
    value: 'pressure-washing',
  },
  {
    label: 'Gardening',
    value: 'gardening',
  },
  {
    label: 'Solar Panel Cleaning',
    value: 'solar-panel-cleaning',
  },
  {
    label: 'High Rise Window Cleaning',
    value: 'high-rise-window-cleaning',
  },
  {
    label: 'Other',
    value: 'other',
  },
]
