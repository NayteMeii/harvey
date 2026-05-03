'use client'

import gsap from 'gsap'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { useRef } from 'react'

type AnimatedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  fillClassName?: string
  textClassName?: string
  hoverTextColor?: string
  idleTextColor?: string
}

export function AnimatedButton({
  children,
  className = '',
  fillClassName = 'bg-white',
  textClassName = '',
  hoverTextColor = '#000000',
  idleTextColor = '#ffffff',
  onMouseEnter,
  onMouseLeave,
  type = 'button',
  ...props
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const fillRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const animate = (hovered: boolean) => {
    const button = buttonRef.current
    const fill = fillRef.current
    const text = textRef.current

    if (!button || !fill || !text) return

    gsap.to(button, {
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

  return (
    <button
      ref={buttonRef}
      type={type}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={(event) => {
        animate(true)
        onMouseEnter?.(event)
      }}
      onMouseLeave={(event) => {
        animate(false)
        onMouseLeave?.(event)
      }}
      {...props}
    >
      <span ref={fillRef} className={`absolute inset-0 origin-left scale-x-0 ${fillClassName}`} />
      <span ref={textRef} className={`relative z-10 ${textClassName}`}>
        {children}
      </span>
    </button>
  )
}
