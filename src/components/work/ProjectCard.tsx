import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { HomeProject } from '@/content/home'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type ProjectCardProps = {
  project: HomeProject
  className?: string
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const src = project.imageSrc ?? '/images/project-placeholder.svg'

  return (
    <Card
      className={cn(
        'gap-section rounded-lg border border-solid border-cream-900 bg-cream-500 py-block shadow-none ring-0',
        className
      )}
    >
      <CardContent className="flex flex-col gap-section">
        <div className="flex flex-col gap-tight sm:flex-row sm:items-center">
          <Image
            src={src}
            alt={project.imageAlt ?? ''}
            className="size-8 shrink-0 rounded-lg object-cover"
            width={32}
            height={32}
          />
          <p className="text-xl font-semibold text-card-foreground">{project.title}</p>
        </div>
        <p className="text-xl text-muted-foreground">{project.description}</p>
        <div>
          <a
            href={project.detailsHref}
            className={cn(buttonVariants({ variant: 'default', size: 'sm' }))}
          >
            View Details
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
