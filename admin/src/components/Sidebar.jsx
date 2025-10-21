import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import Title from './Title'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-amber-900 border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pb-6 pl-[20%] text-[15px]'>
            <NavLink className='flex items-center gap-3 border border-yellow-500 border-r-0 px-3 py-4 rounded-lg' to='/add'>
                <img className='w-5 h-5' src={assets.add_icon} alt='' />
                <p className='hidden sm:block'><Title text1={'Add'} text2={'Items'}/></p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-yellow-500 border-r-0 px-3 py-4 rounded-lg' to='/list'>
                <img className='w-5 h-5' src={assets.order_icon} alt='' />
                <p className='hidden sm:block'><Title text1={'List'} text2={'Items'}/></p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-yellow-500 border-r-0 px-3 py-4 rounded-lg' to='/order'>
                <img className='w-5 h-5' src={assets.order_icon} alt='' />
                <p className='hidden sm:block'><Title text1={'Orders'} /></p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar