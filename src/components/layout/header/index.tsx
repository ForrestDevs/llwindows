import { HeaderClient } from './Component.client'
import { getCachedGlobal } from '@/lib/utilities/getGlobals'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Header } from '@/payload-types'
import { MobileMenuProvider } from './context'
import { MobileMenuButton } from './Component.client'

export async function Header() {
  const header = await getCachedGlobal('header')()

  return (
    <MobileMenuProvider>
      <header className="bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="flex items-center">
                <Image src="/logo.jpeg" alt="L&L Window Cleaning" width={100} height={100} />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              {/* MobileMenuButton is a client component that uses a shared state context to control HeaderClient */}
              <MobileMenuButton />
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link
                href="/test"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/test/about"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/test/services"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Services
              </Link>
              <Link
                href="/test/contacts"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
              <Link
                href="/test/blog"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Blog
              </Link>
              <Link
                href="/test/gallery"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Gallery
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                href="/contact"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* HeaderClient subscribes to the same context as MobileMenuButton */}
        <HeaderClient header={header} />
      </header>
    </MobileMenuProvider>
  )
}
