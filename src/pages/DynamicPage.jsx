import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageRenderer from '../components/PageRenderer.jsx'
import NotFound from './NotFound.jsx'
import { validatePage } from '../schemas/pageSchema.js'

// Vite resolves this glob at build time — production-safe, no template-literal import()
const pageModules = import.meta.glob('../data/pages/*.json', { eager: false })

function LoadingSpinner() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #0c1a2e 50%, #0f172a 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes dot-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40%            { transform: translateY(-6px); opacity: 1; }
        }
        .splash-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
      `}</style>

      {/* Background orbs */}
      <div className="splash-orb" style={{ width: '28rem', height: '28rem', background: 'rgba(14,165,233,0.12)', top: '-8rem', left: '-8rem' }} />
      <div className="splash-orb" style={{ width: '20rem', height: '20rem', background: 'rgba(99,102,241,0.10)', bottom: '-6rem', right: '-4rem' }} />

      {/* Pulse ring behind logo */}
      <div style={{
        position: 'absolute',
        width: '5rem', height: '5rem',
        borderRadius: '50%',
        background: 'rgba(14,165,233,0.25)',
        animation: 'pulse-ring 1.8s ease-out infinite',
      }} />

      {/* Logo mark */}
      <div style={{
        position: 'relative',
        width: '4rem', height: '4rem',
        borderRadius: '1rem',
        background: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 40px rgba(14,165,233,0.4)',
        marginBottom: '1.75rem',
        animation: 'fade-up 0.5s ease both',
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      </div>

      {/* Wordmark */}
      <div style={{ animation: 'fade-up 0.5s 0.1s ease both', opacity: 0, marginBottom: '0.5rem' }}>
        <span style={{
          fontSize: '1.375rem',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          background: 'linear-gradient(90deg, #e2e8f0 0%, #94a3b8 40%, #e2e8f0 60%, #94a3b8 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'shimmer 2.5s linear infinite',
          fontFamily: "'Inter', sans-serif",
        }}>
          Whilter.ai
        </span>
      </div>

      {/* Tagline */}
      <p style={{
        color: '#475569',
        fontSize: '0.8125rem',
        fontWeight: 500,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        animation: 'fade-up 0.5s 0.2s ease both',
        opacity: 0,
        marginBottom: '2.5rem',
        fontFamily: "'Inter', sans-serif",
      }}>
        Page Creation Engine
      </p>

      {/* Loading dots */}
      <div style={{ display: 'flex', gap: '0.5rem', animation: 'fade-up 0.5s 0.3s ease both', opacity: 0 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: '0.4rem', height: '0.4rem',
            borderRadius: '50%',
            background: '#0ea5e9',
            animation: `dot-bounce 1.2s ${i * 0.15}s ease-in-out infinite`,
          }} />
        ))}
      </div>
    </div>
  )
}

function ValidationError({ slug, error }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fef2f2', padding: '2rem' }}>
      <div style={{ maxWidth: '36rem', width: '100%', background: '#fff', borderRadius: '1rem', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', padding: '2rem', border: '1px solid #fee2e2' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#dc2626', marginBottom: '0.5rem' }}>Schema Validation Error</h1>
        <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.9375rem' }}>
          The page definition for <code style={{ background: '#f3f4f6', padding: '0.125rem 0.375rem', borderRadius: '0.25rem' }}>{slug}</code> failed validation.
        </p>
        <pre style={{
          fontSize: '0.75rem', background: '#fef2f2', color: '#b91c1c',
          padding: '1rem', borderRadius: '0.5rem', overflow: 'auto', maxHeight: '16rem',
          whiteSpace: 'pre-wrap',
        }}>
          {JSON.stringify(error?.issues ?? error, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default function DynamicPage() {
  const { slug } = useParams()
  const [state, setState] = useState({ status: 'loading', pageData: null, error: null })

  useEffect(() => {
    setState({ status: 'loading', pageData: null, error: null })
    let cancelled = false

    async function load() {
      try {
        const key = `../data/pages/${slug}.json`
        const loader = pageModules[key]
        if (!loader) throw new Error('not_found')

        const mod = await loader()
        if (cancelled) return

        const result = validatePage(mod.default)
        if (!result.success) {
          setState({ status: 'invalid', pageData: null, error: result.error })
          return
        }

        document.title = result.data.page_metadata.title
        setState({ status: 'success', pageData: result.data, error: null })
      } catch {
        if (!cancelled) setState({ status: 'not_found', pageData: null, error: null })
      }
    }

    load()
    return () => { cancelled = true }
  }, [slug])

  if (state.status === 'loading')   return <LoadingSpinner />
  if (state.status === 'not_found') return <NotFound />
  if (state.status === 'invalid')   return <ValidationError slug={slug} error={state.error} />

  return <PageRenderer blocks={state.pageData.blocks} />
}
