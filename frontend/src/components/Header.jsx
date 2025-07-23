import React from 'react'
import { assets } from '../assets/assets'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from 'react-router';

function Header() {

  const navigate = useNavigate();

  return (
    <>
      <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 py-5 md:py-0 2xl:px-10'>

        {/* Left side  */}
        
        <div className='md:w-1/2 w-[100%] flex flex-col items-start justify-center gap-4 m-auto pt-5 md:py-[10vw] md:mb-[-30px]'>
          <div className='text-3xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-white leading-tight md:leading-tight lg:leading-tight'>
            Book your tickets now <br />  Add amusement in boring life.
          </div>
          <div>
            <p className='font-semibold text-white text-2xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Avengers Endgame</p>
            <p className='text-white'>Available in 3D</p>
            <div className='px-3 py-1 mt-2 bg-white rounded-lg w-31 flex items-center gap-2 hover:w-32 font-semibold transition-all duration-300'>
              <p onClick={()=>navigate('/booking/67e0fac5c6182681baa0f922')} className='cursor-pointer' href='#genre'>Book Now</p>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>

        {/* Right side  */}

        <div className='md:w-1/2 relative'>
          <img src={assets.endgame_png} alt="" className='h-full md:absolute hidden md:block bottom-0 rounded-lg drop-shadow-2xl' />
        </div>
      </div>
    </>
  )
}

export default Header