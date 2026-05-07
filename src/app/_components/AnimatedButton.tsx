'use client'

import gsap from 'gsap'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { useRef } from 'react'

type SharedProps = {
  children: ReactNode
  className?: string
  fillClassName?: string
  textClassName?: string
  hoverTextColor?: string
  idleTextColor?: string
}

type ButtonOnly = Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps>
type AnchorOnly = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof SharedProps | 'href'>

type AnimatedButtonProps =
  | (SharedProps & ButtonOnly & { href?: undefined })
  | (SharedProps & AnchorOnly & { href: string })

export function AnimatedButton({
  children,
  className = '',
  fillClassName = 'bg-white',
  textClassName = '',
  hoverTextColor = '#000000',
  idleTextColor = '#ffffff',
  onMouseEnter,
  onMouseLeave,
  href,
  ...props
}: AnimatedButtonProps) {
  const elementRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const animate = (hovered: boolean) => {
    const element = elementRef.current
    const fill = fillRef.current
    const text = textRef.current

    if (!element || !fill || !text) return

    gsap.to(element, {
      y: hovered ? -2 : 0,
      rotate: hovered ? -1.2 : 0,
      scale: hovered ? 1.03 : 1,
      duration: 0.28,
      ease: 'power2.out',
      boxShadow: hovered ? '0 14px 28px rgba(0, 0, 0, 0.18)' : '0 0 0 rgba(0, 0, 0, 0)',
    })
    gsap.to(fill, {
      scaleX: hovered ? 1 : 0,
      duration: 0.34,
      ease: hovered ? 'power3.out' : 'power2.inOut',
      transformOrigin: hovered ? 'left center' : 'right center',
    })
    gsap.to(text, {
      color: hovered ? hoverTextColor : idleTextColor,
      duration: 0.18,
      ease: 'power2.out',
    })
  }

  const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    if (canHover()) animate(true)
    ;(onMouseEnter as ((e: React.MouseEvent<HTMLElement>) => void) | undefined)?.(event)
  }
  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (canHover()) animate(false)
    ;(onMouseLeave as ((e: React.MouseEvent<HTMLElement>) => void) | undefined)?.(event)
  }

  const inner = (
    <>
      <span ref={fillRef} className={`absolute inset-0 origin-left scale-x-0 ${fillClassName}`} />
      <span ref={textRef} className={`relative z-10 ${textClassName}`}>
        {children}
      </span>
    </>
  )

  if (href) {
    const anchorProps = props as AnchorOnly
    return (
      <Link
        ref={elementRef as React.Ref<HTMLAnchorElement>}
        href={href}
        className={`relative inline-block overflow-hidden ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...anchorProps}
      >
        {inner}
      </Link>
    )
  }

  const buttonProps = props as ButtonOnly
  return (
    <button
      ref={elementRef as React.Ref<HTMLButtonElement>}
      type={buttonProps.type ?? 'button'}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...buttonProps}
    >
      {inner}
    </button>
  )
}
