'use server'

import { z } from 'zod'
import { formSchema } from './formSchema'
import getPayload from '@/lib/utilities/getPayload'
import { text } from 'stream/consumers'
import { Resend } from 'resend'
import { EmailTemplate, QuoteInquiryProps } from '@/lib/emails/quote-template'

const resend = new Resend(process.env.RESEND_API_KEY)

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

  const emailData: QuoteInquiryProps = {
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    phone: values.phone,
    address: values.address,
    postalCode: values.postalCode,
    preferredDates: values.preferredDates,
    services: values.services.join(', '),
    additionalInformation: values.additionalInformation,
  }

  const { data, error } = await resend.emails.send({
    from: 'llwindows-no-reply@resend.dev',
    to: 'l.lwindowcleaninginc@gmail.com',
    subject: 'New Quote Form Submission',
    react: EmailTemplate(emailData),
  })

  if (error) {
    console.error(error)
  }

  console.log(data)
}
