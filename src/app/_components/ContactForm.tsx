'use client'

import { useState, type FormEvent, type InputHTMLAttributes } from 'react'

const PROJECT_TYPES = ['Brand', 'Website', 'Campaign', 'Photography', 'Other'] as const
const BUDGETS = ['< $5K', '$5K – $15K', '$15K – $50K', '$50K+', 'Not sure yet'] as const

type Status = 'idle' | 'submitting' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [projectType, setProjectType] = useState<string | null>(null)
  const [budget, setBudget] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === 'submitting') return

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      projectType,
      budget,
      timeline: String(formData.get('timeline') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    }

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      // Stub — wire to a route handler / server action / email service.
      await new Promise((resolve) => setTimeout(resolve, 700))
      console.log('lets-talk submission', payload)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col gap-8 border-y border-black/20 py-16 md:py-24">
        <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">[ received ]</p>
        <p
          className="max-w-[760px] text-[42px] font-light uppercase leading-[0.9] text-black md:text-[72px] xl:text-[96px]"
          style={{ letterSpacing: '-0.06em' }}
        >
          Brief is in.
          <br />
          Will reply within
          <br />
          a working day.
        </p>
        <p className="max-w-[480px] text-[14px] leading-[1.3] text-[#1f1f1f]" style={{ letterSpacing: '-0.56px' }}>
          If something is urgent, write directly to{' '}
          <a className="underline" href="mailto:hello@hstudio.com">hello@hstudio.com</a>.
        </p>
      </div>
    )
  }

  const isSubmitting = status === 'submitting'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8" noValidate>
      <fieldset className="contents" disabled={isSubmitting}>

        {/* Basics — 4 input cards in 2-col grid */}
        <div className="grid gap-px bg-black/15 md:grid-cols-2">
          <FieldCard num="01" label="Name" name="name" required autoComplete="name" placeholder="Your name" />
          <FieldCard num="02" label="Email" name="email" type="email" required autoComplete="email" placeholder="you@studio.com" />
          <FieldCard num="03" label="Company" name="company" autoComplete="organization" hint="Optional" placeholder="Studio, brand, agency" />
          <FieldCard num="04" label="Timeline" name="timeline" hint="Rough deadline" placeholder="Q3, by August, ASAP" />
        </div>

        {/* Project type */}
        <PillCard
          num="05"
          label="Project type"
          options={[...PROJECT_TYPES]}
          value={projectType}
          onChange={setProjectType}
        />

        {/* Budget */}
        <PillCard
          num="06"
          label="Budget"
          options={[...BUDGETS]}
          value={budget}
          onChange={setBudget}
        />

        {/* Message */}
        <div className="grid gap-px bg-black/15">
          <div className="flex flex-col gap-4 bg-[#fafafa] p-4 md:p-6">
            <FieldHeader num="07" label="Message" required />
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Send the messy version. The useful questions will show up fast."
              className="w-full resize-none border border-black/15 bg-white px-4 py-4 text-[16px] leading-[1.4] text-black placeholder:text-black/30 focus:border-black focus:outline-none md:text-[18px]"
              style={{ letterSpacing: '-0.02em' }}
            />
          </div>
        </div>

      </fieldset>

      <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
        {status === 'error' ? (
          <p className="font-mono text-[14px] uppercase leading-[1.1] text-black">
            [ name, email, and message are required ]
          </p>
        ) : (
          <p className="font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]">
            [ no perfect deck needed ]
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-fit items-center gap-3 rounded-full bg-black px-5 py-3 text-[14px] font-medium tracking-[-0.56px] text-white transition-transform duration-300 ease-out hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
        >
          {isSubmitting ? 'Sending…' : 'Send brief'}
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M4 14L14 4M14 4H7M14 4V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  )
}

type FieldCardProps = {
  num: string
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
  hint?: string
  placeholder?: string
}

function FieldCard({ num, label, name, type = 'text', required, autoComplete, hint, placeholder }: FieldCardProps) {
  const inputProps: InputHTMLAttributes<HTMLInputElement> = {
    id: name,
    name,
    type,
    required,
    autoComplete,
    placeholder,
  }

  return (
    <div className="flex flex-col gap-3 bg-[#fafafa] p-4 md:p-6">
      <FieldHeader num={num} label={label} required={required} hint={hint} />
      <input
        {...inputProps}
        className="w-full border border-black/15 bg-white px-4 py-3 text-[18px] leading-[1.2] text-black placeholder:text-black/30 focus:border-black focus:outline-none md:text-[20px]"
        style={{ letterSpacing: '-0.03em' }}
      />
    </div>
  )
}

function FieldHeader({
  num,
  label,
  required,
  hint,
}: {
  num: string
  label: string
  required?: boolean
  hint?: string
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <label htmlFor={label.toLowerCase()} className="flex items-baseline gap-2 font-mono text-[12px] uppercase leading-[1.1] text-[#1f1f1f] md:text-[14px]">
        <span className="text-[#1f1f1f]/50">{num}</span>
        <span>
          [ {label}{required ? ' *' : ''} ]
        </span>
      </label>
      {hint ? <span className="font-mono text-[11px] uppercase leading-[1.1] text-[#1f1f1f]/50 md:text-[12px]">{hint}</span> : null}
    </div>
  )
}

function PillCard({
  num,
  label,
  options,
  value,
  onChange,
}: {
  num: string
  label: string
  options: string[]
  value: string | null
  onChange: (value: string) => void
}) {
  return (
    <div className="grid gap-px bg-black/15">
      <div className="flex flex-col gap-4 bg-[#fafafa] p-4 md:p-6">
        <FieldHeader num={num} label={label} hint={value ? `Selected: ${value}` : 'Pick one'} />
        <div className="flex flex-wrap gap-2">
          {options.map((option) => {
            const selected = value === option
            return (
              <button
                key={option}
                type="button"
                onClick={() => onChange(option)}
                aria-pressed={selected}
                className={`rounded-full border px-4 py-2 text-[14px] font-medium tracking-[-0.56px] transition-all duration-200 ${
                  selected
                    ? 'border-black bg-black text-white shadow-[0_4px_12px_rgba(0,0,0,0.18)]'
                    : 'border-black/20 bg-white text-black hover:border-black hover:-translate-y-0.5'
                }`}
              >
                {option}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
