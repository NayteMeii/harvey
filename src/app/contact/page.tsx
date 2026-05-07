import { AnimatedButton } from '../_components/AnimatedButton'
import { HeaderNav } from '../_components/HeaderNav'
import { PageHero } from '../_components/PageHero'
import { SiteFooter } from '../_components/SiteFooter'

const CONTACT_LINKS = [
  { label: 'Email', value: 'hello@hstudio.com' },
  { label: 'Instagram', value: '@h.studio' },
  { label: 'Linkedin', value: 'H.Studio' },
]

const BRIEF_POINTS = [
  { label: 'Scope', text: 'Brand, website, campaign, photo direction, or a mix of everything.' },
  { label: 'Timing', text: 'A rough deadline is enough. The shape can be figured out from there.' },
  { label: 'Problem', text: 'What feels unclear, unfinished, too quiet, or hard to explain.' },
]

export default function ContactPage() {
  return (
    <>
      <HeaderNav />
      <main className="relative z-10 mb-[500px] flex-1 bg-[#fafafa] xl:mb-[520px]">
        <PageHero title="Contact" />

        <section className="px-4 py-12 md:px-8 md:py-[120px]">
          <div className="border-y border-black/20 py-6 md:py-8">
            <div className="grid gap-10 xl:grid-cols-[180px_minmax(0,1fr)_393px] xl:items-stretch">
              <div className="flex items-start justify-between gap-4 xl:flex-col">
                <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">001</p>
                <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">[ open brief ]</p>
              </div>

              <div className="flex min-h-[360px] flex-col justify-between">
                <p
                  className="max-w-[920px] text-[52px] font-light uppercase leading-[0.86] text-black md:text-[96px] xl:text-[124px]"
                  style={{ letterSpacing: '-0.07em' }}
                >
                  Start with
                  <br />
                  the rough
                  <br />
                  version.
                </p>
                <p className="max-w-[520px] text-[14px] font-bold italic uppercase leading-[1.1] text-[#1f1f1f]" style={{ letterSpacing: '-0.56px' }}>
                  A clear first message beats a perfect deck. Send the messy version and the useful questions will show up fast.
                </p>
              </div>

              <div className="grid content-end gap-px bg-black/20">
                {BRIEF_POINTS.map((item) => (
                  <div key={item.label} className="grid gap-5 bg-[#fafafa] p-4 md:p-6">
                    <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                      [ {item.label} ]
                    </p>
                    <p className="text-[18px] font-black uppercase leading-[1.1] text-black" style={{ letterSpacing: '-0.72px' }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-6 md:px-8 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_393px] lg:items-end">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">002</p>
                <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">[ contact ]</p>
              </div>
              <p className="max-w-[560px] text-left text-[24px] font-light uppercase leading-[0.98] text-black md:text-[42px] xl:text-[58px]" style={{ letterSpacing: '-0.06em' }}>
                New identity
                <br />
                sharper website
                <br />
                campaign system
                <br />
                or just a visual mess
                <br />
                that needs sorting.
              </p>
              <AnimatedButton href="/lets-talk" className="w-fit rounded-full bg-black px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white">
                Let&apos;s talk
              </AnimatedButton>
            </div>

            <div className="grid gap-px bg-black/20">
              {CONTACT_LINKS.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 bg-[#fafafa] p-4 md:p-6">
                  <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                    [ {item.label} ]
                  </p>
                  <p className="text-right text-[18px] font-black uppercase leading-[1.1] text-black" style={{ letterSpacing: '-0.72px' }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
