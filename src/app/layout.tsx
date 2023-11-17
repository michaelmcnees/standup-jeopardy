import type { Metadata } from 'next'

import { Inter as FontSans } from 'next/font/google'

import { cn } from '../lib/utils'
import './globals.css'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Standup Jeopardy!',
  description: "Energize your team's daily check-ins with a fun game of Jeopardy!"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background font-sans antialiased dark', fontSans.variable)}>{children}</body>
    </html>
  )
}
