'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createGateToken } from '@/lib/portfolio-gate-token'
import { safePortfolioRedirectPath } from '@/lib/safe-portfolio-redirect'

const COOKIE_NAME = 'portfolio_gate'

/** Max cookie lifetime inside the signed blob (browser session cookie can still end earlier). */
const TOKEN_TTL_MS = 24 * 60 * 60 * 1000

function timingSafeEqualStrings(a: string, b: string): boolean {
  const ea = new TextEncoder().encode(a)
  const eb = new TextEncoder().encode(b)
  if (ea.length !== eb.length) return false
  let diff = 0
  for (let i = 0; i < ea.length; i++) diff |= ea[i]! ^ eb[i]!
  return diff === 0
}

export async function unlockGate(formData: FormData) {
  const password = String(formData.get('password') ?? '')
  const fromRaw = String(formData.get('from') ?? '/')
  const from = safePortfolioRedirectPath(fromRaw)

  const expected = process.env.PORTFOLIO_SITE_PASSWORD
  const secret = process.env.PORTFOLIO_GATE_SECRET

  if (!expected || !secret) {
    redirect(
      '/login?error=config&from=' + encodeURIComponent(safePortfolioRedirectPath(fromRaw)),
    )
  }

  if (!timingSafeEqualStrings(password, expected)) {
    redirect(
      '/login?error=invalid&from=' + encodeURIComponent(safePortfolioRedirectPath(fromRaw)),
    )
  }

  const token = await createGateToken(secret, TOKEN_TTL_MS)
  const cookieStore = await cookies()
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    // Omit maxAge → session cookie (cleared when the browser session ends).
  })

  redirect(from)
}
