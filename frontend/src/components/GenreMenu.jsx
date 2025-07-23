import React from 'react'
import { Link, Links } from 'react-router'
import { genreData } from '../assets/assets'

function GenreMenu() {
  return (
    <div id='genre' className='flex flex-col items-center gap-3 py-16 text-gray-600 '>

      <h1 className='text-3xl font-medium'> Moives of your Interest </h1>

      <p className='text-xl text-center'> Select movies by genre and explore more here</p>

      <div className='flex flex-wrap gap-5 items-center justify-center w-full pt-5 overflow-scroll'>
        {genreData.map((item, index) =>
          <Link to={`/movies/${item.path}`} key={index} onClick={()=>scrollTo(0,0)}>

            <div className='flex flex-col shrink-0 items-center hover:translate-y-[-10px] transition-all duration-500'>
              <div className='p-5 bg-gray-300 rounded-full'>
                <img src={item.img} alt="" className='h-20' />
              </div>
              <p className='text-lg font-semibold'> {item.genre}</p>
            </div>
          </Link>

        )}
      </div>

    </div>
  )
}

export default GenreMenu