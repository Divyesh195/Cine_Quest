import { createContext } from "react";
import { MoviesData } from '../assets/assets'
import { FaRupeeSign } from "react-icons/fa";

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currency = <FaRupeeSign />;

    const value = {
        MoviesData,currency
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>

    )

}

export default AppContextProvider