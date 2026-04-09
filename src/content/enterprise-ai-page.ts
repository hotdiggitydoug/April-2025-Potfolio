export type EnterpriseAiFeaturedCard = {
  id: string
  industry: string
  tagline: string
  bullets: string[]
  /** Public path to featured icon SVG */
  iconSrc: string
}

export type EnterpriseAiContributionRow = {
  id: string
  industry: string
  focus: string
  contribution: string
  projectedOutcome: string
}

export const enterpriseAiPageContent = {
  featuredHeading: 'Featured product leadership',
  featuredCards: [
    {
      id: 'national-retailer',
      industry: 'National Retailer',
      tagline:
        'Designed a district manager tool that improved visit prioritization and helped field leaders focus on the stores that needed the most support',
      bullets: [
        'Built an end-to-end prototype for prioritizing store visits based on store performance signals',
        'Defined decision logic and requirements with business and operations leaders',
        'Partnered with engineering to align roadmap, feasibility, and rollout approach',
      ],
      iconSrc: '/icons/enterprise-ai/shopping-cart.svg',
    },
    {
      id: 'global-agribusiness',
      industry: 'Global Agribusiness',
      tagline:
        'Built an AI-powered merchandising assistant that helped buyers make faster, more informed soybean purchasing decisions.',
      bullets: [
        'Mapped merchandising workflows with purchasing and operations leaders',
        'Designed and launched a live AI assistant with recommendations and chat support',
        'Improved timing, pricing, and confidence in soybean purchasing decisions',
      ],
      iconSrc: '/icons/enterprise-ai/wheat.svg',
    },
    {
      id: 'public-sector',
      industry: 'Public Sector Client',
      tagline:
        'Created an AI-enabled operational readiness prototype that helped leaders visualize future-state workflows',
      bullets: [
        'Interviewed former armed service members to ground the experience in real-world operational decisions',
        'Designed an end-to-end prototype spanning IT, maintenance, aviation, and supply chain workflows',
        'Used the tool to align stakeholders around future-state capabilities and investment priorities',
      ],
      iconSrc: '/icons/enterprise-ai/account-balance.svg',
    },
  ] satisfies EnterpriseAiFeaturedCard[],
  contributionsHeading: 'Additional contributions',
  contributionRows: [
    {
      id: 'aerospace',
      industry: 'Aerospace & Defense',
      focus: 'Cost analysis & pricing',
      contribution:
        'Defined AI-supported workflows to automate cost analysis',
      projectedOutcome: '~$70M+ in potential cost avoidance',
    },
    {
      id: 'automotive-supplier',
      industry: 'Automotive Supplier',
      focus: 'Procurement & optimization',
      contribution:
        'Designed executive decision-making interfaces for AI systems',
      projectedOutcome: 'Foundation for enterprise transformation',
    },
    {
      id: 'steel',
      industry: 'Steel Manufacturer',
      focus: 'Pricing & production',
      contribution:
        'Designed interaction models for AI-supported pricing workflows',
      projectedOutcome: 'Targeting ~$500M+ EBITDA improvement',
    },
  ] satisfies EnterpriseAiContributionRow[],
}
