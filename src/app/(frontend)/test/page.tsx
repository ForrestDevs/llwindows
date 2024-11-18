import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Users, Leaf, ChevronLeft, ChevronRight, Phone, Clock, MapPin } from 'lucide-react'

function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            L&L Window Cleaning, Inc.
          </h1>
          <p className="mt-4 text-xl">Because, Even Glass Deserves a Spa Day</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Instant Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function TestHome() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* Welcome Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to L&L Window Cleaning Inc.!</h2>
          <p className="text-gray-600 text-lg">
            At L&L Window Cleaning Inc., we believe that crystal-clear windows can transform your
            space and elevate your view. With years of experience in the industry, our dedicated
            team is committed to delivering exceptional window cleaning services for both
            residential and commercial properties.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">10 Years Experience</h3>
                <p className="text-gray-600">
                  With 10 years of experience, we&apos;ve had the privilege of serving hundreds of
                  happy customers throughout the Greater Toronto Area.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Highly-Trained Team</h3>
                <p className="text-gray-600">
                  Our team is highly-trained and friendly, so you can be sure your home will be in
                  good hands.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Leaf className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Natural Cleaning Products</h3>
                <p className="text-gray-600">
                  We use eco-friendly products that are safe for your family and the environment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg"
                  alt="Window Cleaning"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Window Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Professional window cleaning services for both residential and commercial
                    properties. We ensure crystal clear results every time.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg"
                  alt="Gutter Cleaning"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Gutter Cleaning</h3>
                  <p className="text-gray-600 mb-4">
                    Complete gutter cleaning and maintenance services to protect your home from
                    water damage and keep your gutters flowing freely.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg"
                  alt="Pressure Washing"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Pressure Washing</h3>
                  <p className="text-gray-600 mb-4">
                    Restore the beauty of your exterior surfaces with our professional pressure
                    washing services for driveways, decks, and siding.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg"
                  alt="Gardening"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Gardening</h3>
                  <p className="text-gray-600 mb-4">
                    Keep your outdoor space beautiful with our comprehensive gardening services
                    including planting, maintenance, and seasonal cleanup.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg"
                  alt="Wood Restoration"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Wood Restoration</h3>
                  <p className="text-gray-600 mb-4">
                    Revitalize your wooden surfaces with our professional restoration services for
                    decks, fences, and outdoor furniture.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Choose Service</h3>
              <p className="text-gray-600">
                Tell us about you, your home, and your cleaning needs.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Schedule a Time</h3>
              <p className="text-gray-600">
                Choose a cleaning time that works for your convenience.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Sit Back & Relax</h3>
              <p className="text-gray-600">
                We handle everything so you can focus on what YOU want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-gray-600 mb-4">
                    &quot;Liam worked hard at cleaning my windows. He was professional and thorough.
                    I would highly recommend their services!&quot;
                  </p>
                  <p className="font-semibold">- Christine D.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-blue-500" />
                  <div>
                    <p className="font-semibold">Hastings/Prince Edward/Kingston</p>
                    <p>Liam Smith: 705-341-4295</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-2 text-blue-500" />
                  <div>
                    <p className="font-semibold">Durham, York and Brock Regions</p>
                    <p>Logan Inwood: 905-243-2620</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-blue-500" />
                  <p>Operating Hours: Mon-Sun 7am-9pm</p>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
                <Button className="w-full" size="lg">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
