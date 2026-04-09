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
      'Since early 2025, I’ve been partnering with organizations to turn AI from a broad ambition into focused products and experiences that improve how people work and create meaningful enterprise value.',
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
  'us-foods': {
    slug: 'us-foods',
    title: 'US Foods',
    subtitle:
      'Modernized inventory management for restaurant operators, reducing manual effort and helping customers better control food costs',
    heroImage: {
      src: '/images/case-studies/US%20Foods%20hero.png',
      alt: 'US Foods case study hero',
      width: 2656,
      height: 1200,
    },
    context:
      'US Foods, a leading food service distributor, wanted to transform its outdated inventory experience into a modern digital tool that better supported restaurant operators managing complex kitchens, fluctuating inventory, and tight margins. The opportunity extended beyond usability improvements — the business saw inventory as a strategic service that could deepen customer loyalty and position Foods of America as a more valuable operational partner.',
    impact:
      'Designed a mobile-first inventory experience that made stock counting, cost tracking, and inventory management faster and more intuitive for restaurant operators. The new experience reduced friction in day-to-day workflows, improved confidence in food cost calculations, and created a stronger digital value proposition that supported customer retention.',
    highlights: [
      'Led end-to-end UX for a redesigned inventory management experience across desktop and mobile',
      'Conducted interviews and workshops with 15–20 restaurant operators, consultants, and internal stakeholders to uncover workflow pain points',
      'Built deep domain understanding of restaurant operations, food costing, and inventory processes to inform product decisions',
      'Simplified key workflows including product entry, editing on-the-fly, sorting, grouping, and real-time count totals',
      'Designed a mobile-first shelf-to-sheet counting experience optimized for operators moving through kitchens',
      'Introduced food cost visibility and reporting features to help customers better manage profitability',
      'Helped position Foods of America as a business advisor, not just a distributor, through more valuable digital services',
      'Partnered with executives, IT, and operations teams to align roadmap priorities and prepare for launch',
    ],
  },
  'virginia-tax': {
    slug: 'virginia-tax',
    title: 'Virginia Tax',
    subtitle:
      'Shaped a future-state digital service strategy to simplify tax professional workflows and modernize state tax interactions',
    heroImage: {
      src: '/images/case-studies/VA%20Tax%20hero.png',
      alt: 'Virginia Tax case study hero',
      width: 2656,
      height: 1200,
    },
    context:
      'In response to a Virginia House bill, Virginia Tax engaged CapTech to evaluate the opportunity to create a dedicated digital portal for tax professionals. The existing experience was fragmented, creating friction for preparers, delayed issue resolution, and limited visibility into taxpayer needs.',
    impact:
      'Delivered a research-backed service vision and roadmap that helped Virginia Tax better understand pain points across the tax professional journey and identify opportunities to improve digital support, reduce administrative burden, and strengthen compliance experiences.',
    highlights: [
      'Interviewed 39 internal stakeholders across Virginia Tax to uncover operational pain points and service gaps',
      'Conducted heuristic evaluations of current digital experiences to identify usability and accessibility issues',
      'Benchmarked tax professional experiences across five other states and the IRS to identify best practices',
      'Synthesized feedback from 140+ tax professionals into prioritized design opportunities',
      'Partnered with leadership to define portal requirements and inform a multi-year digital roadmap',
    ],
  },
  'total-wine-more': {
    slug: 'total-wine-more',
    title: 'Total Wine & More',
    subtitle:
      'Improved digital shopping confidence and trust through secure account experiences and omnichannel UX enhancements',
    heroImage: {
      src: '/images/case-studies/Total%20wine%20hero.png',
      alt: 'Total Wine & More case study hero',
      width: 2656,
      height: 1200,
    },
    context:
      'As a consultant with CapTech, I embedded with Total Wine & More\u2019s digital team to support initiatives across eCommerce strategy, UX research, and product design. The business was focused on improving customer trust, personalization, and omnichannel convenience in a highly competitive retail environment.',
    impact:
      'Helped strengthen key moments across the digital customer journey by improving account security, informing location-based shopping experiences, and identifying merchandising opportunities that better aligned digital touchpoints with in-store behavior.',
    highlights: [
      'Designed two-factor authentication and account verification flows to reduce fraudulent credit card activity',
      'Evaluated omnichannel retailer approaches to geo-targeting and store preference experiences',
      'Benchmarked lists and favorites patterns across leading eCommerce brands to inform roadmap decisions',
      'Explored PLP merchandising and badging strategies to improve discoverability during key sales periods',
      'Presented recommendations and design rationale to digital executives in weekly product reviews',
    ],
  },
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudiesBySlug[slug]
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudiesBySlug)
}
