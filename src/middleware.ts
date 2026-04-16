import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { verifyGateCookie } from '@/lib/portfolio-gate-token'

const COOKIE_NAME = 'portfolio_gate'

function isPublicPath(pathname: string): boolean {
  if (pathname === '/login') return true
  if (pathname.startsWith('/_next/')) return true
  if (pathname === '/favicon.ico') return true
  return false
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (isPublicPath(pathname)) {
    return NextResponse.next()
  }

  const secret = process.env.PORTFOLIO_GATE_SECRET
  const password = process.env.PORTFOLIO_SITE_PASSWORD

  if (!secret || !password) {
    if (process.env.NODE_ENV === 'production') {
      return new NextResponse(
        'Portfolio gate is not configured. Set PORTFOLIO_SITE_PASSWORD and PORTFOLIO_GATE_SECRET on the host.',
        { status: 503, headers: { 'content-type': 'text/plain; charset=utf-8' } },
      )
    }
    return NextResponse.next()
  }

  const token = request.cookies.get(COOKIE_NAME)?.value
  if (token && (await verifyGateCookie(token, secret))) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = '/login'
  url.search = ''
  const from = pathname + (request.nextUrl.search || '')
  url.searchParams.set('from', from.startsWith('/') ? from : `/${from}`)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}
