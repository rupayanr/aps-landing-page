export default function Stats() {
  const stats = [
    { value: '20+', label: 'Projects Completed' },
    { value: '10+', label: 'MW Installed' },
    { value: '5+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="py-16 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-[var(--bg-primary)] border border-[var(--bg-tertiary)] hover:border-[var(--accent-primary)]/50 transition-colors"
            >
              <div className="font-display text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-solar-400 to-solar-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-[var(--text-secondary)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
