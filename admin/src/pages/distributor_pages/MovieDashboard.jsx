import React, { useContext, useEffect } from 'react'
import { MovieContext } from '../../context/MovieContext'

function MovieDashboard() {

  const { dashData, getDashData, dToken } = useContext(MovieContext)

  useEffect(() => {
    if (dToken) {
      getDashData()
    }
  }, [dToken])

  console.log("Dashboard Data", dashData)
  return dashData && (
    <div className='mt-5 ml-5'>
      <div className='flex gap-1 sm:text-2xl text-lg mb-3 flex-wrap'>
        <div className='bg-gray-600 text-center text-white font-semibold p-3 min-w-50 rounded-sm'>
          Earning : {dashData.earning}
        </div>
        <div className='bg-gray-600 text-center text-white font-semibold p-3 min-w-50 rounded-sm'>
          Bookings : {dashData.totalBooking}
        </div>
        <div className='bg-gray-600 text-center text-white font-semibold p-3 min-w-50 rounded-sm'>
        Viewrs : {dashData.viewers}
        </div>
      </div>
      <p className='text-gray-700 text-2xl mb-3 font-bold'>Latest Bookings</p>
      <div className='flex gap-5 flex-wrap'>
        {dashData.latestBookings.map((item, index) => (
          <div key={index} className='bg-white p-2 sm:text-xl text-md min-w-70 w-[25vw] drop-shadow-lg'>
            <p className='font-semibold sm:text-2xl text-lg text-primary'>{item.customerData.name}</p>
            <div className='flex gap-1'>
              <p>{item.slotDate}</p>
              |
              <p>{item.slotTime}</p>
            </div>
            <p> Payment : {item.payment === true ? "Done" : "Remaining"}  </p>

          </div>
        ))
        }
      </div>

    </div>
  )
}

export default MovieDashboard