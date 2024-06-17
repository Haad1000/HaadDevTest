import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './index.css';

const App = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </div>
  )
}

export default App