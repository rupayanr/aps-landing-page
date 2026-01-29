export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden grid-bg">
      {/* Energy lines background */}
      <div className="absolute inset-0 pointer-events-none">
        {[15, 35, 65, 85].map((left, index) => (
          <div
            key={index}
            className="energy-line"
            style={{
              left: `${left}%`,
              animationDelay: `${index * 0.75}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--bg-tertiary)]">
              <span className="w-2 h-2 rounded-full bg-solar-500 animate-pulse" />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Trusted Energy Partner Since 2019
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Powering Tomorrow's{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-400 to-solar-600">
                Sustainable
              </span>{' '}
              Future
            </h1>

            {/* Description */}
            <p className="text-lg text-[var(--text-secondary)] max-w-xl">
              Leading provider of comprehensive solar solutions, Thermax HVAC systems,
              premium insulation materials, and cutting-edge electro grid infrastructure.
              Transform your energy consumption with our expert solutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:contact@associatedpower.com?subject=Quote Request&body=Hello,%0D%0A%0D%0AI am interested in your services..."
                className="btn-primary bg-gradient-to-r from-solar-500 to-solar-600 text-white px-8 py-4 text-lg font-semibold hover:from-solar-600 hover:to-solar-700 transition-all shadow-lg shadow-solar-500/25"
              >
                Get a Quote
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors font-medium"
              >
                View Services
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Solar Panel Grid Visual */}
          <div className="relative lg:h-[500px] flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow effect behind panels */}
              <div className="absolute inset-0 bg-gradient-radial from-solar-500/20 via-transparent to-transparent rounded-full blur-3xl" />

              {/* Solar panel grid - 4x4 */}
              <div className="relative grid grid-cols-4 gap-2 p-4 transform rotate-12 hover:rotate-6 transition-transform duration-700">
                {Array.from({ length: 16 }).map((_, panelIndex) => (
                  <div
                    key={panelIndex}
                    className="aspect-square rounded-sm bg-gradient-to-br from-[var(--bg-tertiary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)] border border-[var(--accent-primary)]/20 shadow-lg"
                  >
                    {/* Panel grid lines with shimmer on each cell */}
                    <div className="w-full h-full grid grid-cols-2 grid-rows-3 gap-px p-1">
                      {Array.from({ length: 6 }).map((_, cellIndex) => (
                        <div
                          key={cellIndex}
                          className="solar-cell relative bg-[var(--bg-primary)]/50 rounded-sm overflow-hidden"
                          style={{
                            animationDelay: `${(panelIndex * 0.15) + (cellIndex * 0.1)}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-solar-400 to-solar-600 opacity-80 blur-sm animate-float" />
              <div
                className="absolute -bottom-8 -left-8 w-12 h-12 rounded-full bg-gradient-to-br from-solar-500 to-solar-700 opacity-60 blur-sm animate-float"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-[var(--text-muted)] uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-[var(--text-muted)] flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-[var(--accent-primary)] animate-bounce-slow" />
        </div>
      </div>
    </section>
  )
}
