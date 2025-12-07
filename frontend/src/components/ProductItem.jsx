import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link  } from 'react-router-dom';
import { assets } from '../assets/assets';



const ProductItem = ({id,image,name,price,}) => {
    const {currency} = useContext(ShopContext); 
  return (
    <Link className='max-w-sm text-gray-800 cursor-pointer border border-gray-200 bg-[#B9EADD] shadow-2xl sm:hover:shadow-2xl md:hover:shadow-2xl md:shadow-sm rounded-2xl transition-all duration-300' to={`/product/${id}`}>
        <div className='overflow-hidden rounded-xl'>
            <img className='object-cover hover:scale-110 transition ease-in-out' src={image[0]} alt='' />
        </div>
        <div className='flex flex-col justify-between items-center gap-2 p-2'>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
        <button to={`/product/${id}`} className='px-2 py-2 rounded bg-teal-500 transition'><img className='w-5' src={assets.bag_icon} alt="" /></button>
        </div>
    </Link>
  )
}

export default ProductItem;