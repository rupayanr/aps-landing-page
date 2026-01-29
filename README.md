# Associated Power Systems - Landing Page

A modern, responsive landing page for Associated Power Systems - a solar solutions provider offering Thermax HVAC, insulation materials, and electro grid infrastructure.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Animation**: GSAP 3.12 + MotionPath Plugin
- **Containerization**: Docker

## Features

- Dark/Light theme with animated celestial toggle (sun/moon)
- Auto theme mode based on time of day (6AM-6PM = light)
- Smooth GSAP animations
- Responsive design
- Contact form with mailto integration

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Docker

```bash
# Build image
docker build -t aps-landing .

# Run container
docker run -p 3000:3000 aps-landing
```

## Project Structure

```
src/
├── main.tsx              # App entry point
├── App.tsx               # Root component
├── index.css             # Global styles + Tailwind
├── context/
│   └── ThemeContext.tsx  # Theme state management
└── components/
    ├── CelestialToggle.tsx  # Sun/moon toggle
    ├── Navbar.tsx           # Navigation bar
    ├── Hero.tsx             # Hero section
    ├── Stats.tsx            # Statistics section
    ├── Services.tsx         # Services cards
    ├── Contact.tsx          # Contact section
    └── Footer.tsx           # Footer
```

## Theme System

The app supports three theme modes:

1. **Auto Mode** (default): Theme changes based on time of day
   - 6:00 AM - 6:00 PM: Light mode
   - 6:00 PM - 6:00 AM: Dark mode

2. **Manual Dark Mode**: Single click on toggle when in light mode
3. **Manual Light Mode**: Single click on toggle when in dark mode

Double-click the toggle to re-enable auto mode.

## License

MIT
