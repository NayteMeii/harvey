'use client'

import { useState } from 'react'

type NewsItem = {
  image: string
  text: string
}

export function MobileNewsSlider({ items }: { items: NewsItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const trackStyle = {
    transform: `translateX(-${activeIndex * 100}%)`,
  }

  const goTo = (index: number) => {
    if (index < 0 || index >= items.length) return
    setActiveIndex(index)
  }

  return (
    <div className="md:hidden px-4">
      <div className="flex flex-col gap-8">
        <h2
          className="font-light uppercase text-black"
          style={{ fontSize: '34px', letterSpacing: '-2.72px', lineHeight: '0.86' }}
        >
          Keep up with my
          <br />
          latest news &
          <br />
          achievements
        </h2>

        <div
          className="overflow-hidden"
          onTouchStart={(event) => {
            const touch = event.touches[0]
            event.currentTarget.dataset.startX = String(touch.clientX)
          }}
          onTouchEnd={(event) => {
            const startX = Number(event.currentTarget.dataset.startX || '0')
            const endX = event.changedTouches[0]?.clientX ?? startX
            const delta = endX - startX

            if (Math.abs(delta) < 35) return

            if (delta < 0) {
              goTo(activeIndex + 1)
            } else {
              goTo(activeIndex - 1)
            }
          }}
        >
          <div className="flex w-full transition-transform duration-300 ease-out" style={trackStyle}>
            {items.map((item, index) => (
              <article key={index} className="min-w-full shrink-0 pr-4">
                <div className="flex flex-col gap-4">
                  <div className="overflow-hidden rounded-[4px]" style={{ aspectRatio: '300/398' }}>
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[#1f1f1f] text-[14px] leading-[1.3]" style={{ letterSpacing: '-0.56px' }}>
                    {item.text}
                  </p>
                  <div className="flex items-center gap-[10px] border-b border-black pb-1 w-fit">
                    <span className="font-medium text-[14px] text-black" style={{ letterSpacing: '-0.56px' }}>
                      Read more
                    </span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path
                        d="M4 14L14 4M14 4H7M14 4V11"
                        stroke="black"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2" aria-label="Choose news item">
          {items.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show news item ${index + 1}`}
              aria-current={activeIndex === index}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                activeIndex === index ? 'bg-black' : 'bg-black/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
