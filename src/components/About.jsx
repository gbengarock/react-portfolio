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
                    <p className='text-4xl'>I'm a dedicated React.js developer with a passion for building interactive and user-friendly web applications. This is where I demonstrate my expertise and share the projects that define my journey in the world of web development.</p>
                </div>
                <div className='pb-8 pl-4'>
                    <p className='text-2xl'>My motivation goes beyond writing clean and efficient code. It's about solving problems, improving user experiences, and staying up-to-date with the latest web technologies. I'm committed to delivering top-notch solutions.</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default About