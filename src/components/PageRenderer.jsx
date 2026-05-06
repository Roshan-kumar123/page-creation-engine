import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import registry from './registry.js'
import ErrorBoundary from './ErrorBoundary.jsx'

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function BlockLoadingFallback() {
  return (
    <div style={{ width: '100%', padding: '4rem 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: '2rem', height: '2rem',
        border: '3px solid var(--color-primary, #0ea5e9)',
        borderTopColor: 'transparent',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

function UnknownBlock({ type }) {
  if (import.meta.env.PROD) return null
  return (
    <div style={{ margin: '1rem auto', maxWidth: '56rem', padding: '1rem', border: '2px dashed #fbbf24', borderRadius: '0.75rem', background: '#fefce8' }}>
      <p style={{ color: '#92400e', fontFamily: 'monospace', fontSize: '0.875rem', margin: 0 }}>
        Unknown block type: <strong>"{type}"</strong>. Add it to <code>src/components/registry.js</code>.
      </p>
    </div>
  )
}

export default function PageRenderer({ blocks }) {
  if (!blocks || blocks.length === 0) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
        <p>No blocks to render.</p>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      <main>
        <Suspense fallback={<BlockLoadingFallback />}>
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {blocks.map((block, index) => {
              const ResolvedComponent = registry[block.type]
              if (!ResolvedComponent) {
                return <UnknownBlock key={index} type={block.type} />
              }
              return (
                <motion.div key={index} variants={itemVariants}>
                  <ResolvedComponent {...block.props} />
                </motion.div>
              )
            })}
          </motion.div>
        </Suspense>
      </main>
    </ErrorBoundary>
  )
}
