import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';

function Navbar() {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [profileMenu, setProfileMenu] = useState(false)
    const { token, setToken, customerData } = useContext(AppContext)

    const profileMenuToggle = () =>{
        if(profileMenu){
            setProfileMenu(false)
        }else(
            setProfileMenu(true)
        )
    }

    const logOut = () => {
        if (token) {
            setToken('')
            toast.success("Logged Out")
            localStorage.removeItem('token')
            navigate('/')
        }
    }

    return (
        <nav className='flex items-center justify-between py-4 mb-5 border-b border-b-gray-500'>
            <img onClick={() => navigate('/')} src={assets.logo} alt="" className='h-15 cursor-pointer' />
            <ul className='hidden md:flex items-start gap-5 font-bold text-xl'>
                <NavLink to='/'>
                    <li>
                        Home
                    </li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/movies'>
                    <li>
                        All Movies
                    </li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='about' >
                    <li>
                        About
                    </li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-4/5 m-auto hidden' />
                </NavLink>
                <NavLink to='contact' >
                    <li>
                        Contact Us
                    </li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-3'>
                {
                    token
                        ? <div className='flex gap-2 items-center group relative'>
                            <img src={customerData.img} onClick={profileMenuToggle} alt="" className='w-10 h-10 rounded-full cursor-pointer object-cover overflow-hidden' />
                            <div className={`absolute top-0 right-0 mt-10 text-gray-700 font-semibold z-20 ${profileMenu ? "block" : "hidden"}`}>
                                <div className='min-w-33 flex flex-col gap-2 bg-gray-100 border border-gray-200 rounded-sm'>
                                    <p onClick={() => navigate('my-profile')} className='cursor-pointer hover:text-black hover:bg-white px-3 py-1'>My Profile</p>
                                    <p onClick={() => navigate('my-bookings')} className='cursor-pointer hover:text-black hover:bg-white  px-3 py-1'>My Bookings</p>
                                    <p onClick={logOut} className='cursor-pointer hover:text-black hover:bg-white  px-3 py-1'>Log out</p>
                                </div>
                            </div>
                        </div>
                        : <button onClick={() => navigate('/login')} className='bg-primary py-3 px-5 text-white rounded-xl hidden md:block hover:text-white hover:bg-gray-800 transition-all ease-in duration-100 cursor-pointer'>Create Account</button>
                }
                <div onClick={() => setShowMenu(true)} className='md:hidden'><FaBars /></div>

                <div className={` ${showMenu === true ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-600`}>

                    <div className='flex justify-between items-center mt-4 mx-3'>
                        <img src={assets.logo} alt="" className='h-15' />
                        <div className='mr-3 text-3xl font-bold' onClick={() => setShowMenu(false)}>
                            <IoMdClose />
                        </div>
                    </div>

                    <ul className='flex flex-col text-center gap-2 text-xl'>
                        <NavLink to='/' onClick={() => setShowMenu(false)} ><p className="py-2 bg-gray-200 w-[96%] mx-auto">Home</p></NavLink>

                        <NavLink to='/movies' onClick={() => setShowMenu(false)} ><p className="py-2 bg-gray-200 w-[96%] mx-auto">All Movies</p></NavLink>

                        <NavLink to='about' onClick={() => setShowMenu(false)} ><p className="py-2 bg-gray-200 w-[96%] mx-auto">About</p></NavLink>

                        <NavLink to='contact' onClick={() => setShowMenu(false)} ><p className="py-2 bg-gray-200 w-[96%] mx-auto">Contact Us</p></NavLink>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar