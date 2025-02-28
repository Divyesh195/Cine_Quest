import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

function AllMovies() {

  const { getMoviesData, aToken, movies, currency, changeAV } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getMoviesData()
      // console.log(movies)
    }
  }, [aToken])

  return (
    <div className='m-5'>
      <div className='flex gap-5 flex-wrap'>
        {
          movies.map((item, index) => (
            <div key={index} className='bg-gray-200 pb-1 min-w-60'>
              <img src={item.img} alt="" className='w-80 grayscale-50 hover:grayscale-0 transition-all duration-300 cursor-pointer' />
              <div className='flex items-center justify-between mt-2 '>
                <p className='text-2xl ml-2 font-semibold'>{item.name}</p>
                <div className='mr-2 flex items-center gap-1 bg-status text-white px-1 rounded-md'>
                  <p className='text-sm'>{currency}</p>
                  <p className='font-semibold text-md'>{item.price}</p>
                </div>
              </div>
              <p className='text-md ml-2 font-semibold'>{item.part}</p>
              
              <p className='text-md ml-2 text-primary font-bold'>{item.genre}</p>
              {
                item.part 
                ? <p></p>
                : <br/>
              }

              <div className='text-md ml-2 flex items-center gap-1'>
                <input onChange={()=>changeAV(item._id)} type="checkbox" checked={item.availability} />
                <p>Available</p>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AllMovies