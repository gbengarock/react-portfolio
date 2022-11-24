import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#090413] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/f3fc1e76-d936-409a-be62-21ed74ddfc74' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-emerald-600'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form or shoot me an email - temidayoolugbenga@yahoo.com</p>
            </div>

            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder="Let's talk about your next project" />
            <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-emerald-600 hover:border-none'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact