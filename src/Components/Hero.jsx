import React from 'react'
import Burger from '../Images/Burger1.jpg'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[550px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full max-h-[550px] text-white bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Foods</span> Delivered</h1>
            </div>
            <img className='max-h-[550px] w-full object-cover' src={Burger} alt="/" />
        </div>
    </div>
  )
}

export default Hero