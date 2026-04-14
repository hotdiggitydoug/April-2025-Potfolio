export type HomeProject = {
  id: string
  title: string
  description: string
  detailsHref: string
  imageSrc?: string
  imageAlt?: string
  /** How the logo fills the thumbnail; default cover */
  imageThumbFit?: 'cover' | 'contain'
  /** Optional classes on the thumbnail wrapper (e.g. bg-folio-200, padding) */
  imageThumbTileClassName?: string
  /** CSS object-position for raster logos (e.g. center 40%) */
  imageThumbObjectPosition?: string
  /** Tailwind scale class to zoom cropped logos (e.g. scale-[1.35]) */
  imageThumbScaleClassName?: string
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
    email: {
      label: 'Email',
      href: 'mailto:wdwesthree@gmail.com?subject=Portfolio%20inquiry',
    },
    linkedIn: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dougwest3/',
    },
  } satisfies HomeIdentity,
  work: {
    sectionHeading: '/ Work',
    confidentialityNote:
      'Due to client confidentiality agreements, select impact stories may use generalized client names and may omit supporting visual assets',
    employers: [
      {
        id: 'mckinsey',
        name: 'McKinsey & Company',
        projects: [
          {
            id: 'enterprise-ai',
            title: 'Enterprise AI Transformation',
            description:
              'Translating AI into tangible products, decision-making tools, and transformation strategies across industries.',
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
            id: 'us-foods',
            title: 'US Foods',
            description:
              'Modernized inventory management for restaurant operators, reducing manual effort and helping customers better control food costs.',
            detailsHref: '/work/us-foods',
            imageSrc: '/images/clients/US_Foods_logo.svg.png',
            imageAlt: 'US Foods logo',
            imageThumbFit: 'contain',
            imageThumbTileClassName: 'bg-portfolio-white p-1',
          },
          {
            id: 'virginia-tax',
            title: 'Virginia Tax',
            description:
              'Shaped a future-state digital service strategy to simplify tax professional workflows and modernize state tax interactions.',
            detailsHref: '/work/virginia-tax',
            imageSrc: '/images/clients/vatax.png',
            imageAlt: 'Virginia Tax logo',
            imageThumbFit: 'cover',
            imageThumbTileClassName: 'bg-portfolio-white',
          },
          {
            id: 'total-wine-more',
            title: 'Total Wine & More',
            description:
              'Improved digital shopping confidence and trust through secure account experiences and omnichannel UX enhancements.',
            detailsHref: '/work/total-wine-more',
            imageSrc: '/images/clients/total%20wine.png',
            imageAlt: 'Total Wine & More logo',
          },
        ],
      },
    ] satisfies HomeEmployer[],
  },
} as const
