import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { motion } from 'framer-motion';

const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(()=> {

    if(mobileMenu){
      document.body.style.overflow = 'hidden'
    }
    else{
      document.body.style.overflow = 'auto'
    }

    return()=> {
      document.body.style.overflow = 'auto'
    }


  },[mobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10' >

      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>

        {/* <img className='' src={assets.logo} alt="logo" /> */}

        <a  href='#Header' className='text-xl text-white font-extrabold cursor-pointer'>ASAD SMART CITY</a> 

        

        <ul className='hidden lg:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Services" className='cursor-pointer hover:text-gray-400'>Services</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
          <a href="#Contact" className='cursor-pointer hover:text-gray-400'>Contact</a>
        </ul>

        <motion.a 
        whileHover={{scale: 1.1}}
        href='#Services' className='hidden lg:block bg-white px-8 py-2 md:px-8 md:py-2 rounded-full cursor-pointer'>Explore Plots</motion.a>

        <img src={assets.menu_icon} className='lg:hidden w-7 cursor-pointer' onClick={()=> setMobileMenu(true)} alt="" />

      </div>

      {/* Mobile menu */}

      <div className={`md:hidden ${mobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>

       <div className='flex justify-end p-6 cursor-pointer'>
        <img src={assets.cross_icon} className='w-6' onClick={()=> setMobileMenu(false)} alt="" />
       </div>

      <ul className='flex flex-col items-center gap-2 mt-5 px-2 text-lg font-medium'>
        <a onClick={()=> setMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
        <a onClick={()=> setMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
        <a onClick={()=> setMobileMenu(false)} href="#Services" className='px-4 py-2 rounded-full inline-block'>Services</a>
        <a onClick={()=> setMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        <a onClick={()=> setMobileMenu(false)} href="#Contact" className='px-4 py-2 rounded-full inline-block'>Contact</a>
      </ul>

      </div>
      
    </div>
  )
}

export default Navbar 
