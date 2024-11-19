'use client'

import React from 'react'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Testimonial } from '@/payload-types'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utilities/cn'
import { DotButton, useDotButton } from './dot-buttons'

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [api, setApi] = React.useState<CarouselApi>()
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api)
  const hideDots = testimonials.length <= 3

  return (
    <div>
      <Carousel
        setApi={setApi}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full" // Fixed height to show 2 cards
        orientation={'horizontal'}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3" // Show 2 cards vertically on lg screens
            >
              <div className="p-1 h-full">
                <Card className="h-full bg-gray-100 p-6 rounded-lg relative">
                  <div className="text-4xl text-gray-300 absolute top-2 left-2">&quot;</div>
                  <CardContent className="flex flex-col justify-between p-6 h-full">
                    <div>
                      {/* <h3 className="font-bold text-lg mb-2">{testimonial.title}</h3> */}
                      <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              'w-4 h-4',
                              i < testimonial.rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300',
                            )}
                          />
                        ))}
                      </div>
                      <div className="font-semibold">- {testimonial.author}</div>
                      {/* <div className="text-sm text-muted-foreground">{testimonial.date}</div> */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        className={cn('py-2 flex flex-wrap justify-center items-center', hideDots && 'lg:hidden')}
      >
        {testimonials.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn(
              'inline-flex appearance-none bg-transparent cursor-pointer border-0 p-0 m-0 w-10 h-10 items-center justify-center rounded-full touch-manipulation',
              'after:content-[""] after:w-5 after:h-5 after:rounded-full after:flex after:items-center after:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.3)]',
              index === selectedIndex && 'after:shadow-[inset_0_0_0_2px_rgba(0,0,0,0.8)]',
            )}
          />
        ))}
      </div>

      {/* <div className="">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-2 h-2 rounded-full transition-colors',
              api?.selectedScrollSnap() === index ? 'bg-primary' : 'bg-gray-300',
            )}
            onClick={() => handleScroll(index)}
          />
        ))}
      </div> */}
    </div>
  )
}
