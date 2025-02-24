import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router';

const RelatedMovies = ({id, genre }) => {

    const { MoviesData } = useContext(AppContext);

    const navigate = useNavigate();

    const [relMov, setRelMov] = useState([]);

    useEffect(() => {
        // if (MoviesData.length > 0 && genre) {
            const mData = MoviesData.filter((x) => x.genre === genre && x._id !== id)
            setRelMov(mData);
            console.log(mData)
        // }
    }, [MoviesData, id, genre])

    return (
        <div className='flex flex-col w-[90%] mx-auto'>
            <h1 className='text-3xl text-center font-semibold text-gray-600'>Similar Movies</h1>
            <div className='flex flex-wrap justify-center lg:justify-normal gap-10 mt-5'>
                {relMov.map((item, index) => (
                    <div onClick={() => {navigate(`/booking/${item._id}`); scrollTo(0,0)}} key={index} className='sm:w-70 w-80 bg-gray-100 flex flex-col grow max-w-100 items-start p-1 rounded-lg hover:translate-y-[-5px] transition-all duration-400 cursor-pointer'>
                        <img src={item.img} alt="" className='grayscale-50 hover:grayscale-0 transition-all duration-200' />
                        <p className='pl-2 text-xl font-bold'>{item.name.toUpperCase()}</p>
                        {/* <p className='pl-2 text-xl font-semibold'>{item.part}</p> */}
                        <p className='pl-2 text-lg text-primary font-semibold'>{item.genre}</p>
                        <p className='pl-2 text-md text-gray-700'>{item.duration}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default RelatedMovies 