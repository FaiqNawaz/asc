import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

export default App
