import React from 'react'

const Card = () => {
  return (
    <div className='w-[65%] xl:w-[75%] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Upto 60% Off</p>
                <p className='px-2'>On Matchdays</p>
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Upto 40% Off</p>
                <p className='px-2'>On Weekends</p>
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1634818462211-aa45f43dafdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-2 pt-4'>Upto 20% Off</p>
                <p className='px-2'>Party Mood</p>
                <button className='border border-white bg-white text-black mx-2 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
        </div>
    </div>
  )
}

export default Card