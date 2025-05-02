import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer' >

        <div className='container mx-auto flex flex-col md:flex-row justify-baseline items-start'>

        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src={assets.logo_dark} alt="" />
            <p className='mt-4 text-gray-400'> 
            Asad Smart City delivers outstanding property choices, state-of-the-art features, and a dynamic, engaging neighborhood for residents and investors alike.
            </p>
        </div>

        <div className='w-full md:w-1/5 mb-8 md:mb-0 mx-auto'>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400 '>
                <a className="hover:text-white" href="#Header">Home</a>
                <a className="hover:text-white" href="#About">About</a>
                <a className="hover:text-white" href="#Services">Services</a>
                <a className="hover:text-white" href="#Testimonials">Testimonials</a>
                <a className="hover:text-white" href="#Contact">Contact</a>
            </ul>
        </div>

        <div>

        <h3 className='text-white text-lg font-bold mb-4'>Get in Touch</h3>

        <p className='mt-5 text-gray-400 font-bold'>Phone: <span className='text-gray-400 font-light'>+92 333 2521 016</span></p>

        <p className='mt-5 text-gray-400 font-bold'>Email: <span className='text-gray-400 font-light'>sales@asadsmart.city</span></p>

        <p className='mt-5 text-gray-400 font-bold'>Address: <span className='text-gray-400 font-light'>Thar coal road, near Shaheen rice mill Badin</span></p>

        </div>

        </div>

        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
        Copyright © 2025 Asad Smart City. All Rights Reserved.
        </div>
      
    </div>
  )
}

export default Footer 
