import React from 'react'

export default function RichDataGridBlock({
  heading = '',
  caption = '',
  columns = [],
  rows = [],
}) {
  return (
    <section
      className="py-12 md:py-24 px-4 md:px-8"
      style={{ background: 'var(--color-surface, #f8fafc)' }}
    >
      <div className="max-w-6xl mx-auto">
        {heading && (
          <h2
            className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight text-center mb-8 md:mb-12"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text, #0f172a)' }}
          >
            {heading}
          </h2>
        )}

        <div
          className="border overflow-hidden"
          style={{
            borderRadius: 'var(--radius-card, 1rem)',
            borderColor: 'var(--color-border, #e2e8f0)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
          }}
        >
          {/* Horizontally scrollable on mobile */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ minWidth: '32rem' }}>
              <thead>
                <tr style={{ background: 'var(--color-surface, #f8fafc)' }}>
                  {columns.map((col, i) => (
                    <th
                      key={i}
                      className="px-4 md:px-5 py-3 md:py-4 text-left text-xs font-bold uppercase tracking-wider whitespace-nowrap border-b-2"
                      style={{
                        color: 'var(--color-primary, #0ea5e9)',
                        borderColor: 'var(--color-border, #e2e8f0)',
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className="transition-colors duration-100 hover:bg-opacity-60"
                    style={{
                      background: ri % 2 === 0 ? '#fff' : 'var(--color-surface, #f8fafc)',
                    }}
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="px-4 md:px-5 py-3 md:py-4 text-sm leading-relaxed border-b"
                        style={{
                          color: ci === 0 ? 'var(--color-text, #0f172a)' : 'var(--color-muted, #64748b)',
                          fontWeight: ci === 0 ? 500 : 400,
                          borderColor: ri < rows.length - 1 ? 'var(--color-border, #e2e8f0)' : 'transparent',
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {caption && (
            <div
              className="px-4 md:px-5 py-3 border-t text-xs leading-relaxed"
              style={{
                borderColor: 'var(--color-border, #e2e8f0)',
                background: 'var(--color-surface, #f8fafc)',
                color: 'var(--color-muted, #64748b)',
              }}
            >
              {caption}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
