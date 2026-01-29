# APS Landing Page - Claude Code Instructions

## Project Overview

Landing page for **Associated Power Systems** - a solar solutions provider offering Thermax HVAC, insulation materials, and electro grid infrastructure.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3.4
- **Animation**: GSAP 3.12 + MotionPath Plugin
- **Containerization**: Docker

## Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Docker
docker build -t aps-landing .
docker run -p 3000:3000 aps-landing
```

---

## Design System

### Theme Colors

**Dark Mode (Default)**
| Token | Value |
|-------|-------|
| `--bg-primary` | `#0a0a0f` |
| `--bg-secondary` | `#12121a` |
| `--bg-tertiary` | `#1a1a25` |
| `--text-primary` | `#f8fafc` |
| `--text-secondary` | `#94a3b8` |
| `--text-muted` | `#64748b` |
| `--accent-primary` | `#f59e0b` |
| `--accent-secondary` | `#d97706` |

**Light Mode**
| Token | Value |
|-------|-------|
| `--bg-primary` | `#fefefe` |
| `--bg-secondary` | `#f1f5f9` |
| `--bg-tertiary` | `#e2e8f0` |
| `--text-primary` | `#0f172a` |
| `--text-secondary` | `#475569` |

### Typography

- **Display Font**: Archivo Black (headings)
- **Body Font**: DM Sans (everything else)

### Tailwind Custom Colors

```js
// tailwind.config.js
colors: {
  solar: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',  // Primary accent
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  power: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#0a0a0f',  // Darkest background
  }
}
```

---

## Project Structure

```
aps-landing-page/
├── CLAUDE.md
├── README.md
├── Dockerfile
├── .eslintrc.json
├── .gitignore
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── public/
│   └── favicon.svg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── context/
    │   └── ThemeContext.tsx
    └── components/
        ├── CelestialToggle.tsx
        ├── Navbar.tsx
        ├── Hero.tsx
        ├── Stats.tsx
        ├── Services.tsx
        ├── Contact.tsx
        └── Footer.tsx
```

---

## Component Specifications

### 1. ThemeContext (`src/context/ThemeContext.tsx`)

Manages dark/light theme state with auto mode.

**Features:**
- Auto mode: Theme based on time of day
  - 6:00 AM - 6:00 PM → Light mode (Sun)
  - 6:00 PM - 6:00 AM → Dark mode (Moon)
- Manual override persisted to localStorage
- Checks time every 60 seconds when in auto mode

**CRITICAL Implementation Details:**
```typescript
// Use lazy initialization to prevent theme flash
const [theme, setThemeState] = useState<Theme>(getInitialTheme)
const [isAutoMode, setIsAutoMode] = useState<boolean>(getInitialAutoMode)

// getInitialTheme checks localStorage FIRST, then falls back to time-based
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  
  const savedAutoMode = localStorage.getItem('aps-auto-theme')
  const savedTheme = localStorage.getItem('aps-theme') as Theme | null
  
  if (savedAutoMode === 'false' && savedTheme) {
    return savedTheme
  }
  return getThemeByTime()
}
```

**Exports:**
- `ThemeProvider` - Wrap app with this
- `useTheme()` - Returns `{ theme, toggleTheme, setTheme, isAutoMode, setAutoMode }`

---

### 2. CelestialToggle (`src/components/CelestialToggle.tsx`)

Animated sun/moon theme toggle using GSAP MotionPath.

**Visual Design:**
```
        ☀️ (orb travels this arc)
       /                        \
      /                          \
     🌙________________________☀️
     Left                      Right
     (Dark)                   (Light)
```

**Animation Specs:**
- Curved SVG path: `M 12 28 Q 40 4 68 28`
- Dark mode = Moon on LEFT (position 0)
- Light mode = Sun on RIGHT (position 1)
- Duration: 0.8s with `power2.inOut` easing

**CRITICAL Implementation Details:**

1. **Click Detection** - Use timeout-based detection, NOT onClick + onDoubleClick:
```typescript
const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)
const clickCountRef = useRef(0)

const handleClick = useCallback(() => {
  clickCountRef.current += 1
  
  if (clickCountRef.current === 1) {
    clickTimeoutRef.current = setTimeout(() => {
      if (clickCountRef.current === 1) {
        toggleTheme()  // Single click
      }
      clickCountRef.current = 0
    }, 250)
  } else if (clickCountRef.current === 2) {
    clearTimeout(clickTimeoutRef.current!)
    clickCountRef.current = 0
    setAutoMode(true)  // Double click
  }
}, [toggleTheme, setAutoMode])
```

2. **Skip Animation on First Render:**
```typescript
const isFirstRender = useRef(true)

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false
    return  // Skip animation, initial position set by other effect
  }
  // ... animation code
}, [theme])
```

3. **Set Initial States on Mount:**
```typescript
useEffect(() => {
  const initialPosition = theme === 'dark' ? 0 : 1
  
  gsap.set(orbRef.current, {
    motionPath: {
      path: '#orbital-path',
      align: '#orbital-path',
      alignOrigin: [0.5, 0.5],
      end: initialPosition,
    },
  })
  
  // Also set glow, sun rays, moon craters initial states
}, [])  // Empty deps - only on mount
```

**Animated Elements:**
| Element | Dark Mode | Light Mode |
|---------|-----------|------------|
| Orb position | 0 (left) | 1 (right) |
| Orb color | `#cbd5e1` (gray) | `var(--accent-primary)` (amber) |
| Glow radius | 16 | 20 |
| Glow opacity | 0.3 | 0.5 |
| Sun rays | opacity 0, scale 0.5 | opacity 1, scale 1 |
| Moon craters | opacity 1 | opacity 0 |

