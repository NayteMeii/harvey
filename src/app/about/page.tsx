import { AboutHero } from '../_components/AboutHero'
import { AnimatedButton } from '../_components/AnimatedButton'
import { AnimatedStats } from '../_components/AnimatedStats'
import { HeaderNav } from '../_components/HeaderNav'

const CAPABILITIES = [
  'Creative direction',
  'Brand systems',
  'Photography',
  'Web experiences',
]

const EXPERIENCE_STATS = [
  {
    value: '8+',
    label: 'Years of making things look intentional',
  },
  {
    value: '64',
    label: 'Projects across brand, web, photo, and campaign work',
  },
  {
    value: '14',
    label: 'Industries translated into clear visual systems',
  },
  {
    value: '0',
    label: 'Interest in making forgettable template work',
  },
]

const PRINCIPLES = [
  {
    number: '01',
    title: 'Make it legible',
    text: 'Every visual choice has to help the idea land faster. The work is expressive, but never at the cost of clarity.',
  },
  {
    number: '02',
    title: 'Build for use',
    text: 'Identity, websites, and campaigns are treated as systems that need to hold up after launch.',
  },
  {
    number: '03',
    title: 'Keep it moving',
    text: 'The process stays direct, iterative, and practical so decisions do not get buried under presentation.',
  },
]

export default function AboutPage() {
  return (
    <>
      <HeaderNav />
      <main className="relative z-10 mb-[500px] flex-1 bg-[#fafafa] xl:mb-[520px]">
        <AboutHero />

        <section className="overflow-hidden px-4 py-12 md:px-8 md:py-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 items-end">
              <span className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                [ background ]
              </span>
              <div className="h-px w-full bg-[#1f1f1f] opacity-20" />
            </div>

            <div className="grid gap-8 xl:grid-cols-[393px_minmax(0,1fr)]">
              <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                002
              </p>

              <div className="grid gap-8 lg:grid-cols-[minmax(0,560px)_minmax(260px,1fr)] lg:items-end">
                <div className="mx-auto w-full max-w-[760px]">
                  <QuoteBrackets>
                    <div className="flex flex-col gap-4 py-3">
                      <p className="text-[18px] leading-[1.25] text-[#1f1f1f] md:text-[24px]" style={{ letterSpacing: '-0.96px' }}>
                        Born and raised on the south side of Chicago, Harvey brings a photographer&apos;s eye and a director&apos;s discipline to each project.
                      </p>
                      <p className="text-[14px] leading-[1.3] text-[#1f1f1f]" style={{ letterSpacing: '-0.56px' }}>
                        The practice is built around making brands easier to understand, easier to remember, and easier to use across every touchpoint.
                      </p>
                    </div>
                  </QuoteBrackets>
                </div>

                <div className="grid grid-cols-2 gap-px bg-black/20">
                  {CAPABILITIES.map((item) => (
                    <div key={item} className="bg-[#fafafa] p-4 md:p-6">
                      <p className="text-[18px] font-black uppercase leading-[1.1] text-black" style={{ letterSpacing: '-0.72px' }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden px-4 py-10 md:px-8 md:py-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 items-end">
              <span className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                [ proof-ish ]
              </span>
              <div className="h-px w-full bg-[#1f1f1f] opacity-20" />
            </div>

            <div className="grid gap-8 xl:grid-cols-[393px_minmax(0,1fr)]">
              <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                003
              </p>

              <AnimatedStats stats={EXPERIENCE_STATS} />
            </div>
          </div>
        </section>

        <section className="bg-black px-4 py-12 md:px-8 md:py-20" data-nav-theme="light">
          <div className="flex flex-col gap-10">
            <div className="flex items-center justify-between text-white">
              <p className="font-mono text-[14px] uppercase leading-[1.1]">[ approach ]</p>
              <p className="font-mono text-[14px] uppercase leading-[1.1]">004</p>
            </div>

            <div className="flex flex-col gap-8">
              <h2
                className="font-light uppercase text-white"
                style={{
                  fontSize: 'clamp(48px, 10vw, 140px)',
                  letterSpacing: 'clamp(-3.84px, -0.8vw, -11.2px)',
                  lineHeight: '0.86',
                }}
              >
                Direction with
                <br />
                enough friction
              </h2>

              <div className="grid gap-6 xl:grid-cols-3">
                {PRINCIPLES.map((item) => (
                  <div key={item.number} className="border-t border-white/30 pt-3">
                    <p className="mb-8 font-mono text-[14px] uppercase leading-[1.1] text-white">
                      [ {item.number} ]
                    </p>
                    <h3 className="mb-3 text-[24px] font-black uppercase leading-[1.1] text-white" style={{ letterSpacing: '-0.96px' }}>
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.3] text-white/75" style={{ letterSpacing: '-0.56px' }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 md:px-8 md:py-20">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_393px] xl:items-end">
            <div className="overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img src="/camera-photo.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">[ next / 005 ]</p>
              <p className="text-[24px] font-light italic uppercase leading-[1.1] text-black" style={{ letterSpacing: '-0.96px' }}>
                Have a <strong className="font-black not-italic">project</strong> in mind?
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

function QuoteBrackets({ children }: { children: React.ReactNode }) {
  const corner = 'w-4 h-4 shrink-0'
  return (
    <div className="flex items-stretch gap-3">
      <div className="flex flex-col justify-between shrink-0 w-4">
        <div className={`${corner} border-t border-l border-[#1f1f1f]`} />
        <div className={`${corner} border-b border-l border-[#1f1f1f]`} />
      </div>
      <div className="flex-1">{children}</div>
      <div className="flex flex-col justify-between shrink-0 w-4">
        <div className={`${corner} border-t border-r border-[#1f1f1f]`} />
        <div className={`${corner} border-b border-r border-[#1f1f1f]`} />
      </div>
    </div>
  )
}
