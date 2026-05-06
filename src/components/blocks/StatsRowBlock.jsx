import React from 'react'

function StatItem({ value, label, description, isLast }) {
  return (
    <div
      className="flex flex-col items-center text-center px-4 md:px-6 py-8 md:py-10"
      style={{
        borderBottom: isLast ? 'none' : undefined,
      }}
    >
      <div
        className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none mb-2"
        style={{
          color: 'var(--color-primary, #0ea5e9)',
          fontFamily: 'var(--font-heading)',
        }}
      >
        {value}
      </div>
      <div
        className="text-sm md:text-base font-bold mb-1"
        style={{ color: 'var(--color-text, #0f172a)' }}
      >
        {label}
      </div>
      {description && (
        <p
          className="text-xs md:text-sm leading-relaxed max-w-[11rem]"
          style={{ color: 'var(--color-muted, #64748b)' }}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default function StatsRowBlock({ heading = '', stats = [] }) {
  return (
    <section
      className="py-10 md:py-16 px-4 md:px-8 border-y"
      style={{
        background: '#fff',
        borderColor: 'var(--color-border, #e2e8f0)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        {heading && (
          <h2
            className="text-xl md:text-3xl font-black text-center mb-8 md:mb-12"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text, #0f172a)' }}
          >
            {heading}
          </h2>
        )}

        {/*
          Mobile: 2-column grid (handles both even and odd counts cleanly)
          md+:    all stats in one row, separated by vertical dividers
        */}
        <div
          className="grid grid-cols-2 md:flex md:divide-x"
          style={{ '--tw-divide-opacity': 1, divideColor: 'var(--color-border, #e2e8f0)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex-1 border-b md:border-b-0"
              style={{ borderColor: 'var(--color-border, #e2e8f0)' }}
            >
              <StatItem {...stat} isLast={i === stats.length - 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
