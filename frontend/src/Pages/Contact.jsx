import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
    return (
        <div className='pt-5 md:pt-10'>
            <div className='flex items-start justify-center lg:gap-10 gap-0 mt-5'>
                <div className=''>
                    <img src={assets.contactUs} alt="" className='w-[30vw] lg:block hidden rounded-xl' />
                </div>
                <div className='flex flex-col justify-baseline'>
                    <p className='text-3xl font-semibold text-gray-600 mb-10'>Your convenience is our priority</p>
                    <div className='flex flex-col mb-10'>
                        <p className='text-2xl text-gray-600'>Email</p>
                        <p className='text-lg'>query@cinequest.com</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-2xl text-gray-600'>Address</p>
                        <p className='text-lg'>CINE QUEST Multiplex, <br />101, Silver Plaza, Opp. City Mall, <br />Alkapuri, Vadodara - 390007, <br />Gujarat, India.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact