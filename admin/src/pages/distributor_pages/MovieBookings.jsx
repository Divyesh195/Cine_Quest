import React, { useContext, useEffect } from 'react'
import { MovieContext } from '../../context/MovieContext'
import { IoIosCall } from "react-icons/io";
import { IoCloudDoneOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { MdCancel } from "react-icons/md";

function MovieBookings() {

  const { dToken, bookings, getBookingsData, cancelBooking } = useContext(MovieContext)

  // const movieName = bookings[0].movieData.name ;

  useEffect(() => {
    if (dToken) {
      getBookingsData()
    }
  }, [dToken])

  return bookings && (
    <div className='mt-5 ml-5'>
      {/* {bookings && <p className='text-3xl mb-2'>{bookings[0].movieData.name} | All Bookings</p>} */}
      {/* <p>{movieName}</p> */}
      <div className='flex lg:flex-col flex-wrap gap-3'>
        {bookings.map((item, index) => (
          <div key={index} className='flex lg:flex-row flex-col gap-3 justify-between lg:items-center bg-gray-800 text-white p-3 text-xl lg:w-[80vw] w-80 transition-all duration-300 ease-in-out'>
            <div className='flex gap-1 w-50'>
              <p>{index + 1} .</p>
              <p>{item.customerData.name}</p>
            </div>

            <div className='flex items-center gap-1'>
              <p><IoIosCall /></p>
              <p>+91 {item.customerData.mobile}</p>
            </div>

            <div className='flex'>
              <p>{item.slotDate}</p>
              |
              <p>{item.slotTime}</p>
            </div>
            <p className='flex items-center gap-1'>Payment{item.payment === true ? <IoCloudDoneOutline />:<RxCrossCircled />
            }</p>

            <p className='cursor-pointer gap-1 flex items-center bg-white text-gray-800 hover:bg-gray-200 p-1 rounded-sm w-fit' onClick={()=>cancelBooking(item._id)}>Cancel<MdCancel /></p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieBookings