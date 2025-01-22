import React from 'react'

import img from '../../assets/ProfilePhoto.jpg'

import './mainSection.css'

const MainSection = () => {
  return (
    <>
      <div className='bg-gradient-to-r from-slate-950 to-slate-800 min-h-screen flex flex-col text-white font-archivo'>
        {/* Navbar Section */}
        <div className='navbar-container animate-slideDown bg-opacity-0'>
          <div className='flex flex-row justify-between items-center m-8 md:m-16'>
            <div>
              <span className='text-2xl font-semibold text-transparent bg-clip-text bg-white'>
                <span className='bg-blue-600 text-transparent bg-clip-text text-4xl'>
                  Mern Stack
                </span>{' '}
                Developer
              </span>
            </div>
            <div className='hidden md:flex items-center space-x-5'>
              <h1 className='text-gray-300 hover:text-gray-100 cursor-pointer text-lg transition duration-300 ease-in-out'>
                My Projects
              </h1>
              <p className='text-gray-300 hover:text-gray-100 cursor-pointer text-lg transition duration-300 ease-in-out'>
                Reach me
              </p>
              <p className='text-gray-300 hover:text-gray-100 cursor-pointer text-lg transition duration-300 ease-in-out'>
                Tech Stacks
              </p>
            </div>
            <div>
              <button className='bg-white text-black text-sm p-2 rounded-full px-4 mr-8 md:mr-16 hover:bg-gray-200 transition duration-300 ease-in-out'>
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className='relative w-full overflow-hidden bg-gradient-to-r from-slate-950 to-slate-800 flex mt-32 justify-between px-5 md:px-16 pb-48  shadow-lg'>
          {/* Text Section */}
          <div className='text-white font-semibold text-lg md:text-2xl pl-[4vw]'>
            <h1 className='text-4xl leading-relaxed mb-4 slide-in-effect text-left text-blue-500'>
              Hi, I'm a MERN Stack Developer
            </h1>
            <p className='text-xl slide-in-effect max-w-[38vw] leading-loose text-left'>
              I specialize in developing scalable and efficient web applications
              with MongoDB, Express.js, React.js, and Node.js, aiming to deliver
              seamless and interactive user experiences.
            </p>
          </div>

          <div className='relative flex flex-col md:flex-row items-center justify-between w-full md:w-[55vw] h-auto md:h-1/2 bg-slate-900 shadow-realistic rounded-lg feather-effect yellow-div'>
            <img
              src={img}
              alt='Web Developer'
              className='w-[80%] md:w-1/3 h-auto object-cover rounded-r-[70%] shadow-2xl photo-animation '
            />

            <div className='text-center md:text-left px-4 md:px-8 w-full md:w-[60%] mt-6 md:mt-0'>
              <h1 className='text-3xl md:text-4xl font-bold text-white content-animation'>
                MIDHUN P M <br />
                <span className='text-xl md:text-2xl text-blue-600 font-light'>
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
