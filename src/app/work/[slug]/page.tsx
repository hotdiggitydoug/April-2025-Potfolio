import { EnterpriseAiCaseStudy } from '@/components/case-study/EnterpriseAiCaseStudy'
import { CaseStudyTemplate } from '@/components/case-study/CaseStudyTemplate'
import {
  getAllCaseStudySlugs,
  getCaseStudy,
} from '@/content/case-studies'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) {
    return { title: 'Case study' }
  }
  return {
    title: `${study.title} — Portfolio`,
    description: study.subtitle,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) {
    notFound()
  }

  if (slug === 'enterprise-ai') {
    return <EnterpriseAiCaseStudy study={study} />
  }

  return <CaseStudyTemplate study={study} />
}
