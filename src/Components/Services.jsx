import React from 'react'
import { assets } from '../assets/assets'

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>QUALITY<span className='underline underline-offset-4 decoration-1 under font-light'>SOLUTIONS</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Explore Our Premium Real Estate Services</p>
        

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20 mr-35'>

            <img src={assets.project_img_1} alt=""  className='w-full sm:w-1/2 max-w-lg mt-10 rounded-xl h-105'/>

            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600 ml-20'>
                <p className='w-full text-4xl font-medium text-gray-800'>Plot Sales</p>

                <div className='mt-15 w-full ml-4'>
                    <p>➤ Residential Plot Opportunities</p>
                </div>
                <div className='mt-15 w-full ml-4'>
                    <p>➤ Commercial Plot Availability</p>
                </div>
                <div className='mt-15 w-full ml-4'>
                    <p>➤ Investment Plot Options</p>
                </div>
                <div className='mt-15 w-full ml-4'>
                    <p>➤ Custom Plot Sizes Available</p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Services
