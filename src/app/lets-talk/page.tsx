import { ContactForm } from '../_components/ContactForm'
import { HeaderNav } from '../_components/HeaderNav'
import { SiteFooter } from '../_components/SiteFooter'

export default function LetsTalkPage() {
  return (
    <>
      <HeaderNav />
      <main className="relative z-10 mb-[500px] flex-1 bg-[#fafafa] xl:mb-[520px]">
        <section className="px-4 pb-12 pt-32 md:px-8 md:pb-20 md:pt-40 xl:pt-48">
          <div className="grid gap-8 xl:grid-cols-[80px_minmax(0,1fr)_180px] xl:items-start xl:gap-x-12">
            <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">001</p>

            <div className="flex flex-col gap-12 md:gap-16">
              <header className="flex flex-col gap-5">
                <h1
                  className="text-[42px] font-light uppercase leading-[0.9] text-black md:text-[64px] xl:text-[84px]"
                  style={{ letterSpacing: '-0.07em' }}
                >
                  Tell me what
                  <br />
                  you&apos;re making.
                </h1>
                <p
                  className="max-w-[520px] text-[14px] font-bold italic uppercase leading-[1.1] text-[#1f1f1f] md:text-[16px]"
                  style={{ letterSpacing: '-0.56px' }}
                >
                  Even half a brief is enough. Reply lands within a working day.
                </p>
              </header>

              <ContactForm />
            </div>

            <div aria-hidden="true" className="hidden xl:block" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
