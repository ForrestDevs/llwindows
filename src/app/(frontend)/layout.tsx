import React from 'react'
import type { Metadata } from 'next'
import { cn } from '@/lib/utilities/cn'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { AdminBar } from '@/payload/components/AdminBar'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { LivePreviewListener } from '@/payload/components/LivePreviewListener'
import { Providers } from '@/lib/providers'
import { InitTheme } from '@/lib/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/lib/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
      <head>
        {/* <InitTheme /> */}
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        {/* <AdminBar
          adminBarProps={{
            preview: isEnabled,
          }}
        /> */}
        <LivePreviewListener />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || 'https://payloadcms.com'),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
