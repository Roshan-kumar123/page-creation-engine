import React from 'react'
import { Link } from 'react-router-dom'

function SmartLink({ href, className, style, children }) {
  const isInternal = href && href.startsWith('/')
  if (isInternal) {
    return <Link to={href} className={className} style={style}>{children}</Link>
  }
  return <a href={href} className={className} style={style}>{children}</a>
}

export default function HeroBlock({
  headline = 'Build pages faster than ever',
  accentWord = '',
  subheadline = 'The page creation engine that turns JSON into beautiful, scalable web pages.',
  primaryCTA = { label: 'Get Started Free', href: '#' },
  secondaryCTA,
  trustBadges = [],
}) {
  const renderHeadline = () => {
    if (!accentWord) return headline
    const parts = headline.split(new RegExp(`(${accentWord})`, 'i'))
    return parts.map((part, i) =>
      part.toLowerCase() === accentWord.toLowerCase()
        ? <span key={i} style={{ color: 'var(--color-primary)' }}>{part}</span>
        : part
    )
  }

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0c4a6e 0%, var(--color-primary-dark, #0284c7) 55%, var(--color-primary, #0ea5e9) 100%)',
        color: '#fff',
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-72 h-72 md:w-96 md:h-96 rounded-full opacity-10 blur-3xl bg-white pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-56 h-56 md:w-72 md:h-72 rounded-full opacity-10 blur-2xl bg-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-28 lg:py-36 text-center">

        {/* Eyebrow */}
        <span
          className="inline-block px-4 py-1.5 mb-6 md:mb-8 text-xs md:text-sm font-semibold tracking-widest uppercase rounded-full border border-white/20 bg-white/10"
        >
          Whilter.ai · Page Creation Engine
        </span>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-5 md:mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {renderHeadline()}
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-xl leading-relaxed text-white/75 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10">
          {subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-14">
          <SmartLink
            href={primaryCTA.href}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 text-sm md:text-base font-bold rounded-full no-underline shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{
              background: '#fff',
              color: 'var(--color-primary-dark, #0284c7)',
              borderRadius: 'var(--radius-btn, 9999px)',
            }}
          >
            {primaryCTA.label} →
          </SmartLink>
          {secondaryCTA && (
            <SmartLink
              href={secondaryCTA.href}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 md:px-8 md:py-4 text-sm md:text-base font-semibold no-underline border-2 border-white/40 text-white transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/50"
              style={{ borderRadius: 'var(--radius-btn, 9999px)' }}
            >
              {secondaryCTA.label}
            </SmartLink>
          )}
        </div>

        {/* Trust badges */}
        {trustBadges.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-white/60">
            {trustBadges.map((badge, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span style={{ color: 'var(--color-primary-light, #bae6fd)' }}>✓</span>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
