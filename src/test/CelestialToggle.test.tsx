import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { screen, fireEvent, act } from '@testing-library/react'
import { render } from './test-utils'
import CelestialToggle from '../components/CelestialToggle'

describe('CelestialToggle', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders toggle button', () => {
    render(<CelestialToggle />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('has correct aria-label for light mode', () => {
    render(<CelestialToggle />)

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute(
      'aria-label',
      expect.stringContaining('dark')
    )
  })

  it('toggles theme on single click', async () => {
    render(<CelestialToggle />)

    const button = screen.getByRole('button')

    // Verify initial state (light mode, so aria-label mentions switching to dark)
    expect(button).toHaveAttribute('aria-label', expect.stringContaining('dark'))

    // Click the button
    await act(async () => {
      fireEvent.click(button)
    })

    // Advance timers past the click timeout (250ms)
    await act(async () => {
      vi.advanceTimersByTime(300)
    })

    // After toggle, aria-label should mention switching to light mode
    expect(button).toHaveAttribute('aria-label', expect.stringContaining('light'))
  })

  it('enables auto mode on double click', async () => {
    // First disable auto mode
    localStorage.setItem('aps-auto-theme', 'false')
    localStorage.setItem('aps-theme', 'dark')

    render(<CelestialToggle />)

    const button = screen.getByRole('button')

    // Double click
    await act(async () => {
      fireEvent.click(button)
      fireEvent.click(button)
    })

    // Advance timers
    await act(async () => {
      vi.advanceTimersByTime(300)
    })

    // Auto mode should be enabled (check localStorage)
    expect(localStorage.getItem('aps-auto-theme')).toBe('true')
  })
})
