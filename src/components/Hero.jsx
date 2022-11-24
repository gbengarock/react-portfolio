import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div name='home' className='bg-[#090413] h-screen w-full'>
        <div className='text-gray-300 max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h3 className='text-3xl text-gray-400 leading-loose'>Hello, <span className='text-emerald-600'>I'm</span></h3>
            <h2 className='text-emerald-600 font-bold text-4xl sm:text-7xl'>Apo Olugbenga T.</h2>
            <h3 className='text-4xl sm:text-7xl leading-loose text-gray-400'>ReactJS developer</h3>
            <p className='my-10 text-2xl leading-loose text-gray-500'>I am skilled in phases of web development and UX designs</p>
            <div>
                <Link to='work' spy={true} smooth={true} offset={50} duration={500} className='my-2 border text-2xl text-emerald-600 px-6 py-2 border-white hover:bg-emerald-600 hover:text-gray-300 hover:border-none'>View Work</Link>
            </div>
            
        </div>
    </div>
  )
}

export default Hero