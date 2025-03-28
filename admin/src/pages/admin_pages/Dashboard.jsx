import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

function Dashboard() {


  const { dashData, aToken, getDashData, } = useContext(AdminContext)


  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])
  return dashData && (
    <div className='mt-5 ml-5'>

      <div className='flex gap-1 sm:text-2xl text-lg mb-3 flex-wrap'>
        <div className='bg-gray-600 text-center text-white font-semibold p-3 min-w-50 rounded-sm'>
          Movies : {dashData.movies}
        </div>
        <div className='bg-gray-600 text-center text-white font-semibold p-3 min-w-50 rounded-sm'>
          Bookings : {dashData.bookings}
        </div>
      </div>

      <p className='sm:text-3xl text-2xl font-bold text-primary mb-3'>Latest Bookings</p>
      <div className='flex gap-5 flex-wrap'>
        {dashData.latestBooking.map((item, index) => (
          <div key={index} className='bg-white p-2 sm:text-xl text-md min-w-70 w-[25vw] drop-shadow-lg'>
            <p className='font-semibold sm:text-2xl text-lg text-primary'>{item.movieData.name}</p>
            <p>{item.customerData.name}</p>
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

export default Dashboard