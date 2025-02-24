import React, { useContext } from 'react'
import { AppContext } from "../context/AppContext"

function MyBookings() {

  const { MoviesData, currency } = useContext(AppContext)

  return (
    <div>
      <p className='sm:text-3xl text-2xl text-center font-semibold text-gray-600 mb-5'>My Bookings</p>
      <div className='flex flex-col gap-3'>

        {MoviesData.slice(0, 3).map((item, index) => (
          <div key={index}>

            <div className='flex lg:flex-row flex-col justify-between items-start lg:items-end p-3 lg:w-[80%] w-[100%] mx-auto border border-gray-200 bg-gray-100 rounded-md'>

              <div className='flex gap-3'>
                <img src={item.img} alt="" className='lg:w-50 sm:w-60 w-40' />

                <div className='mt-2'>
                  <p className='sm:text-4xl text-3xl font-semibold'>{item.name}</p>
                  <p className='sm:text-2xl text-xl'>{item.part}</p>
                  <p className='sm:text-xl text-lg text-primary font-semibold'>{item.genre}</p>
                  <p className='text-lg'>{item.duration}</p>
                </div>

              </div>

              <div className='flex lg:flex-col flex-wrap gap-2 lg:mt-0 mt-3'>

                <button className='sm:w-60 w-40 sm:p-2 p-1 bg-status text-white text-lg font-semibold rounded-sm hover:bg-primary transition-all duration-200 cursor-pointer'>
                  <div className='flex items-center justify-center'>
                    <p>{currency}</p>
                    <p>{item.price}</p>
                  </div>
                </button>
                <button className='sm:w-60 w-40 sm:p-2 p-1 bg-gray-400 text-lg text-white font-semibold rounded-sm hover:bg-gray-800 transition-all duration-200 cursor-pointer'>Cancle slot</button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default MyBookings