'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

export function ServicesHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const bg = bgRef.current
    const title = titleRef.current

    if (!section || !bg || !title) return

    gsap.registerPlugin(ScrollTrigger)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px)', () => {
        const timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        })

        timeline
          .to(title, { x: '-64vw' }, 0)
          .to(bg, { '--hero-bg-scale': '1.28' }, 0)

        return () => timeline.kill()
      })

      mm.add('(max-width: 1023px)', () => {
        const timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        })

        timeline
          .to(title, { x: '-82vw' }, 0)
          .to(bg, { '--hero-bg-scale': '1.48' }, 0)

        return () => timeline.kill()
      })

      return () => mm.revert()
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden px-4 pb-6 md:h-[847px] md:justify-start md:gap-[145px] md:px-8 md:pb-0"
      style={{ isolation: 'isolate' }}
    >
      <picture className="pointer-events-none absolute inset-0" style={{ zIndex: -1 }}>
        <img
          ref={bgRef}
          src="/hero-bg.jpg"
          alt=""
          className="hero-bg-photo absolute inset-0 h-full w-full object-cover blur-[14px] brightness-110"
        />
      </picture>

      <div
        className="pointer-events-none absolute left-0 w-full backdrop-blur-[10px]"
        style={{
          bottom: 0,
          height: '349px',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%)',
        }}
      />

      <div className="h-[96px] w-full shrink-0 xl:h-[64px]" />

      <div className="relative flex w-full flex-col items-center justify-between gap-6 md:h-auto md:shrink-0 md:justify-start">
        <div className="flex w-full flex-col items-center md:items-start md:pb-[15px]">
          <h1 className="flex w-full items-center justify-center font-medium capitalize leading-[0.85] tracking-[-0.07em] text-black/80 mix-blend-overlay text-[clamp(86px,24vw,112px)] md:mb-[-15px] md:leading-[1.1] md:text-[clamp(92px,13vw,118px)] lg:text-[clamp(124px,12vw,198px)] xl:pt-8 xl:text-[clamp(104px,9vw,132px)]">
            <span ref={titleRef} className="block will-change-transform">
              Services
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}
