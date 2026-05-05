'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ReactNode } from 'react'
import { useLayoutEffect, useRef } from 'react'

type ScrubTextRevealProps = {
  children: ReactNode
  className?: string
}

export function ScrubTextReveal({ children, className = '' }: ScrubTextRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return

    gsap.registerPlugin(ScrollTrigger)
    const originalHtml = root.innerHTML

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
    const textNodes: Text[] = []
    let currentNode = walker.nextNode()

    while (currentNode) {
      if (currentNode.textContent?.trim()) {
        textNodes.push(currentNode as Text)
      }
      currentNode = walker.nextNode()
    }

    textNodes.forEach((node) => {
      const fragment = document.createDocumentFragment()
      const text = node.textContent ?? ''

      Array.from(text).forEach((character) => {
        if (/\s/.test(character)) {
          fragment.appendChild(document.createTextNode(character))
          return
        }

        const span = document.createElement('span')
        span.className = 'scrub-letter'
        span.textContent = character
        fragment.appendChild(span)
      })

      node.parentNode?.replaceChild(fragment, node)
    })

    const letters = root.querySelectorAll<HTMLElement>('.scrub-letter')

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      gsap.set(letters, { opacity: 1 })
      return () => {
        root.innerHTML = originalHtml
      }
    }

    const ctx = gsap.context(() => {
      gsap.set(letters, { opacity: 0.14 })
      gsap.to(letters, {
        opacity: 1,
        ease: 'none',
        stagger: 0.012,
        scrollTrigger: {
          trigger: root,
          start: 'top 82%',
          end: 'bottom 35%',
          scrub: 0.75,
          invalidateOnRefresh: true,
        },
      })
    }, root)

    return () => {
      ctx.revert()
      root.innerHTML = originalHtml
    }
  }, [])

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  )
}
