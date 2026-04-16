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
        'Built an end-to-end prototype enabling store prioritization based on performance signals',
        'Defined decision logic with business and operations leaders to guide where and when to act',
        'Partnered with engineering to align on feasibility and rollout approach',
      ],
      iconSrc: '/icons/enterprise-ai/shopping-cart.svg',
    },
    {
      id: 'global-agribusiness',
      industry: 'Global Agribusiness',
      tagline:
        'Built an AI-powered merchandising assistant that helped buyers make faster, more informed soybean purchasing decisions',
      bullets: [
        'Defined core purchasing workflows and decision points across merchandising and operations teams',
        'Designed and launched an AI-powered assistant with recommendations and chat support',
        'Iterated on interaction patterns to improve usability and drive adoption',
      ],
      iconSrc: '/icons/enterprise-ai/wheat.svg',
    },
    {
      id: 'public-sector',
      industry: 'Public Sector Client',
      tagline:
        'Created an AI-enabled operational readiness prototype that helped leaders visualize future-state workflows',
      bullets: [
        'Synthesized insights from former service members to define real-world decision-making requirements',
        'Designed an end-to-end prototype across IT, maintenance, aviation, and supply chain workflows',
        'Used the prototype to drive alignment on future-state capabilities and investment priorities',
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
