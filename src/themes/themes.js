export const themes = {
  startup: {
    label: 'Default Startup 🚀',
    vars: {
      '--color-primary':       '#0ea5e9',
      '--color-primary-dark':  '#0284c7',
      '--color-primary-light': '#e0f2fe',
      '--color-bg':            '#ffffff',
      '--color-surface':       '#f8fafc',
      '--color-text':          '#0f172a',
      '--color-muted':         '#64748b',
      '--color-border':        '#e2e8f0',
      '--radius-card':         '0.875rem',
      '--radius-btn':          '9999px',
      '--font-heading':        "'Inter', sans-serif",
      '--font-body':           "'Inter', sans-serif",
    },
  },

  enterprise: {
    label: 'Enterprise Sharp ⬛',
    vars: {
      '--color-primary':       '#2563eb',
      '--color-primary-dark':  '#1d4ed8',
      '--color-primary-light': '#dbeafe',
      '--color-bg':            '#ffffff',
      '--color-surface':       '#f1f5f9',
      '--color-text':          '#0f172a',
      '--color-muted':         '#475569',
      '--color-border':        '#cbd5e1',
      // Absolute zero radius — every surface is sharp-cornered
      '--radius-card':         '0px',
      '--radius-btn':          '0px',
      '--font-heading':        "'Segoe UI', 'Inter', sans-serif",
      '--font-body':           "'Segoe UI', 'Inter', sans-serif",
    },
  },

  creative: {
    label: 'Creative Soft 🎨',
    vars: {
      '--color-primary':       '#f97316',
      '--color-primary-dark':  '#ea580c',
      '--color-primary-light': '#ffedd5',
      '--color-bg':            '#fffbf7',
      '--color-surface':       '#fff7ed',
      '--color-text':          '#1c1917',
      '--color-muted':         '#78716c',
      '--color-border':        '#fed7aa',
      // Maximum softness — rounded-3xl equivalent
      '--radius-card':         '1.75rem',
      '--radius-btn':          '9999px',
      '--font-heading':        "'Plus Jakarta Sans', 'Inter', sans-serif",
      '--font-body':           "'Inter', sans-serif",
    },
  },
}

export const themeKeys = Object.keys(themes)
export const defaultTheme = 'startup'
