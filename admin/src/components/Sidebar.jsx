import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-amber-900 border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pb-6 pl-[20%] text-[15px] '>
            <NavLink className='flex items-center gap-3 border border-yellow-500 border-r-0 px-3 py-4 rounded-lg bg-gradient-to-r from-gray-400 via-white to-gray-400' to='/add'>
                <img className='w-5 h-5' src={assets.add_icon} alt='' />
                <p className='hidden sm:block'>Add Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-yellow-500 border-r-0 px-3 py-4 rounded-lg bg-gradient-to-r from-gray-400 via-white to-gray-400' to='/list'>
                <img className='w-5 h-5' src={assets.order_icon} alt='' />
                <p className='hidden sm:block'>List Items</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-yellow-500 border-r-0 px-3 py-4 rounded-lg bg-gradient-to-r from-gray-400 via-white to-gray-400' to='/order'>
                <img className='w-5 h-5' src={assets.order_icon} alt='' />
                <p className='hidden sm:block'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar