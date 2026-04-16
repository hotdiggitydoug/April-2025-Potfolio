/** Prevent open redirects and post-login loops back to `/login`. */
export function safePortfolioRedirectPath(from: string | undefined): string {
  if (!from || !from.startsWith('/') || from.startsWith('//')) return '/'
  if (from === '/login' || from.startsWith('/login?')) return '/'
  return from
}
