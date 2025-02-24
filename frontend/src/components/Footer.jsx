import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router'

function Footer() {
const navigate = useNavigate();
    return (
        <div>
            <footer className="rounded-lg">
                <div className="w-full max-w-screen-xl mx-auto mt-10 p-1 md:py-8">
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8 md:hidden " />

                    <div className="flex sm:items-center sm:justify-between justify-around gap-5">
                        <a href="https://flowbite.com/" className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <img src={assets.logo} className="h-12 min-w-20" alt="" />
                        </a>
                        <ul className="flex flex-wrap items-center text-lg text-gray-600 font-semibold sm:mb-0">
                            <li className='cursor-pointer' onClick={()=>navigate('/about')}>
                                <p className="hover:underline me-3 md:me-6">About</p>
                            </li>
                            <li className='cursor-pointer'>
                                <p  className="hover:underline me-3 md:me-6">Privacy Policy</p>
                            </li>
                            <li className='cursor-pointer'>
                                <p  className="hover:underline me-3 md:me-6">Licensing</p>
                            </li >
                            <li className='cursor-pointer'>
                                <p  className="hover:underline">Contact</p>
                            </li>
                        </ul>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="/">CINE-QUEST™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    )
}

export default Footer