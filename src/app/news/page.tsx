import type { SanityImageSource } from '@sanity/image-url'
import { HeaderNav } from '../_components/HeaderNav'
import { PageHero } from '../_components/PageHero'
import { ScrubTextReveal } from '../_components/ScrubTextReveal'
import { SiteFooter } from '../_components/SiteFooter'
import { NEWS_QUERY, resolveNews, type NewsDocData } from '../_data/news'
import { urlFor } from '@/sanity/lib/image'
import { sanityFetch } from '@/sanity/lib/live'

export default async function NewsPage() {
  const { data } = await sanityFetch({ query: NEWS_QUERY })
  const newsItems = resolveNews(data as NewsDocData<SanityImageSource>[] | null, (image) =>
    urlFor(image).width(800).url()
  )

  return (
    <>
      <HeaderNav />
      <main className="relative z-10 mb-[500px] flex-1 bg-[#fafafa] xl:mb-[520px]">
        <PageHero title="News" />

        <section className="overflow-x-hidden px-4 py-12 md:px-8 md:py-[120px]">
          <div className="flex w-full flex-col gap-6">
            <div className="flex flex-col gap-3 items-end">
              <span className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                [ updates ]
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
                    Latest notes
                  </span>
                  <span className="hidden shrink-0 font-mono text-[14px] leading-[1.1] text-[#1f1f1f] md:mt-1 md:block">
                    001
                  </span>
                </div>
              </div>
              <div className="bio-line-offset-1 text-center md:text-left">
                <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                  from work
                </span>
              </div>
              <div className="bio-line-offset-2 text-center md:text-left">
                <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                  in progress
                </span>
              </div>
              <div className="bio-line-offset-1 text-center md:text-left">
                <span className="bio-line font-light leading-[0.84] text-black whitespace-nowrap">
                  and after.
                </span>
              </div>
            </ScrubTextReveal>
          </div>
        </section>

        <section className="bg-[#f3f3f3] px-4 py-12 md:px-8 md:py-20">
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
                Updates
              </h2>
              <span className="mt-1 shrink-0 font-mono text-[14px] leading-[1.1] text-[#1f1f1f]">002</span>
            </div>
            <div className="hidden h-[110px] w-[15px] shrink-0 items-center justify-center md:flex">
              <span className="-rotate-90 whitespace-nowrap font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
                [ news ]
              </span>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {newsItems.map((item, index) => {
              const ReadMoreContent = (
                <>
                  <span className="text-[14px] font-medium text-black" style={{ letterSpacing: '-0.56px' }}>Read more</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 14L14 4M14 4H7M14 4V11" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )
              return (
                <article key={item.image} className={`flex flex-col gap-4 ${index === 1 ? 'md:pt-24' : ''}`}>
                  <div className="overflow-hidden bg-black" style={{ aspectRatio: '380/469' }}>
                    <img src={item.image} alt={item.title ?? ''} className="h-full w-full object-cover" />
                  </div>
                  <p className="text-[14px] leading-[1.3] text-[#1f1f1f]" style={{ letterSpacing: '-0.56px' }}>
                    {item.text}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-fit items-center gap-[10px] border-b border-black pb-1"
                    >
                      {ReadMoreContent}
                    </a>
                  ) : (
                    <div className="flex w-fit items-center gap-[10px] border-b border-black pb-1">
                      {ReadMoreContent}
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
