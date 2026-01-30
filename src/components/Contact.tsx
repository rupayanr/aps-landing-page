import { CONTACT_EMAIL, CONTACT_EMAIL_MAILTO, DETAILED_QUOTE_MAILTO } from '../constants'

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: 'Phone',
      value: '+91 XXXXX XXXXX',
      href: 'tel:+91XXXXXXXXXX',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: 'Email',
      value: CONTACT_EMAIL,
      href: CONTACT_EMAIL_MAILTO,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: 'Location',
      value: 'India',
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Contact Info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-tertiary)] text-[var(--accent-primary)] text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-6">
              Let's Power Your Future Together
            </h2>
            <p className="text-[var(--text-secondary)] mb-10 max-w-lg">
              Ready to transform your energy infrastructure? Get in touch with our
              team of experts for a personalized consultation.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="hex-icon w-12 h-12 bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--accent-primary)]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-muted)]">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[var(--text-primary)]">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - CTA Card */}
          <div className="card-clipped bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-primary)] p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-center">
              {/* Sun icon */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-solar-400 to-solar-600 flex items-center justify-center shadow-lg shadow-solar-500/30">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl mb-4">
                Request a Free Quote
              </h3>
              <p className="text-[var(--text-secondary)] mb-8 max-w-sm mx-auto">
                Get a customized energy solution tailored to your specific needs and
                budget.
              </p>

              <a
                href={DETAILED_QUOTE_MAILTO}
                className="btn-primary inline-block bg-gradient-to-r from-solar-500 to-solar-600 text-white px-10 py-4 text-lg font-semibold hover:from-solar-600 hover:to-solar-700 transition-all shadow-lg shadow-solar-500/25"
              >
                Get a Quote
              </a>

              <p className="mt-6 text-sm text-[var(--text-muted)]">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
