import React, { useState } from 'react'
import { assets } from '../assets/assets';
import { FaEdit } from "react-icons/fa";
import { IoSaveSharp } from "react-icons/io5";

function MyProfile() {


    const [userData, setUserData] = useState({
        name: "Divyesh Parmar",
        image: assets.profileIMG,
        email: "divyeshparmar0909@gmail.com",
        phone: "+91 9724331253",
        address: {
            line1: "D/412, Krushnadarshan Flat",
            line2: "Samiyala, Vadodara - 391410"
        },
        gender: "Male",
        dob: "2004-07-09",


    });
    const [isEdit, setIsEdit] = useState(false);
    return (
        <div>
            <div className='flex mb-5 items-baseline gap-2 sm:justify-start justify-center'>
                <p className='text-3xl text-gray-600 font-semibold  '>Your Profile</p>
                <div className='w-fit'>
                    {
                        isEdit
                            ? <button onClick={() => setIsEdit(false)} className='p-1 rounded-md text-center border-none bg-gray-200 border text-gray-800 text-xl hover:text-white hover:bg-primary transition-all ease-in duration-300 cursor-pointer'><IoSaveSharp /></button>
                            : <button onClick={() => setIsEdit(true)} className='p-1 rounded-md text-center border-none bg-gray-200 border text-gray-800 text-xl hover:text-white hover:bg-primary transition-all ease-in duration-300 cursor-pointer'><FaEdit /></button>
                    }
                </div>
            </div>
            <div className='flex sm:flex-row flex-col items-start sm:w-full w-fit mx-auto gap-15'>
                <div className='flex flex-col'>
                    <img src={userData.image} alt="" className='rounded-md min-w-80 sm:min-w-60 sm:w-70' />
                    {
                        isEdit
                            ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} className='mx-auto text-2xl mt-3 w-50 bg-purple-200 outline-none rounded-md' />
                            : <p className='text-center text-2xl mt-3'>{userData.name}</p>
                    }

                </div>

                <div className='flex flex-col gap-2'>

                    <div>
                        <p className='text-xl text-gray-600 font-semibold'>Gender</p>

                        {
                            isEdit
                                ? <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender} className=' text-lg bg-purple-200 outline-none rounded-md'>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Undefined">Undefined</option>
                                </select>
                                : <p className='text-lg'>{userData.gender}</p>
                        }
                    </div>

                    <div>
                        <p className='text-xl text-gray-600 font-semibold'>Date of Birth</p>

                        {
                            isEdit
                                ? <input type="date" value={userData.dob} onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))} className=' outline-gray-200 text-lg bg-purple-200 outline-none rounded-md ' />
                                : <p className='text-lg'>{userData.dob}</p>
                        }
                    </div>

                    <div>
                        <p className='text-xl text-gray-600 font-semibold'>Email</p>
                        <p className='text-lg  outline-white'>{userData.email}</p>
                    </div>

                    <div>
                        <p className='text-xl text-gray-600 font-semibold'>Mobile</p>

                        {
                            isEdit
                                ? <input type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} className=' outline-gray-200 text-lg bg-purple-200 outline-none rounded-md' />
                                : <p className='text-lg  outline-white'>{userData.phone}</p>
                        }
                    </div>

                    <div>
                        <p className='text-xl text-gray-600 font-semibold'>Address</p>

                        {
                            isEdit
                                ? <div>
                                    <input type="text" value={userData.address.line1} onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} className=' outline-gray-200 text-lg w-full bg-purple-200 outline-none rounded-md' />
                                    <br />
                                    <input type="text" value={userData.address.line2} onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} className=' outline-gray-200 text-lg w-full bg-purple-200 outline-none rounded-md' />
                                </div>
                                : <div>
                                    <p className='text-lg outline-1 outline-white'>{userData.address.line1}</p>
                                    <p className='text-lg outline-1 outline-white'>{userData.address.line2}</p>
                                </div>
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MyProfile