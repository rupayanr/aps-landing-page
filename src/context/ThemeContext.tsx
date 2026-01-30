import { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  isAutoMode: boolean
  setAutoMode: (auto: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Safe localStorage wrapper to handle private browsing and quota errors
function safeGetItem(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value)
  } catch {
    // Silently fail - localStorage unavailable or quota exceeded
  }
}

function getThemeByTime(): Theme {
  const hour = new Date().getHours()
  // 6:00 AM - 6:00 PM = Light mode
  return hour >= 6 && hour < 18 ? 'light' : 'dark'
}

function getInitialAutoMode(): boolean {
  if (typeof window === 'undefined') return true
  const savedAutoMode = safeGetItem('aps-auto-theme')
  return savedAutoMode !== 'false'
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'

  const savedAutoMode = safeGetItem('aps-auto-theme')
  const savedTheme = safeGetItem('aps-theme') as Theme | null

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
    safeSetItem('aps-theme', newTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    // Disable auto mode when manually toggling
    setIsAutoModeState(false)
    safeSetItem('aps-auto-theme', 'false')
  }, [theme, setTheme])

  const setAutoMode = useCallback((auto: boolean) => {
    setIsAutoModeState(auto)
    safeSetItem('aps-auto-theme', String(auto))
    if (auto) {
      // When enabling auto mode, immediately set theme based on time
      const timeBasedTheme = getThemeByTime()
      setThemeState(timeBasedTheme)
      safeSetItem('aps-theme', timeBasedTheme)
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

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({ theme, toggleTheme, setTheme, isAutoMode, setAutoMode }),
    [theme, toggleTheme, setTheme, isAutoMode, setAutoMode]
  )

  return (
    <ThemeContext.Provider value={value}>
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
