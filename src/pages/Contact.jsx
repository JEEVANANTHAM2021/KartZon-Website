import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

        <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
          <img className='w-fit md:max-w-[480px]' src={assets.contact_img} alt=''/>
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>5th street, VJ Complex, Gandhi Prk road, Coimbatore - 641 607 </p>
            <p className='text-gray-500'>Ph: 74182-70442 <br /> Email: kartzon2025@gmail.com</p>
            <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
            <p className='text-gray-500'>Learn more about teams and job Openings.</p>
            <button className='border border-black px-8 py-4 text-sm hover:text-white hover:bg-black transition-all duration-500'>Explore More</button>
          </div>
        </div>

        <NewsLetterBox />

    </div>
  )
}

export default Contact