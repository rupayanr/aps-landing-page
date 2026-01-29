export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: 'Solar Power Systems',
      description:
        'Comprehensive solar solutions including rooftop installations, ground-mounted systems, and large-scale solar parks for commercial and industrial applications.',
      features: ['Rooftop Solar', 'Ground-Mounted', 'Solar Parks'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Thermax HVAC',
      description:
        'Premium Thermax heating, ventilation, and air conditioning solutions designed for optimal climate control and energy efficiency in any environment.',
      features: ['Heating Systems', 'Ventilation', 'AC Solutions'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: 'Insulation Materials',
      description:
        'High-quality thermal and acoustic insulation materials that enhance energy efficiency, reduce noise pollution, and create comfortable spaces.',
      features: ['Thermal Insulation', 'Acoustic Insulation', 'Energy Efficiency'],
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: 'Electro Grid Infrastructure',
      description:
        'Complete electrical grid infrastructure solutions including substations, transmission lines, and smart grid technology for reliable power distribution.',
      features: ['Substations', 'Transmission Lines', 'Smart Grid'],
    },
  ]

  return (
    <section id="services" className="py-20 lg:py-32 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-secondary)] text-[var(--accent-primary)] text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            Comprehensive Energy Solutions
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            From solar installations to grid infrastructure, we provide end-to-end
            solutions for all your energy needs.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-clipped bg-[var(--bg-secondary)] p-8 hover:bg-[var(--bg-tertiary)] transition-colors group"
            >
              {/* Icon */}
              <div className="hex-icon w-16 h-16 bg-gradient-to-br from-solar-500/20 to-solar-600/20 flex items-center justify-center text-[var(--accent-primary)] mb-6 group-hover:from-solar-500/30 group-hover:to-solar-600/30 transition-colors">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl sm:text-2xl mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--text-secondary)] mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="px-3 py-1 rounded-full bg-[var(--bg-primary)] text-sm text-[var(--text-muted)]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
