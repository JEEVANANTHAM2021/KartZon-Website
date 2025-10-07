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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, doloremque voluptate possimus, rem accusantium at qui nemo amet sint ex fugiat sequi dolorum? Totam doloribus doloremque inventore earum eius dignissimos!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugiat nostrum sapiente cumque autem dolorem, illo sed impedit harum commodi voluptate modi. Harum, maxime laborum. Asperiores fugit nemo nam iusto?</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, officiis neque delectus ab voluptates perferendis hic eveniet iure aspernatur reiciendis voluptas cumque necessitatibus distinctio. Aperiam reprehenderit quo vel quae distinctio!</p>
          </div>
        </div>

        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

    <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat fugit assumenda, mollitia, quod at cupiditate ab enim tempora veniam obcaecati laborum quae rerum quam inventore, itaque nostrum asperiores in quidem?</p>
        </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quae molestiae ut, commodi sapiente possimus ab ipsam omnis minus voluptatum magnam maxime reprehenderit, quod fugit asperiores ipsum at quasi error.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat fugit assumenda, mollitia, quod at cupiditate ab enim tempora veniam obcaecati laborum quae rerum quam inventore, itaque nostrum asperiores in quidem?</p>
        </div>
    </div>

    <NewsLetterBox />

    </div>
  )
}

export default About