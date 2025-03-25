import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { AppContext } from '../context/AppContext';
import RelatedMovies from '../components/RelatedMovies';
import { toast } from 'react-toastify'
import axios from 'axios'

function Bookings() {

  const { movieID } = useParams();
  const { MoviesData, currency, backendUrl, token, getMoviesData } = useContext(AppContext);

  const navigate = useNavigate()

  const daysofWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [mData, setMData] = useState(null);

  const [movSlot, setMovSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchMovieData = async () => {
    const mData = MoviesData.find(x => x._id === movieID);
    setMData(mData);
    // console.log(mData);
  }

  const getAvailableSlotData = async () => {
    setMovSlot([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      //Getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endtime = new Date()
      endtime.setDate(today.getDate() + i)
      endtime.setHours(22, 0, 0, 0)

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes > 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = [];

      // console.log("Datatype of timeslot", typeof(timeSlots))

      while (currentDate < endtime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })

        //Increament time by 3 hours
        currentDate.setHours(currentDate.getHours() + 3)
      }

      setMovSlot(prev => ([...prev, timeSlots]))

    }
  }

  const bookMyMovie = async ()=>{
    try {
      if(!token){
        toast.warn("Login required")
        return navigate('/login')
      }
  
      const date = movSlot[slotIndex][0].dateTime
  
      let day = date.getDate()
  
      let month = date.getMonth() + 1
  
      let year = date.getFullYear()
  
      const slotDate = day + "-" + month + "-" + year
  
      const {data} = await axios.post(backendUrl + '/api/customer/book-movie',{movieID , slotDate, slotTime}, {headers:{token}})
  
      if(data.success){
        toast.success(data.message);
        getMoviesData()
        navigate('/my-bookings')
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      return toast.error("Failed to book movie")
    }
  }

  useEffect(() => {
    getAvailableSlotData();
  }, [mData])

  useEffect(() => {
    fetchMovieData()
  }, [MoviesData, movieID])

  useEffect(() => {
    console.log(movSlot);
    // console.log("lenght of first element",movSlot[0].length)
  }, [movSlot])

  return mData && (
    <div>
      <div className='flex gap-3 justify-center w-[90%] mx-auto sm:flex-row flex-col'>

        <div className='sm:w-[30%] xl:min-w-90 lg:min-w-80 md:min-w-65 sm:min-w-50'>
          <img src={mData.img} alt="" />
        </div>

        <div className='flex flex-col grow gap-3 rounded-sm bg-gray-100 pl-3 pt-2 relative'>
          <p className='text-3xl'>{mData.name}</p>
          <p className='text-2xl'>{mData.part}</p>
          <p className='text-lg'>{mData.genre}</p>
          <p className='text-md'>{mData.about}</p>
          <div className='flex items-center text-gray-700'>
            <p className='font-semibold text-xl'>{mData.price}</p>
            <p>{currency}</p>
          </div>
          <p className='lg:absolute lg:top-0 right-0 pr-3 font-semibold mb-3'>{mData.duration}</p>
        </div>

      </div>

{/* Slots  */}
      <div className='flex flex-col items-baseline w-[90%] mx-auto mb-5'>
        <p className='text-3xl text-center font-semibold text-gray-600 my-3'>Booking Slots</p>
        <div className='flex gap-5 overflow-x-scroll w-[100%]'>
          {
            movSlot.length && movSlot.map((item, index) => (
              <div onClick={()=>setSlotIndex(index)} key={index} className={`flex flex-col min-w-15 items-center rounded-2xl p-3 text-white cursor-pointer ${movSlot[index].length === 0 ? 'hidden' : 'block'} ${slotIndex === index ?'bg-status' : 'bg-primary' }`}>
                <p>{item[0] && daysofWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex gap-5 my-3 overflow-x-scroll w-[100%]'>
          {movSlot.length && movSlot[slotIndex].map((item,index)=>(
            <p onClick={()=>{slotTime === null ? (setSlotTime(item.time)) : setSlotTime(null)}} key={index} className={`p-3 rounded-xl font-semibold text-gray-600 cursor-pointer min-w-25 text-center ${item.time === slotTime ? 'bg-status text-white' : 'bg-gray-200'} transition-all duration-200`}>
              {item.time.toUpperCase()}
            </p>
          ))}
        </div>
        <button onClick={bookMyMovie} className='px-2 py-1 mt-5 text-center border border-primary font-semibold hover:border-gray-700 bg-white text-primary rounded-lg text-xl hover:text-white hover:bg-gray-800 transition-all ease-in duration-100 cursor-pointer'>Book my Slot</button>
      </div>

      {/* Related Movies Section  */}
      <RelatedMovies id={movieID} genre={mData.genre}/>

    </div>
  )
}

export default Bookings