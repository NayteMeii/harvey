'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

type Testimonial = {
  name: string
  quote: string
  logo: string
  rotate: string
  pos: {
    left?: string
    right?: string
    top: string
  }
  drift: {
    x: number
    y: number
  }
}

export function DesktopTestimonials({ items }: { items: Testimonial[] }) {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    gsap.registerPlugin(ScrollTrigger)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-testimonial-drift]')

      const tween = gsap.to(cards, {
        x: (_, target) => Number(target.dataset.driftX ?? 0),
        y: (_, target) => Number(target.dataset.driftY ?? 0),
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top 78%',
          end: 'bottom 28%',
          scrub: 0.7,
          invalidateOnRefresh: true,
        },
      })

      return () => tween.kill()
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={rootRef}
      className="hidden md:flex relative -translate-x-10 flex-col items-center justify-center min-h-[987px] py-[120px] origin-top scale-[0.78] lg:-translate-x-14 lg:scale-[0.88] xl:translate-x-0 xl:scale-100"
    >
      {items.map((t) => (
        <div
          key={t.name}
          data-testimonial-drift
          data-drift-x={t.drift.x}
          data-drift-y={t.drift.y}
          className="absolute will-change-transform"
          style={{
            left: t.pos.left,
            right: t.pos.right,
            top: t.pos.top,
            // Lukas Weber (upper-right) sits behind the heading; the other three float above it.
            zIndex: t.name === 'Lukas Weber' ? 5 : 20,
          }}
        >
          <div style={{ transform: `rotate(${t.rotate})` }}>
            <TestimonialCard name={t.name} quote={t.quote} logo={t.logo} className="w-[353px]" />
          </div>
        </div>
      ))}

      {/* z-10: above Lukas (z-5), below Marko/Sarah/Sofia (z-20). */}
      <p
        className="relative z-10 font-medium text-black text-center capitalize leading-[1.1]"
        style={{ fontSize: 'clamp(122px, 13.7vw, 198px)', letterSpacing: 'clamp(-8.54px, -0.95vw, -13.86px)' }}
      >
        Testimonials
      </p>
    </div>
  )
}

function TestimonialCard({
  name,
  quote,
  logo,
  className = '',
}: {
  name: string
  quote: string
  logo: string
  className?: string
}) {
  return (
    <div className={`bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px] ${className}`}>
      <img
        src={logo}
        alt=""
        className="self-start block"
        style={{ height: '28px', width: 'auto', maxWidth: '144px', objectFit: 'contain' }}
      />
      <p className="text-[#1f1f1f] text-[18px] leading-[1.3]" style={{ letterSpacing: '-0.72px' }}>
        {quote}
      </p>
      <p className="font-black text-black text-[16px] uppercase leading-[1.1]" style={{ letterSpacing: '-0.64px' }}>
        {name}
      </p>
    </div>
  )
}
