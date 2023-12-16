import { useState } from 'react'
import './App.css'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Introduction/>
      <About/>
      <Projects></Projects>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App
