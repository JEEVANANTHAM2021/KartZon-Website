import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'}  text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:w-[450px]' src={assets.about_img} alt=''/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>
                At <b className='text-teal-500'>KartZon,</b> fashion is more than just clothing — it’s a way to express who you are. 
                We bring you the latest trends and timeless styles that speak confidence, comfort, and class. 
                Our collections are carefully curated to offer something special for everyone, from casual wear to statement pieces.
                We believe in making fashion accessible, stylish, and affordable without compromising on quality. 
                With <b className='text-teal-500'>KartZon</b>, you don’t just wear clothes — you wear your story.</p>
              <p>At <b className='text-teal-500'>KartZon</b>, fashion isn’t just about what you wear — it’s about making a statement.
                 We bring you bold styles, timeless trends, and everyday essentials that speak your vibe. 
                 From streetwear to chic classics, every collection is designed to make you look and feel confident. 
                 We’re all about fresh looks, premium quality, and effortless style.
                 With <b className='text-teal-500'>KartZon</b>, dressing up isn’t just easy — it’s iconic.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at <b className='text-teal-500'> KartZon </b> is to redefine your shopping experience by combining trendsetting fashion with top-notch service.
                We aim to provide customers with premium-quality clothing at fair prices. We are dedicated to building a trusted fashion platform where style meets convenience. By staying ahead of fashion trends, we make sure you always look your best. 
                Every step we take is focused on empowering you to dress confidently and effortlessly.</p>
          </div>
        </div>

        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

    <div className='flex flex-col md:flex-row text-sm mb-20 bg-gradient-to-r from-gray-300 via-white to-gray-300'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b className='text-2xl text-amber-900'>Quality Assurance:</b>
          <p className='text-gray-600'>We are committed to delivering only the best to our customers. 
            Every product undergoes strict quality checks to ensure durability, comfort, and style. 
            From fabric selection to final stitching, we maintain high standards at every stage. 
            Our team partners with trusted manufacturers to offer premium-quality apparel.
            When you shop with <b className='text-teal-500'>KartZon</b>, quality is guaranteed in every piece.</p>
        </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b className='text-2xl text-amber-900'>Convenience:</b>
              <p className='text-gray-600'>We believe fashion should be simple, smooth, and stress-free. 
                Our user-friendly website and store make it easy to browse, select, and shop your favorite styles. 
                Fast delivery and secure payment options ensure a hassle-free experience. We constantly work to make shopping quick and effortless for every customer.
                At <b className='text-teal-500'>KartZon</b>, convenience is not just a feature — it’s a promise.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b className='text-2xl text-amber-900'>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At <b className='text-teal-500'>KartZon</b> , every customer matters to us. 
            Our support team is always ready to assist you with care and professionalism. We listen, respond, and resolve every query to ensure your satisfaction. Whether online or in-store, we strive to make your experience pleasant and personal. 
            Building trust and long-lasting relationships with our customers is at the heart of what we do.</p>
        </div>
    </div>

    <NewsLetterBox />

    </div>
  )
}

export default About