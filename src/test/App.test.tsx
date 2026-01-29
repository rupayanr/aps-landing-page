import { describe, it, expect, vi, beforeEach } from 'vitest'
import { screen } from '@testing-library/react'
import { render } from '@testing-library/react'
import App from '../App'
import { ThemeProvider } from '../context/ThemeContext'

describe('App', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders without crashing', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )
    expect(screen.getAllByText(/associated power systems/i).length).toBeGreaterThan(0)
  })

  it('renders all main sections', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    // Hero
    expect(screen.getByText(/powering tomorrow/i)).toBeInTheDocument()

    // Stats
    expect(screen.getByText('20+')).toBeInTheDocument()

    // About
    expect(screen.getByText(/energizing india since 2019/i)).toBeInTheDocument()

    // Services - use getAllByText since it appears in multiple places
    expect(screen.getAllByText(/comprehensive energy solutions/i).length).toBeGreaterThan(0)

    // Projects
    expect(screen.getByText(/powering success across india/i)).toBeInTheDocument()

    // Clients
    expect(screen.getByText(/trusted by industry leaders/i)).toBeInTheDocument()

    // Contact
    expect(screen.getByText(/let's power your future together/i)).toBeInTheDocument()
  })

  it('applies light theme data attribute during day', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    const appContainer = document.querySelector('[data-theme]')
    expect(appContainer).toHaveAttribute('data-theme', 'light')
  })

  it('applies dark theme data attribute at night', () => {
    vi.setSystemTime(new Date('2024-01-15T22:00:00'))

    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    const appContainer = document.querySelector('[data-theme]')
    expect(appContainer).toHaveAttribute('data-theme', 'dark')
  })

  it('renders navbar with navigation', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('renders footer with copyright', () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    )

    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
  })
})
