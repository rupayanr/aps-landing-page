import { useRef, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'

export default function CelestialToggle() {
  const { theme, toggleTheme, isAutoMode, setAutoMode } = useTheme()

  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const clickCountRef = useRef(0)

  // Handle click with timeout-based detection for single/double click
  const handleClick = useCallback(() => {
    clickCountRef.current += 1

    if (clickCountRef.current === 1) {
      clickTimeoutRef.current = setTimeout(() => {
        if (clickCountRef.current === 1) {
          toggleTheme() // Single click
        }
        clickCountRef.current = 0
      }, 250)
    } else if (clickCountRef.current === 2) {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current)
      }
      clickCountRef.current = 0
      setAutoMode(true) // Double click enables auto mode
    }
  }, [toggleTheme, setAutoMode])

  const isLight = theme === 'light'

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={handleClick}
        className="relative w-16 h-8 rounded-full bg-[var(--bg-tertiary)] border border-[var(--bg-tertiary)] hover:border-[var(--accent-primary)]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
        aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode. Double-click for auto mode.`}
      >
        {/* Track background gradient */}
        <div
          className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
            isLight ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(135deg, #87CEEB 0%, #FFD700 100%)',
          }}
        />
        <div
          className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
            isLight ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          }}
        />

        {/* Toggle knob */}
        <div
          className={`absolute top-1 w-6 h-6 rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center ${
            isLight
              ? 'left-[calc(100%-28px)] bg-solar-500'
              : 'left-1 bg-power-300'
          }`}
        >
          {/* Sun icon */}
          <svg
            className={`w-4 h-4 text-white transition-all duration-300 absolute ${
              isLight ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>

          {/* Moon icon */}
          <svg
            className={`w-4 h-4 text-power-700 transition-all duration-300 absolute ${
              isLight ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </button>

      {/* Auto mode indicator */}
      {isAutoMode && (
        <span className="absolute -bottom-5 text-[10px] font-semibold tracking-wider text-[var(--accent-primary)] uppercase">
          Auto
        </span>
      )}
    </div>
  )
}