---

### 3. Navbar (`src/components/Navbar.tsx`)

**Contents:**
- Logo (hexagon icon + "ASSOCIATED POWER SYSTEMS" text)
- Nav links: Services, About, Projects, Contact
- CelestialToggle component
- "Get Quote" CTA button

**CTA:** `mailto:contact@associatedpower.com?subject=Quote Request`

---

### 4. Hero (`src/components/Hero.tsx`)

**Contents:**
- Badge: "Trusted Energy Partner Since 2019"
- Heading: "Powering Tomorrow's **Sustainable** Future"
- Description paragraph
- CTAs: "Get a Quote" button + "View Services" link
- Solar panel grid visual (4x4 grid with shimmer effect)
- Animated energy lines in background
- Scroll indicator at bottom

**IMPORTANT:** Solar panel colors must use CSS variables for theme adaptation:
```jsx
// CORRECT - adapts to theme
className="bg-gradient-to-br from-[var(--bg-tertiary)] via-[var(--bg-secondary)] to-[var(--bg-tertiary)]"

// WRONG - hardcoded dark colors
className="bg-gradient-to-br from-power-800 via-power-700 to-power-800"
```

---

### 5. Stats (`src/components/Stats.tsx`)

**Stats to Display:**
| Number | Label |
|--------|-------|
| 20+ | Projects Completed |
| 10+ | MW Installed |
| 5+ | Years Experience |
| 98% | Client Satisfaction |

---

### 6. Services (`src/components/Services.tsx`)

**4 Service Cards:**
1. **Solar Power Systems** - Rooftop, ground-mounted, solar parks
2. **Thermax HVAC** - Heating, ventilation, AC solutions
3. **Insulation Materials** - Thermal and acoustic insulation
4. **Electro Grid Infrastructure** - Substations, transmission lines, smart grid

---

### 7. Contact (`src/components/Contact.tsx`)

**Contents:**
- Section heading
- Contact details (phone placeholder, email, location: India)
- CTA card with "Get a Quote" mailto link

**Email body template:**
```
mailto:contact@associatedpower.com?subject=Quote Request&body=Hello,%0D%0A%0D%0AI am interested in your services...
```

---

### 8. Footer (`src/components/Footer.tsx`)

**Contents:**
- Logo + company description
- Social links (LinkedIn, Twitter, Email)
- Service links
- Company links
- Copyright with dynamic year

---

## CSS Specifications (`src/index.css`)

### Custom Classes to Implement

```css
/* Button with clipped corners */
.btn-primary {
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
}

/* Card with clipped corners */
.card-clipped {
  clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
}

/* Hexagon icon shape */
.hex-icon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* Grid background pattern */
.grid-bg {
  background-image: 
    linear-gradient(var(--grid-color) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
  background-size: 60px 60px;
}

/* Energy line animation */
.energy-line {
  position: fixed;
  width: 2px;
  height: 100vh;
  background: linear-gradient(180deg, transparent, var(--accent-primary), transparent);
  animation: energyFlow 3s ease-in-out infinite;
}

/* Shimmer effect for solar cells */
.shimmer::after {
  background: linear-gradient(135deg, transparent 40%, rgba(245, 158, 11, 0.1) 50%, transparent 60%);
  animation: shimmer 3s infinite;
}
```

### Keyframes

```css
@keyframes energyFlow {
  0% { transform: translateY(-100%); opacity: 0; }
  50% { opacity: 0.3; }
  100% { transform: translateY(100%); opacity: 0; }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

@keyframes sunPulse {
  0%, 100% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.2); opacity: 0.6; }
}
```

---

## Tailwind Config Additions

```js
// tailwind.config.js
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Archivo Black', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',  // Required for duration-400 class
      },
      // ... colors defined above
    }
  }
}
```

---

## Common Pitfalls to Avoid

1. **Theme Flash** - Always use lazy state initialization for theme
2. **Click/Double-click** - Native events don't work together; use timeout detection
3. **Animation on Load** - Skip first render animation; set initial states with `gsap.set()`
4. **Motion Path Direction** - Dark = position 0 (left), Light = position 1 (right)
5. **Hardcoded Colors** - Use CSS variables for theme-dependent colors
6. **Missing duration-400** - Add to Tailwind config's `transitionDuration`
7. **energyFlow Keyframe** - Don't use `0%, 100%` together with separate `100%`

---

## Files to Create

1. `package.json` - Dependencies: react, react-dom, gsap
2. `vite.config.ts` - Standard React + Vite config
3. `tailwind.config.js` - Custom theme with solar/power colors
4. `postcss.config.js` - Tailwind + autoprefixer
5. `tsconfig.json` + `tsconfig.node.json`
6. `.eslintrc.json` - ESLint config for React + TypeScript
7. `.gitignore` - node_modules, dist, .env, etc.
8. `index.html` - Entry HTML with Google Fonts links
9. `Dockerfile` - Multi-stage build with nginx
10. `README.md` - Project documentation

---

## Google Fonts to Include

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## Testing Checklist

- [ ] Theme toggles correctly on click
- [ ] Double-click re-enables auto mode
- [ ] Auto mode shows "AUTO" label
- [ ] Theme matches time of day on fresh load
- [ ] No flash of wrong theme on page load
- [ ] Orb starts in correct position (no animation)
- [ ] Solar panels adapt to light/dark theme
- [ ] All animations smooth (60fps)
- [ ] Responsive on mobile
- [ ] "Get Quote" opens mail client