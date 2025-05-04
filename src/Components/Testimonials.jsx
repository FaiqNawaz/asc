import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:100}} transition={{duration:1.5}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>

      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>They Chose Us. <span className='underline underline-offset-4 decoration-1 under font-light'>Hear Why</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-12 mx-auto'>Real Experiences from Our Community</p>


    
        <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((testimonials, index)=>(

                <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'> 

                <img className='w-20 h-20 rounded-full mb-4 mx-auto' src={testimonials.image} alt={testimonials.alt} />

                <h2 className='text-xl text-gray-700 font-medium '>{testimonials.name}</h2>

                <div className='flex justify-center gap-1 text-red-500 mb-4'> 
                    {Array.from({length: testimonials.rating}, (item, index)=>(
                        <img className='mt-2' key={index} src={assets.star_icon} alt=""/>
                    ))}
                </div>
                    <p className='text-gray-600'>{testimonials.text}</p>
                </div>

            ))}
        </div>


    </motion.div>


  )
}

export default Testimonials
