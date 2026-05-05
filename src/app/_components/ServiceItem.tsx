'use client'

import gsap from 'gsap'
import { useRef } from 'react'

type ServiceItemProps = {
  number: string
  title: string
  description: string
  image: string
}

export function ServiceItem({ number, title, description, image }: ServiceItemProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)

  const animate = (hovered: boolean) => {
    const ease = hovered ? 'power3.out' : 'power2.out'

    gsap.to(titleRef.current, {
      x: hovered ? 18 : 0,
      color: '#ffffff',
      duration: 0.42,
      ease,
    })

    gsap.to(descriptionRef.current, {
      x: hovered ? -12 : 0,
      opacity: hovered ? 1 : 0.78,
      duration: 0.42,
      ease,
    })

    gsap.to(imageRef.current, {
      scale: hovered ? 1.14 : 1,
      rotate: hovered ? -1.6 : 0,
      filter: hovered ? 'grayscale(0%) contrast(1.08)' : 'grayscale(100%) contrast(1)',
      duration: 0.56,
      ease,
    })

    gsap.to(dividerRef.current, {
      opacity: hovered ? 1 : 0.3,
      scaleX: hovered ? 1 : 0.985,
      duration: 0.42,
      ease,
    })

    gsap.to(rootRef.current, {
      y: hovered ? -4 : 0,
      duration: 0.42,
      ease,
    })
  }

  const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)').matches

  return (
    <div
      ref={rootRef}
      className="group flex flex-col gap-2"
      onMouseEnter={() => {
        if (canHover()) animate(true)
      }}
      onMouseLeave={() => {
        if (canHover()) {
          animate(false)
        } else {
          gsap.set([titleRef.current, descriptionRef.current, rootRef.current], { x: 0, y: 0 })
          gsap.set(imageRef.current, { scale: 1, rotate: 0, filter: 'grayscale(100%) contrast(1)' })
          gsap.set(dividerRef.current, { opacity: 0.3, scaleX: 1 })
        }
      }}
    >
      <p className="font-mono text-[14px] text-white uppercase leading-[1.1]">
        [ {number} ]
      </p>
      <div ref={dividerRef} className="h-px w-full origin-left bg-white opacity-30" />

      <div className="grid gap-4 pt-2 xl:grid-cols-[minmax(360px,1fr)_minmax(568px,auto)] xl:items-start">
        <h3
          ref={titleRef}
          className="min-w-0 font-bold italic text-white uppercase leading-[1.1] text-[36px] md:text-[48px] xl:text-[36px] lg:will-change-transform"
          style={{ letterSpacing: '-1.44px' }}
        >
          {title}
        </h3>
        <div className="grid min-w-0 gap-4 sm:grid-cols-[minmax(0,393px)_151px] sm:items-start xl:gap-6">
          <p
            ref={descriptionRef}
            className="min-w-0 text-white text-[14px] leading-[1.3] opacity-[0.78] lg:will-change-transform"
            style={{ letterSpacing: '-0.56px' }}
          >
            {description}
          </p>
          <div className="h-[151px] w-[151px] overflow-hidden">
            <img
              ref={imageRef}
              src={image}
              alt={title}
              className="h-full w-full object-cover"
              style={{ filter: 'grayscale(100%) contrast(1)', willChange: 'transform, filter' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
