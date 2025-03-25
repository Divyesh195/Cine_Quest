import React, { useContext, useEffect } from 'react'
import { MovieContext } from '../../context/MovieContext'

function MovieProfile() {

  const { getProfileData, profile, dToken, currency } = useContext(MovieContext)
  useEffect(() => {
    if (dToken) {
      getProfileData()
    }
  }, [dToken])
  console.log("Profile Data:", profile)
  return (
    <div className='mt-5 mx-5'>
      <div className='sm:flex gap-3 bg-gray-100'>
        <img src={profile.img} alt="" className='sm:w-[35vw] md:w-[30vw] lg:w-[25vw]' />

        <div>
          <p className='text-3xl font-bold mb-2'>{profile.name}</p>
          { profile.part && <p className='text-3xl font-bold mb-2'>{profile.part}</p>}
          <p className='text-md font-semibold mb-5'>{profile.genre}</p>
          <p className='font-semibold text-lg mb-2'>{profile.duration}</p>
          <p className='text-gray-600 text-lg mb-2'>{profile.about}</p>
          <p className='flex items-center gap-1 bg-status px-1 py-[0.1rem] rounded-sm w-fit text-white'>{currency}{profile.price}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieProfile