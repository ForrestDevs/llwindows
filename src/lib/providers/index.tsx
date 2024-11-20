import React from 'react'

import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'
import { NuqsProvider } from './Nuqs'
import { LivePreviewListener } from '@/payload/components/LivePreviewListener'
export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <NuqsProvider>
      {/* <ThemeProvider>
        <HeaderThemeProvider> */}
      <LivePreviewListener />
      {children}
      {/* </HeaderThemeProvider>
      </ThemeProvider> */}
    </NuqsProvider>
  )
}
