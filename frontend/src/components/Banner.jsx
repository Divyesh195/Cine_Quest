import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router'

function Banner() {

  const navigate =useNavigate();

  return (
    <div className='flex bg-primary rounded-lg px-6 lg:px-6 my-10 mx-2 sm:mx-10 md:mx-20'>

        {/* Left side  */}

        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-16 lg:pl-5'>
            <p className='text-2xl sm:text-3xl text-white font-semibold'> Get food at affordable prices. </p>
            <p className='text-xl sm:text-2xl text-white mt-2'> Meals and Drinks in wide range </p>
            <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='sm:p-3 p-2 sm:rounded-xl rounded-md mt-3 text-center font-semibold bg-white text-primary text-xl hover:text-white hover:bg-gray-700 transition-all ease-in duration-100 cursor-pointer'> Create Account </button>
        </div>

        {/* Right side  */} 

        <div className='hidden lg:block md:w-1/2 lg:w-[370px] relative'>
            <img src={assets.banner} alt="" className='w-full absolute bottom-0 right-0 max-w-md' />
        </div>

    </div>
  )
}

export default Banner