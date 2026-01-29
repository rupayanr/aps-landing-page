import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { theme } = useTheme()

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-body transition-colors duration-400"
    >
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
