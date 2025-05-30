import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:200}} transition={{duration:1.5}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>WHY<span className='underline underline-offset-4 decoration-1 under font-light'>CHOOSE US</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Discover Authentic Real Estate Solutions at ASAD SMART CITY</p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>

            <img src={assets.brand_img} alt=""  className='w-full sm:w-1/2 max-w-lg'/>

            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>

                <div className='grid grid-cols-2 gap-6 md:gap10 w-full 2xl:pr-28'>

                    <div>
                        <p className='text-4xl font-medium text-gray-800'>5+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-medium text-gray-800'>15+</p>
                        <p>Ongoing Projects</p>
                    </div>

                </div>

                <p className='my-10 max-w-lg'>
                At Asad Smart City, we take pride in offering a comprehensive real estate project focused on delivering premium plots. Our commitment ensures that all essential facilities are readily available.

                <br /><br />Founded with a vision, serving families.

                <br /><br /><span className='font-bold'>Have questions?</span> Call us at +92 333 2521 016 — we’re happy to help!

                </p>

                

                <motion.a whileHover={{scale:1.1}} href='#Contact' className='bg-blue-600 text-white px-8 py-2 rounded cursor-pointer'>Get Your Free Quote Today !</motion.a>

            </div>
        

        </div>
      
    </motion.div>
  )
}

export default About
