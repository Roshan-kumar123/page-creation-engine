import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--color-surface, #f8fafc)', padding: '1.5rem',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
        <p style={{
          fontSize: '6rem', fontWeight: 900,
          color: 'var(--color-primary, #0ea5e9)',
          lineHeight: 1, marginBottom: '1rem', fontFamily: 'var(--font-heading)',
        }}>404</p>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.875rem', fontWeight: 800, color: 'var(--color-text, #0f172a)', marginBottom: '0.75rem' }}>
          Page not found
        </h1>
        <p style={{ color: 'var(--color-muted, #64748b)', marginBottom: '2rem', lineHeight: 1.6 }}>
          The slug you requested doesn't match any registered page definition.
        </p>
        <Link
          to="/home"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            background: 'var(--color-primary, #0ea5e9)',
            color: '#fff', fontWeight: 600, fontSize: '0.9375rem',
            borderRadius: 'var(--radius-btn, 9999px)',
            textDecoration: 'none',
          }}
        >
          Go to Home
        </Link>
      </div>
    </div>
  )
}
