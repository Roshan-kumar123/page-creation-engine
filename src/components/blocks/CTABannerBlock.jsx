import React from 'react'
import { Link } from 'react-router-dom'

export default function CTABannerBlock({
  heading = 'Ready to get started?',
  subtext = '',
  buttonLabel = 'Start for Free',
  buttonHref = '#',
  variant = 'dark',
}) {
  const bg =
    variant === 'brand'
      ? 'linear-gradient(135deg, var(--color-primary-dark, #0284c7), var(--color-primary, #0ea5e9))'
      : 'linear-gradient(135deg, #1e293b, #0f172a)'

  const isInternal = buttonHref && buttonHref.startsWith('/')

  const btnClass =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-9 md:py-4 text-sm md:text-base font-bold bg-white no-underline shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50'

  const btnStyle = {
    color: '#1e293b',
    borderRadius: 'var(--radius-btn, 9999px)',
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8" style={{ background: bg }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 md:mb-5 text-white"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {heading}
        </h2>
        {subtext && (
          <p className="text-sm md:text-lg leading-relaxed text-white/70 mb-8 md:mb-10 max-w-xl mx-auto">
            {subtext}
          </p>
        )}
        {isInternal
          ? <Link to={buttonHref} className={btnClass} style={btnStyle}>{buttonLabel} →</Link>
          : <a href={buttonHref} className={btnClass} style={btnStyle}>{buttonLabel} →</a>
        }
      </div>
    </section>
  )
}
