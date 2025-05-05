import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' 
    style={{backgroundImage: "url('/header_img.png')"} } id='Header'>

      <Navbar/>

      <motion.div initial={{opacity:0, y:100}} transition={{duration:1.5}} whileInView={{opacity:1, y:0}} viewport={{once:false}}
       className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl  inline-block max-w-3xl font-semibold pt-30'>
        Discover Modern Living at Asad Smart City
        </h2>

      <motion.div whileHover={{scale:1.1}} className='space-x-6 mt-16'>
        
        <a href="#Services" className='bg-blue-500 px-8 py-3 rounded hover:scale-110 duration-300'>Explore Plots</a>
        
      </motion.div>

      </motion.div>
      
    </div>
  )
}

export default Hero
