import React from 'react'

function FeatureCard({ number, icon, title, description, index }) {
  return (
    <div
      className="group relative overflow-hidden flex flex-col gap-4 p-6 md:p-7 bg-white border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      style={{
        borderRadius: 'var(--radius-card, 1rem)',
        borderColor: 'var(--color-border, #e2e8f0)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      {/* Ghost ordinal number */}
      <span
        className="absolute top-2 right-3 text-7xl font-black leading-none select-none pointer-events-none transition-colors duration-200"
        style={{
          color: 'var(--color-surface, #f8fafc)',
          fontFamily: 'var(--font-heading)',
        }}
      >
        {String(number ?? index + 1).padStart(2, '0')}
      </span>

      {/* Icon badge */}
      {icon && (
        <div
          className="relative flex items-center justify-center w-11 h-11 text-xl shrink-0"
          style={{
            borderRadius: 'var(--radius-card, 1rem)',
            background: 'var(--color-primary-light, #e0f2fe)',
          }}
        >
          {icon}
        </div>
      )}

      {/* Text */}
      <div className="relative flex flex-col gap-1.5">
        <h3
          className="text-base font-bold leading-snug"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text, #0f172a)' }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--color-muted, #64748b)' }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default function FeatureCardBlock({
  sectionLabel = '',
  heading = 'Everything you need to ship faster',
  subheading = '',
  features = [],
}) {
  return (
    <section
      className="py-10 md:py-16 px-4 md:px-8"
      style={{ background: 'var(--color-surface, #f8fafc)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-8 md:mb-10">
          {sectionLabel && (
            <span
              className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase"
              style={{
                borderRadius: 'var(--radius-btn, 9999px)',
                background: 'var(--color-primary-light, #e0f2fe)',
                color: 'var(--color-primary-dark, #0284c7)',
              }}
            >
              {sectionLabel}
            </span>
          )}
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-3 md:mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text, #0f172a)' }}
          >
            {heading}
          </h2>
          {subheading && (
            <p
              className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
              style={{ color: 'var(--color-muted, #64748b)' }}
            >
              {subheading}
            </p>
          )}
        </div>

        {/*
          auto-fit collapses empty grid tracks — so 3 cards never leave a
          ghost 4th column. minmax(min(260px,100%), 1fr) gives 1-col on
          mobile, 2-col on tablet, and fills up to 4-col on wide screens
          only when enough cards exist to occupy the tracks.
        */}
        <div
          className="grid gap-4 md:gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
          }}
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} index={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
