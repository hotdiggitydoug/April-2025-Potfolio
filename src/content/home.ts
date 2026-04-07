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
  initials: string
  title: string
  aboutHeading: string
  about: string
  email: { label: string; href: string }
  linkedIn: { label: string; href: string }
}

export const homeContent = {
  identity: {
    name: 'Doug West',
    initials: 'DW',
    title: 'Lead Product Manager',
    aboutHeading: '/ About',
    about: `I partner with ambitious teams to study customer behavior, reimagine products, and launch new businesses. My work is rooted in an understanding of user needs, business objectives, and the rapidly evolving possibilities of technology.`,
    email: { label: 'Email', href: 'mailto:hello@example.com' },
    linkedIn: { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  } satisfies HomeIdentity,
  work: {
    sectionHeading: '/ Work',
    employers: [
      {
        id: 'mckinsey',
        name: 'McKinsey & Company',
        projects: [
          {
            id: 'enterprise-ai',
            title: 'Enterprise AI Transformation',
            description:
              'Led 0 to 1 AI product development and transformation initiatives across industries, translating emerging AI capabilities into real-world tools and decision systems',
            detailsHref: '/work/enterprise-ai',
            imageSrc: '/images/mckinsey-logo.png',
            imageAlt: 'McKinsey & Company logo',
          },
          {
            id: 'automotive',
            title: 'Top 3 Global Automotive OEM',
            description:
              'Redesigned the parts and accessories eCommerce experience for a global automotive OEM, improving product discovery, navigation, and conversion.',
            detailsHref: '/work/automotive',
            imageSrc: '/images/mckinsey-logo.png',
            imageAlt: 'McKinsey & Company logo',
          },
          {
            id: 'medical',
            title: 'Top 3 Medical Device Manufacturer',
            description:
              'Helped launch a new glucose monitoring business by designing the end-to-end DTC product experience.',
            detailsHref: '/work/medical',
            imageSrc: '/images/mckinsey-logo.png',
            imageAlt: 'McKinsey & Company logo',
          },
        ],
      },
      {
        id: 'captech',
        name: 'CapTech',
        projects: [
          {
            id: 'captech-placeholder-a',
            title: 'Placeholder project one',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            detailsHref: '#',
            imageSrc: '/images/project-placeholder.svg',
            imageAlt: '',
          },
          {
            id: 'captech-placeholder-b',
            title: 'Placeholder project two',
            description:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            detailsHref: '#',
            imageSrc: '/images/project-placeholder.svg',
            imageAlt: '',
          },
        ],
      },
      {
        id: 'team-one',
        name: 'Team One',
        projects: [
          {
            id: 'team-one-placeholder-a',
            title: 'Placeholder project one',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            detailsHref: '#',
            imageSrc: '/images/project-placeholder.svg',
            imageAlt: '',
          },
          {
            id: 'team-one-placeholder-b',
            title: 'Placeholder project two',
            description:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            detailsHref: '#',
            imageSrc: '/images/project-placeholder.svg',
            imageAlt: '',
          },
        ],
      },
      {
        id: 'other',
        name: 'Other',
        projects: [
          {
            id: 'other-placeholder-a',
            title: 'Placeholder project one',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            detailsHref: '#',
            imageSrc: '/images/project-placeholder.svg',
            imageAlt: '',
          },
          {
            id: 'other-placeholder-b',
            title: 'Placeholder project two',
            description:
              'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            detailsHref: '#',
            imageSrc: '/images/project-placeholder.svg',
            imageAlt: '',
          },
        ],
      },
    ] satisfies HomeEmployer[],
  },
} as const
