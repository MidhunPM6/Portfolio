import React, { useEffect, useRef, useState } from 'react'
import img from '../assets/ProfilePhoto.jpg'
import './mainSection.css'
import logo from '../assets/LogoMain.png'

import { NavHashLink } from 'react-router-hash-link'

const MainSection = () => {
  const resumeLink =
    'https://drive.google.com/file/d/14fceJ9xoqojjqE3gChdXJJQMfW4HJ1pm/view?usp=sharing'

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className='bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 min-h-screen flex flex-col text-white font-archivo'>
        <div className='navbar-container animate-slideDown bg-opacity-0 '>
          <div className='flex flex-row justify-between items-center m-8 md:m-16'>
            <div className='flex items-center'>
              <img src={logo} alt='' className='size-20' />
              <h1 className='text-3xl text-gray-500'>MIDHUN</h1>
              
            </div>

            <div className='hidden md:flex items-center space-x-5'>
              <NavHashLink
                to='#project'
                className='text-gray-300 hover:text-gray-100 cursor-pointer text-lg transition duration-300 ease-in-out'
                smooth
              >
                My Projects
              </NavHashLink>
              <NavHashLink
                to='#techstack'
                className='text-gray-300 hover:text-gray-100 cursor-pointer text-lg transition duration-300 ease-in-out'
                smooth
              >
                Tech Stacks
              </NavHashLink>
              <NavHashLink
                to='#reachme'
                className='text-gray-300 hover:text-gray-100 cursor-pointer text-lg transition duration-300 ease-in-out'
                smooth
              >
                Reach Me
              </NavHashLink>
            </div>
            <div>
              <button
                className='bg-white text-black text-sm p-2 rounded-full px-4 mr-8 md:mr-16 hover:bg-gray-200 transition duration-300 ease-in-out'
                onClick={() => (window.location.href = resumeLink)}
              >
                Download CV
              </button>
            </div>

            <div className='md:hidden flex items-center'>
              <button onClick={toggleMenu} className='text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-8 h-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>

            {isMenuOpen && (
              <div
                className='md:hidden absolute top-0 left-0 w-full bg-gray-800 bg-opacity-90 p-4 flex flex-col items-center space-y-4'
                ref={menuRef}
              >
                <NavHashLink
                  to='#project'
                  className='text-gray-300 hover:text-gray-100 cursor-pointer text-lg transition duration-300 ease-in-out'
                  smooth
                >
                  My Projects
                </NavHashLink>
                <NavHashLink
                  to='#techstack'
                  className='text-gray-300 hover:text-gray-100 cursor-pointer text-lg transition duration-300 ease-in-out'
                  smooth
                >
                  Tech Stacks
                </NavHashLink>
                <NavHashLink
                  to='#reachme'
                  className='text-gray-300 hover:text-gray-100 cursor-pointer text-lg transition duration-300 ease-in-out'
                  smooth
                >
                  Reach Me
                </NavHashLink>
                <button className='bg-white text-black text-sm p-2 rounded-full px-4 hover:bg-gray-200 transition duration-300 ease-in-out'>
                  Download CV
                </button>
              </div>
            )}
          </div>
        </div>

        <div className='  flex flex-col md:flex-row relative w-full overflow-hidden bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 mt-32 justify-between px-5 md:px-16 pb-48  shadow-lg'>
          <div className=' font-semibold text-lg md:text-2xl pl-[4vw]'>
            <h1 className='text-4xl leading-relaxed mb-4 slide-in-effect text-left text-lime-400'>
              Hi, I'm a MERN Stack Developer
            </h1>
            <p className='text-xl slide-in-effect max-w-prose md:max-w-[38vw] leading-loose text-left text-gray-300'>
              I specialize in developing scalable and efficient web applications
              with MongoDB, Express.js, React.js, and Node.js, aiming to deliver
              seamless and interactive user experiences.
            </p>
          </div>

          <div className='relative flex flex-col mt-10 md:mt-0 md:flex-row items-center justify-between w-full md:w-[55vw] h-auto md:h-1/2 bg-slate-900 shadow-realistic rounded-lg feather-effect yellow-div'>
            <img
              src={img}
              alt='Web Developer'
              className=' w-[50%] md:w-1/3 h-auto object-cover rounded-r-[70%] shadow-2xl photo-animation '
            />

            <div className='text-center md:text-left px-4 md:px-8 w-full md:w-[60%] mt-6 md:mt-0  md:mb-0'>
              <h1 className='text-3xl md:text-4xl font-bold text-gray-300 content-animation'>
                MIDHUN P M <br />
                <span className='text-xl md:text-2xl text-lime-400 font-light'>
                  Mern Stack Developer
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSection
