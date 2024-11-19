import type { CollectionConfig } from 'payload'
import { anyone } from '../../access/anyone'
import { authenticated } from '../../access/authenticated'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  access: {
    create: anyone,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'form',
  },
  fields: [
    {
      name: 'form',
      type: 'text',
      required: true,
    },
    {
      name: 'submissionData',
      type: 'json',
    },
  ],
}
