import React, { useContext, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { IoSaveSharp } from "react-icons/io5";
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

function MyProfile() {

    const {customerData, setCustomerData , token, backendUrl, getCdata} = useContext(AppContext)

    const[img,setImg] = useState(false);

    const [isEdit, setIsEdit] = useState(false);

    const updateCustomerProfileData = async ()=>{

        try {
            const formdata = new FormData();

            formdata.append('name', customerData.name)
            formdata.append('gender', customerData.gender)
            formdata.append('dob', customerData.dob)
            formdata.append('mobile', customerData.mobile)
            formdata.append('address', JSON.stringify(customerData.address))

            img && formdata.append('image', img)

            const {data} = await axios.post(backendUrl+'/api/customer/update-profile' , formdata, {headers : {token}})

            if(data.success){
                toast.success('Data Updated')
                getCdata()
                setImg(false)
                setIsEdit(false)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    
    return customerData &&  (
        <div>
            <div className='flex mb-5 items-baseline gap-2 sm:justify-start justify-center'>
                <p className='text-3xl text-gray-600 font-semibold  '>Your Profile</p>
                <div className='w-fit'>
                    {
                        isEdit
                            ? <button onClick={updateCustomerProfileData} className='p-1 rounded-md text-center border-none bg-gray-200 border text-gray-800 text-xl hover:text-white hover:bg-primary transition-all ease-in duration-300 cursor-pointer'><IoSaveSharp /></button>
                            : <button onClick={() => setIsEdit(true)} className='p-1 rounded-md text-center border-none bg-gray-200 border text-gray-800 text-xl hover:text-white hover:bg-primary transition-all ease-in duration-300 cursor-pointer'><FaEdit /></button>
                    }
                </div>
            </div>
            <div className='flex sm:flex-row flex-col items-start sm:w-full w-fit mx-auto gap-15'>
                <div className='flex flex-col'>
                {
                        isEdit
                            ? <label htmlFor="image">
                                <div>
                                    <img src={img ? URL.createObjectURL(img) : customerData.img} alt="" className='rounded-md object-cover min-w-80 min-h-80 sm:min-w-60 sm:min-h-60 sm:h-70 sm:w-60 ' />
                                    {/* <img src={img ? '': assets.default_user } alt="" className='rounded-md object-cover min-w-80 min-h-80 sm:min-w-60 sm:min-h-60 sm:h-70 sm:w-60 ' /> */}
                                </div>
                                <input onChange={(e)=>setImg(e.target.files[0])} type="file" id='image' className='mx-auto text-2xl mt-3 w-50 bg-purple-200 outline-none rounded-md hidden' />
                            </label>
                            
                            : <img src={customerData.img} alt="" className='rounded-md object-cover min-w-80 min-h-80 sm:min-w-60 sm:min-h-60 sm:h-70 sm:w-60 ' />
                    }
                    
                    {
                        isEdit
                            ? <input type="text" value={customerData.name} onChange={e => setCustomerData(prev => ({ ...prev, name: e.target.value }))} className='mx-auto text-2xl mt-3 w-50 bg-purple-200 outline-none rounded-md' />
                            : <p className='text-center text-2xl mt-3'>{customerData.name}</p>
                    }

                </div>

                <div className='flex flex-col gap-2'>

                    <div>
                        <p className='text-xl text-gray-600 font-semibold'>Gender</p>

                        {
                            isEdit
                                ? <select onChange={(e) => setCustomerData(prev => ({ ...prev, gender: e.target.value }))} value={customerData.gender} className=' text-lg bg-purple-200 outline-none rounded-md'>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Undefined">Undefined</option>
                                </select>
                                : <p className='text-lg'>{customerData.gender}</p>
                        }
                    </div>

                    <div>
                        <p className='text-xl text-gray-600 font-semibold'>Date of Birth</p>

                        {
                            isEdit
                                ? <input type="date" value={customerData.dob} onChange={e => setCustomerData(prev => ({ ...prev, dob: e.target.value }))} className=' outline-gray-200 text-lg bg-purple-200 outline-none rounded-md ' />
                                : <p className='text-lg'>{customerData.dob}</p>
                        }
                    </div>

                    <div>
                        <p className='text-xl text-gray-600 font-semibold'>Mobile</p>

                        {
                            isEdit
                                ? <input type="text" value={customerData.mobile} onChange={e => setCustomerData(prev => ({ ...prev, mobile: e.target.value }))} className=' outline-gray-200 text-lg bg-purple-200 outline-none rounded-md' />
                                : <p className='text-lg  outline-white'>{customerData.mobile}</p>
                        }
                    </div>

                    <div>
                        <p className='text-xl text-gray-600 font-semibold'>Address</p>

                        {
                            isEdit
                                ? <div>
                                    <input type="text" value={customerData.address.line1} onChange={e => setCustomerData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} className=' outline-gray-200 text-lg w-full bg-purple-200 outline-none rounded-md' />
                                    <br />
                                    <input type="text" value={customerData.address.line2} onChange={e => setCustomerData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} className=' outline-gray-200 text-lg w-full bg-purple-200 outline-none rounded-md' />
                                </div>
                                : <div>
                                    <p className='text-lg outline-1 outline-white'>{customerData.address.line1}</p>
                                    <p className='text-lg outline-1 outline-white'>{customerData.address.line2}</p>
                                </div>
                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default MyProfile