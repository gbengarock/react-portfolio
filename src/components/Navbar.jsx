import React, { useState } from 'react'
import {FaLinkedin, FaGithub, FaBars, FaTimes} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import Logo from '../assets/aotlogo.png';
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    function handleClick(){
        setNav(!nav)
    } 

  return (
    <div>
        <div className='fixed w-full h-[100px] items-center px-4 bg-[#090413] text-gray-300'>
            <div className='sm:w-[80%] flex items-center justify-between mx-auto'>
                <div className=''>
                    <img src={Logo} alt='Logo' style={{width: '250px'}} />
                </div>

                {/* menu */}
                <div>
                    <ul className='hidden md:flex'>
                        <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >
                            Home
                        </Link></li>
                        <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
                            About
                        </Link></li>
                        <li><Link activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} >
                            Skills
                        </Link></li>
                        <li><Link activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500} >
                            Work
                        </Link></li>
                        <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
                            Contact
                        </Link></li>
                    </ul>
                </div>

                {/* hamburger */}        
                <div onClick={handleClick} className='md:hidden z-10'>
                    {!nav ? <FaBars size={30} className='mb-6' /> : <FaTimes size={30} />}
                </div>

                {/* mobile view */}
                
                <ul className= {!nav ?'hidden' : 'absolute top-0 left-0 bg-emerald-800 h-screen text-gray-300 w-full justify-center flex flex-col items-center'}>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >
                            Home
                        </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >
                            About
                        </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="skills" spy={true} smooth={true} offset={50} duration={500} >
                            Skills
                        </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500} >
                            Work
                        </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} >
                            Contact
                        </Link></li>
                </ul>
            </div>
                        
        </div>
        
        {/* social media icon */}
        <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
            <ul>
                <li className='w-[160px] bg-blue-900 text-gray-300 h-[60px] items-center justify-between flex ml-[-110px] hover:ml-[-10px] duration-300'>
                    <a className='w-full justify-between flex' href='https://www.linkedin.com/in/olugbenga-temidayo-97377089'>LinkedIn <FaLinkedin size={30} /></a> 
                </li>
                <li className='w-[160px] bg-slate-800 text-gray-300 h-[60px] items-center justify-between flex ml-[-110px] hover:ml-[-10px] duration-300'>
                    <a className='w-full justify-between flex' href='https://github.com/gbengarock'>Github <FaGithub size={30} /></a> 
                </li>
                <li className='w-[160px] h-[60px] bg-blue-800 text-gray-300 items-center justify-between flex ml-[-110px] hover:ml-[-10px] duration-300'>
                    <a className='w-full justify-between flex' href='https://twitter.com/temidayo_capo'>Twitter <AiFillTwitterCircle size={30} /></a> 
                </li>
            </ul>
        
        </div>

    </div>
   
  )
}

export default Navbar