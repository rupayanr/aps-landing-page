import { describe, it, expect, vi, beforeEach } from 'vitest'
import { screen } from '@testing-library/react'
import { render } from './test-utils'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

describe('Navbar', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders company name', () => {
    render(<Navbar />)
    expect(screen.getByText(/associated power systems/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /^services$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^about$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^projects$/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^contact$/i })).toBeInTheDocument()
  })

  it('renders Get Quote CTA with correct mailto link', () => {
    render(<Navbar />)
    const ctaLinks = screen.getAllByText(/get quote/i)
    expect(ctaLinks.length).toBeGreaterThan(0)
    expect(ctaLinks[0].closest('a')).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:contact@associatedpower.com')
    )
  })

  it('renders theme toggle button', () => {
    render(<Navbar />)
    // There are multiple toggle buttons (desktop and mobile), just verify at least one exists
    const toggleButtons = screen.getAllByRole('button', { name: /switch to/i })
    expect(toggleButtons.length).toBeGreaterThan(0)
  })
})

describe('Hero', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders badge text', () => {
    render(<Hero />)
    expect(screen.getByText(/trusted energy partner since 2019/i)).toBeInTheDocument()
  })

  it('renders main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/powering tomorrow/i)).toBeInTheDocument()
    expect(screen.getByText(/sustainable/i)).toBeInTheDocument()
  })

  it('renders Get a Quote CTA', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /get a quote/i })
    expect(cta).toHaveAttribute(
      'href',
      expect.stringContaining('mailto:contact@associatedpower.com')
    )
  })

  it('renders View Services link', () => {
    render(<Hero />)
    expect(screen.getByText(/view services/i)).toBeInTheDocument()
  })

  it('renders scroll indicator', () => {
    render(<Hero />)
    expect(screen.getByText(/scroll/i)).toBeInTheDocument()
  })
})

describe('Stats', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all statistics', () => {
    render(<Stats />)
    expect(screen.getByText('20+')).toBeInTheDocument()
    expect(screen.getByText('10+')).toBeInTheDocument()
    expect(screen.getByText('5+')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText(/projects completed/i)).toBeInTheDocument()
    expect(screen.getByText(/mw installed/i)).toBeInTheDocument()
    expect(screen.getByText(/years experience/i)).toBeInTheDocument()
    expect(screen.getByText(/client satisfaction/i)).toBeInTheDocument()
  })
})

describe('About', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText(/energizing india since 2019/i)).toBeInTheDocument()
  })

  it('renders Our Story section', () => {
    render(<About />)
    expect(screen.getByText('Our Story')).toBeInTheDocument()
  })

  it('renders Our Journey timeline', () => {
    render(<About />)
    expect(screen.getByText('Our Journey')).toBeInTheDocument()
    expect(screen.getByText('2019')).toBeInTheDocument()
    expect(screen.getByText('2024')).toBeInTheDocument()
  })

  it('renders Why Choose Us values', () => {
    render(<About />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(screen.getByText('Quality Assured')).toBeInTheDocument()
    expect(screen.getByText('Innovation First')).toBeInTheDocument()
    expect(screen.getByText('Expert Team')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Focus')).toBeInTheDocument()
  })
})

describe('Services', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText(/comprehensive energy solutions/i)).toBeInTheDocument()
  })

  it('renders all four services', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: 'Solar Power Systems' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Thermax HVAC' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Insulation Materials' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Electro Grid Infrastructure' })).toBeInTheDocument()
  })

  it('renders service features', () => {
    render(<Services />)
    expect(screen.getByText('Rooftop Solar')).toBeInTheDocument()
    expect(screen.getByText('Smart Grid')).toBeInTheDocument()
  })
})

describe('Projects', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders section heading', () => {
    render(<Projects />)
    expect(screen.getByText('Our Projects')).toBeInTheDocument()
    expect(screen.getByText(/powering success across india/i)).toBeInTheDocument()
  })

  it('renders featured project', () => {
    render(<Projects />)
    expect(screen.getByText('Featured Project')).toBeInTheDocument()
    expect(screen.getByText('Rajasthan Solar Park')).toBeInTheDocument()
  })

  it('renders multiple projects', () => {
    render(<Projects />)
    expect(screen.getByText('Chennai Manufacturing Hub')).toBeInTheDocument()
    expect(screen.getByText('Gujarat Industrial Complex')).toBeInTheDocument()
    expect(screen.getByText('Pune IT Campus')).toBeInTheDocument()
  })

  it('renders project locations', () => {
    render(<Projects />)
    expect(screen.getByText('Jodhpur, Rajasthan')).toBeInTheDocument()
    expect(screen.getByText('Chennai, Tamil Nadu')).toBeInTheDocument()
  })
})

describe('Clients', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders testimonials section', () => {
    render(<Clients />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText(/trusted by industry leaders/i)).toBeInTheDocument()
  })

  it('renders testimonial author names', () => {
    render(<Clients />)
    expect(screen.getByText('Rajesh Kumar')).toBeInTheDocument()
    expect(screen.getByText('Priya Sharma')).toBeInTheDocument()
    expect(screen.getByText('Anil Mehta')).toBeInTheDocument()
  })

  it('renders partners section', () => {
    render(<Clients />)
    expect(screen.getByText('Our Partners')).toBeInTheDocument()
    expect(screen.getByText('Thermax')).toBeInTheDocument()
    expect(screen.getByText('ABB')).toBeInTheDocument()
  })

  it('renders certifications', () => {
    render(<Clients />)
    expect(screen.getByText('Certifications')).toBeInTheDocument()
    expect(screen.getByText('ISO 9001:2015')).toBeInTheDocument()
    expect(screen.getByText('MNRE Approved')).toBeInTheDocument()
  })
})

describe('Contact', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText(/let's power your future together/i)).toBeInTheDocument()
  })

  it('renders contact email', () => {
    render(<Contact />)
    expect(screen.getByText('contact@associatedpower.com')).toBeInTheDocument()
  })

  it('renders location', () => {
    render(<Contact />)
    expect(screen.getAllByText('India').length).toBeGreaterThan(0)
  })

  it('renders Get a Quote CTA card', () => {
    render(<Contact />)
    expect(screen.getByText('Request a Free Quote')).toBeInTheDocument()
    const ctaLinks = screen.getAllByRole('link', { name: /get a quote/i })
    expect(ctaLinks.length).toBeGreaterThan(0)
  })
})

describe('Footer', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2024-01-15T10:00:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders company name and description', () => {
    render(<Footer />)
    expect(screen.getAllByText(/associated power systems/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/powering sustainable futures/i)).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    const serviceLinks = screen.getAllByRole('link', { name: /solar power systems/i })
    expect(serviceLinks.length).toBeGreaterThan(0)
  })

  it('renders company links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /about us/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /careers/i })).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it('renders privacy and terms links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /terms of service/i })).toBeInTheDocument()
  })
})
