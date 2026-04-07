export type CaseStudy = {
  slug: string
  title: string
  subtitle: string
  heroImage: { src: string; alt: string; width: number; height: number }
  context: string
  impact: string
  highlights: string[]
}

export const caseStudiesBySlug: Record<string, CaseStudy> = {
  'enterprise-ai': {
    slug: 'enterprise-ai',
    title: 'Enterprise AI Transformation',
    subtitle:
      'Led 0→1 AI product development and transformation initiatives across industries.',
    heroImage: {
      src: '/images/case-studies/enterprise-ai-hero.svg',
      alt: '',
      width: 16,
      height: 9,
    },
    context:
      'Organizations are racing to apply large language models and agentic workflows without clear product strategy or governance. This work spanned multiple industries, partnering with leadership to define where AI could change operating models, customer journeys, and decision quality.',
    impact:
      'Helped executives prioritize bets, stand up cross-functional product squads, and ship early tools that grounded emerging AI capabilities in measurable business outcomes.',
    highlights: [
      'Facilitated 0→1 discovery workshops that translated fuzzy “AI opportunities” into scoped product hypotheses and pilot roadmaps',
      'Defined evaluation criteria and risk guardrails for model-backed experiences in regulated environments',
      'Partnered with engineering and design to prototype decision-support flows aligned to user trust and explainability needs',
      'Established feedback loops with operators and customers to iterate quickly without sacrificing control',
    ],
  },
  automotive: {
    slug: 'automotive',
    title: 'Top 3 Global Automotive OEM',
    subtitle:
      'Redesigned the parts and accessories eCommerce experience for a global automotive OEM.',
    heroImage: {
      src: '/images/case-studies/automotive-hero.png',
      alt:
        'Automotive parts and accessories eCommerce hero: vehicle-focused merchandising and shopping experience',
      width: 2656,
      height: 1200,
    },
    context:
      'A leading global automotive company needed to modernize the aftermarket parts and accessories omnichannel experience. Customers struggled to discover the right products across a complex catalog, and funnel drop-off pointed to navigation, trust, and merchandising gaps.',
    impact:
      'Improved product discovery, navigation, and conversion by aligning taxonomy, search, and PDP patterns with how owners and technicians actually shop.',
    highlights: [
      'Mapped end-to-end journeys for DIY owners, enthusiasts, and professional installers',
      'Redesigned navigation and listing templates to reduce dead-ends and support high-consideration purchases',
      'Pressure-tested proposed UX with quantitative concept tests and qualitative sessions',
      'Worked with technology partners to prioritize roadmap items that balanced speed with enterprise constraints',
    ],
  },
  medical: {
    slug: 'medical',
    title: 'Top 3 Medical Device Manufacturer',
    subtitle: 'Shaped the 0→1 eCommerce experience for a biosensor product',
    heroImage: {
      src: '/images/case-studies/medical-hero.png',
      alt:
        'Marketing hero for a glucose biosensor brand: person raising their arm to show a small sensor on the upper arm, beside bold headline copy about personalized nutrition',
      width: 3984,
      height: 1800,
    },
    context:
      'McKinsey partnered with a global healthcare leader to stand up a completely new business focused on glucose monitoring. The business sells self-injectable biosensors that pair with an app to show how your body reacts to food, stress, exercise and other activities. The product is currently available in the United States and United Kingdom.',
    impact:
      'Shaped the initial DTC product experience, informing early product, pricing, and subscription strategy',
    highlights: [
      'Validated customer willingness to pay and key sentiment drivers through quantitative testing in a new product category',
      'Identified subscription strategy and UX patterns by analyzing leading DTC experiences across and beyond the category',
      'Defined the foundational information architecture for the DTC eCommerce experience',
      'Designed and iterated on the end-to-end customer journey (Homepage → PDP → Checkout → Account), shaping the initial product direction',
    ],
  },
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudiesBySlug[slug]
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudiesBySlug)
}
