import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('[ErrorBoundary] Block render error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', background: '#fef2f2' }}
        >
          <div style={{ maxWidth: '32rem', width: '100%', background: '#fff', borderRadius: 'var(--radius-card, 1rem)', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', padding: '2rem', border: '1px solid #fee2e2', textAlign: 'center' }}>
            <div style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.5rem' }}>
              ⚠
            </div>
            <h2 style={{ color: '#111827', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Something went wrong</h2>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>
              A block component failed to render. The error has been logged.
            </p>
            {import.meta.env.DEV && this.state.error && (
              <pre style={{ fontSize: '0.75rem', background: '#fef2f2', color: '#b91c1c', padding: '1rem', borderRadius: '0.5rem', textAlign: 'left', overflow: 'auto', maxHeight: '10rem' }}>
                {this.state.error.message}
              </pre>
            )}
            <button
              style={{ marginTop: '1.5rem', padding: '0.5rem 1.25rem', background: 'var(--color-primary, #0ea5e9)', color: '#fff', border: 'none', borderRadius: 'var(--radius-btn, 9999px)', fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem' }}
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
