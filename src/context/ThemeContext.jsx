import React, { createContext, useContext, useState, useEffect } from 'react'
import { themes, defaultTheme } from '../themes/themes.js'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(defaultTheme)

  useEffect(() => {
    const root = document.documentElement
    const vars = themes[themeKey].vars
    Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v))
  }, [themeKey])

  return (
    <ThemeContext.Provider value={{ themeKey, setThemeKey, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
