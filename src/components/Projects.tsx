export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Rajasthan Solar Park',
      type: 'Solar Power System',
      location: 'Jodhpur, Rajasthan',
      capacity: '5 MW',
      year: '2024',
      description:
        'Large-scale ground-mounted solar park powering over 3,000 households with clean energy.',
      stats: [
        { label: 'Capacity', value: '5 MW' },
        { label: 'Panels', value: '12,500' },
        { label: 'CO₂ Saved', value: '6,200 tons/yr' },
      ],
      featured: true,
    },
    {
      id: 2,
      title: 'Chennai Manufacturing Hub',
      type: 'Rooftop Solar + HVAC',
      location: 'Chennai, Tamil Nadu',
      capacity: '1.2 MW',
      year: '2023',
      description:
        'Integrated rooftop solar with Thermax HVAC system for a 50,000 sq ft manufacturing facility.',
      stats: [
        { label: 'Capacity', value: '1.2 MW' },
        { label: 'Area', value: '50,000 sqft' },
        { label: 'Savings', value: '40%' },
      ],
      featured: false,
    },
    {
      id: 3,
      title: 'Gujarat Industrial Complex',
      type: 'Grid Infrastructure',
      location: 'Ahmedabad, Gujarat',
      capacity: '33 kV Substation',
      year: '2023',
      description:
        'Complete 33kV substation with smart grid integration for an industrial complex.',
      stats: [
        { label: 'Voltage', value: '33 kV' },
        { label: 'Load', value: '10 MVA' },
        { label: 'Uptime', value: '99.9%' },
      ],
      featured: false,
    },
    {
      id: 4,
      title: 'Pune IT Campus',
      type: 'Solar + Insulation',
      location: 'Pune, Maharashtra',
      capacity: '800 kW',
      year: '2024',
      description:
        'Rooftop solar installation with thermal insulation reducing HVAC load by 35%.',
      stats: [
        { label: 'Capacity', value: '800 kW' },
        { label: 'Buildings', value: '4' },
        { label: 'ROI', value: '3.5 yrs' },
      ],
      featured: false,
    },
    {
      id: 5,
      title: 'Hyderabad Data Center',
      type: 'Thermax HVAC',
      location: 'Hyderabad, Telangana',
      capacity: '500 TR',
      year: '2022',
      description:
        'Precision cooling solution for a Tier-3 data center with 99.99% uptime requirement.',
      stats: [
        { label: 'Cooling', value: '500 TR' },
        { label: 'PUE', value: '1.4' },
        { label: 'Uptime', value: '99.99%' },
      ],
      featured: false,
    },
    {
      id: 6,
      title: 'Karnataka Textile Mill',
      type: 'Solar + Grid',
      location: 'Bangalore, Karnataka',
      capacity: '2.5 MW',
      year: '2023',
      description:
        'Hybrid solar installation with grid synchronization for continuous textile operations.',
      stats: [
        { label: 'Capacity', value: '2.5 MW' },
        { label: 'Grid Sync', value: 'Yes' },
        { label: 'Savings', value: '₹1.2Cr/yr' },
      ],
      featured: false,
    },
  ]

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 lg:py-32 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--bg-secondary)] text-[var(--accent-primary)] text-sm font-medium mb-4">
            Our Projects
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4">
            Powering Success Across India
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            From solar parks to smart grid infrastructure, explore our portfolio of
            successful energy projects delivered across the country.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-12">
            <div className="card-clipped bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-tertiary)] p-8 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Project Visual */}
                <div className="relative aspect-video bg-[var(--bg-primary)] rounded-lg overflow-hidden">
                  {/* Stylized solar panel grid */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 p-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-secondary)] rounded-sm border border-[var(--accent-primary)]/10"
                      />
                    ))}
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--accent-primary)] text-white text-xs font-semibold rounded-full">
                    Featured Project
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <span className="text-[var(--accent-primary)] text-sm font-medium">
                    {featuredProject.type}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl mt-2 mb-3">
                    {featuredProject.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-4">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {featuredProject.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {featuredProject.year}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {featuredProject.stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-3 bg-[var(--bg-primary)] rounded-lg"
                      >
                        <div className="font-display text-lg text-[var(--accent-primary)]">
                          {stat.value}
                        </div>
                        <div className="text-xs text-[var(--text-muted)]">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[var(--bg-secondary)] rounded-lg overflow-hidden hover:bg-[var(--bg-tertiary)] transition-colors"
            >
              {/* Project Visual */}
              <div className="relative aspect-[4/3] bg-[var(--bg-primary)]">
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 p-3">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-[var(--bg-tertiary)] to-[var(--bg-secondary)] rounded-sm border border-[var(--accent-primary)]/10 group-hover:border-[var(--accent-primary)]/20 transition-colors"
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent" />
                {/* Type badge */}
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-[var(--bg-primary)]/80 backdrop-blur-sm text-[var(--accent-primary)] text-xs font-medium rounded">
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    </svg>
                    {project.location}
                  </span>
                  <span>{project.year}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Mini stats */}
                <div className="flex items-center gap-3 pt-3 border-t border-[var(--bg-tertiary)]">
                  {project.stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-xs">
                      <span className="text-[var(--accent-primary)] font-semibold">
                        {stat.value}
                      </span>{' '}
                      <span className="text-[var(--text-muted)]">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
