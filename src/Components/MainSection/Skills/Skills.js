import React, { useEffect, useRef } from 'react'
import bootstrap from '../../../assets/bootstrap.png'
import css from '../../../assets/css.png'
import expressjs from '../../../assets/expressjs.png'
import firebase from '../../../assets/firebase.png'
import git from '../../../assets/git.png'
import html from '../../../assets/html.png'
import javascript from '../../../assets/javascript.png'
import mongodb from '../../../assets/mongodb.png'
import nodejs from '../../../assets/nodejs.png'
import postman from '../../../assets/postman.png'
import reactjs from '../../../assets/reactjs.png'
import tailwind from '../../../assets/tailwind.png'

const Skills = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current

    if (scrollContainer) {
      let scrollAmount = 0
      const scrollStep = 2
      const scrollInterval = 30
      const maxScroll =
        scrollContainer.scrollWidth - scrollContainer.clientWidth

      const smoothScroll = () => {
        scrollAmount += scrollStep

        if (scrollAmount > maxScroll) {
          scrollAmount = 0
        }

        requestAnimationFrame(smoothScroll)
      }

      const interval = setInterval(() => {
        scrollAmount += scrollStep
        scrollContainer.scrollLeft = scrollAmount

        if (scrollAmount > maxScroll) {
          scrollAmount = 0
        }
      }, scrollInterval)

      return () => clearInterval(interval)
    }
  }, [])
  return (
    <>
      <div className='flex flex-col bg-gradient-to-r from-slate-950 to-slate-800 min-h-screen text-white items-center font-archivo'>
        <div className='mt-10'>
          <h1 className='text-2xl font-semibold'>Expertise</h1>
        </div>
        <div
          className='flex md:overflow-x-auto pl-7 max-w-[100vw]  no-scrollbar p-16 '
          ref={scrollRef}
        >
          <img
            src={javascript}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44 hover:scale-105'
          />
          <img
            src={nodejs}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44 hover:scale-105'
          />
          <img
            src={expressjs}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44 hover:scale-105'
          />
          <img
            src={mongodb}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44 hover:scale-105'
          />
          <img
            src={firebase}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44  hover:scale-105 '
          />
          <img
            src={reactjs}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44 hover:scale-105'
          />
          <img
            src={html}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44 hover:scale-105'
          />
          <img
            src={css}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44 hover:scale-105'
          />
          <img
            src={tailwind}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44 hover:scale-105'
          />
          <img
            src={bootstrap}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44 hover:scale-105'
          />
          <img
            src={git}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44 hover:scale-105'
          />
          <img
            src={postman}
            alt=''
            className='mr-4 rounded-2xl shadow-2xl shadow-blue-950 w-44 hover:scale-105'
          />
        </div>
        <div className='max-w-[90vw] text-gray-400 border border-blue-700 p-8 rounded-lg shadow-2xl shadow-blue-900  hover:text-gray-300 hover:shadow-blue-800 mt-16 hover:scale-[101%]'>
          <p className='text-xl leading-relaxed '>
            {' '}
            My frontend skills include creating modern interfaces with React.js,
            styled using Tailwind CSS and Bootstrap, ensuring seamless user
            experiences. On the backend, I excel in developing efficient RESTful
            APIs with Node.js and Express.js, integrating and testing them with
            tools like Postman. Additionally, I have a strong command of MongoDB
            for designing scalable databases and implementing robust data
            handling. With a solid foundation in JavaScript, HTML, and CSS, I
            deliver full-stack solutions that are both functional and visually
            appealing.
          </p>
        </div>
      </div>
    </>
  )
}

export default Skills
