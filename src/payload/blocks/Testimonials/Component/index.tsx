import React from 'react'
import type { TestimonialBlockProps } from './types'
import { TestimonialsCarousel } from './client'
import getPayload from '@/lib/utilities/getPayload'
import { TESTIMONIALS_SLUG } from '@/payload/collections/constants'
import { Testimonial } from '@/payload-types'

export const TestimonialBlock: React.FC<
  TestimonialBlockProps & {
    id?: string
  }
> = async (props) => {
  const { id, limit: limitFromProps, populateBy, selectedDocs, title } = props
  const limit = limitFromProps || 3

  let testimonials: Testimonial[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload()

    const fetchedTestimonies = await payload.find({
      collection: TESTIMONIALS_SLUG,
      depth: 1,
      limit,
    })

    testimonials = fetchedTestimonies.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedTestimonials = selectedDocs.map((testimonial) => {
        if (typeof testimonial.value === 'object') return testimonial.value
      }) as Testimonial[]

      testimonials = filteredSelectedTestimonials
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id={`block-${id}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  )
}
