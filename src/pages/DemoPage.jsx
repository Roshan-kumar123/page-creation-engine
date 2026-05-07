import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'
import { themes } from '../themes/themes.js'
import PageRenderer from '../components/PageRenderer.jsx'
import { validatePage } from '../schemas/pageSchema.js'
import { sampleTemplates, templateOptions } from '../data/sampleTemplates.js'

const INITIAL_JSON = JSON.stringify({
  page_metadata: { title: 'Live Demo Page', slug: 'demo', pageType: 'landing' },
  blocks: [
    {
      type: 'hero',
      props: {
        headline: 'Your JSON. Your Page. Instantly.',
        accentWord: 'Instantly',
        subheadline: 'Edit the JSON on the left and watch your page update in real time. Use "Load Template" above to see a full example, then switch themes to restyle everything instantly.',
        primaryCTA: { label: 'Back to Home', href: '/' },
        trustBadges: ['No backend required', 'Production-ready', 'Fully themeable'],
      },
    },
    {
      type: 'feature_card',
      props: {
        sectionLabel: 'How It Works',
        heading: 'JSON in. Beautiful page out.',
        subheading: 'Three steps from raw JSON to a fully themed, validated, animated page.',
        features: [
          { number: 1, icon: '📋', title: 'Paste Your JSON', description: 'Define page_metadata and a blocks array. Each block needs a type string and a props object.' },
          { number: 2, icon: '✅', title: 'Engine Validates', description: 'Zod discriminated union schemas check every required field. Errors appear instantly with the exact field path.' },
          { number: 3, icon: '⚡', title: 'Instant UI Rendering', description: 'The component registry maps each type to a lazy-loaded React component. The page renders live on every keystroke.' },
        ],
      },
    },
  ],
}, null, 2)

function decodeDataParam() {
  try {
    const params = new URLSearchParams(window.location.search)
    const raw = params.get('data')
    if (!raw) return null
    return JSON.stringify(JSON.parse(decodeURIComponent(escape(atob(raw)))), null, 2)
  } catch {
    return null
  }
}

