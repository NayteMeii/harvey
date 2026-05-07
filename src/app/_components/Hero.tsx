'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'
import { AnimatedButton } from './AnimatedButton'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLImageElement>(null)
  const introRef = useRef<HTMLParagraphElement>(null)
  const harveyRef = useRef<HTMLSpanElement>(null)
  const specterRef = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const bg = bgRef.current
    const intro = introRef.current
    const harvey = harveyRef.current
    const specter = specterRef.current

    if (!section || !bg || !intro || !harvey || !specter) return

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
          .to([intro, harvey], { x: '-64vw' }, 0)
          .to(specter, { x: '64vw' }, 0)
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
          .to([intro, harvey], { x: '-82vw' }, 0)
          .to(specter, { x: '82vw' }, 0)
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
      className="relative overflow-hidden flex flex-col items-center
        min-h-screen md:h-[847px]
        px-4 md:px-8
        pb-6 md:pb-0
        justify-between md:justify-start md:gap-[145px]"
      style={{ isolation: 'isolate' }}
    >
      <picture className="absolute inset-0 pointer-events-none" style={{ zIndex: -1 }}>
        <img
          ref={bgRef}
          src="/hero-bg.jpg"
          alt=""
          className="hero-bg-photo absolute inset-0 h-full w-full object-cover"
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

      <div
        className="relative flex w-full flex-col items-center
          justify-between gap-6
          md:h-auto md:justify-start md:shrink-0"
      >
        <div className="flex w-full flex-col items-center md:items-start md:pb-[15px]">
          <div className="flex w-full items-center justify-center md:justify-start md:px-[18px] md:mb-[-15px] mb-3">
            <p
              ref={introRef}
              className="font-mono text-[14px] uppercase leading-[1.1] text-white mix-blend-overlay whitespace-nowrap will-change-transform"
            >
              [ Hello i&apos;m ]
            </p>
          </div>
          <h1
            className="flex w-full flex-col items-center justify-center font-medium capitalize text-white mix-blend-overlay
              text-[clamp(86px,24vw,112px)] md:text-[clamp(92px,13vw,118px)] lg:flex-row lg:gap-[clamp(42px,6vw,116px)] lg:text-[clamp(124px,12vw,198px)]
              tracking-[-0.07em] leading-[0.85] md:leading-[1.1] md:mb-[-15px]"
          >
            <span ref={harveyRef} className="block will-change-transform">
              Harvey
            </span>
            <span ref={specterRef} className="block will-change-transform">
              Specter
            </span>
          </h1>
        </div>

        <div className="flex w-full flex-col items-center md:items-end">
          <div className="flex w-[293px] md:w-[294px] flex-col items-center md:items-start gap-[17px]">
            <p
              className="text-[14px] font-bold italic uppercase leading-[1.1] text-[#1f1f1f] text-center md:text-left"
              style={{ letterSpacing: '-0.56px' }}
            >
              H.Studio is a <span className="font-normal italic">full-service</span> creative studio creating beautiful
              digital experiences and products. We are an <span className="font-normal italic">award winning</span>{' '}
              design and art group specializing in branding, web design and engineering.
            </p>
            <AnimatedButton href="/lets-talk" className="rounded-full bg-black px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white">
              Let&apos;s talk
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
