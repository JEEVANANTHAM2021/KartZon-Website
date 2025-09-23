import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-12 pl-2 text-sm bg-gradient-to-t from-white to-gray-400'>
        <div>
          <img className='w-32 mb-3' src={assets.logo} alt='' />
          <p className='w-full md:w-2/4 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt,
             eos nostrum velit vero vel nihil debitis commodi id provident quae minima, laudantium voluptate quis! Culpa!</p>
        </div>

        <div className='w-1/2 sm:w-2/3'>
          <p className='text-xl font-medium mb-5 mt-3'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 mt-3'>CONTACT US</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91 74182-70442</li>
                <li>kartzon2025@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
          <hr />
          <p className='py-6 text-sm text-center'>Copyrights @2025 kartzon.com & All rights are Reserved </p>
      </div>

    </div>
  )
}

export default Footer;