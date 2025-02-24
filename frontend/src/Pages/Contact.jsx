import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
    return (
        <div>
            <p className='text-3xl text-gray-600 text-center mt-5'>CONTACT <span className='text-primary'> US</span></p>
            <div className='flex lg:flex-row flex-col lg:items-center justify-around lg:gap-10 gap-0 mt-5'>
                <div className=''>
                    <img src={assets.contactUs} alt="" className='max-w-200 w-[100%] lg:w-[auto] xl:max-w-170 lg:max-w-120 lg:block hidden rounded-xl' />
                </div>
                <div className='flex flex-col justify-baseline'>
                    <p className='text-3xl font-semibold text-gray-600'>Your convenience is our priority</p>
                    <div className='flex flex-col lg:py-10 py-5'>
                        <p className='text-2xl font-semibold text-gray-600'>Email</p>
                        <p className='text-lg'>query@cinequest.com</p>
                    </div>
                    <div className='flex flex-col lg:py-10 py-5'>
                        <p className='text-2xl font-semibold text-gray-600'>Address</p>
                        <p className='text-lg'>CINE QUEST Multiplex, <br />101, Silver Plaza, Opp. City Mall, <br />Alkapuri, Vadodara - 390007, <br />Gujarat, India.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact