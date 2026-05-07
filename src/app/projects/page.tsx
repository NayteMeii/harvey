import { sanityFetch } from '@/sanity/lib/live'
import { urlFor } from '@/sanity/lib/image'
import { AnimatedButton } from '../_components/AnimatedButton'
import { HeaderNav } from '../_components/HeaderNav'
import { ProjectsHero } from '../_components/ProjectsHero'
import { ScrubTextReveal } from '../_components/ScrubTextReveal'
import type { SanityImageSource } from '@sanity/image-url'

type ProjectDoc = {
  _id: string
  title: string
  image: SanityImageSource | null
  tags: string[] | null
  client: string | null
  year: number | null
  excerpt: string | null
}

const PROJECTS_QUERY = `*[_type == "portfolio"] | order(order asc) {
  _id,
  title,
  image,
  tags,
  client,
  year,
  excerpt
}`

export default async function ProjectsPage() {
  const { data } = await sanityFetch({ query: PROJECTS_QUERY })
  const projects = (data ?? []) as ProjectDoc[]

  return (
    <>
      <HeaderNav />
      <main className="relative z-10 mb-[500px] flex-1 bg-[#fafafa] xl:mb-[520px]">
        <ProjectsHero />

        <section className="overflow-x-hidden px-4 py-12 md:px-8 md:py-[120px]">
          <div className="flex w-full flex-col gap-6">
            <div className="flex flex-col gap-3 items-end">
              <span className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                [ selected work ]
              </span>
              <div className="h-px w-full bg-[#1f1f1f] opacity-20" />
            </div>

            <ScrubTextReveal className="bio-lines flex flex-col gap-0 uppercase md:pl-[clamp(40px,5vw,96px)]">
              <div className="text-center md:text-left">
                <p className="mb-1 text-center font-mono text-[14px] leading-[1.1] text-[#1f1f1f] md:hidden">
                  001
                </p>
                <div className="flex items-start justify-center gap-3 md:justify-start">
                  <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                    Work shaped
                  </span>
                  <span className="hidden shrink-0 font-mono text-[14px] leading-[1.1] text-[#1f1f1f] md:mt-1 md:block">
                    001
                  </span>
                </div>
              </div>
              <div className="bio-line-offset-1 text-center md:text-left">
                <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                  for brands
                </span>
              </div>
              <div className="bio-line-offset-2 text-center md:text-left">
                <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                  that need
                </span>
              </div>
              <div className="bio-line-offset-1 text-center md:text-left">
                <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                  to be seen.
                </span>
              </div>
            </ScrubTextReveal>
          </div>
        </section>

        <section className="px-4 py-12 md:px-8 md:py-20">
          <div className="mb-8 flex items-start justify-between md:mb-[61px]">
            <div className="flex items-start gap-[10px] uppercase">
              <h2
                className="font-light text-black"
                style={{
                  lineHeight: '0.86',
                  fontSize: 'clamp(44px, 8vw, 112px)',
                  letterSpacing: 'clamp(-3.52px, -0.56vw, -8.96px)',
                }}
              >
                Projects
              </h2>
              <span className="mt-1 shrink-0 font-mono text-[14px] leading-[1.1] text-[#1f1f1f]">002</span>
            </div>
            <div className="hidden h-[110px] w-[15px] shrink-0 items-center justify-center md:flex">
              <span className="-rotate-90 whitespace-nowrap font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                [ portfolio ]
              </span>
            </div>
          </div>

          {projects.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 md:gap-x-6 md:gap-y-20">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  imageUrl={project.image ? urlFor(project.image).width(1000).url() : null}
                  tall={index % 4 === 0 || index % 4 === 3}
                  offset={index % 2 === 1}
                />
              ))}
            </div>
          ) : (
            <div className="border-y border-black/20 py-10">
              <p className="max-w-[560px] text-[24px] font-light uppercase leading-[1.05] text-black" style={{ letterSpacing: '-0.96px' }}>
                No portfolio projects are published in Sanity yet.
              </p>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </>
  )
}

