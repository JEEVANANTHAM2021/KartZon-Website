import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'


const Navbar = () => {
  return (
    <div className='flex items-center px-[4%] py-4 justify-between'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
       <p className='prata-regular text-3xl sm:text-1xl'><Title text1={'Admin'} text2={'Panel'} /></p>
        <button className='bg-teal-500 text-black px-5 py-2 sm:px-7 py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar