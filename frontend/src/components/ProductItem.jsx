import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link  } from 'react-router-dom';

const ProductItem = ({id,image,name,price,}) => {
    const {currency} = useContext(ShopContext);
  return (
    <Link className='max-w-sm text-gray-800 cursor-pointer border border-gray-200 bg-[#ECE7E2] shadow-sm hover:shadow-md rounded-2xl transition-all duration-300' to={`/product/${id}`}>
        <div className='overflow-hidden rounded-xl'>
            <img className='object-cover hover:scale-110 transition ease-in-out' src={image[0]} alt='' />
        </div>
        <div className='flex flex-col justify-between items-center gap-2 bg- p-2'>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
        <button className='px-2 py-2 rounded-2xl bg-teal-500 text-black text-sm hover:bg-white transition'>Add to cart</button>
        </div>
    </Link>
  )
}

export default ProductItem;