function StatusBar({ parsed }) {
  if (parsed.status === 'ok') {
    return (
      <div style={{ padding: '0.5rem 1rem', background: '#f0fdf4', borderBottom: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#166534', flexShrink: 0 }}>
        <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
        Valid JSON — rendering live
      </div>
    )
  }
  if (parsed.status === 'invalid_json') {
    return (
      <div style={{ padding: '0.5rem 1rem', background: '#fef2f2', borderBottom: '1px solid #fecaca', fontSize: '0.8125rem', color: '#b91c1c', flexShrink: 0 }}>
        <strong>Invalid JSON:</strong> {parsed.message}
      </div>
    )
  }
  return (
    <div style={{ padding: '0.5rem 1rem', background: '#fffbeb', borderBottom: '1px solid #fde68a', fontSize: '0.8125rem', color: '#92400e', flexShrink: 0 }}>
      <strong>Schema error:</strong> {parsed.message}
    </div>
  )
}

export default function DemoPage() {
  const { themeKey, setThemeKey } = useTheme()
  const [json, setJson] = useState(() => decodeDataParam() ?? INITIAL_JSON)
  const [presentMode, setPresentMode] = useState(false)
  const [deviceMode, setDeviceMode] = useState('desktop')
  const [templateKey, setTemplateKey] = useState('')

  const parsed = useMemo(() => {
    try {
      const raw = JSON.parse(json)
      const result = validatePage(raw)
      if (!result.success) {
        const first = result.error.issues[0]
        return { status: 'invalid_schema', message: `${first.path.join('.')} — ${first.message}` }
      }
      return { status: 'ok', data: result.data }
    } catch (e) {
      return { status: 'invalid_json', message: e.message }
    }
  }, [json])

  function handleLoadTemplate(e) {
    const key = e.target.value
    if (!key) return
    const template = sampleTemplates[key]
    if (template) {
      setJson(JSON.stringify(template.json, null, 2))
      setTemplateKey(key)
    }
  }

  const rightPaneStyle = deviceMode === 'mobile'
    ? { maxWidth: '375px', margin: '1rem auto', border: '1px solid var(--color-border, #e2e8f0)', borderRadius: '1rem', overflow: 'hidden' }
    : {}

  const selectStyle = {
    background: '#1e293b', color: '#e2e8f0', border: '1px solid #334155',
    borderRadius: '0.375rem', padding: '0.25rem 0.5rem', fontSize: '0.8125rem',
    cursor: 'pointer',
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden', background: 'var(--color-bg, #fff)' }}>

      {/* ── Header ── */}
      <header style={{
        display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem',
        padding: '0.75rem 1.25rem',
        background: '#0f172a', borderBottom: '1px solid #1e293b',
        flexShrink: 0, zIndex: 10,
      }}>
        {/* Back to Home */}
        <Link
          to="/"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
            color: '#94a3b8', fontSize: '0.8125rem', fontWeight: 500,
            textDecoration: 'none', whiteSpace: 'nowrap',
            padding: '0.25rem 0.625rem',
            border: '1px solid #334155', borderRadius: '0.375rem',
            marginRight: '0.25rem',
          }}
        >
          ← Home
        </Link>

        {/* Title */}
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.9375rem', whiteSpace: 'nowrap' }}>
          Whilter.ai
          <span style={{ color: '#0ea5e9', marginLeft: '0.375rem' }}>/ Live Demo</span>
        </span>

        {/* Theme Switcher */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.8125rem' }}>
          Theme:
          <select value={themeKey} onChange={e => setThemeKey(e.target.value)} style={selectStyle}>
            {Object.entries(themes).map(([key, { label }]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </label>

        {/* Load Template */}
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.8125rem' }}>
          Template:
          <select value={templateKey} onChange={handleLoadTemplate} style={selectStyle}>
            {templateOptions.map(opt => (
              <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Device Preview */}
        <div style={{ display: 'flex', gap: '0.375rem' }}>
          {[['desktop', '🖥 Desktop'], ['mobile', '📱 Mobile']].map(([mode, label]) => (
            <button
              key={mode}
              onClick={() => setDeviceMode(mode)}
              style={{
                padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 600,
                background: deviceMode === mode ? '#0ea5e9' : '#1e293b',
                color: deviceMode === mode ? '#fff' : '#94a3b8',
                border: '1px solid #334155', borderRadius: '0.375rem', cursor: 'pointer',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Presentation Toggle */}
        <button
          onClick={() => setPresentMode(p => !p)}
          style={{
            padding: '0.375rem 1rem', fontSize: '0.8125rem', fontWeight: 700,
            background: presentMode ? '#0ea5e9' : '#1e293b',
            color: '#fff', border: '1px solid #334155',
            borderRadius: '0.375rem', cursor: 'pointer', whiteSpace: 'nowrap',
          }}
        >
          {presentMode ? '◀ Edit Mode' : '▶ Present Mode'}
        </button>
      </header>

      {/* ── Body ── */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* Left: JSON Editor */}
        {!presentMode && (
          <div style={{ width: '45%', display: 'flex', flexDirection: 'column', background: '#0f172a', borderRight: '1px solid #1e293b', flexShrink: 0 }}>
            <div style={{ padding: '0.625rem 1rem', background: '#1e293b', borderBottom: '1px solid #334155', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
              <span style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Live JSON Editor</span>
              <span style={{ color: '#475569', fontSize: '0.6875rem' }}>Edit and watch the page update</span>
            </div>
            <textarea
              value={json}
              onChange={e => setJson(e.target.value)}
              spellCheck={false}
              style={{
                flex: 1, width: '100%', resize: 'none', outline: 'none', border: 'none',
                background: '#020617', color: '#4ade80',
                fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
                fontSize: '0.8125rem', lineHeight: 1.65,
                padding: '1rem', boxSizing: 'border-box',
              }}
            />
          </div>
        )}

        {/* Right: Live Preview */}
        <div style={{ flex: 1, overflowY: 'auto', background: 'var(--color-bg, #fff)', display: 'flex', flexDirection: 'column' }}>
          <StatusBar parsed={parsed} />
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <div style={rightPaneStyle}>
              {parsed.status === 'ok' && (
                <PageRenderer blocks={parsed.data.blocks} />
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
