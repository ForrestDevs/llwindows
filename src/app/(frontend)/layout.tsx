import React from 'react'
import type { Metadata } from 'next'
import { cn } from '@/lib/utilities/cn'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { AdminBar } from '@/payload/components/AdminBar'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

import { Providers } from '@/lib/providers'
import { InitTheme } from '@/lib/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/lib/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'

import { Outfit } from 'next/font/google'
import getPayload from '@/lib/utilities/getPayload'

const outfit = Outfit({
  subsets: ['latin'],
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(outfit.className)} lang="en" suppressHydrationWarning>
      <head>
        {/* <InitTheme /> */}
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        {/* <AdminBar
          adminBarProps={{
            preview: isEnabled,
          }}
        /> */}
      </body>
    </html>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload()

  const initData = await payload.findGlobal({
    slug: 'site-settings',
  })

  return {
    title: initData?.general?.appName as string,
    description: initData?.general?.appDescription as string,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL),
    openGraph: mergeOpenGraph(),
    twitter: {
      card: 'summary_large_image',
      creator: 'L&L Window Cleaning Inc.',
    },
  }
}
