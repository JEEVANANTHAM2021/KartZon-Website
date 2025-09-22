import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
    
    return (
    <div className='text-center bg-gradient-to-b from-white to-gray-300'>
        <p className='text-2xl font-medium text-gray-700'>Subscribe now & get 20%oFF</p>
        <p className='text-gray-700 mt-3'>If you want to be a Subscriber? Then Enter the email to grab the off%</p>
        <form typeof={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required/>
            <button type='submit' className='bg-red-500 text-black text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox