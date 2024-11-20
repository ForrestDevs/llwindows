import * as React from 'react'
import {
  Tailwind,
  Button,
  Row,
  Column,
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Hr,
} from '@react-email/components'

export interface QuoteInquiryProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  postalCode: string
  preferredDates: string
  services: string
  additionalInformation: string
}

export const EmailTemplate: React.FC<Readonly<QuoteInquiryProps>> = (props) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    postalCode,
    preferredDates,
    services,
    additionalInformation,
  } = props

  return (
    <Html>
      <Head></Head>
      <Preview>
        New Quote Inquiry from {firstName} {lastName}
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans">
          <Container className="mx-auto py-4 px-2 bg-white rounded-lg shadow-lg my-4">
            <Heading className="text-2xl font-bold text-gray-800 mb-4 text-center">
              New Quote Inquiry
            </Heading>
            <Text className="text-gray-700 mb-4 text-center text-sm">
              A new quote inquiry has been received. Please review the details below:
            </Text>
            <Section className="bg-gray-50 rounded-lg p-4 mb-4">
              {[
                { label: 'Name', value: `${firstName} ${lastName}` },
                { label: 'Email', value: email },
                { label: 'Phone', value: phone },
                { label: 'Address', value: address },
                { label: 'Postal Code', value: postalCode },
                { label: 'Preferred Dates', value: preferredDates },
                {
                  label: 'Services Requested',
                  value: services
                    .split(',')
                    .map((service) => service.trim())
                    .join(', '),
                },
                { label: 'Additional Information', value: additionalInformation },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
                  } p-3 rounded-md`}
                >
                  <Text className="font-bold text-gray-600 text-sm mb-1">
                    {item.label}
                  </Text>
                  <Text className="text-gray-800 text-sm break-words pl-1">
                    {item.value}
                  </Text>
                </div>
              ))}
            </Section>
            <Text className="text-gray-700 mb-4 text-sm">
              Please review this inquiry and respond to the client as soon as possible with a quote
              or any additional questions.
            </Text>
            <Hr className="border-gray-300 my-4" />
            <Text className="text-gray-700 text-center text-sm">
              Thank you,
              <br />
              Your Quoting System
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
