'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [selectedDivision, setSelectedDivision] = useState('hastings')

  const divisions = [
    {
      name: 'Hastings/Prince Edward/Kingston',
      contact: 'Liam Smith',
      phone: '705-341-4295',
      areas: ['Hastings', 'Prince Edward County', 'Kingston', 'Port Hope'],
    },
    {
      name: 'Durham, York and Brock Regions',
      contact: 'Logan Inwood',
      phone: '905-243-2620',
      areas: ['Durham Region', 'York Region', 'Brock Township'],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            Contact Us
          </h1>
          <p className="text-xl mb-8">Get in touch for sparkling clean windows and more!</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {divisions.map((division, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{division.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-blue-500" />
                      <span>
                        {division.contact}: {division.phone}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-blue-500" />
                      <span>info@llwindowcleaning.com</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 mt-1 text-blue-500" />
                      <div>
                        <strong>Service Areas:</strong>
                        <ul className="list-disc list-inside ml-4">
                          {division.areas.map((area, i) => (
                            <li key={i}>{area}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Get Your Free Quote</h2>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" required />
                </div>
                <div>
                  <Label>Select Division</Label>
                  <RadioGroup value={selectedDivision} onValueChange={setSelectedDivision}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hastings" id="hastings" />
                      <Label htmlFor="hastings">Hastings/Prince Edward/Kingston</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="durham" id="durham" />
                      <Label htmlFor="durham">Durham, York and Brock Regions</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label htmlFor="service">Service Needed</Label>
                  <select id="service" className="w-full p-2 border rounded">
                    <option value="">Select a service</option>
                    <option value="window-cleaning">Window Cleaning</option>
                    <option value="pressure-washing">Pressure Washing</option>
                    <option value="gutter-cleaning">Gutter Cleaning</option>
                    <option value="solar-panel-cleaning">Solar Panel Cleaning</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" rows={4} />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Service Areas</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1438763.9653597956!2d-79.51927860265918!3d44.18703309326993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sCentral%20Ontario%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1653337761720!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section> */}

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Spotless Windows?</h2>
          <p className="text-xl mb-8">
            Our team is just a call away. Contact us now for exceptional service!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary">
              Call Hastings: 705-341-4295
            </Button>
            <Button size="lg" variant="secondary">
              Call Durham: 905-243-2620
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
