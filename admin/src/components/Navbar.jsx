import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router'
import { AdminContext } from '../context/AdminContext';

function Navbar() {

    const navigate = useNavigate();

    const{aToken , setAToken} = useContext(AdminContext);

    const logout = ()=>{
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        navigate('/')
    }

    return (
        <nav className='flex items-center bg-primary justify-between py-4 px-3 border-b border-b-gray-500'>
            <img onClick={() => navigate('/')} src={assets.logo} alt="" className='h-15 cursor-pointer invert' />
            <p className='text-white text-3xl'>Admin Panel</p>
            <button onClick={()=>logout()} className='text-primary bg-white text-xl py-1 px-3 rounded-sm hover:text-white hover:bg-gray-800 transition-all ease-in duration-200 cursor-pointer'>Log out</button>

        </nav>
    )
}

export default Navbar