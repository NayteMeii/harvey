'use client';

import { useState } from 'react';

const NAV_LINKS = ['About', 'Services', 'Projects', 'News', 'Contact'];

const SERVICES = [
  {
    number: '1',
    title: 'Brand Discovery',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/8a76528a-46ef-43cf-bccb-e24e13b1a026',
  },
  {
    number: '2',
    title: 'Web Design & Dev',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/7b569c09-7e90-4a51-9bfc-9b47b0ede0fe',
  },
  {
    number: '3',
    title: 'Marketing',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/3a3eeb5c-5af8-449e-84bf-20e1013d9b77',
  },
  {
    number: '4',
    title: 'Photography',
    description:
      'Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.',
    image: 'https://www.figma.com/api/mcp/asset/45eb3295-a439-4150-b936-b68c5ae8c8d2',
  },
];

const NEWS_ITEMS = [
  {
    image: 'https://www.figma.com/api/mcp/asset/137b7e85-9b18-456f-8748-0dee5f88c783',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/0efa4f7b-a5f0-4228-a524-c4db6ae1b760',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/908ef34f-64db-41d0-8a9e-68b29d32d913',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Marko Stojković',
    quote: 'A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.',
    logo: 'https://www.figma.com/api/mcp/asset/573c1093-66f1-40c7-bb4c-ca8bb31a0c4f',
    rotate: '-6.85deg',
    pos: { left: '102px', top: '142px' },
  },
  {
    name: 'Lukas Weber',
    quote: 'Professional, precise, and incredibly fast at handling complex product visualizations and templates.',
    logo: 'https://www.figma.com/api/mcp/asset/52e91228-25cb-45b1-8262-c68fbc73d3ba',
    rotate: '2.9deg',
    pos: { left: '676px', top: '272px' },
  },
  {
    name: 'Sarah Jenkins',
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    logo: 'https://www.figma.com/api/mcp/asset/e23fa04f-5828-4414-9999-96b41651329e',
    rotate: '2.23deg',
    pos: { left: '305px', top: '553px' },
  },
  {
    name: 'Sofia Martínez',
    quote: 'An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.',
    logo: 'https://www.figma.com/api/mcp/asset/2a70d83f-ea16-4ce8-b777-18d4f152db1e',
    rotate: '-4.15deg',
    pos: { left: '987px', top: '546px' },
  },
];

