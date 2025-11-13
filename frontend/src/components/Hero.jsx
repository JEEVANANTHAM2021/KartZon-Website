import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-2'>
      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#543622] bg-[#ECE7E2] text-center bg-no-repeat shadow-lg w-200 rounded-lg px-6'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#543622]'></p>
            <p className='font-medium text-sm md:text-base'>OUR CHART-BUSTER</p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Trendy Arrivals</h1>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-sm md:text-base'>GRAP NOW</p>
            <p className='w-8 md:w-11 h-[1px] bg-[#543622]'></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <div className='relative w-full max-w-xs mx-auto'>
        <div className='border border-gray-200 bg-[#ECE7E2] rounded-2xl shadow-lg h-100'>
          <img className='absolute -top-0 left-1/2 -translate-x-1/2
           md:w-md h-full object-cover rounded-xl shadow-lg hover:scale-105 md:hover:scale-60 transition duration-300 ease-in-out'
            src={assets.hero_img} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Hero