import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { CheckCircle, Star } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      name: 'Window Cleaning',
      description: 'Crystal clear views, inside and out',
      image: '/placeholder.svg',
    },
    {
      name: 'Pressure Washing',
      description: 'Restore your exterior surfaces',
      image: '/placeholder.svg',
    },
    {
      name: 'Gutter Cleaning',
      description: 'Prevent water damage and protect your home',
      image: '/placeholder.svg',
    },
    {
      name: 'Gardening',
      description: 'Beautiful landscapes for your property',
      image: '/placeholder.svg',
    },
    {
      name: 'Solar Panel Cleaning',
      description: 'Maximize your energy efficiency',
      image: '/placeholder.svg',
    },
    {
      name: 'High-Rise Window Cleaning',
      description: 'Specialized cleaning for tall buildings',
      image: '/placeholder.svg',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
            L&L Window Cleaning, Inc.
          </h1>
          <p className="text-xl mb-8">Because, Even Glass Deserves a Spa Day</p>
          <Button size="lg" variant="secondary">
            Get Your Free Quote
          </Button>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                    passHref
                  >
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">See the Difference</h2>
          <Tabs defaultValue="pressure-wash" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="pressure-wash">Pressure Wash</TabsTrigger>
              <TabsTrigger value="windows">Windows</TabsTrigger>
              <TabsTrigger value="gutters">Gutters</TabsTrigger>
            </TabsList>
            <TabsContent value="pressure-wash">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg"
                      alt="Before Pressure Wash"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">Before</h3>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg"
                      alt="After Pressure Wash"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">After</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="windows">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg"
                      alt="Before Window Cleaning"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">Before</h3>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg"
                      alt="After Window Cleaning"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">After</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="gutters">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg"
                      alt="Before Gutter Cleaning"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">Before</h3>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg"
                      alt="After Gutter Cleaning"
                      width={600}
                      height={400}
                      className="w-full"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">After</h3>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose L&L Window Cleaning?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Experienced Team',
                description: 'Our skilled professionals have years of industry experience.',
              },
              {
                title: 'Eco-Friendly Solutions',
                description: 'We use environmentally safe cleaning products.',
              },
              {
                title: 'Cutting-Edge Equipment',
                description: 'State-of-the-art tools for superior results.',
              },
              {
                title: 'Insured and Bonded',
                description: 'Your property is protected with our comprehensive coverage.',
              },
              {
                title: 'Satisfaction Guaranteed',
                description: "We're not happy until you're thrilled with our service.",
              },
              {
                title: 'Competitive Pricing',
                description: 'High-quality service at affordable rates.',
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Christine Dimitris',
                text: 'Liam worked hard at cleaning my windows. He got rid of the green mold on the side of my home, too. I would highly recommend Liam for cleaning your windows, siding, and eavestroughs.',
              },
              {
                name: 'Sabrina Wu',
                text: "We had Liam clean our windows inside and out. It's unbelievable the difference his work has made with letting more light into our house. Highly Recommend!",
              },
              {
                name: 'Pho Kyi',
                text: 'Liam and his assistant worked tirelessly to clean the moss off of my roof in Wellington. They were professional, safety conscious, and very thorough. Well done, Liam!',
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
                  <p className="font-semibold">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Sparkling Clean?</h2>
          <p className="text-xl mb-8">Contact us now for a free, no-obligation quote!</p>
          <Button size="lg" variant="secondary">
            Get Your Free Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
