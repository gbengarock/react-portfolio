import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import Movie from '../assets/movie.png'
import Peg from '../assets/peg.png'

const Work = () => {
  return (
    <div name='work' className='bg-[#090413] h-screen w-full'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-emerald-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                <div style={{backgroundImage: `url(${Movie})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-110 duration-500 content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            ReactJS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://gbengarock-movie-app.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/gbengarock/movie-app'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Peg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-110 duration-500 content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl font-bold text-white tracking-wider'>
                            Python School Web Solution 
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://paceysoft.com/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/gbengarock/college-management-system'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WorkImg})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto hover:scale-110 duration-500 content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            NodeJS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work