import { CaseStudyShell } from '@/components/case-study/CaseStudyShell'
import {
  enterpriseAiPageContent,
  type EnterpriseAiContributionRow,
  type EnterpriseAiFeaturedCard,
} from '@/content/enterprise-ai-page'
import { cn } from '@/lib/utils'
import type { CaseStudy } from '@/content/case-studies'

type EnterpriseAiCaseStudyProps = {
  study: CaseStudy
  backHref?: string
}

function FeaturedCard({ card }: { card: EnterpriseAiFeaturedCard }) {
  return (
    <article className="flex min-h-0 flex-1 flex-col gap-5 rounded-lg border border-cream-900 bg-cream-500 p-6">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <img
            src={card.iconSrc}
            alt=""
            width={36}
            height={36}
            className="size-9 shrink-0"
            aria-hidden
          />
          <h3 className="text-base font-semibold text-portfolio-black">
            {card.industry}
          </h3>
        </div>
        <p className="text-base italic text-muted-foreground">{card.tagline}</p>
      </div>
      <ul className="list-disc space-y-tight pl-8 text-base leading-normal text-muted-foreground marker:text-muted-foreground">
        {card.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

function ContributionsTable({ rows }: { rows: readonly EnterpriseAiContributionRow[] }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[48rem] border-collapse text-left">
        <thead>
          <tr className="border-b border-cream-900">
            {(['Industry', 'Focus', 'Contribution', 'Projected Outcome'] as const).map(
              (label) => (
                <th
                  key={label}
                  scope="col"
                  className="pb-4 pr-10 text-base font-semibold text-portfolio-black last:pr-0"
                >
                  {label}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.id}
              className={cn(
                'border-b border-cream-900 text-base text-muted-foreground',
                index === rows.length - 1 && 'border-b-0',
              )}
            >
              <td className="py-5 pr-10 align-top font-normal">{row.industry}</td>
              <td className="py-5 pr-10 align-top font-normal">{row.focus}</td>
              <td className="py-5 pr-10 align-top font-normal">
                {row.contribution}
              </td>
              <td className="py-5 align-top font-normal last:pr-0">
                {row.projectedOutcome}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function EnterpriseAiCaseStudy({
  study,
  backHref = '/',
}: EnterpriseAiCaseStudyProps) {
  const c = enterpriseAiPageContent

  return (
    <CaseStudyShell backHref={backHref}>
      <div className="flex w-full flex-col gap-layout">
        <div className="flex flex-col gap-tight leading-normal">
          <h1 className="text-case-title font-semibold text-portfolio-black">
            {study.title}
          </h1>
          <p className="text-2xl text-muted-foreground">{study.subtitle}</p>
        </div>

        <div className="h-px w-full shrink-0 bg-cream-900" aria-hidden />

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-portfolio-black">
            {c.featuredHeading}
          </h2>
          <div className="flex flex-col gap-section lg:flex-row lg:items-stretch lg:gap-8">
            {c.featuredCards.map((card) => (
              <FeaturedCard key={card.id} card={card} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-portfolio-black">
            {c.contributionsHeading}
          </h2>
          <ContributionsTable rows={c.contributionRows} />
        </section>
      </div>
    </CaseStudyShell>
  )
}
