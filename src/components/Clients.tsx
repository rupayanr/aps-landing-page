export default function Clients() {
  const testimonials = [
    {
      quote:
        'Associated Power Systems delivered our 2 MW rooftop installation on time and within budget. Their expertise in both solar and grid infrastructure made the integration seamless.',
      author: 'Rajesh Kumar',
      role: 'Plant Manager',
      company: 'Sterling Industries',
    },
    {
      quote:
        'The Thermax HVAC solution they provided reduced our energy costs by 35%. Professional team with excellent after-sales support.',
      author: 'Priya Sharma',
      role: 'Facilities Director',
      company: 'TechPark Pune',
    },
    {
      quote:
        'From consultation to commissioning, the APS team demonstrated exceptional knowledge and commitment. Highly recommended for industrial energy projects.',
      author: 'Anil Mehta',
      role: 'CEO',
      company: 'Gujarat Textiles Ltd',
    },
  ]

  const partners = [
    { name: 'Thermax', type: 'HVAC Partner' },
    { name: 'Tata Power Solar', type: 'Panel Supplier' },
    { name: 'ABB', type: 'Grid Equipment' },
    { name: 'Schneider Electric', type: 'Inverters' },
    { name: 'Havells', type: 'Electrical' },
    { name: 'Polycab', type: 'Cables' },
  ]

  const certifications = [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'MNRE Approved',
    'CEA Certified',
  ]

  return (
    <section className="py-20 lg:py-32 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-secondary)] text-[var(--accent-primary)] text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-clipped bg-[var(--bg-secondary)] p-6 lg:p-8"
              >
                {/* Quote icon */}
                <svg
                  className="w-10 h-10 text-[var(--accent-primary)]/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-[var(--text-secondary)] mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-solar-500 to-solar-600 flex items-center justify-center text-white font-semibold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-[var(--text-muted)]">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners & Certifications */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Partners */}
          <div>
            <h3 className="font-display text-2xl text-center mb-8">Our Partners</h3>
            <div className="grid grid-cols-3 gap-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-[var(--bg-secondary)] rounded-lg p-4 text-center hover:bg-[var(--bg-tertiary)] transition-colors"
                >
                  <div className="font-semibold text-sm mb-1">{partner.name}</div>
                  <div className="text-xs text-[var(--text-muted)]">{partner.type}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display text-2xl text-center mb-8">Certifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-[var(--bg-secondary)] rounded-lg p-4 flex items-center gap-3 hover:bg-[var(--bg-tertiary)] transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-[var(--accent-primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-sm">{cert}</span>
                </div>
              ))}
            </div>

            {/* Trust statement */}
            <p className="mt-6 text-center text-sm text-[var(--text-muted)]">
              All installations comply with MNRE guidelines and local electrical safety standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
