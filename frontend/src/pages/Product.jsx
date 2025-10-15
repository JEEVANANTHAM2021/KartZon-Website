import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const[productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }
useEffect(()=>{
  fetchProductData();
},[productId])

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
      {/* Product images */}
      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex ::-webkit-scrollbar sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          {
            productData.image.map((item,index)=>(
              <img onClick={()=>setImage(item)}  src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
            ))
          }
        </div>
        <div className='w-full sm:w-[80%]'>
          <img className='w-full h-auto' src={image} alt='' />
        </div>
      </div>

      {/* ---------------Product Info--------- */}
      <div className='flex-1'>
        <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
        <div className='flex items-center gap-1 mt-2'>
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_dull_icon} alt="" className="w-3 5" />
          <p className='pl-2'>(122)</p>
      </div>
        <p className='mt-2 text-3xl font-medium'>{currency}{productData.price}</p>
        <p className='mt-2 text-gray-500 md:w-4/5'>{productData.description}</p>
        <div className='flex flex-col gap-4 my-8'>
          <p>Select Sizes</p>
          <div className='flex gap-2'>
            {productData.sizes.map((item,index)=>(
              <button onClick={()=>setSize(item)} className={`border bg-white py-3 px-5 ${item === size ? 'border-orange-500':''}`} key={index}>{item}</button>
            ))}
          </div>
      </div>
      <button onClick={()=> addToCart(productData._id,size)} className='bg-black text-white px-6 py-5 text-sm active:bg-gray-700'>ADD TO CART</button>
      <div className='flex flex-col gap-2 text-sm text-gray-700 mt-8'>
        <p>100% quality products.</p>
        <p>Easy return & Exchange policy are available within 7days only.</p>
        <p>Cash on Delivery available in this Product.</p>
      </div>
      </div>
    </div>
    {/* ----------- Description & Review Section---------- */}
    <div className='mt-20'>
      <div className='flex'>
        <b className='text-sm border px-5 py-6'>Description</b>
        <p className='text-sm border px-5 py-6'>Review(100)</p>
      </div>
      <div className='flex flex-col border gap-4 text-sm py-6 px-6 text-gray-600'>
        <p>Clearly state what the garment is (e.g., a flowy maxi dress) and its purpose or occasion it's suited for all.
          Detail unique aspects like decorative elements (e.g., hand-stitched embroidery), fabric type (e.g., soft organic cotton), and the fit or silhouette (e.g., a relaxed, comfortable fit). 
          Employ descriptive adjectives that evoke feelings and experiences (e.g., "luxurious," "effortless," "vibrant") to connect with the customer's desires.  </p>
        <p>An e-commerce website is a virtual shop offering the convenience of browsing and purchasing fashion items online, 
          mirroring a physical store's functions but accessible from anywhere, anytime. 
          An intuitive interface, robust search functionality, and mobile-first design ensure customers can easily find products, leading to a better overall shopping journey</p>
      </div>
    </div>
    {/* ------------ Display Related Products ------------ */}

    <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
  
  </div>
  ): <div className='opacity-0'></div>
}

export default Product