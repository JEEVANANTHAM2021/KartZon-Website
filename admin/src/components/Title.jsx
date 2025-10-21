import React from 'react'

const Title = ({text1, text2}) => {

  return (
    <div className='inline-flex gap-2 items-center'>
        <p className='text-yellow-600'>{text1} <span className='text-amber-900 fond-medium'>{text2}</span></p>
    </div>
  )
}

export default Title;