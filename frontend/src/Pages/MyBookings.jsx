import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { AppContext } from "../context/AppContext"
import { toast } from 'react-toastify';
import axios from 'axios'

function MyBookings() {

  const navigate = useNavigate();

  const { backendUrl, token, currency } = useContext(AppContext)

  const [bookings, setBookings] = useState([]);

  const getCustomerBookings = async (req, res) => {
    try {

      const { data } = await axios.get(backendUrl + '/api/customer/bookings', { headers: { token } })

      if (data.success) {
        setBookings(data.bookings.reverse())
        // console.log(data.bookings)
      }
      else {
        toast.error("Failed to load bookings")
      }

    } catch (error) {
      console.log(error)
    }
  }

  const cancelUserBooking = async (bookingID) => {
    try {

      const { data } = await axios.post(backendUrl + '/api/customer/cancel-booking', { bookingID }, { headers: { token } })
      console.log(bookingID)
      if (data.success) {
        toast.success("Booking cancelled")
        return getCustomerBookings()
      } else {
        toast.error(data.message)
      }


    } catch (error) {
      console.log(error)
    }
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      name: "Booking Payment",
      description: "Booking Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (res) => {
        console.log(res)
        try {
          const { data } = await axios.post(backendUrl + '/api/customer/varify-razorpay', res, { headers: { token } })
          if (data.success) {
            getCustomerBookings()
            navigate('/my-bookings')
          }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    }

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  const bookingPayment = async (bookingID) => {

    try {
      const { data } = await axios.post(backendUrl + '/api/customer/payment-razorpay', { bookingID }, { headers: { token } })

      console.log("Data", data)

      if (data.success) {
        console.log("Order:", data.order)
        initPay(data.order)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (token) {
      getCustomerBookings()
    }
  }, [token])

  return (
    <div>
      <p className='sm:text-3xl text-2xl text-center font-semibold text-gray-600 mb-5'>My Bookings</p>
      <div className='flex flex-col gap-3'>

        {bookings.map((item, index) => (
          <div key={index}>

            <div className='flex lg:flex-row flex-col justify-between items-start lg:items-end p-3 lg:w-[80%] w-[100%] mx-auto border border-gray-200 bg-gray-100 rounded-md'>

              <div className='flex gap-3'>
                <img src={item.movieData.img} alt="" className='lg:w-50 sm:w-60 w-40' />

                <div className='mt-2'>
                  <p className='sm:text-4xl text-3xl font-semibold'>{item.movieData.name}</p>
                  <p className='sm:text-2xl text-xl'>{item.movieData.part}</p>
                  <p className='sm:text-xl text-lg text-primary font-semibold'>{item.movieData.genre}</p>
                  <p className='text-lg'>{item.movieData.duration}</p>
                  <p className='text-sm mt-5'>{item.slotDate}</p>
                  <p className='text-sm'>{item.slotTime}</p>
                </div>

              </div>

              <div className='flex lg:flex-col flex-wrap gap-2 lg:mt-0 mt-3'>

                {
                  item.payment
                    ? <button className='sm:w-60 w-40 sm:p-2 p-1 bg-gray-800 text-white text-lg font-semibold rounded-sm'>Paid</button>
                    : <button onClick={() => bookingPayment(item._id)} className='sm:w-60 w-40 sm:p-2 p-1 bg-status text-white text-lg font-semibold rounded-sm hover:bg-primary transition-all duration-200 cursor-pointer'>
                      <div className='flex items-center justify-center'>
                        <p>{currency}</p>
                        <p>{item.movieData.price}</p>
                      </div>
                    </button>

                }
                <button onClick={() => cancelUserBooking(item._id)} className='sm:w-60 w-40 sm:p-2 p-1 bg-gray-400 text-lg text-white font-semibold rounded-sm hover:bg-gray-800 transition-all duration-200 cursor-pointer'>Cancle slot</button>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default MyBookings