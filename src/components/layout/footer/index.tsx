import { getCachedGlobal } from '@/lib/utilities/getGlobals'
import React from 'react'
import type { Footer } from '@/payload-types'
import Link from 'next/link'
import { Phone, Mail, Clock } from 'lucide-react'

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer')()

  const navItems = footer?.navItems || []

  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">L&L Window Cleaning Inc.</h2>

            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <span>705-341-4295</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <a href="mailto:L.LWindowCleaningInc@gmail.com" className="hover:text-blue-500">
                  L.LWindowCleaningInc@gmail.com
                </a>
              </li>
              <li className="flex items-start text-gray-600">
                <Clock className="h-5 w-5 mr-2 mt-1 text-blue-500" />
                <div>
                  <p>Mon-Fri: 8am - 4:30pm</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/services#residential" className="text-gray-600 hover:text-blue-500">
                  Residential Window Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-gray-600 hover:text-blue-500">
                  Commercial Window Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pressure-washing"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#gutter-cleaning"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Gutter Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services#solar-panel-cleaning"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Solar Panel Cleaning
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-blue-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-600 hover:text-blue-500">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 text-center">
            © 2024 L&L Window Cleaning Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
