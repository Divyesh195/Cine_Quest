import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router'
import { MdDashboard } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { FaCheckToSlot } from "react-icons/fa6";
import { HiMiniServerStack } from "react-icons/hi2";

function Sidebar() {

  const { aToken } = useContext(AdminContext)

  return (
    <div className='min-h-screen min-w-fit border-r-2 border-primary'>
      {
        aToken && <ul className='mt-5  flex flex-col gap-2 '>
          <NavLink to={'/admin-dashboard'} className={({ isActive }) => `transition-all duration-200 flex items-center gap-2 px-5 py-3 ${isActive ? 'bg-primary text-white ' : ''}`} >
            <MdDashboard />
            <p>Dashboard</p>
          </NavLink>

          <NavLink to={'/add-movie'} className={({ isActive }) => `transition-all duration-200 flex items-center gap-2 px-5 py-3 ${isActive ? 'bg-primary text-white' : ''}`}>
            <MdAddCircle />
            <p>Add Movie</p>
          </NavLink>

          <NavLink to={'/all-bookings'} className={({ isActive }) => `transition-all duration-200 flex items-center gap-2 px-5 py-3 ${isActive ? 'bg-primary text-white' : ''}`}>
            <FaCheckToSlot />
            <p>All Bookings</p>
          </NavLink>

          <NavLink to={'/all-movies'} className={({ isActive }) => `transition-all duration-200 flex items-center gap-2 px-5 py-3 ${isActive ? 'bg-primary text-white' : ''}`}>
            <HiMiniServerStack />
            <p>All Movies</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar