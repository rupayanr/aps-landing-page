export default function About() {
  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: 'Quality Assured',
      description: 'Premium components and rigorous quality checks on every installation.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Innovation First',
      description: 'Cutting-edge technology and smart solutions for modern energy needs.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Expert Team',
      description: 'Certified engineers with decades of combined industry experience.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Sustainable Focus',
      description: 'Committed to reducing carbon footprint and building a greener future.',
    },
  ]

  const milestones = [
    { year: '2019', event: 'Company Founded', description: 'Started with a vision to transform energy infrastructure in India.' },
    { year: '2020', event: 'First Major Project', description: 'Completed 1 MW solar installation in Maharashtra.' },
    { year: '2022', event: 'Thermax Partnership', description: 'Became authorized Thermax HVAC solutions provider.' },
    { year: '2023', event: '10 MW Milestone', description: 'Crossed 10 MW of total installed solar capacity.' },
    { year: '2024', event: 'Pan-India Expansion', description: 'Expanded operations to 8 states across India.' },
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-primary)] text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            Energizing India Since 2019
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Associated Power Systems is a leading provider of comprehensive energy solutions,
            dedicated to powering India's sustainable future through innovation and excellence.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Story */}
          <div>
            <h3 className="font-display text-2xl mb-6">Our Story</h3>
            <div className="space-y-4 text-[var(--text-secondary)]">
              <p>
                Founded in 2019, Associated Power Systems began with a simple mission: to make
                clean, reliable energy accessible to businesses across India. What started as
                a small team of passionate engineers has grown into a trusted partner for
                enterprises seeking comprehensive energy solutions.
              </p>
              <p>
                Today, we offer end-to-end services spanning solar power systems, Thermax HVAC
                solutions, premium insulation materials, and complete electro grid infrastructure.
                Our integrated approach ensures seamless project delivery from consultation to
                commissioning.
              </p>
              <p>
                With over 20 successful projects and 10+ MW of installed capacity, we continue
                to push boundaries in sustainable energy, helping our clients reduce costs while
                minimizing their environmental impact.
              </p>
            </div>

            {/* CTA */}
            <a
              href="mailto:contact@associatedpower.com?subject=Partnership Inquiry"
              className="inline-flex items-center gap-2 mt-8 text-[var(--accent-primary)] font-medium hover:underline"
            >
              Partner with us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-display text-2xl mb-6">Our Journey</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-[var(--bg-tertiary)]" />

              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative pl-8">
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[var(--accent-primary)] border-4 border-[var(--bg-secondary)]" />

                    <div className="bg-[var(--bg-primary)] rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[var(--accent-primary)] font-display text-lg">
                          {milestone.year}
                        </span>
                        <span className="text-[var(--text-primary)] font-semibold">
                          {milestone.event}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="font-display text-2xl text-center mb-10">Why Choose Us</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[var(--bg-primary)] rounded-lg hover:bg-[var(--bg-tertiary)] transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--accent-primary)]/10 text-[var(--accent-primary)] mb-4 group-hover:bg-[var(--accent-primary)]/20 transition-colors">
                  {value.icon}
                </div>
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-[var(--text-secondary)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
