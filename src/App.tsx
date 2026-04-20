import { useState, useEffect } from 'react'
import { useTheme } from './hooks/useTheme'
import SplashScreen from './components/common/SplashScreen'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Feedbabks from './components/sections/Feedbabks'
import Contact from './components/sections/Contact'
import Calendar from './components/sections/Calendar'
import CrossGrid from './components/common/CrossGrid'
import MarqueeText from './components/common/MarqueeText'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <SplashScreen visible={showSplash} />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Feedbabks />
        <Calendar />
        <Contact />
      </main>
      <MarqueeText />
      <CrossGrid />
      <Footer />
    </>
  )
}

export default App
