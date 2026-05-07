import { sanityFetch } from '@/sanity/lib/live'
import { urlFor } from '@/sanity/lib/image'
import { AnimatedButton } from '../_components/AnimatedButton'
import { HeaderNav } from '../_components/HeaderNav'
import { ScrubTextReveal } from '../_components/ScrubTextReveal'
import { ServiceItem } from '../_components/ServiceItem'
import { ServicesHero } from '../_components/ServicesHero'
import { resolveServices, SERVICES_QUERY, type ServiceDocData } from '../_data/services'
import type { SanityImageSource } from '@sanity/image-url'

const PROCESS = [
  {
    number: '01',
    title: 'Read the room',
    text: 'We look at the brand, the audience, the references, and the parts that already work before touching the design.',
  },
  {
    number: '02',
    title: 'Build the system',
    text: 'The work turns into a practical visual direction with rules, assets, layouts, and enough flexibility to keep moving.',
  },
  {
    number: '03',
    title: 'Make it useful',
    text: 'Final delivery is shaped around real use: launch files, responsive pages, campaign assets, and clear handoff.',
  },
]

export default async function ServicesPage() {
  const { data } = await sanityFetch({ query: SERVICES_QUERY })
  const services = resolveServices(data as ServiceDocData<SanityImageSource>[] | null, (image) =>
    urlFor(image).width(320).height(320).url()
  )

  return (
    <>
      <HeaderNav />
      <main className="relative z-10 mb-[500px] flex-1 bg-[#fafafa] xl:mb-[520px]">
        <ServicesHero />

        <section className="overflow-x-hidden px-4 py-12 md:px-8 md:py-[120px]">
          <div className="flex w-full flex-col gap-6">
            <div className="flex flex-col gap-3 items-end">
              <span className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                [ services ]
              </span>
              <div className="h-px w-full bg-[#1f1f1f] opacity-20" />
            </div>

            <ScrubTextReveal className="bio-lines ml-[clamp(16px,4vw,72px)] flex max-w-[1800px] flex-col gap-0 uppercase">
              <div className="text-left">
                <p className="mb-1 text-center font-mono text-[14px] leading-[1.1] text-[#1f1f1f] md:hidden">
                  001
                </p>
                <div className="flex items-start justify-start gap-3">
                  <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                    Deliverables
                  </span>
                  <span className="hidden shrink-0 font-mono text-[14px] leading-[1.1] text-[#1f1f1f] md:mt-1 md:block">
                    001
                  </span>
                </div>
              </div>
              <div className="pl-[clamp(24px,13vw,260px)] text-left">
                <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                  that make brands
                </span>
              </div>
              <div className="pl-[clamp(44px,24vw,520px)] text-left">
                <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                  easier to use
                </span>
              </div>
              <div className="text-left">
                <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                  and harder
                </span>
              </div>
              <div className="pl-[clamp(44px,24vw,520px)] text-left">
                <div className="hidden items-start gap-6 md:flex">
                  <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                    to ignore.
                  </span>
                  <span className="mt-[26px] shrink-0 whitespace-nowrap font-mono text-[14px] leading-[1.1] text-[#1f1f1f]">
                    [ brand / web / photo ]
                  </span>
                </div>
                <div className="flex flex-col items-center md:hidden">
                  <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                    to ignore.
                  </span>
                  <p className="mt-2 font-mono text-[14px] leading-[1.1] text-[#1f1f1f]">
                    [ brand / web / photo ]
                  </p>
                </div>
              </div>
            </ScrubTextReveal>
          </div>
        </section>

        <section
          className="flex flex-col gap-8 bg-black px-4 py-12 md:gap-12 md:px-8 md:py-20"
          data-nav-theme="light"
        >
          <div className="flex items-center justify-between text-white">
            <p className="font-mono text-[14px] uppercase leading-[1.1]">[ deliverables ]</p>
            <p className="font-mono text-[14px] uppercase leading-[1.1]">002</p>
          </div>

          <div className="flex w-full flex-col gap-12">
            {services.map((service) => (
              <ServiceItem key={service.number} {...service} />
            ))}
          </div>
        </section>

        <section className="px-4 py-12 md:px-8 md:py-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 items-end">
              <span className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                [ process ]
              </span>
              <div className="h-px w-full bg-[#1f1f1f] opacity-20" />
            </div>

            <div className="grid gap-8 xl:grid-cols-[180px_minmax(0,1fr)_180px]">
              <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                003
              </p>
              <div className="grid gap-px bg-black/20 xl:grid-cols-3">
                {PROCESS.map((item) => (
                  <div key={item.number} className="flex min-h-[256px] flex-col justify-between bg-[#fafafa] p-4 md:p-6">
                    <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                      [ {item.number} ]
                    </p>
                    <div className="flex flex-col gap-3">
                      <h2 className="text-[28px] font-black uppercase leading-[1.05] text-black md:text-[36px]" style={{ letterSpacing: '-1.44px' }}>
                        {item.title}
                      </h2>
                      <p className="text-[14px] leading-[1.3] text-[#1f1f1f]" style={{ letterSpacing: '-0.56px' }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div aria-hidden="true" className="hidden xl:block" />
            </div>
          </div>
        </section>

        <section className="px-4 py-12 md:px-8 md:py-20">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_393px] xl:items-end">
            <div className="overflow-hidden bg-black" style={{ aspectRatio: '16/9' }}>
              <img src="/camera-photo.jpg" alt="" className="h-full w-full object-cover opacity-90" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">[ next / 004 ]</p>
              <p className="text-[24px] font-light italic uppercase leading-[1.1] text-black" style={{ letterSpacing: '-0.96px' }}>
                Need the <strong className="font-black not-italic">whole thing</strong> shaped?
              </p>
              <AnimatedButton href="/lets-talk" className="w-fit rounded-full bg-black px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white">
                Let&apos;s talk
              </AnimatedButton>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
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
