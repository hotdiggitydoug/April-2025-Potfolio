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
    <div className="box-border min-h-svh w-full bg-cream-100 lg:fixed lg:inset-0 lg:min-h-0 lg:overflow-hidden">
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
}: Omit<HomeIdentity, 'initials'>) {
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
              'h-auto rounded-lg border border-solid border-cream-900 px-4 py-2 text-base font-semibold transition-colors duration-200 ease-out motion-reduce:transition-none hover:border-cement-100 hover:bg-cream-550 hover:text-portfolio-black',
            )}
          >
            {email.label}
          </a>
          <a
            href={linkedIn.href}
            className={cn(
              buttonVariants({ variant: 'secondary' }),
              'h-auto rounded-lg border border-solid border-cream-900 px-4 py-2 text-base font-semibold transition-colors duration-200 ease-out motion-reduce:transition-none hover:border-cement-100 hover:bg-cream-550 hover:text-portfolio-black',
            )}
            target="_blank"
            rel="noreferrer"
          >
            {linkedIn.label}
          </a>
        </nav>
        <div className="flex items-center gap-tight self-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="size-4 shrink-0 fill-cream-900"
            aria-hidden
          >
            <path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z" />
          </svg>
          <span className="text-xs text-muted-foreground">
            Built with Figma + Cursor
          </span>
        </div>
      </div>
    </div>
  )
}
