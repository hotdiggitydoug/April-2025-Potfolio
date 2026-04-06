export type HomeProject = {
  id: string
  title: string
  description: string
  detailsHref: string
  imageSrc?: string
  imageAlt?: string
}

export type HomeEmployer = {
  id: string
  name: string
  projects: HomeProject[]
}

/** Left column only — Figma Frame 1191:133 has no portrait / photo. */
export type HomeIdentity = {
  name: string
  title: string
  aboutHeading: string
  about: string
  email: { label: string; href: string }
  linkedIn: { label: string; href: string }
}

export const homeContent = {
  identity: {
    name: 'Doug West',
    title: 'Lead Product Manager',
    aboutHeading: 'About',
    about: `I partner with ambitious teams to study customer behavior, reimagine products, and launch new businesses. My work is rooted in an understanding of user needs, business objectives, and the rapidly evolving possibilities of technology.`,
    email: { label: 'Email', href: 'mailto:hello@example.com' },
    linkedIn: { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  } satisfies HomeIdentity,
  work: {
    sectionHeading: 'Work',
    employers: [
      {
        id: 'mckinsey',
        name: 'McKinsey & Company',
        projects: [
          {
            id: 'enterprise-ai',
            title: 'Enterprise AI Transformation',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            detailsHref: '#',
            imageSrc: '/images/project-placeholder.svg',
            imageAlt: '',
          },
          {
            id: 'automotive',
            title: 'Top 3 Global Automotive OEM',
            description:
              'Partnered with a leading global automotive company to modernize the aftermarket parts and accessories omnichanel experience',
            detailsHref: '#',
            imageSrc: '/images/project-placeholder.svg',
            imageAlt: '',
          },
          {
            id: 'medical',
            title: 'Top 3 Medical Device Manufacturer',
            description:
              'Partnered with a global healthcare leader to stand up a completely new business focused on glucose monitoring',
            detailsHref: '#',
            imageSrc: '/images/project-placeholder.svg',
            imageAlt: '',
          },
        ],
      },
      {
        id: 'captech',
        name: 'CapTech',
        projects: [],
      },
      {
        id: 'team-one',
        name: 'Team One',
        projects: [],
      },
      {
        id: 'other',
        name: 'Other',
        projects: [],
      },
    ] satisfies HomeEmployer[],
  },
} as const
