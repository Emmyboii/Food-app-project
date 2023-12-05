import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='relative rounded-xl'>
            {/* Overlay */}
            <div className='absolute bg-black/50 w-full h-full rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black absolute mx-4 bottom-4'>Order Now</button>
            </div>
            <img 
             className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFzdHxlbnwwfdB8MHx8&auto=format&fit=crop&w=800&q=60" 
             alt="/" 
            />
        </div>
              {/* Card */}
              <div className='relative rounded-xl'>
            {/* Overlay */}
            <div className='absolute bg-black/50 w-full h-full rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black absolute mx-4 bottom-4'>Order Now</button>
            </div>
            <img 
             className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFzdHxlbnwwfdB8MHx8&auto=format&fit=crop&w=800&q=60" 
             alt="/" 
            />
        </div>
              {/* Card */}
              <div className='relative rounded-xl'>
            {/* Overlay */}
            <div className='absolute bg-black/50 w-full h-full rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>we Deliver Desserts Too</p>
                <p className='px-2'>Tasty Treats</p>
                <button className='border-white bg-white text-black absolute mx-4 bottom-4'>Order Now</button>
            </div>
            <img 
             className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
             src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFzdHxlbnwwfdB8MHx8&auto=format&fit=crop&w=800&q=60" 
             alt="/" 
            />
        </div>
    </div>
  )
}

export default HeadlineCards