function ProjectCard({
  project,
  imageUrl,
  tall,
  offset,
}: {
  project: ProjectDoc
  imageUrl: string | null
  tall: boolean
  offset: boolean
}) {
  const heightClass = tall ? 'h-[390px] md:h-[744px]' : 'h-[390px] md:h-[620px]'

  return (
    <article className={`project-card group relative flex flex-col gap-[10px] ${offset ? 'md:mt-[140px]' : ''}`}>
      <div className={`project-card-media relative w-full overflow-hidden bg-[#1f1f1f] ${heightClass}`}>
        {imageUrl && (
          <img src={imageUrl} alt={project.title} className="project-card-image absolute inset-0 h-full w-full object-cover" />
        )}
        <div className="project-card-sweep absolute inset-0" aria-hidden="true" />
      </div>

      {project.tags && project.tags.length > 0 && (
        <div className="pointer-events-none absolute left-4 top-4 z-10 flex max-w-[calc(100%-32px)] flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="whitespace-nowrap rounded-full bg-white/55 px-3 py-1 text-[14px] font-medium leading-[1.1] text-[#111] backdrop-blur-[10px]"
              style={{ letterSpacing: '-0.56px' }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-2">
          <p className="project-card-title text-[24px] font-black uppercase leading-[1.1] tracking-[-0.96px] text-black md:text-[36px] md:tracking-[-1.44px]">
            {project.title}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]/70">
            {project.client && <span>{project.client}</span>}
            {project.year && <span>{project.year}</span>}
          </div>
          {project.excerpt && (
            <p className="max-w-[520px] text-[14px] leading-[1.3] text-[#1f1f1f]" style={{ letterSpacing: '-0.56px' }}>
              {project.excerpt}
            </p>
          )}
        </div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="project-card-arrow shrink-0">
          <path d="M8 24L24 8M24 8H13M24 8V19" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </article>
  )
}

function SiteFooter() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-0 h-[500px] overflow-hidden bg-black pt-12 xl:h-[520px]">
      <div className="xl:hidden flex flex-col gap-12 px-4">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="font-light italic uppercase text-white text-[24px]" style={{ letterSpacing: '-0.96px', lineHeight: '1.1' }}>
              Have a <strong className="font-black not-italic">project</strong> in mind?
            </p>
            <AnimatedButton href="/lets-talk" className="w-fit rounded-full border border-white px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white">
              Let&apos;s talk
            </AnimatedButton>
          </div>
          <div className="flex flex-col gap-4">
            {['Facebook', 'Instagram', 'X.com', 'Linkedin'].map((s) => (
              <p key={s} className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>{s}</p>
            ))}
          </div>
          <div className="w-full h-px bg-white/20" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-8">
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Licences</span>
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Privacy policy</span>
          </div>
          <p className="font-mono text-white text-[10px] uppercase" style={{ letterSpacing: '0' }}>[ Coded By Claude ]</p>
          <p
            className="font-semibold capitalize text-white"
            style={{ fontSize: '91px', letterSpacing: '-5.5px', lineHeight: '0.8' }}
          >
            H.Studio
          </p>
        </div>
      </div>

      <div className="hidden xl:flex flex-col gap-[120px] px-8">
        <div className="flex flex-col gap-12">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col gap-3 w-[298px]">
              <p className="font-light italic uppercase text-white text-[24px]" style={{ letterSpacing: '-0.96px', lineHeight: '1.1' }}>
                Have a <strong className="font-black not-italic">project</strong> in mind?
              </p>
              <AnimatedButton href="/lets-talk" className="w-fit rounded-full border border-white px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white">
                Let&apos;s talk
              </AnimatedButton>
            </div>
            <div className="text-center w-[298px]">
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Facebook</p>
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Instagram</p>
            </div>
            <div className="text-right w-[298px]">
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>X.com</p>
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Linkedin</p>
            </div>
          </div>
          <div className="w-full h-px bg-white/20" />
        </div>

        <div className="flex items-end justify-between">
          <div className="relative overflow-hidden shrink-0" style={{ height: '219px', width: '1093px' }}>
            <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[15px]">
              <p
                className="font-mono text-white text-[14px] uppercase whitespace-nowrap"
                style={{ transform: 'rotate(-90deg)', letterSpacing: '0' }}
              >
                [ Coded By Claude ]
              </p>
            </div>
            <p
              className="absolute font-semibold capitalize text-white whitespace-nowrap"
              style={{
                fontSize: '290px',
                letterSpacing: '-17.4px',
                lineHeight: '0.8',
                bottom: '-13px',
                left: '0',
              }}
            >
              H.Studio
            </p>
          </div>
          <div className="flex gap-[34px] pb-8 shrink-0">
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Licences</span>
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Privacy policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
