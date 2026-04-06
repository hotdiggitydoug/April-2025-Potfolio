import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-open-sans',
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
    <html lang="en" className={openSans.variable}>
      <body className="m-0">{children}</body>
    </html>
  )
}
