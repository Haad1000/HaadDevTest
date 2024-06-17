import React from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import './index.css';

const App = () => {
  return (
    <div className='bg-zinc-800'>
      <Hero />
      <Experience />
      <Projects />
    </div>
  )
}

export default App