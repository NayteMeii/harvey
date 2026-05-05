'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ReactNode } from 'react'
import { useLayoutEffect, useRef } from 'react'

type ScrollLeftShiftProps = {
  children: ReactNode
  className?: string
  desktopOnly?: boolean
}

export function ScrollLeftShift({ children, className = '', desktopOnly = false }: ScrollLeftShiftProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    gsap.registerPlugin(ScrollTrigger)

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(desktopOnly ? '(min-width: 768px)' : 'all', () => {
        const tween = gsap.fromTo(
          root,
          { x: 0 },
          {
            x: -38,
            ease: 'none',
            scrollTrigger: {
              trigger: root,
              start: 'top 82%',
              end: 'top 48%',
              scrub: 0.45,
              invalidateOnRefresh: true,
            },
          }
        )

        return () => tween.kill()
      })

      return () => mm.revert()
    }, root)

    return () => ctx.revert()
  }, [desktopOnly])

  return (
    <div ref={rootRef} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}
