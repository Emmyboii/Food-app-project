import React from 'react'
import { categories } from '../Data/data'

const Category = () => {
    // console.log(categories)
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='font-bold text-4xl text-orange-600 text-center'>Top Rated Menu</h1>
        {/* Category */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
            {categories.map((item, index)=> (
                <div key={index} className='bg-gray-100 p-4 rounded-lg flex justify-between items-center'>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img className='w-20' src={item.image} alt={item.name} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category