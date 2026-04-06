import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import type { HomeEmployer } from '@/content/home'

import { ProjectCard } from './ProjectCard'

type WorkSectionProps = {
  sectionHeading: string
  employers: HomeEmployer[]
  defaultOpenEmployerId: string
}

export function WorkSection({
  sectionHeading,
  employers,
  defaultOpenEmployerId,
}: WorkSectionProps) {
  return (
    <section className="flex flex-col gap-section" aria-labelledby="work-heading">
      <h2
        id="work-heading"
        className="text-base font-semibold uppercase tracking-wide text-portfolio-black"
      >
        {sectionHeading}
      </h2>
      <Accordion
        defaultValue={[defaultOpenEmployerId]}
        className="w-full border-0 shadow-none"
      >
        {employers.map((employer) => (
          <AccordionItem key={employer.id} value={employer.id} className="border-0">
            <Separator className="mb-0 bg-cement-100" />
            <AccordionTrigger className="text-2xl font-semibold text-cement-500 hover:no-underline">
              <span className="pr-tight text-left">{employer.name}</span>
            </AccordionTrigger>
            <AccordionContent>
              {employer.projects.length > 0 ? (
                <ul className="flex flex-col gap-block pb-section">
                  {employer.projects.map((project) => (
                    <li key={project.id}>
                      <ProjectCard project={project} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
