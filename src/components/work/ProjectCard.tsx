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

  return (
    <Link
      data-slot="button"
      href={project.detailsHref}
      aria-label={`${project.title} — view details`}
      className={cn(
        'group/card block rounded-lg no-underline outline-none',
        'text-inherit visited:text-inherit hover:no-underline',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100',
        className
      )}
    >
      <Card
        className={cn(
          'h-full gap-section rounded-lg border border-solid border-cream-900 bg-cream-500 py-block shadow-none ring-0',
          'transition-colors duration-300 ease-out motion-reduce:transition-none group-hover/card:bg-cream-550',
        )}
      >
        <CardContent className="flex flex-col gap-section">
          <div className="flex flex-col gap-sunk sm:flex-row sm:items-center">
            <div
              className={cn(
                'size-10 shrink-0 overflow-hidden rounded-lg',
                'transition-[width,height] duration-300 ease-out motion-reduce:transition-none',
                'group-hover/card:size-11',
              )}
            >
              <Image
                src={src}
                alt={project.imageAlt ?? ''}
                className="size-full object-cover"
                width={44}
                height={44}
              />
            </div>
            <p className="min-w-0 flex-1 text-xl font-semibold text-card-foreground">
              {project.title}
            </p>
          </div>
          <div className="flex flex-col gap-tight">
            <p className="text-xl text-muted-foreground">{project.description}</p>
            <span className="inline-flex items-center gap-tight self-start text-base font-semibold text-muted-foreground">
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
