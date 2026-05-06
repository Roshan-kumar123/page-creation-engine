import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageRenderer from '../components/PageRenderer.jsx'
import NotFound from './NotFound.jsx'
import { validatePage } from '../schemas/pageSchema.js'

// Vite resolves this glob at build time — production-safe, no template-literal import()
const pageModules = import.meta.glob('../data/pages/*.json', { eager: false })

function LoadingSpinner() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', background: '#fff' }}>
      <div style={{
        width: '2.5rem', height: '2.5rem',
        border: '4px solid var(--color-primary, #0ea5e9)',
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <p style={{ color: 'var(--color-muted, #64748b)', fontSize: '0.875rem', fontWeight: 500 }}>Loading page…</p>
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
