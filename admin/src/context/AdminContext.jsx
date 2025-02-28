import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { FaRupeeSign } from "react-icons/fa";


export const AdminContext = createContext()

const currency = <FaRupeeSign />;

const AdminContextProvider = (props) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '');

    const [movies, setMovies] = useState([])

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

    const backendURL = import.meta.env.VITE_BACKEND_URL

    const value = {
        aToken, setAToken, backendURL, getMoviesData, movies, currency, changeAV
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider