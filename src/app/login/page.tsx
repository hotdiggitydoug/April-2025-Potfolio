import Link from 'next/link'
import { redirect } from 'next/navigation'

import { cookies } from 'next/headers'

import { unlockGate } from '@/app/login/actions'
import { verifyGateCookie } from '@/lib/portfolio-gate-token'
import { safePortfolioRedirectPath } from '@/lib/safe-portfolio-redirect'

const COOKIE_NAME = 'portfolio_gate'

type LoginPageProps = {
  searchParams: Promise<{ from?: string; error?: string }>
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const params = await searchParams
  const from = safePortfolioRedirectPath(params.from)
  const secret = process.env.PORTFOLIO_GATE_SECRET
  const token = (await cookies()).get(COOKIE_NAME)?.value

  if (secret && token && (await verifyGateCookie(token, secret))) {
    redirect(from)
  }

  const error = params.error
  const errorMessage =
    error === 'invalid'
      ? 'That password is incorrect. Try again.'
      : error === 'config'
        ? 'This site is not fully configured yet (missing environment variables).'
        : null

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background px-layout py-page-y">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 shadow-none">
        <h1 className="text-2xl font-semibold tracking-tight text-portfolio-black">
          Portfolio access
        </h1>
        <p className="mt-tight text-base text-muted-foreground">
          Enter the password you were given to view this site.
        </p>
        {errorMessage ? (
          <p className="mt-block text-base text-destructive" role="alert">
            {errorMessage}
          </p>
        ) : null}
        <form action={unlockGate} className="mt-section flex flex-col gap-block">
          <input type="hidden" name="from" value={from} />
          <label className="flex flex-col gap-tight">
            <span className="text-sm font-medium text-foreground">Password</span>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="rounded-lg border border-input bg-background px-3 py-2 text-base text-foreground outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
            />
          </label>
          <button
            type="submit"
            className="rounded-lg bg-primary px-4 py-2 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Continue
          </button>
        </form>
      </div>
      <p className="mt-comfort text-sm text-muted-foreground">
        Wrong place?{' '}
        <Link href="https://dougwest.xyz" className="font-medium text-primary underline-offset-4 hover:underline">
          Back to dougwest.xyz
        </Link>
      </p>
    </div>
  )
}
