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
    <div className="max-w-full overflow-hidden px-4 md:hidden">
      <div className="flex flex-col gap-5">
        <h2
          className="font-light uppercase text-black"
          style={{ fontSize: '30px', letterSpacing: '-2.4px', lineHeight: '0.88' }}
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
          <div className="flex w-full flex-nowrap transition-transform duration-300 ease-out" style={trackStyle}>
            {items.map((item, index) => (
              <article key={index} className="w-full min-w-0 flex-[0_0_100%]">
                <div className="flex flex-col gap-3">
                  <div className="overflow-hidden rounded-[4px]" style={{ aspectRatio: '343/423' }}>
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
                  <div className="mt-4 flex w-full justify-center gap-0.5" aria-label="Choose news item">
                    {items.map((dotItem, dotIndex) => (
                      <button
                        key={dotItem.image}
                        type="button"
                        onClick={() => goTo(dotIndex)}
                        aria-label={`Show news item ${dotIndex + 1}`}
                        aria-current={activeIndex === dotIndex}
                        className="flex h-5 w-5 items-center justify-center rounded-full"
                      >
                        <span
                          className={`h-2.5 w-2.5 rounded-full transition-colors ${
                            activeIndex === dotIndex ? 'bg-black' : 'bg-black/20'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
