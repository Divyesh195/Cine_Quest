import React, { useContext, useEffect } from 'react'
import AdminContextProvider, { AdminContext } from '../../context/AdminContext'
import { MdOutlineCancel } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import axios from 'axios'
import {toast} from 'react-toastify'

function AllBookings() {

  const { aToken, bookings, getAllBookings, currency,backendURL } = useContext(AdminContext)

  const cancelBooking = async(bookingID) =>{
    try {

      const {data} = await axios.post(backendURL + '/api/admin/cancel-booking',  {bookingID}, {headers : {aToken}},)

      if(data.success){
        toast.success("Appointment cancelled")
        getAllBookings()
        console.log(data.message)
      }else{
        console.log("Data",data)
        console.log("Failed")
      }
      
    } catch (error) {
      console.log(error)
      console.log("Cannot cancel booking.")
    }
  }

  useEffect(() => {
    if (aToken) {
      getAllBookings()
    }
  }, [aToken])
  return (
    <div className='m-5'>
      <div className='flex flex-col gap-2'>
        {bookings.map((item, index) => (
          <div className='flex items-center gap-1 bg-gray-100 text-xl w-[70vw] justify-between p-3 font-semibold hover:bg-primary hover:text-white transition-all duration-200 rounded-md' key={index}>
            <p>{index + 1}.</p>
            <p className='w-[15vw]'>{item.customerData.name}</p>
            <p className='w-[15vw]'>{item.movieData.name}</p>
            <div className='text-sm'>
              <p>{item.slotDate}</p>
              <p>{item.slotTime}</p>
            </div>
            <div className='flex items-center w-20'>
              <p>{currency}</p>
              <p >{item.movieData.price}</p>
              <p className='text-sm text-primary ml-1'>{item.payment === true ? <RiVerifiedBadgeFill /> : " "}</p>
            </div>
            <p onClick={()=>cancelBooking(item._id)} className='cursor-pointer'><MdOutlineCancel /></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllBookings