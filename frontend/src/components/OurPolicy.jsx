import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-round gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div>
            <img src={assets.exchange_img} className='w-1/2 m-auto mb-5 bg-gradient-to-r from-white via-gray-400 to-white' alt='' />
            <p className='font-semifold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle from exchange Policy</p>
        </div>
         <div>
            <img src={assets.quality_img} className='w-1/2 m-auto mb-5 bg-gradient-to-r from-white via-gray-400 to-white' alt='' />
            <p className='font-semifold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days Return Policy</p>
        </div>
         <div>
            <img src={assets.support_img} className='w-1/2 m-auto mb-5 bg-gradient-to-r from-white via-gray-400 to-white' alt='' />
            <p className='font-semifold'>Best customer support</p>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy