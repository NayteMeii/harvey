'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect, useRef } from 'react'

export type Stat = {
  value: string
  label: string
}

export function AnimatedStats({ stats }: { stats: Stat[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([])
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([])

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    gsap.registerPlugin(ScrollTrigger)

    const numbers = numberRefs.current.filter((n): n is HTMLSpanElement => n !== null)
    const labels = labelRefs.current.filter((l): l is HTMLSpanElement => l !== null)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const parsed = stats.map((stat) => {
      const match = stat.value.match(/^(\d+)(.*)$/)
      return match
        ? { target: parseInt(match[1], 10), suffix: match[2], raw: stat.value }
        : { target: 0, suffix: stat.value, raw: stat.value }
    })

    if (reduce) {
      parsed.forEach((p, i) => {
        const node = numbers[i]
        if (node) node.textContent = p.raw
      })
      return
    }

    parsed.forEach((p, i) => {
      const node = numbers[i]
      if (node) node.textContent = '0' + p.suffix
    })

    const ctx = gsap.context(() => {
      gsap.set(numbers, { yPercent: 110 })
      gsap.set(labels, { yPercent: 110, opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          once: true,
        },
      })

      const slideStagger = 0.12

      tl.to(numbers, {
        yPercent: 0,
        duration: 0.9,
        ease: 'expo.out',
        stagger: slideStagger,
      })

      parsed.forEach((p, i) => {
        const node = numbers[i]
        if (!node) return

        const proxy = { v: 0 }
        const ceiling = Math.max(p.target * 1.6, 90)
        const startTime = i * slideStagger + 0.15

        tl.to(
          proxy,
          {
            v: 1,
            duration: 0.95,
            ease: 'power2.out',
            onUpdate: function () {
              const progress = this.progress()
              if (progress < 0.88) {
                const random = Math.floor(Math.random() * ceiling)
                node.textContent = String(random) + p.suffix
              } else {
                node.textContent = String(p.target) + p.suffix
              }
            },
            onComplete: () => {
              node.textContent = p.raw
            },
          },
          startTime
        )
      })

      tl.to(
        labels,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.08,
        },
        '-=0.4'
      )
    }, container)

    return () => ctx.revert()
  }, [stats])

  return (
    <div ref={containerRef} className="grid xl:grid-cols-4">
      {stats.map((item, i) => (
        <div
          key={item.value + i}
          className="relative flex flex-col gap-5 py-8 md:py-10 xl:px-6 xl:first:pl-0 xl:last:pr-0"
        >
          {i > 0 && (
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-0 h-px bg-black/20 xl:bottom-6 xl:left-0 xl:right-auto xl:top-6 xl:h-auto xl:w-px"
            />
          )}

          <span
            className="block overflow-hidden font-medium tabular-nums leading-[0.82] text-black"
            style={{
              fontSize: 'clamp(58px, 8vw, 104px)',
              letterSpacing: '-0.07em',
            }}
          >
            <span
              ref={(node) => {
                numberRefs.current[i] = node
              }}
              className="block will-change-transform"
            >
              {item.value}
            </span>
          </span>

          <span className="block overflow-hidden">
            <span
              ref={(node) => {
                labelRefs.current[i] = node
              }}
              className="block max-w-[240px] text-[14px] font-bold italic uppercase leading-[1.1] text-[#1f1f1f] will-change-transform"
              style={{ letterSpacing: '-0.56px' }}
            >
              {item.label}
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}
