'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

export function CameraPhotoBreak() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const image = imageRef.current

    if (!section || !image) return

    gsap.registerPlugin(ScrollTrigger)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      gsap.set(image, { filter: 'blur(0px)', yPercent: 0, scale: 1 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(image, { filter: 'blur(18px)', yPercent: -8, scale: 1.12 })

      gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'center center',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })
        .to(image, { filter: 'blur(0px)', scale: 1.06 }, 0)
        .to(image, { yPercent: 0 }, 0)

      gsap.to(image, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: 'bottom top',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full h-screen overflow-hidden" data-nav-theme="light">
      <img
        ref={imageRef}
        src="/camera-photo.jpg"
        alt=""
        className="block h-[116%] w-full object-cover object-center"
        style={{ willChange: 'transform, filter' }}
      />
    </section>
  )
}
