'use server'

import { z } from 'zod'
import { formSchema } from './formSchema'
import getPayload from '@/lib/utilities/getPayload'

export async function submitQuoteForm(values: z.infer<typeof formSchema>) {
  const payload = await getPayload()

  const dataToSend = Object.entries(values).map(([name, value]) => ({
    field: name,
    value: Array.isArray(value) ? value.join(', ') : value,
  }))

  const submission = await payload.create({
    collection: 'form-submissions',
    data: {
      form: 'quote-form',
      submissionData: dataToSend,
    },
  })
}
