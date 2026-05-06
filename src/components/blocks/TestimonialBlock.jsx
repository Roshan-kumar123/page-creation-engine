import React from 'react'

const AVATAR_COLORS = ['#0284c7', '#7c3aed', '#059669', '#ea580c', '#e11d48', '#0d9488']

function avatarColor(name = '') {
  return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length]
}

function TestimonialCard({ quote, author, title, company }) {
  const initials = author
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div
      className="flex flex-col gap-5 p-6 md:p-8 bg-white border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
      style={{
        borderRadius: 'var(--radius-card, 1rem)',
        borderColor: 'var(--color-border, #e2e8f0)',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      {/* Opening quote mark */}
      <span
        className="text-4xl font-black leading-none -mb-2"
        style={{ color: 'var(--color-primary, #0ea5e9)' }}
        aria-hidden="true"
      >
        "
      </span>

      {/* Quote body */}
      <p
        className="text-sm md:text-base leading-relaxed flex-1"
        style={{ color: 'var(--color-text, #0f172a)' }}
      >
        {quote}
      </p>

      {/* Author row */}
      <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: 'var(--color-border, #e2e8f0)' }}>
        <div
          className="flex items-center justify-center w-10 h-10 rounded-full text-white text-xs font-bold shrink-0"
          style={{ background: avatarColor(author) }}
        >
          {initials}
        </div>
        <div>
          <p
            className="text-sm font-semibold leading-tight"
            style={{ color: 'var(--color-text, #0f172a)' }}
          >
            {author}
          </p>
          <p
            className="text-xs leading-snug mt-0.5"
            style={{ color: 'var(--color-muted, #64748b)' }}
          >
            {title}{company ? `, ${company}` : ''}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialBlock({
  heading = 'Loved by builders everywhere',
  testimonials = [],
}) {
  return (
    <section
      className="py-12 md:py-24 px-4 md:px-8"
      style={{ background: 'var(--color-surface, #f8fafc)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight text-center mb-10 md:mb-16"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text, #0f172a)' }}
        >
          {heading}
        </h2>

        {/* 1 col → 2 col → 3 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
