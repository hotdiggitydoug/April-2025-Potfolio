import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lato',
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
    <html lang="en" className={lato.variable}>
      <body className="m-0">{children}</body>
    </html>
  )
}
