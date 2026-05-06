import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageRenderer from '../components/PageRenderer.jsx'
import { validatePage } from '../schemas/pageSchema.js'

function decode(dataParam) {
  return JSON.parse(decodeURIComponent(escape(atob(dataParam))))
}

function ErrorState({ title, message, detail }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fef2f2', padding: '2rem' }}>
      <div style={{ maxWidth: '36rem', width: '100%', background: '#fff', borderRadius: '1rem', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', padding: '2rem', border: '1px solid #fee2e2' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#dc2626', marginBottom: '0.5rem' }}>{title}</h1>
        <p style={{ color: '#6b7280', marginBottom: detail ? '1rem' : 0, fontSize: '0.9375rem' }}>{message}</p>
        {detail && (
          <pre style={{ fontSize: '0.75rem', background: '#fef2f2', color: '#b91c1c', padding: '1rem', borderRadius: '0.5rem', overflow: 'auto', maxHeight: '16rem', whiteSpace: 'pre-wrap' }}>
            {detail}
          </pre>
        )}
      </div>
    </div>
  )
}

export default function PreviewPage() {
  const [searchParams] = useSearchParams()
  const dataParam = searchParams.get('data')

  const result = useMemo(() => {
    if (!dataParam) return { status: 'missing' }
    try {
      const decoded = decode(dataParam)
      const validation = validatePage(decoded)
      if (!validation.success) {
        return { status: 'invalid_schema', detail: JSON.stringify(validation.error.issues, null, 2) }
      }
      document.title = validation.data.page_metadata.title
      return { status: 'ok', data: validation.data }
    } catch (e) {
      return { status: 'decode_error', message: e.message }
    }
  }, [dataParam])

  if (result.status === 'missing')
    return <ErrorState title="No Preview Data" message="No ?data= parameter found in the URL. Konne should append a Base64-encoded JSON payload." />

  if (result.status === 'decode_error')
    return <ErrorState title="Decode Error" message={`Could not decode the ?data= parameter: ${result.message}`} />

  if (result.status === 'invalid_schema')
    return <ErrorState title="Schema Validation Error" message="The decoded JSON failed schema validation." detail={result.detail} />

  return <PageRenderer blocks={result.data.blocks} />
}
