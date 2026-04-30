'use client'

import { useState } from 'react'

const NAV_LINKS = ['About', 'Services', 'Projects', 'News', 'Contact']

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#fafafa] flex flex-col px-6 py-6 md:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-[16px] font-semibold tracking-[-0.64px] text-black">H.Studio</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M6 18L18 6" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col mt-12 border-t border-[#e5e5e5]">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[38px] font-light capitalize tracking-[-1.5px] text-black border-b border-[#e5e5e5] py-4"
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="mt-auto self-start rounded-full bg-black px-6 py-3 text-[14px] font-medium tracking-[-0.56px] text-white">
          Let&apos;s talk
        </button>
      </div>

      {/* Hamburger button — rendered inline in the nav flex row */}
      <button
        className="md:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 6H21M3 12H21M3 18H21" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </>
  )
}
