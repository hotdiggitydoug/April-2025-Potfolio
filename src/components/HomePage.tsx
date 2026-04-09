import { PortfolioShell, SidebarIdentity } from '@/components/layout/PortfolioShell'
import { WorkSection } from '@/components/work/WorkSection'
import { homeContent } from '@/content/home'

export function HomePage() {
  const { identity, work } = homeContent

  return (
    <PortfolioShell
      sidebar={
        <SidebarIdentity
          name={identity.name}
          title={identity.title}
          aboutHeading={identity.aboutHeading}
          about={identity.about}
          email={identity.email}
          linkedIn={identity.linkedIn}
        />
      }
    >
      <WorkSection
        sectionHeading={work.sectionHeading}
        confidentialityNote={work.confidentialityNote}
        employers={[...work.employers]}
      />
    </PortfolioShell>
  )
}
