import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { FaRupeeSign } from "react-icons/fa";


export const AdminContext = createContext()

const currency = <FaRupeeSign />;


const AdminContextProvider = (props) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '');

    const [movies, setMovies] = useState([])

    const [bookings, setBookings] = useState([])

    const [dashData , setDashData] = useState(false);

    const getMoviesData = async () => {
        try {
            const { data } = await axios.post(backendURL + '/api/admin/all-movies', {}, { headers: {aToken} })

            if (data.success) {
                console.log(data.movies)
                setMovies(data.movies)
            }
            else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log("Error from admin context",error);
            // res.json({ success: false, message: "Failed to load movies data(Admin Context)" })
        }
    }

    const changeAV = async (movId) =>{
        try {
            const {data} = await axios.post(backendURL + '/api/admin/change-av' , {movId}, {headers:{aToken}});
            if(data.success){
                toast.success(data.message)
                getMoviesData()
            }else{
                console.log(data.message)
            }
        } catch (error) {
            toast.error("Can't change (Admin Contetx)")
        }
    }

    const getAllBookings = async()=>{
        try {
            const {data} =await axios.get(backendURL + '/api/admin/bookings', {headers : {aToken}})
            if(data.success){
                setBookings(data.bookings)
                // console.log(data.bookings)
            }else{
                console.log("Data success : false")
                toast.error("Data success : false")
            }
        } catch (error) {
            toast.error("Can't fetch bookings (Admin Contetx)")
        }
    }

    const getDashData = async ()=>{
        try {

            const {data} = await axios.get(backendURL + '/api/admin/dashboard' , {headers : {aToken}})

            if(data.success){
                setDashData(data.dashboardData)
                console.log(data.dashboardData)
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
            toast.error("Can't fetch bookings (Admin Contetx)")
        }
    }

    const backendURL = import.meta.env.VITE_BACKEND_URL

    const value = {
        aToken, setAToken, backendURL, getMoviesData, movies, currency, changeAV, bookings, setBookings, getAllBookings, getMoviesData , dashData , getDashData
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider