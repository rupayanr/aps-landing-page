import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  isAutoMode: boolean
  setAutoMode: (auto: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getThemeByTime(): Theme {
  const hour = new Date().getHours()
  // 6:00 AM - 6:00 PM = Light mode
  return hour >= 6 && hour < 18 ? 'light' : 'dark'
}

function getInitialAutoMode(): boolean {
  if (typeof window === 'undefined') return true
  const savedAutoMode = localStorage.getItem('aps-auto-theme')
  return savedAutoMode !== 'false'
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'

  const savedAutoMode = localStorage.getItem('aps-auto-theme')
  const savedTheme = localStorage.getItem('aps-theme') as Theme | null

  // If auto mode is disabled and we have a saved theme, use it
  if (savedAutoMode === 'false' && savedTheme) {
    return savedTheme
  }

  // Otherwise, use time-based theme
  return getThemeByTime()
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Use lazy initialization to prevent theme flash
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)
  const [isAutoMode, setIsAutoModeState] = useState<boolean>(getInitialAutoMode)

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('aps-theme', newTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    // Disable auto mode when manually toggling
    setIsAutoModeState(false)
    localStorage.setItem('aps-auto-theme', 'false')
  }, [theme, setTheme])

  const setAutoMode = useCallback((auto: boolean) => {
    setIsAutoModeState(auto)
    localStorage.setItem('aps-auto-theme', String(auto))
    if (auto) {
      // When enabling auto mode, immediately set theme based on time
      const timeBasedTheme = getThemeByTime()
      setThemeState(timeBasedTheme)
      localStorage.setItem('aps-theme', timeBasedTheme)
    }
  }, [])

  // Check time every 60 seconds when in auto mode
  useEffect(() => {
    if (!isAutoMode) return

    const checkTime = () => {
      const timeBasedTheme = getThemeByTime()
      setThemeState(timeBasedTheme)
    }

    // Check immediately
    checkTime()

    // Then check every 60 seconds
    const interval = setInterval(checkTime, 60000)

    return () => clearInterval(interval)
  }, [isAutoMode])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, isAutoMode, setAutoMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
