import { Card, CardContent } from '@/components/ui/card'
import type { HomeProject } from '@/content/home'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
          'transition-colors duration-300 ease-out motion-reduce:transition-none group-hover/card:bg-folio-100',
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
            <span className="mt-sunk inline-flex items-center gap-tight text-base font-semibold text-muted-foreground">
              View Details
              <ArrowRight
                className="size-4 shrink-0 motion-reduce:animate-none group-hover/card:animate-card-cta-arrow"
                strokeWidth={2}
                aria-hidden
              />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
