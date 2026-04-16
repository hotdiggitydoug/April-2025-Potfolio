import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'

import './globals.css'

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inconsolata',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'William West — portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inconsolata.variable}>
      <body className="m-0">{children}</body>
    </html>
  )
}
