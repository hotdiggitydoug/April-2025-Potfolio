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
  confidentialityNote: string
  employers: HomeEmployer[]
}

export function WorkSection({
  sectionHeading,
  confidentialityNote,
  employers,
}: WorkSectionProps) {
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
      <Accordion
        multiple
        defaultValue={employers.map((employer) => employer.id)}
        className="w-full border-0 shadow-none"
      >
        {employers.map((employer) => (
          <AccordionItem key={employer.id} value={employer.id}>
            <Separator className="mb-0 bg-cement-100" />
            <AccordionTrigger className="text-2xl font-semibold text-cement-500 hover:no-underline">
              <span className="pr-tight text-left">{employer.name}</span>
            </AccordionTrigger>
            <AccordionContent className="pt-sunk">
              {employer.projects.length > 0 ? (
                <ul className="flex flex-col gap-comfort pb-loft">
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
