'use client'

import React, { useCallback, useState } from 'react'
import type { QuoteFormBlockProps } from './types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'

import MultipleSelector, { Option } from '@/components/ui/multiselect'

import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema, services } from './formSchema'
import { submitQuoteForm } from './action'

export type Value = unknown

export interface Property {
  [key: string]: Value
}

export interface Data {
  [key: string]: Property | Property[]
}

export const QuoteFormBlock: React.FC<QuoteFormBlockProps & { id?: string }> = (props) => {
  const { title } = props

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      postalCode: '',
      preferredDates: '',
      services: [],
      additionalInformation: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate loading with timeout
    console.log(values)
    submitQuoteForm(values)
  }

  //   const onSubmit = useCallback(
  //     (data: Data) => {
  //       let loadingTimerID: ReturnType<typeof setTimeout>
  //       const submitForm = async () => {
  //         setError(undefined)

  //         const dataToSend = Object.entries(data).map(([name, value]) => ({
  //           field: name,
  //           value,
  //         }))

  //         // delay loading indicator by 1s
  //         loadingTimerID = setTimeout(() => {
  //           setIsLoading(true)
  //         }, 1000)

  //         try {
  //           const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
  //             body: JSON.stringify({
  //               form: formID,
  //               submissionData: dataToSend,
  //             }),
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //             method: 'POST',
  //           })

  //           const res = await req.json()

  //           clearTimeout(loadingTimerID)

  //           if (req.status >= 400) {
  //             setIsLoading(false)

  //             setError({
  //               message: res.errors?.[0]?.message || 'Internal Server Error',
  //               status: res.status,
  //             })

  //             return
  //           }

  //           setIsLoading(false)
  //           setHasSubmitted(true)

  //           if (confirmationType === 'redirect' && redirect) {
  //             const { url } = redirect

  //             const redirectUrl = url

  //             if (redirectUrl) router.push(redirectUrl)
  //           }
  //         } catch (err) {
  //           console.warn(err)
  //           setIsLoading(false)
  //           setError({
  //             message: 'Something went wrong.',
  //           })
  //         }
  //       }

  //       void submitForm()
  //     },
  //     [router, formID, redirect, confirmationType],
  //   )

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" id="quote-form">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postal Code</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="preferredDates"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Dates/Dealines</FormLabel>
                      <FormControl>
                        <Input placeholder="Short Answer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="services"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Services Needed</FormLabel>
                      <FormControl>
                        <MultipleSelector
                          commandProps={{
                            label: 'Select services',
                          }}
                          className="bg-white"
                          value={
                            field.value
                              ?.map((value) => services.find((service) => service.value === value))
                              .filter((service) => service !== undefined) ?? []
                          }
                          defaultOptions={services}
                          placeholder="Select services"
                          hideClearAllButton
                          hidePlaceholderWhenSelected
                          emptyIndicator={<p className="text-center text-sm">No results found</p>}
                          onChange={(options) => {
                            field.onChange(options.map((option) => option.value))
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="additionalInformation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
