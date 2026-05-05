import { sanityFetch } from '@/sanity/lib/live'
import { urlFor } from '@/sanity/lib/image'
import { AboutPortraitReveal } from './_components/AboutPortraitReveal'
import { AnimatedButton } from './_components/AnimatedButton'
import { CameraPhotoBreak } from './_components/CameraPhotoBreak'
import { DesktopTestimonials } from './_components/DesktopTestimonials'
import { HeaderNav } from './_components/HeaderNav'
import { Hero } from './_components/Hero'
import { MobileNewsSlider } from './_components/MobileNewsSlider'
import { MobileTestimonials } from './_components/MobileTestimonials'
import { ScrollLeftShift } from './_components/ScrollLeftShift'
import { ScrubTextReveal } from './_components/ScrubTextReveal'
import { ServiceItem } from './_components/ServiceItem'
import type { SanityImageSource } from '@sanity/image-url'

const SERVICES = [
  {
    number: '1',
    title: 'Brand Discovery',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/8a76528a-46ef-43cf-bccb-e24e13b1a026',
  },
  {
    number: '2',
    title: 'Web Design & Dev',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/7b569c09-7e90-4a51-9bfc-9b47b0ede0fe',
  },
  {
    number: '3',
    title: 'Marketing',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/3a3eeb5c-5af8-449e-84bf-20e1013d9b77',
  },
  {
    number: '4',
    title: 'Photography',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/45eb3295-a439-4150-b936-b68c5ae8c8d2',
  },
]

const NEWS_ITEMS = [
  {
    image: 'https://www.figma.com/api/mcp/asset/137b7e85-9b18-456f-8748-0dee5f88c783',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/0efa4f7b-a5f0-4228-a524-c4db6ae1b760',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/908ef34f-64db-41d0-8a9e-68b29d32d913',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Marko Stojković',
    quote: 'A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.',
    logo: 'https://www.figma.com/api/mcp/asset/573c1093-66f1-40c7-bb4c-ca8bb31a0c4f',
    rotate: '-6.85deg',
    pos: { left: 'clamp(148px, 12vw, 188px)', top: '142px' },
    drift: { x: -132, y: -48 },
  },
  {
    name: 'Lukas Weber',
    quote: 'Professional, precise, and incredibly fast at handling complex product visualizations and templates.',
    logo: 'https://www.figma.com/api/mcp/asset/52e91228-25cb-45b1-8262-c68fbc73d3ba',
    rotate: '2.9deg',
    pos: { left: 'clamp(600px, 58vw, 676px)', top: '272px' },
    drift: { x: 84, y: -34 },
  },
  {
    name: 'Sarah Jenkins',
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: 'https://www.figma.com/api/mcp/asset/e23fa04f-5828-4414-9999-96b41651329e',
    rotate: '2.23deg',
    pos: { left: '245px', top: '548px' },
    drift: { x: -120, y: 52 },
  },
  {
    name: 'Sofia Martínez',
    quote: 'An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.',
    logo: 'https://www.figma.com/api/mcp/asset/2a70d83f-ea16-4ce8-b777-18d4f152db1e',
    rotate: '-4.15deg',
    pos: { left: 'clamp(660px, 62vw, 840px)', top: '620px' },
    drift: { x: 34, y: 42 },
  },
]

type PortfolioDoc = {
  _id: string
  title: string
  image: SanityImageSource | null
  tags: string[] | null
}

const PORTFOLIO_QUERY = `*[_type == "portfolio"] | order(order asc) { _id, title, image, tags }`

