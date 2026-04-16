import { Card, CardContent } from '@/components/ui/card'
import type { HomeProject } from '@/content/home'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

/** Lucide `arrow-right` paths — avoids `lucide-react` on `/` (same rationale as CaseStudyShell). */
function CardCtaArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

type ProjectCardProps = {
  project: HomeProject
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const src = project.imageSrc ?? '/images/project-placeholder.svg'
  const thumbFit = project.imageThumbFit ?? 'cover'

  return (
    <Link
      data-slot="button"
      href={project.detailsHref}
      aria-label={`${project.title} — view details`}
      className={cn(
        'group/card block rounded-lg no-underline outline-none',
        'text-inherit visited:text-inherit hover:no-underline',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-folio-200',
        className
      )}
    >
      <Card
        className={cn(
          'h-full gap-section rounded-lg border border-solid border-border bg-card py-block shadow-none ring-0',
          'transition-colors duration-300 ease-out motion-reduce:transition-none',
          'group-hover/card:border-folio-900 group-hover/card:bg-card',
        )}
      >
        <CardContent className="flex flex-row items-start gap-section">
          <div
            className={cn(
              'size-10 shrink-0 overflow-hidden rounded-lg',
              'transition-[width,height] duration-300 ease-out motion-reduce:transition-none',
              'group-hover/card:size-11',
              project.imageThumbTileClassName,
            )}
          >
            <Image
              src={src}
              alt={project.imageAlt ?? ''}
              className={cn(
                'size-full',
                thumbFit === 'contain' ? 'object-contain' : 'object-cover',
                project.imageThumbScaleClassName,
              )}
              width={44}
              height={44}
              style={
                project.imageThumbObjectPosition
                  ? { objectPosition: project.imageThumbObjectPosition }
                  : undefined
              }
            />
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-tight text-left">
            <p className="w-full text-xl font-semibold text-card-foreground">
              {project.title}
            </p>
            <p className="w-full text-xl text-muted-foreground">
              {project.description}
            </p>
            <span
              className={cn(
                'mt-sunk inline-flex items-center gap-tight text-base font-semibold text-muted-foreground',
                'transition-colors duration-300 ease-out motion-reduce:transition-none',
                'group-hover/card:text-folio-900',
              )}
            >
              View Details
              <CardCtaArrowIcon className="size-4 shrink-0 text-inherit motion-reduce:animate-none group-hover/card:animate-card-cta-arrow" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
