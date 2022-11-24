import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#090413]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='text-gray-300 justify-center grid grid-cols-2 gap-8 items-center max-w-[1000px] w-full'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='font-bold text-4xl inline border-b-4 border-emerald-600'>About</p>
                </div>
            </div>
            <div className='text-gray-300 justify-center grid sm:grid-cols-2 gap-8 items-center max-w-[1000px] w-full'>
                <div className='pb-8 pl-4'>
                    <p className='text-4xl'>Thanks for visiting. You are at the right place...Enjoy</p>
                </div>
                <div className='pb-8 pl-4'>
                    <p className='text-2xl'>Thanks for visiting. You are at the right place...Enjoy</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About