import type { HomeEmployer } from '@/content/home'

import { ProjectCard } from './ProjectCard'

type WorkSectionProps = {
  sectionHeading: string
  confidentialityNote: string
  employers: HomeEmployer[]
}

export function WorkSection({
  sectionHeading,
  confidentialityNote,
  employers,
}: WorkSectionProps) {
  const projects = employers.flatMap((employer) => employer.projects)

  return (
    <section
      className="flex flex-col gap-section"
      aria-labelledby="work-heading"
      aria-describedby="work-confidentiality-note"
    >
      <div className="flex w-full flex-col gap-tight">
        <h2
          id="work-heading"
          className="text-base font-semibold uppercase tracking-wide text-portfolio-black"
        >
          {sectionHeading}
        </h2>
        <p
          id="work-confidentiality-note"
          className="w-full text-base font-normal italic leading-normal text-muted-foreground"
        >
          {confidentialityNote}
        </p>
      </div>
      <ul className="flex w-full flex-col gap-comfort">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
