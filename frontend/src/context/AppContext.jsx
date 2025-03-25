import { createContext, useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import axios from 'axios'
import { toast } from 'react-toastify'

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = <FaRupeeSign />;

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [MoviesData, setMoviesData] = useState([]);

    const[customerData, setCustomerData] = useState(false);

    const[token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

    const getMoviesData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/movie/list')
            if (data.success) {
                setMoviesData(data.movies)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }

    const getCdata = async()=>{
        try {

            const {data} = await axios.get(backendUrl + '/api/customer/get-customer-data', {headers:{token}})
            if(data.success){
                setCustomerData(data.customerData)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }

    useEffect(()=>{
       if(token){
        getCdata()
       }else{
        setCustomerData(false)
       }
    },[token])

    useEffect(()=>{
        getMoviesData()
    },[])

    const value = {
        MoviesData, getMoviesData, currency, token, setToken, backendUrl, customerData, setCustomerData, getCdata
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>

    )

}

export default AppContextProvider