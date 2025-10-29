import React from 'react'

const AnimatedBackground = () => {
    return (
        <div className='fixed inset-0 overflow-hidden perspective-1000 -z-10 bg-black'>
            <div className='cube-container animate-rotate'>
                {[...Array(25)].map((_, i) => (
                    <div key={i} className='cube'></div>
                ))}
            </div>
         </div>
    )
}

export default AnimatedBackground