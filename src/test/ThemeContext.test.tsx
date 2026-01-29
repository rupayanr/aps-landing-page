import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { ThemeProvider, useTheme } from '../context/ThemeContext'
import { ReactNode } from 'react'

const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
)

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('provides default theme based on time of day', () => {
    // Set time to 10 AM (should be light)
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))

    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe('light')
    expect(result.current.isAutoMode).toBe(true)
  })

  it('provides dark theme at night', () => {
    // Set time to 10 PM (should be dark)
    vi.setSystemTime(new Date('2024-01-15T22:00:00'))

    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe('dark')
  })

  it('toggles theme correctly', () => {
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))

    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe('light')

    act(() => {
      result.current.toggleTheme()
    })

    expect(result.current.theme).toBe('dark')
    expect(result.current.isAutoMode).toBe(false)
  })

  it('persists theme to localStorage when toggled', () => {
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))

    const { result } = renderHook(() => useTheme(), { wrapper })

    act(() => {
      result.current.toggleTheme()
    })

    expect(localStorage.getItem('aps-theme')).toBe('dark')
    expect(localStorage.getItem('aps-auto-theme')).toBe('false')
  })

  it('restores theme from localStorage', () => {
    localStorage.setItem('aps-theme', 'dark')
    localStorage.setItem('aps-auto-theme', 'false')

    vi.setSystemTime(new Date('2024-01-15T10:00:00'))

    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe('dark')
    expect(result.current.isAutoMode).toBe(false)
  })

  it('setAutoMode enables auto mode and sets time-based theme', () => {
    localStorage.setItem('aps-theme', 'dark')
    localStorage.setItem('aps-auto-theme', 'false')

    vi.setSystemTime(new Date('2024-01-15T10:00:00'))

    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe('dark')

    act(() => {
      result.current.setAutoMode(true)
    })

    expect(result.current.isAutoMode).toBe(true)
    expect(result.current.theme).toBe('light') // Should switch to time-based
  })

  it('setTheme sets specific theme', () => {
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))

    const { result } = renderHook(() => useTheme(), { wrapper })

    act(() => {
      result.current.setTheme('dark')
    })

    expect(result.current.theme).toBe('dark')
    expect(localStorage.getItem('aps-theme')).toBe('dark')
  })

  it('throws error when useTheme is used outside provider', () => {
    expect(() => {
      renderHook(() => useTheme())
    }).toThrow('useTheme must be used within a ThemeProvider')
  })

  it('boundary times: 6 AM should be light', () => {
    vi.setSystemTime(new Date('2024-01-15T06:00:00'))

    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe('light')
  })

  it('boundary times: 5:59 AM should be dark', () => {
    vi.setSystemTime(new Date('2024-01-15T05:59:00'))

    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe('dark')
  })

  it('boundary times: 6 PM should be dark', () => {
    vi.setSystemTime(new Date('2024-01-15T18:00:00'))

    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe('dark')
  })

  it('boundary times: 5:59 PM should be light', () => {
    vi.setSystemTime(new Date('2024-01-15T17:59:00'))

    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe('light')
  })
})
