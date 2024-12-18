import { MobileMenu } from './mobile-menu'
import { getCachedGlobal } from '@/lib/utilities/getGlobals'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Header } from '@/payload-types'
import { MobileMenuProvider } from './context'
import { MobileMenuButton } from './mobile-menu'

export async function Header() {
  const header = await getCachedGlobal('header')()

  return (
    <MobileMenuProvider>
      <header className="bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="flex items-center">
                <Image src="/assets/logo.jpeg" alt="L&L Window Cleaning" width={100} height={100} />
              </Link>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
              {/* MobileMenuButton is a client component that uses a shared state context to control HeaderClient */}
              <MobileMenuButton />
            </div>
            <nav className="hidden lg:flex space-x-10">
              <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/services"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Blog
              </Link>
              <Link
                href="/gallery"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Gallery
              </Link>
            </nav>
            <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
              <Link
                href="/contact#quote-form"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        <MobileMenu />
      </header>
    </MobileMenuProvider>
  )
}
