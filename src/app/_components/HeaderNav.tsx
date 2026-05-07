'use client'

import gsap from 'gsap'
import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

export function HeaderNav() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isLight, setIsLight] = useState(false)
  const rootRef = useRef<HTMLElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const mobileLinkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const mobileButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const desktopLinkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const desktopUnderlineRefs = useRef<(HTMLSpanElement | null)[]>([])
  const desktopButtonRef = useRef<HTMLAnchorElement>(null)
  const desktopButtonFillRef = useRef<HTMLSpanElement>(null)
  const desktopButtonTextRef = useRef<HTMLSpanElement>(null)
  const mobileMenuButtonRef = useRef<HTMLAnchorElement>(null)
  const mobileMenuButtonFillRef = useRef<HTMLSpanElement>(null)
  const mobileMenuButtonTextRef = useRef<HTMLSpanElement>(null)
  const mobileButtonLineRefs = useRef<(HTMLSpanElement | null)[]>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    if (!mounted || !rootRef.current || !backdropRef.current || !panelRef.current) return

    const ctx = gsap.context(() => {
      const menuItems = [closeButtonRef.current, ...mobileLinkRefs.current].filter(Boolean)

      gsap.set(backdropRef.current, { autoAlpha: 0 })
      gsap.set(panelRef.current, { autoAlpha: 0, clipPath: 'inset(0 0 100% 0 round 0px)' })
      gsap.set(menuItems, { opacity: 0, y: 18 })
      gsap.set(mobileMenuButtonRef.current, { opacity: 0, y: 18 })
      gsap.set(mobileMenuButtonFillRef.current, { scaleX: 0, transformOrigin: 'left center' })
      gsap.set(mobileMenuButtonTextRef.current, { color: '#ffffff' })
      gsap.set(mobileButtonLineRefs.current, { transformOrigin: 'center center' })

      timelineRef.current = gsap
        .timeline({
          paused: true,
          defaults: { ease: 'power3.out' },
          onReverseComplete: () => {
            document.body.style.overflow = ''
            setMounted(false)
          },
        })
        .to(backdropRef.current, { autoAlpha: 1, duration: 0.2 }, 0)
        .to(panelRef.current, { autoAlpha: 1, clipPath: 'inset(0 0 0% 0 round 0px)', duration: 0.58 }, 0)
        .to(
          menuItems,
          { opacity: 1, y: 0, duration: 0.34, stagger: 0.055, ease: 'power2.out' },
          0.18
        )
        .to(mobileMenuButtonRef.current, { opacity: 1, y: 0, duration: 0.3 }, 0.43)

      document.body.style.overflow = 'hidden'
      timelineRef.current.play(0)
    }, rootRef)

    return () => {
      timelineRef.current = null
      ctx.revert()
    }
  }, [mounted])

  useEffect(() => {
    if (!mounted || open) return

    const timeline = timelineRef.current
    if (!timeline) {
      document.body.style.overflow = ''
      return
    }

    timeline.reverse()
  }, [open, mounted])

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    let frame: number | null = null

    const updateNavTheme = () => {
      frame = null

      const sampleY = 34
      const lightSections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-theme="light"]'))
      const nextIsLight = lightSections.some((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= sampleY && rect.bottom >= sampleY
      })

      setIsLight(nextIsLight)
    }

    const requestUpdate = () => {
      if (frame !== null) return
      frame = window.requestAnimationFrame(updateNavTheme)
    }

    updateNavTheme()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  useEffect(() => {
    gsap.set(desktopButtonFillRef.current, { scaleX: 0 })
    gsap.set(desktopButtonTextRef.current, { color: isLight ? '#000000' : '#ffffff' })
  }, [isLight])

  const animateDesktopLink = (index: number, hovered: boolean) => {
    const link = desktopLinkRefs.current[index]
    const underline = desktopUnderlineRefs.current[index]

    if (link) {
      gsap.to(link, {
        y: hovered ? -2 : 0,
        duration: 0.24,
        ease: 'power2.out',
      })
    }

    if (underline) {
      gsap.to(underline, {
        scaleX: hovered ? 1 : 0,
        duration: 0.24,
        ease: 'power2.out',
      })
    }
  }

  const animateDesktopButton = (hovered: boolean) => {
    const buttonColors = getDesktopButtonColors()

    animateCtaButton(
      desktopButtonRef.current,
      desktopButtonFillRef.current,
      desktopButtonTextRef.current,
      hovered,
      buttonColors.hoverTextColor,
      buttonColors.idleTextColor
    )
  }

  const animateCtaButton = (
    button: HTMLElement | null,
    fill: HTMLSpanElement | null,
    text: HTMLSpanElement | null,
    hovered: boolean,
    hoverTextColor = '#000000',
    idleTextColor = '#ffffff'
  ) => {
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

  const animateMobileButton = (hovered: boolean) => {
    if (!mobileButtonRef.current) return

    gsap.to(mobileButtonRef.current, {
      scale: hovered ? 1.04 : 1,
      y: hovered ? -1 : 0,
      duration: 0.24,
      ease: 'power2.out',
    })

    gsap.to(mobileButtonLineRefs.current, {
      scaleX: hovered ? 0.82 : 1,
      duration: 0.24,
      ease: 'power2.out',
    })
  }

  const canHover = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

  const openMenu = () => {
    setMounted(true)
    setOpen(true)
  }

  const closeMenu = () => setOpen(false)

  const navColorClass = isLight ? 'text-white' : 'text-black'
  const desktopButtonClass = isLight ? 'bg-white text-black' : 'bg-black text-white'
  const desktopButtonFillClass = isLight ? 'bg-black' : 'bg-white'
  const getDesktopButtonColors = () => ({
    hoverTextColor: isLight ? '#ffffff' : '#000000',
    idleTextColor: isLight ? '#000000' : '#ffffff',
  })

  return (
    <header
      ref={rootRef}
      className={`fixed inset-x-0 top-0 z-[100] px-4 transition-colors duration-300 md:px-8 ${navColorClass}`}
    >
      <div className="relative z-20 flex w-full items-center justify-between py-6 xl:hidden">
        <Link href="/" className="text-[16px] font-semibold tracking-[-0.64px]">
          H.Studio
        </Link>

        <button
          ref={mobileButtonRef}
          className="relative z-30 flex h-12 w-12 items-center justify-center"
          onClick={openMenu}
          onMouseEnter={() => {
            if (canHover()) animateMobileButton(true)
          }}
          onMouseLeave={() => {
            if (canHover()) animateMobileButton(false)
          }}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span
            ref={(node) => {
              mobileButtonLineRefs.current[0] = node
            }}
            className="absolute h-[1.5px] w-8 bg-current transition-colors duration-300"
            style={{ transform: 'translateY(-7px)' }}
          />
          <span
            ref={(node) => {
              mobileButtonLineRefs.current[1] = node
            }}
            className="absolute h-[1.5px] w-8 bg-current transition-colors duration-300"
          />
          <span
            ref={(node) => {
              mobileButtonLineRefs.current[2] = node
            }}
            className="absolute h-[1.5px] w-8 bg-current transition-colors duration-300"
            style={{ transform: 'translateY(7px)' }}
          />
        </button>
      </div>

      <div className="hidden w-full items-center justify-between py-2 xl:flex">
        <Link href="/" className="text-[16px] font-semibold tracking-[-0.64px]">
          H.Studio
        </Link>

        <div className="flex items-center gap-14 text-[16px] font-semibold tracking-[-0.64px] capitalize">
          {NAV_LINKS.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              ref={(node) => {
                desktopLinkRefs.current[index] = node
              }}
              className="relative inline-flex flex-col items-center pb-1 transition-transform"
              onMouseEnter={() => {
                if (canHover()) animateDesktopLink(index, true)
              }}
              onMouseLeave={() => {
                if (canHover()) animateDesktopLink(index, false)
              }}
            >
              <span>{item.label}</span>
              <span
                ref={(node) => {
                  desktopUnderlineRefs.current[index] = node
                }}
                className="absolute -bottom-0.5 left-0 h-px w-full origin-left bg-current transition-colors duration-300"
                style={{ transform: 'scaleX(0)' }}
              />
            </a>
          ))}
        </div>

        <Link
          ref={desktopButtonRef}
          href="/lets-talk"
          className={`relative inline-block overflow-hidden rounded-full px-4 py-3 text-[14px] font-medium tracking-[-0.56px] shadow-none transition-colors duration-300 ${desktopButtonClass}`}
          onMouseEnter={() => {
            if (canHover()) animateDesktopButton(true)
          }}
          onMouseLeave={() => {
            if (canHover()) animateDesktopButton(false)
          }}
        >
          <span ref={desktopButtonFillRef} className={`absolute inset-0 origin-left scale-x-0 ${desktopButtonFillClass}`} />
          <span ref={desktopButtonTextRef} className="relative z-10">Let&apos;s talk</span>
        </Link>
      </div>

      {mounted && (
        <div
          ref={backdropRef}
          className="fixed inset-0 z-[110] xl:hidden"
          onClick={closeMenu}
        >
          <div ref={panelRef} className="relative z-[120] flex h-full w-full flex-col bg-[#fafafa] px-6 py-6" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-center justify-between">
              <Link href="/" onClick={closeMenu} className="text-[16px] font-semibold tracking-[-0.64px] text-black">
                H.Studio
              </Link>
              <button
                ref={closeButtonRef}
                onClick={closeMenu}
                aria-label="Close menu"
                className="relative z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-black/10"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6L18 18M6 18L18 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="mt-12 flex flex-col border-t border-[#e5e5e5]">
              {NAV_LINKS.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  ref={(node) => {
                    mobileLinkRefs.current[index] = node
                  }}
                  onClick={closeMenu}
                  className="border-b border-[#e5e5e5] py-4 text-[38px] font-light capitalize tracking-[-1.5px] text-black"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <Link
              ref={mobileMenuButtonRef}
              href="/lets-talk"
              className="relative mt-auto inline-block self-start overflow-hidden rounded-full bg-black px-6 py-3 text-[14px] font-medium tracking-[-0.56px] text-white"
              onClick={closeMenu}
              onMouseEnter={() => {
                if (!canHover()) return
                animateCtaButton(
                  mobileMenuButtonRef.current,
                  mobileMenuButtonFillRef.current,
                  mobileMenuButtonTextRef.current,
                  true
                )
              }}
              onMouseLeave={() => {
                if (!canHover()) return
                animateCtaButton(
                  mobileMenuButtonRef.current,
                  mobileMenuButtonFillRef.current,
                  mobileMenuButtonTextRef.current,
                  false
                )
              }}
            >
              <span ref={mobileMenuButtonFillRef} className="absolute inset-0 origin-left scale-x-0 bg-white" />
              <span ref={mobileMenuButtonTextRef} className="relative z-10">Let&apos;s talk</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
