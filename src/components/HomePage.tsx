import { PortfolioShell, SidebarIdentity } from '@/components/layout/PortfolioShell'
import { WorkSection } from '@/components/work/WorkSection'
import { homeContent } from '@/content/home'

export function HomePage() {
  const { identity, work } = homeContent
  const defaultOpen = work.employers[0]?.id ?? ''

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
        employers={[...work.employers]}
        defaultOpenEmployerId={defaultOpen}
      />
    </PortfolioShell>
  )
}
