import React from 'react'
import { assets } from '../assets/assets'

function About() {
    return (
        <div className='w-[95%] mx-auto'>
            <div className='flex 2xl:flex-row flex-col gap-5 mt-5'>
                <div className='flex-0'>
                    <img src={assets.aboutIMG} alt="" className='rounded-lg mr-10 2xl:min-w-160 md:min-w-100' />
                </div>
                <div className='flex flex-col flex-1 gap-5'>
                    <div className=''>
                        <p className='text-primary text-3xl'>10+ Years of successfull service</p>
                        <p className='text-lg'>Welcome to CINE Quest your ultimate destination for hassle-free movie ticket booking. We are dedicated to providing movie lovers with a seamless and enjoyable experience by offering an easy-to-use platform to browse, select, and book tickets for their favorite films at the best cinemas.</p>
                    </div>
                    <div className=''>
                        <p className='text-3xl text-gray-600'>Our MISSION</p>
                        <p className='text-lg'>Our mission is to revolutionize the way people watch movies by making the ticket booking process smooth, quick, and convenient. We aim to bring the magic of cinema to everyone by offering a user-friendly experience with secure transactions and real-time updates on movie schedules, seat availability, and special promotions.</p>
                    </div>
                </div>
            </div>


            <p className='text-3xl text-primary text-center mt-10'>Why choose us?</p>
            <div className='mt-5 flex flex-wrap justify-baseline'>
                <div className='min-w-80 py-8 px-5 border-1 border-gray-400 bg-gray-100 grow'>
                    <p className='text-xl font-semibold'>User friendly interface</p>
                    <p className='text-lg'>Simple and intuitive design for an effortless booking experience.</p>
                </div>
                <div className='min-w-80 py-8 px-5 border-1 border-gray-400 bg-gray-100 grow'>
                    <p className='text-xl font-semibold'>Fast and secure transactions</p>
                    <p className='text-lg'>We prioritize the security of your payments and personal data.</p>
                </div>
                <div className='min-w-80 py-8 px-5 border-1 border-gray-400 bg-gray-100 grow'>
                    <p className='text-xl font-semibold'>Best possible customer care</p>
                    <p className='text-lg'>A dedicated support team available to assist you with any queries or issues.</p>
                </div>
                <div className='min-w-80 py-8 px-5 border-1 border-gray-400 bg-gray-100 grow'>
                    <p className='text-xl font-semibold'>Movies enthusiast community</p>
                    <p className='text-lg'>Engage with fellow movie lovers, read reviews, and stay updated on the latest trends in cinema.</p>
                </div>
            </div>
        </div>
    )
}

export default About