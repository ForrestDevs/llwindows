import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Users, Target, TrendingUp } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Story</h1>
            <p className="mt-4 text-xl">Discover the journey of L&L Window Cleaning, Inc.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">How It All Began</h2>
          <div className="space-y-6 text-gray-600">
            <p>
              L&L Window Cleaning, Inc. was founded in 2014 by childhood friends Liam Smith and
              Logan Inwood. What started as a summer job to earn extra money quickly turned into a
              passion for delivering exceptional service and sparkling clean windows.
            </p>
            <p>
              With just a bucket, a squeegee, and an unwavering commitment to customer satisfaction,
              Liam and Logan began serving their local community in Hastings. Word of their
              meticulous work and friendly service spread quickly, and soon they found themselves
              expanding to neighboring areas.
            </p>
            <p>
              As demand grew, so did their team and service offerings. L&L Window Cleaning evolved
              from a two-man operation to a full-service exterior cleaning company, adding services
              like gutter cleaning, pressure washing, and even high-rise window cleaning to their
              repertoire.
            </p>
          </div>
        </div>
      </section>

      {/* Growth and Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Growth and Vision</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Today, L&L Window Cleaning, Inc. serves the entire Greater Toronto Area, with
                  specialized divisions for residential, commercial, and high-rise cleaning. Our
                  team has grown to over 50 dedicated professionals, all sharing our founders&apos;
                  commitment to quality and customer care.
                </p>
                <p>
                  Our vision is to become the most trusted name in exterior cleaning services across
                  Ontario. We&apos;re constantly innovating, investing in eco-friendly cleaning
                  solutions and state-of-the-art equipment to ensure we deliver the best results while
                  minimizing our environmental impact.
                </p>
                <p>
                  As we grow, we remain true to our roots – providing personalized service with a
                  smile, and treating every property as if it were our own. We&apos;re not just
                  cleaning windows; we&apos;re brightening lives, one sparkle at a time.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-xl font-bold mb-2">50+</h3>
                  <p className="text-gray-600">Team Members</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-xl font-bold mb-2">10,000+</h3>
                  <p className="text-gray-600">Satisfied Customers</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-xl font-bold mb-2">25+</h3>
                  <p className="text-gray-600">Cities Served</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                  <h3 className="text-xl font-bold mb-2">3</h3>
                  <p className="text-gray-600">Specialized Divisions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Liam Smith',
                role: 'Co-Founder & CEO',
                area: 'Hastings/Prince Edward/Kingston Division',
              },
              {
                name: 'Logan Inwood',
                role: 'Co-Founder & COO',
                area: 'Durham, York and Brock Regions',
              },
              {
                name: 'Piotr Radecki',
                role: 'Lead Trainer and Lead Marketer',
                area: 'High Rise Division',
              },
              {
                name: 'Jay Smith',
                role: 'Area Manager & High Rise Equipment Specialist',
                area: 'High Rise Division',
              },
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.area}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for perfection in every job, no matter how big or small.',
              },
              {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and respect.',
              },
              {
                title: 'Innovation',
                description: 'We continuously seek new ways to improve our services and processes.',
              },
              {
                title: 'Sustainability',
                description:
                  "We're committed to eco-friendly practices and reducing our environmental impact.",
              },
              {
                title: 'Community',
                description: 'We believe in giving back and supporting the communities we serve.',
              },
              {
                title: 'Safety',
                description:
                  'The safety of our team and customers is our top priority in everything we do.',
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Community Involvement</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            At L&L Window Cleaning, we believe in giving back to the communities that have supported
            our growth. Here are some of the initiatives we&apos;re proud to be a part of:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Clean Windows, Bright Futures</h3>
                <p className="text-gray-600 mb-4">
                  Our annual program where we donate a portion of our profits to local schools for
                  their maintenance and improvement projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Community Clean-Up Days</h3>
                <p className="text-gray-600 mb-4">
                  We organize quarterly volunteer events where our team helps clean up local parks
                  and public spaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the L&L Difference?</h2>
          <p className="text-xl mb-8">Let us bring our passion for perfection to your windows.</p>
          <Button size="lg" variant="secondary">
            Get Your Free Quote Today
          </Button>
        </div>
      </section>
    </div>
  )
}
