'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { CSSProperties } from 'react'
import { useLayoutEffect, useRef } from 'react'

type AboutPortraitRevealProps = {
  className?: string
  style?: CSSProperties
}

export function AboutPortraitReveal({ className = '', style }: AboutPortraitRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const coverRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    const cover = coverRef.current

    if (!root || !cover) return

    gsap.registerPlugin(ScrollTrigger)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      gsap.set(cover, { scaleX: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cover,
        { scaleX: 1 },
        {
          scaleX: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            end: 'bottom 36%',
            scrub: 0.85,
            invalidateOnRefresh: true,
          },
        }
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className={`relative overflow-hidden ${className}`} style={style}>
      <img
        src="/about-portrait.jpg"
        alt="Harvey Specter"
        className="block h-full w-full object-cover"
        style={{ transform: 'scale(1.012)', transformOrigin: 'center center' }}
      />
      <div
        ref={coverRef}
        className="absolute inset-0 bg-black"
        style={{ transformOrigin: 'right center', willChange: 'transform' }}
      />
    </div>
  )
}