export default async function Home() {
  const { data } = await sanityFetch({ query: PORTFOLIO_QUERY })
  const projects = (data ?? []) as PortfolioDoc[]

  return (
    <>
    <HeaderNav />
    <main className="relative z-10 mb-[340px] flex-1 bg-[#fafafa] xl:mb-[520px]">

      <Hero />

      {/* ── Kinetic bio section ── */}
      <section className="overflow-x-hidden px-4 md:px-8 py-12 md:py-[120px]">
        <div className="flex flex-col gap-6 w-full">

          {/* [ 8+ years in industry ] + divider */}
          <div className="flex flex-col gap-3 items-end">
            <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
              [ 8+ years in industry ]
            </span>
            <div className="w-full h-px bg-[#1f1f1f] opacity-20" />
          </div>

          {/* Staggered lines */}
          <ScrubTextReveal className="bio-lines flex flex-col gap-0 uppercase">

            {/* Line 1 — 001 label + A creative director / */}
            <div className="text-center md:text-left md:pl-0">
              {/* 001 sits above the text on mobile */}
              <p className="md:hidden font-mono text-[14px] text-[#1f1f1f] leading-[1.1] text-center mb-1">
                001
              </p>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                  A creative director&nbsp;&nbsp;&nbsp;/
                </span>
                {/* 001 sits inline on desktop */}
                <span className="hidden md:block font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mt-1 shrink-0">
                  001
                </span>
              </div>
            </div>

            {/* Line 2 — Photographer */}
            <div className="bio-line-offset-1 text-center md:text-left">
              <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                Photographer
              </span>
            </div>

            {/* Line 3 — Born & raised (& in Playfair italic) */}
            <div className="bio-line-offset-2 text-center md:text-left">
              <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                Born{" "}
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: 0,
                  }}
                >
                  &amp;
                </span>
                {" "}raised
              </span>
            </div>

            {/* Line 4 — on the south side */}
            <div className="text-center md:text-left md:pl-0">
              <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                on the south side
              </span>
            </div>

            {/* Line 5 — of chicago. + [ creative freelancer ] */}
            <div className="bio-line-offset-2 text-center md:text-left">
              {/* Desktop: label inline after text */}
              <div className="hidden md:flex items-start gap-6">
                <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                  of chicago.
                </span>
                <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] whitespace-nowrap mt-[26px] shrink-0">
                  [ creative freelancer ]
                </span>
              </div>
              {/* Mobile: label below text */}
              <div className="md:hidden flex flex-col items-center">
                <span
                  className="font-light text-[32px] leading-[0.84] text-black whitespace-nowrap"
                  style={{ letterSpacing: "-0.08em" }}
                >
                  of chicago.
                </span>
                <p className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mt-2">
                  [ creative freelancer ]
                </p>
              </div>
            </div>

          </ScrubTextReveal>
        </div>
      </section>

      {/* ── About section ── */}
      <section className="px-4 md:px-8 py-12 md:py-20 overflow-hidden">

        {/* Mobile/tablet layout — stacked */}
        <div className="flex flex-col gap-6 xl:hidden">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">002</span>
            <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">[ About ]</span>
          </div>
          {/* Quote block with corner brackets */}
          <ScrollLeftShift desktopOnly>
            <QuoteBrackets>
              <p className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f]" style={{ letterSpacing: "-0.56px" }}>
                Placeholder paragraph one. This is where you introduce yourself — your background,
                your passion for your craft, and what drives you creatively. Two to three sentences
                work best here. Placeholder paragraph two. Here you can describe your technical
                approach, how you collaborate with clients, or what sets your work apart from others
                in your field.
              </p>
            </QuoteBrackets>
          </ScrollLeftShift>
          {/* Portrait — full width */}
          <AboutPortraitReveal className="w-full" style={{ aspectRatio: "343/483" }} />
        </div>

        {/* Desktop layout — two columns */}
        <div className="hidden xl:grid xl:grid-cols-[393px_minmax(0,1fr)] w-full min-h-[614px] gap-8">

          {/* Left: [ About ] label */}
          <div className="pt-0">
            <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">[ About ]</span>
          </div>

          {/* Right: quote (bottom) + photo (right) */}
          <div className="grid min-w-0 grid-cols-[minmax(260px,465px)_minmax(280px,436px)] items-end gap-8 lg:flex lg:flex-1">

            {/* Quote block at bottom-left of content area */}
            <div className="min-w-0 self-end lg:flex-1 lg:max-w-[465px]">
              <ScrollLeftShift>
                <QuoteBrackets>
                  <p className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f] py-3" style={{ letterSpacing: "-0.56px" }}>
                    Placeholder paragraph one. This is where you introduce yourself — your background,
                    your passion for your craft, and what drives you creatively. Two to three sentences
                    work best here. Placeholder paragraph two. Here you can describe your technical
                    approach, how you collaborate with clients, or what sets your work apart from others
                    in your field.
                  </p>
                </QuoteBrackets>
              </ScrollLeftShift>
            </div>

            {/* Portrait photo */}
            <div className="flex items-start gap-6 h-full min-w-0 lg:shrink-0">
              <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] shrink-0">002</span>
              <AboutPortraitReveal className="h-full w-full lg:w-[436px]" />
            </div>

          </div>
        </div>

      </section>

      {/* ── Photo break section ── */}
      <CameraPhotoBreak />

      {/* ── Services / Deliverables section ── */}
      <section
        className="bg-black px-4 md:px-8 py-12 md:py-20 flex flex-col gap-8 md:gap-12"
        id="services"
        data-nav-theme="light"
      >
        {/* Section label */}
        <p className="font-mono text-[14px] text-white uppercase leading-[1.1]">
          [ services ]
        </p>

        {/* Header: [4] ←→ Deliverables */}
        <div className="flex items-center justify-between w-full font-light uppercase text-white leading-none text-[32px] tracking-[-2.56px] md:text-[96px] md:tracking-[-7.68px] whitespace-nowrap">
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        {/* Service list */}
        <div className="flex flex-col gap-12 w-full">
          {SERVICES.map((service) => (
            <ServiceItem key={service.number} {...service} />
          ))}
        </div>
      </section>

      {/* ── Selected Work / Portfolio section ── */}
      <section className="px-4 md:px-8 py-12 md:py-20" id="projects">

        {/* Mobile: [ portfolio ] label above header */}
        <p className="md:hidden font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1] mb-4">
          [ portfolio ]
        </p>

        {/* Header */}
        <div className="flex items-start justify-between w-full mb-8 md:mb-[61px]">
          <div className="flex gap-[10px] items-start uppercase">
            <div
              className="font-light text-black"
              style={{
                lineHeight: '0.86',
                fontSize: 'clamp(32px, 6.7vw, 96px)',
                letterSpacing: 'clamp(-2.56px, -0.53vw, -7.68px)',
              }}
            >
              <p className="mb-0">Selected</p>
              <p>Work</p>
            </div>
            <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mt-1 shrink-0">004</span>
          </div>
          {/* Desktop: rotated [ portfolio ] on far right */}
          <div className="hidden md:flex h-[110px] w-[15px] items-center justify-center shrink-0">
            <span className="-rotate-90 whitespace-nowrap font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
              [ portfolio ]
            </span>
          </div>
        </div>

        {/* Desktop: staggered 2-column grid */}
        <div className="hidden md:flex gap-6 items-end">
          {/* Left column — stretches full height with justify-between */}
          <div className="flex-1 self-stretch flex flex-col justify-between gap-10">
            {projects[0] && (
              <ProjectCard
                title={projects[0].title}
                imageUrl={projects[0].image ? urlFor(projects[0].image).width(800).url() : null}
                tags={projects[0].tags ?? []}
                height={744}
              />
            )}
            {projects[1] && (
              <ProjectCard
                title={projects[1].title}
                imageUrl={projects[1].image ? urlFor(projects[1].image).width(800).url() : null}
                tags={projects[1].tags ?? []}
                height={699}
              />
            )}
            <PortfolioCTA />
          </div>
          {/* Right column — offset 240px from top */}
          <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
            {projects[2] && (
              <ProjectCard
                title={projects[2].title}
                imageUrl={projects[2].image ? urlFor(projects[2].image).width(800).url() : null}
                tags={projects[2].tags ?? []}
                height={699}
              />
            )}
            {projects[3] && (
              <ProjectCard
                title={projects[3].title}
                imageUrl={projects[3].image ? urlFor(projects[3].image).width(800).url() : null}
                tags={projects[3].tags ?? []}
                height={744}
              />
            )}
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="md:hidden flex flex-col gap-6">
          {projects.map((p: PortfolioDoc) => (
            <ProjectCard
              key={p._id}
              title={p.title}
              imageUrl={p.image ? urlFor(p.image).width(600).url() : null}
              tags={p.tags ?? []}
              height={390}
            />
          ))}
          <PortfolioCTA />
        </div>

      </section>

      {/* ── Testimonials section ── */}
      <section className="overflow-hidden" id="testimonials">
        <DesktopTestimonials items={TESTIMONIALS} />
        <MobileTestimonials items={TESTIMONIALS} />

      </section>

      {/* ── News & Achievements section ── */}
      <section className="overflow-hidden bg-[#f3f3f3] py-10 md:py-[120px]" id="news">

        <MobileNewsSlider items={NEWS_ITEMS} />

        {/* Desktop: rotated title + horizontal-scroll slider */}
        <div className="hidden md:flex items-stretch overflow-hidden">
          {/* Rotated title — fixed left column */}
          <div className="flex h-[706px] w-[150px] items-center justify-center shrink-0 ml-8 mr-10">
            <h2
              className="font-light uppercase text-black"
              style={{
                fontSize: '64px',
                letterSpacing: '-5.12px',
                lineHeight: '0.86',
                transform: 'rotate(-90deg)',
                whiteSpace: 'nowrap',
              }}
            >
              Keep up with my latest
              <br />
              news &amp; achievements
            </h2>
          </div>

          {/* Horizontal-scroll card slider */}
          <div
            className="flex-1 overflow-x-auto"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
          >
            <div className="flex items-start h-[706px] pl-[80px] pr-16">
              {NEWS_ITEMS.flatMap((item, i) => {
                const card = (
                  <div
                    key={i}
                    className="shrink-0 flex flex-col gap-4 w-[380px]"
                    style={{ paddingTop: i === 1 ? '120px' : '0' }}
                  >
                    <div className="w-full overflow-hidden" style={{ height: '469px' }}>
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[#1f1f1f] text-[14px] leading-[1.3]" style={{ letterSpacing: '-0.56px' }}>
                      {item.text}
                    </p>
                    <div className="flex items-center gap-[10px] border-b border-black pb-1 w-fit">
                      <span className="font-medium text-[14px] text-black" style={{ letterSpacing: '-0.56px' }}>Read more</span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M4 14L14 4M14 4H7M14 4V11" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )
                return i === 0
                  ? [card]
                  : [<div key={`d${i}`} className="self-stretch w-px bg-black/20 mx-10 shrink-0" />, card]
              })}
            </div>
          </div>
        </div>

      </section>

    </main>

    {/* ── Footer ── */}
    <footer className="fixed inset-x-0 bottom-0 z-0 h-[340px] overflow-hidden bg-black pt-12 xl:h-[520px]">

      {/* Mobile footer */}
      <div className="xl:hidden flex flex-col gap-12 px-4">
        {/* Top: CTA + socials + divider */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="font-light italic uppercase text-white text-[24px]" style={{ letterSpacing: '-0.96px', lineHeight: '1.1' }}>
              Have a <strong className="font-black not-italic">project</strong> in mind?
            </p>
            <AnimatedButton className="w-fit rounded-full border border-white px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white">
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
        {/* Bottom: legal + wordmark */}
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

      {/* Desktop footer */}
      <div className="hidden xl:flex flex-col gap-[120px] px-8">
        {/* Top: CTA | socials center | socials right + divider */}
        <div className="flex flex-col gap-12">
          <div className="flex items-start justify-between w-full">
            {/* Left: CTA */}
            <div className="flex flex-col gap-3 w-[298px]">
              <p className="font-light italic uppercase text-white text-[24px]" style={{ letterSpacing: '-0.96px', lineHeight: '1.1' }}>
                Have a <strong className="font-black not-italic">project</strong> in mind?
              </p>
              <AnimatedButton className="w-fit rounded-full border border-white px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white">
                Let&apos;s talk
              </AnimatedButton>
            </div>
            {/* Center: Facebook / Instagram */}
            <div className="text-center w-[298px]">
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Facebook</p>
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Instagram</p>
            </div>
            {/* Right: X.com / Linkedin */}
            <div className="text-right w-[298px]">
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>X.com</p>
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Linkedin</p>
            </div>
          </div>
          <div className="w-full h-px bg-white/20" />
        </div>

        {/* Bottom: giant wordmark + legal */}
        <div className="flex items-end justify-between">
          {/* Wordmark block — clipped to ~219px height */}
          <div className="relative overflow-hidden shrink-0" style={{ height: '219px', width: '1093px' }}>
            {/* Rotated label on the left */}
            <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[15px]">
              <p
                className="font-mono text-white text-[14px] uppercase whitespace-nowrap"
                style={{ transform: 'rotate(-90deg)', letterSpacing: '0' }}
              >
                [ Coded By Claude ]
              </p>
            </div>
            {/* Giant wordmark */}
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
          {/* Legal links — bottom-right */}
          <div className="flex gap-[34px] pb-8 shrink-0">
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Licences</span>
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Privacy policy</span>
          </div>
        </div>
      </div>

    </footer>
    </>
  )
}

function ProjectCard({
  title,
  imageUrl,
  tags,
  height,
}: {
  title: string
  imageUrl: string | null
  tags: string[]
  height: number
}) {
  return (
    <div className="project-card group relative flex flex-col gap-[10px]">
      <div className="project-card-media relative w-full overflow-hidden bg-[#1f1f1f]" style={{ height }}>
        {imageUrl && (
          <img src={imageUrl} alt={title} className="project-card-image absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="project-card-sweep absolute inset-0" aria-hidden="true" />
      </div>
      {tags.length > 0 && (
        <div
          className="project-card-tags pointer-events-none absolute left-4 z-10 flex max-w-[calc(100%-32px)] flex-wrap gap-3"
          style={{ top: height - 48 }}
        >
          {tags.map((tag) => (
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
      <div className="flex items-center justify-between">
        <p
          className="project-card-title font-black text-black uppercase leading-[1.1] text-[24px] md:text-[36px] tracking-[-0.96px] md:tracking-[-1.44px]"
        >
          {title}
        </p>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="project-card-arrow shrink-0">
          <path d="M8 24L24 8M24 8H13M24 8V19" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}

function PortfolioCTA() {
  return (
    <QuoteBrackets>
      <div className="flex flex-col gap-[10px] py-3">
        <p className="text-[14px] italic leading-[1.3] text-[#1f1f1f]" style={{ letterSpacing: '-0.56px' }}>
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <AnimatedButton className="self-start rounded-full bg-black px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white">
          Let&apos;s talk
        </AnimatedButton>
      </div>
    </QuoteBrackets>
  )
}

/* Corner-bracket quote decoration */
function QuoteBrackets({ children }: { children: React.ReactNode }) {
  const corner = "w-4 h-4 shrink-0"
  return (
    <div className="flex items-stretch gap-3">
      {/* Left brackets */}
      <div className="flex flex-col justify-between shrink-0 w-4">
        <div className={`${corner} border-t border-l border-[#1f1f1f]`} />
        <div className={`${corner} border-b border-l border-[#1f1f1f]`} />
      </div>
      {/* Text */}
      <div className="flex-1">{children}</div>
      {/* Right brackets */}
      <div className="flex flex-col justify-between shrink-0 w-4">
        <div className={`${corner} border-t border-r border-[#1f1f1f]`} />
        <div className={`${corner} border-b border-r border-[#1f1f1f]`} />
      </div>
    </div>
  )
}
