import React, { useContext } from 'react'
// import { MoviesData } from '../assets/assets'
import { useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext';

function TopMovies() {

  const navigate = useNavigate();

  const {MoviesData} = useContext(AppContext);

  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl text-center font-semibold text-gray-600'>Trending Movies</h1>
        <p className='text-xl text-center text-gray-600 mt-2'>Browse through our top picks</p>
        <div className='flex flex-wrap gap-10 justify-evenly mt-5'>

        {MoviesData.slice(0,10).map((item,index)=>(

          <div onClick={()=>{navigate(`/booking/${item._id}`); scrollTo(0,0)}} key={index} className='sm:w-70 w-80 bg-gray-100 flex flex-col items-start p-1 rounded-lg hover:translate-y-[-5px] transition-all duration-400 cursor-pointer'>
            <img src={item.img} alt="" className='grayscale-50 hover:grayscale-0 transition-all duration-200'/>
            <p className='pl-2 text-xl font-bold'>{item.name.toUpperCase()}</p>
            {/* <p className='pl-2 text-xl font-semibold'>{item.part}</p> */}
            <p className='pl-2 text-lg text-primary font-semibold'>{item.genre}</p>
            <p className='pl-2 text-md text-gray-700'>{item.duration}</p>
          </div>

          ))}

        </div>

        <button onClick={()=>{navigate('movies') , scrollTo(0,0)}} className='px-2 py-1 mt-5 text-center font-semibold border border-primary hover:border-gray-700 bg-white text-primary rounded-lg text-xl hover:text-white hover:bg-gray-800 transition-all ease-in duration-100 cursor-pointer'>More</button>
    </div>
  )
}

export default TopMovies