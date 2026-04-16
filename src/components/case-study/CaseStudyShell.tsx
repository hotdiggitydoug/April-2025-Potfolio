import Link from 'next/link'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/** Inline icon (Lucide `arrow-left` paths) — keeps `/work/[slug]` off `lucide-react` in the server bundle, avoiding flaky missing `vendor-chunks/lucide-react.js` in dev. */
function BackArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={28}
      height={28}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

type CaseStudyShellProps = {
  backHref?: string
  children: ReactNode
  /** Off-white canvas so white panels (e.g. cards) separate from the page */
  canvas?: 'default' | 'subtle'
}

export function CaseStudyShell({
  backHref = '/',
  children,
  canvas = 'default',
}: CaseStudyShellProps) {
  return (
    <div
      className={cn(
        'min-h-svh font-sans text-foreground antialiased',
        canvas === 'subtle' ? 'bg-folio-100' : 'bg-background',
      )}
    >
      <div className="mx-auto flex w-full max-w-[95rem] flex-col gap-layout px-layout py-page-y xl:px-page-x">
        <header className="flex w-full flex-col">
          <Link
            href={backHref}
            className={cn(
              'group inline-flex w-fit items-center gap-tight text-base font-semibold text-portfolio-black no-underline transition-colors duration-200 ease-out visited:text-portfolio-black hover:text-folio-500 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
              canvas === 'subtle'
                ? 'focus-visible:ring-offset-folio-100'
                : 'focus-visible:ring-offset-background',
            )}
          >
            <BackArrowIcon className="size-7 shrink-0" />
            Back to work
          </Link>
        </header>
        {children}
      </div>
    </div>
  )
}
