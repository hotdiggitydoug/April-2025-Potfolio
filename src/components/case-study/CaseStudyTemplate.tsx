import type { CaseStudy } from '@/content/case-studies'
import { ChevronLeft } from 'lucide-react'
import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import Link from 'next/link'

/** In dev, append mtime so replaced files under /public still reload (browser cache bust). */
function publicAssetSrc(src: string): string {
  if (process.env.NODE_ENV !== 'development' || !src.startsWith('/')) {
    return src
  }
  const abs = path.join(process.cwd(), 'public', ...src.split('/').filter(Boolean))
  try {
    const mtime = fs.statSync(abs).mtimeMs
    return `${src}?v=${Math.floor(mtime)}`
  } catch {
    return src
  }
}

type CaseStudyTemplateProps = {
  study: CaseStudy
  backHref?: string
}

export function CaseStudyTemplate({
  study,
  backHref = '/',
}: CaseStudyTemplateProps) {
  return (
    <div className="min-h-svh bg-cream-100 font-sans text-foreground antialiased">
      <div className="mx-auto flex w-full max-w-[95rem] flex-col gap-layout px-layout py-page-y xl:px-page-x">
        <header className="flex w-full flex-col">
          <Link
            href={backHref}
            className="inline-flex w-fit items-center gap-tight text-base font-semibold text-portfolio-black no-underline visited:text-portfolio-black hover:text-portfolio-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100"
          >
            <ChevronLeft
              className="size-8 shrink-0"
              strokeWidth={2}
              aria-hidden
            />
            Back to work
          </Link>
        </header>

        <div className="flex w-full flex-col gap-tight leading-normal">
          <h1 className="text-case-title font-semibold text-portfolio-black">
            {study.title}
          </h1>
          <p className="text-2xl text-muted-foreground">{study.subtitle}</p>
        </div>

        <figure
          className="relative w-full shrink-0 overflow-hidden rounded-2xl bg-cream-500"
          style={{
            aspectRatio: `${study.heroImage.width} / ${study.heroImage.height}`,
          }}
        >
          <Image
            src={publicAssetSrc(study.heroImage.src)}
            alt={study.heroImage.alt}
            fill
            sizes="(max-width: 95rem) 100vw, 95rem"
            unoptimized
            priority
            className="object-cover"
          />
        </figure>

        <div className="grid w-full grid-cols-1 gap-section leading-normal lg:grid-cols-2 lg:gap-20">
          <div className="flex min-w-0 flex-col gap-section">
            <section className="flex flex-col gap-tight">
              <h2 className="text-xl font-semibold text-portfolio-black">
                Context
              </h2>
              <p className="text-xl font-normal text-muted-foreground">
                {study.context}
              </p>
            </section>
            <section className="flex flex-col gap-tight">
              <h2 className="text-xl font-semibold text-portfolio-black">
                Impact
              </h2>
              <p className="text-xl font-normal text-muted-foreground">
                {study.impact}
              </p>
            </section>
          </div>
          <section className="flex min-w-0 flex-col gap-cta-gap">
            <h2 className="text-xl font-semibold text-portfolio-black">
              Project Highlights
            </h2>
            <ul className="list-disc space-y-tight pl-8 text-xl font-normal text-muted-foreground marker:text-muted-foreground">
              {study.highlights.map((item, index) => (
                <li key={index} className="leading-normal">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
