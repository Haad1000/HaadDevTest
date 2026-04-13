import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen text-white"
    style={{
      background: "linear-gradient(90deg, #041525 0%, #0c2d4a 50%, #041525 100%)",
    }}
 >
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </div>
  )
}

export default App