const PROJECTS = [
  {
    title: 'Surfers paradise',
    image: 'https://www.figma.com/api/mcp/asset/5b74333f-b1d2-427d-8dc1-c34dcd926126',
    tags: ['Social Media', 'Photography'],
  },
  {
    title: 'Cyberpunk caffe',
    image: 'https://www.figma.com/api/mcp/asset/5f978ceb-d5e2-4830-930c-44021311dfb3',
    tags: ['Social Media', 'Photography'],
  },
  {
    title: 'Agency 976',
    image: 'https://www.figma.com/api/mcp/asset/bb88cdfe-5900-4d25-bd7a-2b5094f8a63d',
    tags: ['Social Media', 'Photography'],
  },
  {
    title: 'Minimal Playground',
    image: 'https://www.figma.com/api/mcp/asset/4dfc525f-8eed-40ee-aead-c56bbb9e6576',
    tags: ['Social Media', 'Photography'],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <main className="bg-[#fafafa] flex-1">

      {/* ── Mobile fullscreen menu ── */}
      <div
        className={`fixed inset-0 z-50 bg-[#fafafa] flex flex-col px-6 py-6 md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-[16px] font-semibold tracking-[-0.64px] text-black">H.Studio</span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
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
              onClick={() => setMenuOpen(false)}
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

      {/* ── Hero section ── */}
      <section
        className="relative overflow-hidden flex flex-col items-center
          min-h-screen md:h-[847px]
          px-4 md:px-8
          pb-6 md:pb-0
          justify-between md:justify-start md:gap-[240px]"
        style={{ isolation: 'isolate' }}
      >
        {/* Background photo — always fills the section */}
        <img
          src="/hero-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ zIndex: -1, objectPosition: 'center 10%' }}
        />

        {/* Bottom blur with gradient fade — no hard cut-off */}
        <div
          className="pointer-events-none absolute left-0 w-full backdrop-blur-[10px]"
          style={{
            bottom: 0,
            height: '349px',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%)',
          }}
        />

        {/* ── Navbar ── */}
        <nav className="relative flex w-full items-center justify-between py-6">
          <span className="text-[16px] font-semibold tracking-[-0.64px] text-black">H.Studio</span>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Desktop: nav links + CTA */}
          <ul className="hidden md:flex gap-14 text-[16px] font-semibold tracking-[-0.64px] text-black capitalize">
            {NAV_LINKS.map((item) => (
              <li key={item} className="cursor-pointer transition-opacity hover:opacity-60">
                {item}
              </li>
            ))}
          </ul>
          <button className="hidden md:flex rounded-full bg-black px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white transition-opacity hover:opacity-80">
            Let&apos;s talk
          </button>
        </nav>

        {/* ── Hero text ── */}
        {/*
          No z-index on these containers — avoids creating a new stacking context
          that would break mix-blend-mode. The image at z:-1 is behind everything
          in the section's isolated compositing group.
        */}
        <div className="relative flex w-full flex-col items-center
          justify-between gap-6
          md:h-auto md:justify-start md:shrink-0">

          {/* Name */}
          <div className="flex w-full flex-col items-center md:items-start md:pb-[15px]">
            <div className="flex w-full items-center justify-center md:justify-start md:px-[18px] md:mb-[-15px] mb-3">
              <p className="font-mono text-[14px] uppercase leading-[1.1] text-white mix-blend-overlay whitespace-nowrap">
                [ Hello i&apos;m ]
              </p>
            </div>
            {/*
              clamp(96px, calc(60px + 9.6vw), 198px):
                375px → 96px  (mobile, wraps to 2 lines)
                1440px → 198px (desktop, single line)
              letter-spacing: -0.07em scales proportionally with font-size.
            */}
            <h1
              className="w-full text-center font-medium capitalize text-white mix-blend-overlay
                leading-[0.85] md:leading-[1.1] md:mb-[-15px]"
              style={{
                fontSize: 'clamp(96px, calc(60px + 9.6vw), 198px)',
                letterSpacing: '-0.07em',
              }}
            >
              Harvey<br className="md:hidden" /><span className="hidden md:inline">&nbsp;&nbsp;&nbsp;</span>Specter
            </h1>
          </div>

          {/* Description + CTA */}
          <div className="flex w-full flex-col items-center md:items-end">
            <div className="flex w-[293px] md:w-[294px] flex-col items-center md:items-start gap-[17px]">
              <p
                className="text-[14px] font-bold italic uppercase leading-[1.1] text-[#1f1f1f] text-center md:text-left"
                style={{ letterSpacing: '-0.56px' }}
              >
                H.Studio is a{' '}
                <span className="font-normal italic">full-service</span>
                {' '}creative studio creating beautiful digital experiences and
                products. We are an{' '}
                <span className="font-normal italic">award winning</span>
                {' '}design and art group specializing in branding, web design
                and engineering.
              </p>
              <button className="rounded-full bg-black px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white transition-opacity hover:opacity-80">
                Let&apos;s talk
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* ── Kinetic bio section ── */}
      <section className="overflow-x-hidden px-4 md:px-8 py-12 md:py-[120px]">
        <div className="flex flex-col gap-6 w-full">

          {/* [ 8+ years in industry ] + divider */}
          <div className="flex flex-col gap-3 items-end">
            <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
              [ 8+ years in industry ]
            </span>
            <div className="w-full h-px bg-[#1f1f1f] opacity-20" />
          </div>

          {/* Staggered lines */}
          <div className="flex flex-col gap-0 uppercase">

            {/* Line 1 — 001 label + A creative director / */}
            <div className="text-center md:text-left md:pl-0">
              {/* 001 sits above the text on mobile */}
              <p className="md:hidden font-mono text-[14px] text-[#1f1f1f] leading-[1.1] text-center mb-1">
                001
              </p>
              <div className="flex items-start justify-center md:justify-start gap-3">
                <span
                  className="font-light text-[32px] md:text-[96px] leading-[0.84] text-black whitespace-nowrap"
                  style={{ letterSpacing: "-0.08em" }}
                >
                  A creative director&nbsp;&nbsp;&nbsp;/
                </span>
                {/* 001 sits inline on desktop */}
                <span className="hidden md:block font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mt-1 shrink-0">
                  001
                </span>
              </div>
            </div>

            {/* Line 2 — Photographer */}
            <div className="text-center md:text-left md:pl-[214px]">
              <span
                className="font-light text-[32px] md:text-[96px] leading-[0.84] text-black whitespace-nowrap"
                style={{ letterSpacing: "-0.08em" }}
              >
                Photographer
              </span>
            </div>

            {/* Line 3 — Born & raised (& in Playfair italic) */}
            <div className="text-center md:text-left md:pl-[610px]">
              <span
                className="font-light text-[32px] md:text-[96px] leading-[0.84] text-black whitespace-nowrap"
                style={{ letterSpacing: "-0.08em" }}
              >
                Born{" "}
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: 0,
                  }}
                >
                  &amp;
                </span>
                {" "}raised
              </span>
            </div>

            {/* Line 4 — on the south side */}
            <div className="text-center md:text-left md:pl-0">
              <span
                className="font-light text-[32px] md:text-[96px] leading-[0.84] text-black whitespace-nowrap"
                style={{ letterSpacing: "-0.08em" }}
              >
                on the south side
              </span>
            </div>

            {/* Line 5 — of chicago. + [ creative freelancer ] */}
            <div className="text-center md:text-left md:pl-[606px]">
              {/* Desktop: label inline after text */}
              <div className="hidden md:flex items-start gap-6">
                <span
                  className="font-light text-[96px] leading-[0.84] text-black whitespace-nowrap"
                  style={{ letterSpacing: "-0.08em" }}
                >
                  of chicago.
                </span>
                <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] whitespace-nowrap mt-[26px] shrink-0">
                  [ creative freelancer ]
                </span>
              </div>
              {/* Mobile: label below text */}
              <div className="md:hidden flex flex-col items-center">
                <span
                  className="font-light text-[32px] leading-[0.84] text-black whitespace-nowrap"
                  style={{ letterSpacing: "-0.08em" }}
                >
                  of chicago.
                </span>
                <p className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mt-2">
                  [ creative freelancer ]
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── About section ── */}
      <section className="px-4 md:px-8 py-12 md:py-20 overflow-hidden">

        {/* Mobile layout — stacked */}
        <div className="flex flex-col gap-6 md:hidden">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">002</span>
            <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">[ About ]</span>
          </div>
          {/* Quote block with corner brackets */}
          <QuoteBrackets>
            <p className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f]" style={{ letterSpacing: "-0.56px" }}>
              Placeholder paragraph one. This is where you introduce yourself — your background,
              your passion for your craft, and what drives you creatively. Two to three sentences
              work best here. Placeholder paragraph two. Here you can describe your technical
              approach, how you collaborate with clients, or what sets your work apart from others
              in your field.
            </p>
          </QuoteBrackets>
          {/* Portrait — full width */}
          <div className="w-full rounded-[8px] overflow-hidden" style={{ aspectRatio: "343/483" }}>
            <img src="/about-portrait.jpg" alt="Harvey Specter" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Desktop layout — two columns */}
        <div className="hidden md:flex w-full h-[614px]">

          {/* Left: [ About ] label */}
          <div className="w-[393px] shrink-0 pt-0">
            <span className="font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">[ About ]</span>
          </div>

          {/* Right: quote (bottom) + photo (right) */}
          <div className="flex flex-1 items-end gap-8">

            {/* Quote block at bottom-left of content area */}
            <div className="flex-1 max-w-[465px] self-end">
              <QuoteBrackets>
                <p className="text-[14px] font-normal leading-[1.3] text-[#1f1f1f] py-3" style={{ letterSpacing: "-0.56px" }}>
                  Placeholder paragraph one. This is where you introduce yourself — your background,
                  your passion for your craft, and what drives you creatively. Two to three sentences
                  work best here. Placeholder paragraph two. Here you can describe your technical
                  approach, how you collaborate with clients, or what sets your work apart from others
                  in your field.
                </p>
              </QuoteBrackets>
            </div>

            {/* Portrait photo */}
            <div className="flex items-start gap-6 h-full shrink-0">
              <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] shrink-0">002</span>
              <div className="h-full w-[436px] rounded-[8px] overflow-hidden">
                <img src="/about-portrait.jpg" alt="Harvey Specter" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ── Photo break section ── */}
      <section className="w-full h-screen overflow-hidden">
        <img
          src="/camera-photo.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* ── Services / Deliverables section ── */}
      <section
        className="bg-black px-4 md:px-8 py-12 md:py-20 flex flex-col gap-8 md:gap-12"
        id="services"
      >
        {/* Section label */}
        <p className="font-mono text-[14px] text-white uppercase leading-[1.1]">
          [ services ]
        </p>

        {/* Header: [4] ←→ Deliverables */}
        <div className="flex items-center justify-between w-full font-light uppercase text-white leading-none text-[32px] tracking-[-2.56px] md:text-[96px] md:tracking-[-7.68px] whitespace-nowrap">
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        {/* Service list */}
        <div className="flex flex-col gap-12 w-full">
          {SERVICES.map((service) => (
            <div key={service.number} className="flex flex-col gap-2">
              {/* Number + horizontal rule */}
              <p className="font-mono text-[14px] text-white uppercase leading-[1.1]">
                [ {service.number} ]
              </p>
              <div className="w-full h-px bg-white/30" />

              {/* Desktop: name left | description + image right; Mobile: stacked */}
              <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between md:items-start gap-4 pt-2">
                <h3
                  className="font-bold italic text-white uppercase leading-[1.1] text-[36px] md:shrink-0"
                  style={{ letterSpacing: '-1.44px' }}
                >
                  {service.title}
                </h3>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-start">
                  <p
                    className="text-white text-[14px] leading-[1.3] md:w-[393px]"
                    style={{ letterSpacing: '-0.56px' }}
                  >
                    {service.description}
                  </p>
                  <div className="w-[151px] h-[151px] shrink-0 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Selected Work / Portfolio section ── */}
      <section className="px-4 md:px-8 py-12 md:py-20" id="projects">

        {/* Mobile: [ portfolio ] label above header */}
        <p className="md:hidden font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1] mb-4">
          [ portfolio ]
        </p>

        {/* Header */}
        <div className="flex items-start justify-between w-full mb-8 md:mb-[61px]">
          <div className="flex gap-[10px] items-start uppercase">
            <div
              className="font-light text-black"
              style={{
                lineHeight: '0.86',
                fontSize: 'clamp(32px, 6.7vw, 96px)',
                letterSpacing: 'clamp(-2.56px, -0.53vw, -7.68px)',
              }}
            >
              <p className="mb-0">Selected</p>
              <p>Work</p>
            </div>
            <span className="font-mono text-[14px] text-[#1f1f1f] leading-[1.1] mt-1 shrink-0">004</span>
          </div>
          {/* Desktop: rotated [ portfolio ] on far right */}
          <div className="hidden md:flex h-[110px] w-[15px] items-center justify-center shrink-0">
            <span className="-rotate-90 whitespace-nowrap font-mono text-[14px] text-[#1f1f1f] uppercase leading-[1.1]">
              [ portfolio ]
            </span>
          </div>
        </div>

        {/* Desktop: staggered 2-column grid */}
        <div className="hidden md:flex gap-6 items-end">
          {/* Left column — stretches full height with justify-between */}
          <div className="flex-1 self-stretch flex flex-col justify-between gap-10">
            <ProjectCard title={PROJECTS[0].title} image={PROJECTS[0].image} tags={PROJECTS[0].tags} height={744} />
            <ProjectCard title={PROJECTS[1].title} image={PROJECTS[1].image} tags={PROJECTS[1].tags} height={699} />
            <PortfolioCTA />
          </div>
          {/* Right column — offset 240px from top */}
          <div className="flex-1 flex flex-col gap-[117px] pt-[240px]">
            <ProjectCard title={PROJECTS[2].title} image={PROJECTS[2].image} tags={PROJECTS[2].tags} height={699} />
            <ProjectCard title={PROJECTS[3].title} image={PROJECTS[3].image} tags={PROJECTS[3].tags} height={744} />
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="md:hidden flex flex-col gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} title={p.title} image={p.image} tags={p.tags} height={390} />
          ))}
          <PortfolioCTA />
        </div>

      </section>

      {/* ── Testimonials section ── */}
      <section className="overflow-hidden" id="testimonials">

        {/* Desktop: floating scattered cards + big heading */}
        <div className="hidden md:flex relative flex-col items-center justify-center min-h-[987px] py-[120px]">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="absolute"
              style={{
                left: t.pos.left,
                top: t.pos.top,
                // Lukas Weber (upper-right) sits behind the heading; the other three float above it
                zIndex: t.name === 'Lukas Weber' ? 5 : 20,
              }}
            >
              <div style={{ transform: `rotate(${t.rotate})` }}>
                <TestimonialCard name={t.name} quote={t.quote} logo={t.logo} className="w-[353px]" />
              </div>
            </div>
          ))}
          {/* z-10 — above Lukas (z-5) but below Marko/Sarah/Sofia (z-20) */}
          <p
            className="relative z-10 font-medium text-black text-center capitalize leading-[1.1]"
            style={{ fontSize: '198px', letterSpacing: '-13.86px' }}
          >
            Testimonials
          </p>
        </div>

        {/* Mobile: heading + horizontal-scroll card fan */}
        <div className="md:hidden py-16 overflow-hidden">
          <p
            className="px-4 font-medium text-black capitalize leading-[0.8] mb-8"
            style={{ fontSize: '64px', letterSpacing: '-4.48px' }}
          >
            Testimonials
          </p>
          <div
            className="flex items-center overflow-x-auto pl-4"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className="shrink-0"
                style={{
                  marginRight: i < TESTIMONIALS.length - 1 ? '-12px' : '16px',
                  zIndex: TESTIMONIALS.length - i,
                  position: 'relative',
                }}
              >
                <div style={{ transform: `rotate(${i % 2 === 0 ? '-3.5deg' : '2deg'})` }}>
                  <TestimonialCard name={t.name} quote={t.quote} logo={t.logo} className="w-[260px]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ── News & Achievements section ── */}
      <section className="bg-[#f3f3f3] py-16 md:py-[120px]" id="news">

        {/* Mobile: title + snap-scroll slider */}
        <div className="md:hidden flex flex-col gap-8 px-4">
          <h2
            className="font-light uppercase text-black"
            style={{ fontSize: '32px', letterSpacing: '-2.56px', lineHeight: '0.86' }}
          >
            Keep up with my latest news &amp; achievements
          </h2>
          <div
            className="-mx-4 flex gap-4 overflow-x-auto pl-4 pb-2"
            style={{ scrollbarWidth: 'none', scrollSnapType: 'x mandatory' } as React.CSSProperties}
          >
            {NEWS_ITEMS.map((item, i) => (
              <div
                key={i}
                className="shrink-0 flex flex-col gap-4"
                style={{ width: '300px', scrollSnapAlign: 'start' }}
              >
                <div className="overflow-hidden" style={{ height: '398px' }}>
                  <img src={item.image} alt="" className="w-full h-full object-cover" />
                </div>
                <p className="text-[#1f1f1f] text-[14px] leading-[1.3]" style={{ letterSpacing: '-0.56px' }}>
                  {item.text}
                </p>
                <div className="flex items-center gap-[10px] border-b border-black pb-1 w-fit">
                  <span className="font-medium text-[14px] text-black" style={{ letterSpacing: '-0.56px' }}>Read more</span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 14L14 4M14 4H7M14 4V11" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-4" />
          </div>
        </div>

        {/* Desktop: rotated title + horizontal-scroll slider */}
        <div className="hidden md:flex items-stretch overflow-hidden">
          {/* Rotated title — fixed left column */}
          <div className="flex h-[706px] w-[110px] items-center justify-center shrink-0 ml-8">
            <h2
              className="font-light uppercase text-black"
              style={{
                fontSize: '64px',
                letterSpacing: '-5.12px',
                lineHeight: '0.86',
                transform: 'rotate(-90deg)',
                whiteSpace: 'nowrap',
              }}
            >
              Keep up with my latest
              <br />
              news &amp; achievements
            </h2>
          </div>

          {/* Horizontal-scroll card slider */}
          <div
            className="flex-1 overflow-x-auto"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
          >
            <div className="flex items-start h-[706px] pl-[200px] pr-16">
              {NEWS_ITEMS.flatMap((item, i) => {
                const card = (
                  <div
                    key={i}
                    className="shrink-0 flex flex-col gap-4 w-[380px]"
                    style={{ paddingTop: i === 1 ? '120px' : '0' }}
                  >
                    <div className="w-full overflow-hidden" style={{ height: '469px' }}>
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[#1f1f1f] text-[14px] leading-[1.3]" style={{ letterSpacing: '-0.56px' }}>
                      {item.text}
                    </p>
                    <div className="flex items-center gap-[10px] border-b border-black pb-1 w-fit">
                      <span className="font-medium text-[14px] text-black" style={{ letterSpacing: '-0.56px' }}>Read more</span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M4 14L14 4M14 4H7M14 4V11" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                );
                return i === 0
                  ? [card]
                  : [<div key={`d${i}`} className="self-stretch w-px bg-black/20 mx-10 shrink-0" />, card];
              })}
            </div>
          </div>
        </div>

      </section>

    </main>

    {/* ── Footer ── */}
    <footer className="bg-black pt-12 overflow-hidden">

      {/* Mobile footer */}
      <div className="md:hidden flex flex-col gap-12 px-4">
        {/* Top: CTA + socials + divider */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="font-light italic uppercase text-white text-[24px]" style={{ letterSpacing: '-0.96px', lineHeight: '1.1' }}>
              Have a <strong className="font-black not-italic">project</strong> in mind?
            </p>
            <button className="border border-white rounded-full px-4 py-3 text-[14px] font-medium text-white tracking-[-0.56px] w-fit transition-opacity hover:opacity-70">
              Let&apos;s talk
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {['Facebook', 'Instagram', 'X.com', 'Linkedin'].map((s) => (
              <p key={s} className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>{s}</p>
            ))}
          </div>
          <div className="w-full h-px bg-white/20" />
        </div>
        {/* Bottom: legal + wordmark */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-8">
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Licences</span>
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Privacy policy</span>
          </div>
          <p className="font-mono text-white text-[10px] uppercase" style={{ letterSpacing: '0' }}>[ Coded By Claude ]</p>
          <p
            className="font-semibold capitalize text-white"
            style={{ fontSize: '91px', letterSpacing: '-5.5px', lineHeight: '0.8' }}
          >
            H.Studio
          </p>
        </div>
      </div>

      {/* Desktop footer */}
      <div className="hidden md:flex flex-col gap-[120px] px-8">
        {/* Top: CTA | socials center | socials right + divider */}
        <div className="flex flex-col gap-12">
          <div className="flex items-start justify-between w-full">
            {/* Left: CTA */}
            <div className="flex flex-col gap-3 w-[298px]">
              <p className="font-light italic uppercase text-white text-[24px]" style={{ letterSpacing: '-0.96px', lineHeight: '1.1' }}>
                Have a <strong className="font-black not-italic">project</strong> in mind?
              </p>
              <button className="border border-white rounded-full px-4 py-3 text-[14px] font-medium text-white tracking-[-0.56px] w-fit transition-opacity hover:opacity-70">
                Let&apos;s talk
              </button>
            </div>
            {/* Center: Facebook / Instagram */}
            <div className="text-center w-[298px]">
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Facebook</p>
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Instagram</p>
            </div>
            {/* Right: X.com / Linkedin */}
            <div className="text-right w-[298px]">
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>X.com</p>
              <p className="text-white text-[18px] uppercase" style={{ letterSpacing: '-0.72px', lineHeight: '1.1' }}>Linkedin</p>
            </div>
          </div>
          <div className="w-full h-px bg-white/20" />
        </div>

        {/* Bottom: giant wordmark + legal */}
        <div className="flex items-end justify-between">
          {/* Wordmark block — clipped to ~219px height */}
          <div className="relative overflow-hidden shrink-0" style={{ height: '219px', width: '1093px' }}>
            {/* Rotated label on the left */}
            <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[15px]">
              <p
                className="font-mono text-white text-[14px] uppercase whitespace-nowrap"
                style={{ transform: 'rotate(-90deg)', letterSpacing: '0' }}
              >
                [ Coded By Claude ]
              </p>
            </div>
            {/* Giant wordmark */}
            <p
              className="absolute font-semibold capitalize text-white whitespace-nowrap"
              style={{
                fontSize: '290px',
                letterSpacing: '-17.4px',
                lineHeight: '0.8',
                bottom: '-13px',
                left: '0',
              }}
            >
              H.Studio
            </p>
          </div>
          {/* Legal links — bottom-right */}
          <div className="flex gap-[34px] pb-8 shrink-0">
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Licences</span>
            <span className="text-white text-[12px] uppercase underline" style={{ letterSpacing: '-0.48px' }}>Privacy policy</span>
          </div>
        </div>
      </div>

    </footer>
    </>
  );
}

function TestimonialCard({
  name,
  quote,
  logo,
  className = '',
}: {
  name: string;
  quote: string;
  logo: string;
  className?: string;
}) {
  return (
    <div className={`bg-[#f1f1f1] border border-[#ddd] flex flex-col gap-4 p-6 rounded-[4px] ${className}`}>
      {/* self-start prevents flex-col from stretching the img to full card width */}
      <img
        src={logo}
        alt=""
        className="self-start block"
        style={{ height: '28px', width: 'auto', maxWidth: '144px', objectFit: 'contain' }}
      />
      <p className="text-[#1f1f1f] text-[18px] leading-[1.3]" style={{ letterSpacing: '-0.72px' }}>
        {quote}
      </p>
      <p className="font-black text-black text-[16px] uppercase leading-[1.1]" style={{ letterSpacing: '-0.64px' }}>
        {name}
      </p>
    </div>
  );
}

function ProjectCard({
  title,
  image,
  tags,
  height,
}: {
  title: string;
  image: string;
  tags: string[];
  height: number;
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="relative w-full overflow-hidden" style={{ height }}>
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="backdrop-blur-[10px] bg-white/30 px-2 py-1 rounded-full text-[14px] font-medium text-[#111] tracking-[-0.56px] whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-black text-black uppercase leading-[1.1] text-[24px] md:text-[36px] tracking-[-0.96px] md:tracking-[-1.44px]">
          {title}
        </p>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="shrink-0">
          <path d="M8 24L24 8M24 8H13M24 8V19" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function PortfolioCTA() {
  return (
    <QuoteBrackets>
      <div className="flex flex-col gap-[10px] py-3">
        <p className="text-[14px] italic leading-[1.3] text-[#1f1f1f]" style={{ letterSpacing: '-0.56px' }}>
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <button className="self-start rounded-full bg-black px-4 py-3 text-[14px] font-medium tracking-[-0.56px] text-white transition-opacity hover:opacity-80">
          Let&apos;s talk
        </button>
      </div>
    </QuoteBrackets>
  );
}

/* Corner-bracket quote decoration */
function QuoteBrackets({ children }: { children: React.ReactNode }) {
  const corner = "w-4 h-4 shrink-0";
  return (
    <div className="flex items-stretch gap-3">
      {/* Left brackets */}
      <div className="flex flex-col justify-between shrink-0 w-4">
        <div className={`${corner} border-t border-l border-[#1f1f1f]`} />
        <div className={`${corner} border-b border-l border-[#1f1f1f]`} />
      </div>
      {/* Text */}
      <div className="flex-1">{children}</div>
      {/* Right brackets */}
      <div className="flex flex-col justify-between shrink-0 w-4">
        <div className={`${corner} border-t border-r border-[#1f1f1f]`} />
        <div className={`${corner} border-b border-r border-[#1f1f1f]`} />
      </div>
    </div>
  );
}
