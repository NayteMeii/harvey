'use client'

import { useState } from 'react'

type Testimonial = {
  name: string
  quote: string
  logo: string
}

export function MobileTestimonials({ items }: { items: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = items[activeIndex]

  return (
    <div className="md:hidden py-16 overflow-hidden">
      <p
        className="px-4 font-medium text-black capitalize leading-[0.8] mb-8"
        style={{ fontSize: '64px', letterSpacing: '-4.48px' }}
      >
        Testimonials
      </p>

      <div className="px-4">
        <div className="transition-opacity duration-200">
          <div style={{ transform: activeIndex % 2 === 0 ? 'rotate(-1.5deg)' : 'rotate(1.5deg)' }}>
            <MobileTestimonialCard name={active.name} quote={active.quote} logo={active.logo} />
          </div>
        </div>

        <div className="mt-7 flex justify-center gap-0.5" aria-label="Choose testimonial">
          {items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={activeIndex === index}
              className="flex h-5 w-5 items-center justify-center rounded-full"
            >
              <span
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-black' : 'bg-black/20'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileTestimonialCard({ name, quote, logo }: Testimonial) {
  return (
    <div className="bg-[#f1f1f1] border border-[#ddd] flex min-h-[430px] flex-col gap-5 rounded-[4px] p-6">
      <img
        src={logo}
        alt=""
        className="self-start block"
        style={{ height: '28px', width: 'auto', maxWidth: '144px', objectFit: 'contain' }}
      />
      <p className="text-[#1f1f1f] text-[24px] leading-[1.18]" style={{ letterSpacing: '-0.96px' }}>
        {quote}
      </p>
      <p className="mt-auto font-black text-black text-[20px] uppercase leading-[1.1]" style={{ letterSpacing: '-0.8px' }}>
        {name}
      </p>
    </div>
  )
}
