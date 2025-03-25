import { createContext, useState } from "react";
import axios from 'axios';
import { FaRupeeSign } from "react-icons/fa";
import {toast} from 'react-toastify'

export const MovieContext = createContext()

const MovieContextProvider = (props) =>{

    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const currency = <FaRupeeSign />;

    const[dToken, setDToken] = useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '');

    const[bookings, setBookings] = useState([]);

    const[dashData, setDashData] = useState(false)

    const[profile, setProfile] = useState(false)

    const getBookingsData = async(req,res)=>{
        try {
            // console.log("Token:",dToken)
            const {data} =await axios.get(backendURL + '/api/movie/bookings' , {headers:{dToken}})

            // console.log("Data",data)

            if(data.success){
                setBookings(data.bookings.reverse())
                // console.log("Bookings data:",data.bookings)
            }else{
                toast.error("Failed to fetch bookings data")
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const cancelBooking = async(x)=>{
        try {

            console.log("Booking id from context",x)

            // const {bookingID} = req.body

            const {data} = await axios.post(backendURL + '/api/movie/cancel-booking' , {x} ,{headers :{dToken}})

            if(data.success){
                toast.success("Booking Cancelled")
                getBookingsData()
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const getDashData = async()=>{
        try {
            const {data} = await axios.get(backendURL + '/api/movie/distributor-dashboard' , {headers : {dToken}})
            if(data.success){
                setDashData(data.dashData)
            }else{
                toast.error("Failed to load data.")
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const getProfileData = async()=>{
        try {
            const {data} = await axios.get(backendURL + '/api/movie/get-profile', {headers : {dToken}})

            if(data.success){
                setProfile(data.movieData)
                // console.log("From context:",data.movieData)
            }else{
                console.log("Can't fetch data")
            }
            
        } catch (error) {
          console.log(erroe)  
        }
    }

    const value ={
        backendURL, dToken, setDToken, bookings, setBookings, getBookingsData, cancelBooking, getDashData, dashData, profile, getProfileData, currency
    }
    return (
        <MovieContext.Provider value={value}>
            {props.children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider