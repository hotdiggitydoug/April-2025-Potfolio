import { buttonVariants } from '@/components/ui/button'
import type { HomeIdentity } from '@/content/home'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type PortfolioShellProps = {
  sidebar: ReactNode
  children: ReactNode
}

export function PortfolioShell({ sidebar, children }: PortfolioShellProps) {
  return (
    <div className="box-border min-h-svh w-full bg-cream-100 lg:h-full lg:min-h-0 lg:overflow-hidden">
      <aside className="box-border flex min-h-svh flex-col items-stretch border-cement-100 p-layout lg:fixed lg:top-0 lg:bottom-0 lg:left-0 lg:z-20 lg:min-h-0 lg:w-1/3 lg:overflow-y-auto lg:overscroll-y-contain lg:border-r lg:border-solid">
        {sidebar}
      </aside>
      <main className="flex min-h-0 flex-col gap-section p-layout lg:ml-[33.333333vw] lg:h-full lg:overflow-y-auto lg:overscroll-y-contain">
        {children}
      </main>
    </div>
  )
}

/** No portrait / hero image — matches Figma sidebar (Frame 1191:133). */
export function SidebarIdentity({
  name,
  title,
  aboutHeading,
  about,
  email,
  linkedIn,
}: HomeIdentity) {
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col justify-between gap-0">
      <header className="flex shrink-0 flex-col gap-tight">
        <p className="text-base font-semibold uppercase tracking-wide text-portfolio-black">
          {name}
        </p>
        <p className="text-base font-semibold text-cement-500">{title}</p>
      </header>
      <div className="flex shrink-0 flex-col gap-section">
        <section className="flex flex-col gap-tight">
          <h2 className="text-base font-semibold uppercase tracking-wide text-portfolio-black">
            {aboutHeading}
          </h2>
          <p className="text-xl font-normal leading-normal text-cement-500">
            {about}
          </p>
        </section>
        <nav
          className="flex flex-wrap items-start gap-cta-gap"
          aria-label="Contact links"
        >
          <a
            href={email.href}
            className={cn(
              buttonVariants({ variant: 'secondary' }),
              'h-auto rounded-lg border border-solid border-cream-900 px-4 py-2 text-base font-semibold',
            )}
          >
            {email.label}
          </a>
          <a
            href={linkedIn.href}
            className={cn(
              buttonVariants({ variant: 'secondary' }),
              'h-auto rounded-lg border border-solid border-cream-900 px-4 py-2 text-base font-semibold',
            )}
            target="_blank"
            rel="noreferrer"
          >
            {linkedIn.label}
          </a>
        </nav>
      </div>
    </div>
  )
}
